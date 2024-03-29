import { FontWeight, Size, TextAlign, TypeColors } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';

export type HeadingComponentProps = Readonly<{
  size?: Size;
  textAlign?: TextAlign;
  color?: TypeColors;
  noMargin?: boolean;
  weight?: FontWeight;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'h1'>;

export type StyledHeadingProps = Readonly<{
  theme: Theme;
  noMargin?: boolean;
  sSize: Size;
  sColor: TypeColors;
  sTextAlign: TextAlign;
  sWeight: FontWeight;
}>;
