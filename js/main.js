/* ── MAIN JS ── */

// ── Language toggle ──────────────────────────────────────────────────────────
const LANG_KEY = 'mir-lang';

function setLang(lang) {
  document.body.classList.remove('lang-ca', 'lang-es');
  document.body.classList.add('lang-' + lang);
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLang() {
  const saved = localStorage.getItem(LANG_KEY) || 'ca';
  setLang(saved);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ── Nav shadow on scroll ────────────────────────────────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Active nav link ──────────────────────────────────────────────────────────
const sections  = Array.from(document.querySelectorAll('section[id]'));
const navLinks  = document.querySelectorAll('.nav-links a, .nav-mobile a[href^="#"]');

function updateActiveLink() {
  let current = '';
  const offset = 80;
  sections.forEach(s => {
    if (window.scrollY + offset >= s.offsetTop) current = s.id;
  });
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

// ── Mobile hamburger ─────────────────────────────────────────────────────────
const hamburger  = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');

hamburger?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Cookie banner ────────────────────────────────────────────────────────────
const banner = document.getElementById('cookieBanner');
if (banner) {
  if (localStorage.getItem('mir-cookies')) {
    banner.style.display = 'none';
  }
  document.querySelectorAll('.cookie-accept, .cookie-decline').forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('mir-cookies', '1');
      banner.style.display = 'none';
    });
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
initLang();
updateActiveLink();
