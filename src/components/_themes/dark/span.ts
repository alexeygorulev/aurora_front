import { mediaSizes } from '../constants';
import { fonts, fontWeights, fontStyles } from './_fonts';
import { colors } from './_colors';

export const styles = {
  font: { ...fonts },
  color: { ...colors },
  fontWeight: { ...fontWeights },
  fontStyle: { ...fontStyles },
  size: {
    [mediaSizes.s]: { xs: 10, s: 16, m: 25, l: 40, xl: 64 },
    [mediaSizes.m]: { xs: 10, s: 16, m: 25, l: 40, xl: 64 },
    [mediaSizes.l]: { xs: 10, s: 16, m: 25, l: 40, xl: 64 },
  },
  lineHeight: {
    [mediaSizes.s]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.m]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.l]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
  },
};
