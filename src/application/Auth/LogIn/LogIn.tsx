import { Block, H2, H4, Span } from 'components/atoms/Typography';
import Grid, { Item } from 'components/atoms/Grid';
import Button from 'components/atoms/Button';
import InputText from 'components/atoms/inputs/InputText';
import InputPassword from 'components/atoms/inputs/InputPassword';
import { useTheme } from 'styled-components';
import { StyledAuthContentLine } from '../styles';
import { constraints, fieldsLogin, labels } from './constants';
import { InputsAuthLogin, TouchedInputsAuthLogin } from '../type';
import { useSendUserAuthDataMutation } from 'api/store';
import { useEffect } from 'react';
import { IConstraints } from 'utils/checkConstraints';
import { useHandleAuth } from 'hooks/useGetError';
import { ErrorType, createErrorNotification } from 'utils/createErrorNotification';

export type LogInComponentProps = Readonly<{
  handleChange: () => void;
  handleBlur: () => void;
  values: InputsAuthLogin;
  touched: TouchedInputsAuthLogin;
}>;

export type IConstraintsLogin = {
  login: IConstraints[];
  password: IConstraints[];
};

export type IErrorFieldsValue = {
  login: string;
  password: string;
};

export default function LogIn(props: LogInComponentProps) {
  const { handleBlur, handleChange, values, touched } = props;

  const [sendUserAuthData, { isLoading, isError, error }] = useSendUserAuthDataMutation();

  useEffect(() => {
    if (isError && error) {
      createErrorNotification(isError, error as ErrorType);
    }
  }, [isError, error]);

  const { fieldsError, hasErrors } = useHandleAuth<{ login: string; password: string }>({
    values,
    touched,
    constraints,
  });

  const onSubmit = async () => {
    if (!hasErrors) await sendUserAuthData(values);
  };

  return (
    <>
      <Grid direction="column" alignItems="center">
        <H2>{labels.main_title}</H2>
        <Block>
          <H4 textAlign="center" weight="extraLight">
            {labels.secondary_title}
          </H4>
        </Block>
        <Item size={12}>
          <Grid justify="center">
            <Item size={9} tablet={6}>
              <Button id="Google" fontSize="s" typeIcon="iconGoogle" width="100%" type="major" rounded={true}>
                {labels.login_google}
              </Button>
            </Item>
            <Item size={9} tablet={6}>
              <Button id="Yandex" fontSize="s" typeIcon="iconYandexLogo" width="100%" type="major" rounded={true}>
                {labels.login_yandex}
              </Button>
            </Item>
          </Grid>
        </Item>
        <Item size={12}>
          <StyledAuthContentLine theme={useTheme()}>
            <div style={{ position: 'absolute', left: '49.4%', top: '0' }}>
              <Span color="secondary">or</Span>
            </div>
          </StyledAuthContentLine>
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <InputText
              id={fieldsLogin.login}
              success={!!values.login && !fieldsError[fieldsLogin.login]}
              value={values.login}
              onChange={handleChange}
              error={!!fieldsError[fieldsLogin.login]}
              onBlur={handleBlur}
              leftIcon={true}
              typeIcon="iconUser"
              label={labels.input_labels.login}
            />
            {fieldsError[fieldsLogin.login] && (
              <Block padding="xs" margin="xs">
                <Span color="error10" size="s">
                  {fieldsError.login}
                </Span>
              </Block>
            )}
          </Block>
        </Item>
        <Item size={12}>
          <InputPassword
            id={fieldsLogin.password}
            value={values.password}
            onChange={handleChange}
            error={!!fieldsError[fieldsLogin.password]}
            onBlur={handleBlur}
            leftIcon={true}
            label={labels.input_labels.password}
            visible={true}
          />
          {fieldsError[fieldsLogin.password] && (
            <Block padding="xs" margin="xs">
              <Span color="error10" size="s">
                {fieldsError.password}
              </Span>
            </Block>
          )}
        </Item>
      </Grid>
      {/* <Item size={12}>
        <Block>
          <InputCheckbox id={fieldsLogin.consent} onChange={handleChange} value={values.consent}>
            {labels.input_labels.agreement}
          </InputCheckbox>
        </Block>
      </Item> */}
      <Item size={12}>
        <Block padding="xs" margin="xs">
          <Button onClick={onSubmit} loading={isLoading} width="100%">
            {labels.buttons.login}
          </Button>
        </Block>
      </Item>
      <Item size={12}>
        <Block padding="xs" margin="xs">
          <Button width="100%">{labels.buttons.registration}</Button>
        </Block>
      </Item>
      <Block padding="xs" margin="xs">
        <H4 style={{ cursor: 'pointer' }} weight="extraLight" textAlign="center">
          {labels.forget_label}
        </H4>
      </Block>
    </>
  );
}
