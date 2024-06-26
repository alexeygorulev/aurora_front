import React from 'react';

import { Color, Font, FontStyle, FontWeight, Size, SpanType } from 'components/_themes/dark/types';

export type SpanProps = Readonly<{
  size?: Size;
  font?: Font;
  color?: Color;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  digital?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'span'>;

export type StyledSpanProps = Readonly<{
  theme: SpanType;
  sSize?: Size;
  sFont?: Font;
  sColor?: Color;
  sFontWeight?: FontWeight;
  sFontStyle?: FontStyle;
  sDigital?: boolean;
}>;
