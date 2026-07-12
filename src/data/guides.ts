export type GuideCategory = "guides" | "server" | "base-building" | "palworld-1-0";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideTesting = {
  gameVersion: string;
  lastTested: string;
  platform: string;
  mode: string;
  mods: string;
  verification: "independently-tested" | "shown-in-source-footage" | "needs-retest";
  note?: string;
};

export type Guide = {
  title: string;
  slug: string;
  category: GuideCategory;
  categoryLabel: string;
  description: string;
  shortAnswer: string;
  playerAdvice: string[];
  lastUpdated: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  statusNotice: string;
  updateNotice: string;
  confirmedChanges: string[];
  pendingUpdates: string[];
  sourceNotes: string[];
  lastVerified: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  sourceLinks?: { label: string; href: string }[];
  canonical?: string;
  visual?: {
    src: string;
    alt: string;
    caption: string;
  };
  relatedLinks?: { label: string; href: string }[];
  testing?: GuideTesting;
};

export const liveReleaseNotice =
  "Palworld 1.0 is live. The official v1.0 changelog is available. Detailed player-tested recommendations are still being verified.";

export const updateNotice =
  "The official v1.0 changelog is available. Detailed player-tested recommendations are still being verified.";

const launchUpdateFields = {
  confirmedChanges: [],
  pendingUpdates: [
    "Review the official Palworld 1.0 changelog before adding or changing detailed recommendations.",
    "Keep balance-sensitive advice provisional until it has been checked in the launch build.",
  ],
  sourceNotes: [
    "Use Pocketpair's official Steam changelog, official Palworld news, and verified in-game testing before marking changes as confirmed.",
    "Do not use rumors, trailer speculation, scraped databases, or community claims as confirmed source material.",
  ],
  lastVerified: "July 10, 2026",
  updateNotice,
} satisfies Pick<Guide, "confirmedChanges" | "pendingUpdates" | "sourceNotes" | "lastVerified" | "updateNotice">;

export const guides: Guide[] = [
  {
    title: "Palworld 1.0 Beginner Guide",
    slug: "guides/palworld-1-0-beginner-guide",
    category: "guides",
    categoryLabel: "Beginner Guide",
    description:
      "Practical Palworld 1.0 beginner guide with a first-hour route, starter-base checklist, capture and mission priorities, technology decisions, multiplayer advice, and safe next steps.",
    shortAnswer:
      "Follow the reworked main mission, gather only what solves the next problem, capture a varied early team, build a small flexible base, activate watchtowers as you explore, and delay permanent builds or rare-resource spending until you understand Version 1.0's systems.",
    playerAdvice: [
      "If you are new, spend the first session learning gathering, crafting, catching, food, and base assignments instead of rushing a permanent base.",
      "If you are returning, treat old Early Access habits as useful background, not confirmed 1.0 optimization.",
      "If you are playing with friends, agree on hosting and save rules before anyone invests heavily in a shared world.",
    ],
    lastUpdated: "July 11, 2026",
    readingTime: "11 min read",
    featured: true,
    tags: ["new players", "starter path", "base-building"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Palworld Version 1.0 is live and the official release changelog is published.",
      "The official changelog confirms a reworked world, mission flow, progression, Pal balance, and a level cap of 80.",
    ],
    pendingUpdates: [
      "Exact beginner routes, early Pal rankings, base locations, and progression optimizations still need release-build testing.",
    ],
    sourceNotes: [
      "Release and progression facts were checked against Pocketpair's official v1.0 Steam changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-beginner-starter-journey.webp",
      alt: "Original Palworld 1.0 beginner journey illustration showing a flexible campsite, organized crafting area, path, and distant watchtower",
      caption: "Original fan-made starter-journey illustration; it is not an official map or recommended base location.",
    },
    relatedLinks: [
      { label: "First Hour Checklist", href: "/guides/palworld-1-0-first-hour-checklist/" },
      { label: "Should You Start a New Save?", href: "/guides/should-you-start-a-new-save-in-palworld-1-0/" },
      { label: "Palworld 1.0 FAQ", href: "/faq/" },
      { label: "Base Building Changes", href: "/base-building/" },
    ],
    sections: [
      {
        heading: "Your first session priorities",
        paragraphs: [
          "Version 1.0 reworks mission flow, capture progression, Pal skills, Work Suitability, bases, raids, and exploration. Use the main mission as your navigation spine instead of following an Early Access speed route.",
          "The goal of the first session is not maximum level. It is a stable loop: gather, craft, capture, assign work, store resources, travel safely, and return with enough information to choose the next upgrade.",
        ],
      },
      {
        heading: "Beginner roadmap",
        table: {
          headers: ["Stage", "Main objective", "Useful actions", "Avoid for now"],
          rows: [
            ["First 10 minutes", "Learn the current mission and controls", "Gather basic materials; check settings; capture several early Pals", "Skipping prompts because an old route looks familiar"],
            ["10–30 minutes", "Create a working starter base", "Place storage near crafting; leave Pal paths open; assign varied work", "Treating the first base as permanent"],
            ["30–60 minutes", "Stabilize food, equipment, and travel", "Follow missions; inspect Pal skills; activate useful map guidance", "Spending rare items on an untested build"],
            ["Next sessions", "Expand only when a need is clear", "Add production, defenses, exploration gear, and backups", "Copying tier lists or best-location claims without verification"],
          ],
        },
      },
      {
        heading: "Build a starter base that teaches you the game",
        bullets: [
          "Choose accessible ground with room to walk; this is a learning base, not a Best Base Location claim.",
          "Put frequently used storage close to the stations that consume those materials.",
          "Leave open paths around beds, food, storage, and production so Base Pals can reach work.",
          "Assign a mixed group and inspect Work Suitability instead of filling every slot with one job type.",
          "Check food supply and stalled work before adding more stations.",
          "Keep the layout easy to move because Aquatic Construction and later production needs may change your plans.",
        ],
      },
      {
        heading: "Capture and Pal-management priorities",
        paragraphs: [
          "Capture Bonuses now require five captures rather than twelve, while the maximum condensation requirement is lower than in Early Access. These official changes make repeated captures useful, but they do not make every nearby Pal equally valuable for your team.",
          "Build variety first: one dependable combat option, useful movement or Partner Skills, and several work roles. Re-read descriptions because more than 200 Partner Skills and almost all Active Skills were reviewed for Version 1.0.",
        ],
        bullets: [
          "Check elements, Active Skills, Partner Skills, and Work Suitability before dismissing a duplicate.",
          "Keep useful workers even if they are not part of the current combat party.",
          "Delay heavy condensation, Awakening, Mutation, or breeding investments until the resource cost is understood.",
          "Best starter Pal rankings still need in-game verification.",
        ],
      },
      {
        heading: "Technology and resource decisions",
        paragraphs: [
          "Unlock technology that removes an immediate bottleneck: food, storage, gathering, crafting, survival, travel, or defense. A long list of unlocked stations is not useful when the base cannot supply or operate them.",
          "Keep a reserve of basic materials and label rare resources before experimenting. Version 1.0 adds new ores, equipment, accessories, structures, and progression systems, so old spending priorities should not be treated as current by default.",
        ],
      },
      {
        heading: "Exploration habits that prevent wasted trips",
        bullets: [
          "Follow the main mission and use watchtowers to reveal nearby map areas and unlock fast travel.",
          "Carry food, basic repair or replacement supplies, capture items, and free inventory space.",
          "Mark or remember caves, cliffs, settlements, resources, and return routes before pushing farther.",
          "Deposit valuable materials before testing unfamiliar high-risk content.",
          "Do not rush Sunreach or the World Tree based on an unverified shortcut. Needs in-game verification.",
        ],
      },
      {
        heading: "Solo or multiplayer?",
        table: {
          headers: ["Format", "Best for", "Before investing", "Main risk"],
          rows: [
            ["Solo", "Learning systems at your own pace", "Choose a backed-up world and comfortable settings", "No shared help when a route or base fails"],
            ["Small co-op group", "Shared exploration and divided base jobs", "Agree on host, uptime, progression pace, and shared storage", "Players progressing at different speeds"],
            ["Dedicated server", "Persistent group worlds", "Confirm backups, version, settings, MOD policy, and rollback rules", "Host load, MOD problems, or unclear permissions"],
          ],
        },
      },
      {
        heading: "Before ending the first session",
        bullets: [
          "Confirm the current mission objective and one next-session goal.",
          "Check food, storage, production queues, and Pal assignments.",
          "Store rare materials instead of carrying them into an unknown fight.",
          "For multiplayer, verify saving and reconnect behavior.",
          "Back up an important world before adding MODs or making irreversible changes.",
        ],
      },
      {
        heading: "What not to trust yet",
        paragraphs: [
          "The official v1.0 changelog is available, but exact stat priorities, best Pals, best base locations, fastest routes, and definitive endgame recommendations still need player testing.",
          "Use player-tested advice only when it explains the build, platform, settings, route, and evidence. A claim that simply says best, fastest, or mandatory is not enough.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This beginner guide uses Pocketpair's official Palworld v1.0 Steam changelog for mission, map, Pal, capture, base, raid, progression, multiplayer, and MOD facts. Route timing, rankings, permanent base decisions, and optimized builds remain marked for player verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should a Palworld 1.0 beginner do first?",
        answer:
          "Follow the current main mission, gather basic supplies, capture a varied early team, and create a small flexible base before chasing permanent builds.",
      },
      {
        question: "Should a new player start solo or multiplayer?",
        answer:
          "Solo is easier for learning systems. Multiplayer is better if your group already knows who hosts, when the world is online, and how settings will be handled.",
      },
      {
        question: "When should I choose a permanent base?",
        answer:
          "After you understand travel, production, Pal pathing, raids, and the resources your group actually needs. Best Base Locations still need in-game verification.",
      },
      {
        question: "Should beginners use tier lists?",
        answer:
          "Use them as ideas, not rules. Version 1.0 changed Pal skills, work values, progression, combat, and resources, so rankings need release-build evidence.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 Release Date and What to Expect",
    slug: "palworld-1-0/palworld-1-0-release-date-and-what-to-expect",
    category: "palworld-1-0",
    categoryLabel: "Version 1.0",
    description:
      "The confirmed Palworld 1.0 release status and an official-source overview of the launch changelog, trailer, and next steps for players.",
    shortAnswer:
      "Palworld Version 1.0 is live. Pocketpair published the official release changelog on July 10, 2026, confirming the launch content and broad system overhauls.",
    playerAdvice: [
      "New players should use the release window to prepare a clean first save and read basic system guides, not to memorize speculative endgame routes.",
      "Returning players should back up saves and make a short checklist of old worlds, mods, and server settings before updating.",
      "Server owners should read the official multiplayer, optimization, mod, and bug-fix sections before changing a live world.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "5 min read",
    featured: true,
    tags: ["release date", "1.0 changes", "World Tree"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Palworld left Early Access and Version 1.0 is live.",
      "Pocketpair published the full official release changelog on July 10, 2026.",
      "The changelog covers new areas, story, Pals, combat, equipment, building, raids, multiplayer, balance, presentation, optimization, bug fixes, and mods.",
    ],
    pendingUpdates: [
      "Platform-specific rollout and launch issues should be checked against later official notices.",
      "Exact routes, tier lists, performance gains, and best settings still require launch-build testing.",
    ],
    sourceNotes: [
      "Release status and update categories were verified against Pocketpair's official Steam changelog.",
      "The official launch trailer was checked for launch messaging only; it was not used to infer mechanics absent from the changelog.",
    ],
    sections: [
      {
        heading: "Confirmed release status",
        paragraphs: [
          "Palworld Version 1.0 is now live. Pocketpair's official Steam changelog states that the game has exited Early Access, and the Steam store now lists the full release.",
          "The official changelog was published on July 10, 2026 at 03:09 UTC, which is 11:09 in China and 12:09 in Japan. Steam may display July 9 in some regions because of local time zones.",
        ],
      },
      {
        heading: "What the official changelog confirms",
        paragraphs: [
          "The official changelog confirms major additions and overhauls across the world, missions and story, Pals, combat, equipment and items, base building, raids, multiplayer, balance, UI, graphics, sound, optimization, and bug fixes.",
          "Detailed recommendations still need testing where the changelog does not provide enough evidence for a best route, best build, exact performance gain, or ideal server value.",
        ],
      },
      {
        heading: "How to prepare without overplanning",
        bullets: [
          "Back up important saves before updating.",
          "Record current server settings if you run a world.",
          "Avoid installing major MOD changes until their creators confirm Version 1.0 compatibility.",
          "Use the official changelog as the baseline, then test balance-sensitive advice in the launch build.",
        ],
      },
      {
        heading: "What still needs launch testing",
        paragraphs: [
          "Player testing is still needed for practical performance gains, stable server capacity under real load, exact best settings, progression routes, Pal rankings, and any platform-specific launch issues not covered by the official changelog.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Palworld 1.0 release date confirmed?",
        answer:
          "Yes. Palworld Version 1.0 is live, and Pocketpair published the official release changelog on July 10, 2026.",
      },
      {
        question: "Are new Pals and World Tree details fully known?",
        answer:
          "The official changelog now confirms their main launch roles and mechanics. Exact player routes, rankings, and optimization advice still need verified launch testing.",
      },
      {
        question: "What should I do before loading an important save?",
        answer:
          "Back up saves, record server settings, remove old mods, verify game files, and read the official changelog before making irreversible changes.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld 1.0 announcement",
        href: "https://www.pocketpair.jp/en/game-news/palworld-1-0-july-10-cinematic-trailer-revealed/",
      },
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Palworld 1.0 official launch trailer",
        href: "https://youtu.be/1fpGg9wNM9A",
      },
    ],
  },
  {
    title: "Palworld 1.0 Returning Player Guide",
    slug: "guides/palworld-1-0-returning-player-guide",
    category: "guides",
    categoryLabel: "Returning Players",
    description:
      "A Palworld 1.0 returning player guide covering the biggest Early Access changes, first 30 minutes, save backups, MOD cleanup, bases, Pals, and servers.",
    shortAnswer:
      "Back up your save, remove old MOD files, inspect the mission log, check every important base and Pal, and review server settings before resuming an Early Access world in Palworld 1.0.",
    playerAdvice: [
      "Do not delete an Early Access world: Pocketpair says existing saves can continue, and a separate backup gives you a safe point to return to.",
      "Treat old builds, Pal rankings, resource routes, and base assumptions as historical until they are checked against Version 1.0.",
      "If you run a group world, use a private test copy before reopening the main server to returning players.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "9 min read",
    featured: true,
    tags: ["returning players", "save prep", "base-building"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Existing saves can continue, while Pocketpair recommends a fresh character for the reworked experience.",
      "Main and sub-mission progress was reset, with some tutorial and Tower Boss progress restored from recorded boss defeats.",
      "Pal skills, Work Suitability, progression, bases, raids, multiplayer, crafting, and world content received official changes.",
      "Pocketpair tells players to remove old MOD files and back up important saves before updating.",
    ],
    pendingUpdates: [
      "The condition of individual Early Access worlds, bases, MOD-dependent data, and server tools needs in-game verification.",
      "Old tier lists, routes, and optimization advice need in-game verification before reuse.",
    ],
    sourceNotes: [
      "Returning-player facts were checked against Pocketpair's official v1.0 Steam changelog and official MOD warning.",
    ],
    relatedLinks: [
      { label: "Should You Start a New Save?", href: "/guides/should-you-start-a-new-save-in-palworld-1-0/" },
      { label: "First Hour Checklist", href: "/guides/palworld-1-0-first-hour-checklist/" },
      { label: "MOD Warning", href: "/guides/palworld-1-0-mods-warning-compatibility-guide/" },
      { label: "Server Owner Checklist", href: "/server/palworld-1-0-server-owner-checklist/" },
    ],
    sections: [
      {
        heading: "What changed since Early Access",
        paragraphs: [
          "Version 1.0 adds Sunreach, the World Tree, seven smaller islands, renewed sanctuaries, settlements, ancient ruins, watchtowers, 72 Pals, a level cap of 80, and a reworked story path. It also changes combat, Pal skills, breeding, work, capture progression, crafting, bases, raids, multiplayer, UI, and balance.",
          "Main-mission and sub-mission progress was reset because the flow and rewards changed. Some tutorial and Tower Boss missions can be recognized from existing Tower Boss defeat history, so inspect the mission log before repeating old objectives.",
        ],
      },
      {
        heading: "First 30 minutes checklist",
        bullets: [
          "Confirm the game is running Version 1.0 and that old MOD files are removed.",
          "Load a backed-up copy or start a temporary fresh character before changing the only important world.",
          "Open the mission log and map to review reset objectives, watchtowers, and changed progression markers.",
          "Visit one important base and inspect boundaries, structures, storage, power, and Pal assignments.",
          "Open the Pal Box and review Partner Skills, Active Skills, Work Suitability, ranks, and favorites.",
          "For multiplayer, test saving, logout, restart, and reconnect before a long session.",
        ],
      },
      {
        heading: "Save backup",
        paragraphs: [
          "Pocketpair says existing saves can continue, but a backup should be created before the first Version 1.0 load. Keep the backup outside the active save folder and label it with the world name, date, platform, and pre-update version.",
          "For a dedicated server, preserve world data, player data, settings, startup arguments, and the MOD or plugin list together. The ability to continue a save does not prove that every complex world will be unaffected. Needs in-game verification.",
        ],
      },
      {
        heading: "MOD cleanup",
        bullets: [
          "Remove MOD files and MOD loaders manually; disabling them in a manager may not be enough.",
          "Unsubscribe from Steam Workshop MODs and use Steam's file-integrity check.",
          "Launch Version 1.0 without MODs before restoring anything.",
          "Only reinstall MODs whose creators confirm 1.0 compatibility, one at a time.",
          "Assume MOD-added items, Pals, quests, or structures may not survive removal. Needs in-game verification.",
        ],
      },
      {
        heading: "Base check",
        paragraphs: [
          "Inspect base boundaries, structure alignment, storage access, power, Pal assignments, work priorities, farming, ranching, and defensive structures. Aquatic Construction changed some outer playable boundaries; Pocketpair notes that saves from v0.7.3 or earlier can spawn outside the updated boundary and can use Emergency Escape from the Options menu.",
          "Work Suitability now extends to 10 levels and all Pals were rebalanced for work. Raid behavior is wave-based, raid levels scale with assigned Work Pals, and defense structures no longer consume ammunition. Old base layouts and defense plans need in-game verification.",
        ],
      },
      {
        heading: "Pal check",
        bullets: [
          "Review Partner Skill descriptions because more than 200 were reworked and many no longer stack across duplicate Pals.",
          "Review Active Skills because power, cooldown, behavior, and usability changed across nearly the entire skill set.",
          "Check Work Suitability, ranks, Souls, condensation plans, and breeding goals before spending rare resources.",
          "Do not assume an old best Pal, mount, worker, or breeding combination is still optimal. Needs in-game verification.",
        ],
      },
      {
        heading: "Server check",
        bullets: [
          "Confirm the dedicated server and clients are on matching Version 1.0 builds.",
          "Review changed default world settings and compare them with the saved configuration.",
          "Test login, password restoration, saving, restart persistence, guild permissions, chat, and connection warnings.",
          "Enable voice chat only if the server needs it and the platform supports it.",
          "Measure stability with the real world and expected player load. Needs in-game verification.",
        ],
      },
      {
        heading: "What not to assume yet",
        bullets: [
          "Do not assume old Pal, weapon, accessory, or Partner Skill tier lists remain accurate.",
          "Do not assume familiar resource routes, boss locations, base spots, or progression paths are unchanged.",
          "Do not assume the official optimization list guarantees a specific FPS or server-capacity improvement.",
          "Do not assume a disabled MOD is removed or compatible with Version 1.0.",
          "Do not publish universal best settings without testing. Needs in-game verification.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This returning-player guide is based on Pocketpair's official Palworld v1.0 Steam changelog and official MOD warning. It converts confirmed changes into a cautious return checklist while marking world-specific, hardware-specific, and balance-sensitive outcomes as needing gameplay verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can returning players rely on old Palworld guides?",
        answer:
          "Use them as historical background. Balance, routes, base locations, Pal skills, progression, and server behavior should be rechecked against Version 1.0. Needs in-game verification.",
      },
      {
        question: "Should I delete my old save?",
        answer:
          "No. Pocketpair says existing saves can continue. Back it up before loading Version 1.0, and keep that backup while testing.",
      },
      {
        question: "What should I check first after updating?",
        answer:
          "Check mission progress, bases, Pal skills, MOD cleanup, server settings, saving, and official known issues before making irreversible changes.",
      },
      {
        question: "Should I start a fresh character anyway?",
        answer:
          "Pocketpair recommends a fresh character for the reworked experience, but it is optional. Keep your old save and decide after a safe test.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Pocketpair official MOD warning for Version 1.0",
        href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004",
      },
    ],
  },
  {
    title: "Should You Start a New Save in Palworld 1.0?",
    slug: "guides/should-you-start-a-new-save-in-palworld-1-0",
    category: "guides",
    categoryLabel: "Save Planning",
    description:
      "Should you start a new Palworld 1.0 save? Official guidance on existing saves, fresh characters, backups, server worlds, and MOD cleanup before updating.",
    shortAnswer:
      "A fresh save is not required. Pocketpair says existing save data can continue, but recommends a new character for the reworked 1.0 experience. Back up important saves first, especially if mods were used.",
    playerAdvice: [
      "New players can begin with a fresh character and experience the reworked mission and progression flow as designed for Version 1.0.",
      "Returning players can keep an existing save, but should create a verified backup before the first Version 1.0 load.",
      "Server owners should back up the full world, remove unsupported MODs, document settings, and test a private copy before reopening access.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "8 min read",
    tags: ["fresh save", "save compatibility", "returning players"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Pocketpair says existing save data can be continued in Version 1.0.",
      "Pocketpair recommends starting fresh with a new character for the reworked experience.",
      "Old or mod-dependent data may fail to load or behave incorrectly after mods are removed.",
    ],
    pendingUpdates: [
      "Track later official known-issue or hotfix notices for platform-specific save problems.",
      "Old-world behavior after large base, mission, and map changes needs in-game verification.",
      "Do not generalize isolated player save reports into universal compatibility claims.",
    ],
    sourceNotes: [
      "Save guidance was verified against Pocketpair's official v1.0 changelog and official pre-launch mod warning on Steam.",
    ],
    sections: [
      {
        heading: "Existing saves can continue",
        paragraphs: [
          "Pocketpair's official Version 1.0 changelog says players can continue their adventures with existing save data. A mandatory wipe is not part of the official release guidance.",
          "That confirmation does not guarantee that every MOD-dependent item, Pal, quest state, base layout, or server tool will behave exactly as it did in Early Access. Back up first. Old-world behavior after the reworked systems needs in-game verification.",
        ],
      },
      {
        heading: "Pocketpair recommends a new character",
        paragraphs: [
          "Pocketpair recommends starting fresh to experience the Version 1.0 changes more fully. The main story, mission flow, world progression, Pal balance, capture systems, bases, raids, and other systems were revised together, so a new character encounters those changes in their intended order.",
          "This is a recommendation, not a requirement. Players who value an established collection or shared world can preserve it and decide after testing a backup.",
        ],
      },
      {
        heading: "When to keep your old save",
        bullets: [
          "You want to preserve long-built bases, collections, breeding work, or multiplayer history.",
          "Your save did not depend on unsupported MOD content, or you have a safe test copy.",
          "Your group understands that missions, rewards, Pal skills, base work, map boundaries, and raid behavior changed.",
          "You are willing to inspect the world carefully before making irreversible changes.",
        ],
      },
      {
        heading: "When to start fresh",
        bullets: [
          "You want to follow the reworked story and progression from the beginning.",
          "You have not played for a long time and want to relearn combat, capture, Pal, and base systems.",
          "Your old save contains MOD-created Pals, items, structures, quests, or other dependencies.",
          "Your multiplayer group wants one clear ruleset and equal progression from the start.",
        ],
      },
      {
        heading: "What server owners should do before updating",
        bullets: [
          "Stop the server cleanly and copy the full save and configuration to a separate backup location.",
          "Record the current game build, server build, world settings, startup arguments, MODs, plugins, and management tools.",
          "Remove old MOD files and loaders rather than only disabling them.",
          "Update the server and confirm that clients use the matching Version 1.0 build.",
          "Test login, saving, restart persistence, one base, and one multiplayer session before reopening the main world.",
        ],
      },
      {
        heading: "MOD warning",
        paragraphs: [
          "Pocketpair warns that old MOD files can cause crashes, save corruption or loss, failed loading, and blocked quests or events. Disabling a MOD in a manager may leave files or loaders in the game directory, so the official pre-update guidance calls for manual removal and a clean, unmodded launch test.",
          "Save data containing MOD-dependent content may not work correctly after those MODs are removed. Only reinstall a MOD after its creator confirms Version 1.0 compatibility, then test one MOD at a time.",
        ],
      },
      {
        heading: "Backup checklist",
        bullets: [
          "Create a backup before the first Version 1.0 load, not after a problem appears.",
          "Keep at least one copy outside the active game or server folder.",
          "Label the backup with the date, platform, world name, and pre-update version.",
          "For servers, save the world data, player data, configuration, startup command, and MOD list together.",
          "Confirm that the backup is present and readable before updating.",
          "Do not overwrite the only backup during early testing.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide is based on Pocketpair's official Palworld v1.0 Steam changelog and official Version 1.0 MOD warning. It separates the confirmed ability to continue existing saves from recommendations that still depend on a player's platform, MOD history, and world state. Those practical outcomes need in-game verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a fresh save required for Palworld 1.0?",
        answer:
          "No. Pocketpair says you can continue existing save data, while recommending a new character for the full reworked experience.",
      },
      {
        question: "What is the safest option for an old world?",
        answer:
          "Create a separate verified backup, remove unsupported MODs, and test Version 1.0 before making permanent base, mission, or server decisions.",
      },
      {
        question: "What should a server group do?",
        answer:
          "Choose a clear policy: continue a backed-up old world, start fresh, or use a temporary test copy. Document the decision before players invest more time.",
      },
      {
        question: "Will every old save work without problems?",
        answer:
          "The official notes allow existing saves to continue, but MOD dependencies and the behavior of heavily developed worlds need in-game verification.",
      },
      {
        question: "Should I delete my Early Access save after starting fresh?",
        answer:
          "No. Keep the old save and its backup until you are certain you no longer need the world or anything stored in it.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Pocketpair official mod and save warning on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004",
      },
    ],
  },
  {
    title: "Palworld 1.0 Server Setup Guide",
    slug: "server/palworld-1-0-server-setup-guide",
    category: "server",
    categoryLabel: "Server Setup",
    description:
      "Palworld 1.0 server setup guide for backups, version checks, MOD cleanup, multiplayer testing, changed settings, and a safe dedicated-server update checklist.",
    shortAnswer:
      "Before opening a Palworld 1.0 server, back up the complete world, remove unsupported MODs, update the server and clients to matching builds, review changed defaults, and test saving, restart persistence, and multiplayer privately.",
    playerAdvice: [
      "New server owners should begin close to official defaults and change one category only after they can describe the problem it solves.",
      "Returning server owners should preserve the world, configuration, startup command, and MOD list before updating.",
      "Players should know whether a server is permanent, temporary, fresh, or continuing an Early Access world before investing time.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "9 min read",
    featured: true,
    tags: ["dedicated server", "multiplayer", "backups"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "The official changelog includes dedicated-server processing optimization, multiplayer stability work, server joining improvements, and save-process changes.",
      "Dedicated-server default world settings were adjusted to more closely match single-player Normal difficulty.",
      "Pocketpair warns server owners and players to remove old mods before updating and to back up important saves.",
    ],
    pendingUpdates: [
      "Test restart, persistence, player joining, and real performance under the server's expected load.",
      "Wait for mod and server-tool maintainers to confirm Version 1.0 compatibility.",
    ],
    sourceNotes: [
      "Server facts were checked against the official v1.0 Optimization, Multiplayer, bug-fix, and About Mods sections.",
    ],
    visual: {
      src: "/assets/palworld-1-0-server-update-checklist.webp",
      alt: "Palworld 1.0 server update checklist showing backup, update, private testing, and reopening stages",
      caption: "A safe server update moves from backup to a clean update, private verification, and controlled reopening.",
    },
    relatedLinks: [
      { label: "Best Server Settings Framework", href: "/server/palworld-1-0-best-server-settings/" },
      { label: "Server Owner Checklist", href: "/server/palworld-1-0-server-owner-checklist/" },
      { label: "MOD Cleanup Guide", href: "/guides/palworld-1-0-mods-warning-compatibility-guide/" },
    ],
    sections: [
      {
        heading: "Backup before updating",
        paragraphs: [
          "Stop the server cleanly and copy the complete world, player data, configuration, startup arguments, and management files before installing Version 1.0. Keep the backup outside the active server directory and label it with the date and pre-update build.",
          "Do not use the only production world as the first test. Restore or copy it into a private environment when possible, then verify login, saving, restart persistence, and base access before reopening the main server.",
        ],
      },
      {
        heading: "Before, during, and after the update",
        table: {
          headers: ["Stage", "Required checks", "Do not proceed until"],
          rows: [
            ["Before update", "Stop cleanly; copy world, players, config, startup arguments, and MOD list", "The backup is stored outside the active server directory"],
            ["During update", "Remove unsupported MODs; update server and clients; compare configuration", "Server and test clients run matching Version 1.0 builds"],
            ["After update", "Test join, base access, saving, restart persistence, permissions, and chat", "A private test survives restart without data loss"],
          ],
        },
      },
      {
        heading: "Remove or test MODs",
        paragraphs: [
          "Pocketpair warns that old MOD files and MOD loaders can still affect the game after being disabled. Remove them manually, unsubscribe from Workshop MODs, verify game files, and confirm the server and a client can run unmodded.",
          "Only restore a MOD after its creator confirms Version 1.0 compatibility. Add MODs back one at a time so crashes, save failures, or blocked progression can be isolated. Compatibility needs in-game verification.",
        ],
      },
      {
        heading: "Check server version",
        paragraphs: [
          "Confirm the dedicated server has updated to the current Version 1.0 release and that every joining client uses a compatible build. A mismatch can look like a password, connection, or server-list problem when the real issue is version alignment.",
          "Record the server build and update time in the operator log. If Pocketpair publishes a hotfix, compare the server and client builds again before changing unrelated settings.",
        ],
      },
      {
        heading: "Check multiplayer stability",
        bullets: [
          "Join with more than one client and confirm character loading and spawn behavior.",
          "Place or access a small test base, move items, assign a Pal, and verify permissions.",
          "Log out, save, restart the server, reconnect, and confirm persistence.",
          "Check guild roles, chat, server password behavior, and unstable-connection indicators.",
          "Run a longer private session before advertising production stability. Needs in-game verification.",
        ],
      },
      {
        heading: "Review server settings after 1.0",
        paragraphs: [
          "Pocketpair changed dedicated-server defaults to align more closely with single-player Normal difficulty, while progression, capture rates, crafting, Pal work, raids, death behavior, and other systems were rebalanced. Compare the actual Version 1.0 configuration with the old server file rather than assuming unchanged defaults.",
          "Start close to default values, document every deviation, and review settings with the group after a controlled test. A universal best preset is not provided by the official changelog.",
        ],
      },
      {
        heading: "What not to change without testing",
        bullets: [
          "Do not raise player or base load because the changelog says server processing was optimized; real capacity needs in-game verification.",
          "Do not change several progression, capture, resource, and damage multipliers at the same time.",
          "Do not enable old MODs, loaders, plugins, or management tools without a confirmed Version 1.0 release.",
          "Do not overwrite the last pre-update backup after a successful first login.",
          "Do not treat one short session as proof of long-term multiplayer stability.",
        ],
      },
      {
        heading: "Server owner checklist",
        bullets: [
          "Back up world data, player data, settings, startup arguments, and MOD lists.",
          "Remove old MOD files and confirm a clean unmodded launch.",
          "Update server and clients, then verify matching versions.",
          "Compare old settings with the Version 1.0 configuration and changed defaults.",
          "Test login, saving, restart persistence, guild permissions, chat, and one representative base.",
          "Document whether the world is fresh, continuing, temporary, or subject to rollback.",
          "Keep monitoring official hotfix and known-issue announcements.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This server guide is based on Pocketpair's official Palworld v1.0 Steam changelog and official MOD warning. It uses confirmed server, multiplayer, save-process, default-setting, optimization, and MOD information without claiming unverified player capacity or performance gains.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use aggressive server settings at launch?",
        answer:
          "No. Start close to official defaults so balance, bugs, and performance are easier to diagnose, then change one category at a time.",
      },
      {
        question: "What is the most important server setup step?",
        answer:
          "A complete, restorable backup made before the update. It protects the world while settings, MODs, and persistence are tested.",
      },
      {
        question: "Should I run mods on day one?",
        answer:
          "Only after the creator confirms Version 1.0 compatibility. Test MODs individually on a backed-up or temporary world.",
      },
      {
        question: "Does Version 1.0 guarantee better performance for my server?",
        answer:
          "No. Pocketpair confirms dedicated-server optimization, but actual capacity, memory behavior, and long-session stability need in-game verification.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 Best Server Settings",
    slug: "server/palworld-1-0-best-server-settings",
    category: "server",
    categoryLabel: "Server Settings",
    description:
      "A safe Palworld 1.0 server settings framework for casual worlds, small groups, and long-term survival servers without inventing exact best multipliers.",
    shortAnswer:
      "There is no official universal best Palworld 1.0 server preset. Start close to Version 1.0 defaults, protect backups, choose a clear server goal, and change one setting category at a time after controlled testing.",
    playerAdvice: [
      "Casual groups should reduce frustration through a few understandable policy choices rather than extreme multipliers.",
      "Small groups should prioritize predictable uptime, backups, and progression pacing that matches how often the group plays.",
      "Long-term servers should preserve stability and progression value by testing changes privately and maintaining a settings changelog.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "8 min read",
    tags: ["server settings", "balance", "multiplayer"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "The official changelog confirms broad balance, base, raid, multiplayer, and server optimization changes.",
      "Dedicated-server defaults were adjusted to more closely match single-player Normal difficulty.",
      "The official notes do not prescribe one universal best server-settings profile.",
    ],
    pendingUpdates: [
      "Exact recommended multipliers still require testing with different group sizes and play styles.",
      "Measure performance and progression before changing several server values at once.",
    ],
    sourceNotes: [
      "This page keeps close-to-default advice because the official changelog confirms broad rebalancing but does not define universal best values.",
    ],
    sections: [
      {
        heading: "Safe starter settings framework",
        paragraphs: [
          "Begin with the Version 1.0 defaults or a documented copy of them. Pocketpair changed dedicated-server defaults to align more closely with single-player Normal difficulty, so an old configuration should be compared rather than copied blindly.",
          "Define the server's purpose, keep a restorable backup, test privately, and adjust one category at a time. Categories include progression pace, gathering, capture, death behavior, Pal work, bases, raids, PvP or access rules, and multiplayer communication.",
          "The practical effect of any non-default combination needs in-game verification.",
        ],
      },
      {
        heading: "Server approach comparison",
        table: {
          headers: ["Approach", "Main priority", "Safe starting point", "Needs testing"],
          rows: [
            ["Casual", "Low friction and clear group rules", "Stay near defaults; review grind only after playing", "Death policy, progression feel, and raid pressure"],
            ["Small group", "Pacing that matches shared sessions", "Conservative load with documented backups", "Offline progress, base load, and session cadence"],
            ["Long-term survival", "Stability and preserved progression value", "Stable rules, scheduled backups, one change at a time", "Economy impact, long-session memory, and rollback needs"],
          ],
        },
      },
      {
        heading: "Casual server setting approach",
        bullets: [
          "Keep combat and Pal balance close to default so official progression remains recognizable.",
          "Use clear death and rollback rules that reduce arguments after disconnects or mistakes.",
          "Review grind-related settings only after the group experiences Version 1.0 crafting and capture balance.",
          "Enable dedicated-server voice chat only if the group wants it and uses a supported platform.",
          "Treat any easier or faster profile as a group preference, not an official best configuration. Needs in-game verification.",
        ],
      },
      {
        heading: "Small group server approach",
        paragraphs: [
          "For a small group, match progression to actual session frequency rather than copying a public-server preset. A group that plays together weekly has different needs from players who join independently every day.",
          "Keep base and player load conservative until the real world is tested. Version 1.0 includes dedicated-server optimization, but a safe capacity or object limit cannot be inferred from the changelog alone. Needs in-game verification.",
        ],
      },
      {
        heading: "Long-term survival server approach",
        paragraphs: [
          "Long-term worlds benefit from stable rules, scheduled backups, documented changes, and a rollback policy. Avoid large progression boosts or sudden difficulty changes that can permanently distort an established economy or invalidate player effort.",
          "Before changing bases, raids, resource availability, Pal work, or death behavior, test the change on a copy and announce it in advance. Keep the pre-change configuration with the backup.",
        ],
      },
      {
        heading: "Settings that need testing after 1.0",
        bullets: [
          "Player and base load under the expected concurrent population. Needs in-game verification.",
          "Experience and capture pacing after the official balance overhaul. Needs in-game verification.",
          "Gathering and crafting rates with new recipes, ores, tools, and resource distribution. Needs in-game verification.",
          "Raid pressure after the new wave-based system and scaling behavior. Needs in-game verification.",
          "Pal work pressure after Work Suitability and base behavior changes. Needs in-game verification.",
          "Memory use, stuttering, restart frequency, and long-session stability. Needs in-game verification.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This framework is based on Pocketpair's official Palworld v1.0 Steam changelog, including changed dedicated-server defaults, balance revisions, raid changes, multiplayer updates, and optimization work. Pocketpair does not publish a universal best preset, so this page avoids unsupported exact values and marks real-world recommendations for gameplay testing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this page give exact best 1.0 numbers now?",
        answer:
          "No. Pocketpair does not provide a universal best preset, and exact values depend on group size, goals, world age, and real performance. Needs in-game verification.",
      },
      {
        question: "What setting style is safest for a first server?",
        answer:
          "A documented profile close to Version 1.0 defaults, with backups and scheduled review points, is the safest starting framework.",
      },
      {
        question: "When should I change server settings?",
        answer:
          "Change a setting after the group can explain the problem and after a private test. Avoid changing several categories at once.",
      },
      {
        question: "Does server optimization mean I should raise player or base limits?",
        answer:
          "Not automatically. The changelog confirms optimization work, but safe capacity for a specific host and world needs in-game verification.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 Multiplayer Guide",
    slug: "server/palworld-1-0-multiplayer-guide",
    category: "server",
    categoryLabel: "Multiplayer",
    description:
      "Practical Palworld 1.0 multiplayer guide covering co-op formats, host decisions, guild roles, voice chat, backups, clean connection testing, group rules, and troubleshooting.",
    shortAnswer:
      "Choose the right host format, agree on world and progression rules, keep backups, match game versions, test the server unmodded, and verify joining, saving, restart persistence, guild permissions, and chat before treating a multiplayer world as stable.",
    playerAdvice: [
      "New players should join smaller groups first if they want to learn without pressure.",
      "Returning players should explain old-world expectations clearly instead of assuming everyone wants the same pace.",
      "Hosts should document reset rules and rollback rules before reopening an updated world, even for friend groups.",
    ],
    lastUpdated: "July 11, 2026",
    readingTime: "10 min read",
    tags: ["multiplayer", "co-op", "server"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Version 1.0 adds optional dedicated-server voice chat, except on WinGDK.",
      "Guild roles, permissions, structure access, markers, and login notifications were expanded.",
      "Chat, server joining, password entry, IP entry, server lists, save processing, and unstable-connection indicators received official changes.",
      "Pocketpair lists dedicated-server, co-op, memory, and high-load optimization and stability work.",
    ],
    pendingUpdates: [
      "Safe player capacity, long-session stability, latency under load, platform-specific issues, and MOD compatibility need in-game verification.",
    ],
    sourceNotes: [
      "Multiplayer facts were checked against Pocketpair's official Palworld v1.0 Steam changelog and official MOD warning.",
    ],
    visual: {
      src: "/assets/palworld-1-0-multiplayer-setup-map.webp",
      alt: "Palworld 1.0 multiplayer setup map showing host choice, shared rules, clean test, guild permissions, and stable reopening",
      caption: "A reliable multiplayer world starts with ownership and backups, then moves through clean testing and shared rules.",
    },
    relatedLinks: [
      { label: "Server Setup Guide", href: "/server/palworld-1-0-server-setup-guide/" },
      { label: "Best Server Settings", href: "/server/palworld-1-0-best-server-settings/" },
      { label: "Server Owner Checklist", href: "/server/palworld-1-0-server-owner-checklist/" },
      { label: "MOD Warning", href: "/guides/palworld-1-0-mods-warning-compatibility-guide/" },
    ],
    sections: [
      {
        heading: "Choose the right multiplayer format",
        paragraphs: [
          "A locally hosted co-op world is simple for a small group but depends on the host being online. A dedicated server supports persistent access but adds backups, configuration, version control, permissions, and performance monitoring.",
          "Choose based on ownership and uptime before comparing settings. Moving a committed group later is more disruptive than starting with conservative rules.",
        ],
        table: {
          headers: ["Format", "Good fit", "Required decision", "Main risk"],
          rows: [
            ["Host-based co-op", "Friends playing together on a schedule", "Who owns the save and when the host is online", "Progress stops when the host is unavailable"],
            ["Private dedicated server", "Small groups needing persistent access", "Who maintains backups, updates, and settings", "Configuration or host failures affect everyone"],
            ["Community server", "Larger groups with rules and moderation", "Roles, permissions, resets, support, and enforcement", "Griefing, uneven progression, and heavier workload"],
          ],
        },
      },
      {
        heading: "Group decisions to make before playing",
        bullets: [
          "Who owns the world and who can restore a backup?",
          "Will the server run continuously or only during shared sessions?",
          "Can players progress missions and bosses independently?",
          "Are storage, rare resources, base zones, and captured Pals shared or personal?",
          "Who can change settings, roles, permissions, or MODs?",
          "What triggers a rollback, reset, or maintenance window?",
        ],
      },
      {
        heading: "Official Version 1.0 multiplayer changes",
        paragraphs: [
          "Pocketpair confirms expanded guild roles and permissions, guild markers, login notifications, clearer chat system messages, anti-impersonation measures, longer chat history, server-list improvements, password and IP-entry changes, save-process work, and unstable-connection indicators.",
          "Dedicated servers can enable voice chat through world settings, but Pocketpair states that WinGDK does not support it. Steam and Mac versions can optionally link Discord accounts. These features should be tested with the actual platform combination before a community depends on them.",
        ],
      },
      {
        heading: "Clean multiplayer smoke test",
        bullets: [
          "Back up the complete world and remove unsupported MOD files or loaders.",
          "Confirm the host/server and every test client use compatible Version 1.0 builds.",
          "Join with at least two clients and check spawn, character data, password behavior, and guild membership.",
          "Access a representative base, move items, assign a Pal, and test structure permissions.",
          "Save, log out, restart the host/server, reconnect, and confirm persistence.",
          "Run a longer private session before calling capacity or stability verified.",
        ],
      },
      {
        heading: "How to diagnose multiplayer problems",
        table: {
          headers: ["Symptom", "Check first", "Next action"],
          rows: [
            ["Cannot join", "Server/client version, password, IP entry, server status", "Test a clean unmodded client and confirm the address"],
            ["One player stutters", "That client's FPS, drivers, background apps, and connection", "Compare in the same area with another client"],
            ["Everyone delays", "Host/server load, connection indicators, world simulation", "Restart privately and inspect server resources"],
            ["Progress disappears", "Save completion, shutdown method, restart persistence", "Stop access and restore only from a verified backup"],
            ["Permissions fail", "Guild role and structure access settings", "Test with a temporary role before changing production access"],
          ],
        },
      },
      {
        heading: "Rules that keep a long-term group healthy",
        bullets: [
          "Use one announcement channel for maintenance, settings, MODs, and rollback notices.",
          "Document world purpose, progression pace, PvP/PvE policy, shared resources, and reserved zones.",
          "Do not change several progression or difficulty categories at once.",
          "Keep the pre-change configuration beside the matching world backup.",
          "Use guild permissions for responsibility, then test them before restricting important structures.",
        ],
      },
      {
        heading: "What still needs in-game verification",
        paragraphs: [
          "The official changelog confirms engineering and feature changes, not a universal safe player count or proof of stable long sessions on every host. Capacity, latency, memory use, cross-platform behavior, voice quality, MOD combinations, and world-specific problems need in-game verification.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide uses Pocketpair's official Palworld v1.0 Steam changelog and official MOD warning. It separates confirmed multiplayer features from host-specific performance and stability claims.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is multiplayer the best way to start Palworld 1.0?",
        answer:
          "It can be, but solo is easier for learning. Multiplayer works best when hosting, progression pace, and reset rules are already agreed.",
      },
      {
        question: "What should a multiplayer group test first?",
        answer:
          "Joining, character loading, a representative base, guild permissions, saving, restart persistence, and reconnect behavior on a backed-up unmodded world.",
      },
      {
        question: "Should groups start fresh?",
        answer:
          "Pocketpair says existing saves can continue and recommends a fresh character for the reworked experience. Back up and privately test any important old group world.",
      },
      {
        question: "Does Version 1.0 guarantee a higher server capacity?",
        answer:
          "No. The official changelog confirms optimization and stability work, but safe capacity depends on the host, world, settings, uptime, and player behavior. Needs in-game verification.",
      },
    ],
    sourceLinks: [
      { label: "Pocketpair official Palworld v1.0 release changelog on Steam", href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658" },
      { label: "Pocketpair official MOD warning for Palworld 1.0", href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004" },
    ],
  },
  {
    title: "Palworld 1.0 Performance Settings",
    slug: "guides/palworld-1-0-performance-settings",
    category: "guides",
    categoryLabel: "Performance",
    description:
      "Palworld 1.0 performance troubleshooting guide with a repeatable benchmark method, symptom diagnosis, safe graphics-setting order, multiplayer separation, and crash checklist.",
    shortAnswer:
      "Create a repeatable test scene, record the symptom, separate FPS from server or network delay, change one graphics category at a time, and keep the change only when the same test shows a measurable improvement without new instability.",
    playerAdvice: [
      "New players should prioritize smooth play over max visuals during the first session.",
      "Returning players should retest old graphics presets because 1.0 performance may differ from Early Access builds.",
      "Multiplayer players should check whether lag is happening to everyone before assuming their own PC settings are the cause.",
    ],
    lastUpdated: "July 11, 2026",
    readingTime: "10 min read",
    tags: ["performance", "settings", "troubleshooting"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Pocketpair lists optimization for equipment, weapons, foliage, gatherable objects, dense placed objects, spawn points, high-load processing, memory, item searches, and Base Pal work-state searches.",
      "The changelog also lists crash, memory leak, infinite loading, multiplayer synchronization, dedicated-server, camera, riding, and terrain-related fixes.",
      "Vertical field-of-view adjustment is officially included in Version 1.0.",
    ],
    pendingUpdates: [
      "Hardware-specific FPS, frame-time gains, ideal presets, driver behavior, memory use, and long-session stability need measured testing.",
    ],
    sourceNotes: [
      "Optimization and bug-fix statements were checked against Pocketpair's official Palworld v1.0 Steam changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-performance-troubleshooting.webp",
      alt: "Palworld 1.0 performance troubleshooting flow showing symptom identification, repeatable test, one-setting change, comparison, and keep-or-revert decision",
      caption: "Performance tuning should be a repeatable comparison, not a list of copied settings without hardware context.",
    },
    relatedLinks: [
      { label: "Patch Notes Explained", href: "/palworld-1-0/palworld-1-0-patch-notes-explained/" },
      { label: "Multiplayer Guide", href: "/server/palworld-1-0-multiplayer-guide/" },
      { label: "Server Setup Guide", href: "/server/palworld-1-0-server-setup-guide/" },
      { label: "MOD Warning", href: "/guides/palworld-1-0-mods-warning-compatibility-guide/" },
    ],
    sections: [
      {
        heading: "Identify the problem before changing settings",
        paragraphs: [
          "Low average FPS, uneven frame pacing, traversal stutter, crashes, input delay, network latency, and server simulation delay are different problems. A graphics preset cannot solve all of them.",
          "Write down where the problem happens, whether it affects solo and multiplayer, whether other players feel it, and whether it begins immediately or after a long session.",
        ],
      },
      {
        heading: "Symptom diagnosis",
        table: {
          headers: ["Symptom", "Likely category", "First controlled check", "Do not assume"],
          rows: [
            ["Consistently low FPS", "GPU/CPU load or resolution", "Test the same scene with a lower render load", "One copied preset fits every PC"],
            ["Uneven motion despite acceptable FPS", "Frame pacing or streaming", "Use a stable frame cap and repeat the same route", "Average FPS tells the whole story"],
            ["Stutter near dense bases", "World/object simulation or rendering", "Compare away from the base and after restart", "Only graphics settings are responsible"],
            ["All players delay together", "Host/server/network", "Compare client FPS with server behavior", "Each player's GPU is the cause"],
            ["Crash or infinite load", "Files, MODs, driver, memory, or save state", "Back up; remove MODs; verify files; test clean", "A quality slider alone will fix it"],
          ],
        },
      },
      {
        heading: "Create a repeatable benchmark",
        bullets: [
          "Choose one save, location, route, weather condition, and camera direction.",
          "Close unnecessary background workloads and note the current game build and driver.",
          "Test long enough to include movement, combat effects, foliage, and a representative base if relevant.",
          "Change one category, repeat the same route, and compare smoothness, image quality, temperatures, and crashes.",
          "Revert changes that do not produce a clear benefit.",
        ],
      },
      {
        heading: "Safe graphics-setting order",
        paragraphs: [
          "Start with display behavior and render load, then move to scene complexity. This order makes it easier to tell which change helped instead of replacing the entire preset at once.",
        ],
        table: {
          headers: ["Order", "Category", "What to observe"],
          rows: [
            ["1", "Resolution, display mode, upscaling", "Image clarity, GPU load, UI readability"],
            ["2", "Frame cap and VSync", "Frame pacing, tearing, input feel"],
            ["3", "Shadows and effects", "Combat dips and GPU-heavy scenes"],
            ["4", "View distance and foliage", "Traversal, dense areas, object visibility"],
            ["5", "Remaining quality options", "Small visual gains versus measurable cost"],
          ],
        },
      },
      {
        heading: "Client FPS versus server or network delay",
        paragraphs: [
          "A client can render smoothly while interactions, Pals, or other players update late. If multiple players experience the same delay at the same time, inspect the host, server workload, connection indicators, world simulation, and restart behavior before reducing every client's graphics quality.",
          "Pocketpair confirms dedicated-server optimization and stability work, but it does not publish a universal capacity increase. Real player count, base load, memory behavior, and long-session stability need in-game verification.",
        ],
      },
      {
        heading: "Crash and loading checklist",
        bullets: [
          "Back up the affected save before repeated testing.",
          "Remove old MOD files and loaders manually; disabling them may not be enough.",
          "Verify game files and reproduce on a clean unmodded launch.",
          "Check available storage, background memory pressure, and driver stability.",
          "Compare a new or test save with the important world to separate installation issues from world-specific issues.",
          "Check later official hotfix and known-issue notices before applying unrelated fixes.",
        ],
      },
      {
        heading: "What the official optimization notes do and do not prove",
        paragraphs: [
          "The official changelog confirms engineering work in several high-load areas and a large bug-fix pass. It does not guarantee a specific FPS increase, eliminate every crash, or establish the best preset for a particular CPU, GPU, resolution, platform, save, or server.",
          "Any exact recommendation should state the hardware, resolution, build, test location, target frame rate, and measured result. Needs in-game verification.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide uses Pocketpair's official v1.0 optimization and bug-fix sections as the factual baseline. The troubleshooting order is a cautious testing framework and does not claim universal performance gains.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this guide name the best Palworld 1.0 performance settings now?",
        answer:
          "No universal preset is official. Exact settings depend on hardware, resolution, target frame rate, location, save complexity, and image-quality preference. Needs in-game verification.",
      },
      {
        question: "What should I adjust first?",
        answer:
          "Start with resolution, frame cap, VSync or upscaling options, shadows, effects, and view distance. Change one setting at a time.",
      },
      {
        question: "How do I know if the issue is server-side?",
        answer:
          "If multiple players feel delays at the same time while local FPS looks fine, investigate server performance, network conditions, or world simulation load.",
      },
      {
        question: "Does the Version 1.0 changelog guarantee higher FPS?",
        answer:
          "No. It confirms optimization work, but actual FPS, frame pacing, memory use, and stability must be measured on the specific system and world.",
      },
    ],
    sourceLinks: [
      { label: "Pocketpair official Palworld v1.0 release changelog on Steam", href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658" },
      { label: "Pocketpair official MOD warning for Palworld 1.0", href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004" },
    ],
  },
  {
    title: "Palworld 1.0 FAQ",
    slug: "guides/palworld-1-0-faq",
    category: "guides",
    categoryLabel: "FAQ",
    description:
      "Palworld 1.0 FAQ with official answers about release status, old saves, new characters, MOD cleanup, Sunreach, the World Tree, new Pals, servers, and multiplayer.",
    shortAnswer:
      "Palworld 1.0 is live. Existing saves can continue, Pocketpair recommends a fresh character for the reworked experience, old MOD files should be removed, and the update adds Sunreach, the World Tree, 72 Pals, revised servers, and multiplayer changes.",
    playerAdvice: [
      "New players should follow the revised main mission and learn the new progression before relying on tier lists.",
      "Returning players should back up saves, remove old MOD files, and inspect missions, bases, Pals, and server settings.",
      "Server players should confirm the world policy, backups, version, and settings before committing to a long-term multiplayer world.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    tags: ["faq", "release", "fresh save"],
    statusNotice: liveReleaseNotice,
    canonical: "/faq/",
    ...launchUpdateFields,
    confirmedChanges: [
      "Palworld Version 1.0 is live and the official release changelog is published.",
      "Existing saves can continue, while Pocketpair recommends a fresh character for the reworked experience.",
      "Sunreach, the World Tree, 72 additional Pals, changed dedicated-server defaults, and multiplayer improvements are official Version 1.0 features.",
    ],
    pendingUpdates: [
      "Answers about best routes, builds, settings, and practical performance still need release-build testing.",
    ],
    sourceNotes: [
      "Release and save answers were checked against Pocketpair's official v1.0 Steam changelog.",
    ],
    sections: [
      {
        heading: "Release-day answers from official sources",
        paragraphs: [
          "Pocketpair published the Palworld v1.0 official release changelog through Steam on July 10, 2026. The answers below summarize confirmed release information and separate it from recommendations that require actual gameplay testing.",
        ],
      },
      {
        heading: "What still needs verification",
        paragraphs: [
          "The official changelog confirms features and categories, but it does not establish the best Pal rankings, fastest routes, exact server preset, hardware-specific FPS change, or universal multiplayer stability. Those claims need in-game verification.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This FAQ is based on Pocketpair's official Palworld v1.0 Steam changelog and official MOD warning. The answers are paraphrased for clarity and do not reproduce the full announcement. Testing-dependent answers are labeled accordingly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Palworld 1.0 live?",
        answer:
          "Yes. Palworld Version 1.0 is live, and Pocketpair has published the official release changelog through Steam.",
      },
      {
        question: "Should I start a new character?",
        answer:
          "No. Starting fresh is not required. Pocketpair recommends a new character to experience the reworked game, but the choice remains with the player.",
      },
      {
        question: "Can I continue my old save?",
        answer:
          "Yes. Pocketpair says existing save data can continue. Back it up before loading Version 1.0, especially if the world used MODs.",
      },
      {
        question: "Should I remove MODs before updating?",
        answer:
          "Yes. Pocketpair warns that disabling MODs may leave files or loaders active. Remove old MOD files manually, verify game files, and test the game unmodded before restoring compatible MODs.",
      },
      {
        question: "What is Sunreach?",
        answer:
          "Sunreach is a new group of floating islands with a distinct civilization, new Pals, tower bosses, and Soralite-based resource progression. Best routes and recommended entry preparation need in-game verification.",
      },
      {
        question: "What is the World Tree?",
        answer:
          "The World Tree is the central destination of the reworked story and a major challenge. It is linked to Awakening, Radiant Gems, Paloxite, Ancient Civilization Relics, new Pals, and special passive skills.",
      },
      {
        question: "How many new Pals are there?",
        answer:
          "Yes. Version 1.0 adds 47 new Pals and 25 variants, for 72 additions and an official total of 287 Pals.",
      },
      {
        question: "Are server settings changed?",
        answer:
          "Yes. Pocketpair adjusted dedicated-server defaults to more closely match single-player Normal difficulty, while balance, progression, raids, and other systems also changed. Exact best settings need in-game verification.",
      },
      {
        question: "Is multiplayer improved?",
        answer:
          "The official changelog confirms voice chat for supported dedicated-server setups, guild roles and permissions, improved chat, server joining and saving changes, connection indicators, and stability work. Real results under a specific workload need in-game verification.",
      },
      {
        question: "What should returning players do first?",
        answer:
          "Back up the save, remove old MOD files, verify a clean Version 1.0 launch, inspect mission progress, check important bases and Pals, and review server settings before resuming long-term play.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld 1.0 announcement",
        href: "https://www.pocketpair.jp/en/game-news/palworld-1-0-july-10-cinematic-trailer-revealed/",
      },
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 Patch Notes Explained",
    slug: "palworld-1-0/palworld-1-0-patch-notes-explained",
    category: "palworld-1-0",
    categoryLabel: "Patch Notes",
    description:
      "Palworld 1.0 patch notes explained with official details on Sunreach, the World Tree, 72 new Pals, combat, bases, raids, multiplayer, performance, saves, and MODs.",
    shortAnswer:
      "Palworld 1.0 is live. Pocketpair's official release changelog confirms Sunreach, the World Tree, 72 additional Pals, a level cap of 80, reworked missions, combat and base systems, wave-based raids, multiplayer upgrades, optimization work, and a large bug-fix pass.",
    playerAdvice: [
      "New players should follow the main mission flow, use watchtowers and settlements to orient themselves, and learn the revised capture, Pal, and base systems before chasing endgame builds.",
      "Returning players should back up saves, remove old MOD files, review mission progress, inspect every important base, and re-read Pal skills before resuming long-term plans.",
      "Server owners should verify the server build, back up world data, review changed defaults, and test multiplayer stability privately before reopening a permanent world.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "14 min read",
    featured: true,
    tags: ["patch notes", "1.0 changes", "confirmed updates"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    updateNotice:
      "Official patch notes verified. This summary covers confirmed categories and high-impact facts without reproducing the full changelog.",
    confirmedChanges: [
      "Version 1.0 is live and Palworld has exited Early Access.",
      "Sunreach, the World Tree, seven smaller islands, renewed sanctuaries, settlements, ancient ruins, and watchtowers expand or revise exploration.",
      "The update adds 47 new Pals and 25 variants, for 72 additions and 287 Pals in total, alongside Awakening, Mutation, and broad skill rebalancing.",
      "Pocketpair documents major changes to missions, combat, equipment, base building, raids, multiplayer, balance, UI, graphics, sound, optimization, and bug fixes.",
      "Existing save data can be continued, although Pocketpair recommends a fresh character for the new experience.",
      "Pocketpair warns that old mods can cause crashes, progression problems, or save corruption and recommends backing up saves and removing old mod files.",
    ],
    pendingUpdates: [
      "Verify platform-specific known issues and any launch hotfixes in later official notices.",
      "Test real dedicated-server performance and multiplayer stability under load.",
      "Test balance-sensitive routes, Pal rankings, builds, base layouts, and server setting recommendations before publishing them as best choices.",
      "Measure practical performance changes across hardware instead of inferring FPS gains from general optimization notes.",
    ],
    sourceNotes: [
      "Primary source: Pocketpair's official Steam release changelog, published July 10, 2026 at 03:09 UTC.",
      "Launch trailer and Pocketpair news pages were used to confirm launch messaging, not to infer undocumented mechanics.",
    ],
    visual: {
      src: "/assets/palworld-1-0-update-categories-infographic.webp",
      alt: "Palworld 1.0 update categories infographic covering world, Pals, combat, bases, multiplayer, interface, performance, and fixes",
      caption: "The official v1.0 changelog spans eight player-facing categories; testing-dependent recommendations remain separate.",
    },
    relatedLinks: [
      { label: "Sunreach Guide", href: "/palworld-1-0/palworld-1-0-sunreach-guide/" },
      { label: "World Tree Guide", href: "/palworld-1-0/palworld-1-0-world-tree-guide/" },
      { label: "New Pals Overview", href: "/palworld-1-0/palworld-1-0-new-pals-overview/" },
      { label: "Server Setup Guide", href: "/server/palworld-1-0-server-setup-guide/" },
      { label: "MOD Warning", href: "/guides/palworld-1-0-mods-warning-compatibility-guide/" },
    ],
    sections: [
      {
        heading: "Palworld 1.0 is live",
        paragraphs: [
          "Palworld left Early Access with Version 1.0 on July 10, 2026. Pocketpair published the full official release changelog through Palworld's Steam news channel, and this page summarizes the player-facing changes without reproducing the announcement line by line.",
          "The public release label in the official announcement is v1.0. Platform-specific hotfixes or later build identifiers should be checked against newer official notices before troubleshooting a current installation.",
        ],
      },
      {
        heading: "Biggest changes in Palworld 1.0",
        bullets: [
          "Sunreach and the World Tree add major destinations, while ancient ruins, watchtowers, settlements, sanctuaries, and smaller islands reshape the wider world.",
          "The main story and mission flow now connect exploration, tower bosses, and the route toward the World Tree more directly.",
          "Seventy-two Pals were added, and Pal progression now includes Awakening, Mutation, revised Partner Skills, expanded Work Suitability, and broad balance changes.",
          "Combat movement, equipment progression, bases, raids, multiplayer, UI, graphics, sound, optimization, and bug fixes all received substantial official changes.",
        ],
      },
      {
        heading: "What changed and what to do now",
        table: {
          headers: ["Category", "What changed", "What players should do now", "Needs verification?"],
          rows: [
            ["World", "Sunreach, World Tree, smaller islands, settlements, ruins, sanctuaries, and watchtowers", "Follow the revised mission and reveal the map before committing to routes", "Routes, gates, and farming loops: Yes"],
            ["Pals", "47 new Pals, 25 variants, Awakening, Mutation, skills, and Work Suitability changes", "Re-read skills and delay tier-list investments", "Rankings and spawn routes: Yes"],
            ["Combat and gear", "Movement, weapons, accessories, skills, bosses, and equipment progression changed", "Recheck old builds before spending rare resources", "Best builds and boss tactics: Yes"],
            ["Bases and raids", "Aquatic Construction, work changes, wave raids, and ammunition-free defenses", "Inspect old bases, assignments, paths, and defenses", "Optimal layouts and raid scaling: Yes"],
            ["Multiplayer", "Server defaults, joining, guilds, chat, saves, voice chat, and stability work", "Back up, match versions, and run a private smoke test", "Capacity and long-session stability: Yes"],
            ["UI and performance", "Search, filters, maps, status details, optimization, and bug fixes", "Reset assumptions and test on the actual hardware/world", "FPS and memory gains: Yes"],
          ],
        },
      },
      {
        heading: "New Areas & World Improvements",
        paragraphs: [
          "Version 1.0 changes more than the endgame. Seven smaller islands were added across volcano, desert, and ruins biomes. New settlements appear in established regions and Sunreach, while ancient ruins provide exploration activities and schematic rewards.",
          "Watchtowers reveal nearby map areas and become fast-travel points. Wildlife Sanctuaries were rebuilt with distinct environments, exclusive encounters, rare materials, bosses, and active defenses. Pal habitats and spawn levels were also reviewed across the map.",
          "The player level cap increased from 65 to 80. Exact best leveling routes and the most efficient order for visiting revised areas need testing. Needs in-game verification.",
        ],
      },
      {
        heading: "Sunreach explained",
        paragraphs: [
          "Sunreach is a new group of floating islands above Palpagos. The official notes describe a civilization shaped by this airborne environment and confirm new Pals, tower bosses, and resources that require specialized equipment to mine.",
          "Soralite is tied to Sunreach and supports new crafting and building progression. The official changelog confirms the destination and its systems, but the safest access route, recommended entry level, fastest resource loop, and best tower order need gameplay testing. Needs in-game verification.",
        ],
      },
      {
        heading: "World Tree explained",
        paragraphs: [
          "The World Tree is the central destination for Palworld's reworked story and the place Pocketpair frames as the player's greatest challenge. It is connected to the mystery of the towers and the conflicts between the factions of Palpagos.",
          "Officially confirmed World Tree rewards and systems include Paloxite, Ancient Civilization Relics, Radiant Gems used for Awakening, special passive skills, and encounters with new Pals. Exact access requirements, route difficulty, boss tactics, and farming efficiency need in-game verification.",
        ],
      },
      {
        heading: "New Pals overview",
        paragraphs: [
          "Version 1.0 adds 47 new Pals and 25 variant Pals, bringing the official total to 287. They are distributed across Sunreach, the World Tree, and other regions rather than belonging to one destination alone.",
          "Pal progression also changed around the entire roster. Awakening uses Radiant Gems to strengthen Pals, Mutation can occur during breeding, more than 200 Partner Skills were reworked, and Work Suitability now extends to 10 levels. Capture Bonuses require five captures instead of twelve, while maximum condensation requires 48 Pals instead of 116.",
          "A definitive best-Pal tier list, exact spawn route, mutation rate, and optimal breeding strategy need in-game verification.",
        ],
      },
      {
        heading: "Story and quests",
        paragraphs: [
          "The main mission structure now links exploration, tower bosses, and the journey to the World Tree more clearly. Version 1.0 also adds connected sub-missions, NPCs, and Journals across the world.",
          "Main-mission and sub-mission progress was reset because rewards and progression changed. The official notes say some tutorial and Tower Boss missions may be marked complete automatically based on existing Tower Boss defeat records. Returning players should inspect the mission log before assuming progress was lost or preserved incorrectly.",
        ],
      },
      {
        heading: "Combat changes",
        paragraphs: [
          "Player movement and weapon handling were reworked for responsiveness. The official notes include dash behavior while attacking or aiming, attacks during dashes, reload continuation through dodges, and more responsive directional control while rolling.",
          "Almost all Pal Active Skills were rebalanced for power, behavior, cooldown, and usability. Tower Boss arenas and encounters were revised, the standard Tower Boss time limit became five minutes, and players can issue a direct attack command to an active Pal.",
          "Old damage rankings, boss strategies, and best combat builds should not be treated as current without testing. Needs in-game verification.",
        ],
      },
      {
        heading: "New equipment and items",
        paragraphs: [
          "Major additions include the Wing Pack, which uses Wing Cells for Pal-free flight, and the Plasma Multicutter, which gathers ore and wood and can be used while mounted. The update also adds 13 weapons, expands weapon slots, and introduces 44 accessories.",
          "Soralite from Sunreach and Paloxite from the World Tree support new crafting and building content. Ancient Civilization Relics can be converted into enhancement or crafting materials, while Nutrient temporarily prevents hunger loss.",
          "Exact weapon rankings, accessory combinations, resource-per-minute routes, and endgame loadouts need in-game verification.",
        ],
      },
      {
        heading: "Base building changes",
        paragraphs: [
          "Aquatic Construction allows shoreline and offshore building, while new structural parts, furniture, greenery, and ancient-civilization pieces expand creative options. The official changelog also adjusts building alignment, replacement behavior, work priorities, resource distribution, and several Base Pal work issues.",
          "Work Suitability levels now extend to 10 and all Pals were rebalanced for work. Because work values, Pal skills, resource distribution, and raid behavior changed together, old base tier lists and ideal layouts need in-game verification.",
        ],
      },
      {
        heading: "Raids and base defense",
        paragraphs: [
          "Base raids now use successive waves and award completion rewards after all waves are defeated. Raid enemy types depend on the surrounding environment, defense structures operate without consuming ammunition, and raid enemy levels scale with the Work Pals assigned to the base.",
          "A visiting Negotiator can prevent an upcoming raid in exchange for gold. The Gold Coin Assembly Line can also trigger a dedicated raid event. The strongest defensive layout and the practical value of each defense structure need in-game verification.",
        ],
      },
      {
        heading: "Multiplayer and server changes",
        paragraphs: [
          "Dedicated servers can enable in-game voice chat through world settings, although the official notes exclude WinGDK support. Guilds receive roles, permissions, markers, login notifications, and access restrictions for certain structures. Chat gained clearer system messages, anti-impersonation measures, and up to 200 lines of history.",
          "Server joining, password handling, IP entry, the server list, and save processing were improved. Steam and Mac versions can optionally link Discord accounts. Pocketpair also reports improved stability for dedicated servers, co-op, and supported platforms.",
          "The official changelog does not define a universal safe player count or prove stability under every workload. Server capacity and long-session stability need in-game verification.",
        ],
      },
      {
        heading: "UI / UX changes",
        paragraphs: [
          "The Pal Box now has search and additional sorting, crafting screens add name and category filters, and the Paldeck can filter by capture-bonus status and elements. Status screens expose more bonuses, while Partner Skill descriptions show clearer effect values.",
          "Map zooming and icon selection were improved, guild markers can be shared, bases under raid are marked, and cave or cliff locations receive clearer map indicators. Other quality-of-life changes include an inventory hotkey, loading-screen tips, weapon-list display, conversation skipping, and vertical FOV support.",
        ],
      },
      {
        heading: "Performance improvements",
        paragraphs: [
          "Pocketpair lists optimization work for dedicated-server processing, equipment and weapons, foliage and gatherable objects, dense placed-object or spawn-point situations, high-load processes, memory handling, and data searches used by items and work states.",
          "These notes confirm engineering work, not a guaranteed FPS increase or a specific server-capacity gain on every system. Hardware results, frame-time improvements, memory use, and real server load need in-game verification.",
        ],
      },
      {
        heading: "Bug fixes",
        paragraphs: [
          "The official list covers progression blockers, infinite loading, login and respawn issues, stuck Pals and NPCs, Base Pal work problems, riding and camera problems, multiplayer synchronization, crashes, memory leaks, terrain clipping, dedicated-server failures, and many smaller issues.",
          "A listed fix should not be treated as proof that every related issue is eliminated on every platform. Reproducibility after the launch build and later hotfixes needs in-game verification.",
        ],
      },
      {
        heading: "MOD warning",
        bullets: [
          "Back up important save data before updating or changing MODs.",
          "Remove old MOD files and MOD loaders manually; disabling a MOD manager entry may not remove files that still load.",
          "Unsubscribe from Steam Workshop MODs and verify the integrity of the game files.",
          "Launch the game in an unmodded state before adding anything back.",
          "Only reinstall MODs after their creators confirm 1.0 compatibility, then test them one at a time.",
        ],
      },
      {
        heading: "What new players should do first",
        bullets: [
          "Follow the reworked main mission instead of relying on an Early Access route.",
          "Build a flexible starter base and learn the revised Work Suitability and assignment systems.",
          "Use watchtowers, settlements, and nearby objectives to understand the new world flow.",
          "Capture a varied early team before committing resources to a long-term build.",
          "Delay tier-list decisions until official changes have been tested in normal play. Needs in-game verification.",
        ],
      },
      {
        heading: "What returning players should check first",
        bullets: [
          "Back up every important local or server save before loading it in Version 1.0.",
          "Remove old MOD files and confirm the game launches cleanly.",
          "Inspect the mission log because mission progress and rewards were reworked.",
          "Check base boundaries, Pal assignments, Work Suitability, Partner Skills, and stored equipment.",
          "Review server settings and changed defaults before reopening multiplayer access.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide is based on Pocketpair's official Palworld v1.0 release changelog published through Steam. It paraphrases and organizes confirmed changes for players instead of reproducing the full announcement. Any claim about best routes, rankings, performance, stability, or ideal settings that is not established by the official notes is marked as needing gameplay verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are the Palworld 1.0 patch notes published?",
        answer:
          "Yes. Pocketpair published the official Palworld v1.0 release changelog on July 10, 2026.",
      },
      {
        question: "Will this page summarize every line of the patch notes?",
        answer:
          "No. It organizes the highest-impact official changes and links to the complete changelog instead of copying the announcement line by line.",
      },
      {
        question: "Can I continue an Early Access save?",
        answer:
          "Pocketpair says existing save data can continue, while recommending a new character for the reworked experience. Back up the save first, especially if it used MODs.",
      },
      {
        question: "Does the changelog prove performance is better on my PC or server?",
        answer:
          "No. It confirms optimization work, but exact FPS, frame-time, memory, and server-load results depend on the system and world. Needs in-game verification.",
      },
      {
        question: "Are old tier lists and server presets still reliable?",
        answer:
          "Not automatically. Pal balance, progression, crafting, bases, raids, and server defaults changed. Recheck old advice against Version 1.0. Needs in-game verification.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Pocketpair official Palworld game news",
        href: "https://www.pocketpair.jp/en/game-news/",
      },
      {
        label: "Palworld 1.0 official launch trailer",
        href: "https://youtu.be/1fpGg9wNM9A",
      },
    ],
  },
  {
    title: "Palworld 1.0 Sunreach Guide",
    slug: "palworld-1-0/palworld-1-0-sunreach-guide",
    category: "palworld-1-0",
    categoryLabel: "Sunreach",
    description:
      "Official-source Palworld 1.0 Sunreach guide covering the floating islands, confirmed content, Soralite, towers, new Pals, and details that still need verification.",
    shortAnswer:
      "Sunreach is a new group of floating islands above Palpagos with its own long-established civilization, new Pals, tower bosses, settlements, and Soralite resources that require specialized mining equipment.",
    playerAdvice: [
      "Treat the official changelog as confirmation of Sunreach's features, not as a complete route or progression guide.",
      "Bring flexible equipment and inventory space until the area's resource and combat demands are understood.",
      "Do not rely on unverified claims about the best access route, tower order, spawn map, or farming loop. Needs in-game verification.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["Sunreach", "new regions", "Soralite"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Sunreach is a new set of floating islands above Palpagos.",
      "The region includes new Pals, tower bosses, a settlement, and Soralite that requires specialized equipment to mine.",
      "Sunreach is connected to new crafting, building, story, expedition, and fishing content.",
    ],
    pendingUpdates: [
      "Access requirements, recommended level, tower order, exact Pal spawns, and optimal Soralite routes need in-game verification.",
    ],
    sourceNotes: [
      "Sunreach facts were checked against Pocketpair's official Palworld v1.0 Steam changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-sunreach-floating-islands.webp",
      alt: "Original concept illustration of Sunreach-inspired floating islands above clouds with bridges, waterfalls, and glowing minerals",
      caption: "Original fan-made concept illustration; it is not an official map or route reference.",
    },
    sections: [
      {
        heading: "What is Sunreach?",
        paragraphs: [
          "Sunreach is a new airborne region made up of islands floating above Palpagos through the power of Paldium. Pocketpair describes it as an environment unlike the surface, with a distinct civilization that developed there over a long period.",
          "It is one of Version 1.0's major destinations and supports new exploration, story, combat, Pal, resource, crafting, and building content.",
        ],
      },
      {
        heading: "Confirmed Sunreach content",
        table: {
          headers: ["Officially confirmed", "What it means", "Verification status"],
          rows: [
            ["Floating-island region", "A major airborne destination above Palpagos", "Confirmed by official changelog"],
            ["New Pals and tower bosses", "New encounters and combat progression", "Identities, locations, and tactics need testing"],
            ["Settlement and sub-missions", "NPC services and regional mission content", "Exact unlock order needs testing"],
            ["Soralite", "Exclusive ore requiring specialized mining equipment", "Deposit routes and respawns need testing"],
            ["Expedition and fishing destinations", "Additional high-difficulty activities", "Rewards and efficiency need testing"],
          ],
        },
      },
      {
        heading: "Soralite and new progression",
        paragraphs: [
          "Soralite is an ore found only in Sunreach according to the official changelog. Soralite Ingots are used in new equipment, while the resource also supports additional crafting and building progression.",
          "The Plasma Multicutter is confirmed as a new gathering tool, and Pocketpair says Sunreach ores require specialized equipment. The fastest tool progression and most efficient deposit route need in-game verification.",
        ],
      },
      {
        heading: "How Sunreach connects to Version 1.0",
        paragraphs: [
          "Sunreach is part of the reworked story path leading toward the World Tree. It also participates in the broader Version 1.0 progression changes, including a level cap of 80, new technologies, revised missions, new Pals, and rebalanced rewards.",
          "The official notes confirm the content relationships but do not publish a mandatory route through every tower, settlement, or resource node.",
        ],
      },
      {
        heading: "What to prepare",
        bullets: [
          "Review the reworked main mission and map markers before choosing a route.",
          "Carry equipment that supports exploration, combat, and resource gathering rather than a single specialized build.",
          "Leave inventory space for unfamiliar ores, schematics, and rewards.",
          "Use a backed-up save if exploring from a long-running Early Access world.",
          "Treat exact preparation, difficulty, and route advice as provisional. Needs in-game verification.",
        ],
      },
      {
        heading: "What still needs in-game verification",
        bullets: [
          "The exact access path and any progression gates.",
          "Recommended player level and equipment tier.",
          "Tower order, boss strategies, and travel time.",
          "Exact Pal spawn locations and capture routes.",
          "Soralite density, respawn behavior, and efficient farming loops.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide is based on Pocketpair's official Palworld v1.0 Steam changelog. It summarizes confirmed Sunreach features without using trailer speculation, community maps, datamines, or unverified route claims.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Sunreach officially part of Palworld 1.0?",
        answer:
          "Yes. Pocketpair identifies Sunreach as a major new Version 1.0 region made up of floating islands above Palpagos.",
      },
      {
        question: "What can players find in Sunreach?",
        answer:
          "The official changelog confirms new Pals, tower bosses, a settlement, Soralite, sub-missions, expeditions, and high-difficulty fishing content.",
      },
      {
        question: "What level should I be before entering Sunreach?",
        answer:
          "The official changelog does not provide a universal recommended level. Needs in-game verification.",
      },
      {
        question: "Is Soralite exclusive to Sunreach?",
        answer:
          "Yes. The official changelog says Soralite can only be mined in Sunreach.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 World Tree Guide",
    slug: "palworld-1-0/palworld-1-0-world-tree-guide",
    category: "palworld-1-0",
    categoryLabel: "World Tree",
    description:
      "Official-source Palworld 1.0 World Tree guide covering its story role, confirmed rewards, Awakening, Radiant Gems, Paloxite, relics, and unverified details.",
    shortAnswer:
      "The World Tree is the central destination of Palworld 1.0's reworked story and a major challenge connected to new Pals, Awakening, Radiant Gems, Paloxite, Ancient Civilization Relics, expeditions, and special passive skills.",
    playerAdvice: [
      "Follow the reworked main mission rather than assuming the World Tree works like a normal open-world landmark.",
      "Keep important saves backed up before committing rare resources or changing a long-running character for World Tree progression.",
      "Do not treat unverified access routes, boss lists, reward tables, or completion times as official. Needs in-game verification.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["World Tree", "story", "Awakening"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "The World Tree is central to the reworked Palworld story and is presented as a major challenge.",
      "Radiant Gems found there support Pal Awakening.",
      "Paloxite and Ancient Civilization Relics are exclusive World Tree resources in the official changelog.",
      "The area includes new Pals, special passive skills, expeditions, and high-difficulty fishing content.",
    ],
    pendingUpdates: [
      "Access requirements, boss mechanics, exact rewards, route difficulty, and completion order need in-game verification.",
    ],
    sourceNotes: [
      "World Tree facts were checked against Pocketpair's official Palworld v1.0 Steam changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-world-tree-progression.webp",
      alt: "Original concept illustration of a monumental glowing World Tree beyond layered wilderness and ancient ruins",
      caption: "Original fan-made progression concept; it does not depict an official route, boss, or map layout.",
    },
    sections: [
      {
        heading: "What is the World Tree in Palworld 1.0?",
        paragraphs: [
          "Pocketpair describes the World Tree as the key to Palworld's story and the place where players face their greatest challenge. Version 1.0 reorganizes the main mission flow so exploration, tower bosses, and the path to the World Tree connect more naturally.",
          "The official notes establish its importance but do not provide a full walkthrough or every access condition.",
        ],
      },
      {
        heading: "Confirmed World Tree systems",
        table: {
          headers: ["Resource or system", "Official use", "What is not confirmed"],
          rows: [
            ["Radiant Gems", "Used for Pal Awakening", "Best targets, costs, and routes"],
            ["Paloxite", "New crafting and building progression", "Deposit map and farming efficiency"],
            ["Ancient Civilization Relics", "Converted into enhancement or crafting items", "Best conversion priorities"],
            ["New Pals and passive skills", "World Tree encounters and build options", "Full roster, drop rates, and rankings"],
            ["Expedition and fishing destinations", "High-difficulty activities", "Rewards, difficulty, and completion time"],
          ],
        },
      },
      {
        heading: "Awakening and Radiant Gems",
        paragraphs: [
          "Awakening is a new Pal-strengthening system. The official changelog says Radiant Gems are hidden in the World Tree and can be used to reveal more of a Pal's potential.",
          "The most efficient Gem route, total investment, best Awakening targets, and relative power gains need in-game verification.",
        ],
      },
      {
        heading: "Paloxite and Ancient Civilization Relics",
        paragraphs: [
          "Paloxite can only be mined at the World Tree and is required for new crafting and building content. Ancient Civilization Relics are also exclusive to the area and can be converted with a special device into useful items.",
          "Exact deposit locations, conversion priorities, and farming efficiency are not defined by the changelog. Needs in-game verification.",
        ],
      },
      {
        heading: "Story preparation for returning players",
        bullets: [
          "Review the mission log because main and sub-mission progress was reset for Version 1.0.",
          "Check which tutorial and Tower Boss missions were restored from recorded defeat progress.",
          "Re-read Pal skills, equipment, and base production before spending rare World Tree resources.",
          "Back up an important Early Access save before progressing through major new story content.",
        ],
      },
      {
        heading: "What still needs in-game verification",
        bullets: [
          "Exact entry requirements and mission prerequisites.",
          "Boss identities, phases, tactics, and recommended builds.",
          "Map layout, checkpoints, travel routes, and completion time.",
          "Exact Pal spawns, drop rates, reward tables, and resource respawns.",
          "Best Awakening targets and World Tree passive combinations.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide uses Pocketpair's official Palworld v1.0 Steam changelog as its factual source. It intentionally avoids datamined bosses, community reward tables, and speculative access instructions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the World Tree accessible in Palworld 1.0?",
        answer:
          "The official changelog presents it as a Version 1.0 destination and central story challenge. Exact access requirements need in-game verification.",
      },
      {
        question: "What resources are exclusive to the World Tree?",
        answer:
          "The official notes identify Paloxite and Ancient Civilization Relics as World Tree resources and connect Radiant Gems to Awakening there.",
      },
      {
        question: "Does the official changelog list every World Tree boss?",
        answer:
          "No. This guide does not publish an unverified boss list.",
      },
      {
        question: "Should I use Radiant Gems immediately?",
        answer:
          "The official notes confirm their Awakening purpose but not the best investment order. Needs in-game verification.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 New Pals Overview",
    slug: "palworld-1-0/palworld-1-0-new-pals-overview",
    category: "palworld-1-0",
    categoryLabel: "New Pals",
    description:
      "Official Palworld 1.0 new Pals overview covering the 47 new Pals, 25 variants, Awakening, Mutation, skill changes, work updates, and facts still needing testing.",
    shortAnswer:
      "Palworld 1.0 adds 47 new Pals and 25 variant Pals, bringing the official total to 287, while also introducing Awakening, Mutation, new Active and Passive Skills, revised Partner Skills, and expanded Work Suitability.",
    playerAdvice: [
      "Use the official totals as confirmed, but avoid assuming a complete spawn map or tier list is settled on release day.",
      "Re-read the skills of existing Pals because Version 1.0 changes far more than the newly added roster.",
      "Save rare breeding and enhancement resources until their practical value is understood. Needs in-game verification.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "8 min read",
    featured: true,
    tags: ["new Pals", "Awakening", "Mutation"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Version 1.0 adds 47 new Pals and 25 variants, for 72 additions and 287 Pals in total.",
      "New Pals appear across Sunreach, the World Tree, and other regions.",
      "Awakening, Mutation, Partner Skill reworks, new skills, new motions, and expanded Work Suitability affect Pal progression.",
    ],
    pendingUpdates: [
      "Complete spawn locations, capture routes, mutation rates, breeding priorities, and tier rankings need in-game verification.",
    ],
    sourceNotes: [
      "Roster totals and system changes were checked against Pocketpair's official Palworld v1.0 Steam changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-new-pals-data-card.webp",
      alt: "Palworld 1.0 data card showing 47 new Pals, 25 variants, 72 additions, and 287 total Pals without character artwork",
      caption: "Official changelog totals presented without unverified names, locations, or rankings.",
    },
    sections: [
      {
        heading: "How many new Pals are in Palworld 1.0?",
        paragraphs: [
          "Pocketpair confirms 47 new Pals and 25 variant Pals in Version 1.0. Together they add 72 entries and bring the official total number of Pals to 287.",
          "This overview focuses on confirmed roster and system information rather than reproducing an unverified database or ranking every new Pal.",
        ],
      },
      {
        heading: "New Pal tracking table",
        paragraphs: [
          "Pocketpair's changelog confirms totals but does not provide a complete, structured name-and-location database. This table stays intentionally unfilled until entries can be verified in game or in later official material.",
        ],
        table: {
          headers: ["Pal name", "Type", "Region", "Role", "Verification status"],
          rows: [
            ["Pending player verification", "Not yet verified", "Sunreach / World Tree / other regions", "Not yet verified", "Pending player verification"],
          ],
        },
      },
      {
        heading: "Where the new Pals appear",
        paragraphs: [
          "The official changelog places new encounters across Sunreach, the World Tree, and other regions. Wildlife Sanctuaries were also rebuilt, Pal habitats and spawn levels were rebalanced, and seven smaller islands were added.",
          "Exact coordinates, time conditions, rarity, capture routes, and region-by-region checklists need in-game verification.",
        ],
      },
      {
        heading: "Awakening",
        paragraphs: [
          "Awakening strengthens Pals with Radiant Gems found at the World Tree. It adds a new enhancement path beyond familiar Early Access progression systems.",
          "The exact gains, total resource costs, and best Pals to Awaken need in-game verification.",
        ],
      },
      {
        heading: "Mutation and breeding",
        paragraphs: [
          "Mutation gives breeding a low chance to produce a Pal with higher stats and a unique passive skill. New cakes can influence outcomes such as stats, egg count, mutation likelihood, or passive inheritance.",
          "The official notes confirm these functions but do not establish practical mutation rates or an optimal breeding method. Needs in-game verification.",
        ],
      },
      {
        heading: "Existing Pals also changed",
        bullets: [
          "More than 200 Partner Skills were reworked, and duplicate Pal effects generally no longer stack.",
          "Almost all Active Skills were reviewed for power, behavior, cooldown, or usability.",
          "New Passive Skills and World Tree Passive Skills expand build options.",
          "More than 100 new motions were added to existing Pals, with additional unique animations for new Pals.",
          "Work Suitability now extends to 10 levels and every Pal's work values were rebalanced.",
        ],
      },
      {
        heading: "Progression changes that affect collecting",
        bullets: [
          "Capture Bonuses now require five captures instead of twelve.",
          "Maximum condensation now requires 48 Pals instead of 116.",
          "Some Partner Skills no longer require Pal Gear before use.",
          "Pal habitats, merchant pricing, breeding combinations, and progression rewards were reviewed.",
        ],
      },
      {
        heading: "What still needs in-game verification",
        bullets: [
          "Complete new-Pal names and spawn maps beyond official summaries.",
          "Capture difficulty, encounter rarity, and efficient routes.",
          "Mutation probability and breeding-resource efficiency.",
          "Best combat Pals, workers, mounts, Partner Skills, and teams.",
          "Exact Awakening priority and endgame tier rankings.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This overview is based on Pocketpair's official Palworld v1.0 Steam changelog. It reports confirmed roster totals and system changes without using datamined stats, scraped spawn databases, or unverified tier lists.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many Pals were added in Palworld 1.0?",
        answer:
          "Version 1.0 adds 47 new Pals and 25 variants, for 72 additions and an official total of 287 Pals.",
      },
      {
        question: "Are all new Pals located in Sunreach?",
        answer:
          "No. Pocketpair says new Pals can be found in Sunreach, the World Tree, and various other regions.",
      },
      {
        question: "What is Pal Mutation?",
        answer:
          "Mutation is a breeding outcome that can produce a Pal with higher stats and a unique passive skill. Practical rates need in-game verification.",
      },
      {
        question: "Which new Pal is best?",
        answer:
          "The official changelog does not establish a best new Pal. Combat, work, and team rankings need in-game verification.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
  },
  {
    title: "Palworld 1.0 MODs Warning and Compatibility Guide",
    slug: "guides/palworld-1-0-mods-warning-compatibility-guide",
    category: "guides",
    categoryLabel: "MOD Safety",
    description:
      "Official Palworld 1.0 MOD warning and compatibility guide covering backups, manual cleanup, Workshop MODs, file verification, clean launch testing, and safe reinstallation.",
    shortAnswer:
      "Back up important saves, manually remove old MOD files and loaders, unsubscribe from Workshop MODs, verify game files, launch Palworld 1.0 unmodded, and only reinstall MODs whose creators confirm Version 1.0 compatibility.",
    playerAdvice: [
      "Do not assume a disabled MOD is removed; files and loaders can remain active in the game folder.",
      "Keep a pre-update backup because MOD-dependent Pals, items, quests, or structures may not work after cleanup.",
      "Restore compatible MODs one at a time so problems can be isolated.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["MODs", "save safety", "compatibility"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Pocketpair warns that old MODs can cause crashes, save corruption or loss, failed loading, and blocked progression.",
      "Disabling a MOD may not remove files or loaders that still run.",
      "Pocketpair recommends backups, manual removal, Workshop unsubscription, file verification, and an unmodded launch test.",
    ],
    pendingUpdates: [
      "Compatibility for every individual MOD, loader, plugin, platform, and MOD-dependent save needs verification from its creator and in-game testing.",
    ],
    sourceNotes: [
      "MOD safety steps were checked against Pocketpair's official Version 1.0 MOD warning and release changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-mod-cleanup-flowchart.webp",
      alt: "Palworld 1.0 MOD cleanup flowchart showing backup, manual removal, file verification, clean launch, and one-by-one restoration",
      caption: "Follow the cleanup sequence before testing any creator-confirmed Version 1.0 MOD release.",
    },
    sections: [
      {
        heading: "Why Pocketpair issued a MOD warning",
        paragraphs: [
          "Version 1.0 changes many Palworld systems. Pocketpair warns that old MOD data can cause launch or gameplay crashes, corrupted or unloadable saves, and quests or events that cannot progress.",
          "Problems may come from MOD files or loaders left in the game directory even when a management tool shows the MOD as disabled.",
        ],
      },
      {
        heading: "Back up before changing anything",
        bullets: [
          "Copy every important local or server save before the first Version 1.0 load.",
          "Keep at least one backup outside the active game or server directory.",
          "Label the backup with the date, platform, world name, and pre-update version.",
          "Preserve the MOD list and configuration beside MOD-dependent saves.",
          "Do not overwrite the only pre-update backup during testing.",
        ],
      },
      {
        heading: "Remove old MOD files manually",
        paragraphs: [
          "Pocketpair's warning says simply switching a MOD off may not be enough. Remove or move old MOD files and loaders from the game directory according to the official MOD guideline.",
          "If you are not sure which files belong to a MOD, use the official guideline and the MOD creator's documentation instead of deleting unrelated game data.",
        ],
      },
      {
        heading: "Steam Workshop and file verification",
        bullets: [
          "Unsubscribe from installed Steam Workshop MODs.",
          "Remember that unsubscribing may not remove every remaining file or loader.",
          "Use Steam's Verify integrity of game files option after cleanup.",
          "Confirm Palworld launches and loads an appropriate test save without MODs.",
        ],
      },
      {
        heading: "When to reinstall MODs",
        paragraphs: [
          "Wait until the MOD creator confirms a Version 1.0-compatible release. Reinstall one MOD at a time, start the game, and test before adding another.",
          "A creator update does not guarantee compatibility with every other MOD or existing save. Needs in-game verification.",
        ],
      },
      {
        heading: "MOD-dependent save risks",
        paragraphs: [
          "A save containing MOD-added Pals, items, structures, quests, or other data may behave incorrectly or fail to load after those MODs are removed. Pocketpair does not cover problems caused by modified game data through normal support.",
          "Keep the original backup and test a copy. Compatibility for a specific save needs in-game verification.",
        ],
      },
      {
        heading: "Safe compatibility checklist",
        bullets: [
          "Back up the save and record the old MOD list.",
          "Remove old MOD files and loaders manually.",
          "Unsubscribe from Workshop MODs and verify game files.",
          "Launch and test Version 1.0 unmodded.",
          "Confirm each MOD has a creator-supported 1.0 release.",
          "Reinstall and test one MOD at a time on a backed-up save copy.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This guide paraphrases Pocketpair's official Palworld 1.0 MOD warning, release changelog, and MOD guideline. It does not certify any third-party MOD as compatible.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is disabling a MOD enough for Palworld 1.0?",
        answer:
          "Not necessarily. Pocketpair warns that MOD files and loaders can remain in the game folder and still be loaded.",
      },
      {
        question: "Should I unsubscribe from Workshop MODs?",
        answer:
          "Yes, as part of cleanup, but Pocketpair notes that unsubscribing alone may not remove every remaining MOD file.",
      },
      {
        question: "Can my MODded save continue in Version 1.0?",
        answer:
          "MOD-dependent content may fail or prevent the save from loading after cleanup. Compatibility needs in-game verification on a backup copy.",
      },
      {
        question: "When can I reinstall a MOD?",
        answer:
          "After its creator confirms Version 1.0 compatibility. Add it back individually and test before installing another MOD.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official MOD warning for Palworld 1.0",
        href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004",
      },
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Pocketpair official Palworld MOD guideline",
        href: "https://guideline.palworldgame.com/palworld-mod-guideline",
      },
    ],
  },
  {
    title: "Palworld 1.0 Server Owner Checklist",
    slug: "server/palworld-1-0-server-owner-checklist",
    category: "server",
    categoryLabel: "Server Checklist",
    description:
      "Palworld 1.0 server owner checklist for backups, MOD cleanup, version matching, settings review, save testing, guild permissions, voice chat, and safe reopening.",
    shortAnswer:
      "Before reopening a Palworld 1.0 server, back up the complete world, remove unsupported MODs, update server and clients, review changed defaults, test saving and restart persistence, verify guild permissions, and document rollback rules.",
    playerAdvice: [
      "Use a copy of the production world for the first Version 1.0 test whenever possible.",
      "Do not raise capacity or base load only because the changelog mentions optimization.",
      "Tell players whether the world is continuing, fresh, temporary, or subject to rollback before they join.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["server owner", "dedicated server", "backups"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Version 1.0 includes dedicated-server optimization, multiplayer stability work, joining and saving improvements, and changed defaults.",
      "Dedicated-server voice chat is optional through world settings and is not supported on WinGDK.",
      "Guild roles, permissions, access restrictions, notifications, and markers were expanded.",
    ],
    pendingUpdates: [
      "Safe capacity, long-session stability, real memory use, MOD compatibility, and performance under a specific world load need in-game verification.",
    ],
    sourceNotes: [
      "Server checklist facts were checked against Pocketpair's official Palworld v1.0 Steam changelog and MOD warning.",
    ],
    sections: [
      {
        heading: "Before the update",
        bullets: [
          "Stop the server cleanly.",
          "Back up world data, player data, configuration, startup arguments, and management files.",
          "Record the current build, MODs, plugins, and server tools.",
          "Store the backup outside the active server directory.",
          "Announce the maintenance window and rollback policy.",
        ],
      },
      {
        heading: "MOD cleanup",
        bullets: [
          "Remove old MOD files and loaders manually rather than only disabling them.",
          "Unsubscribe from Workshop MODs and verify game files where applicable.",
          "Confirm the server and a test client run unmodded.",
          "Restore only creator-confirmed Version 1.0 MODs, one at a time.",
        ],
      },
      {
        heading: "Version and configuration check",
        bullets: [
          "Update the dedicated server and confirm clients use a compatible Version 1.0 build.",
          "Compare the old configuration with the current file and changed defaults.",
          "Review progression, capture, death, base, raid, PvP, access, and communication settings.",
          "Keep the original configuration with the pre-update backup.",
        ],
      },
      {
        heading: "Private smoke test",
        bullets: [
          "Join with at least two test clients.",
          "Confirm character loading, spawn location, password behavior, and guild membership.",
          "Access a representative base, move items, assign a Pal, and verify role permissions.",
          "Save, log out, restart the server, reconnect, and confirm persistence.",
          "Run a longer session before calling the server stable. Needs in-game verification.",
        ],
      },
      {
        heading: "Multiplayer features to review",
        paragraphs: [
          "Version 1.0 adds optional dedicated-server voice chat, expanded guild roles and permissions, guild markers, improved chat, server-list changes, password and IP-entry improvements, unstable-connection indicators, and optional Discord integration on supported versions.",
          "Enable only the features the community needs, then test permissions and platform support before public access.",
        ],
      },
      {
        heading: "Do not assume optimization equals capacity",
        paragraphs: [
          "Pocketpair confirms optimization for dedicated servers, memory, dense placed objects, spawn points, and other high-load processing. It does not publish a universal safe player count, base count, or object limit.",
          "Capacity, restart frequency, long-session memory behavior, and stability need in-game verification on the real host and world.",
        ],
      },
      {
        heading: "Reopening checklist",
        bullets: [
          "Keep the pre-update backup and tested rollback steps available.",
          "Publish the world policy, settings summary, MOD status, and known limitations.",
          "Confirm who can change settings or restore backups.",
          "Monitor official hotfix and known-issue announcements.",
          "Record every post-launch setting or MOD change.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This checklist is based on Pocketpair's official Palworld v1.0 Steam changelog and official MOD warning. Operational tests are intentionally marked as verification steps rather than claimed server results.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should a server owner wipe for Palworld 1.0?",
        answer:
          "Pocketpair says existing saves can continue. A wipe is optional, but the existing world should be backed up and tested before reopening.",
      },
      {
        question: "Did dedicated-server defaults change?",
        answer:
          "Yes. Pocketpair says Version 1.0 defaults were adjusted to more closely match single-player Normal difficulty.",
      },
      {
        question: "Can I increase the player limit after the optimization update?",
        answer:
          "The changelog does not define a safe increase. Capacity needs in-game verification on the actual host and world.",
      },
      {
        question: "Is voice chat available on every server platform?",
        answer:
          "No. It must be enabled in dedicated-server world settings, and Pocketpair says it is not supported on WinGDK.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Pocketpair official MOD warning for Palworld 1.0",
        href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004",
      },
    ],
  },
  {
    title: "Palworld 1.0 First Hour Checklist",
    slug: "guides/palworld-1-0-first-hour-checklist",
    category: "guides",
    categoryLabel: "First Hour",
    description:
      "A cautious Palworld 1.0 first-hour checklist for new and returning players covering missions, capture, a starter base, Pals, settings, saves, MODs, and multiplayer.",
    shortAnswer:
      "In your first Palworld 1.0 hour, follow the reworked main mission, learn the revised capture and Pal systems, build a flexible starter base, check settings and saves, and avoid committing to unverified tier lists or permanent routes.",
    playerAdvice: [
      "New players should use the first hour to learn systems rather than rush a permanent build.",
      "Returning players should begin with backup and MOD checks before loading an important Early Access world.",
      "Multiplayer groups should confirm host, world policy, backups, and settings before splitting up.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["first hour", "beginner", "checklist"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Version 1.0 reworks the main mission flow, capture progression, Pal skills, Work Suitability, bases, raids, balance, and UI.",
      "Capture Bonuses now require five captures, the player level cap is 80, and watchtowers reveal map areas and become fast-travel points.",
      "Existing saves can continue, while Pocketpair recommends a fresh character for the reworked experience.",
    ],
    pendingUpdates: [
      "Exact first-hour timing, best starter Pals, fastest routes, permanent base locations, and ideal settings need in-game verification.",
    ],
    sourceNotes: [
      "First-hour guidance uses confirmed system changes from Pocketpair's official Palworld v1.0 Steam changelog.",
    ],
    visual: {
      src: "/assets/palworld-1-0-first-hour-timeline.webp",
      alt: "Palworld 1.0 first-hour timeline divided into 0 to 10, 10 to 30, and 30 to 60 minute stages",
      caption: "A flexible first-hour sequence for learning the release build without relying on unverified speed routes.",
    },
    sections: [
      {
        heading: "Before you start",
        bullets: [
          "Choose a fresh character or back up an existing save before loading it in Version 1.0.",
          "Remove old MOD files and confirm a clean unmodded launch.",
          "For multiplayer, confirm the host, world policy, backups, and whether the server is permanent or temporary.",
          "Start close to default settings unless the group has tested a documented alternative.",
        ],
      },
      {
        heading: "First 10 minutes",
        bullets: [
          "Read the reworked main mission prompts instead of relying on an Early Access route.",
          "Check controls, graphics, sound, and accessibility options before combat becomes busy.",
          "Gather basic materials and learn the current crafting flow.",
          "Capture several early Pals to understand the revised capture and Partner Skill information.",
        ],
      },
      {
        heading: "Minutes 10 to 30",
        bullets: [
          "Place a small, flexible starter base rather than a permanent optimized layout.",
          "Assign a few Pals and inspect their Work Suitability and Partner Skills.",
          "Organize storage so the base can be moved or rebuilt without losing track of materials.",
          "Follow nearby mission and map guidance toward exploration tools such as watchtowers.",
        ],
      },
      {
        heading: "Minutes 30 to 60",
        bullets: [
          "Continue the mission flow and unlock technologies that solve immediate needs.",
          "Compare several Pals for combat and work roles without declaring a permanent tier list.",
          "Check food, inventory weight, base production, and one reliable travel option.",
          "If playing online, confirm saving, logout, restart, and reconnect behavior before a long session.",
        ],
      },
      {
        heading: "What not to optimize in the first hour",
        bullets: [
          "A permanent best base location.",
          "A final combat or worker Pal tier list.",
          "Exact breeding, Mutation, or Awakening investments.",
          "Extreme server multipliers or public capacity claims.",
          "A fastest route to Sunreach or the World Tree.",
          "Needs in-game verification.",
        ],
      },
      {
        heading: "Returning-player variation",
        paragraphs: [
          "Returning players should spend the first session checking the mission log, bases, Pal skills, Work Suitability, storage, server settings, and MOD cleanup before pursuing new regions. Pocketpair recommends a fresh character, but existing saves can continue.",
          "If the old world matters, use a backup or test copy and keep the original untouched until Version 1.0 behavior is understood.",
        ],
      },
      {
        heading: "First-hour success check",
        bullets: [
          "You understand the current mission objective and next local goal.",
          "Your starter base can gather, store, and craft basic materials.",
          "You have a small Pal team with understood combat and work roles.",
          "Your save or server persistence has been checked.",
          "You have not spent rare resources based on an unverified ranking.",
        ],
      },
      {
        heading: "Source note",
        paragraphs: [
          "This checklist is organized around confirmed Version 1.0 changes in Pocketpair's official Steam changelog. Exact timing, routes, Pal choices, and permanent base decisions depend on the player's world and need in-game verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should a new player start fresh in Palworld 1.0?",
        answer:
          "Yes. A new player has no old progress to preserve and can follow the reworked mission flow from the beginning.",
      },
      {
        question: "Should a returning player use an old save in the first hour?",
        answer:
          "Existing saves can continue, but back up first and remove old MOD files. Pocketpair recommends a fresh character for the reworked experience.",
      },
      {
        question: "What is the best first-hour Pal?",
        answer:
          "The official changelog does not define one. Early combat and work choices need in-game verification.",
      },
      {
        question: "Should I build a permanent base immediately?",
        answer:
          "A flexible starter base is safer while learning Version 1.0. Permanent location and layout advice needs in-game verification.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
      {
        label: "Pocketpair official MOD warning for Palworld 1.0",
        href: "https://store.steampowered.com/news/app/1623730/view/1836506165582004",
      },
    ],
  },
  {
    title: "Palworld 1.0 Fast Early-Game Start Route",
    slug: "guides/palworld-1-0-fast-early-game-start-route",
    category: "guides",
    categoryLabel: "Early-Game Guide",
    description:
      "A tested Palworld 1.0 early-game route covering fast-travel unlocks, Sakurajima captive-Pal camps, high-value loot, Alpha Dumud, Killamari movement, and a practical starter base location.",
    shortAnswer:
      "Unlock several fast-travel points through respawning, enter Sakurajima from Ice Wind Island, use a Palbox to reset four hostile camps, collect captive workers and high-value loot, then add Alpha Dumud, Killamari movement, and a nearby main-base clearing.",
    playerAdvice: [
      "Treat the Palbox camp reset as a patch-sensitive mechanic and retest it after major Palworld updates.",
      "The captive Pal at each camp is random, so judge the route by total loot and worker options rather than expecting one specific Pal.",
      "The video uses localized source footage; rely on this page's current-release test note rather than the build marker visible in the footage.",
    ],
    lastUpdated: "July 12, 2026",
    readingTime: "8 min read",
    tags: ["video guide", "early game", "Sakurajima", "starter route"],
    statusNotice:
      "This route and the Palbox camp-reset method were independently retested on the current Palworld 1.0 release on July 12, 2026. Future patches may change individual steps.",
    updateNotice:
      "Current-release verification is complete for the route and camp-reset method. Recheck this page after major hotfixes or balance patches.",
    confirmedChanges: [
      "The full route was retested on the current Palworld 1.0 release on July 12, 2026.",
      "The Palbox camp-reset method and the four-camp sequence worked during the current-release retest.",
    ],
    pendingUpdates: [
      "Captive Pal results and chest contents remain random.",
      "Patch-sensitive mechanics should be retested after major Palworld updates.",
    ],
    sourceNotes: [
      "The companion video is an authorized English localization of source footage and uses AI-generated English narration.",
      "The footage may show a source-build marker and non-English game UI; the route was separately retested on the current Palworld 1.0 release.",
    ],
    lastVerified: "July 12, 2026",
    testing: {
      gameVersion: "Palworld 1.0 current release",
      lastTested: "July 12, 2026",
      platform: "PC / Steam",
      mode: "Single-player world",
      mods: "None",
      verification: "independently-tested",
      note: "The footage comes from an earlier source build; the route and camp mechanic were retested separately on the current 1.0 release.",
    },
    sections: [
      {
        heading: "1. Unlock fast travel before committing to a route",
        paragraphs: [
          "At the start of the run, open the pause menu, choose the respawn option, and select different respawn points. Most starting points include a nearby fast-travel statue, so repeating this process can unlock several travel anchors immediately.",
          "Do this before gathering heavily or building a permanent base. The objective is to create a flexible travel network for the rest of the route.",
        ],
      },
      {
        heading: "2. Enter Sakurajima from Ice Wind Island",
        paragraphs: [
          "Respawn at Ice Wind Island, open the map, and travel toward coordinates -512, 215. Activate the fast-travel statue near the large mansion before entering the camp.",
          "The area is dangerous for a new character. Avoid fighting high-level enemies directly and keep unnecessary materials out of your inventory before the attempt.",
        ],
      },
      {
        heading: "3. Use the Palbox camp-reset method",
        bullets: [
          "Gather enough wood and stone to build a Palbox.",
          "Place the Palbox so the hostile camp falls inside the base boundary.",
          "Use the Palbox to teleport away, then teleport back.",
          "During the verified test, hostile enemies were removed while the captive Pal and treasure chests remained.",
          "Dismantle the temporary base from the map before moving to the next camp; the materials return to your inventory.",
        ],
      },
      {
        heading: "4. Run the four captive-Pal camps",
        table: {
          headers: ["Stop", "Coordinates / landmark", "Purpose"],
          rows: [
            ["Camp 1", "-512, 215 — mansion fast-travel area", "Activate travel, reset the camp, free the captive, and loot every chest."],
            ["Camp 2", "605, 216 — near Moonflower Tower Entrance", "Rebuild the Palbox, reset the camp, check the captive, and collect loot."],
            ["Camp 3", "635, 240", "Repeat the reset and evaluate the random captive Pal."],
            ["Camp 4", "695, 181", "Use the final captive and chest roll before leaving Sakurajima."],
          ],
        },
        paragraphs: [
          "Captive Pals are random. The video run found Flopie, Tocotoco, and Wixen results, but those examples are not guaranteed. For early production, prioritize useful Work Suitability—especially Handiwork level 2 or higher—over a specific name.",
        ],
      },
      {
        heading: "5. Keep the loot that accelerates the opening hours",
        paragraphs: [
          "Open every chest around each camp. The demonstrated route produced high-tier Spheres, schematics, food, and equipment, but chest contents are random and should not be treated as guaranteed drops.",
          "The route is strongest when several rewards combine: one useful worker, capture supplies, sellable gear, and an early schematic can save more time than chasing a single perfect Pal.",
        ],
      },
      {
        heading: "6. Add Alpha Dumud as an early combat Pal",
        paragraphs: [
          "Return to the central part of Ice Wind Island and find the level 14 Alpha Dumud shown in the video. Lower its health with another Pal and throw a Sphere; a back throw can improve the capture chance.",
          "Dumud gives the route a dependable combat option while the rescued worker Pals handle early production.",
        ],
      },
      {
        heading: "7. Use Killamari for early movement",
        paragraphs: [
          "A dungeon entrance is located beside the Alpha Dumud area. Enter and look for Killamari. If it does not spawn, leave and re-enter the dungeon; the demonstration usually needed only one or two resets.",
          "At player level 9, unlock Killamari's Gloves in the Technology menu. Killamari can then act as a glider, and pairing it with Croajiro provides useful movement before obtaining a flying mount.",
        ],
      },
      {
        heading: "8. Build in the large Ice Wind Island clearing",
        paragraphs: [
          "Finish the route at the large circular clearing in the same region. The ground is wide and flat, with wood, ore, and several early Pal options nearby.",
          "Treat this as a practical tested location for this route, not a universal best-base claim. Your world settings, group size, production goals, and future patches can change the best long-term choice.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the Palbox camp-reset method work in Palworld 1.0?",
        answer:
          "It worked during an independent current-release retest on July 12, 2026. Because this is patch-sensitive behavior, retest it after major hotfixes.",
      },
      {
        question: "Are the captive Pals and chest rewards guaranteed?",
        answer:
          "No. Captive Pals and chest contents are random. Use the route for multiple chances at workers, Spheres, schematics, and gear rather than expecting one result.",
      },
      {
        question: "Why does the footage show a different build marker?",
        answer:
          "The video is an authorized localization of source footage. The route and camp mechanic were retested separately on the current Palworld 1.0 release, which is the verification used by this page.",
      },
      {
        question: "Is the Ice Wind Island clearing the best base in Palworld 1.0?",
        answer:
          "It is a practical location for this tested route, not a universal best-base claim. Long-term needs differ between solo worlds, multiplayer groups, and server settings.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
    relatedLinks: [
      { label: "Watch the 4:33 English video guide", href: "/videos/palworld-1-0-fast-early-game-route/" },
      { label: "Palworld 1.0 Beginner Guide", href: "/guides/palworld-1-0-beginner-guide/" },
      { label: "Palworld 1.0 First Hour Checklist", href: "/guides/palworld-1-0-first-hour-checklist/" },
    ],
  },
  {
    title: "Palworld 1.0 Ultimate Worker Pal Build Guide",
    slug: "guides/palworld-1-0-ultimate-worker-pal-build",
    category: "guides",
    categoryLabel: "Base-Building Guide",
    description:
      "Build a high-speed Palworld worker Pal with Work Suitability, condensation, Pal Souls, work-speed passives, labor research, Applied Technique books, and job-specific adjustments.",
    shortAnswer:
      "Start with a small Pal suited to the job, stack Work Suitability, four condensation stars, Pal Soul work-speed upgrades, four useful passives, and matching Pal Labor Research. Use Applied Technique books for the final job-level increase, prioritize movement speed for Transporting, and add Nocturnal or SAN support when the base must run through the night.",
    playerAdvice: [
      "Use the six-part stack as a planning framework; do not spend rare books, souls, or surgery resources until the Pal and job are worth the investment.",
      "For Handiwork, the video demonstrates Depresso as a compact Dark base Pal and Yakumo as the passive-transfer route.",
      "Transporting is the exception: movement-speed passives usually matter more than a pure work-speed setup.",
    ],
    lastUpdated: "July 12, 2026",
    readingTime: "9 min read",
    tags: ["video guide", "worker Pal", "work speed", "base building", "Depresso", "Yakumo"],
    statusNotice:
      "This authorized localized video demonstrates the complete worker-Pal build in source footage. The exact passive-transfer odds, percentage bonuses, book locations, and patch-sensitive mechanics still need an independent current-release retest.",
    updateNotice:
      "Use the build order as a practical framework, but verify exact values and item availability after Palworld hotfixes or balance changes.",
    confirmedChanges: [
      "Pocketpair's official Version 1.0 changelog confirms that Pal Work Suitability values, base mechanics, and many Pal systems were reworked for release.",
      "The localized source footage visibly demonstrates the Depresso, Yakumo, surgery, condensation, Pal Soul, labor-research, Applied Technique, Transporting, Nocturnal, and SAN-support steps described below.",
    ],
    pendingUpdates: [
      "Independently retest the full build on the current Palworld 1.0 release.",
      "Reconfirm exact percentages, passive-transfer behavior, Applied Technique book farming, and world-setting labels after major patches.",
    ],
    sourceNotes: [
      "The companion video is an authorized English localization with AI-generated English narration, burned-in English subtitles, and English action callouts.",
      "Incidental non-English game-interface text may remain in the source footage; every action-critical step is translated or summarized in English on screen and in the written guide.",
      "Claims shown in source footage are labeled separately from independent current-release testing.",
    ],
    lastVerified: "July 12, 2026",
    testing: {
      gameVersion: "Authorized source footage; current 1.0 retest pending",
      lastTested: "Not independently retested",
      platform: "PC / Steam source footage",
      mode: "Base-management demonstration",
      mods: "Not documented in the source",
      verification: "shown-in-source-footage",
      note: "The page distinguishes what the video shows from what has been independently verified on the current release.",
    },
    sections: [
      {
        heading: "1. Stack all six worker-Pal speed factors",
        paragraphs: [
          "A complete worker build is not one passive or one high job level. The video combines six layers: Work Suitability, condensation stars, Pal Soul enhancements, work-speed passives, matching Pal Labor Research, and a base setup that keeps the Pal working.",
          "Plan the full stack before spending rare resources. A Pal that still gets stuck, sleeps through the work cycle, or is assigned to the wrong job can waste an otherwise expensive build.",
        ],
        table: {
          headers: ["Layer", "What it changes", "When to commit"],
          rows: [
            ["Work Suitability", "The Pal's level for a specific base job", "After choosing the exact job and Pal"],
            ["Condensation", "Raises the Pal through four stars", "When you can supply enough duplicates"],
            ["Pal Souls", "Adds a direct work-speed enhancement", "After the Pal is confirmed as a long-term worker"],
            ["Passives", "Adds job-relevant work or movement bonuses", "After planning breeding, Yakumo, or surgery"],
            ["Labor Research", "Adds base-wide bonuses for the matching job", "As the relevant research path becomes available"],
            ["Base support", "Reduces sleeping, SAN, and pathing downtime", "Before calling the build complete"],
          ],
        },
      },
      {
        heading: "2. Use a compact, night-capable base Pal",
        paragraphs: [
          "For the Handiwork example, the video starts with Depresso. Its compact body is less likely to jam narrow production lanes, and its Dark typing lets it continue working at night in the demonstrated setup.",
          "The principle matters more than the name: choose a Pal that reaches the station reliably, has the correct Work Suitability, and fits the hours your base needs to operate.",
        ],
      },
      {
        heading: "3. Transfer Remarkable Craftsmanship with Yakumo",
        bullets: [
          "Obtain a Pal carrying Remarkable Craftsmanship; the video uses glowing fishing catches as the starting route.",
          "Breed that passive onto Yakumo.",
          "Keep Yakumo active while catching the target worker Pal so Birds of a Feather can pass an eligible passive.",
          "Repeat catches until the target worker receives Remarkable Craftsmanship.",
        ],
        paragraphs: [
          "The video states a 30% chance per eligible passive at maximum Yakumo rank. Treat that exact value and the eligible-passive list as patch-sensitive until independently retested on the current release.",
        ],
      },
      {
        heading: "4. Finish the four-passive work-speed set",
        paragraphs: [
          "The demonstrated Handiwork set combines Remarkable Craftsmanship with Artisan, Work Slave, and Serious. The Pal Surgery Table is used to replace the remaining passives rather than rebuilding the entire Pal through breeding.",
          "If the worker is not naturally active at night, the video later replaces Serious with Nocturnal. That sacrifices one pure work-speed slot in exchange for a longer working window.",
        ],
      },
      {
        heading: "5. Add Souls, four stars, and Labor Research",
        bullets: [
          "Spend Pal Souls on the work-speed enhancement after the worker's passive set is settled.",
          "Use the Pal Essence Condenser to reach four stars.",
          "Complete the Pal Labor Research branch matching the worker's job.",
          "Check the base assignment and path before investing in the final job-level books.",
        ],
        paragraphs: [
          "The source footage presents these layers as cumulative. Exact caps and costs can change, so the page keeps the sequence while marking values for current-release verification.",
        ],
      },
      {
        heading: "6. Use Applied Technique books last",
        paragraphs: [
          "Applied Technique books raise an existing Work Suitability. The video farms them from supply drops around Emberstone Plateau in southwest Feybreak and lowers the Meteorite and Supply Drop interval in World Settings to repeat the route faster.",
          "Use the matching book only after the target Pal and job are final. Farming locations, interval settings, and job-level caps are patch-sensitive and should be rechecked after updates.",
        ],
      },
      {
        heading: "7. Adapt the formula by job",
        table: {
          headers: ["Job type", "Main priority", "Adjustment"],
          rows: [
            ["Handiwork and stationary jobs", "Work speed and reliable station access", "Use the full work-speed stack"],
            ["Kindling and other production jobs", "Correct base Pal and matching Technique book", "Repeat the Yakumo, surgery, Soul, star, and research route"],
            ["Transporting", "Movement speed", "Prefer Swift, Runner, and Nimble over a pure work-speed set"],
            ["Non-Dark night worker", "Uptime after dark", "Replace Serious with Nocturnal if the extra work window is worth it"],
          ],
        },
      },
      {
        heading: "8. Protect SAN and real base uptime",
        paragraphs: [
          "A worker with maximum paper stats still stops when SAN falls or its route is blocked. The video recommends keeping Shroomer or Shroomer Noct at the base because their support slows SAN loss.",
          "Leave clear paths, keep food and beds reachable, watch for stalled stations, and judge the build by completed production over time—not only the Work Speed number on the Pal screen.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the six parts of a maximum worker-Pal build?",
        answer:
          "Work Suitability, four condensation stars, Pal Soul work-speed enhancements, useful passives, matching Pal Labor Research, and base support that prevents sleep, SAN, or pathing downtime.",
      },
      {
        question: "Why does the guide use Depresso?",
        answer:
          "The video uses Depresso as a compact Dark Handiwork base Pal that can fit tight production spaces and keep working at night.",
      },
      {
        question: "Which passives does the video use for work speed?",
        answer:
          "Remarkable Craftsmanship, Artisan, Work Slave, and Serious. For a non-Dark Pal that must work at night, the video replaces Serious with Nocturnal.",
      },
      {
        question: "Should a Transporting Pal use the same passives?",
        answer:
          "No. The video treats Transporting as movement-limited and recommends Swift, Runner, and Nimble before pure work-speed optimization.",
      },
      {
        question: "Has every exact value been independently verified in Palworld 1.0?",
        answer:
          "No. The authorized source footage demonstrates the workflow, while exact percentages, farming behavior, and patch-sensitive mechanics still need an independent current-release retest.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld v1.0 release changelog on Steam",
        href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
      },
    ],
    relatedLinks: [
      { label: "Watch the 3:35 English video guide", href: "/videos/palworld-1-0-ultimate-worker-pal-build/" },
      { label: "Palworld 1.0 Base Building Changes", href: "/base-building/" },
      { label: "Palworld 1.0 Beginner Guide", href: "/guides/palworld-1-0-beginner-guide/" },
      { label: "Palworld 1.0 Fast Early-Game Route", href: "/guides/palworld-1-0-fast-early-game-start-route/" },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(category: GuideCategory) {
  return guides.filter((guide) => guide.category === category);
}

export function getGuidesByTag(tag: string) {
  return guides.filter((guide) => guide.tags.includes(tag));
}

export function featuredGuides() {
  return guides.filter((guide) => guide.featured);
}

export const categoryMeta: Record<GuideCategory, { title: string; description: string; path: string }> = {
  guides: {
    title: "Palworld 1.0 Guides",
    description: "Beginner, returning player, performance, save planning, and FAQ guides for Palworld Version 1.0.",
    path: "/guides/",
  },
  server: {
    title: "Palworld 1.0 Server Guides",
    description: "Server setup, multiplayer planning, and cautious launch settings for Palworld Version 1.0.",
    path: "/server/",
  },
  "base-building": {
    title: "Palworld 1.0 Base Building",
    description: "Base planning guidance for Palworld 1.0 players, focused on stable layouts and launch-safe habits.",
    path: "/base-building/",
  },
  "palworld-1-0": {
    title: "Palworld 1.0 Hub",
    description: "Release date, patch notes, World Tree, new Pals, and Version 1.0 guide updates in one focused hub.",
    path: "/palworld-1-0/",
  },
};
