# camera-security-ocr-server

カメラ・防犯・OCR記録サーバー の closed alpha prototype。タイムラプス、人感撮影、郵便物OCR、作業机ログを扱う。

## Status

- Version: 0.1.0-alpha.1
- Rank: 58 / P3 / Score 52
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
