// Splits a heading into two lines at its natural break, so the second line can
// carry the brand highlight: "Three Steps. | That's all.", "One platform, | everyone in sync."
// Headings without a natural break stay whole.
export function splitHeading(h: string | string[]): [string, string] {
  if (Array.isArray(h)) return [h[0], h.slice(1).join(' ')];
  for (const sep of [' — ', '. ', ', ', '? ']) {
    const i = h.indexOf(sep);
    if (i > 0 && i < h.length - sep.length) {
      const keep = sep === ' — ' ? ' —' : sep.trimEnd();
      return [h.slice(0, i) + keep, h.slice(i + sep.length)];
    }
  }
  return [h, ''];
}
