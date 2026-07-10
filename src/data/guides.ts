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

export const liveReleaseNotice =
  "Palworld Version 1.0 is live, and Pocketpair has published the official release changelog.";

export const updateNotice =
  "The official 1.0 changelog is available. This page keeps cautious guidance where exact recommendations still need launch-build testing.";

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
      "A cautious starter roadmap for new Palworld 1.0 players, covering early goals, base basics, multiplayer choices, and advice that still needs launch-build testing.",
    shortAnswer:
      "New players should start Palworld 1.0 with a small, flexible first base, learn the core survival loop, and avoid chasing launch-week tier lists until they are tested against the release build.",
    playerAdvice: [
      "If you are new, spend the first session learning gathering, crafting, catching, food, and base assignments instead of rushing a permanent base.",
      "If you are returning, treat old Early Access habits as useful background, not confirmed 1.0 optimization.",
      "If you are playing with friends, agree on hosting and save rules before anyone invests heavily in a shared world.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "6 min read",
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
          "Not yet. It is a safe launch starter guide. Exact best routes, best Pals, and balance-sensitive recommendations still need release-build testing.",
      },
      {
        question: "Should a new player start solo or multiplayer?",
        answer:
          "Solo is easier for learning systems. Multiplayer is better if your group already knows who hosts, when the world is online, and how settings will be handled.",
      },
      {
        question: "What should I avoid on day one?",
        answer:
          "Avoid permanent base commitments, extreme server settings, and guides that claim exact 1.0 best-in-slot answers without verified release-build testing.",
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
          "Avoid installing major mod changes immediately before launch day.",
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
    statusNotice: liveReleaseNotice,
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
          "Use them as background only. Any guide that depends on exact balance, routes, base locations, or Pal rankings should be rechecked against the official changelog and release build.",
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
      "Officially confirmed guidance for choosing between a fresh Palworld 1.0 character and continuing an existing save.",
    shortAnswer:
      "A fresh save is not required. Pocketpair says existing save data can continue, but recommends a new character for the reworked 1.0 experience. Back up important saves first, especially if mods were used.",
    playerAdvice: [
      "New players should start fresh because they have no old progression to protect.",
      "Returning players should preserve old saves and use a short fresh run to compare the 1.0 opening experience.",
      "Multiplayer groups should agree on the wipe or continue policy before the first shared session.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "5 min read",
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
      "Do not generalize isolated player save reports into universal compatibility claims.",
    ],
    sourceNotes: [
      "Save guidance was verified against Pocketpair's official v1.0 changelog and official pre-launch mod warning on Steam.",
    ],
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "Pocketpair says existing save data can continue in Version 1.0, so a wipe is not required. The developer also recommends a fresh character because 1.0 substantially reworks the game experience.",
          "Back up important saves before updating. If a save depended on mods, remove old mod files carefully and expect that mod-added content may not work correctly without a compatible 1.0 version.",
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
          "No. Pocketpair says you can continue existing save data, while recommending a new character for the full reworked experience.",
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
      "A launch-ready planning guide for setting up a Palworld 1.0 server with conservative settings, backups, player expectations, and update-day precautions.",
    shortAnswer:
      "Set up a Palworld 1.0 server with conservative defaults, documented settings, scheduled backups, and clear player expectations before launch-day traffic arrives.",
    playerAdvice: [
      "New server owners should avoid public launch promises until they have tested restarts, backups, and basic player access.",
      "Returning server owners should copy current settings into a plain-text checklist before updating.",
      "Players joining a server should ask whether the world is permanent, temporary, fresh, or continuing from Early Access.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "7 min read",
    featured: true,
    tags: ["dedicated server", "multiplayer", "backups"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "The official changelog includes dedicated-server processing optimization and multiplayer bug fixes.",
      "Pocketpair warns server owners and players to remove old mods before updating and to back up important saves.",
    ],
    pendingUpdates: [
      "Test restart, persistence, player joining, and real performance under the server's expected load.",
      "Wait for mod and server-tool maintainers to confirm Version 1.0 compatibility.",
    ],
    sourceNotes: [
      "Server facts were checked against the official v1.0 Optimization, Multiplayer, bug-fix, and About Mods sections.",
    ],
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
          "Backups. A simple, tested backup routine is more important than fine-tuning every setting before real 1.0 server behavior is measured.",
      },
      {
        question: "Should I run mods on day one?",
        answer:
          "Only after compatibility is confirmed. Unverified mods can make launch issues much harder to isolate.",
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
      "A practical framework for choosing Palworld 1.0 server settings without pretending the official changelog defines universal best values.",
    shortAnswer:
      "The best Palworld 1.0 server settings for launch are close to default, easy to document, and adjusted slowly after your group understands the final 1.0 balance.",
    playerAdvice: [
      "New players should choose servers that explain their settings plainly instead of advertising extreme rates.",
      "Returning players should not assume old grind or balance preferences still fit 1.0.",
      "Server owners should change one major setting category at a time and keep a visible settings changelog.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "6 min read",
    tags: ["server settings", "balance", "multiplayer"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "The official changelog confirms broad balance, base, raid, multiplayer, and server optimization changes.",
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
        heading: "Best means best for your group",
        paragraphs: [
          "There is no single best Palworld 1.0 server settings profile in the official changelog. The best profile depends on your group size, session length, tolerance for grind, and whether you want a long-term world.",
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
          "Not yet. The official changelog is available, but exact best values depend on group size, progression goals, and verified launch performance.",
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
    statusNotice: liveReleaseNotice,
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
    statusNotice: liveReleaseNotice,
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
      "Palworld 1.0 is live and the official changelog is published, but detailed recommendations still need release-build testing. Back up saves and avoid treating early anecdotes as confirmed.",
    playerAdvice: [
      "New players should start with beginner and save-planning guides rather than trying to read every possible 1.0 rumor.",
      "Returning players should protect old worlds first, then test the release build before rebuilding routines.",
      "Server players should ask hosts about backups, wipe policy, and settings before committing to a multiplayer world.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "4 min read",
    tags: ["faq", "release", "fresh save"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    confirmedChanges: [
      "Palworld Version 1.0 is live and the official release changelog is published.",
      "Existing saves can continue, while Pocketpair recommends a fresh character for the reworked experience.",
    ],
    pendingUpdates: [
      "Answers about best routes, builds, settings, and practical performance still need release-build testing.",
    ],
    sourceNotes: [
      "Release and save answers were checked against Pocketpair's official v1.0 Steam changelog.",
    ],
    sections: [
      {
        heading: "When does Palworld 1.0 release?",
        paragraphs: [
          "Palworld Version 1.0 is live. Pocketpair published the official release changelog on July 10, 2026.",
        ],
      },
      {
        heading: "Should I start a new save?",
        paragraphs: [
          "A fresh save is not required. Pocketpair says existing save data can continue, but recommends a new character for the reworked 1.0 experience. Back up important data first, especially if mods were used.",
        ],
      },
      {
        heading: "Are the official 1.0 patch notes published?",
        paragraphs: [
          "Yes. The full official release changelog is published. Best routes, builds, settings, and real-world performance still need verified player testing.",
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
          "No. Answers that depend on exact Palworld 1.0 mechanics will be updated after official-source review and release-build testing.",
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
      "An official-source summary of the Palworld v1.0 release changelog, its major update categories, and the details that still need player testing.",
    shortAnswer:
      "Yes. Pocketpair published the full Palworld v1.0 official release changelog on July 10, 2026. It confirms broad content additions and system overhauls, while best builds, routes, settings, and real-world performance still need testing.",
    playerAdvice: [
      "New players should look for changes that affect early progression, tutorials, survival pacing, and performance.",
      "Returning players should scan for save compatibility, base behavior, balance changes, and known issues before loading important worlds.",
      "Server owners should read multiplayer, dedicated server, and settings notes before opening a permanent 1.0 world.",
    ],
    lastUpdated: "July 10, 2026",
    readingTime: "6 min read",
    featured: true,
    tags: ["patch notes", "1.0 changes", "confirmed updates"],
    statusNotice: liveReleaseNotice,
    ...launchUpdateFields,
    updateNotice:
      "Official patch notes verified. This summary covers confirmed categories and high-impact facts without reproducing the full changelog.",
    confirmedChanges: [
      "Version 1.0 is live and Palworld has exited Early Access.",
      "The official changelog confirms new areas and world changes, story updates, 72 added Pals, and new Awakening and Mutation systems.",
      "Pocketpair documents major changes to combat, equipment, base building, raids, multiplayer, balance, UI, graphics, sound, optimization, and bug fixes.",
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
    sections: [
      {
        heading: "Official patch notes status",
        paragraphs: [
          "The full Palworld v1.0 release changelog is published on Palworld's official Steam news channel. The announcement states that Palworld has exited Early Access and Version 1.0 is live.",
          "The official version label is v1.0. The announcement does not present a more specific public build number in its title or opening release information.",
        ],
      },
      {
        heading: "Major official update categories",
        bullets: [
          "New Areas & World Improvements; Missions & Story; Pals; Combat.",
          "New Equipment & Items; Base & Building; Raids & Base Defense; Multiplayer.",
          "Balance Overhaul; UI / UX Adjustments; Graphics; Sound.",
          "Optimization; Other Main Bug Fixes; About Mods.",
        ],
      },
      {
        heading: "High-impact confirmed facts",
        paragraphs: [
          "Pocketpair confirms the new Sunreach area, the World Tree's role in the story, a reworked world and mission flow, 72 added Pals, and the new Awakening and Mutation systems. The player level cap is now 80.",
          "The changelog also confirms broad base-building, raid, multiplayer, balance, presentation, optimization, and bug-fix work. These are official change categories; they do not by themselves prove a specific best build, route, server value, or hardware performance gain.",
        ],
      },
      {
        heading: "Save and mod guidance",
        bullets: [
          "Pocketpair says players can continue with existing save data.",
          "Pocketpair recommends starting fresh with a new character to experience the reworked game.",
          "Back up important saves before updating or using mods.",
          "Remove old mod files and verify the game launches unmodded before reinstalling 1.0-compatible mods.",
        ],
      },
      {
        heading: "What still needs player testing",
        paragraphs: [
          "Real server capacity under load, platform-specific stability, mod compatibility, practical performance changes, exact progression routes, best Pal or equipment rankings, optimal base layouts, and recommended server multipliers all require verified launch-build testing.",
          "Later hotfixes and known-issue notices may also change launch advice, so official follow-up announcements should remain the first source checked.",
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
          "No. It summarizes the player-impacting categories and links to the complete official changelog rather than copying it.",
      },
      {
        question: "What information is still provisional?",
        answer:
          "Best routes, tier lists, exact server recommendations, hardware performance gains, and platform-specific stability claims remain provisional until verified in the launch build.",
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
