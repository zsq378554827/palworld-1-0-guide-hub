# CHANGELOG

更新时间：2026-07-07

## 记录规则

- 每完成一个阶段就追加记录。
- 记录用户能理解的变化，不只写代码文件名。
- 重要决策同步到 `PROJECT_CONTEXT.md`。

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
- 当前 Cloudflare Pages 项目是 Direct Upload，Cloudflare API 不允许原地更新为 GitHub `source`；如需 Git 集成，需要删除/重建同名项目或新建另一个 Git 集成项目。

### 文档

- 初始化项目上下文、当前状态、TODO、技术文档、开发记录、项目 SOP。

### 下一步

- 决定 Cloudflare Pages Git 集成路径。
- Palworld 1.0 正式发布后更新文章事实。
