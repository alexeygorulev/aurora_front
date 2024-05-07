import { useSendUserAuthDataLoginMutation, useSendUserAuthDataRegistrationMutation } from 'api/store';
import { AuthFormValues, RegistrationFormValues, UseAuthLogicProps } from 'application/Auth/type';
import { useCallback } from 'react';
import { isRegistrationFormValues } from 'utils/helpers';

export function useAuthHandler<T extends AuthFormValues>({ values }: UseAuthLogicProps<T>) {
  const [sendUserAuthDataLogin, { isLoading: isLoadingLogin, isError: isErrorLogin, error: errorLogin }] =
    useSendUserAuthDataLoginMutation();

  const [sendUserAuthDataRegistration, { isLoading: isLoadingReg, isError: isErrorReg, error: errorReg }] =
    useSendUserAuthDataRegistrationMutation();

  const onCheckLoginUser = useCallback(async () => {
    if ('login' in values && 'password' in values) {
      await sendUserAuthDataLogin({
        login: values.login,
        password: values.password,
      });
      window.location.reload();
    }
  }, [sendUserAuthDataLogin, values]);

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
        first_name: values.first_name,
        last_name: values.last_name,
        consent: values.consent,
        role: values.role,
      };

      await sendUserAuthDataRegistration(userData);
      window.location.reload();
    }
  }, [sendUserAuthDataRegistration, values]);

  const registrationParams = {
    isLoadingReg,
    isErrorReg,
    onSubscribeUser,
    errorReg,
  };

  return { loginParams, registrationParams };
}
