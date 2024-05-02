import { Theme } from 'components/_themes/types';
import { fieldsLogin } from './LogIn/constants';
import { fieldsSignUp } from './SignUp/constants';
import { IConstraints } from 'utils/checkConstraints';

export type StyledAuthContainerProps = Readonly<{
  theme: Theme;
}>;

export type IAuthInitialState = {
  mounted: boolean;
  data: Data;
};

export type InputsAuthLogin = {
  [K in keyof typeof fieldsLogin]: string;
};

export type TouchedInputsAuthLogin = {
  [K in keyof typeof fieldsLogin]: boolean;
};

export type InputsAuthSignUp = {
  [K in keyof typeof fieldsSignUp]: K extends 'consent' ? boolean : string;
};

export type Data = {
  valuesLogin: InputsAuthLogin;
  touchedLoginFields: TouchedInputsAuthLogin;
};

export type IHandleChangeArgs = {
  id: keyof typeof fieldsLogin;
  value: string | boolean;
};

export type Fields<T> = {
  [K in keyof T]: string;
};

export type TouchedFields<T> = {
  [K in keyof T]: boolean;
};

export type Constraints<T> = {
  [K in keyof T]: IConstraints[];
};

export type ErrorFieldsValue<T> = {
  [K in keyof T]?: string;
};

export interface UseHandleAuthProps<T> {
  values: Fields<T>;
  touched: TouchedFields<T>;
  constraints: Constraints<T>;
}

export interface UseHandleAuthReturn<T> {
  fieldsError: ErrorFieldsValue<T>;
  hasErrors: boolean;
}
