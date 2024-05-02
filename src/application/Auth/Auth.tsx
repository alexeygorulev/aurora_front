import auroraAuthPreview from 'components/_common/AuroraAuth.png';
import auroraLogo from 'components/_common/Logo.png';
import { useTheme } from 'styled-components';
import { H2, H4 } from 'components/atoms/Typography';
import LogIn from './LogIn';
import {
  StyledAuroraLogo,
  StyledAuthContainer,
  StyledAuthContent,
  StyledAuthPreview,
  StyledAuthPreviewContent,
  StyledAuthWrapper,
} from './styles';
import { useActions } from 'hooks/useActions';
import { handleBlur, handleChange, mount, unmount } from 'store/auth/authStore';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'index';

export default function Auth() {
  const { mounted, data } = useSelector((state: RootState) => state?.authReducer) || {};

  const actions = useActions({ mount, unmount, handleChange, handleBlur });
  const theme = useTheme();

  useEffect(() => {
    if (!mounted) actions.mount();

    return () => {
      if (mounted) actions.unmount();
    };
  }, [mounted]);

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
        <StyledAuthContent>
          <LogIn
            handleChange={actions.handleChange}
            touched={data.touchedLoginFields}
            handleBlur={actions.handleBlur}
            values={data.valuesLogin}
          />
        </StyledAuthContent>
      </StyledAuthContainer>
    </StyledAuthWrapper>
  );
}
