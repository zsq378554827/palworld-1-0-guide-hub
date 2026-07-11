import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "public", "assets");
mkdirSync(outDir, { recursive: true });

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, checksum]);
}

function blend(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function lerpColor(a, b, t) {
  return [blend(a[0], b[0], t), blend(a[1], b[1], t), blend(a[2], b[2], t)];
}

function setPixel(data, width, x, y, color) {
  if (x < 0 || y < 0 || x >= width) return;
  const index = (y * width + x) * 4;
  if (index < 0 || index >= data.length) return;
  data[index] = color[0];
  data[index + 1] = color[1];
  data[index + 2] = color[2];
  data[index + 3] = color[3] ?? 255;
}

function drawCircle(data, width, height, cx, cy, radius, color) {
  const r2 = radius * radius;
  for (let y = Math.max(0, Math.floor(cy - radius)); y < Math.min(height, Math.ceil(cy + radius)); y += 1) {
    for (let x = Math.max(0, Math.floor(cx - radius)); x < Math.min(width, Math.ceil(cx + radius)); x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= r2) setPixel(data, width, x, y, color);
    }
  }
}

function drawLine(data, width, height, x0, y0, x1, y1, color, thickness = 2) {
  const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
  for (let i = 0; i <= steps; i += 1) {
    const t = steps === 0 ? 0 : i / steps;
    const x = Math.round(x0 + (x1 - x0) * t);
    const y = Math.round(y0 + (y1 - y0) * t);
    drawCircle(data, width, height, x, y, thickness, color);
  }
}

function drawRect(data, width, height, x0, y0, x1, y1, color) {
  for (let y = Math.max(0, y0); y < Math.min(height, y1); y += 1) {
    for (let x = Math.max(0, x0); x < Math.min(width, x1); x += 1) {
      setPixel(data, width, x, y, color);
    }
  }
}

function drawImage(width, height, fileName) {
  const pixels = Buffer.alloc(width * height * 4);
  const top = [7, 16, 30];
  const mid = [13, 44, 58];
  const bottom = [10, 72, 64];

  for (let y = 0; y < height; y += 1) {
    const vertical = y / Math.max(1, height - 1);
    const base = vertical < 0.62
      ? lerpColor(top, mid, vertical / 0.62)
      : lerpColor(mid, bottom, (vertical - 0.62) / 0.38);
    for (let x = 0; x < width; x += 1) {
      const glow = Math.max(0, 1 - Math.hypot((x - width * 0.75) / width, (y - height * 0.38) / height) * 2.8);
      const haze = Math.max(0, 1 - Math.hypot((x - width * 0.2) / width, (y - height * 0.72) / height) * 3.4);
      setPixel(pixels, width, x, y, [
        Math.min(255, base[0] + glow * 28 + haze * 12),
        Math.min(255, base[1] + glow * 38 + haze * 30),
        Math.min(255, base[2] + glow * 24 + haze * 18),
        255,
      ]);
    }
  }

  const stars = [
    [0.12, 0.16, 2], [0.19, 0.28, 1], [0.28, 0.12, 2], [0.42, 0.2, 1],
    [0.55, 0.1, 2], [0.68, 0.19, 1], [0.78, 0.12, 2], [0.9, 0.25, 1],
  ];
  for (const [x, y, r] of stars) drawCircle(pixels, width, height, x * width, y * height, r * Math.max(1, width / 1200), [181, 235, 222, 230]);

  const islandY = Math.floor(height * 0.73);
  drawCircle(pixels, width, height, width * 0.5, islandY + height * 0.18, width * 0.45, [21, 42, 39, 255]);
  drawCircle(pixels, width, height, width * 0.18, islandY + height * 0.08, width * 0.15, [27, 58, 48, 255]);
  drawCircle(pixels, width, height, width * 0.75, islandY + height * 0.11, width * 0.24, [25, 54, 46, 255]);

  const treeBaseX = width * 0.72;
  const treeBaseY = height * 0.75;
  drawLine(pixels, width, height, treeBaseX, treeBaseY, treeBaseX + width * 0.01, height * 0.23, [17, 33, 30, 255], Math.max(4, width * 0.006));
  drawLine(pixels, width, height, treeBaseX, height * 0.36, treeBaseX - width * 0.1, height * 0.3, [18, 40, 35, 255], Math.max(2, width * 0.003));
  drawLine(pixels, width, height, treeBaseX, height * 0.42, treeBaseX + width * 0.12, height * 0.33, [18, 40, 35, 255], Math.max(2, width * 0.003));
  drawCircle(pixels, width, height, treeBaseX, height * 0.25, width * 0.055, [42, 122, 92, 240]);
  drawCircle(pixels, width, height, treeBaseX - width * 0.05, height * 0.31, width * 0.06, [33, 98, 82, 238]);
  drawCircle(pixels, width, height, treeBaseX + width * 0.055, height * 0.32, width * 0.065, [38, 112, 86, 238]);

  const mapColor = [230, 202, 132, 180];
  drawLine(pixels, width, height, width * 0.15, height * 0.68, width * 0.35, height * 0.58, mapColor, Math.max(2, width * 0.002));
  drawLine(pixels, width, height, width * 0.35, height * 0.58, width * 0.52, height * 0.66, mapColor, Math.max(2, width * 0.002));
  drawLine(pixels, width, height, width * 0.52, height * 0.66, width * 0.68, height * 0.54, mapColor, Math.max(2, width * 0.002));
  drawCircle(pixels, width, height, width * 0.15, height * 0.68, width * 0.012, [248, 210, 112, 235]);
  drawCircle(pixels, width, height, width * 0.35, height * 0.58, width * 0.01, [248, 210, 112, 235]);
  drawCircle(pixels, width, height, width * 0.52, height * 0.66, width * 0.01, [248, 210, 112, 235]);
  drawCircle(pixels, width, height, width * 0.68, height * 0.54, width * 0.012, [248, 210, 112, 235]);

  drawRect(pixels, width, height, Math.floor(width * 0.08), Math.floor(height * 0.79), Math.floor(width * 0.92), Math.floor(height * 0.81), [74, 196, 174, 120]);

  const scanlines = Math.max(3, Math.floor(height / 170));
  for (let y = 0; y < height; y += scanlines * 2) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      pixels[index] = Math.max(0, pixels[index] - 5);
      pixels[index + 1] = Math.max(0, pixels[index + 1] - 5);
      pixels[index + 2] = Math.max(0, pixels[index + 2] - 5);
    }
  }

  const rawRows = [];
  for (let y = 0; y < height; y += 1) {
    rawRows.push(Buffer.from([0]));
    rawRows.push(pixels.subarray(y * width * 4, (y + 1) * width * 4));
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  header[10] = 0;
  header[11] = 0;
  header[12] = 0;

  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(Buffer.concat(rawRows), { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);

  writeFileSync(join(outDir, fileName), png);
}

drawImage(1600, 900, "palworld-guide-hero.png");
drawImage(1200, 630, "palworld-guide-og.png");

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

async function writeGraphic(fileName, title, subtitle, cards, footer) {
  const width = 1440;
  const height = 810;
  const columns = cards.length <= 4 ? 2 : 3;
  const cardWidth = columns === 2 ? 590 : 380;
  const cardHeight = cards.length <= 4 ? 178 : 150;
  const startX = columns === 2 ? 110 : 90;
  const gapX = columns === 2 ? 40 : 60;
  const startY = 245;
  const gapY = 28;
  const cardSvg = cards.map((card, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);
    return `<g>
      <rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="20" fill="#102b3b" stroke="#35c9b5" stroke-opacity=".55"/>
      <circle cx="${x + 44}" cy="${y + 46}" r="18" fill="#f5c766"/>
      <text x="${x + 78}" y="${y + 52}" fill="#eef7f4" font-size="28" font-weight="800">${escapeXml(card.title)}</text>
      <text x="${x + 34}" y="${y + 102}" fill="#b8d2ce" font-size="21">${escapeXml(card.line1)}</text>
      ${card.line2 ? `<text x="${x + 34}" y="${y + 134}" fill="#b8d2ce" font-size="21">${escapeXml(card.line2)}</text>` : ""}
    </g>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071522"/><stop offset="1" stop-color="#123b3b"/></linearGradient></defs>
    <rect width="1440" height="810" fill="url(#bg)"/>
    <path d="M0 160 C300 220 530 85 800 145 S1180 220 1440 105" fill="none" stroke="#35c9b5" stroke-opacity=".18" stroke-width="3"/>
    <text x="90" y="92" fill="#f5c766" font-size="24" font-weight="800" letter-spacing="3">UNOFFICIAL PLAYER GUIDE</text>
    <text x="90" y="152" fill="#eef7f4" font-size="48" font-weight="900">${escapeXml(title)}</text>
    <text x="90" y="196" fill="#b8d2ce" font-size="24">${escapeXml(subtitle)}</text>
    ${cardSvg}
    <text x="90" y="765" fill="#8eb2ad" font-size="21">${escapeXml(footer)}</text>
  </svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 86 }).toFile(join(outDir, fileName));
}

await writeGraphic(
  "palworld-1-0-update-categories-infographic.webp",
  "Palworld 1.0 Update Categories",
  "Official changelog coverage, organized for practical follow-up",
  [
    { title: "World", line1: "Sunreach, World Tree, islands", line2: "settlements and exploration" },
    { title: "Pals", line1: "47 new Pals + 25 variants", line2: "Awakening, Mutation and skills" },
    { title: "Combat", line1: "Movement, equipment and bosses", line2: "require build rechecking" },
    { title: "Bases", line1: "Aquatic building and work", line2: "wave raids and defenses" },
    { title: "Multiplayer", line1: "Servers, guilds, chat and saves", line2: "need workload testing" },
    { title: "Quality", line1: "UI, performance and bug fixes", line2: "results vary by system" },
  ],
  "Confirmed categories are official; best routes, builds and settings still need in-game verification.",
);

await writeGraphic(
  "palworld-1-0-new-pals-data-card.webp",
  "Palworld 1.0 Pal Roster Totals",
  "Official totals without unverified character art or spawn claims",
  [
    { title: "47", line1: "New Pals", line2: "confirmed in v1.0" },
    { title: "25", line1: "Variant Pals", line2: "confirmed in v1.0" },
    { title: "72", line1: "Total additions", line2: "new + variants" },
    { title: "287", line1: "Total Pals", line2: "official roster total" },
  ],
  "Names, types, regions, roles and rankings remain pending player verification unless officially documented.",
);

await writeGraphic(
  "palworld-1-0-mod-cleanup-flowchart.webp",
  "Palworld 1.0 MOD Cleanup Flow",
  "Use a backup copy and restore creator-confirmed MODs one at a time",
  [
    { title: "1. Back up", line1: "Save, world and MOD list", line2: "outside the active folder" },
    { title: "2. Remove", line1: "Old files and loaders", line2: "manual cleanup matters" },
    { title: "3. Verify", line1: "Unsubscribe and verify files", line2: "then launch unmodded" },
    { title: "4. Restore", line1: "Creator-confirmed MODs only", line2: "test one at a time" },
  ],
  "A disabled MOD may still leave active files; compatibility always needs in-game verification.",
);

await writeGraphic(
  "palworld-1-0-server-update-checklist.webp",
  "Palworld 1.0 Server Update Checklist",
  "A controlled sequence for protecting persistent worlds",
  [
    { title: "Before", line1: "Stop cleanly and back up", line2: "record config and MODs" },
    { title: "Update", line1: "Remove unsupported MODs", line2: "match server and clients" },
    { title: "Test", line1: "Join, save, restart, reconnect", line2: "check bases and permissions" },
    { title: "Reopen", line1: "Publish world and rollback rules", line2: "monitor official hotfixes" },
  ],
  "Optimization does not prove safe capacity; test the real host and world under expected load.",
);

await writeGraphic(
  "palworld-1-0-first-hour-timeline.webp",
  "Palworld 1.0 First Hour",
  "Learn the release build before optimizing permanent choices",
  [
    { title: "0–10 min", line1: "Mission, controls and basics", line2: "learn revised capture flow" },
    { title: "10–30 min", line1: "Flexible starter base", line2: "inspect Pal work and storage" },
    { title: "30–60 min", line1: "Progression and persistence", line2: "avoid unverified tier lists" },
  ],
  "Exact timing, routes, starter Pals and permanent base choices depend on the world and need testing.",
);

console.log("Generated fan-made visual assets in public/assets.");
