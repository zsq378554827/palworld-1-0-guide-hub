# TODO

更新时间：2026-07-07

## 工作模式

- 当前项目默认启用“省 token 工作模式”。
- 默认启动任务只读 `CURRENT_STATE.md`、`TODO.md` 和本次任务直接相关的代码或配置文件。
- 默认收尾只更新 `CURRENT_STATE.md` 和 `TODO.md`。
- 大文档继续保留为归档资料，不再作为小任务默认读取对象。

## 当前优先级

1. 决定 Cloudflare Pages Git 集成路径：删除/重建同名 Pages 项目，或新建另一个 Git 集成项目。
2. Palworld 1.0 正式发布后，更新所有预备内容。
3. 后续接入 Analytics 和 Search Console。

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
| 阻塞 | Cloudflare Pages Git 集成 | 高 | 用户/Codex | 现有 Pages 项目是 Direct Upload，Cloudflare 不允许原地更新 `source` |
| 未开始 | 1.0 正式 patch notes 发布后更新文章 | 高 | Codex | 不编造未确认内容 |
| 未开始 | 接入 Analytics 和 Search Console | 中 | Codex | 部署后做 |

## 状态说明

- 未开始
- 进行中
- 已完成
- 暂缓
- 阻塞

## 阻塞项

- Cloudflare Pages Git 集成被项目类型阻塞。API 返回：`You cannot update the source object in a Direct Uploads project.`
- 如要保留 `https://palworld-1-0-guide-hub.pages.dev/` 同名地址，需要删除当前 Direct Upload 项目后重新创建 Git 集成项目。
- 如不想影响当前线上站，可以新建另一个 Git 集成项目，使用新的 `pages.dev` 地址。
- Palworld 1.0 完整 patch notes 未发布。

## 下次打开项目先做

- 读取 `CURRENT_STATE.md` 和 `TODO.md`。
- 如果是内容更新任务，优先读取 `src/data/guides.ts`。
- 如果是 SEO 或页面结构任务，优先读取 `src/layouts/BaseLayout.astro`、`src/components/` 和对应页面。
