import { ButtonSizes, ButtonTypes, Display, FontWeight } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';

export type ButtonClickEventParams = Readonly<{
  id?: string;
}>;

export type ButtonComponentProps = Readonly<{
  id?: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  width?: number | string;
  display?: Display;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  weight?: FontWeight;
  onClick?: (params: ButtonClickEventParams) => void;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledButtonProps = Readonly<{
  theme: Theme;
  sDisplay: Display;
  sFontWeight: FontWeight;
  sDisabled: boolean;
  sWidth: string | number;
  sType: ButtonTypes;
  sFocused: boolean;
  sSize: ButtonSizes;
  sRounded: boolean;
}>;
