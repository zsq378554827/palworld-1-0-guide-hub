# CHANGELOG

更新时间：2026-07-12

## 记录规则

- 每完成一个阶段就追加记录。
- 记录用户能理解的变化，不只写代码文件名。
- 重要决策同步到 `PROJECT_CONTEXT.md`。

## 2026-07-12

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
