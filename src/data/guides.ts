export type GuideCategory = "guides" | "server" | "base-building" | "palworld-1-0";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
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
};

export const preReleaseNotice =
  "This guide will be updated when the full Palworld 1.0 patch notes are available.";

export const updateNotice =
  "This guide is being updated for Palworld 1.0. Details will be revised once the full official patch notes are available.";

const launchUpdateFields = {
  confirmedChanges: [],
  pendingUpdates: [
    "Review the official Palworld 1.0 patch notes before adding or changing any detailed recommendations.",
    "Replace cautious pre-release wording with confirmed information only after the official notes are live.",
  ],
  sourceNotes: [
    "Use Pocketpair official patch notes, official Palworld news, and verified in-game testing before marking changes as confirmed.",
    "Do not use rumors, trailer speculation, scraped databases, or community claims as confirmed source material.",
  ],
  lastVerified: "July 8, 2026",
  updateNotice,
} satisfies Pick<Guide, "confirmedChanges" | "pendingUpdates" | "sourceNotes" | "lastVerified" | "updateNotice">;

export const guides: Guide[] = [
  {
    title: "Palworld 1.0 Beginner Guide",
    slug: "guides/palworld-1-0-beginner-guide",
    category: "guides",
    categoryLabel: "Beginner Guide",
    description:
      "A cautious starter roadmap for new Palworld 1.0 players, covering early goals, base basics, multiplayer choices, and what to avoid before full patch notes are available.",
    shortAnswer:
      "New players should start Palworld 1.0 with a small, flexible first base, learn the core survival loop, and avoid chasing launch-week tier lists until the full patch notes are available.",
    playerAdvice: [
      "If you are new, spend the first session learning gathering, crafting, catching, food, and base assignments instead of rushing a permanent base.",
      "If you are returning, treat old Early Access habits as useful background, not confirmed 1.0 optimization.",
      "If you are playing with friends, agree on hosting and save rules before anyone invests heavily in a shared world.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "6 min read",
    featured: true,
    tags: ["new players", "starter path", "base-building"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Start with a simple first objective",
        paragraphs: [
          "For a first Palworld 1.0 save, keep the opening hours focused: learn movement, gather basic materials, place a starter base, catch a few early Pals, and understand how work assignments feel.",
          "Do not treat the first base as permanent. Early bases are for learning resource flow, crafting stations, storage habits, and Pal management before you commit to a long-term layout.",
        ],
      },
      {
        heading: "Choose solo or multiplayer before you invest",
        paragraphs: [
          "Solo play is the cleanest way to learn survival, combat, crafting, and base systems without server rules changing the pace.",
          "Multiplayer is better if your group already knows who will host, how often the world stays online, and whether the server will use conservative settings until 1.0 stability is clear.",
        ],
      },
      {
        heading: "Build habits that survive balance changes",
        bullets: [
          "Keep spare materials instead of spending everything immediately.",
          "Label or separate storage by purpose so future base moves are less painful.",
          "Avoid over-optimizing around Early Access balance assumptions.",
          "Read the full 1.0 patch notes before committing to late-game routes or heavy breeding plans.",
        ],
      },
      {
        heading: "What not to assume yet",
        paragraphs: [
          "Until the final Palworld 1.0 patch notes are available, avoid relying on exact stat priorities, best Pals, best base locations, fastest routes, or definitive endgame recommendations.",
          "This beginner guide is intentionally stable: it focuses on habits that are likely to remain useful even if 1.0 changes balance, progression, and content placement.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this beginner guide final for Palworld 1.0?",
        answer:
          "No. It is a safe pre-release starter guide. Exact best routes, best Pals, and balance-sensitive recommendations should wait for the full patch notes.",
      },
      {
        question: "Should a new player start solo or multiplayer?",
        answer:
          "Solo is easier for learning systems. Multiplayer is better if your group already knows who hosts, when the world is online, and how settings will be handled.",
      },
      {
        question: "What should I avoid on day one?",
        answer:
          "Avoid permanent base commitments, extreme server settings, and guides that claim exact 1.0 best-in-slot answers before the full patch notes are available.",
      },
    ],
  },
  {
    title: "Palworld 1.0 Release Date and What to Expect",
    slug: "palworld-1-0/palworld-1-0-release-date-and-what-to-expect",
    category: "palworld-1-0",
    categoryLabel: "Version 1.0",
    description:
      "The confirmed Palworld 1.0 release timing and a careful overview of what players should expect without inventing unconfirmed patch details.",
    shortAnswer:
      "Palworld Version 1.0 is planned for July 10, 2026. Expect official 1.0 themes such as new Pals, new regions, and World Tree coverage, but wait for the full patch notes before relying on detailed mechanical claims.",
    playerAdvice: [
      "New players should use the release window to prepare a clean first save and read basic system guides, not to memorize speculative endgame routes.",
      "Returning players should back up saves and make a short checklist of old worlds, mods, and server settings before updating.",
      "Server owners should avoid setting permanent rules until the launch build and official notes are available.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "5 min read",
    featured: true,
    tags: ["release date", "1.0 changes", "World Tree"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Confirmed release timing",
        paragraphs: [
          "Pocketpair has announced that Palworld Version 1.0 is planned for July 10, 2026. Exact storefront rollout timing can still vary by platform, region, and patch distribution.",
          "If you are planning a server, group session, or fresh save, treat the release date as the target window and wait for the final patch notes before locking in long-term settings.",
        ],
      },
      {
        heading: "What has been publicly signaled",
        paragraphs: [
          "Official messaging has pointed toward new Pals, new regions, and the World Tree as major Version 1.0 topics.",
          "Those are broad confirmed themes, not a complete mechanical breakdown. The safe approach is to separate official themes from speculation until the full notes are live.",
        ],
      },
      {
        heading: "How to prepare without overplanning",
        bullets: [
          "Back up important saves before updating.",
          "Record current server settings if you run a world.",
          "Avoid installing major mod changes immediately before launch day.",
          "Wait for the full patch notes before publishing definitive tier lists or progression routes.",
        ],
      },
      {
        heading: "What this page will add after launch",
        paragraphs: [
          "After Palworld 1.0 is live, this guide will be updated with the confirmed release state, patch note highlights, known save compatibility notes, and links to the most important updated guides.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Palworld 1.0 release date confirmed?",
        answer:
          "Pocketpair has announced July 10, 2026 for Palworld Version 1.0. Platform rollout timing and detailed patch behavior should still be checked against official launch information.",
      },
      {
        question: "Are new Pals and World Tree details fully known?",
        answer:
          "No. They are part of official 1.0 messaging, but exact mechanics, locations, stats, and progression details need the full patch notes or verified launch testing.",
      },
      {
        question: "What should I do before release day?",
        answer:
          "Back up saves, record server settings, pause risky mods, and avoid treating pre-release speculation as confirmed guidance.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld 1.0 announcement",
        href: "https://www.pocketpair.jp/en/game-news/palworld-1-0-july-10-cinematic-trailer-revealed/",
      },
    ],
  },
  {
    title: "Palworld 1.0 Returning Player Guide",
    slug: "guides/palworld-1-0-returning-player-guide",
    category: "guides",
    categoryLabel: "Returning Players",
    description:
      "A practical checklist for Early Access players coming back for Palworld 1.0, with save prep, server checks, and expectations to reset.",
    shortAnswer:
      "Returning players should back up old worlds, test Palworld 1.0 with a short fresh save, and re-check Early Access assumptions against the full patch notes before rebuilding long-term plans.",
    playerAdvice: [
      "If you stopped playing months ago, relearn the opening loop before jumping straight into old late-game goals.",
      "If you have a long-running world, make backups and screenshots before updating or changing mods.",
      "If you run a group world, decide whether the group is continuing, wiping, or testing temporarily before launch day.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "6 min read",
    featured: true,
    tags: ["returning players", "save prep", "base-building"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Treat 1.0 as a reset of assumptions",
        paragraphs: [
          "If you played Palworld during Early Access, the most useful mindset is not to remember every old optimization. It is to relearn what changed after the final 1.0 patch notes are available.",
          "Old base habits, route priorities, Pal choices, and server settings may still help, but they should be checked against the launch version before you build a long-term plan.",
        ],
      },
      {
        heading: "Before updating an old world",
        bullets: [
          "Back up local saves and server files.",
          "Write down important server settings.",
          "Remove or pause mods until compatibility is confirmed.",
          "Take screenshots of key base layouts if you may rebuild.",
          "Tell multiplayer members whether the group is continuing or starting fresh.",
        ],
      },
      {
        heading: "What to relearn first",
        paragraphs: [
          "Start with systems that affect every session: capture flow, base production, food, transport, combat feel, multiplayer stability, and performance settings.",
          "Then move into 1.0-specific content after the community has had time to separate confirmed discoveries from launch-week rumors.",
        ],
      },
      {
        heading: "Good returning-player goals",
        bullets: [
          "Clean up one existing base instead of rebuilding everything on day one.",
          "Test a short new save to feel the updated early game.",
          "Review server settings with your group before opening the world.",
          "Keep notes on confirmed differences for your own playstyle.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can returning players rely on old Palworld guides?",
        answer:
          "Use them as background only. Any guide that depends on exact balance, routes, base locations, or Pal rankings should be rechecked after the full 1.0 patch notes are available.",
      },
      {
        question: "Should I delete my old save?",
        answer:
          "No. Back it up first. You can test a fresh save without giving up an existing world you care about.",
      },
      {
        question: "What should I check first after updating?",
        answer:
          "Check save loading, base behavior, server settings, performance, and any official known issues before making irreversible changes.",
      },
    ],
  },
  {
    title: "Should You Start a New Save in Palworld 1.0?",
    slug: "guides/should-you-start-a-new-save-in-palworld-1-0",
    category: "guides",
    categoryLabel: "Save Planning",
    description:
      "A balanced guide to choosing between a fresh Palworld 1.0 save and continuing an existing world without guessing at unconfirmed compatibility details.",
    shortAnswer:
      "Start a new save if you want the cleanest Palworld 1.0 experience. Keep and back up old worlds if you are attached to them, then wait for official compatibility details before committing.",
    playerAdvice: [
      "New players should start fresh because they have no old progression to protect.",
      "Returning players should preserve old saves and use a short fresh run to compare the 1.0 opening experience.",
      "Multiplayer groups should agree on the wipe or continue policy before the first shared session.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "5 min read",
    tags: ["fresh save", "save compatibility", "returning players"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "If you want the cleanest Palworld 1.0 experience, a new save is usually the safest choice. If you are attached to an existing world, wait for official compatibility notes and back up everything first.",
          "This is not a claim that old saves will or will not work. It is a practical recommendation for avoiding launch-day frustration.",
        ],
      },
      {
        heading: "Reasons to start fresh",
        bullets: [
          "You want to experience any updated early-game pacing naturally.",
          "You are returning after a long break and need to relearn systems.",
          "Your old world has outdated base layouts or mod history.",
          "Your group wants everyone to progress together from day one.",
        ],
      },
      {
        heading: "Reasons to continue an old world",
        bullets: [
          "You have builds, collections, or multiplayer memories you care about.",
          "Your server group mainly wants to explore new content from an established base.",
          "You are willing to troubleshoot if old assumptions conflict with 1.0 changes.",
        ],
      },
      {
        heading: "Best compromise",
        paragraphs: [
          "Keep your old world backed up, then make a short fresh save for the first few hours of 1.0. After the patch notes and early stability reports are clear, decide whether to continue fresh or return to the old save.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a fresh save required for Palworld 1.0?",
        answer:
          "This guide does not claim that. It recommends a fresh save for the cleanest experience while old-save compatibility details remain dependent on official notes.",
      },
      {
        question: "What is the safest option for an old world?",
        answer:
          "Back it up, do not overwrite it with risky mod changes, and test the 1.0 update before making permanent base or server decisions.",
      },
      {
        question: "What should a server group do?",
        answer:
          "Pick one policy before launch: fresh wipe, continue old world, or temporary test world. The worst option is changing the policy after players invest time.",
      },
    ],
  },
  {
    title: "Palworld 1.0 Server Setup Guide",
    slug: "server/palworld-1-0-server-setup-guide",
    category: "server",
    categoryLabel: "Server Setup",
    description:
      "A launch-ready planning guide for setting up a Palworld 1.0 server with conservative settings, backups, player expectations, and update-day precautions.",
    shortAnswer:
      "Set up a Palworld 1.0 server with conservative defaults, documented settings, scheduled backups, and clear player expectations before launch-day traffic arrives.",
    playerAdvice: [
      "New server owners should avoid public launch promises until they have tested restarts, backups, and basic player access.",
      "Returning server owners should copy current settings into a plain-text checklist before updating.",
      "Players joining a server should ask whether the world is permanent, temporary, fresh, or continuing from Early Access.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["dedicated server", "multiplayer", "backups"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Decide the server goal first",
        paragraphs: [
          "A Palworld 1.0 server for close friends should make different choices than a public community server. Before changing settings, decide whether the goal is relaxed co-op, long-term progression, fast testing, or a temporary launch weekend world.",
        ],
      },
      {
        heading: "Use conservative launch settings",
        paragraphs: [
          "Until Version 1.0 stability and balance are clear, avoid extreme multipliers. Conservative settings make bugs easier to diagnose and reduce the chance that players feel the world has been distorted by launch-week guesses.",
        ],
      },
      {
        heading: "Minimum launch checklist",
        bullets: [
          "Confirm who owns the server files and billing.",
          "Set a backup schedule before inviting players.",
          "Document all settings in a shared note.",
          "Test restart behavior before launch day.",
          "Announce whether the server will wipe, continue, or stay temporary.",
        ],
      },
      {
        heading: "Mod and plugin caution",
        paragraphs: [
          "If your group uses mods or server tools, wait for maintainers to confirm 1.0 compatibility. Running unverified launch-day mods can make troubleshooting much harder.",
        ],
      },
      {
        heading: "Before inviting players",
        paragraphs: [
          "Run a private smoke test before the server becomes a real group world. Join the server, create a character, place a small starter base, restart the server, and confirm that progress remains available afterward.",
          "For public or semi-public servers, write a short rules page before launch. It should explain whether the world may reset, how backups work, who can change settings, and what players should do if something breaks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use aggressive server settings at launch?",
        answer:
          "No. Start conservative so balance, bugs, and performance are easier to diagnose after Palworld 1.0 goes live.",
      },
      {
        question: "What is the most important server setup step?",
        answer:
          "Backups. A simple, tested backup routine is more important than fine-tuning every setting before the full patch notes are available.",
      },
      {
        question: "Should I run mods on day one?",
        answer:
          "Only after compatibility is confirmed. Unverified mods can make launch issues much harder to isolate.",
      },
    ],
  },
  {
    title: "Palworld 1.0 Best Server Settings",
    slug: "server/palworld-1-0-best-server-settings",
    category: "server",
    categoryLabel: "Server Settings",
    description:
      "A practical framework for choosing Palworld 1.0 server settings without pretending exact launch balance is known before the full patch notes.",
    shortAnswer:
      "The best Palworld 1.0 server settings for launch are close to default, easy to document, and adjusted slowly after your group understands the final 1.0 balance.",
    playerAdvice: [
      "New players should choose servers that explain their settings plainly instead of advertising extreme rates.",
      "Returning players should not assume old grind or balance preferences still fit 1.0.",
      "Server owners should change one major setting category at a time and keep a visible settings changelog.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "6 min read",
    tags: ["server settings", "balance", "multiplayer"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Best means best for your group",
        paragraphs: [
          "There is no single best Palworld 1.0 server settings profile before launch data is available. The best profile depends on your group size, session length, tolerance for grind, and whether you want a long-term world.",
        ],
      },
      {
        heading: "Recommended launch philosophy",
        bullets: [
          "Start close to default settings.",
          "Change one major category at a time.",
          "Keep a written changelog for server tweaks.",
          "Avoid extreme rates until the group understands 1.0 balance.",
          "Schedule setting reviews instead of changing rules every session.",
        ],
      },
      {
        heading: "Settings categories to review",
        paragraphs: [
          "Focus on broad categories first: gathering pace, experience pace, death penalties, Pal work pressure, base limits, raid pressure, and multiplayer access rules.",
          "Do not publish exact numbers as final recommendations until the 1.0 patch notes and real launch performance are available.",
        ],
      },
      {
        heading: "Server owner rule of thumb",
        paragraphs: [
          "The more public your server is, the more conservative you should be. Players can adapt to slower changes, but sudden rule swings can damage trust quickly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this page give exact best 1.0 numbers now?",
        answer:
          "No. Exact recommendations would be unreliable before the full Palworld 1.0 patch notes and real launch testing are available.",
      },
      {
        question: "What setting style is safest for a first server?",
        answer:
          "Close-to-default settings with clear backups and scheduled review points. This keeps the world stable while players learn the release build.",
      },
      {
        question: "When should I change server settings?",
        answer:
          "Change settings after the group can explain the problem. Avoid changing multiple rates at once because it becomes hard to know what helped.",
      },
    ],
  },
  {
    title: "Palworld 1.0 Multiplayer Guide",
    slug: "server/palworld-1-0-multiplayer-guide",
    category: "server",
    categoryLabel: "Multiplayer",
    description:
      "How to plan a Palworld 1.0 multiplayer group, including hosting choices, expectations, backups, voice chat, and launch-week ground rules.",
    shortAnswer:
      "A good Palworld 1.0 multiplayer launch depends less on perfect settings and more on clear hosting, backup, reset, and base-location rules before the group starts.",
    playerAdvice: [
      "New players should join smaller groups first if they want to learn without pressure.",
      "Returning players should explain old-world expectations clearly instead of assuming everyone wants the same pace.",
      "Hosts should write down reset rules and rollback rules before launch day, even for friend groups.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "5 min read",
    tags: ["multiplayer", "co-op", "server"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Pick the right multiplayer format",
        paragraphs: [
          "Small friend groups can usually keep rules simple. Larger communities need clearer expectations around uptime, resets, PvE etiquette, griefing, and who can change server settings.",
        ],
      },
      {
        heading: "Set expectations before launch",
        bullets: [
          "Who hosts the world?",
          "Will the server run 24/7 or only during sessions?",
          "Will players progress separately or together?",
          "Are base locations reserved?",
          "What happens if 1.0 launch issues require a rollback?",
        ],
      },
      {
        heading: "Avoid launch-week friction",
        paragraphs: [
          "Most multiplayer problems are not technical. They come from mismatched expectations. Decide the reset policy, backup policy, and rule-change policy before people invest hours into the world.",
        ],
      },
      {
        heading: "Simple group rules that help",
        bullets: [
          "Pick one shared voice or text channel for server announcements.",
          "Agree on whether rare resources and base spots are first-come or coordinated.",
          "Do not change progression settings mid-session unless the group agrees.",
          "Keep a rollback policy ready in case launch issues affect the world.",
        ],
      },
      {
        heading: "After 1.0 is live",
        paragraphs: [
          "This guide will add confirmed notes about multiplayer stability, server behavior, and any official changes that affect co-op planning.",
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
        question: "What causes the most multiplayer problems?",
        answer:
          "Unclear expectations: who hosts, when the world is online, whether bases are reserved, and what happens if the server rolls back.",
      },
      {
        question: "Should groups start fresh?",
        answer:
          "Many groups will prefer a fresh shared start, but the final choice should wait for official save and server notes if an old world matters.",
      },
    ],
  },
  {
    title: "Palworld 1.0 Performance Settings",
    slug: "guides/palworld-1-0-performance-settings",
    category: "guides",
    categoryLabel: "Performance",
    description:
      "A safe performance tuning checklist for Palworld 1.0 players, focused on stable troubleshooting rather than unconfirmed launch-specific tweaks.",
    shortAnswer:
      "For Palworld 1.0 performance, start with stable moderate settings, change one option at a time, and separate client FPS issues from server or network problems.",
    playerAdvice: [
      "New players should prioritize smooth play over max visuals during the first session.",
      "Returning players should retest old graphics presets because 1.0 performance may differ from Early Access builds.",
      "Multiplayer players should check whether lag is happening to everyone before assuming their own PC settings are the cause.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "5 min read",
    tags: ["performance", "settings", "troubleshooting"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Start with stability, then improve visuals",
        paragraphs: [
          "On a new major release, the first goal is stable frame pacing and crash-free play. Do not chase maximum visuals until you know how Palworld 1.0 behaves on your hardware.",
        ],
      },
      {
        heading: "Basic troubleshooting order",
        bullets: [
          "Update GPU drivers before launch if you are comfortable doing so.",
          "Close heavy background apps while testing.",
          "Start with moderate graphics settings.",
          "Change one setting at a time and test the same area again.",
          "Check official notes before assuming a performance issue is local.",
        ],
      },
      {
        heading: "Settings to review first",
        paragraphs: [
          "Resolution, upscaling options, shadow quality, view distance, effects, foliage, frame rate caps, and VSync are usually the first places to look in a survival game performance pass.",
          "Exact best settings can only be recommended after the 1.0 build is available and tested across hardware.",
        ],
      },
      {
        heading: "Server performance is separate",
        paragraphs: [
          "If multiplayer feels unstable, separate client performance from server performance. A player can have high FPS while the server still struggles with simulation, backups, or network conditions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this guide name the best Palworld 1.0 performance settings now?",
        answer:
          "Not exactly. It can give a safe troubleshooting order, but exact best settings require testing the 1.0 build on real hardware.",
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
    ],
  },
  {
    title: "Palworld 1.0 FAQ",
    slug: "guides/palworld-1-0-faq",
    category: "guides",
    categoryLabel: "FAQ",
    description:
      "Short answers to common Palworld 1.0 questions about release timing, fresh saves, servers, patch notes, World Tree, and what is not confirmed yet.",
    shortAnswer:
      "Palworld 1.0 is planned for July 10, 2026, but detailed recommendations should wait for the full patch notes. Back up saves, keep launch plans flexible, and avoid treating speculation as confirmed.",
    playerAdvice: [
      "New players should start with beginner and save-planning guides rather than trying to read every possible 1.0 rumor.",
      "Returning players should protect old worlds first, then test the release build before rebuilding routines.",
      "Server players should ask hosts about backups, wipe policy, and settings before committing to a multiplayer world.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "4 min read",
    tags: ["faq", "release", "fresh save"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "When does Palworld 1.0 release?",
        paragraphs: [
          "Pocketpair has announced Palworld Version 1.0 for July 10, 2026. Check official channels for exact platform rollout timing.",
        ],
      },
      {
        heading: "Should I start a new save?",
        paragraphs: [
          "A fresh save is the cleanest way to experience 1.0 from the beginning. If you want to keep an old world, back it up and wait for official compatibility notes.",
        ],
      },
      {
        heading: "Are all 1.0 patch details known?",
        paragraphs: [
          "No. Broad themes have been announced, but the full patch notes are needed before reliable detailed guides can be written.",
        ],
      },
      {
        heading: "Will this site cover every Pal and item?",
        paragraphs: [
          "Not in the MVP. This site is a focused guide hub, not a full database or Wiki.",
        ],
      },
      {
        heading: "What should I read first?",
        paragraphs: [
          "New players should start with the beginner guide, then read the fresh save guide if they are unsure how to begin. Returning players should read the returning player guide before loading an important old world.",
          "Server owners should read the setup and settings guides before inviting players. The most useful launch-week prep is usually backups, conservative settings, and clear group expectations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is every answer on this FAQ final?",
        answer:
          "No. Answers that depend on exact Palworld 1.0 mechanics will be updated after the full patch notes are available.",
      },
      {
        question: "Does this FAQ replace official patch notes?",
        answer:
          "No. It summarizes player decisions and points readers toward cautious next steps. Official notes remain the source for exact changes.",
      },
      {
        question: "What is the safest launch-day plan?",
        answer:
          "Back up saves, keep server settings conservative, start fresh if you want a clean experience, and wait before trusting detailed tier lists.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld 1.0 announcement",
        href: "https://www.pocketpair.jp/en/game-news/palworld-1-0-july-10-cinematic-trailer-revealed/",
      },
    ],
  },
  {
    title: "Palworld 1.0 Patch Notes Explained",
    slug: "palworld-1-0/palworld-1-0-patch-notes-explained",
    category: "palworld-1-0",
    categoryLabel: "Patch Notes",
    description:
      "A placeholder explainer for the Palworld 1.0 patch notes that will be updated with confirmed changes once the official notes are live.",
    shortAnswer:
      "The full Palworld 1.0 patch notes are not available yet, so this page is a readiness explainer: it tells you what to check first and avoids claiming exact changes before they are confirmed.",
    playerAdvice: [
      "New players should look for changes that affect early progression, tutorials, survival pacing, and performance.",
      "Returning players should scan for save compatibility, base behavior, balance changes, and known issues before loading important worlds.",
      "Server owners should read multiplayer, dedicated server, and settings notes before opening a permanent 1.0 world.",
    ],
    lastUpdated: "July 7, 2026",
    readingTime: "4 min read",
    featured: true,
    tags: ["patch notes", "1.0 changes", "confirmed updates"],
    statusNotice: preReleaseNotice,
    ...launchUpdateFields,
    sections: [
      {
        heading: "Current status",
        paragraphs: [
          "The full Palworld 1.0 patch notes are not available yet. This page is prepared as an explainer hub so it can be updated quickly when the official notes are published.",
        ],
      },
      {
        heading: "How this explainer will work",
        bullets: [
          "Separate confirmed changes from community speculation.",
          "Summarize player-impacting changes in plain English.",
          "Flag changes that affect new saves, old saves, servers, base building, performance, and multiplayer.",
          "Link to deeper guides only after the details are confirmed.",
        ],
      },
      {
        heading: "What will not be included",
        paragraphs: [
          "This page will not invent exact numbers, hidden mechanics, tier lists, or drop locations before they are confirmed in official notes or verified after launch.",
        ],
      },
      {
        heading: "What to check first on patch day",
        bullets: [
          "Save compatibility notes.",
          "Server and multiplayer changes.",
          "Performance and crash fixes.",
          "Progression, base, and Pal balance changes.",
          "Known issues listed by the developer.",
        ],
      },
      {
        heading: "How to read the patch notes",
        paragraphs: [
          "Start with changes that can affect your existing progress: save behavior, server rules, base systems, multiplayer issues, and known problems. Those items matter before build routes, tier lists, or detailed farming plans.",
          "After that, separate confirmed developer notes from launch-week player discoveries. Community testing is useful, but this site should not turn early anecdotes into permanent advice without verification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are the Palworld 1.0 patch notes published?",
        answer:
          "Not in this MVP content pass. This guide will be updated when the full Palworld 1.0 patch notes are available.",
      },
      {
        question: "Will this page summarize every line of the patch notes?",
        answer:
          "It will prioritize player-impacting changes: saves, servers, performance, progression, base building, multiplayer, and confirmed new content.",
      },
      {
        question: "Why not add predicted changes now?",
        answer:
          "Predictions are risky for a launch guide. This site avoids exact unconfirmed claims so the MVP can be trusted when 1.0 information changes.",
      },
    ],
    sourceLinks: [
      {
        label: "Pocketpair official Palworld news",
        href: "https://www.pocketpair.jp/en/news",
      },
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
