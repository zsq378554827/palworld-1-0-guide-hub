# PROJECT_CONTEXT

更新时间：2026-07-07

## 项目一句话

Palworld 1.0 Guide Hub 是一个面向英文用户的 Palworld Version 1.0 专题攻略静态站 MVP，先覆盖新手、回归玩家、服务器、基地建设、1.0 更新预期、FAQ 等搜索意图，后续通过 SEO 流量接入广告、联盟或相关内容变现。

## 基本信息

- 项目名称：Palworld 1.0 Guide Hub
- 项目类型：英文游戏攻略内容站 / SEO 站
- 项目状态：已上线，Cloudflare Pages 显示 Git Provider Yes；GitHub `main` 已 push；GitHub push 自动部署已验证成功
- 目标用户：Palworld 1.0 新玩家、回归玩家、服务器服主、多人联机玩家、基地建设玩家
- 使用场景：玩家在 1.0 正式发布前后搜索版本变化、新档建议、服务器设置、性能设置、FAQ 和补丁说明
- 变现方式：首版不接变现；后续可接展示广告、游戏服务器 affiliate、工具/攻略包导流
- 期望上线时间：MVP 完成后即可部署预览

## 核心需求

- 使用 Astro 静态站实现。
- 英文页面，深色游戏感，卡片式布局，移动端优先。
- 不做登录、会员、评论、后台。
- 全页面具备 SEO title、description、canonical、Open Graph。
- 所有文章页面显示 Last Updated。
- Footer 显示非官方声明。
- 首版包含 8 个核心页面和 10 篇文章初版。
- 1.0 正式内容未发布前，不编造未确认细节。

## MVP 范围

必须做：

- 首页 `/`
- 1.0 专题页 `/palworld-1-0/`
- 分类页 `/guides/`
- 分类页 `/server/`
- 分类页 `/base-building/`
- FAQ 页 `/faq/`
- About 页 `/about/`
- Disclaimer 页 `/disclaimer/`
- 10 篇英文文章初版
- 全站 SEO 基础标签和移动端适配
- build 无错误

暂不做：

- 完整 Wiki 或数据库
- 登录、会员、评论、后台
- 官方 Logo 或官方图片素材
- 未确认的 Palworld 1.0 具体数值、完整 Pal 列表、完整 patch notes

## 技术栈

- 前端：Astro
- 后端：无
- 数据库：无
- 部署：Cloudflare Pages 静态站；当前显示 Git Provider Yes，构建命令 `npm run build`，输出目录 `dist`；GitHub push 自动触发已验证成功
- 第三方服务：首版无

## 目录结构

```text
Project_02_palworld_1_0_guide_hub/
├── PROJECT_CONTEXT.md
├── CURRENT_STATE.md
├── TODO.md
├── CHANGELOG.md
├── docs/
├── package.json
├── astro.config.mjs
├── scripts/generate-assets.mjs
├── public/assets/
└── src/
    ├── components/
    ├── data/
    ├── layouts/
    ├── pages/
    └── styles/
```

## 已完成

- 初始化项目文档。
- 建立 Astro 静态站 MVP 结构。
- 写入 8 个核心页面和 10 篇文章初版。
- 已上线到 `https://palworld-1-0-guide-hub.pages.dev/`。
- 已将 GitHub `main` 推送到 `zsq378554827/palworld-1-0-guide-hub`。
- 已在 Cloudflare Pages production/preview 设置 `PUBLIC_SITE_URL=https://palworld-1-0-guide-hub.pages.dev`。
- 已删除旧 Direct Upload Pages 项目，并重建同名 GitHub 集成 Pages 项目。
- 已补齐 GitHub App 对 `zsq378554827/palworld-1-0-guide-hub` 的仓库授权。
- 已验证 GitHub push 自动触发 Cloudflare Pages production deployment。

## 待完成

- Palworld 1.0 正式上线后，根据完整 patch notes 更新文章事实。
- 后续接入 analytics、Search Console、广告或 affiliate。

## 开发记录

```markdown
## 2026-07-07

- 初始化 Palworld 1.0 Guide Hub MVP。
- 确认官方 1.0 发布时间信息只使用已公开内容，未确认细节用更新提示占位。
```

## 踩坑记录

暂无。

## 决策记录

| 日期 | 决策 | 原因 |
| --- | --- | --- |
| 2026-07-07 | 使用 Astro 静态站和本地 TS 数据文件管理文章 | 首版内容量小，便于快速上线和后续批量扩展 |
| 2026-07-07 | 不使用官方 Logo 或官方图片 | 降低版权和商标风险，符合用户要求 |
| 2026-07-07 | 1.0 未发布细节只写预备版 | 避免编造未确认内容，正式 patch notes 发布后再更新 |

## 复盘

- 做对了什么：先搭结构和 SEO，再写内容。
- 做错了什么：暂无。
- 下次复用什么：游戏攻略专题站可以用“核心页 + 分类页 + 文章数据文件 + SEO Layout”的轻量结构。
- 下次避免什么：不要为了首版做完整数据库或 Wiki。

## 给下一个 Codex 的接手提示

```text
请先阅读本项目 CURRENT_STATE.md、TODO.md 和本次任务直接相关文件。

只有阶段性总验收、架构调整、支付链路重做、SEO 总检查、部署/上线总检查、我明确要求“读取全部项目文档”，或 CURRENT_STATE.md 信息不足时，才读取 PROJECT_CONTEXT.md、CHANGELOG.md 和 docs/。
```
