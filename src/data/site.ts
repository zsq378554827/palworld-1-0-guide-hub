export const site = {
  name: "Palworld 1.0 Guide Hub",
  shortName: "Palworld 1.0",
  url: (import.meta.env.PUBLIC_SITE_URL || "https://palworld-1-0-guide-hub.pages.dev").replace(/\/$/, ""),
  description:
    "Updated English guides for Palworld Version 1.0, including beginner tips, returning player prep, server setup, base building, new Pals, World Tree, and FAQ.",
  defaultImage: "/assets/palworld-guide-og.png",
  heroImage: "/assets/palworld-guide-hero.png",
  disclaimer:
    "This is an unofficial fan-made guide site. Palworld, game names, trademarks, images, and logos belong to their respective owners. This site is not affiliated with or endorsed by Pocketpair.",
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonicalPath(path = "/") {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return absoluteUrl(normalized);
}

