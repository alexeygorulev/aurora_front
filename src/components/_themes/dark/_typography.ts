import { mediaSizes } from '../constants';
import { colors } from './_colors';
import { fontWeights, fonts } from './_fonts';

export const refs = {
  colors: {
    major: 'major',
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    minor: 'minor',
    light: 'light',
    positive: 'positive',
    warning: 'warning',
    negative: 'negative',
    link: 'link',
    disabled: 'disabled',
    transparent: 'transparent',
  },
  sizes: { xs: 'xs', s: 's', m: 'm', l: 'l', xl: 'xl' } as const,
  textAlign: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },
  fontSize: {
    [mediaSizes.s]: { xs: 10, s: 16, m: 25, l: 40, xl: 64 },
    [mediaSizes.m]: { xs: 10, s: 16, m: 25, l: 40, xl: 64 },
    [mediaSizes.l]: { xs: 10, s: 16, m: 25, l: 40, xl: 64 },
  },
  lineHeight: {
    [mediaSizes.s]: { xs: 10, s: 15, m: 20, l: 34, xl: 50 },
    [mediaSizes.m]: { xs: 10, s: 15, m: 20, l: 34, xl: 50 },
    [mediaSizes.l]: { xs: 10, s: 15, m: 20, l: 34, xl: 50 },
  },
};

export const display = {
  block: 'block',
  inline: 'inline-block',
};
export const styles = {
  fontFamily: { ...fonts },

  colors: {
    [refs.colors.major]: colors.black,
    [refs.colors.light]: colors.white,
    [refs.colors.negative]: colors.error0,
  },

  blockMargin: {
    [refs.sizes.xs]: '4px 0',
    [refs.sizes.s]: '8px 0',
    [refs.sizes.m]: '16px 0',
    [refs.sizes.l]: '24px 0',
    [refs.sizes.xl]: '32px 0',
  },

  blockPadding: {
    [refs.sizes.xs]: '4px 0',
    [refs.sizes.s]: '8px 0',
    [refs.sizes.m]: '16px 0',
    [refs.sizes.l]: '24px 0',
    [refs.sizes.xl]: '32px 0',
  },

  blockPaddingUnit: {
    [refs.sizes.xs]: '4px',
    [refs.sizes.s]: '8px',
    [refs.sizes.m]: '12px',
    [refs.sizes.l]: '16px',
    [refs.sizes.xl]: '24px',
  },

  headingFontFamily: fonts.primary,
  headingFontWeight: { ...fontWeights },
  headingLineHeight: { ...refs.lineHeight },
  headingSizes: { ...refs.fontSize },

  paragraphFontFamily: fonts.primary,
  paragraphFontWeight: { ...fontWeights },
  paragraphLineHeight: { ...refs.lineHeight },
  paragraphSizes: { ...refs.fontSize },
};
