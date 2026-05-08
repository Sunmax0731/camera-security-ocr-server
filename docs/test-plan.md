# テスト計画

- Repo: `camera-security-ocr-server`
- Domain: IoT
- Rank: 58 / P3 / Score 52
- Idea No: 9
- アイデア名: カメラ・防犯・OCR記録サーバー
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\camera-security-ocr-server`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/camera-security-ocr-server-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
