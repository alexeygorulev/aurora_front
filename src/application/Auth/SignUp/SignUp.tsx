import { Block, H2, H3, H4, Span } from 'components/atoms/Typography';
import Grid, { Item } from 'components/atoms/Grid';
import Button from 'components/atoms/Button';
import InputText from 'components/atoms/inputs/InputText';
import InputPassword from 'components/atoms/inputs/InputPassword';
import InputCheckbox from 'components/atoms/inputs/InputCheckbox';
import { useTheme } from 'styled-components';
import { StyledAuthContentLine } from '../styles';
import { fieldsSignUp, labels, no_equal_password_label, rolesList } from './constants';
import { RegistrationFormValues, SignUpComponentProps, SignUpErrorFields, Step } from '../type';
import { isMobile } from 'utils/isMobile';
import { useGetError } from 'hooks/useGetError';
import { constraints } from './constants';
import { useAuthHandler } from 'hooks/useAuthLogic';
import { useEffect } from 'react';
import { ErrorType, createErrorNotification } from 'utils/createErrorNotification';

export default function SignUp(props: SignUpComponentProps) {
  const { handleChange, values, handleBlur, handleChangeStep, touched, checkErrorReg } = props;

  const mobileScreen = isMobile.screenSize();

  const { fieldsError, hasErrors, isHaveEqualPasswordError, isAllFieldsTouched } = useGetError<SignUpErrorFields>({
    values,
    touched,
    constraints,
  });

  const { registrationParams } = useAuthHandler<RegistrationFormValues>({ values });
  const { isErrorReg: isError, errorReg: error, onSubscribeUser, isLoadingReg: isLoading } = registrationParams;

  useEffect(() => {
    if (isError && error) {
      createErrorNotification(isError, error as ErrorType);
    }
  }, [isError, error]);

  const onSubmit = async () => {
    checkErrorReg(Step.Registration);
    if (!hasErrors && isAllFieldsTouched) await onSubscribeUser();
  };

  return (
    <>
      <Grid direction="column" alignItems="center">
        {mobileScreen ? <H3>{labels.main_title}</H3> : <H2>{labels.main_title}</H2>}
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
              <Button
                id="Yandex"
                onClick={() =>
                  (window.location.href = `${process.env.REACT_APP_APPLICATION_API_HOST}/aurora-front-api/auth/yandex`)
                }
                fontSize="s"
                typeIcon="iconYandexLogo"
                width="100%"
                type="major"
                rounded={true}
              >
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
              id={fieldsSignUp.email}
              onBlur={handleBlur}
              error={!!fieldsError[fieldsSignUp.email]}
              value={values[fieldsSignUp.email]}
              onChange={handleChange}
              leftIcon={true}
              success={!!values.login && !fieldsError[fieldsSignUp.email] && touched[fieldsSignUp.email]}
              typeIcon="iconMail"
              label={labels.input_labels.email}
            />
          </Block>
          {fieldsError[fieldsSignUp.email] && (
            <Span color="error10" size="s">
              {fieldsError.email}
            </Span>
          )}
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <InputText
              id={fieldsSignUp.login}
              value={values[fieldsSignUp.login]}
              error={!!fieldsError[fieldsSignUp.login]}
              onChange={handleChange}
              onBlur={handleBlur}
              success={!!values.login && !fieldsError[fieldsSignUp.login] && touched[fieldsSignUp.login]}
              leftIcon={true}
              typeIcon="iconUser"
              label={labels.input_labels.login}
            />
          </Block>
          {fieldsError[fieldsSignUp.login] && (
            <Span color="error10" size="s">
              {fieldsError.login}
            </Span>
          )}
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <InputText
              id={fieldsSignUp.first_name}
              value={values[fieldsSignUp.first_name]}
              error={!!fieldsError[fieldsSignUp.first_name]}
              onChange={handleChange}
              onBlur={handleBlur}
              success={!!values.first_name && !fieldsError[fieldsSignUp.first_name] && touched[fieldsSignUp.first_name]}
              leftIcon={true}
              typeIcon="iconUser"
              label={labels.input_labels.first_name}
            />
          </Block>
          {fieldsError[fieldsSignUp.first_name] && (
            <Span color="error10" size="s">
              {fieldsError.first_name}
            </Span>
          )}
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <InputText
              id={fieldsSignUp.last_name}
              value={values[fieldsSignUp.last_name]}
              error={!!fieldsError[fieldsSignUp.last_name]}
              onChange={handleChange}
              onBlur={handleBlur}
              success={!!values.last_name && !fieldsError[fieldsSignUp.last_name] && touched[fieldsSignUp.last_name]}
              leftIcon={true}
              typeIcon="iconUser"
              label={labels.input_labels.last_name}
            />
          </Block>
          {fieldsError[fieldsSignUp.last_name] && (
            <Span color="error10" size="s">
              {fieldsError.last_name}
            </Span>
          )}
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <InputPassword
              id={fieldsSignUp.password}
              leftIcon={true}
              onBlur={handleBlur}
              value={values[fieldsSignUp.password]}
              error={!!fieldsError[fieldsSignUp.password] || isHaveEqualPasswordError}
              onChange={handleChange}
              label={labels.input_labels.password}
              visible={true}
            />
          </Block>
          {fieldsError[fieldsSignUp.password] && (
            <Span color="error10" size="s">
              {fieldsError.password}
            </Span>
          )}
          {isHaveEqualPasswordError && (
            <Span style={{ display: 'block' }} color="error10" size="s">
              {no_equal_password_label}
            </Span>
          )}
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <InputPassword
              id={fieldsSignUp.repeat_password}
              leftIcon={true}
              onBlur={handleBlur}
              value={values[fieldsSignUp.repeat_password]}
              error={!!fieldsError[fieldsSignUp.repeat_password] || isHaveEqualPasswordError}
              onChange={handleChange}
              label={labels.input_labels.repeat_password}
              visible={true}
            />
          </Block>
          {fieldsError[fieldsSignUp.repeat_password] && (
            <Span color="error10" size="s">
              {fieldsError.repeat_password}
            </Span>
          )}
          {isHaveEqualPasswordError && (
            <Span color="error10" size="s">
              {no_equal_password_label}
            </Span>
          )}
        </Item>
        <Item size={12}>
          <Block padding="xs" margin="xs">
            <Grid>
              {rolesList.map((role) => (
                <Item key={role} size={4}>
                  <Button
                    id={role}
                    rounded={true}
                    isSelected={values.role === role}
                    onClick={handleChange}
                    width={400}
                    type="secondary"
                    size="s"
                  >
                    {role}
                  </Button>
                </Item>
              ))}
            </Grid>
          </Block>
        </Item>
      </Grid>
      <Item size={12}>
        <Block padding="xs" margin="xs">
          <InputCheckbox id={fieldsSignUp.consent} onBlur={handleBlur} onChange={handleChange} value={values.consent}>
            {labels.input_labels.agreement}
          </InputCheckbox>
        </Block>
      </Item>
      <Item size={12}>
        <Block padding="xs" margin="xs">
          <Button
            loading={isLoading}
            onClick={onSubmit}
            disabled={hasErrors || !isAllFieldsTouched || isHaveEqualPasswordError || !values.consent}
            width="100%"
          >
            {labels.buttons.registration}
          </Button>
        </Block>
      </Item>
      <Item size={12}>
        <Block padding="xs" margin="xs">
          <Button onClick={() => handleChangeStep(Step.Login)} width="100%">
            {labels.buttons.login}
          </Button>
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
