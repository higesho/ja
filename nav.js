/*
 * 日本語化プロジェクト 共通ヘッダー
 * 全サイト（シリーズ・単体の作品）のページの上の帯は、このファイル 1 つで作る。
 * 作品を足すときは、下の SERIES / SINGLES に 1 行足すだけでよい（各ページは書き換えなくてよい）。
 *
 * 各ページには次の 2 行を置く（<body> のすぐ後ろ）:
 *   <header class="jpn" id="jpn"><div class="jpn-band"><a class="jpn-home" href="https://higesho.github.io/ja/">日本語化プロジェクト</a></div></header>
 *   <script src="https://higesho.github.io/ja/nav.js"></script>
 *
 * 表示のきまり:
 *   - シリーズのページ（シリーズのトップと各作品）: そのシリーズの作品だけを並べる
 *   - 単体の作品のページ: その作品のページと、ほかのシリーズ・単体の作品を並べる
 *   - 日本語化プロジェクトのトップ: すべてのシリーズと単体の作品を並べる
 * どのページかは、ページのアドレスから自動で決める。
 */
(function () {
  var G = 'https://higesho.github.io/';
  var TOP = G + 'ja/';

  /* シリーズ: base はシリーズのトップ。titles の URL は base からの相対か、別のサイトなら絶対 */
  var SERIES = [
    { name: 'ウルティマ', label: 'ウルティマ シリーズ', base: G + 'ultima-ja/', repo: 'ultima-ja', titles: [
      ['akalabeth/', 'ウルティマ0 アカラベス'], ['ultima1/', 'ウルティマI'], ['ultima2/', 'ウルティマII'],
      ['ultima3/', 'ウルティマIII'], ['ultima4/', 'ウルティマIV'], ['ultima5/', 'ウルティマV'], ['ultima6/', 'ウルティマVI'],
      ['ultima7/', 'ウルティマVII'], ['ultima7si/', 'サーペントアイル'], ['ultima8/', 'ウルティマVIII'], ['ultima9/', 'ウルティマIX'],
      ['martian/', 'マーシャン・ドリームズ'], ['savage/', 'サベージ・エンパイア'], ['underworld/', 'アンダーワールド']] },
    { name: 'マイト・アンド・マジック', label: 'マイト・アンド・マジック シリーズ', base: G + 'mm-ja/', repo: 'mm-ja', titles: [
      ['mm1/', '第1部'], ['mm2/', '2'], ['mm3/', '3'], ['mm45/', '4・5'], ['swords/', 'ソード'],
      ['mm6/', '6'], ['mm7/', '7'], ['mm8/', '8'], ['mm9/', '9']] },
    { name: 'ヒーローズ', label: 'ヒーローズ・オブ・マイト・アンド・マジック シリーズ', base: G + 'homm-ja/', repo: 'homm-ja', titles: [
      ['homm2/', 'ヒーローズ2'], ['homm3/', 'ヒーローズ3']] },
    { name: 'D&D', label: 'D&D シリーズ', base: G + 'dnd-ja/', repo: 'dnd-ja', titles: [
      ['iwd2/', 'アイスウィンド・デイル II'], ['romd/', 'プール・オブ・レイディアンス'], ['eob1/', 'アイ・オブ・ザ・ビホルダー'],
      ['eob2/', 'アイ・オブ・ザ・ビホルダー II'], ['eob3/', 'アイ・オブ・ザ・ビホルダー III'], ['poolrad/', 'プール・オブ・レイディアンス（1988）'],
      ['curse/', 'カース・オブ・ジ・アジュール・ボンズ'], ['secret/', 'シークレット・オブ・ザ・シルバー・ブレイズ'],
      ['darkness/', 'プールズ・オブ・ダークネス'], ['gateway/', 'ゲートウェイ・トゥ・ザ・サヴェッジ・フロンティア'],
      ['treasures/', 'トレジャーズ・オブ・ザ・サヴェッジ・フロンティア'], ['hillsfar/', 'ヒルズファー'],
      ['champions/', 'チャンピオンズ・オブ・クリン'], ['deathknights/', 'デス・ナイツ・オブ・クリン'],
      ['darkqueen/', 'ダーク・クイーン・オブ・クリン'], ['darksun/', 'ダークサン'], ['darksun2/', 'ダークサン２'],
      ['dungeonhack/', 'ダンジョン・ハック'], ['menzoberranzan/', 'メンゾベランザン'], ['strahd/', 'ストラドズ・ポゼッション'], ['prophet/', 'ストーン・プロフェット'], ['shadowsorcerer/', 'シャドウ・ソーサラー'],
      ['dragonsofflame/', 'ドラゴンズ・オブ・フレイム'], ['heroesofthelance/', 'ヒーローズ・オブ・ザ・ランス'],
      ['warofthelance/', 'ウォー・オブ・ザ・ランス'], ['dragonshard/', 'ドラゴンシャード'], ['toee/', 'テンプル・オブ・エレメンタル・イーヴル'], ['alqadim/', 'アル・カディム ～ジーニーの呪い～']] },
    { name: 'ウィザードリィ', label: 'ウィザードリィ シリーズ', base: G + 'wiz-ja/', repo: 'wiz-ja', titles: [
      ['wiz6/', 'ウィザードリィ6'], ['wiz7/', 'ウィザードリィ7'], ['wiz8/', 'ウィザードリィ8']] },
    { name: 'ランズ・オブ・ロア', label: 'ランズ・オブ・ロア シリーズ', base: G + 'lol-ja/', repo: 'lol-ja', titles: [
      ['lol1/', '第1作'], ['lol2/', '第2作'], ['lol3/', '第3作']] },
    { name: 'アルカニア', label: 'レルムズ・オブ・アルカニア シリーズ', base: G + 'arkania-ja/', repo: 'arkania-ja', titles: [
      ['roa1/', '運命の剣'], ['roa2/', 'スタートレイル']] },
    { name: 'アヴァーナム・アヴァドン', label: 'スパイダーウェブ作品', base: G + 'spiderweb-ja/', repo: 'spiderweb-ja', titles: [
      [G + 'avernum-efp-jp/', 'アヴァーナム', 'avernum-efp-jp'], [G + 'avernum2-cs-jp/', 'アヴァーナム2', 'avernum2-cs-jp'],
      [G + 'avernum3-rw-jp/', 'アヴァーナム3', 'avernum3-rw-jp'], [G + 'avernum4-jp/', 'アヴァーナム4', 'avernum4-jp'],
      [G + 'avernum5-jp/', 'アヴァーナム5', 'avernum5-jp'], [G + 'avernum6-jp/', 'アヴァーナム6', 'avernum6-jp'],
      [G + 'avadon-tbf-jp/', 'アヴァドン', 'avadon-tbf-jp'], [G + 'avadon2-jp/', 'アヴァドン2', 'avadon2-jp'],
      [G + 'avadon3-tw-jp/', 'アヴァドン3', 'avadon3-tw-jp']] }
  ];

  /* 単体の作品: pages はそのサイトの中のページ（あれば） */
  var SINGLES = [
    { name: 'アルカナム', base: G + 'arcanum-ja/', repo: 'arcanum-ja' },
    { name: 'ダンジョンロード', base: G + 'dungeonlords-ja/', repo: 'dungeonlords-ja' },
    { name: 'ウィザーズ＆ウォーリアーズ', base: G + 'wizards-warriors-ja/', repo: 'wizards-warriors-ja' },
    { name: 'グリモア', base: G + 'grimoire-ja/', repo: 'grimoire-ja',
      pages: [['', '日本語化パッチ'], ['wiki/', 'Wiki 翻訳'], ['wiki/all.html', '記事一覧']] },
    { name: 'デスロード・リローデッド', base: G + 'deathlord-relorded-jp/', repo: 'deathlord-relorded-jp',
      pages: [['', '日本語化パッチ'], ['guide.html', '遊び方ガイド']] },
    { name: 'ドラケンサング', base: G + 'drakensang-jp/', repo: 'drakensang-jp' },
    { name: '9th Dawn II', base: G + '9thDawnII-jpfix/', repo: '9thDawnII-jpfix' },
    { name: 'ドワーフ・フォートレス', base: G + 'df-ja/', repo: 'df-ja' }
  ];

  function abs(base, u) { return /^https?:/.test(u) ? u : base + u; }
  function path(u) {
    var p = u.replace(/^https?:\/\/[^\/]+/, '').replace(/[?#].*$/, '').replace(/index\.html?$/, '');
    try { p = decodeURI(p); } catch (e) {}
    return p.toLowerCase();
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function a(href, text, cls) {
    return '<a href="' + esc(href) + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + esc(text) + '</a>';
  }

  /* 今のページがどこに当たるか（いちばん長く一致するアドレス） */
  var here = path(location.href), best = null, bestLen = -1;
  function consider(u, info) {
    var p = path(u);
    var ok = p.charAt(p.length - 1) === '/' ? here.indexOf(p) === 0 : here === p;
    if (ok && p.length > bestLen) { best = info; bestLen = p.length; }
  }
  consider(TOP, { kind: 'top' });
  SERIES.forEach(function (s) {
    consider(s.base, { kind: 'series', s: s, t: null });
    s.titles.forEach(function (t) { consider(abs(s.base, t[0]), { kind: 'series', s: s, t: t }); });
  });
  SINGLES.forEach(function (x) {
    consider(x.base, { kind: 'single', x: x, p: null });
    (x.pages || []).forEach(function (pg) { consider(x.base + pg[0], { kind: 'single', x: x, p: pg }); });
  });
  if (!best) best = { kind: 'top' };

  var h = '<a class="jpn-home" href="' + TOP + '">日本語化プロジェクト</a>';
  if (best.kind === 'series') {
    var s = best.s;
    h += '<span class="jpn-sep">›</span>' + a(s.base, s.label, 'jpn-brand');
    h += '<nav class="jpn-nav">' + a(s.base, '作品一覧', best.t ? '' : 'here');
    s.titles.forEach(function (t) { h += a(abs(s.base, t[0]), t[1], best.t === t ? 'here' : ''); });
    h += a('https://github.com/higesho/' + s.repo, 'GitHub', 'jpn-gh') + '</nav>';
  } else {
    if (best.kind === 'single') {
      var x = best.x;
      h += '<span class="jpn-sep">›</span>' + a(x.base, x.name, 'jpn-brand');
      h += '<nav class="jpn-nav">';
      (x.pages || []).forEach(function (pg) {
        var on = best.p === pg || (!best.p && pg[0] === '');
        h += a(x.base + pg[0], pg[1], on ? 'here' : '');
      });
      h += a('https://github.com/higesho/' + x.repo, 'GitHub', 'jpn-gh') + '</nav>';
    }
    /* トップと単体の作品: すべてのシリーズと（自分以外の）単体の作品 */
    h += '<nav class="jpn-nav jpn-others"><span class="jpn-label">シリーズ</span>';
    SERIES.forEach(function (s) { h += a(s.base, s.name, 'jpn-other'); });
    h += '<span class="jpn-label">単体</span>';
    SINGLES.forEach(function (x) { if (!best.x || best.x !== x) h += a(x.base, x.name, 'jpn-other'); });
    h += '</nav>';
  }

  var css =
    '.jpn{display:block;margin:0;background:#000;border-bottom:2px solid #3a3aff;color:#e8e8f0;' +
    'font-family:"Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic UI","Meiryo",sans-serif;font-size:15px;line-height:1.6;text-align:left}' +
    '.jpn *{box-sizing:border-box}' +
    '.jpn .jpn-band{max-width:1040px;margin:0 auto;padding:10px 16px;display:flex;flex-wrap:wrap;align-items:center;gap:6px 18px}' +
    '.jpn a{text-decoration:none;background:none;border:0}' +
    '.jpn .jpn-home{color:#a0a0b8;font-size:13px;letter-spacing:.03em}' +
    '.jpn .jpn-home:hover{color:#fff}' +
    '.jpn .jpn-sep{color:#55557a;margin:0 -10px}' +
    '.jpn .jpn-brand{color:#55ffff;font-weight:bold;font-size:17px;letter-spacing:.05em}' +
    '.jpn .jpn-brand:hover{color:#fff}' +
    '.jpn .jpn-nav{display:flex;flex-wrap:wrap;align-items:center;gap:4px 16px;margin:0;padding:0}' +
    '.jpn .jpn-nav a{color:#a0a0b8}' +
    '.jpn .jpn-nav a:hover,.jpn .jpn-nav a.here{color:#e8e8f0}' +
    '.jpn .jpn-nav a.here{box-shadow:inset 0 -2px 0 #55ffff}' +
    '.jpn .jpn-nav a.jpn-gh{color:#7a7a96}' +
    '.jpn .jpn-others{flex-basis:100%;gap:4px 14px;font-size:14px}' +
    '.jpn .jpn-nav a.jpn-other{color:#ffd75a;opacity:.85}' +
    '.jpn .jpn-nav a.jpn-other:hover{opacity:1;color:#fff}' +
    '.jpn .jpn-label{color:#6a6a88;font-size:12px;border:1px solid #2a2a5a;border-radius:3px;padding:0 6px}';
  if (!document.getElementById('jpn-style')) {
    var st = document.createElement('style');
    st.id = 'jpn-style';
    st.textContent = css;
    (document.head || document.documentElement).appendChild(st);
  }
  var el = document.getElementById('jpn');
  if (!el) {
    el = document.createElement('header');
    el.id = 'jpn';
    document.body.insertBefore(el, document.body.firstChild);
  }
  el.className = 'jpn';
  el.innerHTML = '<div class="jpn-band">' + h + '</div>';
})();
