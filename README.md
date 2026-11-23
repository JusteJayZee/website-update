# Ordero website

The ordero.lt marketing site, rebuilt as a static [Astro](https://astro.build) site. The only Wix feature it uses is the contact form, which goes through [Wix Headless](https://dev.wix.com/docs/go-headless). Submissions land in the same Wix form, dashboard and email notifications as today.

- 15 pages: Ordero Kids and Ordero Business in Lithuanian (default), English and Polish, plus the three legal pages in each language. URLs match the live site, so links and search rankings carry over.
- All marketing copy is taken word for word from the live site (`src/i18n/content.ts`).
- No framework runtime ships to the browser: plain HTML and CSS plus a few small scripts. The Wix SDK (about 47 KB gzipped) loads only when someone sends the form.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/ locally
```

Node 22 or newer.

## Connecting the contact form to Wix

The form posts to the existing **Ordero Contact Form** on the Wix site (ID `8fbe9da0-eebd-454b-9599-9fdde431eff7`). It uses that form's own field keys (`name`, `email_5f9c`, `phone_cd3c`, `message`), read from the live form's schema. Nothing changes in Wix except one setting:

1. In the Wix dashboard, open **Settings → Headless Settings** (some accounts show it as **Settings → Advanced → Headless Settings**). Create an **OAuth app**.
2. Under the app's allowed domains, add `www.ordero.lt` (and `localhost:4321` for local testing).
3. Copy the app's **Client ID**. Put it in a `.env` file (see `.env.example`) or set it as an environment variable on your host:

   ```
   PUBLIC_WIX_CLIENT_ID=your-client-id
   ```

4. Rebuild. Send a test message and check that it appears under **Forms & Submissions** in the dashboard.

Without a client ID the form still validates input, but sending shows the "something went wrong" message.

The live form has Wix spam protection set to **Advanced**. If Wix rejects headless submissions because a captcha is required, either lower that setting for this form or add reCAPTCHA. `createSubmission` accepts a `captchaToken` (see `src/scripts/wix-form.ts`).

## Deploying

Any static host works: Vercel, Netlify, Cloudflare Pages, or Wix's own headless hosting. Use build command `npm run build` and output folder `dist/`, and set `PUBLIC_WIX_CLIENT_ID` in the host's environment variables.

Before pointing `ordero.lt` at the new host:

- Once the domain moves, the Wix-built site stops being public. Check that your Wix plan covers headless use before cancelling anything.
- The Wix "Let's Chat!" widget does not carry over. Add another chat tool, or leave it out.
- Polish URLs contain `ś` (`/pl/polityka-prywatności`), the same as today. Check them once on the new host.

## Editing content

| What | Where |
| --- | --- |
| All page copy, in three languages | `src/i18n/content.ts` |
| Legal documents | `src/content/legal/*.html` (taken from the live pages) |
| Partner logos | `src/i18n/content.ts` (`kidsPartners`, `businessPartners`) and `public/images/partners/` |
| Colours, typefaces, sizes | `src/styles/global.css` |
| Sections | `src/components/` · page layouts in `src/templates/` |

As on the live site, only the Terms and Conditions have a Lithuanian translation. The two privacy policies are in English on every language version, and the Polish Terms are in English too.

## What differs from the live site

Kept deliberately small. Review before launch:

- **Typo fixes:** "Categring provider employee" → "Catering provider employee"; "ordera full week" → "order a full week".
- **Book a Demo** linked back to the homepage. It now scrolls to the contact form on the same page.
- The English homepage's browser title was Lithuanian ("Ordero | elektroninis maitinimas"). All homepages now use "Ordero Kids | Ordero".
- The Polish form's thank-you message was English. It is now "Dziękujemy, otrzymaliśmy Twoje zgłoszenie." The error messages in all three languages are new text.
- The Lithuanian Business page's closing line is English on the live site ("Join 100+ companies…"). It is kept as is and needs a translation.

**Sample content inside the app mockups.** The interactive app screen on the Kids page, the menu, order and daily-report sheets, and their labels are illustrative. The child's name, class, dishes, dates, headcounts and prices are invented, and the Lithuanian and Polish labels were translated for this build. The dish names in the English menu come from a real Ordero app screenshot. Replace any of it in the `ui` block of `src/i18n/content.ts`.

## Style concepts

One structure, five looks. Pick one at build time:

```bash
PUBLIC_THEME=sticker npm run build    # 1 Sticker Book (default)
PUBLIC_THEME=app npm run build        # 2 App Native
PUBLIC_THEME=lunchbox npm run build   # 3 Lunchbox Pop
PUBLIC_THEME=notebook npm run build   # 4 School Notebook
PUBLIC_THEME=candy npm run build      # 5 Candy Cloud
```

Each concept is one stylesheet in `src/themes/`, plus a few choices in `src/themes/config.ts` (which stickers appear, whether the ticker band shows). Once a direction is chosen, the other four can be deleted.

The app screens shown on the site (the interactive order screen and the caterer, parent and school views) use components from the Ordero design system garden: child switcher, date chip, callout, status pills, meal icons, order lines, stat cards and the cart bar. They live in `src/styles/ds.css` and look the same in every concept.

## Images

- The spot illustrations (ease of use, transparency, control, automated ordering, personalisation, parents, school, caterer), the meal icons and the logo come from the Ordero design system garden.
- Product mockups, partner logos, store badges and the Business line icons come from the current Wix site. Partner logos were recoloured to one ink colour.
- There is no food photography.
- Typefaces are self-hosted in `public/fonts/`, all checked for Lithuanian and Polish letters:
  - Bricolage Grotesque, Poppins, Nunito, Nunito Sans and Caveat (Google Fonts, SIL Open Font License).
  - Pilcrow Rounded and Chillax (Fontshare, ITF Free Font License).

## Design skill

This repo ships the [taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT) in `.claude/skills/design-taste-frontend/`, vendored from upstream commit `12af471`. Claude Code loads it automatically for any session on this repo, local or cloud. The direction used for this site is saved in `.taste-skill/direction.json`.
