document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.global-nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const isOpen = btn.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // メニュー内のリンクを押したら閉じる
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      btn.classList.remove('is-open');
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// 右下のトップへ戻るボタン
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
  // スクロール量に応じてボタンの表示・非表示を切り替え
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  });

  // クリックでページ上部へスムーズスクロール
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}