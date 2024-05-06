import { AuthFormValues, RegistrationFormValues, Step } from 'application/Auth/type';

export function isStep(value: any): value is Step {
  return Object.values(Step).includes(value);
}

export function isRegistrationFormValues(values: AuthFormValues): values is RegistrationFormValues {
  return (values as RegistrationFormValues).email !== undefined;
}
