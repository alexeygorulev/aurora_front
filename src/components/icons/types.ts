import { Color, Display, Size } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';
import React from 'react';
import { iconRefs } from './_constants';

export type IconProps = Readonly<{
  size?: Size;
  color?: Color;
  display?: Display;
  type: IconTypes;
}>;

export type StyledIconProps = Readonly<{
  theme: Theme;
  sSize: Size;
  sDisplay: Display;
}>;

export type StyledIconSvgProps = Readonly<{
  theme: Theme;
  sColor: Color;
}>;

export type IconPrimitiveProps = Readonly<{
  viewBox?: number;
  children?: React.ReactNode | React.ReactNode[];
}> &
  IconProps;

export type IconTypes = keyof typeof iconRefs;
