import dark from './dark/index';

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const themes = {
  [THEMES.DARK]: Object.assign(dark, { name: THEMES.DARK }),
};

export default themes;
