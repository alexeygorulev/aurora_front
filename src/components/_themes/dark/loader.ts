import { colors } from './_colors';

export const components = {
  general: 'loader',
};

export const refs = {
  types: {
    primary: 'primary',
    secondary: 'secondary',
  } as const,
  sizes: { s: 's', m: 'm', l: 'l', xl: 'xl' } as const,
};

export const styles = {
  colors: {
    [refs.types.primary]: colors.purple10,
    [refs.types.secondary]: colors.white,
  },
  size: {
    [refs.sizes.s]: { s: '20px', m: '32px', l: '64px', xl: '96px' },
    [refs.sizes.m]: { s: '20px', m: '32px', l: '64px', xl: '96px' },
    [refs.sizes.l]: { s: '20px', m: '32px', l: '64px', xl: '96px' },
  },
};
