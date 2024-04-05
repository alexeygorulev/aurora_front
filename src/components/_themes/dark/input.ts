import { mediaSizes } from '../constants';
import { colors } from './_colors';
import { fonts } from './_fonts';

export const styles = {
  inputRadius: 8,
  inputCheckBox: {
    fontWeight: { s: 400, m: 400, l: 400 },
    padding: {
      [mediaSizes.s]: { s: [0, 0], m: [0, 0], l: [0, 0] },
      [mediaSizes.m]: { s: [0, 0], m: [0, 0], l: [0, 0] },
      [mediaSizes.l]: { s: [0, 0], m: [0, 0], l: [0, 0] },
    },
    lineHeight: {
      [mediaSizes.s]: { s: 16, m: 18, l: 20 },
      [mediaSizes.m]: { s: 16, m: 18, l: 20 },
      [mediaSizes.l]: { s: 16, m: 18, l: 20 },
    },
    fontSize: {
      [mediaSizes.s]: { s: 12, m: 14, l: 16 },
      [mediaSizes.m]: { s: 12, m: 14, l: 16 },
      [mediaSizes.l]: { s: 12, m: 14, l: 16 },
    },
    colors: {
      checked: {
        disabled: colors.white,
        error: colors.white,
        focused: colors.white,
        hovered: colors.white,
        pressed: colors.white,
        normal: colors.white,
      },
      normal: {
        disabled: colors.white,
        error: colors.white,
        focused: colors.white,
        hovered: colors.white,
        pressed: colors.white,
        normal: colors.white,
      },
    },
    icon: {
      borderRadius: 8,
      colors: {
        normal: colors.white,
        disabled: colors.secondary10,
      },
      sizes: {
        [mediaSizes.s]: { s: 16, m: 24, l: 32 },
        [mediaSizes.m]: { s: 16, m: 24, l: 32 },
        [mediaSizes.l]: { s: 16, m: 24, l: 32 },
      },
      backgroundColors: {
        checked: {
          disabled: colors.secondary10,
          error: colors.purple10,
          focused: colors.purple10,
          hovered: colors.purple10,
          pressed: colors.purple10,
          normal: colors.purple10,
        },
        normal: {
          disabled: colors.primary20,
          error: colors.primary20,
          focused: colors.primary20,
          hovered: colors.primary20,
          pressed: colors.primary20,
          normal: colors.transparent,
        },
      },
      borderColors: {
        checked: {
          disabled: colors.secondary10,
          error: colors.purple10,
          focused: colors.purple10,
          hovered: colors.purple10,
          pressed: colors.purple10,
          normal: colors.purple10,
        },
        normal: {
          disabled: colors.secondary10,
          error: colors.purple10,
          focused: colors.purple10,
          hovered: colors.purple10,
          pressed: colors.purple10,
          normal: colors.purple10,
        },
      },
    },
  },
  label: {
    fontFamily: fonts.primary,
    padding: {
      [mediaSizes.s]: { s: [0, 0, 8], m: [3, 0, 12], l: [6, 0, 16] },
      [mediaSizes.m]: { s: [0, 0, 8], m: [3, 0, 12], l: [6, 0, 16] },
      [mediaSizes.l]: { s: [0, 0, 8], m: [3, 0, 12], l: [6, 0, 16] },
    },
    position: {
      [mediaSizes.s]: {
        s: { top: 10, left: 16, right: 16 },
        m: { top: 16, left: 16, right: 16 },
        l: { top: 18, left: 16, right: 16 },
      },
      [mediaSizes.m]: {
        s: { top: 10, left: 16, right: 16 },
        m: { top: 16, left: 16, right: 16 },
        l: { top: 18, left: 16, right: 16 },
      },
      [mediaSizes.l]: {
        s: { top: 10, left: 16, right: 16 },
        m: { top: 16, left: 16, right: 16 },
        l: { top: 18, left: 16, right: 16 },
      },
    },
    fontSize: {
      normal: {
        [mediaSizes.s]: { s: 16, m: 16, l: 16 },
        [mediaSizes.m]: { s: 14, m: 16, l: 16 },
        [mediaSizes.l]: { s: 14, m: 16, l: 16 },
      },
      small: {
        [mediaSizes.s]: { s: 12, m: 12, l: 12 },
        [mediaSizes.m]: { s: 12, m: 12, l: 12 },
        [mediaSizes.l]: { s: 12, m: 12, l: 12 },
      },
    },
    lineHeight: {
      normal: {
        [mediaSizes.s]: { s: 20, m: 24, l: 24 },
        [mediaSizes.m]: { s: 20, m: 24, l: 24 },
        [mediaSizes.l]: { s: 20, m: 24, l: 24 },
      },
      small: {
        [mediaSizes.s]: { s: 16, m: 16, l: 16 },
        [mediaSizes.m]: { s: 16, m: 16, l: 16 },
        [mediaSizes.l]: { s: 16, m: 16, l: 16 },
      },
    },
    fontWeight: {
      normal: 400,
      small: 400,
    },
    colors: {
      disabled: colors.secondary10,
      focused: colors.white,
      error: colors.error10,
      normal: colors.white,
    },
  },
  icon: {
    right: {
      [mediaSizes.s]: { s: 8, m: 16, l: 16 },
      [mediaSizes.m]: { s: 8, m: 16, l: 16 },
      [mediaSizes.l]: { s: 8, m: 16, l: 16 },
    },
  },
  element: {
    fontFamily: fonts.primary,
    fontWeight: { s: 400, m: 500, l: 500 },
    borderRadius: 4,
    height: {
      [mediaSizes.s]: { s: 40, m: 56, l: 64 },
      [mediaSizes.m]: { s: 40, m: 56, l: 64 },
      [mediaSizes.l]: { s: 40, m: 56, l: 64 },
    },
    padding: {
      [mediaSizes.s]: {
        vertical: {
          normal: { s: [9, 9], m: [15, 15], l: [19, 19] },
          withLabel: { s: [17, 1], m: [25, 5], l: [29, 9] },
        },
        horizontal: {
          normal: { s: [15, 15], m: [15, 15], l: [15, 15] },
          withIcon: { s: [15, 55], m: [15, 55], l: [15, 55] },
        },
      },
      [mediaSizes.m]: {
        vertical: {
          normal: { s: [9, 9], m: [15, 15], l: [19, 19] },
          withLabel: { s: [17, 1], m: [25, 5], l: [29, 9] },
        },
        horizontal: {
          normal: { s: [15, 15], m: [15, 15], l: [15, 15] },
          withIcon: { s: [15, 55], m: [15, 55], l: [15, 55] },
        },
      },
      [mediaSizes.l]: {
        vertical: {
          normal: { s: [9, 9], m: [15, 15], l: [19, 19] },
          withLabel: { s: [17, 1], m: [25, 5], l: [29, 9] },
        },
        horizontal: {
          normal: { s: [15, 15], m: [15, 15], l: [15, 15] },
          withIcon: { s: [15, 55], m: [15, 55], l: [15, 55] },
        },
      },
    },
    lineHeight: {
      [mediaSizes.s]: { s: 20, m: 24, l: 24 },
      [mediaSizes.m]: { s: 20, m: 24, l: 24 },
      [mediaSizes.l]: { s: 20, m: 24, l: 24 },
    },
    fontSize: {
      [mediaSizes.s]: { s: 16, m: 16, l: 18 },
      [mediaSizes.m]: { s: 14, m: 16, l: 18 },
      [mediaSizes.l]: { s: 14, m: 16, l: 18 },
    },
    colors: {
      disabled: colors.white,
      focused: colors.white,
      error: colors.white,
      normal: colors.white,
    },
    backgroundColors: {
      disabled: colors.secondary10,
      focused: colors.primary10,
      error: colors.primary10,
      normal: colors.primary10,
    },
    borderColors: {
      disabled: colors.secondary10,
      focused: colors.purple10,
      error: colors.error10,
      normal: colors.secondary10,
    },
  },
};
