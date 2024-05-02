import { constraintsTypes } from 'utils/checkConstraints';
import { Constraints } from '../type';

export const fieldsLogin = {
  login: 'login',
  password: 'password',
} as const;

export const labels = {
  main_title: 'Login Page',
  secondary_title: 'Enter your credentials to access your account',
  login_google: 'LogIn with Google',
  login_yandex: 'LogIn with Yandex',
  input_labels: {
    login: 'Login',
    password: 'Password',
    agreement: 'I agree to the Terms & Privacy',
  },
  buttons: {
    login: 'LogIn',
    registration: 'Registration',
  },
  forget_label: 'Forget your password?',
};

export const constraints: Constraints<{ login: string; password: string }> = {
  [fieldsLogin.login]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо указать логин',
    },
  ],
  [fieldsLogin.password]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо указать пароль',
    },
    {
      type: constraintsTypes.range,
      message: 'Пароль должен быть длиной от 6 до 16 символов',
      condition: { min: 6, max: 16 },
    },
    {
      type: constraintsTypes.includes,
      message: 'Пароль должен включать в себя хотя бы одну латинску букву',
      condition: '[A-Za-z]',
    },
    {
      type: constraintsTypes.includes,
      message: 'Пароль должен включать в себя хотя бы одну цифру',
      condition: '[0-9]',
    },
  ],
};
