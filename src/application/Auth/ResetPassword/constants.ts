import { constraintsTypes } from 'utils/checkConstraints';
import { Constraints } from '../type';

export const labels = {
  password: 'Your password',
  repeat_password: 'Repeat password',
  submit: 'Сonfirm',
  back: 'Back to authorization',
  notification: 'Пароль успешно был изменен',
  tryAgain: 'Не удалось сбросить пароль, попробуйте ещё раз.',
};

export const fieldsResetPassword = {
  password: 'password',
  repeat_password: 'repeat_password',
} as const;

export const constraints: Constraints<{ password: string; repeat_password: string }> = {
  [fieldsResetPassword.repeat_password]: [
    {
      type: constraintsTypes.required,
      message: 'Необходимо ввести еще раз пароль',
    },
  ],
  [fieldsResetPassword.password]: [
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
