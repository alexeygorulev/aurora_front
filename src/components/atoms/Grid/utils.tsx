import { Size } from 'components/_themes/dark/types';
import { gridSizes, gridStyles } from './_constants';
import { GridComponentAlignItems, GridComponentDirection, GridComponentJustify, GridComponentSizes } from './types';

export const px = (value: number | string): string =>
  /^\d+(\.\d+)?$/.test(value.toString()) ? `${value}px` : value.toString();

export function getSpacing(spacing: Size, mediaSize: string): string {
  return px(gridStyles.spacing[mediaSize][spacing] || spacing);
}

export const getJustify = (justify: GridComponentJustify): string => gridStyles.justify[justify];

export const getAlignItems = (alignItems: GridComponentAlignItems): string => gridStyles.alignItems[alignItems];

export const getDirection = (direction: GridComponentDirection): string => gridStyles.directions[direction];

export const getItemWidth = (
  size: GridComponentSizes,
  tablet: GridComponentSizes | null,
  desktop: GridComponentSizes | null,
): string => {
  const sizes = Object.values(gridSizes);
  let computedSize = size;
  if (tablet && sizes.includes(tablet)) computedSize = tablet;
  if (desktop && sizes.includes(desktop)) computedSize = desktop;
  return computedSize ? `${gridStyles.item_width[desktop ?? tablet ?? size]}%` : 'auto';
};
