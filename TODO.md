# TODO

更新时间：2026-07-07

## 工作模式

- 当前项目默认启用“省 token 工作模式”。
- 默认启动任务只读 `CURRENT_STATE.md`、`TODO.md` 和本次任务直接相关的代码或配置文件。
- 默认收尾只更新 `CURRENT_STATE.md` 和 `TODO.md`。
- 大文档继续保留为归档资料，不再作为小任务默认读取对象。

## 当前优先级

1. Palworld 1.0 正式发布后，更新所有预备内容。
2. 后续接入 Analytics 和 Search Console。
3. 后续如绑定自定义域名，同步更新 Cloudflare Pages `PUBLIC_SITE_URL`。

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
| 未开始 | 1.0 正式 patch notes 发布后更新文章 | 高 | Codex | 不编造未确认内容 |
| 未开始 | 接入 Analytics 和 Search Console | 中 | Codex | 部署后做 |

## 状态说明

- 未开始
- 进行中
- 已完成
- 暂缓
- 阻塞

## 阻塞项

- Palworld 1.0 完整 patch notes 未发布。
- 无 Cloudflare 部署阻塞；GitHub push 已可自动触发 Cloudflare Pages production deployment。

## 下次打开项目先做

- 读取 `CURRENT_STATE.md` 和 `TODO.md`。
- 如果是内容更新任务，优先读取 `src/data/guides.ts`。
- 如果是 SEO 或页面结构任务，优先读取 `src/layouts/BaseLayout.astro`、`src/components/` 和对应页面。
