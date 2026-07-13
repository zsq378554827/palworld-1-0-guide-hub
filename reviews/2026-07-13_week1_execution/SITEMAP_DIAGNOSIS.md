# Sitemap 诊断与修复记录

检查时间：2026-07-13

对应任务：T02–T04

## GSC 现象

- 已提交：`https://palworld-1-0-guide-hub.pages.dev/sitemap.xml`
- GSC 详情页显示“无法读取此站点地图”，发现网页数为 0；后台没有提供更具体的 HTTP 或 XML 错误。

## 站点端检查

| 检查项 | 结果 |
| --- | --- |
| 普通 GET | HTTP/2 200，`Content-Type: application/xml` |
| HEAD | HTTP/2 200 |
| Googlebot UA GET | HTTP/2 200，响应体与普通请求一致 |
| XML 解析 | `xmllint --noout` 通过 |
| URL 数量 | 30 个 canonical 页面 |
| URL/Canonical | 30/30 均为 200，页面 canonical 与 sitemap URL 一致 |
| robots.txt | 200，声明标准 sitemap |
| IPv4 / IPv6 | A 与 AAAA 均可解析 |
| 重定向 | sitemap 本身无重定向 |

结论：未发现站点端可复现的抓取故障。GSC 状态更可能是新站首次处理延迟或历史失败状态，而不是当前 XML、响应头、robots、canonical、UA 或 IP 协议问题。

## 五个代表 URL 的 GSC Inspection

| URL | 2026-07-13 状态 |
| --- | --- |
| 首页 | 已收录到 Google |
| Performance Settings | 已收录到 Google |
| Fast Early-Game 文字攻略 | 尚未收录；Google 无法识别此网址 |
| Level 8 Worker Pals 视频页 | 尚未收录；Google 无法识别此网址 |
| Server Setup | 尚未收录；Google 无法识别此网址 |

该结果与 sitemap “发现网页 0”一致：Google 能通过其他路径识别首页和 Performance 页，但 sitemap 尚未把其余 URL 纳入发现流程。部署并重新提交后，除复查 sitemap 外，还应对新视频/文字页请求索引。

## 本次可操作修复

- 标准 sitemap 为每个 URL 增加准确 `lastmod`，继续只输出 canonical 页面。
- 增加 XML 字符转义和一小时公开缓存头，保持稳定、可解析响应。
- 新增独立 `video-sitemap.xml`，robots 同时声明两个 sitemap。
- 部署后重新验证 GET、HEAD、Googlebot、XML、全部 URL，再在 GSC 重新提交。

## T04 验收规则

只有 GSC 状态变为“成功”且发现网页数大于 0，才把 T04 标为完成。若重新提交后仍处于处理中，应记录提交时间并继续按 24 小时节奏复查，不能把“已提交”误写成“已成功抓取”。
