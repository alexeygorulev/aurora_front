import styled from 'styled-components';
import { StyledLayoutProps } from './type';

function getLayoutColor(props: StyledLayoutProps) {
  return props.theme.block.colors['major'];
}

function getLayoutBackgroundColor(props: StyledLayoutProps) {
  return props.theme.block.backgrounds.background_main;
}

export const StyledLayout = styled.div<StyledLayoutProps>`
  position: relative;
  min-width: 320px;
  color: ${(props) => getLayoutColor(props)};
  background: ${(props) => getLayoutBackgroundColor(props)};
`;
