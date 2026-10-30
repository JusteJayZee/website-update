// Ordero — site script. Everything here is an enhancement: the pages read fully without it.

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Products menu: switch between Ordero Kids and Ordero Business
(() => {
  const btn = document.querySelector('.products__btn');
  const menu = document.getElementById('products-menu');
  if (!btn || !menu) return;
  const set = (open) => { btn.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open', open); };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', (e) => { if (!e.target.closest('.products')) set(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { set(false); btn.focus(); } });
})();

// Entrances: reveal once as each part enters
(() => {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) { targets.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  targets.forEach((el) => io.observe(el));
  addEventListener('load', () => setTimeout(() => targets.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
  }), 2500));
})();

// Swap an element's content with a short crossfade
const crossfade = (els, apply) => {
  if (reduced) { apply(); return; }
  els.forEach((el) => el.classList.add('is-out'));
  setTimeout(() => { apply(); els.forEach((el) => el.classList.remove('is-out')); }, 200);
};

// The live thing: drag an order through its stages
(() => {
  const root = document.querySelector('[data-stages]');
  if (!root) return;
  const STAGES = JSON.parse(root.dataset.stagesJson || 'null') || [
    { title: 'First, add your child', body: 'Sign up, add your child and their group, and set any allergies or dietary needs. Saved once, applied always.', img: 'plate-allergies-nodisc', alt: 'A plate of food with wheat and milk crossed out above it', art: 'var(--coral)' },
    { title: 'Then, pick the week', body: 'Browse the school’s menu and choose, or turn on auto-order and let Ordero handle it every week.', img: 'week-auto-order-nodisc', alt: 'A week from Monday to Sunday above a lunch tray, with arrows going round', art: 'var(--mint)' },
    { title: 'Next, change any day', body: 'Off sick, or a trip? Change or cancel any meal right up to the cutoff.', img: 'calendar-edit-nodisc', alt: 'A calendar being edited with a pencil, above a lunch tray', art: 'var(--gold)' },
    { title: 'Finally, it’s served', body: 'The school gets an accurate headcount each morning and the caterer gets the orders. The right meal reaches the right child.', img: 'school', alt: 'A school house with a clock above the door', art: 'var(--mint-tint)' },
  ];
  const range = root.querySelector('input[type="range"]');
  const names = [...root.querySelectorAll('[data-step]')];
  const text = root.querySelector('[data-stage-text]');
  const img = root.querySelector('[data-stage-img]');
  const art = root.querySelector('[data-stage-art]');
  let current = 0;
  const base = img.getAttribute('src').replace(/[^/]+$/, '');
  const show = (i) => {
    if (i === current) return;
    current = i;
    const s = STAGES[i];
    range.value = i;
    range.style.setProperty('--p', (i / (STAGES.length - 1)) * 100 + '%');
    range.setAttribute('aria-valuetext', s.title);
    names.forEach((n) => { if (Number(n.dataset.step) === i) n.setAttribute('aria-current', 'step'); else n.removeAttribute('aria-current'); });
    art.style.setProperty('--art', s.art);
    crossfade([text, img], () => {
      text.querySelector('h2').textContent = s.title;
      text.querySelector('[data-stage-body]').textContent = s.body;
      img.src = base + s.img + '.webp';
      img.alt = s.alt;
    });
  };
  range.max = String(STAGES.length - 1);
  range.style.setProperty('--p', '0%');
  range.addEventListener('input', () => show(Number(range.value)));
  names.forEach((n) => n.addEventListener('click', () => show(Number(n.dataset.step))));
})();

// The app: pick a screen, see it on the stage
(() => {
  const root = document.querySelector('[data-screens]');
  if (!root) return;
  const tabs = [...root.querySelectorAll('[data-screen]')];
  const fig = root.querySelector('[data-screen-fig]');
  const img = root.querySelector('[data-screen-img]');
  const cap = root.querySelector('[data-screen-cap]');
  const base = img.getAttribute('src').replace(/[^/]+$/, '');
  const select = (tab) => {
    if (tab.getAttribute('aria-selected') === 'true') return;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
    crossfade([fig], () => {
      img.src = base + tab.dataset.screen + '.webp';
      img.alt = 'Ordero app: ' + tab.textContent.trim().toLowerCase() + '. ' + tab.dataset.cap;
      cap.textContent = tab.dataset.cap;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const d = ['ArrowDown', 'ArrowRight'].includes(e.key) ? 1 : ['ArrowUp', 'ArrowLeft'].includes(e.key) ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      const next = tabs[(i + d + tabs.length) % tabs.length];
      next.focus(); select(next);
    });
  });
  // preload the other screens so the swap is instant
  addEventListener('load', () => tabs.forEach((t) => { const p = new Image(); p.src = base + t.dataset.screen + '.webp'; }));
})();

// Voices: one quotation per scroll step, each with its own ground
(() => {
  const root = document.querySelector('[data-voices]');
  if (!root || !('IntersectionObserver' in window) || matchMedia('(max-width: 60em)').matches) return;
  const GROUNDS = ['var(--coral)', 'var(--mint)', 'var(--gold)'];
  const stage = root.querySelector('.voices__stage');
  const quotes = [...root.querySelectorAll('[data-voice]')];
  const pics = [...root.querySelectorAll('[data-voice-img]')];
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const i = Number(entry.target.dataset.step);
      quotes.forEach((q) => q.classList.toggle('is-on', Number(q.dataset.voice) === i));
      pics.forEach((p) => p.classList.toggle('is-on', Number(p.dataset.voiceImg) === i));
      stage.style.setProperty('--v', GROUNDS[i]);
    }
  }, { rootMargin: '-50% 0px -50% 0px' });
  root.querySelectorAll('.voices__steps i').forEach((s) => io.observe(s));
})();

// The picture strip: duplicate it once so the drift loops without a seam
(() => {
  const strip = document.querySelector('[data-strip]');
  if (!strip) return;
  [...strip.children].forEach((li) => { const c = li.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.querySelectorAll('img').forEach((i) => (i.alt = '')); strip.appendChild(c); });
})();

// The contact bar. It is not connected to a backend yet (see README); it checks the fields and says so.
(() => {
  const form = document.querySelector('[data-contact]');
  if (!form) return;
  const status = document.querySelector('[data-contact-status]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const missing = [...form.querySelectorAll('[required]')].filter((f) => !f.value.trim());
    form.querySelectorAll('[aria-invalid]').forEach((f) => f.removeAttribute('aria-invalid'));
    if (missing.length) {
      missing.forEach((f) => f.setAttribute('aria-invalid', 'true'));
      status.textContent = 'Please add your name and an email or phone number.';
      missing[0].focus();
      return;
    }
    status.textContent = 'Thank you. This preview isn’t connected yet, so nothing was sent.';
  });
})();
