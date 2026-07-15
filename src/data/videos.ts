export type VideoChapter = {
  startSeconds: number;
  label: string;
};

export type VideoGuide = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  durationSeconds: number;
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
    slug: "palworld-1-0-max-stat-knocklem-ignis-build",
    title: "Palworld 1.0 Max Stat Knocklem Ignis Build",
    description:
      "Watch the English-localized Palworld 1.0 Knocklem Ignis build showing a source-footage 21K attack and 15K defense stat stack with support Pals, accessories, food buffs, and passives.",
    duration: "PT3M22S",
    durationSeconds: 202,
    displayDuration: "3:22",
    thumbnail: "/assets/video-guides/palworld-1-0-max-stat-knocklem-ignis-build.jpg",
    uploadDate: "2026-07-15T12:35:00+08:00",
    streamUrl: "/media/palworld-1-0-max-stat-knocklem-ignis-build/master.m3u8",
    featured: true,
    chapters: [
      { startSeconds: 0, label: "21K attack and 15K defense showcase" },
      { startSeconds: 15, label: "Why the build depends on stacked buffs" },
      { startSeconds: 22, label: "Support Pal stack: Rooby, Finsider Ignis, and Celesdir Noct" },
      { startSeconds: 40, label: "Orserk multiplier and stack maintenance" },
      { startSeconds: 69, label: "Add Knocklem Ignis Iron Guardian Mode" },
      { startSeconds: 93, label: "Choose element-matched support Pals" },
      { startSeconds: 99, label: "Accessories: Charms, Batons, and Core Badges" },
      { startSeconds: 128, label: "Trial Tower blueprints and badge coordinates" },
      { startSeconds: 139, label: "Consumables and enhancement gun buffs" },
      { startSeconds: 150, label: "Burst passive route for raid and field bosses" },
      { startSeconds: 165, label: "Tank passive route for harder survival checks" },
      { startSeconds: 196, label: "Copy the stat-stack formula to another favorite Pal" },
    ],
    guidePath: "/guides/palworld-1-0-max-stat-knocklem-ignis-build/",
    guideTitle: "Read the complete max-stat Knocklem Ignis build guide",
    verificationLabel: "Source-footage stat build",
    verificationText:
      "The authorized footage shows build v1.0.0.100427 and a source-footage stat showcase of 21,465 attack and 15,022 defense. The buff stack, coordinates, item names, and exact values are patch-sensitive until independently retested on a newer public build.",
    sourceDisclosure:
      "This is an authorized English localization with expressive ElevenLabs English narration, burned-in English subtitles, and translated action-critical overlays. Incidental game-interface text may remain where covering it would obscure gameplay evidence.",
  },
  {
    slug: "palworld-1-0-ultimate-pal-builds",
    title: "Palworld 1.0 Ultimate Pal Builds: Worker, Mount & Combat",
    description:
      "Build an endgame worker, Jetragon travel mount, five-jump Hartalis, and combat Hartalis with timestamped English narration and exact upgrade steps.",
    duration: "PT4M29S",
    durationSeconds: 269,
    displayDuration: "4:29",
    thumbnail: "/assets/video-guides/palworld-1-0-ultimate-pal-builds.jpg",
    uploadDate: "2026-07-13T16:32:00+08:00",
    streamUrl: "/media/palworld-1-0-ultimate-pal-builds-v2/master.m3u8",
    chapters: [
      { startSeconds: 0, label: "Three endgame Pal builds" },
      { startSeconds: 7, label: "Best worker passives" },
      { startSeconds: 14, label: "Ancient Relic Recycler" },
      { startSeconds: 39, label: "Farm Ancient Relics" },
      { startSeconds: 62, label: "Artisan and Work Slave" },
      { startSeconds: 73, label: "Choose Bakemi or another compact worker" },
      { startSeconds: 93, label: "Finish the worker build" },
      { startSeconds: 110, label: "Mount build overview" },
      { startSeconds: 121, label: "Jetragon location and passives" },
      { startSeconds: 145, label: "Solo versus multiplayer mount setup" },
      { startSeconds: 162, label: "Summon and build Hartalis" },
      { startSeconds: 178, label: "Five-jump Hartalis setup" },
      { startSeconds: 198, label: "Combat Hartalis passives" },
      { startSeconds: 217, label: "Potential Fruits and Ability Glasses" },
      { startSeconds: 226, label: "Arena fruit route" },
      { startSeconds: 235, label: "Four stars, Pal Souls, and Trust" },
      { startSeconds: 243, label: "Wild boss damage test" },
      { startSeconds: 254, label: "Reuse the formula on any favorite" },
    ],
    guidePath: "/guides/palworld-1-0-ultimate-pal-builds/",
    guideTitle: "Read the complete worker, mount, and combat build guide",
    verificationLabel: "Source-footage build guide",
    verificationText:
      "The authorized footage shows build v1.0.0.100427. The passives, locations, upgrade screens, and demonstrations are translated from that footage and remain patch-sensitive until independently retested on a newer public build.",
    sourceDisclosure:
      "This is an authorized English localization with expressive AI-generated English narration, burned-in English subtitles, and translated action-critical callouts. Incidental game-interface text may remain non-English.",
  },
  {
    slug: "palworld-1-0-level-8-worker-pals-locations",
    title: "Palworld 1.0 Level 8 Worker Pals & Locations",
    description:
      "Find nine Level 8 worker Pals in Palworld 1.0 with English narration, role summaries, source-map coordinates, a Transporting caveat, and a bonus defender.",
    duration: "PT3M12S",
    durationSeconds: 192,
    displayDuration: "3:12",
    thumbnail: "/assets/video-guides/palworld-1-0-level-8-worker-pals-locations.jpg",
    uploadDate: "2026-07-13T09:48:00+08:00",
    streamUrl: "/media/palworld-1-0-level-8-worker-pals-locations/master.m3u8",
    featured: true,
    chapters: [
      { startSeconds: 0, label: "Level 8 worker route overview" },
      { startSeconds: 6, label: "Solenne — Handiwork" },
      { startSeconds: 31, label: "Aegidron — Mining" },
      { startSeconds: 46, label: "Dandilord — Planting" },
      { startSeconds: 62, label: "Shaolong — Watering" },
      { startSeconds: 76, label: "Renjishi — Kindling" },
      { startSeconds: 90, label: "Celesdir Noct — Lumbering" },
      { startSeconds: 118, label: "Bastigor — Cooling" },
      { startSeconds: 130, label: "Orserk — Electricity Generation" },
      { startSeconds: 141, label: "Jetragon — Gathering" },
      { startSeconds: 154, label: "Knocklem — Transporting caveat" },
      { startSeconds: 168, label: "Panthalus — bonus base defense" },
    ],
    guidePath: "/guides/palworld-1-0-level-8-worker-pals-locations/",
    guideTitle: "Read the complete Level 8 worker Pal guide",
    verificationLabel: "Source-footage guide",
    verificationText:
      "The authorized source footage shows the listed work levels, partner-skill descriptions, regions, and map markers in build v1.0.0.100427. These patch-sensitive values and locations have not been independently retested on a newer build.",
    sourceDisclosure:
      "This is an authorized English localization with AI-generated English narration, burned-in English subtitles, and translated action-critical callouts. Source-map markers are labeled as footage evidence rather than independent current-patch testing.",
  },
  {
    slug: "palworld-1-0-fast-early-game-route",
    title: "Palworld 1.0 Fast Early-Game Start Route",
    description:
      "Watch the complete Palworld 1.0 early-game route with timestamp-aligned English narration, subtitles, coordinates, Pal names, and action callouts.",
    duration: "PT4M33S",
    durationSeconds: 273,
    displayDuration: "4:33",
    thumbnail: "/assets/video-guides/palworld-1-0-fast-early-game-route.webp",
    uploadDate: "2026-07-12T14:45:00+08:00",
    streamUrl: "/media/palworld-1-0-fast-early-game-route/master.m3u8",
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
      "Watch the Palworld 1.0 worker-Pal upgrade route with English narration, subtitles, passives, work-speed factors, book farming, and job-specific steps.",
    duration: "PT3M35S",
    durationSeconds: 215,
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
