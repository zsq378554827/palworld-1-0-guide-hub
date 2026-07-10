# TODO

更新时间：2026-07-10

## 工作模式

- 当前项目默认启用“省 token 工作模式”。
- 默认启动任务只读 `CURRENT_STATE.md`、`TODO.md` 和本次任务直接相关的代码或配置文件。
- 默认收尾只更新 `CURRENT_STATE.md` 和 `TODO.md`。
- 大文档继续保留为归档资料，不再作为小任务默认读取对象。

## 当前优先级

1. 继续更新 Returning、Multiplayer、Performance 等页面，并深化 Beginner 的实测型建议；只加入官方确认事实或明确标记的实测结论。
2. 跟踪 Pocketpair 官方 known issues / hotfix 公告，并同步受影响页面。
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
| 进行中 | 1.0 正式 patch notes 发布后更新文章 | 高 | Codex | 已完成 Release、Patch Notes、Save、Server Setup、Best Server Settings、FAQ 和全站 live 状态；其余现有攻略继续核查更新 |
| 已完成 | 接入 Analytics 和 Search Console | 中 | Codex | Cloudflare Web Analytics 已接入；GSC URL-prefix 资源已通过 HTML 文件验证；sitemap 已提交 |
| 未开始 | 复查 GSC sitemap 抓取状态 | 中 | Codex | 已重新提交 `sitemap.xml`，GSC 返回提交成功；表格即时状态仍为“无法抓取”；站点端检查 `/sitemap.xml` 对 Googlebot 返回 200 和 `application/xml` |
| 已完成 | Palworld 1.0 patch notes 更新日准备 | 高 | Codex | 已预留文章更新字段；文章页新增 Update Notice；已创建 `UPDATE_DAY_CHECKLIST.md`；build 通过 |
| 暂缓 | 新建 New Pals List / World Tree Guide 独立页面 | 中 | Codex | 本轮用户要求不要新增页面；当前只在清单中记录为后续候选页面 |

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
