import { colors, gradients } from './_colors';
import { fontStyles, fontWeights, fonts } from './_fonts';
import { display } from './_typography';
import { styles as span } from './span';
import { refs as typographyRefs } from './_typography';
import { refs as buttonRefs } from './button';
import { mediaSizes } from '../constants';

export type Size = keyof typeof typographyRefs.sizes;

export type MediaSizes = keyof typeof mediaSizes;

export type Font = keyof typeof fonts;

export type Color = keyof typeof colors;

export type TypeColors = keyof typeof typographyRefs.colors;

export type Gradient = keyof typeof gradients;

export type TextAlign = keyof typeof typographyRefs.textAlign;

export type FontWeight = keyof typeof fontWeights;

export type FontLineHeight = keyof typeof typographyRefs.lineHeight;

export type FontStyle = keyof typeof fontStyles;

export type Display = keyof typeof display;

export type ColorsType = typeof colors;

export type SpanType = typeof span;

export type ButtonTypes = keyof typeof buttonRefs.types;

export type ButtonSizes = keyof typeof buttonRefs.sizes;

export type ButtonAnimationTypes = keyof typeof buttonRefs.animation;
