import { TextAlign } from 'components/_themes/dark/types';
import { InputProps } from '../types';

export type InputPasswordProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  leftIcon?: boolean;
  textAlign?: TextAlign;
  autoComplete?: boolean;
  maxLength?: number;
  format?: (value?: string, maxLength?: number) => string;
  deformat?: (value?: string) => string;
  autosize?: boolean;
  visible?: boolean;
}> &
  InputProps;

export type StyledInputPasswordProps = Readonly<{
  sAutoComplete: boolean;
  sHidden: boolean;
}>;
