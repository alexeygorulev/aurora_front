import React from 'react';

import { Theme } from 'components/_themes/types';
import { InputProps, StyledInputElementProps } from '../types';

export type InputCheckboxProps = Readonly<{
  value?: boolean;
  block?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  InputProps;

export type StyledInputCheckboxProps = Readonly<{
  theme: Theme;
  sBlock: boolean;
  sChecked: boolean;
}> &
  StyledInputElementProps;

export type StyledInputProps = Readonly<{
  sWidth?: number | string;
}>;
