# CURRENT_STATE

更新时间：2026-07-14

## Project

项目名称：Palworld 1.0 Guide Hub

一句话说明：面向英文玩家的 Palworld Version 1.0 专题攻略静态站 MVP，先做专题攻略，不做完整 Wiki。

## Live URL

- Production: `https://palworld-1-0-guide-hub.pages.dev/`
- Production deployments are tracked in Cloudflare Pages Dashboard.
- GitHub: `https://github.com/zsq378554827/palworld-1-0-guide-hub`（`main` 已 push，当前远端为 SSH deploy key）
- Local app repo: `/Users/zousunquan/Desktop/Codex/projects/Project_02_palworld_1_0_guide_hub`
- Project docs: `/Users/zousunquan/Desktop/Codex/projects/Project_02_palworld_1_0_guide_hub`

## Current Stage

- MVP 首版已通过 Cloudflare Pages 上线，GitHub `main` 已推送。
- 旧的 Direct Upload Pages 项目已删除，并已重建为同名 GitHub 集成 Pages 项目；Cloudflare 显示 `Git Provider: Yes`。
- GitHub App 已授权 `zsq378554827/palworld-1-0-guide-hub`，Cloudflare Pages GitHub push 自动部署已验证成功。
- 第三条 Level 8 Worker Pals 视频、独立文字攻略、站内 HLS 和参考图首页布局已完成，并已通过 Cloudflare production 总验收。
- 第四条 Ultimate Pal Builds 已按前三条相同的 Cloudflare Pages 静态 HLS 方式上线并通过生产总验收；R2 本次未启用，下一个视频发布前再启用并迁移四条现有 HLS。
- 2026-07-14 用户复核发现第四条最初上线版本只有背景音乐。已确认根因是最终混音没有写入已生成的英文人声，而旧 QA 误把独立人声轨的反向转写当作最终混音验证；修复版已改用版本化 HLS 路径 `palworld-1-0-ultimate-pal-builds-v2` 防止旧分片缓存。
- 2026-07-14 已完成截图攻略的 SEO 化图文落地：5 张截图整理为一篇包含 5 章、16 条技巧和 16 张对应配图的独立支柱页 `/guides/palworld-1-0-tips/`；首页视频下方仅保留 1 张紧凑图文攻略入口卡，便于后续继续增加同类文章。发布前本地构建与响应式 QA 已通过。

## Completed

- 项目文档已初始化。
- Astro 静态站结构已创建。
- 首版页面和文章数据已写入。
- 已完成 8 个核心页面和 10 篇文章。
- `npm run build` 通过，生成 18 个 HTML 页面。
- SEO 抽查通过：18 个 HTML 页面核心 SEO 字段无缺失，10 篇文章均有 Last Updated。
- Playwright 首页视觉检查通过：390px 手机和 1280px 桌面 viewport 均无页面级横向溢出。
- 2026-07-13 第三条视频本地交付完成：4K 英文成片对应 1080p60 HLS，32 分片、全片解码通过；YouTube `_1daH8dpyWw` 明确为 Unlisted。
- 新增独立视频页和 Level 8 Worker Pals 完整文字攻略页；31 页面 build 通过，视频页 1 个 VideoObject，文字页 0 VideoObject + Article/FAQPage，两个 URL 均进入 sitemap。
- 首页按 `/Users/zousunquan/Downloads/已生成图像 1 (1).png` 完成 1488px 同尺寸对照：新视频位于右上主推荐位，三条视频集中在独立版块，工具和书面攻略保持独立；390px/1488px 无横向溢出。
- commit `85a028b` 已由 GitHub push 自动部署为 Cloudflare Pages production `bd06e946`；生产域名上的首页、视频索引、独立视频页、独立文字攻略页、HLS 和 sitemap 均返回 200，HLS MIME 正确。
- 线上 Chrome 实播通过：`readyState=4`、191.48 秒、1920×1080、0 iframe；2:10 Orserk 章节精确跳到 130 秒并继续播放，时间在 2.5 秒观察窗内前进约 2.53 秒；390px 首页和文字页无横向溢出，文字页保持 0 player/0 VideoObject。
- 2026-07-13 第四条视频本地站点交付完成：新增 `/videos/palworld-1-0-ultimate-pal-builds/` 与 `/guides/palworld-1-0-ultimate-pal-builds/`，保持首页第三条 featured 不变，第四条只进入独立视频版块。
- 第四条 1080p60 HLS 在 Git 仓库外生成：45 个分片、约 164.25 MB、最大 5,552,584 bytes、全片解码通过；本地 `npm run build` 生成 33 页，18 个 Clip、VideoObject/Article/FAQPage、canonical、OG、两个 sitemap 和内链均通过。
- 第四条本地未登录实播通过：`readyState=4`、269.37 秒、1920×1080、0 iframe、播放时间持续增加；3:18 章节跳到 198 秒后继续播放，390px 无横向溢出。
- 2026-07-14 用户决定本次继续沿用 Pages 静态 HLS；47 个第四条媒体文件与仓库外原始 HLS 的 SHA-256 全部一致后加入 `public/media/`，R2 Function 与 `wrangler.toml` 未提交，不会拦截静态 `/media/...`。
- commit `bf0015c` 已由 GitHub push 自动部署为 Cloudflare Pages production `45e7af6b`；新视频页、独立文字页、缩略图、HLS、init、分片和两个 sitemap 均返回 200 与正确 MIME。
- 第四条线上未登录实播通过：269.37 秒、1920×1080、`readyState=4`、时间从 0 前进、0 iframe；3:18 章节跳转后继续播放，390px 无横向溢出、0 控制台错误；文字页保持 0 player/0 VideoObject。
- 第四条配音修复版重新混入 37 段时间对齐英文人声，背景音乐/游戏音效在人声期间动态闪避；正式版约 -16.1 LUFS，完整反向转写覆盖 0:00–4:27。修复后 master 全片解码通过，2560×1440/60fps/HEVC/AAC/269.37 秒，SHA-256 `21638c9682d068a325d13a4b9280d919e609947725e381e3e48b7a2fc8ad8273`。
- 修复版 1080p60 HLS 为 45 个分片、164,622,669 bytes、最大分片 5,562,101 bytes；HLS 自身完整反向转写识别为 English（概率 1.0），不再以独立人声轨代替网站交付物验收。本地未登录浏览器确认未静音、音量 1、`readyState=4`、时间前进，3:18 章节跳转后继续播放。
- 修复随 commit `9283092` 部署为 Cloudflare Pages production `a6acbaf0`。生产 HLS 与本地 HLS 提取音频的 SHA-256 完全一致，production HLS 完整反向转写识别为 English（概率 1.0，覆盖 0:00–4:27）；线上未登录播放器未静音、音量 1、时间正常前进，3:18 章节跳转后继续播放。
- 修正版 YouTube 后台备份 `upMe6PaKgXg` 已复核为 Unlisted，英语（美国）SRT 已发布；旧的无配音备份 `VxtDWL6Cv78` 已改为 Private 隔离。公开网站不使用或展示 YouTube 备份链接。
- 本次约 157 MB 媒体 push 后，Cloudflare 新部署记录先出现但资源约 5 分钟后才可用；不能在部署记录刚出现时把缺失资源回退页误判为上线成功。
- 新增 16 张原创 1200×675 WebP 攻略配图，逐条对应世界设置、捕获奖励、属性、坐骑、地图标记、元素联动、繁育、终局区域、建造自动化与远征等内容；图片不含第三方 Logo、水印或文字，并为页面提供描述性 alt text。
- 新增 `16 Palworld 1.0 Tips for Progression, Combat & Endgame` 支柱页：包含 Short answer、5 个 H2 章节、16 个 H3 技巧、FAQ、官方来源、验证状态、上下文内链、Article 与 BreadcrumbList JSON-LD，并进入 Guides 搜索和 sitemap。
- 已把源图中已过时的“前 12 次捕获奖励”修正为官方 1.0 的前 5 次；固定等级、百分比、奖励池和 100% 词条继承等未独立复测结论均显式标为 `Needs current-build test`，不作为官方事实发布。
- 新图文内容本地 `npm run build` 通过并生成 34 个页面；独立文章的 16/16 图片存在且唯一，title 58 字符、description 126 字符、canonical、结构化数据与 sitemap 均通过静态检查。首页只输出 1 张图文攻略入口卡、0 张技巧明细卡；Playwright 在 390/768/1440 三档验证首页和支柱页均无横向溢出、缺图或 broken image，搜索结果和章节锚点可用；本地仅出现 Cloudflare Insights 对 localhost 的预期 CORS 报错。
- 2026-07-07 质量复查完成：内部链接 HTTP 检查 22 项通过；18 个页面 title/description 无重复；10 篇文章均包含 Short answer、实用建议、FAQ、指定 patch notes 更新提示、Last Updated 和非官方声明。
- 390px 手机、768px 平板、1280px 桌面共 54 次页面 viewport 检查通过，无横向溢出。
- 首页文章卡已改为整卡可点击，首页展示全部 10 篇 MVP 文章。
- 2026-07-07 Cloudflare Pages 部署准备完成：`npm install` 和 `npm run build` 通过；`dist/` 输出 18 个页面；`.env.example` 已加入 `PUBLIC_SITE_URL=`；Astro 配置显式 `output: "static"`；产物无 localhost、本机绝对路径或官方素材引用。
- 2026-07-07 Cloudflare Pages 直接部署完成：项目 `palworld-1-0-guide-hub`，正式域名 `https://palworld-1-0-guide-hub.pages.dev/`，预览部署 `https://123cf8c8.palworld-1-0-guide-hub.pages.dev/`。
- 线上检查完成：首页 200；robots/sitemap 存在；canonical、Open Graph URL、Open Graph image 均指向 `https://palworld-1-0-guide-hub.pages.dev`。
- 2026-07-07 GitHub push 完成：`main` 已推送到 `git@github.com:zsq378554827/palworld-1-0-guide-hub.git`。
- 2026-07-07 Cloudflare Pages `PUBLIC_SITE_URL` 已通过 Pages Project API 设置为普通文本变量，production 和 preview 均为 `https://palworld-1-0-guide-hub.pages.dev`。
- 2026-07-07 已删除旧 Direct Upload 项目并重建同名 GitHub source Pages 项目；Cloudflare 项目列表显示 `Git Provider: Yes`。
- 2026-07-07 重建项目首次 production deployment 成功，deployment short id `930e27b2`。
- 2026-07-07 GitHub App 已加入 `zsq378554827/palworld-1-0-guide-hub` 仓库授权。
- 2026-07-07 GitHub push 自动部署验证成功：commit `4028de7` 自动触发 Cloudflare Pages production deployment，trigger 为 `github:push`，deployment short id `266a3200`。
- 2026-07-08 Cloudflare Web Analytics 已接入全站 Layout，并随 commit `aee749d` 部署到 Cloudflare Pages，production deployment short id `6aeb7ca0`。
- 2026-07-08 Google Search Console URL-prefix 资源 `https://palworld-1-0-guide-hub.pages.dev/` 已通过 HTML 文件验证。
- 2026-07-08 Google Search Console 已提交 `https://palworld-1-0-guide-hub.pages.dev/sitemap.xml`；GSC 当前即时状态显示“无法抓取”，但终端检查该 URL 对 Googlebot UA 返回 200、`Content-Type: application/xml`，且 robots 正确声明 sitemap，需稍后复查 GSC 后台状态。
- 2026-07-08 已完成 7 月 10 日 Palworld 1.0 patch notes 更新准备：`guides.ts` 为每篇文章预留 `confirmedChanges`、`pendingUpdates`、`sourceNotes`、`lastVerified` 字段；文章模板新增 Update Notice；新增内部 `UPDATE_DAY_CHECKLIST.md`；`npm run build` 通过，仍输出 18 个页面。
- 2026-07-08 patch notes 更新准备已推送 commit `49001c5` 并由 Cloudflare Pages 自动部署，production deployment short id `8d4703b3`；线上 Patch Notes 文章已确认显示 Update Notice 和 `lastVerified`。
- 2026-07-08 已在 Google Search Console 重新提交 `sitemap.xml`，GSC 返回“已成功提交站点地图”；提交后表格即时状态仍显示“无法抓取”，站点端 Googlebot 检查继续返回 200 和 `application/xml`，需要稍后复查 Google 后台处理结果。
- 2026-07-10 已确认 Pocketpair 在 Steam 官方公告发布 `Palworld v1.0 - Official Release Changelog`：`https://store.steampowered.com/news/app/1623730/view/1837955055355658`；版本标识为 `v1.0`，发布时间为 2026-07-10 03:09 UTC（北京时间 11:09，日本时间 12:09）。
- 2026-07-10 已将首页、1.0 Hub、Release、Patch Notes、Save、Server Setup、Best Server Settings、FAQ 从预发布状态切换为 release/live 状态；只写入官方确认事实，最佳数值、路线、排名、实际性能和平台稳定性继续等待玩家实测。
- 2026-07-10 `npm run build` 通过，Astro 仍报告构建 18 个页面；构建产物未检出旧的 “patch notes unavailable” 或 pre-release 状态文案。
- 2026-07-10 第二轮内容深化完成：基于 Pocketpair 官方 Steam v1.0 changelog，扩展 Patch Notes、New Save、Returning Player、Server Setup、Best Server Settings、FAQ 六个重点英文页面；新增完整分节、发布日 FAQ、Source note、内部相关链接，并将实测型内容统一标注 `Needs in-game verification.`。
- 2026-07-10 第二轮 QA 通过：`npm run build` 继续生成 18 个页面；静态检查 21 个内部链接无缺失；六个重点页 title/meta 独立、canonical 正确、Last Updated 均为 July 10, 2026；390px 与 1280px Playwright 检查均无横向溢出。
- 2026-07-10 第三轮新增 6 篇安全范围页面：Sunreach Guide、World Tree Guide、New Pals Overview、MODs Warning and Compatibility Guide、Server Owner Checklist、First Hour Checklist；文章总数由 10 篇增至 16 篇，未新增组件、设计、广告或图片。
- 2026-07-10 第三轮初步 QA 通过：`npm run build` 构建页面由 18 个增至 24 个；24 个 title/meta 均唯一；27 个内部链接无缺失；6 个新 URL 均进入 sitemap，并包含 canonical、July 10、Source note、内部相关链接、非官方声明和实测边界。
- 2026-07-10 第三轮 Playwright QA 通过：6 个新页面在 390px 手机端和 1280px 桌面端均无页面级横向溢出；H1、更新时间、Source note 和 `Needs in-game verification.` 均正常，Sunreach 首屏已完成手机/桌面目视检查。
- 2026-07-12 新增首个完整视频攻略 `Palworld 1.0 Fast Early-Game Start Route`：YouTube 视频固定为 Unlisted，仅用于攻略站嵌入；同页提供完整英文图文攻略、章节跳转和当前 1.0 版本复测说明。
- 视频采用站内缩略图和点击后加载的 `youtube-nocookie.com` iframe，访问页面时不会立即联系 YouTube；允许站内嵌入但不把视频设为 YouTube 公开内容。
- 新页面加入 `VideoObject` JSON-LD、独立 canonical/OG 图和 sitemap；首页新增一个真实 Featured video guide 卡片，没有制造虚假视频数量。
- 本地 `npm run build` 通过，页面总数由 24 增至 25；390px/1280px 首页与视频页无横向溢出，旧攻略未注入视频播放器或视频结构化数据。
- 2026-07-12 commit `00232a7` 已推送到 GitHub `main` 并触发 Cloudflare Pages 自动部署；线上新攻略返回 200，视频 ID、canonical、站内缩略图、单个 `VideoObject` 和 sitemap 条目均验证通过。
- 线上点击播放器会创建一个 `youtube-nocookie.com` iframe；Playwright 自动化环境被 YouTube 要求登录确认非机器人，此为 YouTube 自动化访问验证，不是视频被设为私享或禁止嵌入。
- 2026-07-12 真实访客截图确认 YouTube 嵌入同样要求登录，推翻“仅自动化环境限制”的判断；站内播放器已改为自托管 HLS，不再依赖 YouTube。
- 新网页播放版为 1920×1080、60fps、H.264/AAC、约 8 Mbps、46 个 6 秒 fMP4 分片，总计约 200 MB；全部分片小于 5.5 MB，全片解码通过。
- 未登录本地浏览器验证：视频时长 272.68 秒、实际画面 1920×1080、播放时间持续增加、0 个 iframe；0:53 章节跳转成功，390px 手机端无横向溢出。
- commit `b1c0cde` 已部署为 Cloudflare Pages production deployment `7c81ca68`；线上未登录浏览器验证 `readyState=4`、实际播放到 6.9 秒、0 iframe、0 控制台错误，0:53 章节跳转后继续播放，390px 无横向溢出。
- 攻略页不再公开展示 YouTube 直链；Unlisted 视频只保留为后台备份。
- 2026-07-12 首页按确认的攻略站方案完成重构：首屏改为 6 个任务入口 + 1 个真实视频主卡，下方加入分类导航、最新攻略更新、3 个可用清单/框架和按玩家类型分组的核心攻略。
- 首页未伪造视频、时长或工具功能；当前只突出已上线并独立复测的 `Fast Early-Game Start Route`，其余位置使用现有正式攻略和原创 WebP 视觉。
- 首页 1440×1024 与 390×844 视觉复核通过；Videos/Tools 锚点、视频详情跳转和移动端吸顶导航通过；0 个 broken link、0 个缺失图片、0 个控制台错误。
- 首页重构后 `npm run build` 通过，Astro 继续生成 25 个站点页面；详细视觉 QA 记录在 `design-qa.md`。
- 2026-07-12 新增第二个视频攻略 `Palworld 1.0 Ultimate Worker Pal Build Guide`，页面包含完整八节英文攻略、七个章节、FAQ、内链、canonical、OG 图、sitemap 和单个 `VideoObject`。
- 第二个站内播放器继续使用无需登录的自托管 HLS：1920×1080、60fps、H.264/AAC、36 个 6 秒 fMP4 分片，总计约 127 MB，最大分片约 5.46 MB，全片解码通过。
- 第二个页面本地未登录播放 QA 通过：时长 215.43 秒、`readyState=4`、1920×1080、播放时间从 0 增至 3.8 秒；126 秒章节跳转后播放到 127.8 秒；0 iframe；390px 无横向溢出。
- 页面明确标注该流程由授权源视频展示，当前 1.0 独立复测仍待完成；没有把源片版本标记或第三方演示写成当前版本实测。
- YouTube 备份 `ye8-_T6UVcY` 已上传并保持 Private，等待最终 Unlisted 保存；网站代码和公开页面不使用 YouTube 播放器或公开备份链接。
- commit `67281ab` 已推送 `main` 并由 Cloudflare Pages 自动部署为 production deployment `c68c4a53`。
- 线上未登录播放验收通过：HLS manifest 和首个 fMP4 分片均返回 200 与正确 Content-Type；视频 `readyState=4`、播放到 4.78 秒、时长 215.43 秒、1920×1080；126 秒章节跳转成功；0 iframe、0 控制台错误、390px 无横向溢出。
- 2026-07-12 完成视频/文字内容架构拆分：新增 `/videos/` 独立版块和两个独立视频页；首页 Videos 区域显示两条真实视频，主导航直达 `/videos/`。
- 两个原文字攻略 URL 保持不变并移除播放器与 `VideoObject`，每篇文章和对应视频页使用描述性链接双向跳转；视频元数据从 `guides.ts` 拆到 `videos.ts`。
- 本地构建增至 29 个页面；两条 HLS 均真实播放和章节跳转通过，390px/1280px 无横向溢出；文字攻略页播放器和 `VideoObject` 均为 0。
- 架构拆分 commit `b2d82ad` 已推送 `main` 并自动部署为 Cloudflare Pages production `90ed9aa2`；线上两个视频页、两个文字页、视频索引、HLS manifest 和 sitemap 均返回 200。
- 线上未登录实播复验：早期路线 0:53 跳转后播放到 56.36 秒，Worker Pal 2:06 跳转后播放到 129.51 秒；两条均 `readyState=4`、1920×1080、0 iframe、0 控制台错误，390px 无横向溢出。

## 2026-07-13 SEO Growth Audit

- 已完成一次基于真实数据的自然流量、内容结构和变现复查；可交互报告已在当前 Codex 任务中渲染，完整可复现输入保存在 `reviews/2026-07-13_seo_growth_monetization/artifact.json`。
- 已把审计结论拆成 2026-07-14 至 2026-10-11 的 90 天执行计划，包含 35 个具体任务、18 个新页面排期、单页生产 SOP、每周节奏、变现阶段门和复盘规则；主执行文档为 `docs/07_SEO增长与变现90天执行计划.md`。
- Google Search Console 当前累计 217 次曝光、10 次自然搜索点击、CTR 4.6%、平均排名 8.4；核心查询 `palworld 1.0 guide` 为 57 次曝光、4 次点击。
- Cloudflare Web Analytics 过去 3 天为 104 PV、46 visits；LCP P75 约 700ms，INP/CLS 样本为良好，页面性能不是当前主要增长瓶颈。
- GSC 的 `/sitemap.xml` 在 2026-07-13 仍显示“无法抓取”、类型未知、发现网页 0；站点端对普通 UA 和 Googlebot UA 均返回 200 与 XML，仍需继续诊断 Google 端错误。
- 本地 `npm run build` 通过并生成 31 个页面；静态审计标记为：21 个 description 超过 160 字符、14 个 title 超过 60 字符、10 个页面正文少于 500 词、9 个页面没有结构化数据。
- Header 搜索框当前只把 `?q=` 提交到 `/guides/`，目标页面不处理查询，属于未完成的伪搜索功能，应实现或暂时移除。
- Git 当前跟踪 120 个视频媒体文件，约 465.7 MB；继续扩展视频前，应规划迁移到 R2/CDN 或 Stream，避免仓库和 Pages 部署继续膨胀。
- 建议变现顺序：服务器托管 affiliate → 稳定自然流量后测试轻量广告 → 形成受众后测试服务器预设包/检查表等数字产品。

## 2026-07-13 Week 1 Technical Execution

- T01 已完成：GSC 原始 CSV 与 Cloudflare 近 7 天基线已固定到 `reviews/2026-07-13_week1_execution/`。GSC 为 217 impressions / 10 clicks / 4.6% CTR / 8.4 平均排名；Cloudflare 为 105 PV / 47 visits，其中生产域名 41、预览域名 6，Google 16、Direct 31。
- T02 已完成：GSC sitemap 仅显示“无法读取”，无更具体错误；GET、HEAD、Googlebot UA、XML、robots、30 URL canonical、IPv4/IPv6 均通过。URL Inspection 显示首页和 Performance 已收录，Fast Route、Level 8 视频和 Server Setup 尚无法被 Google 识别。
- T03 已完成：标准 sitemap 增加 lastmod、转义与缓存；robots 同时声明标准和视频 sitemap；commit `b359d4f` 已部署为 production `ce69d834`，线上 GET/HEAD/Googlebot/XML/30 URL 全部通过，两个 sitemap 已在 GSC 重提并收到成功提交弹窗。
- T05 已完成：Header 与 Guides 页搜索真实处理 `/guides/?q=`，索引全部文字攻略和视频，支持结果数、无结果、清空、查询回填和键盘提交；7 个查询用例通过。
- T06 已完成：31 个正式页面 title 全部 ≤60、description 全部 ≤160，二者均无重复；完整清单见 `TECHNICAL_QA.md`。
- T07 已完成：首页输出 WebSite/SearchAction；Guides、Server、Videos、Palworld、Base Building 输出与真实条目一致的 CollectionPage/ItemList。
- T08 已完成：新增 3 条 video sitemap 记录；3 个视频页分别输出 8、12、7 个 Clip；`?t=` URL 能真实定位播放器章节。
- T09 已完成决策：第四条视频前迁移到 R2 Standard + Pages Function 同源媒体路由 + Cloudflare Cache；自有媒体子域名降为可选优化。当前不创建付费资源，三条现有视频暂留 Pages，并冻结继续向 Git 增加视频媒体。
- T04 仍在进行中：GSC 表格即时状态仍为“无法抓取”、发现网页 0；单 URL 索引请求遇到当日配额上限。已建立每天 09:30 自动复查，成功前不启动内容冲刺和 Affiliate。

## Current Priorities

1. 完成本次部署并在 GSC 重新提交 sitemap；每 24 小时复查，直到 T04 达到“成功 + 发现网页 >0”。
2. T04 通过后启动 C01 关键词—页面映射，再进入第一批 18 篇内容冲刺和 8 个旧页更新。
3. Affiliate 第一阶段只做服务器托管：先申请/测试/披露/跟踪，再在高意图页放 CTA；近 30 天自然访问未到 1,000 前不测试广告。
4. 下一个视频发布前启用 R2 Standard，创建 `palworld-guide-media`，按迁移决策文档迁移四条现有 HLS 并观察 7 天；无需自有域名。
5. 继续跟踪 Pocketpair 官方 known issues / hotfix，并完成现有两个 source-footage 攻略的独立复测。

## Current Blockers

- 完整官方 changelog 已发布，不再受 patch notes 缺失阻塞；实测型建议仍需可靠玩家测试或后续官方说明。
- 无内容发布阻塞；Best Pals、Best Weapons、Best Base Locations 等排名型页面继续等待可靠玩家实测，不在发布日写死。

## Current Env Vars

- `PUBLIC_SITE_URL`: Cloudflare Pages production/preview 已设置为 `https://palworld-1-0-guide-hub.pages.dev`
- `PUBLIC_GA_MEASUREMENT_ID`: 未配置（本轮选择接入 Cloudflare Web Analytics，不接 GA4）
- `PUBLIC_CHECKOUT_URL`: 不适用

不要在文档里写入密钥、token、账号密码、支付后台敏感信息。

## Payment Status

- 首版不接支付。

## SEO / Analytics Status

- 已实现全页面 SEO title、meta description、canonical、Open Graph。
- 已实现动态 `robots.txt` 和 `sitemap.xml`。
- 已完成本地静态产物 SEO 字段抽查。
- 18 个页面的 title 和 meta description 已检查无重复。
- 当前 canonical/OG URL 使用默认 `https://palworld-1-0-guide-hub.pages.dev`；部署到正式域名时必须设置 `PUBLIC_SITE_URL`。
- 部署产物检查通过：canonical、Open Graph、sitemap、robots 不指向 localhost。
- 线上 `pages.dev` 域名检查通过。
- Cloudflare Pages 当前显示 Git Provider Yes：Framework preset Astro，Build command `npm run build`，Output directory `dist`。
- GitHub push 自动触发已验证成功，最新生产部署由 Cloudflare Pages Dashboard 记录。
- Cloudflare Web Analytics 已接入，Cloudflare Web Analytics site hostname 为 `palworld-1-0-guide-hub.pages.dev`。
- Google Search Console 已添加 URL-prefix 资源并通过 HTML 文件验证。
- Google Search Console 已提交并重新提交 `https://palworld-1-0-guide-hub.pages.dev/sitemap.xml`；GSC 弹窗确认提交成功，但当前表格即时状态仍为“无法抓取”，站点端检查正常，需稍后复查。
- `/faq/` 已升级为完整 FAQ 主页面；重复的 `/guides/palworld-1-0-faq/` canonical 到 `/faq/` 并从 sitemap 排除。
- 24 个构建页面 title/meta 无重复；23 个正式 canonical URL 进入 sitemap，内部链接检查无 broken link。
- 25 个构建页面 title/meta 无重复；首个视频攻略 URL 已进入 sitemap，并包含单个 `VideoObject` JSON-LD。
- 29 个构建页面通过；`/videos/`、两个独立视频页和两个独立文字攻略页均有不同 canonical/title/meta；每个视频页仅含一个 `VideoObject`，文字攻略页为 0。
- 2026-07-13 第一周技术 SEO 本地验收通过：31 个正式页面 title/meta 合规且无重复，30 个 canonical URL 进入标准 sitemap，3 个视频进入 video sitemap，5 个聚合页结构化数据和 27 个 Clip 通过静态/浏览器检查；T04 仍等待部署后 GSC 外部状态。
- Patch Notes、Sunreach、World Tree、New Pals、MOD Warning、Server Setup、First Hour 已加入原创 WebP 插画或信息图及 alt text。
- Patch Notes、Sunreach、World Tree、New Pals、Server Setup、Best Server Settings 已加入可操作表格或检查框架。
- Beginner、Multiplayer、Performance 已完成正式深度更新，加入分阶段路线、决策表、故障诊断、Source note、内链和原创 WebP 视觉。
- Guides、Server、About 三个入口页已更新正式发布后文案、阅读路径、入口导航和原创/自制配图。
- 首页视频下方只显示 1 张紧凑的 Illustrated strategy guides 入口卡；5 章 16 条完整内容仅放在独立支柱页，后续新增图文攻略时可继续增加同尺寸入口卡，不再把文章正文铺满首页。

## Do Not Do Now

- 不做登录、会员、评论、后台。
- 不做完整数据库或大而全 Wiki。
- 不编造未确认的 Palworld 1.0 具体内容。
- 不使用官方 Logo 作为站点 Logo。

## Default Codex Rule

之后本项目默认使用“省 token 工作模式”：

启动任务默认只读：

1. `CURRENT_STATE.md`
2. `TODO.md`
3. 本次任务直接相关的代码文件或配置文件

默认不读取：

- 全局工作台文档
- SOP
- 沟通规范
- 项目索引
- `PROJECT_CONTEXT.md`
- `CHANGELOG.md`
- `docs/03_开发记录.md`
- 踩坑日志

只有这些情况才允许全量读取历史文档：

- 阶段性总验收
- 架构调整
- 支付链路重做
- SEO 总检查
- 部署/上线总检查
- 用户明确要求“读取全部项目文档”
- 当前任务需要查历史决策且 `CURRENT_STATE.md` 信息不足

如果需要查历史，优先用 `rg` 按关键词搜索，或只读取相关段落，不整篇读取长文档。

任务结束默认只更新：

1. `CURRENT_STATE.md`
2. `TODO.md`

其他文档更新规则：

- `CHANGELOG.md`：只有可发布版本变化时才更新。
- 踩坑日志：只有出现新的真实问题和解决方案时才更新。
- `docs/03_开发记录.md`：只有阶段性完成时才更新。
- `05_项目索引.md`：只有新增/移动/重命名重要文件时才更新。
- `PROJECT_CONTEXT.md`：只有项目定位、核心策略、技术方案发生变化时才更新。
