# 第一周技术 SEO 验收

验收时间：2026-07-13

范围：T03、T05–T08，本地生产构建与真实浏览器交互。

## 总结

| 项目 | 结果 |
| --- | --- |
| `npm run build` | 通过；Astro 报告 31 个站点页面，另含验证 HTML 与 XML/text 端点 |
| 正式 HTML 页面 | 31 个均恰好 1 个 H1、canonical 完整 |
| Title | 31/31 ≤ 60 字符；无重复 |
| Meta description | 31/31 ≤ 160 字符；无重复 |
| 内部链接/资源 | 32 个 HTML 文件静态扫描，无 broken internal reference |
| 标准 sitemap | XML 通过；30 个 canonical URL；无正式 canonical 漏项 |
| Video sitemap | XML 通过；3 个视频条目 |
| 聚合页 schema | 首页 WebSite；Guides/Server/Videos/Palworld/Base Building 为 CollectionPage + ItemList |
| 视频 schema | 每页 1 个 VideoObject；Clip 数分别为 8、12、7 |

## 搜索验收

真实浏览器打开 `/guides/?q=` 并执行客户端过滤：

| 查询 | 返回 | 验收点 |
| --- | ---: | --- |
| `performance` | 2 | Performance Settings 为首个结果 |
| `server` | 7 | 返回 setup/settings/multiplayer/checklist 等服务器内容 |
| `worker pal` | 4 | 同时返回 2 个文字攻略和 2 个视频页 |
| `mods` | 3 | 返回 MOD Guide、FAQ/Checklist 相关内容 |
| `sunreach` | 3 | 返回 Sunreach、Patch Notes、FAQ |
| `early-game` | 2 | 同时返回文字与视频版本 |
| `zzznomatch` | 0 | 显示无结果提示和 Clear search |

Header 搜索框用键盘输入 `server setup` 并按 Enter 后，URL 正确变为 `/guides/?q=server+setup`，返回唯一 Server Setup Guide。以上页面均无横向溢出；移动端 CSS 将 Header 搜索恢复为全宽，并把搜索表单切为单列。

## 视频章节验收

真实浏览器打开 Level 8 Worker 视频的 `?t=130` Clip URL：播放器 `readyState=4`，时长 191.48 秒、1920×1080，自动定位到 130 秒；对应 Clip 为 Orserk，`startOffset=130`、`endOffset=141`，页面无横向溢出。章节按钮同步更新 `?t=` URL，Google Clip URL 与访客实际行为一致。

## Title / Meta 全量清单

下表长度按构建后的 HTML 字符数统计；实体转义在浏览器中显示为正常字符。

| URL | Title | Description | 最终 Title |
| --- | ---: | ---: | --- |
| `/` | 57 | 139 | Palworld 1.0 Guides, Videos, Checklists & Server Help |
| `/about/` | 56 | 141 | About Palworld 1.0 Guide Hub and Our Editorial Standards |
| `/base-building/` | 49 | 143 | Palworld 1.0 Base Building Guide \| Palworld Guide |
| `/disclaimer/` | 27 | 119 | Disclaimer \| Palworld Guide |
| `/faq/` | 49 | 144 | Palworld 1.0 FAQ: Saves, MODs, Pals & Servers |
| `/guides/` | 36 | 135 | Palworld 1.0 Guides \| Palworld Guide |
| `/guides/palworld-1-0-beginner-guide/` | 44 | 157 | Palworld 1.0 Beginner Guide \| Palworld Guide |
| `/guides/palworld-1-0-faq/` | 33 | 148 | Palworld 1.0 FAQ \| Palworld Guide |
| `/guides/palworld-1-0-fast-early-game-start-route/` | 57 | 145 | Palworld 1.0 Fast Early-Game Start Route \| Palworld Guide |
| `/guides/palworld-1-0-first-hour-checklist/` | 50 | 119 | Palworld 1.0 First Hour Checklist \| Palworld Guide |
| `/guides/palworld-1-0-level-8-worker-pals-locations/` | 52 | 153 | Palworld 1.0 Level 8 Worker Pals and Locations Guide |
| `/guides/palworld-1-0-mods-warning-compatibility-guide/` | 49 | 149 | Palworld 1.0 MODs Warning and Compatibility Guide |
| `/guides/palworld-1-0-performance-settings/` | 50 | 138 | Palworld 1.0 Performance Settings \| Palworld Guide |
| `/guides/palworld-1-0-returning-player-guide/` | 52 | 151 | Palworld 1.0 Returning Player Guide \| Palworld Guide |
| `/guides/palworld-1-0-ultimate-worker-pal-build/` | 44 | 147 | Palworld 1.0 Ultimate Worker Pal Build Guide |
| `/guides/should-you-start-a-new-save-in-palworld-1-0/` | 44 | 153 | Should You Start a New Save in Palworld 1.0? |
| `/palworld-1-0/` | 33 | 130 | Palworld 1.0 Hub \| Palworld Guide |
| `/palworld-1-0/palworld-1-0-new-pals-overview/` | 47 | 150 | Palworld 1.0 New Pals Overview \| Palworld Guide |
| `/palworld-1-0/palworld-1-0-patch-notes-explained/` | 51 | 135 | Palworld 1.0 Patch Notes Explained \| Palworld Guide |
| `/palworld-1-0/palworld-1-0-release-date-and-what-to-expect/` | 44 | 135 | Palworld 1.0 Release Date and What to Expect |
| `/palworld-1-0/palworld-1-0-sunreach-guide/` | 44 | 147 | Palworld 1.0 Sunreach Guide \| Palworld Guide |
| `/palworld-1-0/palworld-1-0-world-tree-guide/` | 46 | 156 | Palworld 1.0 World Tree Guide \| Palworld Guide |
| `/server/` | 43 | 136 | Palworld 1.0 Server Guides \| Palworld Guide |
| `/server/palworld-1-0-best-server-settings/` | 50 | 151 | Palworld 1.0 Best Server Settings \| Palworld Guide |
| `/server/palworld-1-0-multiplayer-guide/` | 47 | 144 | Palworld 1.0 Multiplayer Guide \| Palworld Guide |
| `/server/palworld-1-0-server-owner-checklist/` | 52 | 140 | Palworld 1.0 Server Owner Checklist \| Palworld Guide |
| `/server/palworld-1-0-server-setup-guide/` | 48 | 158 | Palworld 1.0 Server Setup Guide \| Palworld Guide |
| `/videos/` | 42 | 149 | Palworld 1.0 Video Guides \| Palworld Guide |
| `/videos/palworld-1-0-fast-early-game-route/` | 46 | 146 | Palworld 1.0 Fast Early-Game Start Route Video |
| `/videos/palworld-1-0-level-8-worker-pals-locations/` | 54 | 154 | Palworld 1.0 Level 8 Worker Pals & Locations Video |
| `/videos/palworld-1-0-ultimate-worker-pal-build/` | 44 | 150 | Palworld 1.0 Ultimate Worker Pal Build Video |

## 尚未完成的外部验收

本地和站点端技术项已通过；T04 仍必须等待本次部署并重新提交后，确认 GSC 状态为“成功”且发现网页数大于 0。Google 的处理状态不能由本地构建代替。
