# CURRENT_STATE

更新时间：2026-07-07

## Project

项目名称：Palworld 1.0 Guide Hub

一句话说明：面向英文玩家的 Palworld Version 1.0 专题攻略静态站 MVP，先做专题攻略，不做完整 Wiki。

## Live URL

- Production: `https://palworld-1-0-guide-hub.pages.dev/`
- Preview: `https://123cf8c8.palworld-1-0-guide-hub.pages.dev/`
- GitHub: `https://github.com/zsq378554827/palworld-1-0-guide-hub`（remote 已添加，本机尚未成功 push）
- Local app repo: `/Users/zousunquan/Desktop/Codex/projects/Project_02_palworld_1_0_guide_hub`
- Project docs: `/Users/zousunquan/Desktop/Codex/projects/Project_02_palworld_1_0_guide_hub`

## Current Stage

- MVP 首版已通过 Cloudflare Pages 直接部署上线，等待 GitHub 凭据补齐后 push main 并改为 Git 集成部署。

## Completed

- 项目文档已初始化。
- Astro 静态站结构已创建。
- 首版页面和文章数据已写入。
- 已完成 8 个核心页面和 10 篇文章。
- `npm run build` 通过，生成 18 个 HTML 页面。
- SEO 抽查通过：18 个 HTML 页面核心 SEO 字段无缺失，10 篇文章均有 Last Updated。
- Playwright 首页视觉检查通过：390px 手机和 1280px 桌面 viewport 均无页面级横向溢出。
- 2026-07-07 质量复查完成：内部链接 HTTP 检查 22 项通过；18 个页面 title/description 无重复；10 篇文章均包含 Short answer、实用建议、FAQ、指定 patch notes 更新提示、Last Updated 和非官方声明。
- 390px 手机、768px 平板、1280px 桌面共 54 次页面 viewport 检查通过，无横向溢出。
- 首页文章卡已改为整卡可点击，首页展示全部 10 篇 MVP 文章。
- 2026-07-07 Cloudflare Pages 部署准备完成：`npm install` 和 `npm run build` 通过；`dist/` 输出 18 个页面；`.env.example` 已加入 `PUBLIC_SITE_URL=`；Astro 配置显式 `output: "static"`；产物无 localhost、本机绝对路径或官方素材引用。
- 2026-07-07 Cloudflare Pages 直接部署完成：项目 `palworld-1-0-guide-hub`，正式域名 `https://palworld-1-0-guide-hub.pages.dev/`，预览部署 `https://123cf8c8.palworld-1-0-guide-hub.pages.dev/`。
- 线上检查完成：首页 200；robots/sitemap 存在；canonical、Open Graph URL、Open Graph image 均指向 `https://palworld-1-0-guide-hub.pages.dev`。

## Current Priorities

1. 补齐 GitHub push 权限，把本地 `main` 推送到 `zsq378554827/palworld-1-0-guide-hub`。
2. 在 Cloudflare Pages 将当前直接上传项目改为 GitHub 集成部署，并设置 `PUBLIC_SITE_URL=https://palworld-1-0-guide-hub.pages.dev`。
3. Palworld 1.0 正式上线后更新完整内容事实。

## Current Blockers

- Palworld 1.0 正式 patch notes 尚未可用，文章只能保持预备版本。
- GitHub push 仍被本机凭据阻塞：无 `gh`、无 `GITHUB_TOKEN/GH_TOKEN`、无 HTTPS credential，GitHub 连接器写入仓库返回 403。
- 已生成仓库专用 deploy key，公钥路径：`/Users/zousunquan/.ssh/palworld_guide_hub_deploy.pub`。需要在 GitHub 仓库 Settings -> Deploy keys 添加并勾选 write access 后才能 SSH push。

## Current Env Vars

- `PUBLIC_SITE_URL`: Cloudflare Pages Dashboard 后续应设置为 `https://palworld-1-0-guide-hub.pages.dev`
- `PUBLIC_GA_MEASUREMENT_ID`: 未配置
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
- Analytics 未接入。

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
