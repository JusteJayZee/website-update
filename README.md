# website-update

Website update project.

## Design skill

This repo ships the [taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT) in `.claude/skills/design-taste-frontend/`, vendored from upstream commit `12af471`. Claude Code loads it automatically for any session on this repo — local or cloud, no install step.

Ask for frontend work as usual ("redesign the homepage", "build a landing page for …"), or name the skill explicitly. It needs Node 22+ and Chrome/Edge/Chromium, and network access to find images.

To update it, copy `skills/taste-skill/` from a newer upstream checkout over `.claude/skills/design-taste-frontend/`.

## The site (mock)

A static rebuild of [ordero.lt/en](https://www.ordero.lt/en) and [ordero.lt/en/ordero-business](https://www.ordero.lt/en/ordero-business), made with the design skill on top of the [Ordero Design System](https://github.com/JusteJayZee/Ordero-Design-System): Poppins for display, Nunito Sans for text, mint / gold / coral, 14px corners, the mono wordmark on coloured surfaces. Plain HTML, CSS and a little JavaScript, no build step.

- `site/index.html`: Ordero Kids
- `site/business.html`: Ordero Business
- `site/assets/illustrations/`: the original Kids drawings from ordero.lt, cut out; `-nodisc` versions drop the coloured disc so the drawing sits straight on a field of the same colour
- `site/assets/icons/`: the original Business line icons from ordero.lt, cut out
- `site/assets/app/`: real screens from the design system's parents' app prototype (Lithuanian)
- `site/assets/img/`: Ordero Business phone renders from ordero.lt
- `site/assets/brand/`: the design system's SVG wordmark (colour and mono) and partner logos

To view it, open `site/index.html` in a browser, or serve the folder:

```bash
npx serve site
```

The Products menu switches between the two pages, and "Book a demo" jumps to the contact form (`#contact`) on each.

### Before launch

- **Contact form:** not connected to anything yet. It checks the fields and says nothing was sent. It needs a form backend or an email address.
- **Button labels:** the design system puts white labels on mint (1.97:1 contrast). The site uses dark labels on mint, or ink buttons, so they pass WCAG.
- **App screens:** taken from the design system prototype with its sample data (Austėja, Boružėlės group). Swap in production screenshots when the app ships.
- **Fonts:** Poppins and Nunito Sans load from Google Fonts; self-host them for production.
- **Languages:** only English is built. The current site also has Lithuanian and Polish.
