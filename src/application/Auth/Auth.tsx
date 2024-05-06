import auroraAuthPreview from 'components/_common/AuroraAuth.png';
import auroraLogo from 'components/_common/Logo.png';
import { useTheme } from 'styled-components';
import { H2, H4 } from 'components/atoms/Typography';
import {
  StyledAuroraLogo,
  StyledAuthContainer,
  StyledAuthContent,
  StyledAuthPreview,
  StyledAuthPreviewContent,
  StyledAuthWrapper,
} from './styles';
import { useActions } from 'hooks/useActions';
import {
  handleChangeRegistration,
  handleChangeLogin,
  mount,
  unmount,
  changeStep,
  handleBlurRegistration,
  handleBlurLogin,
  checkFieldsByError,
} from 'store/auth/authStore';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'index';
import SignUp from './SignUp/SignUp';
import { Step } from './type';
import LogIn from './LogIn';

export default function Auth() {
  const { mounted, data, step } = useSelector((state: RootState) => state?.authReducer) || {};

  const actions = useActions({
    mount,
    unmount,
    handleChangeRegistration,
    handleChangeLogin,
    handleBlurLogin,
    handleBlurRegistration,
    changeStep,
    checkFieldsByError,
  });

  const theme = useTheme();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) actions.mount();

    return () => {
      if (mounted) actions.unmount();
    };
  }, [mounted]);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollTop = 0;
    }
  }, [step]);

  if (!mounted) return null;

  return (
    <StyledAuthWrapper>
      <StyledAuthContainer theme={theme}>
        <StyledAuthPreview>
          <img src={auroraAuthPreview} alt="" />
          <StyledAuthPreviewContent>
            <H2 color="light"></H2>
            <div style={{ width: '160px', height: '40px', display: 'flex', alignItems: 'center' }}>
              <H4 color="light">Created By</H4>
              <div style={{ width: 40, marginLeft: 10 }}>
                <StyledAuroraLogo src={auroraLogo} />
              </div>
            </div>
          </StyledAuthPreviewContent>
        </StyledAuthPreview>
        <StyledAuthContent ref={formRef} SignUp={step === Step.Registration}>
          {step == Step.Login && (
            <LogIn
              handleChange={actions.handleChangeLogin}
              touched={data.touchedLoginFields}
              handleBlur={actions.handleBlurLogin}
              values={data.valuesLogin}
              handleChangeStep={actions.changeStep}
              checkErrorLogin={actions.checkFieldsByError}
            />
          )}

          {step === Step.Registration && (
            <SignUp
              handleChange={actions.handleChangeRegistration}
              values={data.valuesRegistration}
              touched={data.touchedRegistrationFields}
              handleBlur={actions.handleBlurRegistration}
              handleChangeStep={actions.changeStep}
              checkErrorReg={actions.checkFieldsByError}
            />
          )}
        </StyledAuthContent>
      </StyledAuthContainer>
    </StyledAuthWrapper>
  );
}
