import React from 'react';
import { StyledLayout } from './style';
import { useTheme } from 'styled-components';

export type LayoutComponentProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;

const Layout: React.FC<LayoutComponentProps> = (props) => {
  const { children } = props;
  return <StyledLayout theme={useTheme()}>{children}</StyledLayout>;
};

export default Layout;
