# リリース前チェックリスト

- Repo: `camera-security-ocr-server`
- Domain: IoT
- Rank: 58 / P3 / Score 52
- Idea No: 9
- アイデア名: カメラ・防犯・OCR記録サーバー
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

- [x] `npm test`で代表suiteを検証する。
- [x] Web smoke相当で非blank、主要要素、主要操作を確認する。
- [x] docs ZIPを生成する。
- [x] QCDS全観点A-以上、手動未実施上限S-を守る。
- [x] GitHub prerelease `v0.1.0-alpha.1` を `--prerelease --latest=false` で作成する。
- [x] asset 3件を添付する。
- [x] API確認後にrelease evidenceを更新し、docs ZIP再生成、tag push、asset再アップロードを行う。
