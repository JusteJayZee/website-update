// Five style directions over one structure (from reports/Modern product site positioning.md).
// Pick one at build time:  PUBLIC_THEME=month|menu|rooms|cast|relay npm run build
export type Theme = 'month' | 'menu' | 'rooms' | 'cast' | 'relay';

export const themes: Record<Theme, { name: string; idea: string }> = {
  month: { name: 'Live Month', idea: 'Product-led calm: the parent’s real month of meals is the hero.' },
  menu: { name: 'Menu Board', idea: 'Warm editorial: a soft serif and a typeset weekly menu, gold marks today.' },
  rooms: { name: 'Mint Rooms', idea: 'A white page with a few big, soft mint rooms for the moments that matter.' },
  cast: { name: 'Small Cast', idea: 'A quiet white page where the illustrations are the only play.' },
  relay: { name: 'Relay', idea: 'The caterer → parent → school loop, played out on an ink stage.' },
};

export const theme: Theme = ((import.meta.env.PUBLIC_THEME as Theme) in themes ? import.meta.env.PUBLIC_THEME : 'month') as Theme;
export const T = themes[theme];
