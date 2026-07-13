import { absoluteUrl } from "../data/site";
import { videos } from "../data/videos";

const xmlEscape = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos.map((video) => `  <url>
    <loc>${xmlEscape(absoluteUrl(`/videos/${video.slug}/`))}</loc>
    <video:video>
      <video:thumbnail_loc>${xmlEscape(absoluteUrl(video.thumbnail))}</video:thumbnail_loc>
      <video:title>${xmlEscape(video.title)}</video:title>
      <video:description>${xmlEscape(video.description)}</video:description>
      <video:content_loc>${xmlEscape(absoluteUrl(video.streamUrl))}</video:content_loc>
      <video:duration>${video.durationSeconds}</video:duration>
      <video:publication_date>${xmlEscape(video.uploadDate)}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
