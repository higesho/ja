# 日本語化プロジェクト

英語でしか遊べなかったコンピューター RPG を日本語で遊べるようにする、非公式のファンメイド日本語化プロジェクトのトップページです。

- サイト: https://higesho.github.io/ja/
- `nav.js`: 全サイト（シリーズと単体の作品）のページの上の帯（ヘッダー）を作る共通スクリプト。作品を足すときはここの一覧に足します。

各ページには `<body>` のすぐ後ろに次の 2 行を置きます。

```html
<header class="jpn" id="jpn"><div class="jpn-band"><a class="jpn-home" href="https://higesho.github.io/ja/">日本語化プロジェクト</a></div></header>
<script src="https://higesho.github.io/ja/nav.js"></script>
```
