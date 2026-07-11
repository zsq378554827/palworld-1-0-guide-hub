import { guides } from "../data/guides";
import { absoluteUrl } from "../data/site";

const staticPaths = [
  "/",
  "/palworld-1-0/",
  "/guides/",
  "/server/",
  "/base-building/",
  "/faq/",
  "/about/",
  "/disclaimer/",
];

export function GET() {
  const urls = [
    ...staticPaths,
    ...guides
      .filter((guide) => !guide.canonical || guide.canonical === `/${guide.slug}/`)
      .map((guide) => `/${guide.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
