import type { Guide } from "./guides";

export type TipVerification = "Official v1.0" | "Practical guidance" | "Needs current-build test";

export type AdvancedTip = {
  number: number;
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  detail: string[];
  actions: string[];
  image: string;
  alt: string;
  caption: string;
  verification: TipVerification;
  related?: { label: string; href: string };
};

export type AdvancedTipChapter = {
  number: number;
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tips: AdvancedTip[];
};

const asset = (name: string) => `/assets/advanced-tips/${name}.webp`;

export const advancedTipChapters: AdvancedTipChapter[] = [
  {
    number: 1,
    id: "world-setup",
    eyebrow: "World setup and early progression",
    title: "Build a faster opening without removing every challenge",
    description:
      "Use world settings, capture bonuses, and player stats to remove dead time while keeping the first hours readable and flexible.",
    tips: [
      {
        number: 1,
        id: "world-settings",
        shortTitle: "World settings",
        title: "Tune world settings around the time you actually have",
        summary:
          "Reduce repetitive waiting before raising every reward slider. Death penalties, incubation time, gathering, and drop rates change the feel of the entire save.",
        detail: [
          "Start with friction, not power. A lighter death penalty and shorter egg incubation can make a solo or small-group world easier to resume without turning every resource into a free pickup.",
          "Change one or two controls at a time and keep a note of the original values. Extreme capture, gathering, or drop multipliers can shorten progression so much that technology and base upgrades stop feeling meaningful.",
        ],
        actions: [
          "Back up an established world before changing several settings.",
          "Reduce waiting first; raise resource multipliers only when a real bottleneck appears.",
          "Agree on settings before a multiplayer group invests in the save.",
        ],
        image: asset("01-world-settings"),
        alt: "Original fantasy survival-game illustration of a glowing world globe, settings dials, an egg timer, and a supply crate",
        caption: "World settings are quality-of-life controls, not a universal best-build preset.",
        verification: "Practical guidance",
        related: { label: "Compare server-setting approaches", href: "/server/palworld-1-0-best-server-settings/" },
      },
      {
        number: 2,
        id: "capture-bonus",
        shortTitle: "Capture bonus",
        title: "Use the five-capture bonus to level while expanding your roster",
        summary:
          "Palworld 1.0 reduced each species' Capture Bonus requirement from twelve captures to five, so early variety now pays off sooner than the source screenshot suggests.",
        detail: [
          "Open the Paldex before clearing a familiar area and check which nearby species still have Capture Bonus progress remaining. Capturing useful duplicates can advance experience while also supplying workers, combat options, breeding material, or condensation stock.",
          "Do not keep catching the same easy target after its useful bonus is complete merely because it was efficient in an older route. Move to a new habitat or mission objective and let exploration expose the next set of species.",
        ],
        actions: [
          "Check Capture Bonus progress in the Paldex before throwing spheres.",
          "Prioritize species that also fill missing work or combat roles.",
          "Carry enough spheres to finish a five-capture set without ending the trip early.",
        ],
        image: asset("02-capture-bonus"),
        alt: "Original fantasy game illustration of five glowing capture spheres orbiting an experience emblem and a field journal",
        caption: "Version 1.0 changed the Capture Bonus target from twelve to five captures per species.",
        verification: "Official v1.0",
        related: { label: "Follow the first-hour checklist", href: "/guides/palworld-1-0-first-hour-checklist/" },
      },
      {
        number: 3,
        id: "stat-priority",
        shortTitle: "Stat priority",
        title: "Prioritize Weight and Stamina before niche player stats",
        summary:
          "Weight usually removes the most early friction, while Stamina supports travel, climbing, gliding, gathering, and longer fights. Work Speed is a situational third choice.",
        detail: [
          "Early damage and survival improve through equipment, Pals, food, movement, and preparation as well as player points. Carry capacity is harder to replace when every gathering trip ends with slow movement or an emergency return.",
          "Stamina becomes more valuable when a route includes long climbs, repeated dodges, manual gathering, or gliding. Add Work Speed only if your playstyle depends on personal crafting rather than letting Base Pals handle production.",
        ],
        actions: [
          "Take Weight when inventory limits repeatedly end productive trips.",
          "Take Stamina when movement or gathering is the real bottleneck.",
          "Treat Work Speed as a playstyle choice, not a mandatory early stat.",
        ],
        image: asset("03-stat-priority"),
        alt: "Original game-guide illustration of a backpack, lightning bolt, and gear beside three balanced upgrade bars",
        caption: "Choose stats by the bottleneck that ends your sessions, not by a fixed universal ratio.",
        verification: "Practical guidance",
        related: { label: "Read the complete beginner guide", href: "/guides/palworld-1-0-beginner-guide/" },
      },
    ],
  },
  {
    number: 2,
    id: "exploration",
    eyebrow: "Exploration and mount planning",
    title: "Turn the map into a route instead of a collection of detours",
    description:
      "Plan a ground-to-air mount path, record valuable discoveries, and use watchtowers and fast travel to reduce repeated travel.",
    tips: [
      {
        number: 4,
        id: "mount-progression",
        shortTitle: "Mount progression",
        title: "Plan a ground, glide, and flight progression instead of chasing one mount",
        summary:
          "An early ground mount solves speed, a gliding partner helps vertical routes, and a flying mount changes reconnaissance. Eikthyrdeer, Celaray, and Nitewing are examples, not mandatory picks.",
        detail: [
          "Choose the first mount that solves the terrain in front of you. Ground movement is efficient on roads and open biomes, while gliding helps with controlled descents and short gaps before full flight is practical.",
          "Flight is a major exploration upgrade, but saddle levels, partner-skill behavior, stamina, and comparative speed can change. Check the current Technology tree and Pal details before committing materials to an old recommended level.",
        ],
        actions: [
          "Use a ground mount first when roads and resource loops dominate.",
          "Add a gliding option for cliffs, ruins, and safe descents.",
          "Unlock flight when reconnaissance and vertical access justify the cost.",
        ],
        image: asset("04-mount-progression"),
        alt: "Original fantasy survival illustration showing three travel stages: a horned ground creature, a small gliding creature, and a bird mount in flight",
        caption: "Mount progression should follow terrain and travel needs rather than a single tier list.",
        verification: "Practical guidance",
        related: { label: "Watch the early-game route", href: "/videos/palworld-1-0-fast-early-game-route/" },
      },
      {
        number: 5,
        id: "map-markers-effigies",
        shortTitle: "Markers and Effigies",
        title: "Mark Lifmunk Effigies and resource stops before leaving an area",
        summary:
          "Use map markers for caves, ore, skill-fruit trees, dungeon entrances, and missed Lifmunk Effigies so later collection runs follow a route instead of repeating a search.",
        detail: [
          "A marker is most useful when it describes a future action: return with a better pickaxe, collect at night, bring cold protection, or revisit after unlocking flight. Avoid filling the map with unlabeled symbols that no longer explain why the place mattered.",
          "Night and aerial viewpoints can make glowing collectibles easier to see. Collect Effigies as part of an existing route and use the current Statue of Power interface to confirm how the upgrade applies in your build.",
        ],
        actions: [
          "Create a small, consistent marker legend.",
          "Add the reason for returning in your own notes when possible.",
          "Combine Effigy collection with fast-travel and resource loops.",
        ],
        image: asset("05-map-markers-effigies"),
        alt: "Original night exploration illustration of a glowing green creature effigy beside a map covered with clear route markers",
        caption: "A marker should tell your future self what to do, not only where something was seen.",
        verification: "Practical guidance",
        related: { label: "Use the beginner exploration route", href: "/guides/palworld-1-0-beginner-guide/" },
      },
      {
        number: 6,
        id: "watchtowers-fast-travel",
        shortTitle: "Watchtowers and travel",
        title: "Activate watchtowers early and separate confirmed rewards from route rumors",
        summary:
          "Version 1.0 watchtowers reveal nearby map areas and become fast-travel points. Use them as route anchors before clearing optional ruins or tower activities.",
        detail: [
          "A newly activated watchtower provides both information and a return point, which makes it more valuable early than an isolated loot detour. Reveal the area, identify the nearest settlement or objective, and then plan a loop that ends near fast travel.",
          "The source screenshot also assigns specific rewards to special towers. Treat those exact experience, blueprint, or technology-point claims as current-build tests until the tower name and reward panel are visible in your own game.",
        ],
        actions: [
          "Reach the nearest watchtower before exploring the entire surrounding biome.",
          "Use fast travel to bank rare materials before testing optional content.",
          "Read the live reward panel before promising a fixed tower payout.",
        ],
        image: asset("06-watchtowers-fast-travel"),
        alt: "Original fantasy map illustration of a luminous watchtower revealing fog and connecting three fast-travel beacons",
        caption: "Watchtowers are confirmed map and travel anchors; exact optional-tower rewards remain patch-sensitive.",
        verification: "Official v1.0",
        related: { label: "Review the official update guide", href: "/palworld-1-0/palworld-1-0-patch-notes-explained/" },
      },
    ],
  },
  {
    number: 3,
    id: "combat-pal-growth",
    eyebrow: "Combat and Pal growth",
    title: "Build around matchups, control windows, and verified upgrade costs",
    description:
      "Use elements and recall timing before raw damage, then treat passive, breeding, and star investments as separate layers.",
    tips: [
      {
        number: 7,
        id: "elements-recall",
        shortTitle: "Elements and recall",
        title: "Read the matchup, then use recall as a defensive tool",
        summary:
          "Element advantage matters, but exact percentage charts become stale quickly. Recall a Pal before a large telegraphed hit, then redeploy after the danger window.",
        detail: [
          "A favorable element is useful only when the Pal can stay active and land its skills. Watch enemy telegraphs, terrain, and cooldowns instead of treating the matchup chart as an automatic win.",
          "Recalling a Pal can remove it from the path of a slow, high-damage attack. Practice the timing against a repeatable encounter before depending on it during a long boss attempt, and verify the current element relationships in the live Pal information screens.",
        ],
        actions: [
          "Bring at least one safe matchup instead of five copies of the same weakness.",
          "Recall before the impact, not after the health bar drops.",
          "Redeploy where the Pal has room to use its next skill.",
        ],
        image: asset("07-elements-recall"),
        alt: "Original combat-guide illustration of a circular element wheel, an incoming attack, a capture sphere, and a creature being safely recalled",
        caption: "Matchups create an advantage; recall timing keeps that advantage alive.",
        verification: "Practical guidance",
        related: { label: "See a complete combat build", href: "/guides/palworld-1-0-ultimate-pal-builds/" },
      },
      {
        number: 8,
        id: "status-synergy",
        shortTitle: "Status synergy",
        title: "Build a control chain before stacking four unrelated passives",
        summary:
          "A team that applies, extends, and exploits a status can outperform a collection of isolated bonuses. Wet, freezing, and electric effects are a route to test, not a guaranteed formula.",
        detail: [
          "Start with the effect you can apply reliably, then choose a second Pal or skill that benefits from the opening it creates. The practical goal is more safe damage time, fewer interrupted attacks, or a predictable capture window.",
          "Status resistance, boss immunity, application chance, duration, and elemental interactions can change by encounter or patch. Test the complete sequence on the target type you actually intend to farm before rebuilding an entire team around it.",
        ],
        actions: [
          "Choose one repeatable setup effect.",
          "Add one payoff that clearly benefits from the control window.",
          "Measure consistency before adding more complexity.",
        ],
        image: asset("08-status-synergy"),
        alt: "Original fantasy battle illustration of water, frost, and lightning effects linking into one controlled creature encounter",
        caption: "Synergy is valuable when each step makes the next action safer or stronger.",
        verification: "Needs current-build test",
        related: { label: "Read the ultimate Pal build guide", href: "/guides/palworld-1-0-ultimate-pal-builds/" },
      },
      {
        number: 9,
        id: "breeding-cakes",
        shortTitle: "Breeding cakes",
        title: "Use specialized cakes to influence breeding, not to promise perfect inheritance",
        summary:
          "Version 1.0 cakes can influence stats, egg count, mutation chance, or passive inheritance. The screenshot's universal 100% inheritance claim should not be treated as confirmed.",
        detail: [
          "Decide the breeding goal before consuming a rare cake: preserve a passive, increase output, chase a mutation, or improve another outcome. Mixing goals wastes materials and makes the result harder to evaluate.",
          "Tooltips and facilities should be checked on the current build because item names, technology levels, recipes, and inheritance behavior are balance-sensitive. Record the parents, cake, and result if you are testing a repeatable route.",
        ],
        actions: [
          "Choose one breeding objective per test batch.",
          "Read the current cake and facility descriptions before crafting.",
          "Do not advertise 100% inheritance without repeatable current-build evidence.",
        ],
        image: asset("09-breeding-cakes"),
        alt: "Original fantasy breeding-room illustration of a decorated cake beside a glowing incubator containing a patterned egg",
        caption: "Specialized cakes influence outcomes, but a universal perfect-inheritance promise is not confirmed.",
        verification: "Official v1.0",
        related: { label: "Review new Pal systems", href: "/palworld-1-0/palworld-1-0-new-pals-overview/" },
      },
      {
        number: 10,
        id: "starfruit-upgrades",
        shortTitle: "Starfruit upgrades",
        title: "Reserve Starfruit and other rare upgrades for a finished role",
        summary:
          "Do not spend a rare star-rank item simply because a Pal is uncommon. Finish its job, passives, and long-term place in the team first.",
        detail: [
          "A high-investment Pal should already have a clear purpose: worker, travel mount, raid specialist, arena build, or favorite generalist. Rare upgrade items amplify a plan; they do not repair a confused build.",
          "The supplied screenshot presents Starfruit as a direct star-rank shortcut. Treat its exact sources, limits, and upgrade behavior as source-footage guidance until the current item description and result screen are independently checked.",
        ],
        actions: [
          "Finish the Pal's role and passive plan first.",
          "Compare the upgrade with cheaper condensation or Soul improvements.",
          "Save one reserve item until a current-build test confirms the outcome.",
        ],
        image: asset("10-starfruit-upgrades"),
        alt: "Original fantasy upgrade illustration of a luminous golden star-shaped fruit between a three-star and a stronger five-star creature silhouette",
        caption: "Rare upgrades are most efficient after the build has a permanent role.",
        verification: "Needs current-build test",
        related: { label: "See the endgame Pal upgrade route", href: "/guides/palworld-1-0-ultimate-pal-builds/" },
      },
    ],
  },
  {
    number: 4,
    id: "new-regions",
    eyebrow: "Sunreach and the World Tree",
    title: "Follow the story gate before building an endgame farming route",
    description:
      "Use the reworked main mission to reach the new regions, then separate confirmed resources from unverified shortcuts and reward routes.",
    tips: [
      {
        number: 11,
        id: "sunreach-world-tree-route",
        shortTitle: "Region progression",
        title: "Use the main mission to move from Sunreach toward the World Tree",
        summary:
          "Sunreach and the World Tree are official 1.0 destinations tied to the reworked story. Follow mission gates instead of relying on a shortcut copied from a different build.",
        detail: [
          "Reveal the route with watchtowers, complete the mission objectives that unlock the next stage, and establish a safe return point before carrying rare materials deeper into a new region.",
          "Sunreach introduces Soralite and specialized progression, while the World Tree is framed as the major endgame challenge. Exact tower order, access requirements, entry level, and fastest path still need release-build evidence.",
        ],
        actions: [
          "Finish the active mission step before traveling to a distant marker.",
          "Activate travel points and store valuable materials between objectives.",
          "Treat route maps as patch-specific unless the game build is shown.",
        ],
        image: asset("11-sunreach-world-tree-route"),
        alt: "Original panoramic fantasy map illustration with a route from floating Sunreach islands to a monumental glowing World Tree",
        caption: "The reworked story is the safest spine for opening the two major 1.0 regions.",
        verification: "Official v1.0",
        related: { label: "Open the Sunreach guide", href: "/palworld-1-0/palworld-1-0-sunreach-guide/" },
      },
      {
        number: 12,
        id: "world-tree-resources",
        shortTitle: "World Tree resources",
        title: "Secure storage and protection before farming World Tree resources",
        summary:
          "Paloxite, Ancient Civilization Relics, and Radiant Gems are confirmed World Tree rewards. Test the route and any resource-preservation effect before planning a permanent farm.",
        detail: [
          "Make the first trip a reconnaissance run: identify the hazard, resource, nearest return point, carry limit, and expected escape route. A short safe loop is more useful than a large haul that cannot be banked.",
          "The source material describes special water or passive effects that protect local resources. The official notes confirm the resources, but not every protection method or duration shown in the screenshot. Keep those methods labeled as current-build tests.",
        ],
        actions: [
          "Mark the deposit and nearest safe return point.",
          "Measure respawn or depletion behavior before scaling the route.",
          "Verify any protection buff in the live tooltip and with a controlled test.",
        ],
        image: asset("12-world-tree-resources"),
        alt: "Original fantasy resource illustration of teal ore, an ancient relic, and a glowing gem beneath the roots of a giant world tree",
        caption: "The resources are official; the most efficient protection and farming loop still needs testing.",
        verification: "Official v1.0",
        related: { label: "Read the World Tree guide", href: "/palworld-1-0/palworld-1-0-world-tree-guide/" },
      },
      {
        number: 13,
        id: "sanctuaries",
        shortTitle: "Wildlife Sanctuaries",
        title: "Enter renewed sanctuaries for encounters, materials, and active defenses",
        summary:
          "Version 1.0 rebuilt Wildlife Sanctuaries with distinct environments, exclusive encounters, rare materials, bosses, and defenses. Prepare for a route, not a free gathering stop.",
        detail: [
          "Leave inventory space, bring the protection and capture supplies appropriate to the environment, and decide whether the trip is for a Pal, a material, or a boss. Trying to complete every objective on the first entry increases the chance of losing the entire haul.",
          "The screenshot highlights Ancient Bones as a valuable reward. Rare materials are officially confirmed, but exact Ancient Bones islands, drop rates, patrol paths, and best farming loops need current-build verification.",
        ],
        actions: [
          "Choose one target before entering the sanctuary.",
          "Bank the first rare drop before extending the route.",
          "Record the build and location when publishing a material claim.",
        ],
        image: asset("13-wildlife-sanctuaries"),
        alt: "Original fantasy sanctuary illustration with ancient ruins, unusual wildlife silhouettes, patrol lights, and a large fossil bone among rare plants",
        caption: "Renewed sanctuaries are defended ecosystems, not simple resource islands.",
        verification: "Official v1.0",
        related: { label: "See all confirmed 1.0 changes", href: "/palworld-1-0/palworld-1-0-patch-notes-explained/" },
      },
    ],
  },
  {
    number: 5,
    id: "endgame",
    eyebrow: "Endgame bases and ancient technology",
    title: "Automate stable loops before chasing maximum difficulty",
    description:
      "Use aquatic construction, specialized workers, ancient processing, and measured expeditions to turn rare resources into repeatable output.",
    tips: [
      {
        number: 14,
        id: "aquatic-construction",
        shortTitle: "Aquatic construction",
        title: "Design a water base around access and worker coverage",
        summary:
          "Aquatic Construction is an official 1.0 system. Prove pathing, storage access, and worker coverage on a small platform before expanding an offshore production base.",
        detail: [
          "Begin with a transport path, storage, food, beds, and one production test. A visually impressive platform is not useful if Pals cannot reach the station or materials move through multiple slow handoffs.",
          "The screenshot assigns exact unlock levels and simultaneous fire-and-cooling requirements to specific ancient workstations. Check the current Technology tree and station panel before using those numbers as instructions.",
        ],
        actions: [
          "Build one small pathing test before the full platform.",
          "Place storage next to the first station that consumes the material.",
          "Add specialized workers only after the station can stay supplied.",
        ],
        image: asset("14-aquatic-construction"),
        alt: "Original fantasy base-building illustration of a compact modular workshop platform built over clear blue water with accessible paths and storage",
        caption: "Test access and supply flow before scaling an aquatic base.",
        verification: "Official v1.0",
        related: { label: "Browse base-building guidance", href: "/base-building/" },
      },
      {
        number: 15,
        id: "automation-recycling",
        shortTitle: "Automation and recycling",
        title: "Connect ancient production and relic recycling into one measured loop",
        summary:
          "Automated farms and processing reduce repeated work, while the Ancient Relic Recycler converts scarce relics into build resources. Keep a reserve before testing the reward pool.",
        detail: [
          "Automate a stable input first: food, a common crop, or a material that the next station consistently consumes. Production systems fail when transport, storage, power, or worker coverage cannot keep pace with the headline machine.",
          "The Ancient Relic Recycler name and Ancient Civilization Relic conversion are part of the 1.0 technology set. Exact unlock levels, required additives, reward multipliers, and reward pools shown in source footage remain patch-sensitive.",
        ],
        actions: [
          "Prove one input-to-storage loop before adding another machine.",
          "Recycle a small batch and record the current reward pool.",
          "Keep enough relics in reserve for future recipes or balance changes.",
        ],
        image: asset("15-automation-recycling"),
        alt: "Original split-scene fantasy technology illustration of an automated crop line feeding storage and an ancient relic recycler producing upgrade materials",
        caption: "Automation saves time only when inputs, transport, processing, and storage stay balanced.",
        verification: "Needs current-build test",
        related: { label: "See a Recycler-based build", href: "/guides/palworld-1-0-ultimate-pal-builds/" },
      },
      {
        number: 16,
        id: "expedition-difficulty",
        shortTitle: "Expedition difficulty",
        title: "Farm a reliable expedition before selecting the hardest one",
        summary:
          "Sunreach and World Tree expeditions are confirmed high-difficulty activities. Compare completion time, failure risk, and useful rewards instead of choosing by the highest label alone.",
        detail: [
          "A repeatable expedition that returns the material you need is more valuable than a maximum-difficulty run that ties up your roster or fails often. Start with the team you can consistently spare from combat and base duties.",
          "Log the destination, assigned Pals, completion time, and rewards for several runs. Drop tables and efficiency claims need samples from the current build before they become a farming recommendation.",
        ],
        actions: [
          "Choose the resource goal before the difficulty tier.",
          "Do not remove essential workers or combat Pals for a marginal reward increase.",
          "Compare several completed runs before calling one expedition optimal.",
        ],
        image: asset("16-expedition-difficulty"),
        alt: "Original fantasy expedition-planning illustration with three island routes, a team marker, rare crystals, an ancient relic, and a risk meter without text",
        caption: "The best expedition is the one your roster can complete consistently for a needed reward.",
        verification: "Official v1.0",
        related: { label: "Prepare for the World Tree", href: "/palworld-1-0/palworld-1-0-world-tree-guide/" },
      },
    ],
  },
];

export const advancedTips = advancedTipChapters.flatMap((chapter) => chapter.tips);

export const advancedTipsGuide: Guide = {
  title: "16 Palworld 1.0 Tips for Progression, Combat & Endgame",
  slug: "guides/palworld-1-0-tips",
  category: "guides",
  categoryLabel: "Advanced Tips",
  description:
    "Use 16 Palworld 1.0 tips to level faster, plan mounts, build stronger Pals, explore new regions, and automate an endgame base.",
  shortAnswer:
    "Reduce waiting before raising rewards, finish five-capture bonuses, build a ground-to-flight travel path, use matchups and recall timing, follow the story into Sunreach and the World Tree, and prove each ancient production loop before scaling it.",
  playerAdvice: [
    "Use the chapter that matches your current bottleneck instead of changing every system at once.",
    "Treat exact values from screenshots or source footage as patch-sensitive unless the current build is shown.",
    "Follow the linked focused guides when a short tip affects a rare resource, permanent base, or endgame build.",
  ],
  lastUpdated: "July 14, 2026",
  readingTime: "14 min read",
  featured: true,
  tags: ["tips", "world settings", "mounts", "combat", "World Tree", "endgame"],
  statusNotice:
    "Palworld 1.0 is live. Official features are separated from practical recommendations and source-image claims that still need current-build testing.",
  updateNotice:
    "The source images contained an outdated twelve-capture recommendation and several unverified fixed values; this guide corrects confirmed conflicts and labels the remaining tests.",
  confirmedChanges: [],
  pendingUpdates: [],
  sourceNotes: [],
  lastVerified: "July 14, 2026",
  sections: [],
  faqs: [
    {
      question: "What is the most important early Palworld 1.0 tip?",
      answer:
        "Remove the bottleneck that repeatedly ends a session. That is usually carry weight, travel, capture supplies, food, or storage rather than raw damage.",
    },
    {
      question: "How many captures are needed for each Capture Bonus in Palworld 1.0?",
      answer:
        "Pocketpair's official Version 1.0 changelog says Capture Bonuses now require five captures instead of twelve.",
    },
    {
      question: "Should every exact value in an infographic be trusted?",
      answer:
        "No. Unlock levels, percentages, reward pools, inheritance rates, and fastest routes should show a current build or be labeled as needing verification.",
    },
    {
      question: "Should players rush Sunreach or the World Tree?",
      answer:
        "Follow the reworked main mission, activate travel points, and establish a safe return loop before committing rare resources to either region.",
    },
  ],
  sourceLinks: [
    {
      label: "Pocketpair official Palworld v1.0 release changelog on Steam",
      href: "https://store.steampowered.com/news/app/1623730/view/1837955055355658",
    },
  ],
  canonical: "/guides/palworld-1-0-tips/",
  visual: {
    src: asset("01-world-settings"),
    alt: "Original Palworld 1.0 tips illustration showing world settings and early progression tools",
    caption: "Original fan-made guide artwork created for this tips collection.",
  },
  relatedLinks: [
    { label: "Palworld 1.0 Beginner Guide", href: "/guides/palworld-1-0-beginner-guide/" },
    { label: "Sunreach Guide", href: "/palworld-1-0/palworld-1-0-sunreach-guide/" },
    { label: "World Tree Guide", href: "/palworld-1-0/palworld-1-0-world-tree-guide/" },
    { label: "Ultimate Pal Builds", href: "/guides/palworld-1-0-ultimate-pal-builds/" },
  ],
};
