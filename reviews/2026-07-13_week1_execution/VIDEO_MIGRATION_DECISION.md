# T09 视频托管迁移决策

决策日期：2026-07-13

当前规模：3 条视频、总时长 11 分 20 秒、Git 跟踪媒体约 465.7MB / 120 个文件。

## 决策

选择 **Cloudflare R2 Standard + 自有媒体子域名 + Cloudflare Cache** 作为第四条视频前的正式迁移方案。

当前三条视频暂时继续由 Pages 提供，立即冻结继续把新视频写入 Git；等用户确认自有域名和可能产生费用的账户操作后，再执行 R2 创建与迁移。本次只确定方案，不创建付费资源、不购买域名。

## 三种方案比较

| 维度 | R2 Standard + CDN | Cloudflare Stream | 继续 Pages |
| --- | --- | --- | --- |
| 当前预计费用 | 当前约 0.47GB，处于 R2 每月 10GB Standard 免费额度内；另有操作次数额度，公网 egress 免费 | 存储按每 1,000 分钟 $5 预付，播放按每 1,000 分钟 $1；当前也需先购买存储额度 | 静态资源请求免费，当前直接费用为 0 |
| HLS | 可原样保存现有 manifest 和 fMP4 分片；转码仍由本地 FFmpeg 负责 | 上传源视频后自动编码并提供 HLS/DASH/播放器 | 可原样播放，但媒体与代码、部署耦合 |
| 匿名播放 | 可以 | 可以 | 已验证可以 |
| 缓存 | 自有域名可接 Cache Rule 和 Smart Tiered Cache；`r2.dev` 只用于开发 | 平台自动交付 | Pages 静态资产自动走 CDN/Tiered Cache |
| 运维 | 需要上传脚本、MIME、CORS、缓存规则和版本化路径 | 最省转码和播放器运维，带视频分析 | 代码最少，但仓库和每次部署持续膨胀 |
| 扩展风险 | 需要自有域名；R2 本身不做多码率转码 | 流量上涨时按观看分钟线性付费 | Pages 单文件上限 25MiB、免费站点 20,000 文件；更大的问题是 Git 体积和重复部署 |
| 回滚 | 切回原 Pages 媒体基地址即可 | 需要保留源文件或旧 HLS 才能快速回滚 | 无迁移回滚问题，但不能长期扩量 |

官方依据：Cloudflare R2 Standard 当前为 $0.015/GB-month、Class A $4.50/百万次、Class B $0.36/百万次，并提供每月 10GB、100 万 Class A、1,000 万 Class B 免费额度和免费公网 egress；免费额度仅适用于 Standard。详见 [R2 pricing](https://developers.cloudflare.com/r2/pricing/)。Stream 当前按 $5/1,000 存储分钟和 $1/1,000 交付分钟计费，编码与带宽包含在内，详见 [Stream pricing](https://developers.cloudflare.com/stream/pricing/)。Pages 当前单个静态资产上限为 25MiB，免费站点最多 20,000 个文件，详见 [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)。R2 的 `r2.dev` 地址面向开发并有限流，正式流量应使用自有域名；自有域名可启用缓存，详见 [R2 public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/) 和 [R2 caching](https://developers.cloudflare.com/cache/interaction-cloudflare-products/r2/)。

## 为什么不选 Stream

Stream 的自动多码率、转码和分析能力更完整，但本站已经有可用的 HLS 生产流程，当前视频总时长和流量都很小。此时为了省掉本地转码而引入最低 $5 存储购买及按播放分钟计费，不如先用 R2 承接现有文件；若以后月播放分钟明显增加、移动端带宽适配成为问题，或视频发布频率提高到本地转码成为瓶颈，再重新评估 Stream。

## 为什么不继续 Pages

现有分片都低于 Pages 25MiB 单文件上限，短期能继续工作；但 3 条短视频已经让 Git 跟踪媒体达到约 465.7MB。每增加视频都会扩大克隆、构建、上传和回滚负担，代码版本与媒体发布也无法独立。Pages 适合保留 HTML、CSS、JS、图片和极少量兜底媒体，不适合作为继续增长的视频库。

## 执行清单

1. 用户确认并接入自有域名；建议正式站点使用主域名，媒体使用 `media.<domain>`。
2. 在同一 Cloudflare 账户创建 `palworld-guide-media` R2 Standard bucket；不开 Infrequent Access。
3. 按现有 `/media/<video-slug>/...` 键名上传三条 HLS，写入正确 MIME：`.m3u8` 为 Apple HLS，`.m4s` 为 ISO segment。
4. 配置只允许站点域名的 GET/HEAD CORS；连接媒体自定义域名，关闭 `r2.dev` 正式访问。
5. 为 manifest 和分片配置缓存；分片使用版本化不可变路径和长 TTL，manifest 使用较短 TTL；启用 Smart Tiered Cache。
6. 代码加入 `PUBLIC_MEDIA_BASE_URL`，但保留相对 `/media/` 作为回滚默认值。
7. 双源验收三条视频：manifest、首尾分片、时长、分辨率、章节跳转、匿名播放、Range/CORS、移动端和 video sitemap。
8. 线上稳定观察 7 天后，才在单独提交中从 Git 移除旧媒体；迁移前后都保留离线源文件和校验清单。

## 回滚方法

- 七天观察期内不删除 Pages 中的旧媒体。
- 任一 R2/CORS/缓存问题出现时，把 `PUBLIC_MEDIA_BASE_URL` 恢复为空或 Pages 地址并重新部署；播放器和数据结构不需要改动。
- 若已经从 Git 主分支移除媒体，使用迁移前 release tag 恢复对应 `public/media/`，不要重编码后直接覆盖同一路径。

## 重新评估 Stream 的触发线

满足任一条件时重开决策：每月视频发布达到 8 条以上；本地多码率转码成为稳定瓶颈；移动端缓冲数据明显恶化；需要统一视频分析、自动字幕、签名访问或直播；团队愿意用可预测的观看分钟费用换取更低运维。
