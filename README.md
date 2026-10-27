# スラッシュ — 紹介ページ

スラッシュ（iPhone 向けのスライドパズル）の紹介ページ。HTML / CSS / Vanilla JS だけの静的サイトで、GitHub Pages 等にそのままデプロイできる。

パズルちゃんの紹介ページ（`tsudatech/puzzle_chan_web`）の構成を踏襲し、配色をアプリのカラートークン（`slash/Theme/Theme.swift` の `Tok`・`Vivid`）に合わせてある。スクリーンショットの節は置いていない。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | セマンティック HTML。各テキストは `data-i18n-key` で多言語化対応 |
| `styles.css` | 配色・レイアウト・レスポンシブ。地は `#EEF0F5`、アクセントは `#2F54EB` |
| `script.js` | 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax |
| `images/app-icon.png` | hero と favicon に使うアプリアイコン（1024×1024 を 512 に縮小） |

## 節

ヘッダ → hero（アイコン・キャッチコピー） → 遊び方（3ステップ） → 3つの遊び方（フリープレイ・CPU対戦・ミッション） → 主な機能 → ダウンロード → プライバシーポリシー → お問い合わせ。

遊び方の絵（ブロック・2 CHAIN・ゲージ）は画像を使わず CSS で描いている。ブロックはアプリと同じ5色・角丸・下の濃い影・上のツヤ。

## 文言を変えるとき

- 日本語は `index.html` の中身と `script.js` の `translations.ja` の両方にある（ページを開いた直後は HTML の中身、言語を切りかえると `translations` が使われる）。両方を直すこと。
- 英語の呼び名（Free Play・60-Sec Attack・Color Order・VS CPU・Missions・Pins など）は、アプリの `slash/en.lproj/Localizable.strings` に合わせてある。
- 数（追加ルール8つ・実績28個・ミッション30問・CPU 10人・Lv.1〜30・CPU対戦30秒）はアプリの `Content/GameContent.swift` の値。アプリ側を変えたらここも直す。
- 広告（AdMob）の記述は、プライバシーポリシーの「収集する情報」「外部との通信」「広告について」「お子さまの利用について」にある。アプリの広告まわりを変えたら、ここも直す。

## 確認

`?lang=ja` / `?lang=en` で言語を指定して開ける。
# slash_web
