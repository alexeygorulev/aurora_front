import React from 'react';
import { LoaderComponentProps } from './types';
import { StyledInner, StyledLoader } from './styles';
import { useTheme } from 'styled-components';

const Loader: React.FC<LoaderComponentProps> = (props) => {
  const { size = 'm', type = 'secondary', isShowLoadingWords = false, isCentred = false } = props;

  return (
    <>
      <StyledLoader sCentred={isCentred} sLoaderType={type} theme={useTheme()} sSize={size}>
        <StyledInner sLoaderType={type} theme={useTheme()} sInnerType="one"></StyledInner>
        <StyledInner sLoaderType={type} theme={useTheme()} sInnerType="two"></StyledInner>
        <StyledInner sLoaderType={type} theme={useTheme()} sInnerType="three"></StyledInner>
      </StyledLoader>
      {isShowLoadingWords && <div style={{ textAlign: 'center', color: 'white' }}>Loading ...</div>}
    </>
  );
};

export default Loader;
