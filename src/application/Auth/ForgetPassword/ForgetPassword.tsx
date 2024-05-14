import { Block, H3, H4, Span } from 'components/atoms/Typography';
import InputText from 'components/atoms/inputs/InputText';
import { useGetError } from 'hooks/useGetError';
import { useEffect, useState } from 'react';
import { constraints, fieldsForget, labels } from './constants';
import Button from 'components/atoms/Button';
import { Step } from '../type';
import { useSendUserAuthDataRecoverPasswordMutation } from 'api/store';
import { ErrorType, createErrorNotification } from 'utils/createErrorNotification';
import { addNotification } from 'application/Alerts';

export interface IForgetPassword {
  handleChangeStep: (step: Step) => void;
}

export default function ForgetPassword({ handleChangeStep }: IForgetPassword) {
  const [values, setValue] = useState({ email: '' });
  const [touched, setTouched] = useState({ email: false });
  const [sendUserAuthDataRecoverPassword, { isLoading, isError, error }] = useSendUserAuthDataRecoverPasswordMutation();

  useEffect(() => {
    if (isError && error) {
      createErrorNotification(isError, error as ErrorType);
    }
  }, [isError, error]);

  const { fieldsError, hasErrors } = useGetError<{ email: string }>({
    values,
    touched,
    constraints,
  });

  const handleSubmit = async () => {
    if (!values) return;
    if (!hasErrors && touched[fieldsForget.email]) {
      await sendUserAuthDataRecoverPassword(values);
      addNotification({ type: 'success', message: `Письмо успешно отправлено. Проверьте вашу почту ${values.email}` });
      handleChangeStep(Step.Login);
    }
  };

  return (
    <Block size="m">
      <Block margin="xs" padding="xs">
        <H3 textAlign="center">Введите ваш Email</H3>
      </Block>
      <Block padding="s" margin="s">
        <H4 textAlign="center">Указанный при регистрации</H4>
      </Block>
      <InputText
        id={fieldsForget.email}
        error={!!fieldsError[fieldsForget.email]}
        value={values[fieldsForget.email]}
        onBlur={() => setTouched({ email: true })}
        onChange={({ value }: any) => setValue({ email: value })}
        leftIcon={true}
        success={!!values.email && !fieldsError[fieldsForget.email] && touched[fieldsForget.email]}
        typeIcon="iconMail"
        label={labels.email}
      />
      {fieldsError[fieldsForget.email] && (
        <Span color="error10" size="s">
          {fieldsError.email}
        </Span>
      )}
      <Block padding="s" margin="s">
        <Button disabled={hasErrors || !values} loading={isLoading} onClick={handleSubmit} width="100%">
          {labels.submit}
        </Button>
      </Block>
      <Button onClick={() => handleChangeStep(Step.Login)} width="100%">
        {labels.back}
      </Button>
    </Block>
  );
}
