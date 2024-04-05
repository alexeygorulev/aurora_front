import { TextAlign } from 'components/_themes/dark/types';
import { InputProps, StyledInputBaseProps } from '../types';
import { IconTypes } from 'components/icons/types';

export type InputTextInputMode = 'text' | 'email';

export type InputTextProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  leftIcon?: boolean;
  sLeftIcon?: boolean;
  typeIcon?: IconTypes;
  success?: boolean;
  clearable?: boolean;
  textAlign?: TextAlign;
  autoComplete?: boolean;
  maxLength?: number;
  format?: (value?: string, maxLength?: number) => string;
  deformat?: (value?: string) => string;
  autosize?: boolean;
  inputMode?: InputTextInputMode;
}> &
  InputProps;

export type StyledInputTextProps = StyledInputBaseProps;
