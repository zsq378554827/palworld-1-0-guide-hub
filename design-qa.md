# Homepage Video-Hub Layout QA

Date: 2026-07-13

## Visual source

- User reference: `/Users/zousunquan/Downloads/已生成图像 1 (1).png`
- Local implementation: `http://127.0.0.1:4321/`
- Desktop implementation: `reviews/homepage-worker-video-desktop.png`
- Side-by-side comparison: `reviews/homepage-reference-comparison.png`
- Mobile implementation: `reviews/homepage-worker-video-mobile.png`
- Comparison viewport: 1488 × 1057 (reference image is 1488 × 1058)
- Mobile viewport: 390 × 844

## Implemented direction

- Preserved the supplied dark navy, teal, compact dashboard hierarchy instead of inventing a new homepage direction.
- Restored the six-task grid on the left and a single featured-video card on the right.
- Placed the newest Level 8 worker Pal video in the featured slot, as requested.
- Kept videos in a dedicated `Latest Video Guides` module and kept written guides in the later `Essential written guides` module.
- Matched the reference order: task/featured split, category strip, compact video module, practical tools, then written-guide groups.
- Added the reference-style horizontal logo, active navigation state, and desktop search field while preserving all existing routes.

## Comparison findings and fixes

- P1: the first implementation used a 1180px content width, making the page visibly narrower than the reference. The desktop content width is now 1352px.
- P1: the featured image and task cards initially made the first block too tall. Task typography, card spacing, feature media ratio, and feature copy were compacted.
- P1: the first video module used large two-column cards and pushed useful tools below the reference fold. It is now a compact three-card row.
- P1: a separate latest-written-updates block duplicated the later written-guide area and disrupted the reference order. It was removed; video and written攻略 remain separate.
- P2: the old stacked logo and bordered navigation did not match the reference header. The header now uses a horizontal wordmark, plain navigation, active underline, and search field.
- P2: the task cards retain the site's numbered affordance instead of fabricating missing game/icon assets; this preserves the design system without fake imagery.
- Final side-by-side review found no broken crops, incorrect radii, page-level overflow, or hierarchy regressions.

## Functional checks

- The featured card opens `/videos/palworld-1-0-level-8-worker-pals-locations/`.
- `Latest Video Guides` contains three real videos and no placeholder cards.
- Header navigation, category links, video cards, tool cards, written-guide links, and the search form all resolve to existing routes.
- Search submission routes to the guide library without JavaScript dependency.
- Desktop and mobile page-level `scrollWidth` exactly match the viewport.
- Mobile retains a two-column task grid and moves the featured video directly beneath it.

## Video-page checks

- Self-hosted HLS loads to `readyState=4`, duration 191.48 seconds, and 1920 × 1080.
- The 2:10 Orserk chapter sets `currentTime` to exactly 130 seconds.
- Video page contains one native player and zero iframes.
- Written guide page contains zero players and zero iframes.

## SEO and build checks

- `npm run build`: passed; Astro generated 31 pages.
- New video page has exactly one `VideoObject`.
- New written guide has zero `VideoObject`, one `Article`, and one `FAQPage`.
- Both new canonical URLs are present in `sitemap.xml`.
- HLS full decode passed; 32 fMP4 segments, largest file 5,538,820 bytes.
- The existing `hls.js` bundle-size warning remains non-blocking.

final result: passed
