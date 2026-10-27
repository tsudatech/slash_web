// スラッシュ 紹介ページ
// 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax
// （パズルちゃんの紹介ページ tsudatech/puzzle_chan_web の script.js を踏襲）
//
// 訳文は、アプリの en.lproj/Localizable.strings にあるものはそれに合わせてある
// （Free Play・60-Sec Attack・Color Order・VS CPU など）。ここで訳し直すとアプリと呼び名が食い違う。

const translations = {
  ja: {
    page_title: "スラッシュ - スライドして、圧縮して、連鎖させるパズル",
    meta_description: "スラッシュは、スワイプで盤面のブロックを一斉にスライドさせ、同じ色を3つくっつけて潰す iPhone 向けのパズルゲームです。連鎖やフィーバーで大量に潰す爽快感。フリープレイ・CPU対戦・ミッションの3つの遊び方があります。ログインは不要で、記録は端末の中に残ります。",
    app_name: "スラッシュ",
    nav_howto: "遊び方",
    nav_modes: "モード",
    nav_features: "機能",
    nav_download: "ダウンロード",
    nav_privacy: "プライバシー",
    nav_contact: "お問い合わせ",
    hero_title_line1: "スライドして、",
    hero_title_line2: "圧縮して、",
    hero_title_line3: "連鎖させる。",
    hero_description: "上下左右にスワイプすると、盤面のブロックが一斉にその方向へスライド。同じ色が3つくっつくと潰れて、すき間に滑り込んだブロックがまた揃えば連鎖します。たまったゲージでフィーバーに入れば、ブロックが2色だけになって一気に潰せます。",
    hero_cta_download: "ダウンロード",
    hero_cta_howto: "遊び方を見る",
    howto_title: "遊び方",
    howto_lead: "操作はスワイプだけ。矢印ボタンでも遊べます。",
    step_slide_title: "スワイプで全部スライド",
    step_slide_text: "スワイプした方向へ、すべてのブロックが一斉に滑ります。グレーの岩は動きません。スライドするたびに、反対側の端から新しいブロックが入ってきます。",
    step_crush_title: "3つくっつくと潰れる",
    step_crush_text: "同じ色のブロックが縦か横に3つ以上つながると、潰れて消えます。5個以上まとめて潰すと「爆弾」、一直線に4個で「ライン」の特殊ブロックが残ります。",
    step_chain_title: "連鎖してフィーバー",
    step_chain_text: "潰れたすき間にブロックがさらに滑って、また揃うと連鎖。潰すほどゲージが溜まり、満タンでフィーバー。しばらくブロックが2色だけになり、大量に潰せます。",
    modes_title: "3つの遊び方",
    modes_lead: "気分に合わせて、じっくりでも、手早くでも。",
    mode_free_title: "フリープレイ",
    mode_free_text: "自己ベストをのばす遊び方。4つのモードから選べます。",
    mode_endless_name: "エンドレス",
    mode_endless_text: "終わりなし。気が済むまで潰し続ける",
    mode_time_name: "60秒アタック",
    mode_time_text: "制限時間内にどれだけ潰せるか",
    mode_moves_name: "30手チャレンジ",
    mode_moves_text: "決まった手数でどれだけ潰せるか",
    mode_order_name: "お題カラー",
    mode_order_text: "自分で消せるのはお題の色だけ。ほかの色は連鎖でなら消える",
    mode_cpu_title: "CPU対戦",
    mode_cpu_text: "30秒でCPUと点数を競います。連鎖したり大きく潰したりすると、相手の盤面に岩を送れます。相手はLv.1のポンからLv.10のノクスまで10人。勝つと次のレベルがひらきます。Lv.10に勝つと、10人がひと回りしてさらに強くなるLv.11〜30も遊べます。",
    mode_mission_title: "ミッション",
    mode_mission_text: "「6手以内で10個潰す」のようなお題を、決められた手数でクリアします。初級・中級・上級で全30問。少ない手数でクリアするほど、星が増えます（最大★3）。",
    features_title: "主な機能",
    feature_rules_title: "考える要素を足せる",
    feature_rules_text: "「次に入るブロックを見せる」「ピン止め」「コンボ倍率」など8つの追加ルールを、設定から自由にオン・オフできます。",
    feature_awards_title: "実績とコイン",
    feature_awards_text: "28個の実績を達成するとコインがもらえます。毎日のログインボーナスは7日目にブロックの形「ジェム」。",
    feature_shop_title: "見た目と音を着せかえ",
    feature_shop_text: "コインで、ブロックの形・盤面の色・効果音・BGMと交換できます。お金を払って買うものはありません。",
    feature_record_title: "遊んだ記録が残る",
    feature_record_text: "潰したブロックの合計、最大連鎖、プレイ時間、最近10回のスコアの推移、モードごとの自己ベスト。",
    feature_sound_title: "BGMと効果音",
    feature_sound_text: "メニュー・プレイ中・フィーバー中・最終ボス戦で曲が切り替わります。曲の種類ごとに音量も変えられます。",
    feature_look_title: "ダークモードと見やすさ",
    feature_look_text: "ライト・ダークを切り替えられます。色の見分けを助ける形のマークや、動きを減らす設定もあります。日本語と英語に対応。",
    feature_icloud_title: "iCloud に預けられる",
    feature_icloud_text: "記録やコインを iCloud に置いておけば、機種を変えても続きから遊べます。使うかどうかは選べます。",
    feature_privacy_title: "ログインはいりません",
    feature_privacy_text: "アカウントも登録もありません。遊んだ記録は端末の中に保存されます。",
    download_title: "ダウンロード",
    download_heading: "App Store で今すぐダウンロード",
    download_subheading: "iOS 17.0 以降に対応しています。",
    download_button: "App Store でダウンロード",
    download_requirements_title: "システム要件",
    download_requirements_ios: "iOS 17.0 以降",
    download_requirements_devices: "iPhone／縦向き",
    download_requirements_language: "日本語・英語",
    download_requirements_price: "無料ダウンロード",
    download_requirements_iap: "App内課金なし",
    privacy_title: "プライバシーポリシー",
    privacy_handling_heading: "個人情報の取り扱いについて",
    privacy_handling_text: "スラッシュ（以下「本アプリ」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本アプリはアカウント登録を必要とせず、開発者のサーバーを持ちません。",
    privacy_collect_heading: "収集する情報",
    privacy_collect_text: "本アプリが扱うのは、遊んだ記録（自己ベスト・通算の成績・CPU対戦の進み具合・ミッションの星・実績・プレイ時間）、コインとショップで手に入れた物、ログインボーナスの受け取り日、および各種設定だけで、これらはすべて端末の中に留まります。開発者が氏名・メールアドレス・位置情報を収集することはなく、開発者による利用状況の解析（アナリティクス）も行いません。ただし、広告の表示のために、下記「広告について」の情報が広告配信事業者によって収集されることがあります。",
    privacy_storage_heading: "情報の保存",
    privacy_storage_text: "遊んだ記録と設定は、端末内（UserDefaults）に保存されます。",
    privacy_icloud_heading: "iCloud について",
    privacy_icloud_text: "設定で iCloud バックアップを有効にした場合に限り、遊んだ記録・コイン・手に入れた物が iCloud のキーバリューストアに保存され、同じ Apple アカウントの端末間で同期されます。この同期は Apple の iCloud 上で完結し、開発者がその内容を参照することはできません。設定と、使っているブロックの形・盤面は同期されず、その端末にだけ残ります。",
    privacy_network_heading: "外部との通信",
    privacy_network_text: "本アプリは、開発者のサーバーへ利用者の記録を送信しません。開発者はサーバーを持っていません。ネットワークを使うのは、広告の配信（Google AdMob）と、利用者が iCloud バックアップを有効にした場合の Apple のサービスとの通信です。",
    privacy_ads_heading: "広告について",
    privacy_ads_text: "本アプリは、Google LLC の広告配信サービス「Google AdMob」を利用して広告を表示します。AdMob は広告の配信と効果の測定のために、端末の広告識別子（IDFA）、おおよその位置情報（IP アドレスから推定）、広告の表示やタップなどの利用状況、クラッシュなどの診断情報を収集することがあります。広告識別子は、iOS のトラッキング許可（App Tracking Transparency）で許可した場合にだけ使われ、許可しなくてもアプリはそのまま遊べます。許可はあとから iOS の「設定」→「プライバシーとセキュリティ」→「トラッキング」で変えられます。Google による情報の取り扱いは、Google のプライバシーポリシー（https://policies.google.com/privacy）をご覧ください。",
    privacy_delete_heading: "データの削除",
    privacy_delete_text: "アプリの設定の「データをリセット」、またはアプリの削除で、端末内に保存された記録と設定を消せます。iCloud バックアップを使っている場合は、iOS の設定から iCloud 上のデータを削除できます。",
    privacy_children_heading: "お子さまの利用について",
    privacy_children_text: "本アプリは年齢を問わず利用できます。開発者は個人情報を収集せず、アプリ内購入もありません。広告は、子どもにふさわしくない内容が表示されないよう、配信される広告の内容を一般向けに制限しています。",
    privacy_contact_heading: "お問い合わせ",
    privacy_contact_text_before: "プライバシーポリシーに関するご質問は、",
    privacy_contact_link: "お問い合わせ",
    privacy_contact_text_after: "までご連絡ください。",
    privacy_update: "最終更新: 2026 年 10 月",
    contact_title: "お問い合わせ",
    contact_intro: "アプリに関するご質問、バグ報告、機能要望などがございましたら、お気軽にお問い合わせください。",
    contact_email_heading: "📧 メール",
    contact_bug_heading: "🐛 バグ報告",
    contact_bug_text: "ブロックが動かなくなった、記録がおかしいといった不具合を見つけたら、上記メールアドレスまで詳細をお送りください。",
    contact_feature_heading: "💡 機能要望",
    contact_feature_text: "こんなルールやモードがほしい、といったご要望もお待ちしています。",
    footer_copyright: "© 2026 スラッシュ. All rights reserved.",
  },
  en: {
    page_title: "Slash - Slide it. Squash it. Chain it.",
    meta_description: "Slash is an iPhone puzzle game where one swipe slides every block on the board at once. Join 3 of the same color to crush them, then chain and hit Fever to crush tons at once. Play Free Play, VS CPU and Missions. No sign-in needed — your records stay on your device.",
    app_name: "Slash",
    nav_howto: "How to Play",
    nav_modes: "Modes",
    nav_features: "Features",
    nav_download: "Download",
    nav_privacy: "Privacy",
    nav_contact: "Contact",
    hero_title_line1: "Slide it.",
    hero_title_line2: "Squash it.",
    hero_title_line3: "Chain it.",
    hero_description: "Swipe up, down, left or right and every block on the board slides that way at once. Three of the same color touching get crushed, and blocks sliding into the gap can match again for a chain. Fill the gauge to enter Fever — blocks come in just 2 colors, so you can crush tons of them.",
    hero_cta_download: "Download",
    hero_cta_howto: "How to Play",
    howto_title: "How to Play",
    howto_lead: "Just swipe. You can also use the arrow buttons.",
    step_slide_title: "Swipe to slide everything",
    step_slide_text: "Every block slides the way you swipe, all at once. Gray rocks don't move. Each slide brings new blocks in from the opposite edge.",
    step_crush_title: "3 in a row get crushed",
    step_crush_text: "When 3 or more blocks of the same color line up vertically or horizontally, they're crushed. Crush 5 or more at once to leave a Bomb, or 4 in a straight line for a Line special block.",
    step_chain_title: "Chain into Fever",
    step_chain_text: "Blocks slide further into the gaps and match again for a chain. Crushing fills the gauge, and when it's full, Fever! For a while blocks come in just 2 colors, so you can crush tons of them.",
    modes_title: "Three ways to play",
    modes_lead: "Take it slow or play it fast — whatever you're in the mood for.",
    mode_free_title: "Free Play",
    mode_free_text: "Beat your own best. Choose from 4 modes.",
    mode_endless_name: "Endless",
    mode_endless_text: "No end. Crush as long as you like",
    mode_time_name: "60-Sec Attack",
    mode_time_text: "How many can you crush in time?",
    mode_moves_name: "30-Move Challenge",
    mode_moves_text: "How many can you crush in a set number of moves?",
    mode_order_name: "Color Order",
    mode_order_text: "Your slides only crush the order color. Other colors go only in chains",
    mode_cpu_title: "VS CPU",
    mode_cpu_text: "Compete with the CPU on score for 30 seconds. Chain or crush big to send rocks to your rival's board. There are 10 rivals, from Pon at Lv.1 to Nox at Lv.10, and each win unlocks the next level. Beat Lv.10 and the 10 rivals come around again, even stronger, from Lv.11 to Lv.30.",
    mode_mission_title: "Missions",
    mode_mission_text: "Clear goals like “Crush 10 within 6 moves” in a set number of moves. 30 missions across Easy, Normal and Hard. The fewer moves you use, the more stars you get (up to 3).",
    features_title: "Features",
    feature_rules_title: "Add more to think about",
    feature_rules_text: "Turn 8 extra rules on or off in Settings, like “Show incoming blocks,” “Pins” and “Combo multiplier”.",
    feature_awards_title: "Awards and coins",
    feature_awards_text: "Earn coins by completing 28 awards. The daily bonus gives you the Gem block style on day 7.",
    feature_shop_title: "Change the looks and sounds",
    feature_shop_text: "Trade coins for block styles, board colors, sound effects and music. There's nothing to buy with real money.",
    feature_record_title: "Your records stay",
    feature_record_text: "Total blocks crushed, max chain, play time, your last 10 scores and your best in each mode.",
    feature_sound_title: "Music and sound effects",
    feature_sound_text: "Music changes for menus, play, Fever and the final boss. You can set the volume for each kind of song.",
    feature_look_title: "Dark mode and easy viewing",
    feature_look_text: "Switch between light and dark. Shape marks help tell colors apart, and you can reduce motion. Available in Japanese and English.",
    feature_icloud_title: "Back up to iCloud",
    feature_icloud_text: "Keep your records and coins in iCloud and pick up where you left off on a new phone. It's up to you.",
    feature_privacy_title: "No sign-in needed",
    feature_privacy_text: "No account, no sign-up. Your records are saved on your device.",
    download_title: "Download",
    download_heading: "Download on the App Store",
    download_subheading: "Requires iOS 17.0 or later.",
    download_button: "Download on the App Store",
    download_requirements_title: "Requirements",
    download_requirements_ios: "iOS 17.0 or later",
    download_requirements_devices: "iPhone / portrait",
    download_requirements_language: "Japanese, English",
    download_requirements_price: "Free download",
    download_requirements_iap: "No in-app purchases",
    privacy_title: "Privacy Policy",
    privacy_handling_heading: "How we handle personal information",
    privacy_handling_text: "Slash (“the App”) respects your privacy and works to protect personal information. The App requires no account, and the developer runs no servers.",
    privacy_collect_heading: "Information we handle",
    privacy_collect_text: "The App only handles your play records (bests, lifetime stats, VS CPU progress, mission stars, awards and play time), coins and items from the Shop, the date you last claimed the daily bonus, and your settings. All of this stays on your device. The developer doesn't collect your name, email address or location, and does no usage analytics. However, to show ads, the ad provider may collect the information described in \"About Ads\" below.",
    privacy_storage_heading: "Where data is stored",
    privacy_storage_text: "Your play records and settings are saved on your device (UserDefaults).",
    privacy_icloud_heading: "About iCloud",
    privacy_icloud_text: "Only if you turn on iCloud Backup in Settings, your play records, coins and items are saved to iCloud key-value storage and synced across devices on the same Apple Account. This sync happens entirely within Apple's iCloud, and the developer cannot see its contents. Settings and the block style and board you're using are not synced and stay on that device.",
    privacy_network_heading: "Network use",
    privacy_network_text: "The App doesn't send your records to the developer's servers; the developer has none. It uses the network to deliver ads (Google AdMob) and to communicate with Apple's services when you turn on iCloud Backup.",
    privacy_ads_heading: "About Ads",
    privacy_ads_text: "The App shows ads using Google AdMob, an ad service provided by Google LLC. To deliver ads and measure their performance, AdMob may collect your device's advertising identifier (IDFA), approximate location (estimated from your IP address), usage information such as ad views and taps, and diagnostic information such as crashes. The advertising identifier is used only if you allow tracking through iOS App Tracking Transparency; you can play the App fully even if you don't. You can change this later in the iOS Settings app under Privacy & Security → Tracking. For how Google handles information, see Google's Privacy Policy (https://policies.google.com/privacy).",
    privacy_delete_heading: "Deleting your data",
    privacy_delete_text: "You can erase the records and settings saved on your device with “Reset data” in the App's Settings, or by deleting the App. If you use iCloud Backup, you can delete the data in iCloud from the iOS Settings app.",
    privacy_children_heading: "Children",
    privacy_children_text: "The App can be used by people of any age. The developer collects no personal information, and there are no in-app purchases. Ads are limited to content suitable for general audiences.",
    privacy_contact_heading: "Contact",
    privacy_contact_text_before: "For questions about this Privacy Policy, please ",
    privacy_contact_link: "contact us",
    privacy_contact_text_after: ".",
    privacy_update: "Last updated: October 2026",
    contact_title: "Contact",
    contact_intro: "If you have questions about the App, bug reports or feature requests, feel free to get in touch.",
    contact_email_heading: "📧 Email",
    contact_bug_heading: "🐛 Bug reports",
    contact_bug_text: "If you find a problem, such as blocks that stop moving or records that look wrong, please send the details to the email address above.",
    contact_feature_heading: "💡 Feature requests",
    contact_feature_text: "We'd love to hear ideas for new rules or modes, too.",
    footer_copyright: "© 2026 Slash. All rights reserved.",
  },
};

// ── Language ─────────────────────────────────────────────────────────────────

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("lang")) return params.get("lang");
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const browser = navigator.language || navigator.userLanguage || "ja";
  return browser.startsWith("ja") ? "ja" : "en";
}

function applyLanguage(lang) {
  const t = translations[lang] || translations["ja"];

  document.title = t["page_title"] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t["meta_description"] || "");

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("img[data-src-ja]").forEach((img) => {
    const src = lang === "ja" ? img.dataset.srcJa : img.dataset.srcEn;
    if (src) img.src = src;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

// ── Scroll & Header ───────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );

  header.style.transition = "transform 0.3s ease";
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector(".header")?.offsetHeight ?? 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Intersection Observer (fade-in) ──────────────────────────────────────────

function initFadeIn() {
  const targets = document.querySelectorAll(
    ".step-card, .mode-card, .feature-card, .download-info, .download-requirements, .privacy-content, .contact-method",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  // 最初から見えている範囲は隠さない。
  // 隠してしまうと、監視が働かない場面（プレビュー、拡張機能、古い環境）で
  // 画面の先頭から真っ白になってしまう。
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    el.style.opacity = "0";
    observer.observe(el);
  });

  document.addEventListener("animationstart", (e) => {
    if (e.animationName === "fadeInUp") {
      e.target.style.opacity = "";
    }
  });

  // 保険。何らかの理由で監視が働かなくても、必ず見える状態に戻す
  setTimeout(() => {
    targets.forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "";
    });
  }, 4000);
}

// ── Ripple on buttons ─────────────────────────────────────────────────────────

function initRipple() {
  document.querySelectorAll(".btn, .app-store-placeholder").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        background:rgba(255,255,255,0.35);border-radius:50%;
        transform:scale(0);animation:ripple 0.5s linear;pointer-events:none;
      `;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  const style = document.createElement("style");
  style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
  document.head.appendChild(style);
}

// ── Lazy images ───────────────────────────────────────────────────────────────

function initLazyImages() {
  const images = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    images.forEach((img) => observer.observe(img));
  }
}

// ── Parallax (hero) ───────────────────────────────────────────────────────────

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.3;
      hero.style.backgroundPositionY = `${offset}px`;
    },
    { passive: true },
  );
}

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  initHeader();
  initSmoothScroll();
  initFadeIn();
  initRipple();
  initLazyImages();
  initParallax();
});
