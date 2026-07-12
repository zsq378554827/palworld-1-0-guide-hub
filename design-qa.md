# Homepage Redesign QA

Date: 2026-07-12

## Visual source

- Approved reference: `/Users/zousunquan/.codex/generated_images/019f4ae7-9c08-7b93-8350-26885e316215/exec-a2145ec6-03d5-4fcf-a170-1da4b5df19af.png`
- Local implementation: `http://127.0.0.1:4321/`
- Desktop comparison: `reviews/homepage-redesign-comparison.png`
- Desktop viewport: 1440 × 1024
- Mobile viewport: 390 × 844

## Implemented direction

- Compact dark guide-dashboard layout based on the approved reference.
- Six task-first entry cards for new worlds, returning players, v1.0 changes, servers, performance, and MOD cleanup.
- The site's one real, tested video guide receives the largest media placement; no unmade videos or fake durations are shown.
- Category navigation, latest guide updates, useful checklists/frameworks, and grouped written-guide links use existing live routes.
- Existing teal, amber, dark-navy palette and restrained borders/radii are preserved.

## Visual comparison findings

- First comparison showed the approved task/video split and hierarchy were matched, but the implementation was too tall.
- The featured media crop and task-card height were reduced to move the latest-guide section higher.
- Guide-row images initially kept their intrinsic 810px height; explicit responsive height fixed the list density.
- Mobile task cards changed from one column to two columns so the real video appears sooner.
- Anchor targets received sticky-header offsets so `Videos` and `Tools` headings remain visible.

## Functional checks

- Header navigation links resolve to existing routes or visible homepage anchors.
- `Videos` and `Tools` anchors work on desktop and mobile.
- The featured video card opens `/guides/palworld-1-0-fast-early-game-start-route/` and the destination contains the real self-hosted video.
- Six task cards, six latest-guide rows, and three checklist/framework cards are present.
- Static internal-link check: 0 broken links.
- Static image check: 0 missing images.
- Browser console: 0 errors or warnings during homepage and featured-video navigation.

## Responsive and SEO checks

- 1440px: `scrollWidth` equals viewport width; no page-level horizontal overflow.
- 390px: `scrollWidth` equals viewport width; no page-level horizontal overflow.
- Mobile primary navigation fits without horizontal clipping.
- Homepage canonical is `https://palworld-1-0-guide-hub.pages.dev/`.
- Homepage has one descriptive H1 and unique title/meta description.

## Build

- `npm run build`: passed.
- Astro generated 25 site pages.
- The existing HLS bundle-size warning remains unchanged and does not block the static build.

final result: passed
