import { ButtonSizes, ButtonTypes, Display, FontWeight, LoaderSize, LoaderTypes } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';
import { IconTypes } from 'components/icons/types';

export type ButtonClickEventParams = Readonly<{
  id?: string;
}>;

export type ButtonComponentProps = Readonly<{
  id?: string;
  type?: ButtonTypes;
  typeIcon?: IconTypes | null;
  size?: ButtonSizes;
  width?: number | string;
  display?: Display;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  isSelected?: boolean;
  weight?: FontWeight;
  onClick?: (params: ButtonClickEventParams) => void;
  loaderSize?: LoaderSize;
  loaderType?: LoaderTypes;
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
  isLeaveBackGround: boolean;
  sSelected: boolean;
}>;
