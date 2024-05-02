import { ErrorFieldsValue, UseHandleAuthProps, UseHandleAuthReturn } from 'application/Auth/type';
import { useEffect, useState } from 'react';
import checkConstraints from 'utils/checkConstraints';

export function useHandleAuth<T>({ values, touched, constraints }: UseHandleAuthProps<T>): UseHandleAuthReturn<T> {
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

  return {
    fieldsError,
    hasErrors,
  };
}
