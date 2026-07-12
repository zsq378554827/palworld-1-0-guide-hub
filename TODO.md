# TODO

更新时间：2026-07-12

## 工作模式

- 当前项目默认启用“省 token 工作模式”。
- 默认启动任务只读 `CURRENT_STATE.md`、`TODO.md` 和本次任务直接相关的代码或配置文件。
- 默认收尾只更新 `CURRENT_STATE.md` 和 `TODO.md`。
- 大文档继续保留为归档资料，不再作为小任务默认读取对象。

## 当前优先级

1. 跟踪 Pocketpair 官方 known issues / hotfix 公告，并同步受影响页面。
2. 等可靠玩家实测后再决定 Best Pals、Best Weapons、Best Base Locations 和精确服务器倍率内容。
3. 稍后复查 Google Search Console sitemap 状态是否从“无法抓取”变为成功；`sitemap.xml` 已重新提交，站点端检查正常。
4. 后续如绑定自定义域名，同步更新 Cloudflare Pages `PUBLIC_SITE_URL`。

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
| 未开始 | 复查 GSC sitemap 抓取状态 | 中 | Codex | 已重新提交 `sitemap.xml`，GSC 返回提交成功；表格即时状态仍为“无法抓取”；站点端检查 `/sitemap.xml` 对 Googlebot 返回 200 和 `application/xml` |
| 已完成 | Palworld 1.0 patch notes 更新日准备 | 高 | Codex | 已预留文章更新字段；文章页新增 Update Notice；已创建 `UPDATE_DAY_CHECKLIST.md`；build 通过 |
| 已完成 | 新建 New Pals Overview / World Tree Guide 独立页面 | 中 | Codex | 已按官方 changelog 创建安全概览，不写未验证完整名单、路线、Boss 或排名 |
| 暂缓 | Best Pals / Best Weapons / Best Base Locations | 中 | Codex | 需要可靠玩家实测，发布日不写死 |
| 进行中 | 视频攻略生产模板前向验证 | 中 | Codex | 本轮首个视频已完成；下个不同类型视频继续验证 Unlisted、SRT、站内嵌入和部署全链路 |
| 已完成 | 修复 YouTube 嵌入登录要求 | 高 | Codex | 改为站内 H.264/AAC HLS 原生播放器；未登录播放、章节跳转、0 iframe 和移动端检查通过 |
| 已完成 | 首页攻略站信息架构与 UI 重构 | 高 | Codex | 任务入口 + 真实视频主卡 + 分类导航 + 最新攻略 + 清单框架 + 分组攻略；1440/390 QA、链接、图片和 build 均通过 |
| 已完成 | 第二个 Ultimate Worker Pal 视频攻略上线 | 高 | Codex | commit `67281ab`、Cloudflare production `c68c4a53`；英文攻略、1080p60 HLS、SEO、线上未登录播放和章节跳转均通过；YouTube 最终 Unlisted 单独确认 |
| 已完成 | 视频与文字攻略独立分区 | 高 | Codex | 新增 `/videos/` 和两个独立视频页；两篇文字攻略移除播放器/VideoObject，双方互链；29 页 build 与本地播放 QA 通过 |
| 未开始 | 独立复测 Ultimate Worker Pal 精确机制 | 高 | 用户/Codex | 复测 Yakumo 概率、Technique book farming、精确数值和补丁敏感步骤；完成前页面保持 source-footage 标签 |

## 状态说明

- 未开始
- 进行中
- 已完成
- 暂缓
- 阻塞

## 阻塞项

- Palworld 1.0 完整官方 changelog 已发布，无 patch notes 缺失阻塞。
- 无 Cloudflare 部署阻塞；GitHub push 已可自动触发 Cloudflare Pages production deployment。
- Search Console sitemap 已提交并重新提交，GSC 返回提交成功；表格即时状态仍显示“无法抓取”，站点端无明显阻塞，需稍后复查 Google 后台状态。

## 下次打开项目先做

- 读取 `CURRENT_STATE.md` 和 `TODO.md`。
- 如果是内容更新任务，优先读取 `src/data/guides.ts`。
- 如果是 SEO 或页面结构任务，优先读取 `src/layouts/BaseLayout.astro`、`src/components/` 和对应页面。
