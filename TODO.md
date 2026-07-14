# TODO

更新时间：2026-07-14

## 工作模式

- 当前项目默认启用“省 token 工作模式”。
- 默认启动任务只读 `CURRENT_STATE.md`、`TODO.md` 和本次任务直接相关的代码或配置文件。
- 默认收尾只更新 `CURRENT_STATE.md` 和 `TODO.md`。
- 大文档继续保留为归档资料，不再作为小任务默认读取对象。

## 当前优先级

1. 部署并重新提交标准/视频 sitemap，持续复查 GSC，直到显示成功和已发现网页。
2. 技术验收通过后启动 18 篇内容冲刺，先建立关键词—页面映射，避免主查询冲突。
3. 内容高意图页具备后，再建立 affiliate 测试、披露和点击追踪闭环；暂不接满屏广告。
4. 第四条本次已按 Pages 静态 HLS 上线；下一个视频发布前启用 R2 Standard + Pages Function 同源 `/media/...`，迁移四条现有 HLS，无需购买域名。

## 待办列表

| 状态 | 任务 | 优先级 | 负责人 | 备注 |
| --- | --- | --- | --- | --- |
| 已完成 | 完成 Astro MVP 页面和文章 | 高 | Codex | 8 个核心页面 + 10 篇文章 |
| 已完成 | 运行 `npm run build` | 高 | Codex | build 通过，18 个页面生成 |
| 已完成 | 本地 SEO 和移动端抽查 | 高 | Codex | SEO 字段无缺失；390px/1280px 无横向溢出 |
| 已完成 | MVP 上线前质量复查 | 高 | Codex | 链接、SEO 去重、文章质量、390/768/1280 响应式、素材风险均通过 |
| 已完成 | Cloudflare Pages 部署准备 | 高 | Codex | build/output/env/SEO/robots/sitemap/static assets/Git 提交准备 |
| 已完成 | Cloudflare Pages 直接部署 | 高 | Codex | 已上线 `https://palworld-1-0-guide-hub.pages.dev/` |
| 已完成 | 创建或连接 GitHub remote | 高 | 用户/Codex | 已用可写 deploy key push `main` 到 GitHub |
| 已完成 | Cloudflare Pages Git 集成 | 高 | 用户/Codex | Cloudflare 显示 Git Provider Yes；GitHub App 仓库授权已补齐；GitHub push 自动部署已验证 |
| 已完成 | 1.0 正式 patch notes 发布后更新文章 | 高 | Codex | 原有核心文章均已完成正式发布状态与内容深化；实测型排名继续暂缓 |
| 已完成 | 1.0 官方 changelog 重点页第二轮深化与 QA | 高 | Codex | 6 个重点页完成正式发布 SEO 内容；21 个内部链接无缺失；390px/1280px 无横向溢出；build 通过 |
| 已完成 | 第三轮新增 6 篇安全范围页面 | 高 | Codex | Sunreach、World Tree、New Pals Overview、MOD Warning、Server Owner Checklist、First Hour Checklist；24 个页面 build、链接、SEO、390px/1280px QA 通过 |
| 已完成 | 发布后文案、FAQ、配图和实用性优化 | 高 | Codex | 清除发布前措辞；完整 `/faq/`；7 个重点页原创视觉；重点页表格/checklist；重复 FAQ canonical 与 sitemap 去重 |
| 已完成 | 深化剩余旧页面 | 高 | Codex | Beginner、Multiplayer、Performance 深度更新；Guides、Server、About 入口页增强；新增 3 张原创/自制 WebP 视觉 |
| 已完成 | 首个 Unlisted 视频攻略功能 | 高 | Codex | 新增完整英文图文攻略、点击加载隐私增强播放器、章节跳转、当前 1.0 复测说明、VideoObject SEO 和首页真实视频卡；YouTube 永不公开 |
| 已完成 | 接入 Analytics 和 Search Console | 中 | Codex | Cloudflare Web Analytics 已接入；GSC URL-prefix 资源已通过 HTML 文件验证；sitemap 已提交 |
| 已完成 | Palworld 1.0 patch notes 更新日准备 | 高 | Codex | 已预留文章更新字段；文章页新增 Update Notice；已创建 `UPDATE_DAY_CHECKLIST.md`；build 通过 |
| 已完成 | 新建 New Pals Overview / World Tree Guide 独立页面 | 中 | Codex | 已按官方 changelog 创建安全概览，不写未验证完整名单、路线、Boss 或排名 |
| 暂缓 | Best Pals / Best Weapons / Best Base Locations | 中 | Codex | 需要可靠玩家实测，发布日不写死 |
| 进行中 | 视频攻略生产模板前向验证 | 中 | Codex | 本轮首个视频已完成；下个不同类型视频继续验证 Unlisted、SRT、站内嵌入和部署全链路 |
| 已完成 | 修复 YouTube 嵌入登录要求 | 高 | Codex | 改为站内 H.264/AAC HLS 原生播放器；未登录播放、章节跳转、0 iframe 和移动端检查通过 |
| 已完成 | 首页攻略站信息架构与 UI 重构 | 高 | Codex | 任务入口 + 真实视频主卡 + 分类导航 + 最新攻略 + 清单框架 + 分组攻略；1440/390 QA、链接、图片和 build 均通过 |
| 已完成 | 第二个 Ultimate Worker Pal 视频攻略上线 | 高 | Codex | commit `67281ab`、Cloudflare production `c68c4a53`；英文攻略、1080p60 HLS、SEO、线上未登录播放和章节跳转均通过；YouTube 最终 Unlisted 单独确认 |
| 已完成 | 视频与文字攻略独立分区 | 高 | Codex | commit `b2d82ad`、Cloudflare production `90ed9aa2`；新增 `/videos/` 和两个独立视频页，两篇文字攻略移除播放器/VideoObject，线上双视频实播与章节跳转通过 |
| 已完成 | 第三个 Level 8 Worker Pals 视频完整上线 | 高 | Codex | commit `85a028b`、Cloudflare production `bd06e946`；4K 成片、SRT、缩略图、YouTube Unlisted、HLS、独立视频/文字页、首页右上推荐位、SEO、线上实播与 2:10 章节均通过 |
| 已完成 | 第四个 Ultimate Pal Build 视频完整上线 | 高 | Codex | commit `bf0015c`、Cloudflare production `45e7af6b`；YouTube Unlisted + 英文 SRT、Pages 静态 HLS、独立视频/文字页、SEO、线上未登录播放、3:18 章节和 390px 均通过。 |
| 已完成 | 修复第四条网站视频缺少英文配音 | 最高 | Codex | commit `9283092`、production `a6acbaf0`；已重混正式版、重建版本化 HLS v2，并对 master、本地/生产 HLS 分别完成英语反向转写、全片解码、未静音播放与章节验收；YouTube 修正版 `upMe6PaKgXg` 为 Unlisted，旧版已 Private。 |
| 已完成 | 自然流量、SEO 与变现总复查 | 高 | Codex | GSC 217 impressions / 10 clicks / 4.6% CTR / 平均排名 8.4；Cloudflare 3 天 104 PV / 46 visits；报告输入保存在 `reviews/2026-07-13_seo_growth_monetization/artifact.json` |
| 已完成 | 制定 SEO 增长与变现 90 天详细执行计划 | 高 | Codex | `docs/07_SEO增长与变现90天执行计划.md`；含 35 个具体任务、18 个新页、8 个旧页更新、周节奏、阶段门和验收口径 |
| 进行中 | 诊断并修复 GSC sitemap“无法抓取” | 高 | Codex | T02/T03 完成并部署为 `ce69d834`；标准/视频 sitemap 已重提，GSC 即时仍无法抓取；单 URL 请求遇到每日配额；已安排每天 09:30 复查，以“成功 + 发现网页 >0”完成 T04 |
| 已完成 | 修复 Header 伪搜索 | 高 | Codex | `/guides/?q=` 已索引全部文字攻略和视频；支持结果数、无结果、清空、键盘提交；7 个查询用例通过 |
| 已完成 | 首批 title/meta CTR 优化 | 高 | Codex | 31 个正式页面 title ≤60、description ≤160，均无重复；全量清单见第一周 `TECHNICAL_QA.md` |
| 已完成 | 补聚合页和视频 SEO 增强 | 中 | Codex | 首页 WebSite；5 个聚合页 CollectionPage/ItemList；video sitemap 3 条；3 个视频页共 27 个 Clip |
| 已完成 | 将 5 张截图整理为单篇图文攻略并增加首页入口 | 高 | Codex | 完整内容仅放在独立 `/guides/palworld-1-0-tips/`，首页视频下方只保留 1 张可扩展的图文攻略入口卡；文章含 5 章 16 条内容、16 张原创 WebP、语义 H2/H3、FAQ、Article/Breadcrumb、Guides 搜索、sitemap 与内链；修正捕获奖励为前 5 次，未复测数值显式标注；34 页 build 和 390/768/1440 QA 通过。 |
| 未开始 | 30 天四内容簇冲刺 | 高 | Codex | 新增 16–20 个单一意图页并更新 8 个旧页；新手、性能、服务器商业意图、1.0 新内容各自成簇 |
| 未开始 | 服务器 affiliate 验证闭环 | 中 | 用户/Codex | 申请 2–3 个计划；真实测试、条款复核、FTC 披露、`affiliate_click`、outbound CTR 与 EPC 看板 |
| 进行中 | 视频媒体迁移方案 | 高 | 用户/Codex | 第四条按用户决定暂时继续 Pages；下一个视频前启用 R2 Standard + Pages Function 同源 `/media/...`，迁移四条现有 HLS并执行 7 天双源观察。 |
| 未开始 | 独立复测 Ultimate Worker Pal 精确机制 | 高 | 用户/Codex | 复测 Yakumo 概率、Technique book farming、精确数值和补丁敏感步骤；完成前页面保持 source-footage 标签 |
| 未开始 | 独立复测 Level 8 Worker Pals 坐标与补丁敏感数值 | 高 | 用户/Codex | 页面已明确标注 source-footage；后续复测 World Tree 解锁、坐标、Work Suitability 和伙伴技能行为 |

## 状态说明

- 未开始
- 进行中
- 已完成
- 暂缓
- 阻塞

## 阻塞项

- Palworld 1.0 完整官方 changelog 已发布，无 patch notes 缺失阻塞。
- 无 Cloudflare 部署阻塞；GitHub push 已可自动触发 Cloudflare Pages production deployment。
- 第四条视频已上线，无 R2 阻塞；R2 启用与四条旧媒体迁移是下一个视频发布前的前置任务。
- Search Console 当前仍显示 sitemap“无法读取”、发现网页 0。站点端所有可复现检查通过；首页与 Performance 已收录，另 3 个代表 URL 显示 Google 尚无法识别，需完成本次部署、重提和 24 小时复查。

## 下次打开项目先做

- 读取 `CURRENT_STATE.md` 和 `TODO.md`。
- 先复查 GSC sitemap 是否变为“成功 + 发现网页 >0”；若成功，记录 T04 完成并开始 C01 关键词—页面映射。
- 如果是内容更新任务，优先读取 `src/data/guides.ts`。
- 如果是 SEO 或页面结构任务，优先读取 `src/layouts/BaseLayout.astro`、`src/components/` 和对应页面。
