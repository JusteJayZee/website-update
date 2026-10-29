# website-update

Website update project.

## Design skill

This repo ships the [taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT) in `.claude/skills/design-taste-frontend/`, vendored from upstream commit `12af471`. Claude Code loads it automatically for any session on this repo — local or cloud, no install step.

Ask for frontend work as usual ("redesign the homepage", "build a landing page for …"), or name the skill explicitly. It needs Node 22+ and Chrome/Edge/Chromium, and network access to find images.

To update it, copy `skills/taste-skill/` from a newer upstream checkout over `.claude/skills/design-taste-frontend/`.

## The site (mock)

A static rebuild of [ordero.lt/en](https://www.ordero.lt/en) and [ordero.lt/en/ordero-business](https://www.ordero.lt/en/ordero-business), made with the design skill. Plain HTML, CSS and a little JavaScript, no build step.

- `site/index.html`: Ordero Kids
- `site/business.html`: Ordero Business
- `site/assets/`: shared stylesheet and script, brand files taken from the current site, pictures (credits in `site/assets/img/CREDITS.md`)

To view it, open `site/index.html` in a browser, or serve the folder:

```bash
npx serve site
```

The Products menu switches between the two pages, and "Book a demo" jumps to the contact form (`#contact`) on each.

### Before launch

- **Contact form:** not connected to anything yet. It checks the fields and says nothing was sent. It needs a form backend or an email address.
- **Sample content to confirm or replace:** cutoff time (10:00 the day before), breakfast 2,10 € and dinner 3,20 € prices, the dinner menu, group, school and kindergarten names and all numbers in the app fragments (Saulutė, Žvėrynas, 7,10 € a day and the order counts), the step durations on the receipts, and Business pickup "from 12:00".
- **Fonts:** Zilla Slab and Nunito Sans load from Google Fonts; self-host them for production.
- **Languages:** only English is built. The current site also has Lithuanian and Polish.
