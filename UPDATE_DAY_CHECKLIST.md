# Palworld 1.0 Update Day Checklist

Internal checklist for the July 10, 2026 Palworld 1.0 patch notes update. Do not publish guessed details.

## 1. Check Official Sources First

- Find the full official Palworld 1.0 patch notes from Pocketpair / official Palworld channels.
- Save the official URL in the relevant guide `sourceLinks` and `sourceNotes`.
- Read the full notes before editing titles, summaries, server advice, save advice, or FAQ answers.
- Separate official patch note facts from early player testing and community claims.

## 2. Pages To Update First

Highest priority:

1. `Palworld 1.0 Patch Notes Explained`
   - Add confirmed major changes.
   - Fill `confirmedChanges`.
   - Replace placeholder sections with verified summary sections.
   - Keep exact numbers only when official notes provide them.
2. `Should You Start a New Save in Palworld 1.0?`
   - Update save compatibility guidance only from official notes or verified launch testing.
   - Add any official warnings, known issues, or migration notes.
3. `Palworld 1.0 Server Setup Guide`
   - Update dedicated server, multiplayer, backup, and launch-day server guidance.
   - Add confirmed server changes and known issues.
4. `Palworld 1.0 Best Server Settings`
   - Update settings guidance only after official balance and server setting notes are clear.
   - Avoid exact “best” numbers unless verified.

Second priority:

5. `Palworld 1.0 Release Date and What to Expect`
   - Convert pre-release wording into launch-state wording.
   - Link to patch notes and updated guides.
6. `Palworld 1.0 Beginner Guide`
   - Update early-game advice if progression, tutorial, balance, or base systems changed.
7. `Palworld 1.0 Returning Player Guide`
   - Update old-save, mod, base, and server advice.
8. `Palworld 1.0 FAQ`
   - Replace cautious placeholder answers with confirmed short answers.
9. `Palworld 1.0 Multiplayer Guide`
   - Update co-op, server, and known issue notes.
10. `Palworld 1.0 Performance Settings`
   - Update performance and crash advice if official notes mention fixes or known issues.

Not currently standalone pages:

- `Palworld 1.0 New Pals List`
- `Palworld 1.0 World Tree Guide`

These are not separate pages in the current MVP. Do not create them unless the next task explicitly allows new pages. For now, track confirmed New Pals and World Tree details inside `Palworld 1.0 Patch Notes Explained`, the 1.0 hub, and related existing guides.

## 3. Content That Cannot Be Guessed

- Exact new Pal names, stats, skills, spawn locations, drops, or capture routes.
- World Tree mechanics, access requirements, map details, bosses, rewards, or progression locks.
- Save compatibility claims.
- Server setting numbers, balance multipliers, or “best settings” tables.
- Performance gains, FPS estimates, crash fixes, or hardware-specific claims.
- Hidden mechanics, datamined claims, unreleased content, or community rumors.
- Official logo, official key art, official screenshots, or unauthorized assets.

## 4. Data Fields To Fill

For each updated guide in `src/data/guides.ts`:

- `confirmedChanges`: concise official or verified changes that affect the guide.
- `pendingUpdates`: items still waiting for testing or official clarification.
- `sourceNotes`: official URLs and verification notes used for the update.
- `lastVerified`: date the facts were last checked.
- `lastUpdated`: date displayed to readers after the page is revised.

Keep `Update Notice` visible until all major 1.0 details on the page have been verified.

## 5. Build And Deploy

After edits:

1. Run `npm run build`.
2. Check that the build still outputs 18 pages unless new pages were explicitly requested.
3. Check `/sitemap.xml`, `/robots.txt`, canonical, and Open Graph URLs.
4. Commit changes to Git.
5. Push `main` so Cloudflare Pages deploys automatically.
6. Confirm the Cloudflare Pages production deployment is successful.

## 6. Search Console Follow-up

After deployment:

- Open Google Search Console for `https://palworld-1-0-guide-hub.pages.dev/`.
- Re-submit `https://palworld-1-0-guide-hub.pages.dev/sitemap.xml` if the sitemap changed materially.
- Use URL Inspection and Request Indexing for the highest-priority updated pages:
  - `/palworld-1-0/palworld-1-0-patch-notes-explained/`
  - `/guides/should-you-start-a-new-save-in-palworld-1-0/`
  - `/server/palworld-1-0-server-setup-guide/`
  - `/server/palworld-1-0-best-server-settings/`
- Recheck the existing Search Console sitemap status, which previously showed “Unable to fetch” even though the live sitemap returned 200.
