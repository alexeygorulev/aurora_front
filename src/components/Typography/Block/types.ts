import { FontWeight, Size, TextAlign, TypeColors } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';

export type BlockComponentProps = Readonly<{
  size?: Size;
  color?: TypeColors;
  textAlign?: TextAlign;
  margin?: Size;
  weight?: FontWeight;
  padding?: Size;
  vPadding?: Size | null;
  hPadding?: Size | null;
  withoutLineHeight?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'div'>;

export type StyledBlockProps = Readonly<{
  theme: Theme;
  sSize: Size;
  sColor: TypeColors;
  sTextAlign: TextAlign;
  sMargin: Size;
  sWeight: FontWeight;
  withoutLineHeight: boolean;
  sPadding: Size;
  sHPadding: Size | null;
  sVPadding: Size | null;
}>;
