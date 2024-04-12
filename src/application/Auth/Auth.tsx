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

const Auth = () => {
  return (
    <StyledAuthWrapper>
      <StyledAuthContainer theme={useTheme()}>
        <StyledAuthPreview>
          <img src={auroraAuthPreview} alt="" />
          <StyledAuthPreviewContent>
            <H2 color="light">Aurora</H2>
            <div style={{ width: '160px', height: '40px', display: 'flex', alignItems: 'center' }}>
              <H4 color="light">Created By</H4>
              <div style={{ width: 40, marginLeft: 10 }}>
                <StyledAuroraLogo src={auroraLogo} />
              </div>
            </div>
          </StyledAuthPreviewContent>
        </StyledAuthPreview>
        <StyledAuthContent>
          <LogIn />
        </StyledAuthContent>
      </StyledAuthContainer>
    </StyledAuthWrapper>
  );
};

export default Auth;
