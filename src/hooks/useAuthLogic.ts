import { useSendUserAuthDataLoginMutation } from 'api/store';
import { AuthFormValues, RegistrationFormValues, UseAuthLogicProps } from 'application/Auth/type';
import { useCallback, useState } from 'react';
import { isRegistrationFormValues } from 'utils/helpers';

export function useAuthHandler<T extends AuthFormValues>({ values }: UseAuthLogicProps<T>) {
  const [sendUserAuthDataLogin, { isLoading: isLoadingLogin, isError: isErrorLogin, error: errorLogin }] =
    useSendUserAuthDataLoginMutation();

  const [sendUserAuthDataRegistration, { isLoading: isLoadingReg, isError: isErrorReg, error: errorReg }] =
    useSendUserAuthDataLoginMutation();

  const [token, setToken] = useState('');

  const onCheckLoginUser = useCallback(async () => {
    if ('login' in values && 'password' in values) {
      const res = await sendUserAuthDataLogin({
        login: values.login,
        password: values.password,
      });
      if ('data' in res) {
        localStorage.setItem('access_token', res.data?.access_token);
      }
    }
  }, [sendUserAuthDataLogin, values, token]);

  const loginParams = {
    isLoadingLogin,
    isErrorLogin,
    onCheckLoginUser,
    errorLogin,
  };

  const onSubscribeUser = useCallback(async () => {
    if (isRegistrationFormValues(values)) {
      const userData: RegistrationFormValues = {
        email: values.email,
        password: values.password,
        login: values.login,
        consent: values.consent,
        role: values.role,
      };

      const res = await sendUserAuthDataRegistration(userData);
      if ('data' in res) setToken(res.data && res.data.access_token);
    }
  }, [sendUserAuthDataRegistration, values]);

  const registrationParams = {
    isLoadingReg,
    isErrorReg,
    onSubscribeUser,
    errorReg,
  };

  return { token, loginParams, registrationParams };
}
