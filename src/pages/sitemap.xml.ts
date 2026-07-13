import { guides } from "../data/guides";
import { videos } from "../data/videos";
import { absoluteUrl } from "../data/site";

const staticPaths = [
  "/",
  "/palworld-1-0/",
  "/guides/",
  "/videos/",
  "/server/",
  "/base-building/",
  "/faq/",
  "/about/",
  "/disclaimer/",
];

const xmlEscape = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const isoDate = (value: string) => new Date(value).toISOString().slice(0, 10);

export function GET() {
  const urls = [
    ...staticPaths.map((path) => ({ path, lastmod: "2026-07-13" })),
    ...guides
      .filter((guide) => !guide.canonical || guide.canonical === `/${guide.slug}/`)
      .map((guide) => ({ path: `/${guide.slug}/`, lastmod: isoDate(guide.lastUpdated) })),
    ...videos.map((video) => ({ path: `/videos/${video.slug}/`, lastmod: video.uploadDate.slice(0, 10) })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>${xmlEscape(absoluteUrl(path))}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
