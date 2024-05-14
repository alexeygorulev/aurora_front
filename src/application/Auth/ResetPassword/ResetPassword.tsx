import { Block, H3, Span } from 'components/atoms/Typography';
import { useGetError } from 'hooks/useGetError';
import { useContext, useEffect, useState } from 'react';
import { constraints, fieldsResetPassword, labels } from './constants';
import InputPassword from 'components/atoms/inputs/InputPassword';
import { no_equal_password_label } from '../SignUp/constants';
import Button from 'components/atoms/Button';
import { LayoutContext } from 'application/context';
import { useNavigate } from 'react-router-dom';
import { useSendUserAuthDataResetPasswordMutation } from 'api/store';
import { ErrorType, createErrorNotification } from 'utils/createErrorNotification';
import { addNotification } from 'application/Alerts';
import { Step } from '../type';
import { useActions } from 'hooks/useActions';
import { changeStep } from 'store/auth/authStore';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [values, setValue] = useState({ password: '', repeat_password: '' });
  const [touched, setTouched] = useState({ password: false, repeat_password: false });

  const [sendUserAuthDataRecoverPassword, { isLoading, isError, error }] = useSendUserAuthDataResetPasswordMutation();

  const actions = useActions({
    changeStep,
  });

  useEffect(() => {
    if (isError && error) {
      createErrorNotification(isError, error as ErrorType);
    }
  }, [isError, error]);

  const { fieldsError, hasErrors, isHaveEqualPasswordError } = useGetError<{
    password: string;
    repeat_password: string;
  }>({
    values,
    touched,
    constraints,
  });
  const { token, backFromResetPassword } = useContext(LayoutContext);

  const handleBlur = ({ id }: { id?: string }) => {
    if (id) {
      setTouched((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleChange = ({ id, value }: { id?: string; value?: any }) => {
    if (id && value) {
      setValue((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleBackClick = () => {
    backFromResetPassword();
    navigate('/authentication');
  };

  const handleSubmit = async () => {
    try {
      if (token && values[fieldsResetPassword.password]) {
        await sendUserAuthDataRecoverPassword({
          data: { password: values[fieldsResetPassword.password] },
          params: { token },
        }).unwrap();
        addNotification({ type: 'success', message: labels.notification });
        localStorage.setItem('step', Step.Login);
        localStorage.removeItem('temporaryToken');
        actions.changeStep(Step.Login);
        navigate('/authentication');
      }
    } catch (error: any) {
      addNotification({ type: 'error', message: labels.tryAgain });
    }
  };

  return (
    <Block>
      <Block padding="s" margin="s">
        <H3 textAlign="center">Введите новый пароль</H3>
      </Block>
      <InputPassword
        id={fieldsResetPassword.password}
        leftIcon={true}
        value={values[fieldsResetPassword.password]}
        error={!!fieldsError[fieldsResetPassword.password] || isHaveEqualPasswordError}
        onBlur={handleBlur}
        onChange={handleChange}
        label={labels.password}
        visible={true}
      />
      {fieldsError[fieldsResetPassword.password] && (
        <Span color="error10" size="s">
          {fieldsError.password}
        </Span>
      )}
      {isHaveEqualPasswordError && (
        <Span style={{ display: 'block' }} color="error10" size="s">
          {no_equal_password_label}
        </Span>
      )}
      <Block padding="xs" margin="xs">
        <InputPassword
          id={fieldsResetPassword.repeat_password}
          leftIcon={true}
          onBlur={handleBlur}
          value={values[fieldsResetPassword.repeat_password]}
          error={!!fieldsError[fieldsResetPassword.repeat_password] || isHaveEqualPasswordError}
          onChange={handleChange}
          label={labels.repeat_password}
          visible={true}
        />
        {fieldsError[fieldsResetPassword.repeat_password] && (
          <Span color="error10" size="s">
            {fieldsError.repeat_password}
          </Span>
        )}
        {isHaveEqualPasswordError && (
          <Span color="error10" size="s">
            {no_equal_password_label}
          </Span>
        )}
      </Block>
      <Block padding="xs" margin="xs">
        <Button
          loading={isLoading}
          onClick={handleSubmit}
          disabled={hasErrors || !values[fieldsResetPassword.password] || !values[fieldsResetPassword.repeat_password]}
          width="100%"
        >
          {labels.submit}
        </Button>
      </Block>
      <Button onClick={handleBackClick} width="100%">
        {labels.back}
      </Button>
    </Block>
  );
}
