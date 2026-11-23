// Keeps headings to two lines in every language. The copy is fixed and its
// translations differ a lot in length, so a heading marked [data-fit] steps its
// size down (never below data-fit-min px) until it sits on two lines or fewer.
const MAX_LINES = 2;

function lineCount(el: HTMLElement) {
  const cs = getComputedStyle(el);
  const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.1;
  const h = el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  return Math.round(h / lh);
}

function fit(el: HTMLElement) {
  el.style.fontSize = '';
  const min = Number(el.dataset.fitMin || 26);
  let size = parseFloat(getComputedStyle(el).fontSize);
  let guard = 40;
  while (guard-- > 0 && size > min && (lineCount(el) > MAX_LINES || el.scrollWidth > el.clientWidth + 1)) {
    size = Math.max(min, size * 0.94);
    el.style.fontSize = `${size}px`;
  }
}

function fitAll() {
  document.querySelectorAll<HTMLElement>('[data-fit]').forEach(fit);
}

let timer = 0;
const schedule = () => { window.clearTimeout(timer); timer = window.setTimeout(fitAll, 120); };

fitAll();
document.fonts?.ready.then(fitAll);
window.addEventListener('resize', schedule);
