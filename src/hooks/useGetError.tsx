import { fieldsSignUp } from 'application/Auth/SignUp/constants';
import { ErrorFieldsValue, PasswordFields, UseHandleAuthProps, UseHandleAuthReturn } from 'application/Auth/type';
import { useEffect, useState } from 'react';
import checkConstraints from 'utils/checkConstraints';

export function useGetError<T extends PasswordFields>({
  values,
  touched,
  constraints,
}: UseHandleAuthProps<T>): UseHandleAuthReturn<T> {
  const [fieldsError, setFieldsError] = useState<ErrorFieldsValue<T>>({});

  useEffect(() => {
    const errors = Object.keys(values).reduce((acc: ErrorFieldsValue<T>, key: string) => {
      const fieldKey = key as keyof T;
      if (touched[fieldKey]) {
        acc[fieldKey] = checkConstraints(values[fieldKey], constraints[fieldKey]);
      }
      return acc;
    }, {});

    setFieldsError(errors);
  }, [values, touched, constraints]);

  const hasErrors = Object.values(fieldsError).some((error) => !!error);

  const isHaveEqualPasswordError = (() => {
    const { password, repeat_password } = values;
    if (touched[fieldsSignUp.password] && touched[fieldsSignUp.repeat_password] && password && repeat_password) {
      return password !== repeat_password;
    }
    return false;
  })();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { consent, ...touchedFields } = touched;
  const isAllFieldsTouched = Object.values(touchedFields).every((item) => !!item);

  return {
    fieldsError,
    hasErrors,
    isHaveEqualPasswordError,
    isAllFieldsTouched,
  };
}
