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
2. 用 Skill 的 `build_web_hls.py` 生成 H.264/AAC HLS；确保每个静态文件低于 Cloudflare Pages 限制并完整解码。
3. 将 HLS 放入 `public/media/<video-slug>/`，在 `guides.ts` 写入 stream URL、时长、缩略图和章节。
4. 使用 `GuideVideo.astro` 的原生播放器；无需登录场景保持 0 iframe，不公开 YouTube 备份链接。
5. 输出完整英文图文攻略、当前版本验证、source disclosure、VideoObject `contentUrl`、OG 和 sitemap。
6. `npm run build` 后检查 390px/1280px、旧文章回归、title/meta、canonical 和最大媒体文件。
7. push `main`，等待 Cloudflare production；未登录线上浏览器必须证明 `currentTime` 增加并测试一个章节跳转。
