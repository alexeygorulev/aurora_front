import { mediaSizes } from '../constants';
import { colors, gradients } from './_colors';
import { styles as typographyStyles } from './_typography';

export const refs = {
  types: {
    primary: 'primary',
    secondary: 'secondary',
  },
  display: {
    block: 'block',
    inline: 'inline',
  },
  sizes: {
    s: 's',
    m: 'm',
    l: 'l',
  },
  animation: {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  },
};
export const styles = {
  fontFamily: typographyStyles.fontFamily.primary,
  fontWeight: typographyStyles.headingFontWeight,
  lineHeight: typographyStyles.headingLineHeight,
  fontSizes: typographyStyles.headingSizes,
  display: {
    [refs.display.block]: 'block',
    [refs.display.inline]: 'inline-block',
  },

  backgroundColorsAnimation: {
    [refs.types.primary]: {
      [refs.animation.top]: gradients.purple_main_animation_top,
      [refs.animation.right]: gradients.purple_main_animation_right,
      [refs.animation.bottom]: gradients.purple_main_animation_bottom,
      [refs.animation.left]: gradients.purple_main_animation_left,
    },
    [refs.types.secondary]: {
      [refs.animation.top]: gradients.purple_main_animation_top,
      [refs.animation.right]: gradients.purple_main_animation_right,
      [refs.animation.bottom]: gradients.purple_main_animation_bottom,
      [refs.animation.left]: gradients.purple_main_animation_left,
    },
  },

  backgroundColors: {
    [refs.types.primary]: {
      normal: gradients.purple_main,
      focused: gradients.purple_main,
      hovered: gradients.purple_main,
      pressed: gradients.purple_main,
      disabled: colors.secondary,
    },
    [refs.types.secondary]: {
      normal: colors.transparent,
      hovered: gradients.purple_main,
      disabled: colors.secondary,
      focused: colors.transparent,
      pressed: colors.transparent,
    },
  },

  borderColors: {
    [refs.types.primary]: {
      normal: colors.primary0,
      focused: colors.primary10,
      hovered: colors.primary0,
      pressed: colors.primary20,
      disabled: colors.primary20,
    },
    [refs.types.secondary]: {
      normal: colors.purple10,
      focused: colors.purple10,
      hovered: colors.transparent,
      pressed: colors.purple10,
      disabled: colors.secondary,
    },
  },

  colors: {
    [refs.types.primary]: {
      normal: colors.white,
      focused: colors.white,
      hovered: colors.white,
      pressed: colors.white,
      disabled: colors.white,
    },
    [refs.types.secondary]: {
      normal: colors.white,
      focused: colors.white,
      hovered: colors.white,
      pressed: colors.white,
      disabled: colors.white,
    },
  },
  height: {
    [mediaSizes.s]: { s: 45, m: 56, l: 80 },
    [mediaSizes.m]: { s: 45, m: 56, l: 80 },
    [mediaSizes.l]: { s: 45, m: 56, l: 80 },
  },

  padding: {
    [mediaSizes.s]: { s: [12, 16], m: [16, 24], l: [24, 32] },
    [mediaSizes.m]: { s: [12, 16], m: [16, 24], l: [24, 32] },
    [mediaSizes.l]: { s: [12, 16], m: [16, 24], l: [24, 32] },
  },

  borderRadius: {
    rounded: {
      [mediaSizes.s]: { s: 20, m: 28, l: 32 },
      [mediaSizes.m]: { s: 20, m: 28, l: 32 },
      [mediaSizes.l]: { s: 20, m: 28, l: 32 },
    },
    normal: {
      [mediaSizes.s]: { s: 4, m: 8, l: 12 },
      [mediaSizes.m]: { s: 4, m: 8, l: 12 },
      [mediaSizes.l]: { s: 4, m: 8, l: 12 },
    },
  },
};
