// Ordero — shared page script. Everything here is an enhancement: the page reads fully without it.

// Navigation: phone menu and the Products switcher
(() => {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.getElementById('nav-links');
  const productsBtn = document.querySelector('.nav__products-btn');
  const menu = document.getElementById('products-menu');
  if (!links) return;

  const setMenu = (open) => {
    productsBtn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  };
  const setLinks = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
    if (open) setMenu(true);
  };

  productsBtn.addEventListener('click', () => setMenu(productsBtn.getAttribute('aria-expanded') !== 'true'));
  toggle.addEventListener('click', () => setLinks(toggle.getAttribute('aria-expanded') !== 'true'));

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) { setMenu(false); setLinks(false); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('is-open')) { setMenu(false); productsBtn.focus(); }
    if (links.classList.contains('is-open')) { setLinks(false); toggle.focus(); }
  });
  // in-page links (Book a demo) close the phone menu
  links.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href').startsWith('#')) { setMenu(false); setLinks(false); }
  });
})();

// Hero: slow crossfade between the pictures, paused when the tab is hidden
(() => {
  const stage = document.querySelector('[data-crossfade]');
  if (!stage || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const frames = [...stage.querySelectorAll('figure')];
  if (frames.length < 2) return;
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    frames[i].classList.remove('is-on');
    i = (i + 1) % frames.length;
    frames[i].classList.add('is-on');
  }, 6500);
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
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  targets.forEach((el) => io.observe(el));
  addEventListener('load', () => setTimeout(() => targets.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
  }), 2500));
})();

// The live menu card: pick a meal, order it, repeat it, see the cutoff
(() => {
  const root = document.querySelector('[data-menu]');
  if (!root) return;
  const MEALS = root.dataset.meals ? JSON.parse(root.dataset.meals) : {
    breakfast: { name: 'Breakfast', price: '2,10 €', items: ['7-grain porridge with berries', 'Fruit', 'Unsweetened tea'] },
    lunch: { name: 'Lunch', price: '5,00 €', items: ['Mixed bean soup with fresh parsley and flaxseed oil', 'Sour cream', 'Lavash', 'Slow-cooked turkey cubes with greens', 'Fluffy buckwheat', 'Green salad with cucumbers, radishes and peas', 'Mixed salad leaves', 'Still water'] },
    dinner: { name: 'Dinner', price: '3,20 €', items: ['Curd pancakes with apple sauce', 'Kefir', 'Pear'] },
  };
  const CUTOFF_HOUR = Number(root.dataset.cutoff || 10);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const state = { meal: 'lunch', ordered: {}, repeat: {} };
  const $ = (s) => root.querySelector(s);
  const tabs = [...root.querySelectorAll('[data-meal]')];

  // the next school day after the cutoff
  const target = new Date();
  target.setDate(target.getDate() + 1);
  while (target.getDay() === 0 || target.getDay() === 6) target.setDate(target.getDate() + 1);
  const dayName = days[target.getDay()];
  $('[data-day]').textContent = dayName;

  const render = () => {
    const m = MEALS[state.meal];
    root.querySelectorAll('[data-chip]').forEach((c) => c.classList.toggle('is-on', c.dataset.chip === state.meal));
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.meal === state.meal)));
    $('[data-menu-list]').innerHTML = '<ul>' + m.items.map((x) => `<li>${x}</li>`).join('') + '</ul>';
    $('[data-meal-name]').textContent = m.name;
    $('[data-price]').textContent = m.price;
    const ordered = !!state.ordered[state.meal];
    const repeat = !!state.repeat[state.meal];
    const bar = $('[data-order-bar]');
    bar.classList.toggle('is-off', !ordered);
    bar.classList.toggle('is-ordered', ordered);
    $('[data-order-state]').textContent = ordered ? (repeat ? `Ordered · repeats every ${dayName}` : `Ordered for ${dayName}`) : 'Not ordered yet';
    const orderBtn = $('[data-order]');
    orderBtn.setAttribute('aria-pressed', String(ordered));
    $('[data-order-label]').textContent = ordered ? `Ordered · cancel` : `Order ${m.name.toLowerCase()}`;
    $('[data-order-price]').textContent = m.price;
    const repBtn = $('[data-repeat]');
    repBtn.setAttribute('aria-pressed', String(repeat));
    $('[data-repeat-label]').textContent = repeat ? `Repeats every ${dayName}` : 'Repeat every week';
  };

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => { state.meal = t.dataset.meal; render(); });
    t.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const next = tabs[(i + d + tabs.length) % tabs.length];
      next.focus(); next.click();
    });
  });
  $('[data-order]').addEventListener('click', () => {
    state.ordered[state.meal] = !state.ordered[state.meal];
    if (!state.ordered[state.meal]) state.repeat[state.meal] = false;
    render();
  });
  $('[data-repeat]').addEventListener('click', () => {
    state.repeat[state.meal] = !state.repeat[state.meal];
    if (state.repeat[state.meal]) state.ordered[state.meal] = true;
    render();
  });

  // the cutoff: today at CUTOFF_HOUR, or already passed
  const cutoffEl = $('[data-cutoff]');
  const tick = () => {
    const now = new Date();
    const cut = new Date(now); cut.setHours(CUTOFF_HOUR, 0, 0, 0);
    const pad = (n) => String(n).padStart(2, '0'); // taste-skill-ignore: clock time
    if (now < cut) {
      const mins = Math.ceil((cut - now) / 60000);
      const h = Math.floor(mins / 60), m = mins % 60;
      cutoffEl.textContent = `Change or cancel ${dayName}’s order until ${pad(CUTOFF_HOUR)}:00 today: ${h ? h + ' h ' : ''}${m} min left.`;
    } else {
      const left = new Date(cut); left.setDate(left.getDate() + 1);
      const mins = Math.ceil((left - now) / 60000);
      cutoffEl.textContent = `The cutoff is ${pad(CUTOFF_HOUR)}:00 the day before. Next one in ${Math.floor(mins / 60)} h ${mins % 60} min.`;
    }
  };
  tick(); setInterval(tick, 30000);
  render();
})();

// The open "Add your child" dialog: the button carries the typed name
(() => {
  const form = document.querySelector('[data-start]');
  if (!form) return;
  const input = form.querySelector('input[type="text"]');
  const label = form.querySelector('[data-start-label]');
  const base = label.dataset.base || 'Create account for';
  const update = () => { const v = input.value.trim(); label.textContent = v ? `${base} ${v}` : base.replace(/ for$/, ''); };
  input.addEventListener('input', update);
  update();
})();

// The coupon form. It is not connected to a backend yet (see README); it checks the fields and says so.
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
      status.textContent = 'Please fill in your email, phone and a short message.';
      missing[0].focus();
      return;
    }
    status.textContent = 'Thank you. This preview isn’t connected to email yet, so nothing was sent.';
  });
})();
