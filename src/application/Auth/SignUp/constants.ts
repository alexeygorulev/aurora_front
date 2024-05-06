import { constraintsTypes } from 'utils/checkConstraints';
import { Constraints, SignUpErrorFields } from '../type';

export const fieldsSignUp = {
  email: 'email',
  login: 'login',
  password: 'password',
  repeat_password: 'repeat_password',
  role: 'role',
  consent: 'consent',
} as const;

export const roles = {
  user: 'User',
  admin: 'Admin',
  moderator: 'Moderator',
};

export const rolesList = [roles.admin, roles.moderator, roles.user];

export const labels = {
  main_title: 'Registration Page',
  secondary_title: 'Enter your credentials to access your account',
  login_google: 'LogIn with Google',
  login_yandex: 'LogIn with Yandex',
  input_labels: {
    email: 'Email',
    login: 'Login',
    password: 'Password',
    repeat_password: 'Repeat password',
    role: 'Choose your role',
    agreement: 'I agree to the Terms & Privacy',
  },
  buttons: {
    login: 'Back to Log In Page',
    registration: 'Registration',
  },
  forget_label: 'Forget your password?',
};

export const no_equal_password_label = 'Пароли должны совпадать';

export const constraints: Constraints<SignUpErrorFields> = {
  [fieldsSignUp.login]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо указать логин',
    },
    {
      type: constraintsTypes.range,
      message: 'Пароль должен быть длиной от 3 до 16 символов',
      condition: { min: 3, max: 16 },
    },
  ],
  [fieldsSignUp.email]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо указать email',
    },
    {
      type: constraintsTypes.pattern,
      message: 'Некорректный формат email',
      condition: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
    },
  ],
  [fieldsSignUp.repeat_password]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо ввести еще раз пароль',
    },
  ],
  [fieldsSignUp.password]: [
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
