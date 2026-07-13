# 第一周 SEO 数据基线

采集时间：2026-07-13（Asia/Shanghai）

站点：<https://palworld-1-0-guide-hub.pages.dev/>

目的：固定 T01 口径，后续周报沿用相同时间窗和来源。

## Google Search Console

Search Performance 当前有数据日期为 2026-07-07 至 2026-07-10；站点很新，虽然界面选择“过去 3 个月”，实际只有四天数据。

| 指标 | 数值 |
| --- | ---: |
| 点击 | 10 |
| 曝光 | 217 |
| CTR | 4.6% |
| 平均排名 | 8.4 |

页面：

| 页面 | 点击 | 曝光 | CTR | 平均排名 |
| --- | ---: | ---: | ---: | ---: |
| 首页 | 8 | 119 | 6.72% | 8.61 |
| Performance Settings | 2 | 99 | 2.02% | 8.23 |

主要查询：`palworld 1.0 guide` 获得 4 点击、57 曝光、7.02% CTR、平均排名 9.28。其余已出现查询包括 `laggy`、`wiki`、`patch note`、`performance`，样本仍很小。

设备：桌面端 6 点击 / 157 曝光；移动端 4 点击 / 59 曝光；平板 0 点击 / 1 曝光。主要国家为美国、德国、葡萄牙、加拿大、印度、巴西和瑞典。

原始导出保存在 [`baseline/gsc/`](./baseline/gsc/)；包含查询、网页、国家/地区、设备、搜索结果呈现、过滤器和每日图表 CSV。

## Cloudflare Web Analytics

口径：过去 7 天、GMT+8、排除机器人。

| 指标 | 数值 |
| --- | ---: |
| Visits | 47 |
| Pageviews | 105 |
| Page load time | 588ms |
| LCP 良好占比 | 99% |
| LCP P50 / P75 / P90 | 572ms / 700ms / 1000ms |
| INP 良好占比 | 100% |
| CLS 良好占比 | 100% |

来源：Direct 31，Google 16。访问路径前五为：首页 26、Fast Early-Game 文字攻略 8、Level 8 Worker Pals 视频页 5、Performance Settings 2、Server Setup 1。

生产域名记录 41 visits，Cloudflare 预览部署域名记录 6 visits；因此这 6 次预览/QA 访问不能视为真实外部流量。设备为桌面 39、移动 8；主要国家为美国 31、加拿大 8，其余国家 1–2。

## 基线判断

- Google 已开始对首页和 Performance Settings 做第一页附近的初始测试，当前优先级应是稳定抓取、提高查询匹配和扩大高质量页面覆盖，而不是上线广告。
- 性能指标健康，不是第一周瓶颈。
- Cloudflare 总 visits 包含 6 次预览环境访问，后续周报必须继续拆分 hostname 和 referrer，避免把 QA 流量算成自然增长。
