// Ordero — site script. Everything here is an enhancement: the pages read fully without it.

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

// The contact form. It is not connected to a backend yet (see README); it checks the fields and says so.
(() => {
  const form = document.querySelector('[data-contact]');
  if (!form) return;
  const status = form.querySelector('[data-contact-status]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const missing = [...form.querySelectorAll('[required]')].filter((f) => !f.value.trim() || !f.checkValidity());
    form.querySelectorAll('[aria-invalid]').forEach((f) => f.removeAttribute('aria-invalid'));
    if (missing.length) {
      missing.forEach((f) => f.setAttribute('aria-invalid', 'true'));
      status.textContent = 'Please fill in your email, phone and a message.';
      missing[0].focus();
      return;
    }
    status.textContent = 'Thank you. This preview isn’t connected yet, so nothing was sent.';
  });
})();
