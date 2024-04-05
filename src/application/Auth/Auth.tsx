import { Theme } from 'components/_themes/types';
import { StyledLayoutProps } from 'components/molecules/type';
import auroraAuthPreview from 'components/_common/AuroraAuth.png';
import styled, { useTheme } from 'styled-components';
import { media } from 'components/_themes/constants';
import { Block, H2, H4, Span } from 'components/atoms/Typography';
import Grid, { Item } from 'components/atoms/Grid';
import Button from 'components/atoms/Button';
import InputText from 'components/atoms/inputs/InputText';
import InputPassword from 'components/atoms/inputs/InputPassword';
import InputCheckbox from 'components/atoms/inputs/InputCheckbox';

export function getLayoutBackgroundColor(props: StyledLayoutProps, sAuthContentLine = false) {
  if (sAuthContentLine) return props.theme.block.colors['primary'];
  return props.theme.block.backgrounds.background_secondary;
}
export type StyledAuthContainerProps = Readonly<{
  theme: Theme;
}>;

export const StyledAuthContainer = styled.div<StyledAuthContainerProps>`
  position: relative;
  max-width: 900px;
  width: 100%;
  height: 80vh;

  overflow-y: scroll;
  border-radius: 12px;
  max-height: 822px;
  display: flex;
  background: ${(props) => getLayoutBackgroundColor(props)};

  @media (${media.largePhone}) {
    width: 90vw;
    padding: 0;
    overflow: hidden;
  }
`;

export const StyledAuthWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  outline: none;
  min-height: 100vh;
`;
export const StyledAuthPreview = styled.div`
  display: none;
  position: relative;
  width: 50%;
  & img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
    z-index: 2;
  }
  @media (${media.tablet}) {
    display: block;
  }
`;

export const StyledAuthContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 16px;

  @media (${media.tablet}) {
    width: 50%;
  }
`;

export const StyledAuthContentLine = styled.div<{ theme: Theme }>`
  width: 100%;
  margin-top: 5px;
  height: 1px;
  background: ${(props) => getLayoutBackgroundColor(props, true)};
  &::before {
    position: absolute;
    content: '';
    width: 38px;
    height: 20px;
    background: ${(props) => getLayoutBackgroundColor(props)};
    left: 47%;
    top: -3px;
  }
`;

const Auth = () => {
  return (
    <StyledAuthWrapper>
      <StyledAuthContainer theme={useTheme()}>
        <StyledAuthPreview>
          <img src={auroraAuthPreview} alt="" />
        </StyledAuthPreview>
        <StyledAuthContent>
          <Grid direction="column" alignItems="center">
            <H2>Login Page</H2>
            <Block>
              <H4 textAlign="center" weight="extraLight">
                Enter your credentials to access your account
              </H4>
            </Block>
            <Item size={12}>
              <Grid justify="center">
                <Item size={9} tablet={6}>
                  <Button id="Google" fontSize="s" typeIcon="iconGoogle" width="100%" type="major" rounded={true}>
                    Login with Google
                  </Button>
                </Item>
                <Item size={9} tablet={6}>
                  <Button id="Yandex" fontSize="s" typeIcon="iconGoogle" width="100%" type="major" rounded={true}>
                    Login with Yandex
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
                <InputText leftIcon={true} typeIcon="iconUser" label="Login" />
              </Block>
            </Item>
            <Item size={12}>
              <InputPassword leftIcon={true} label="Login" visible={true} />
            </Item>
          </Grid>
          <Item size={12}>
            <Block>
              <InputCheckbox>I agree to the Terms & Privacy</InputCheckbox>
            </Block>
          </Item>
          <Item size={12}>
            <Block padding="xs" margin="xs">
              <Button width="100%">Log In</Button>
            </Block>
          </Item>
          <Item size={12}>
            <Block padding="xs" margin="xs">
              <Button width="100%">Registration</Button>
            </Block>
          </Item>
          <Block padding="xs" margin="xs">
            <H4 style={{ cursor: 'pointer' }} weight="extraLight" textAlign="center">
              Forget your password?
            </H4>
          </Block>
        </StyledAuthContent>
      </StyledAuthContainer>
    </StyledAuthWrapper>
  );
};

export default Auth;
