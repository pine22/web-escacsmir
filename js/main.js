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
// MOVEM PEÇA contact form
const movemContactToggle = document.getElementById('movemContactToggle');
const movemContactForm = document.getElementById('movemContactForm');
const movemForm = document.getElementById('movemForm');
const movemMessage = document.getElementById('movemMessage');
const movemWordNumber = document.getElementById('movemWordNumber');
const movemWordCount = document.getElementById('movemWordCount');

movemContactToggle?.addEventListener('click', () => {
  const isOpen = movemContactToggle.getAttribute('aria-expanded') === 'true';
  movemContactToggle.setAttribute('aria-expanded', String(!isOpen));
  movemContactForm.hidden = isOpen;

  if (!isOpen) {
    movemContactForm.querySelector('.form-group input')?.focus();
  }
});

function countWords(value) {
  const text = value.trim();
  return text ? text.split(/\s+/).length : 0;
}

function validateMovemMessage() {
  if (!movemMessage) return true;

  const words = countWords(movemMessage.value);
  const isOver = words > 100;
  movemWordNumber.textContent = words;
  movemWordCount.classList.toggle('is-over', isOver);
  movemMessage.setCustomValidity(
    isOver
      ? (document.body.classList.contains('lang-es')
        ? 'El mensaje no puede superar las 100 palabras.'
        : 'El missatge no pot superar les 100 paraules.')
      : ''
  );
  return !isOver;
}

movemMessage?.addEventListener('input', validateMovemMessage);
movemForm?.addEventListener('submit', event => {
  if (!validateMovemMessage()) {
    event.preventDefault();
    movemMessage.reportValidity();
    movemMessage.focus();
  }
});

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
