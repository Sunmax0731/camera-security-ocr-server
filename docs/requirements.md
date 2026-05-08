# 要件定義

- Repo: `camera-security-ocr-server`
- Domain: IoT
- Rank: 58 / P3 / Score 52
- Idea No: 9
- アイデア名: カメラ・防犯・OCR記録サーバー
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
タイムラプス、人感撮影、郵便物OCR、作業机ログを扱う。

## 課題
撮影結果やOCRログが単発ファイルで終わりやすい。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
