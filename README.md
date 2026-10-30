# website-update

Website update project.

## Design skill

This repo ships the [taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT) in `.claude/skills/design-taste-frontend/`, vendored from upstream commit `12af471`. Claude Code loads it automatically for any session on this repo — local or cloud, no install step.

Ask for frontend work as usual ("redesign the homepage", "build a landing page for …"), or name the skill explicitly. It needs Node 22+ and Chrome/Edge/Chromium, and network access to find images.

To update it, copy `skills/taste-skill/` from a newer upstream checkout over `.claude/skills/design-taste-frontend/`.

## The site (mock)

A restyle of [ordero.lt/en](https://www.ordero.lt/en) and [ordero.lt/en/ordero-business](https://www.ordero.lt/en/ordero-business): the same sections, in the same order, with the same words, set on one grid in the [Ordero Design System](https://github.com/JusteJayZee/Ordero-Design-System) (Poppins for display, Nunito Sans for text, mint / gold / coral, 14px corners). Plain HTML, CSS and a little JavaScript, no build step.

- `site/index.html`: Ordero Kids
- `site/business.html`: Ordero Business
- `site/assets/illustrations/`, `site/assets/icons/`, `site/assets/img/`: the original drawings, icons and app shots from ordero.lt, cut out
- `site/assets/brand/`: the design system's SVG wordmark, partner logos and app-store badges

To view it, open `site/index.html` in a browser, or serve the folder:

```bash
npx serve site
```

The Products menu switches between the two pages, and "Book a demo" jumps to the contact form (`#contact`) on each.

### What changed from the live site

- Headlines kept to two lines (the Kids hero was three, four on phones); the Business closing line is shortened to "Make lunch effortless for your team".
- One typeface pair instead of four, five type sizes, 17px+ body text on phones.
- No gradients, shadows, glass or outlined boxes; sections separated by a light tone instead.
- Accent-coloured headline words ("Nothing they don't.", "That's all.") set as plain text, since they were unreadable (1.7:1 and 2:1).
- One left edge for all text instead of eleven; the sync diagram rebuilt as HTML with the original drawings.
- Small entrance motion on scroll.

### Before launch

- **Contact form:** not connected to anything yet. It checks the fields and says nothing was sent.
- **Button labels:** the design system puts white labels on mint (1.97:1 contrast); the site uses dark labels so they pass WCAG.
- **Testimonials:** quoted exactly as on the live site, including "management habits" and "the Order system"; worth checking with the speakers.
- **Fonts:** Poppins and Nunito Sans load from Google Fonts; self-host them for production.
- **Languages:** only English is built. The current site also has Lithuanian and Polish.
