import { Block, H2, H4, Span } from 'components/atoms/Typography';
import Grid, { Item } from 'components/atoms/Grid';
import Button from 'components/atoms/Button';
import InputText from 'components/atoms/inputs/InputText';
import InputPassword from 'components/atoms/inputs/InputPassword';
import InputCheckbox from 'components/atoms/inputs/InputCheckbox';
import { useTheme } from 'styled-components';
import { StyledAuthContentLine } from '../styles';
import { fieldsSignUp, labels } from './constants';
import { InputsAuthSignUp } from '../type';

export type SignUpComponentProps = Readonly<{
  handleChange: () => void;
  values: InputsAuthSignUp;
}>;

export default function SignIn(props: SignUpComponentProps) {
  const { handleChange, values } = props;

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
              <Button id="Yandex" fontSize="s" typeIcon="iconGoogle" width="100%" type="major" rounded={true}>
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
            <InputText id={fieldsSignUp.email} leftIcon={true} typeIcon="iconUser" label={labels.input_labels.login} />
          </Block>
        </Item>
        <Item size={12}>
          <InputPassword leftIcon={true} label={labels.input_labels.password} visible={true} />
        </Item>
      </Grid>
      <Item size={12}>
        <Block>
          <InputCheckbox id={fieldsSignUp.consent} onChange={handleChange} value={values.consent}>
            {labels.input_labels.agreement}
          </InputCheckbox>
        </Block>
      </Item>
      <Item size={12}>
        <Block padding="xs" margin="xs">
          <Button width="100%">{labels.buttons.login}</Button>
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
