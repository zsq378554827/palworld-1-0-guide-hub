# CHANGELOG

更新时间：2026-07-14

## 记录规则

- 每完成一个阶段就追加记录。
- 记录用户能理解的变化，不只写代码文件名。
- 重要决策同步到 `PROJECT_CONTEXT.md`。

## 2026-07-14

### 修复第四个视频只有背景音乐、没有英文配音

- 用户实际播放发现第四条视频没有英文解说。诊断确认英文人声文件本身完整，但制作阶段的最终混音未写入该人声；此前 QA 又错误地反向转写了独立人声轨，因此产生了假通过。
- 重新将 37 段情感英文配音与无中文解说的背景音乐/游戏音效混合，加入人声触发的背景动态闪避；修复版约 -16.1 LUFS，正式 master 与 HLS 均能完整反向识别英文内容。
- 复用已验证画面、只替换音频，保持 2560×1440、60fps 和 269.37 秒；正式版全片解码通过，SHA-256 更新为 `21638c9682d068a325d13a4b9280d919e609947725e381e3e48b7a2fc8ad8273`。
- 重新生成 45 段 1080p60 HLS，并把公开媒体路径改为 `palworld-1-0-ultimate-pal-builds-v2`，防止浏览器继续命中旧的纯背景分片。视频页 URL、SEO、章节和文字攻略均保持不变。
- 将“最终混音、正式 master、网站 HLS 必须分别反向转写”加入项目 SOP 与 `localize-short-video` Skill；文件可解码、播放器时间前进不再被视为英文配音通过的证据。
- commit `9283092` 已部署为 Cloudflare Pages production `a6acbaf0`；production HLS 与本地 HLS 音频哈希一致，完整英语反向转写、未静音播放时间前进和 3:18 章节跳转均通过。
- YouTube 修正版备份 `upMe6PaKgXg` 已设为 Unlisted 并发布英语（美国）SRT；旧无配音备份 `VxtDWL6Cv78` 已改为 Private 隔离，网站继续只使用无需登录的站内 HLS。

### 第四个视频攻略：Ultimate Pal Builds 正式上线

- 新增 4:29 英文视频 `Palworld 1.0 Ultimate Pal Builds: Worker, Mount & Combat` 的独立视频页和独立完整文字攻略页；首页第三条 featured 按用户参考图保持不变，第四条只进入独立视频版块。
- 新增站内缩略图、18 个章节 Clip、单个 VideoObject、Article/FAQPage、唯一 title/meta/H1、canonical、OG、标准 sitemap、video sitemap 和双向内链。
- 按用户本次决定继续使用前三条相同的 Cloudflare Pages 静态 HLS：45 个 6 秒 fMP4 分片、约 164.25 MB、最大 5,552,584 bytes、全片解码通过；R2 本次未启用。
- commit `bf0015c` 已由 GitHub push 自动部署为 Cloudflare Pages production `45e7af6b`。新页面、缩略图、HLS、分片和两个 sitemap 均返回 200 与正确 MIME。
- 线上未登录播放通过：`readyState=4`、269.37 秒、1920×1080、0 iframe，播放时间从 0 前进；3:18 章节跳转后继续播放；390px 无横向溢出和控制台错误。
- 本次 157 MB 媒体部署约 5 分钟后才完成资源传播；下一个视频开始前启用 R2 Standard，并迁移四条现有 HLS，避免继续扩大 Git 仓库和 Pages 部署时间。

## 2026-07-13

### 第一周技术 SEO 改造

- 固定 GSC 与 Cloudflare 近 7 天数据基线，并保存 GSC 查询、页面、国家、设备等原始 CSV；基线口径区分生产域名和预览部署流量。
- 完成 sitemap 全链路诊断：GET、HEAD、Googlebot、XML、robots、30 个 URL/canonical、IPv4/IPv6 均通过；标准 sitemap 增加 lastmod、XML 转义和缓存，并新增包含 3 个视频的 video sitemap。
- 将 Header 伪搜索升级为真实静态搜索，支持 guides/videos 全量索引、`/guides/?q=`、结果数、无结果、清空、查询回填和键盘提交。
- 完成 31 个正式页面 title/meta 重写：title 全部不超过 60 字符、description 全部不超过 160 字符，二者均无重复。
- 首页新增 WebSite/SearchAction；Guides、Server、Videos、Palworld、Base Building 新增 CollectionPage/ItemList。
- 三个视频页把现有章节映射为 27 个 Clip；`?t=` URL 能真实定位播放器时间，并新增章节 URL 同步。
- 视频托管方案确定为 R2 Standard + 自有媒体子域名 + Cloudflare Cache；第四条视频前执行，当前不创建付费资源，迁移保留 7 天双源观察和 Pages 回滚。
- `npm run build` 通过；标准/视频 sitemap 均通过 XML 校验，内部链接无缺失，7 组搜索和 130 秒视频 Clip 真实浏览器验收通过。
- commit `b359d4f` 已部署为 Cloudflare Pages production `ce69d834`；线上 30 个 URL、结构化数据、搜索、视频章节和两个 sitemap 均通过。GSC 已接受两个 sitemap 的重新提交，但即时状态仍待 Google 处理；单 URL 索引请求因当日配额已满延期。

### 第三个视频攻略：Level 8 Worker Pals & Locations

- 新增 3:12 英文视频 `Palworld 1.0 Level 8 Worker Pals & Locations`，覆盖 Solenne、Aegidron、Dandilord、Shaolong、Renjishi、Celesdir Noct、Bastigor、Orserk、Jetragon、Knocklem 和 Panthalus。
- 明确修正源片跳号、地图/口播坐标轻微不一致、Knocklem 仅为 Lv.7 Transporting、Panthalus 无 Work Suitability 等易误导点。
- 新增 1080p60 H.264/AAC HLS：32 个 6 秒 fMP4 分片，总计约 152 MB，最大分片 5,538,820 bytes，全片解码通过。
- 新增独立视频页和完整英文文字攻略页；视频页拥有 12 个章节、一个 `VideoObject`、canonical、OG 和验证披露，文字页拥有 Article/FAQPage、十节正文、FAQ、内链并保持 0 player/0 VideoObject。
- YouTube 备份 `_1daH8dpyWw` 已上传并在内容列表明确显示 `不公开列出`；账号功能验证未完成，因此 YouTube 自定义缩略图不可用，站内缩略图不受影响。
- 首页按用户参考图恢复左侧六任务 + 右侧主视频布局；新视频进入右上主推荐位，三条真实视频集中到紧凑的独立视频版块，工具和书面攻略继续保持独立区块。
- 1488×1057 与 390×844 视觉/响应式 QA 通过；桌面与手机均无横向溢出，详细对照记录见 `design-qa.md`。
- `npm run build` 通过并生成 31 个页面；新视频页 HLS `readyState=4`、191.48 秒、1920×1080、0 iframe，2:10 章节跳转到 130 秒成功。
- commit `85a028b` 已由 GitHub push 自动部署为 Cloudflare Pages production `bd06e946`；首页、视频索引、视频页、文字页、HLS 和 sitemap 均返回 200，视频页恰好 1 个 VideoObject，文字页为 Article + FAQPage 且 0 VideoObject。
- 线上实播验收通过：视频 `readyState=4`、191.48 秒、1920×1080、0 iframe；Orserk 2:10 章节跳到 130 秒并继续播放，时间在 2.5 秒内增加约 2.53 秒；390px 首页和文字页无横向溢出。

## 2026-07-12

### 视频与文字攻略分区

- 新增独立 `/videos/` 视频攻略版块，将现有两条视频集中展示；主导航 Videos 改为独立入口。
- 新增两个独立视频详情页，保留站内 HLS 播放、章节、验证说明、AI 配音披露、独立 canonical/OG 和单个 `VideoObject`。
- 原有两个 `/guides/` URL 保留为完整文字攻略，移除播放器和视频结构化数据；视频页与文字页使用描述性链接双向跳转。
- 将视频元数据从 `src/data/guides.ts` 拆分到 `src/data/videos.ts`，sitemap 同时收录视频索引、视频详情和文字攻略 URL。
- 首页将视频版块和最新文字攻略版块分开；两条真实视频均进入首页和 `/videos/`，未生成虚假卡片或计数。
- `npm run build` 通过并生成 29 个页面；两条 HLS 实播、章节跳转、390px/1280px、0 横向溢出、文字页 0 播放器/0 VideoObject 均通过。
- commit `b2d82ad` 已由 GitHub push 自动部署为 Cloudflare Pages production `90ed9aa2`；线上六个相关页面/端点与两个 HLS manifest 均返回 200。
- 线上未登录实播通过：早期路线 0:53 章节后播放到 56.36 秒，Worker Pal 2:06 章节后播放到 129.51 秒；均为 1920×1080、`readyState=4`、0 iframe、0 控制台错误，390px 无横向溢出。

### 第二个视频攻略：Ultimate Worker Pal

- 新增 `Palworld 1.0 Ultimate Worker Pal Build Guide`，覆盖六项工作速度因素、Depresso、Yakumo 被动转移、Pal Surgery Table、Souls、四星、Labor Research、Applied Technique books、Transporting、Nocturnal 和 SAN 支持。
- 新增 3:35 英文 4K 本地化成片对应的站内 1080p60 HLS：36 个 6 秒 fMP4 分片，总计约 127 MB，最大分片约 5.46 MB；站内不使用 YouTube iframe。
- 新页面加入独立 title/meta/H1、八节正文、七个章节、FAQ、内链、canonical、站内 OG 缩略图、sitemap 和单个 `VideoObject`。
- 将测试信息标题改为按验证状态显示：独立复测页面显示 `Tested on the current release`，仅源视频展示的页面显示 `Verification details`。
- 页面明确披露 AI 英语配音和授权本地化，允许保留非关键游戏 UI 中文，但操作关键内容均由英文配音、字幕或调用卡覆盖。
- `npm run build` 通过，页面总数由 25 增至 26；本地未登录播放、126 秒章节跳转、0 iframe、390px 无横向溢出和单个 VideoObject 均通过。
- YouTube 备份 `ye8-_T6UVcY` 上传和版权检查完成，编辑阶段保持 Private；公开站点不展示其链接。
- commit `67281ab` 已推送到 GitHub `main` 并触发 Cloudflare Pages production deployment `c68c4a53`。
- 线上页面、HLS manifest、首个分片、canonical、sitemap 和单个 VideoObject 验收通过；未登录视频实际播放到 4.78 秒，126 秒章节跳转成功，0 iframe、0 控制台错误，390px 无横向溢出。

### 首页攻略站重构

- 按已确认的合并版设计重构首页信息架构，移除大面积宣传型 Hero 和重复文章卡墙。
- 首屏改为 6 个玩家任务入口与 1 个真实视频主卡，优先回答“现在要做什么”和“从哪里开始”。
- 新增分类导航、最新视频与攻略更新、3 个可用清单/设置框架、4 组核心书面攻略入口。
- 首页只使用现有正式页面、真实 4:33 视频和原创 WebP 素材；未伪造视频数量、时长、工具功能或未经验证的攻略结论。
- 主导航改为 Home、Videos、Guides、Tools、Server、FAQ；Videos/Tools 使用带吸顶导航偏移的首页锚点。
- 1440×1024 与 390×844 视觉和交互 QA 通过；无页面级横向溢出、broken link、缺失图片或浏览器控制台错误。
- `npm run build` 通过，Astro 继续生成 25 个站点页面；视觉对照与修复记录保存在 `design-qa.md`。

### 首个视频攻略

- 新增 `Palworld 1.0 Fast Early-Game Start Route` 完整英文图文攻略和 4:33 英文配音视频。
- 视频托管于 YouTube，但永久设置为 Unlisted；保留站内嵌入，不以 YouTube 公开流量为目标。
- 新增点击后加载的 `youtube-nocookie.com` 播放器、站内自有缩略图和 8 个章节跳转按钮。
- 新增当前 Palworld 1.0 独立复测信息，明确源视频版本标记与当前版本验证不是同一件事。
- 首页新增单个真实 Featured video guide 卡片；旧文章和导航结构保持不变。
- 新视频页加入独立 canonical、Open Graph、sitemap 和单个 `VideoObject` JSON-LD。

### 验证

- `npm run build` 通过，Astro 页面总数由 24 增至 25。
- 新视频页在 390px 和 1280px 均无横向溢出；点击前无 iframe，点击后仅创建一个隐私增强 YouTube iframe，刷新后恢复无 iframe。
- 首页在 390px 和 1280px 均无横向溢出，仅显示一个真实视频卡；旧 Beginner Guide 未注入视频播放器或 `VideoObject`。
- 构建产物中的新 URL、canonical、OG 图、sitemap 和视频结构化数据检查通过。
- commit `00232a7` 已推送到 GitHub `main`，Cloudflare Pages 自动部署后线上新攻略返回 200。
- 线上静态验收通过：初始页面 0 个 iframe，点击后创建 1 个 `youtube-nocookie.com` iframe；VideoObject 1 个，sitemap 条目 1 个。
- Playwright 内的 YouTube 播放器触发登录确认非机器人提示；已记录为 YouTube 自动化环境限制，不把视频改为 Public。

### 无需登录播放修复

- 真实访客截图证实 YouTube 嵌入会要求登录，修正此前“仅自动化环境限制”的判断。
- 将站内播放器从 YouTube iframe 改为站点自托管 HLS；YouTube Unlisted 继续保留为备份。
- 新增 1080p、60fps、H.264/AAC 网页播放版：46 个 6 秒 fMP4 分片，总计约 200 MB，最大单个分片小于 5.5 MB。
- 新播放器使用原生 `<video>` 控件；Safari 原生 HLS，其他现代浏览器使用 `hls.js`，访客不需要 YouTube 或 Google 登录。
- 本地未登录验证通过：时长 272.68 秒、画面 1920×1080、播放时间实际增加、0 iframe、0:53 章节跳转成功、390px 无横向溢出。
- commit `b1c0cde` 已由 Cloudflare Pages 自动部署，production deployment short id `7c81ca68`。
- 线上未登录播放通过：`readyState=4`，播放时间增加到 6.9 秒，0 iframe、0 控制台错误；0:53 章节跳转和 390px 手机端检查通过。
- 从公开攻略页移除 YouTube 直链，Unlisted 视频只作为后台备份。

## 2026-07-11

### 发布后内容与视觉优化

- 全站清除 `coming soon`、`before launch`、`wait for 1.0 notes` 等发布前措辞，统一为正式发布和官方 changelog 已上线状态。
- 将 `/faq/` 改为完整 FAQ 主页面；旧 FAQ 文章 canonical 到 `/faq/` 并从 sitemap 排除，避免重复收录。
- 重写 Base Building 页面，加入 Aquatic Construction、Work Suitability level 10、wave-based raids、无需弹药的防御设施和旧基地检查清单。
- Patch Notes、Sunreach、World Tree、New Pals、Server Setup、Best Server Settings 加入可操作表格；Returning、Patch Notes、Server Setup 加强定向内链。
- 新增两张生成式原创概念插画和五张代码生成 WebP 信息图；无官方 Logo、主视觉、截图或角色素材。
- 24 个页面 title/meta 唯一，23 个正式 canonical URL 进入 sitemap，robots 指向线上 sitemap，内部链接检查无 broken link。
- `npm run build` 通过；Patch Notes 页面在 390px 和 1280px 下无页面级横向溢出。

### 剩余旧页面深化

- 将 Beginner Guide 扩展为首小时路线、基地清单、Pal 管理、技术资源、探索习惯和 Solo/Multiplayer 决策攻略。
- 将 Multiplayer Guide 扩展为托管方式选择、Version 1.0 官方多人变化、私服 smoke test、故障诊断、长期群组规则和容量验证边界。
- 将 Performance Settings 扩展为症状诊断、可重复 benchmark、设置调整顺序、客户端/服务器问题区分及崩溃排查。
- Guides、Server、About 入口页加入正式发布后文案、推荐阅读路径、内部链接和视觉内容。
- 新增 Beginner 原创概念插画、Multiplayer setup map 和 Performance troubleshooting 信息图；均为 WebP 且包含 alt text。

## 2026-07-10

### 官方来源核查

- 确认 Pocketpair 已在 Steam 官方公告发布 `Palworld v1.0 - Official Release Changelog`。
- 确认官方版本标识为 `v1.0`，公告发布时间为 2026-07-10 03:09 UTC。
- 核对 Pocketpair 官方游戏新闻页、Steam 官方公告、Steam 商店正式发布状态和 Palworld 1.0 官方 launch trailer。

### 修改

- 首页、1.0 Hub 和文章状态提示由 pre-release 切换为 release/live。
- 更新 Release、Patch Notes、Save、Server Setup、Best Server Settings、FAQ 现有页面，只写入官方确认事实。
- 保留最佳数值、路线、Pal 排名、实际性能、服务器负载和平台稳定性为待玩家实测内容。
- 未新增页面、功能、设计或广告。

### 验证

- `npm run build` 通过，Astro 仍构建 18 个页面。
- 构建产物未检出旧的 patch-notes-unavailable 或 pre-release 状态文案。

### 第二轮内容深化

- 将 `Palworld 1.0 Patch Notes Explained` 扩展为完整核心页，覆盖 Sunreach、World Tree、72 个新增 Pal、剧情、战斗、装备、基地、Raid、多人、UI、优化、Bug、MOD 和新老玩家清单。
- 深化 New Save、Returning Player、Server Setup、Best Server Settings、FAQ 五个决策型页面。
- 六个重点页均更新正式发布后的独立 meta description、Source note、内部相关链接和 July 10, 2026 更新时间。
- 所有需要实际游玩、硬件或服务器负载验证的结论统一标注 `Needs in-game verification.`。
- 未新增页面、复杂功能、设计改动、广告或未经授权素材。

### 第二轮验证

- `npm run build` 通过，继续构建 18 个页面。
- 静态检查 21 个内部链接，未发现 broken link。
- 六个重点页 title/meta 无重复，canonical、Source note 和非官方声明均正常。
- Playwright 390px 手机端与 1280px 桌面端检查通过，六个重点页均无页面级横向溢出。

### 第三轮新增页面

- 新增 `Palworld 1.0 Sunreach Guide`。
- 新增 `Palworld 1.0 World Tree Guide`。
- 新增 `Palworld 1.0 New Pals Overview`。
- 新增 `Palworld 1.0 MODs Warning and Compatibility Guide`。
- 新增 `Palworld 1.0 Server Owner Checklist`。
- 新增 `Palworld 1.0 First Hour Checklist`。
- 所有新页复用现有文章模板、现有自制视觉资产和动态 sitemap，不新增设计、复杂功能、广告或未经授权素材。
- Best Pals、Best Weapons、Best Base Locations 继续暂缓，避免把实测型结论写成官方事实。

### 第三轮验证

- `npm run build` 通过，页面总数由 18 个增加到 24 个。
- 24 个页面 title/meta 均唯一；静态检查 27 个内部链接，未发现 broken link。
- 6 个新 URL 均进入 sitemap，并包含正确 canonical、July 10, 2026、Source note、内部相关链接和非官方声明。
- Playwright 390px 手机端与 1280px 桌面端检查通过，6 个新页面均无页面级横向溢出；Sunreach 首屏完成双 viewport 目视检查。

## 2026-07-08

### 新增

- 接入 Cloudflare Web Analytics，全站页面加载 Cloudflare beacon。
- 新增 Google Search Console HTML 验证文件 `google188a703d2dd73306.html`。
- 新增文章更新预留字段：`confirmedChanges`、`pendingUpdates`、`sourceNotes`、`lastVerified`。
- 新增文章页 `Update Notice` 区块，用于 1.0 正式 patch notes 发布前后的更新提示。
- 新增内部更新日清单 `UPDATE_DAY_CHECKLIST.md`，记录官方来源检查、优先更新页面、不能猜测的内容、构建部署和 Search Console 后续步骤。

### 修改

- 10 篇现有文章均挂载 7 月 10 日 patch notes 更新准备字段。
- 保持 `Palworld 1.0 New Pals List` 和 `Palworld 1.0 World Tree Guide` 不新增公开页面，仅在内部清单中标记为后续候选页面。

### 验证

- Patch notes 更新准备完成后已运行 `npm run build`，构建通过，仍输出 18 个页面。
- 线上 Patch Notes 文章已确认显示 Update Notice 和 `lastVerified`。

### 部署

- GitHub `main` 已推送 commit `aee749d`。
- Cloudflare Pages 自动部署成功，production deployment short id `6aeb7ca0`。
- Patch notes 更新准备已推送 commit `49001c5`。
- Cloudflare Pages 已自动部署 commit `49001c5`，production deployment short id `8d4703b3`。
- 线上验证文件 `https://palworld-1-0-guide-hub.pages.dev/google188a703d2dd73306.html` 返回正确内容。
- 线上首页已包含 Cloudflare Web Analytics 脚本。

### Search Console

- Google Search Console URL-prefix 资源 `https://palworld-1-0-guide-hub.pages.dev/` 已通过 HTML 文件验证。
- 已提交 `https://palworld-1-0-guide-hub.pages.dev/sitemap.xml`。
- GSC 当前即时状态显示“无法抓取”；站点端复查显示 sitemap 对 Googlebot UA 返回 200、`Content-Type: application/xml`，robots 正确声明 sitemap，需稍后复查 GSC 后台状态。
- 已重新提交 `sitemap.xml`，GSC 返回“已成功提交站点地图”；提交后表格即时状态仍显示“无法抓取”，继续等待 Google 后台重新处理。

## 2026-07-07

### 新增

- 初始化 Palworld 1.0 Guide Hub Astro 静态站。
- 新增首页、1.0 专题页、Guides、Server、Base Building、FAQ、About、Disclaimer。
- 新增 10 篇 Palworld 1.0 文章初版。
- 新增全站 SEO Layout、Open Graph、canonical、robots 和 sitemap。
- 新增非官方声明 Footer。
- 新增本地生成的非官方 hero / OG 图片脚本。
- 新增 `.gitignore`，排除依赖、构建产物和本地检查截图。
- 新增文章页 `Short answer`、新玩家/回归玩家实用建议和 FAQ 模块。
- 新增 `.env.example`，声明 Cloudflare Pages 构建变量 `PUBLIC_SITE_URL=`.
- Cloudflare Pages 项目 `palworld-1-0-guide-hub` 已创建并直接部署上线。

### 修改

- 首页“All MVP articles”展示全部 10 篇文章。
- 文章卡片改为整卡可点击。
- FAQ 静态页 SEO title 改为 `Palworld 1.0 Questions and Answers`，避免和 FAQ 文章 title 重复。
- 统一文章 patch notes 提示为 `This guide will be updated when the full Palworld 1.0 patch notes are available.`
- Astro 配置显式设置 `output: "static"`，便于 Cloudflare Pages 静态部署。
- `.gitignore` 补充 `.env`、本地 env 文件和 `.wrangler/`。
- `package.json` 的 `build` 脚本改为先生成自制 PNG 资产，再执行 Astro 构建，避免远端仓库必须提交生成图片。

### 修复

- 修正 Astro endpoint 文件语法，确保 `robots.txt` 和 `sitemap.xml` 可构建。

### 部署

- Production: `https://palworld-1-0-guide-hub.pages.dev/`
- Preview deployment: `https://123cf8c8.palworld-1-0-guide-hub.pages.dev/`
- GitHub remote: `git@github.com:zsq378554827/palworld-1-0-guide-hub.git`
- GitHub `main` 已成功 push。
- Cloudflare Pages production/preview 已设置普通文本变量 `PUBLIC_SITE_URL=https://palworld-1-0-guide-hub.pages.dev`。
- 已删除旧 Direct Upload Pages 项目，并重建同名 GitHub 集成 Pages 项目。
- Cloudflare Pages 当前显示 `Git Provider: Yes`，source repo 为 `zsq378554827/palworld-1-0-guide-hub`。
- Git 集成项目首次 production deployment 成功，deployment short id `930e27b2`。
- 真实文档变更 commit `36838ad` 已 push，但 Cloudflare 未自动生成对应 deployment；自动 GitHub push 部署仍需通过 Dashboard 登录后修复 webhook。
- GitHub App 已授权 `zsq378554827/palworld-1-0-guide-hub` 仓库。
- GitHub push 自动部署已验证成功：commit `4028de7` 自动触发 Cloudflare Pages production deployment，trigger 为 `github:push`，deployment short id `266a3200`。

### 文档

- 初始化项目上下文、当前状态、TODO、技术文档、开发记录、项目 SOP。

### 下一步

- Palworld 1.0 正式发布后更新文章事实。
- 后续如绑定自定义域名，同步更新 `PUBLIC_SITE_URL`。
