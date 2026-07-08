# CHANGELOG

更新时间：2026-07-08

## 记录规则

- 每完成一个阶段就追加记录。
- 记录用户能理解的变化，不只写代码文件名。
- 重要决策同步到 `PROJECT_CONTEXT.md`。

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
