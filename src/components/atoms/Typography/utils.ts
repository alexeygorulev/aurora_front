import { FontWeight, Size, TextAlign, TypeColors } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';
import { textAlign } from './constants';

//PARAGRAPH
export const getParagraphFontFamily = (theme: Theme): string => theme.paragraph.fontFamily;

export const getParagraphFontWeight = (theme: Theme, type: FontWeight): number => {
  if (!type) return theme.paragraph.fontWeight.medium;
  return theme.paragraph.fontWeight[type];
};

export const getParagraphLineHeight = (theme: Theme, size: Size, mediaSize: string): string => {
  if (!size) return `${theme.paragraph.lineHeight[mediaSize]['m']}px`;
  return `${theme.paragraph.lineHeight[mediaSize][size]}px`;
};

export const getParagraphFontSize = (theme: Theme, size: Size, mediaSize: string): string => {
  if (!size) return `${theme.paragraph.fontSizes[mediaSize]['m']}px`;
  return `${theme.paragraph.fontSizes[mediaSize][size]}px`;
};

//HEADING

export const getHeadingFontFamily = (theme: Theme): string => theme.heading.fontFamily;

export const getHeadingFontWeight = (theme: Theme, type: FontWeight): number => {
  if (!type) return theme.heading.fontWeight.medium;
  return theme.heading.fontWeight[type];
};

export const getHeadingLineHeight = (theme: Theme, size: Size, mediaSize: string): string => {
  if (!size) return `${theme.heading.lineHeight[mediaSize]['m']}px`;
  return `${theme.heading.lineHeight[mediaSize][size]}px`;
};

export const getHeadingFontSize = (theme: Theme, size: Size, mediaSize: string): string => {
  if (!size) return `${theme.heading.fontSizes[mediaSize]['m']}px`;
  return `${theme.heading.fontSizes[mediaSize][size]}px`;
};

export const getColor = (theme: Theme, color: TypeColors): string => {
  if (!color) return theme.paragraph.colors['major'];
  return theme.paragraph.colors[color];
};

export const getTextAlign = (type: TextAlign): string => {
  if (!type) return textAlign['left'];
  return textAlign[type];
};

//BLOCK

export const getBlockFontFamily = (theme: Theme): string => theme.block.fontFamily;

export function getBlockMargin(theme: Theme, margin: Size) {
  return theme.block.blockMargin[margin];
}

export function getBlockPadding(
  theme: Theme,
  padding: Size,
  sVPadding: Size | null = null,
  sHPadding: Size | null = null,
) {
  if (sHPadding || sVPadding) {
    const [top = 0, right = 0, bottom = 0, left = 0] = theme.block.blockPadding[padding]?.split(' ') ?? [];
    const vertical = sVPadding ? theme.block.blockPaddingUnit[sVPadding] : null;
    const horizontal = sHPadding ? theme.block.blockPaddingUnit[sHPadding] : null;
    return `${vertical || top} ${horizontal || right} ${vertical || bottom} ${horizontal || left}`;
  }

  return `${theme.block.blockPadding[padding] || 0}`;
}
