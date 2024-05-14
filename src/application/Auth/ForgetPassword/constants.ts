import { constraintsTypes } from 'utils/checkConstraints';
import { Constraints } from '../type';

export const labels = {
  submit: 'Send an SMS to your email',
  back: 'Back to Login Page',
  email: 'Email',
};

export const fieldsForget = {
  email: 'email',
} as const;

export const constraints: Constraints<{ email: string }> = {
  [fieldsForget.email]: [
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
};
