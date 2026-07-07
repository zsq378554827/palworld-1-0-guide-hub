# 项目 SOP

更新时间：2026-07-07

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

