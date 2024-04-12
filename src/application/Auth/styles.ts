import { StyledLayoutProps } from 'components/molecules/type';
import styled from 'styled-components';
import { media } from 'components/_themes/constants';
import { Theme } from 'components/_themes/types';
import { StyledAuthContainerProps } from './type';

export function getLayoutBackgroundColor(props: StyledLayoutProps, sAuthContentLine = false) {
  if (sAuthContentLine) return props.theme.block.colors['primary'];
  return props.theme.block.backgrounds.background_secondary;
}

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

export const StyledAuthPreviewContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 52;
  top: 0;
  padding: 50px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAuroraLogo = styled.img`
  object-fit: cover;
`;
