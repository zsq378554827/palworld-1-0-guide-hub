# 项目 SOP

更新时间：2026-07-12

## 本地开发

```bash
cd /Users/zousunquan/Desktop/Codex/projects/Project_02_palworld_1_0_guide_hub
npm install
npm run generate:assets
npm run dev
```

## 测试

```bash
npm run build
```

## 构建

```bash
npm run build
```

## 部署

1. 选择 Cloudflare Pages、Netlify 或 Vercel。
2. 构建命令使用 `npm run build`。
3. 输出目录使用 `dist`。
4. 设置 `PUBLIC_SITE_URL` 为真实域名。
5. 部署后检查 `/robots.txt`、`/sitemap.xml`、首页 canonical 和文章 canonical。

## 内容更新

- 更新文章：编辑 `src/data/guides.ts`。
- 更新分类页面文案：编辑 `src/pages/*/index.astro`。
- Palworld 1.0 正式发布后，先核对官方 patch notes，再更新具体内容。

## 数据检查

- 不写未确认的 1.0 具体数值。
- 不使用官方 Logo 作为站点 Logo。
- 不搬运官方图片作为首版素材。

## 视频攻略发布

1. 先调用 `/Users/zousunquan/.codex/skills/localize-short-video/` 完成授权、最高画质下载、英文化和 master QA。
2. 用 Skill 的 `build_web_hls.py` 生成 H.264/AAC HLS；确保每个静态文件低于托管限制并完整解码。正式扩量方案将 HLS 保存在 Git 仓库外并上传私有 R2。
3. 默认由 Pages Function 通过 `MEDIA_BUCKET` 读取私有 R2；没有自有域名时继续使用现有 `pages.dev/media/...`。只有用户明确选择临时回退时，才把一条 HLS 放入 `public/media/<video-slug>/` 随 Pages 部署，并记录仓库体积和下次迁移门槛。
4. 在 `/videos/` 新增真实视频卡；每条视频使用 `/videos/<video-slug>/` 独立详情页和 `GuideVideo.astro` 原生播放器。无需登录场景保持 0 iframe，不公开 YouTube 备份链接。
5. 在 `guides.ts` 单独维护完整英文文字攻略。视频页只放播放器、简介、章节、验证/披露和文字攻略 CTA；文字页放完整步骤、FAQ、来源和对应视频 CTA，不嵌播放器。
6. 两个 URL 使用不同 title/meta/H1 和自引用 canonical；`VideoObject` 只在视频页出现且恰好 1 个，文字攻略页必须为 0；两页都进入 sitemap 并双向内链。
7. `npm run build` 后检查 390px/1280px、视频索引真实数量、旧文章回归、title/meta、canonical、最大媒体文件、文字页 0 player/0 VideoObject。
8. push `main`，等待 Cloudflare production；未登录线上浏览器必须证明全部新增视频可加载，并至少对本次新增视频验证 `currentTime` 增加和章节跳转。
9. YouTube 只作后台备份：发布前选择 `Unlisted/不公开列出`，保存后必须在 Studio 内容列表读取最终可见性；不把备份链接加入公开站点。若自定义缩略图被账号功能验证拦截，记录限制并继续使用站内缩略图，不得改成 Public。
10. 首页若有用户提供的布局参考图，先做同尺寸截图对照；新视频只替换唯一 featured 主卡，视频、工具和完整文字攻略继续保持独立版块。
11. 只有用户明确启用 R2/Stream 后才创建 bucket 或可能计费的资源。R2 未启用时可以完成本地 HLS、页面、SEO 和播放验收，但不得提交会让 production 媒体 404 的版本。
12. Pages 随 Git 上传大体积 HLS 时，部署记录出现不代表媒体已传播完成。本次 157 MB 媒体约等待 5 分钟；必须同时验证部署专属域名和生产主域名上的页面、缩略图、manifest、init、首个分片及正确 MIME，之后再进行真实播放验收。
