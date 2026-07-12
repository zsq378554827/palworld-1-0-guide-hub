export type VideoChapter = {
  startSeconds: number;
  label: string;
};

export type VideoGuide = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  displayDuration: string;
  thumbnail: string;
  uploadDate: string;
  streamUrl: string;
  featured?: boolean;
  chapters: VideoChapter[];
  guidePath: string;
  guideTitle: string;
  verificationLabel: string;
  verificationText: string;
  sourceDisclosure: string;
};

export const videos: VideoGuide[] = [
  {
    slug: "palworld-1-0-fast-early-game-route",
    title: "Palworld 1.0 Fast Early-Game Start Route",
    description:
      "Watch the complete Palworld 1.0 early-game route with timestamp-aligned English narration, subtitles, coordinates, Pal names, and action callouts.",
    duration: "PT4M33S",
    displayDuration: "4:33",
    thumbnail: "/assets/video-guides/palworld-1-0-fast-early-game-route.webp",
    uploadDate: "2026-07-12T14:45:00+08:00",
    streamUrl: "/media/palworld-1-0-fast-early-game-route/master.m3u8",
    featured: true,
    chapters: [
      { startSeconds: 0, label: "Route overview" },
      { startSeconds: 6, label: "Unlock multiple fast-travel points" },
      { startSeconds: 18, label: "Reach Sakurajima" },
      { startSeconds: 53, label: "Clear hostile camps with a Palbox" },
      { startSeconds: 84, label: "Loot four captive-Pal camps" },
      { startSeconds: 189, label: "Catch Alpha Dumud" },
      { startSeconds: 218, label: "Find Killamari for movement" },
      { startSeconds: 249, label: "Choose the main-base location" },
    ],
    guidePath: "/guides/palworld-1-0-fast-early-game-start-route/",
    guideTitle: "Read the complete early-game route guide",
    verificationLabel: "Independently retested",
    verificationText:
      "The route and Palbox camp-reset method were independently retested on the current Palworld 1.0 release on July 12, 2026. Future patches may change individual steps.",
    sourceDisclosure:
      "This is an authorized English localization of source footage with AI-generated English narration. The route was separately verified on the current release.",
  },
  {
    slug: "palworld-1-0-ultimate-worker-pal-build",
    title: "Palworld 1.0 Ultimate Worker Pal Build",
    description:
      "Watch the complete worker-Pal upgrade route with timestamp-aligned English narration, burned-in subtitles, passive names, work-speed factors, book-farming steps, and job-specific callouts.",
    duration: "PT3M35S",
    displayDuration: "3:35",
    thumbnail: "/assets/video-guides/palworld-1-0-ultimate-worker-pal-build.jpg",
    uploadDate: "2026-07-12T21:00:00+08:00",
    streamUrl: "/media/palworld-1-0-ultimate-worker-pal-build/master.m3u8",
    chapters: [
      { startSeconds: 0, label: "The six work-speed factors" },
      { startSeconds: 27, label: "Choose the worker base Pal" },
      { startSeconds: 59, label: "Transfer a passive with Yakumo" },
      { startSeconds: 93, label: "Add passives and stack upgrades" },
      { startSeconds: 126, label: "Farm Applied Technique books" },
      { startSeconds: 150, label: "Adapt the build to other jobs" },
      { startSeconds: 192, label: "Nocturnal workers and SAN support" },
    ],
    guidePath: "/guides/palworld-1-0-ultimate-worker-pal-build/",
    guideTitle: "Read the complete worker Pal build guide",
    verificationLabel: "Source-footage demonstration",
    verificationText:
      "The authorized source footage demonstrates the complete build. Exact values, book availability, and patch-sensitive mechanics still need an independent current-release retest.",
    sourceDisclosure:
      "This is an authorized English localization with AI-generated English narration, burned-in English subtitles, and translated action callouts.",
  },
];

export function getVideoBySlug(slug: string) {
  return videos.find((video) => video.slug === slug);
}
