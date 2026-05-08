export const productProfile = {
  "repo": "camera-security-ocr-server",
  "title": "カメラ・防犯・OCR記録サーバー",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 58,
  "tier": "P3",
  "score": 52,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "タイムラプス、人感撮影、郵便物OCR、作業机ログを扱う。",
  "problem": "撮影結果やOCRログが単発ファイルで終わりやすい。",
  "differentiation": "日付、場所、検出内容を自動でカード化する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
