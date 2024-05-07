import { Theme } from 'components/_themes/types';
import { fieldsLogin } from './LogIn/constants';
import { fieldsSignUp } from './SignUp/constants';
import { IConstraints } from 'utils/checkConstraints';
import { Role } from 'api/store/types';

export type StyledAuthContainerProps = Readonly<{
  theme: Theme;
}>;

export enum Step {
  Login = 'Login',
  Registration = 'Registration',
}

export type IAuthInitialState = {
  mounted: boolean;
  step: Step;
  data: Data;
};

export type InputsAuthLogin = {
  [K in keyof typeof fieldsLogin]: string;
};

export type TouchedInputsAuthLogin = {
  [K in keyof typeof fieldsLogin]: boolean;
};

export type TouchedInputsAuthRegistration = {
  [K in keyof typeof fieldsSignUp]: boolean;
};

export type InputsAuthSignUp = {
  [K in keyof typeof fieldsSignUp]: K extends 'consent' ? boolean : string;
};

export type Data = {
  valuesLogin: InputsAuthLogin;
  touchedLoginFields: TouchedInputsAuthLogin;
  valuesRegistration: InputsAuthSignUp;
  touchedRegistrationFields: TouchedInputsAuthRegistration;
};

export type IHandleChangeArgsLogin = {
  id: keyof typeof fieldsLogin;
  value: string | boolean;
};

export type IHandleChangeArgsRegistration = {
  id: keyof typeof fieldsSignUp;
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

export type UseAuthLogicFields<T> = {
  [K in keyof T]: K extends 'consent' ? boolean : string;
};

export interface UseHandleAuthProps<T> {
  values: Fields<T>;
  touched: TouchedFields<T>;
  constraints: Constraints<T>;
}

export interface UseAuthLogicProps<T> {
  values: UseAuthLogicFields<T>;
}

export interface UseHandleAuthReturn<T> {
  fieldsError: ErrorFieldsValue<T>;
  hasErrors: boolean;
  isHaveEqualPasswordError: boolean;
  isAllFieldsTouched: boolean;
}

export type LogInComponentProps = Readonly<{
  handleChange: () => void;
  handleBlur: () => void;
  checkErrorLogin: (page: Step) => void;
  handleChangeStep: (step: Step) => void;
  values: InputsAuthLogin;
  touched: TouchedInputsAuthLogin;
}>;

export type IConstraintsLogin = {
  login: IConstraints[];
  password: IConstraints[];
};

export type IErrorFieldsValue = {
  login: string;
  password: string;
};

export type SignUpComponentProps = Readonly<{
  handleChange: () => void;
  handleBlur: () => void;
  checkErrorReg: (step: Step) => void;
  handleChangeStep: (step: Step) => void;
  values: InputsAuthSignUp;
  touched: TouchedInputsAuthRegistration;
}>;

export interface SignUpErrorFields {
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  password: string;
  repeat_password: string;
}

export interface PasswordFields {
  password?: string;
  repeat_password?: string;
  consent?: boolean;
}

export interface LoginFormValues {
  login: string;
  password: string;
}
export interface RegistrationFormValues {
  email: string;
  login: string;
  password: string;
  first_name: string;
  last_name: string;
  role: Role;
  consent: boolean;
}

export type AuthFormValues = LoginFormValues | RegistrationFormValues;
