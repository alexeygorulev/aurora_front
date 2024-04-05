import { TextAlign } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';

type Size = 's' | 'm' | 'l';

export type StyledInputElementProps = Readonly<{
  theme: Theme;
  sSize: Size;
  sTextAlign?: TextAlign;
  sDisabled: boolean;
  sError: boolean;
  sFocused: boolean;
  sWithLabel?: boolean;
  sWithIcon?: boolean;
  sLeftIcon?: boolean;
}>;

export type InputProps = Readonly<{
  id?: string;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  onFocus?: (params: InputEventParams) => void;
  onBlur?: (params: InputEventParams) => void;
  onChange?: (params: InputEventParams) => void;
}>;

export type InputEventParams = Readonly<{
  id?: string;
  value?: string | string[] | number | boolean;
  formattedValue?: string;
  option?: Option;
}>;

export type Option = Readonly<{
  value: string;
  title?: string;
  data?: Record<string, any>;
}>;

export type StyledInputBaseProps = Readonly<{
  sAutoComplete?: boolean;
}> &
  StyledInputElementProps;

export type StyledInputLabelProps = Readonly<{
  theme: Theme;
  sSize: Size;
  sSmall?: boolean;
  sError?: boolean;
  sSuccess?: boolean;
  sDisabled?: boolean;
  sClearable?: boolean;
  sFocused?: boolean;
  sLeftIcon?: boolean;
}>;

export type StyledInputIconProps = Readonly<{
  theme: Theme;
  sSize: Size;
  sClickable?: boolean;
  sDisabled?: boolean;
}>;
