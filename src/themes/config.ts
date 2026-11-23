// Five style concepts over one structure. Pick one at build time:
//   PUBLIC_THEME=sticker|app|lunchbox|notebook|candy npm run build
export type Theme = 'sticker' | 'app' | 'lunchbox' | 'notebook' | 'candy';

export const themes: Record<Theme, { name: string; idea: string; heroKids: string[]; heroBiz: string[]; ctaKids: string[]; ctaBiz: string[]; marquee: boolean }> = {
  sticker: {
    name: 'Sticker Book',
    idea: 'Chunky type, solid brand-colour blocks and the illustrations as die-cut stickers that wobble.',
    heroKids: ['ill/ease.webp', 'ill/personal.webp'], heroBiz: ['ill/seconds.webp', 'ill/delivery.webp'],
    ctaKids: ['ill/caterer.webp', 'ill/school.webp'], ctaBiz: ['ill/select.webp', 'ill/hours.webp'],
    marquee: false,
  },
  app: {
    name: 'App Native',
    idea: 'The Ordero design system as the website: calm cards, Poppins and Nunito Sans, mint, pastel category tiles.',
    heroKids: ['ill/ease.webp', 'ill/personal.webp'], heroBiz: ['ill/seconds.webp', 'ill/delivery.webp'],
    ctaKids: ['ill/caterer.webp', 'ill/school.webp'], ctaBiz: ['ill/select.webp', 'ill/hours.webp'],
    marquee: false,
  },
  lunchbox: {
    name: 'Lunchbox Pop',
    idea: 'Neo-brutal lunchbox compartments: thick ink outlines, hard shadows, a scrolling ticker and buttons that press down.',
    heroKids: ['ds/taco.svg', 'ds/egg.svg'], heroBiz: ['ds/sandwich.svg', 'ds/side.svg'],
    ctaKids: ['ds/sandwich.svg', 'ds/side.svg'], ctaBiz: ['ds/taco.svg', 'ds/egg.svg'],
    marquee: true,
  },
  notebook: {
    name: 'School Notebook',
    idea: 'A kid’s exercise book: ruled paper, handwritten notes, marker scribbles and stickers held on with washi tape.',
    heroKids: ['ill/ease.webp', 'ill/personal.webp'], heroBiz: ['ill/seconds.webp', 'ill/delivery.webp'],
    ctaKids: ['ill/caterer.webp', 'ill/school.webp'], ctaBiz: ['ill/select.webp', 'ill/hours.webp'],
    marquee: false,
  },
  candy: {
    name: 'Candy Cloud',
    idea: 'Soft 3D clay surfaces in the design system’s pastel category colours, floating meal icons and a drifting colour glow.',
    heroKids: ['ds/egg.svg', 'ds/taco.svg'], heroBiz: ['ds/sandwich.svg', 'ds/taco.svg'],
    ctaKids: ['ds/sandwich.svg', 'ds/side.svg'], ctaBiz: ['ds/side.svg', 'ds/egg.svg'],
    marquee: true,
  },
};

export const theme: Theme = ((import.meta.env.PUBLIC_THEME as Theme) in themes ? import.meta.env.PUBLIC_THEME : 'sticker') as Theme;
export const T = themes[theme];
