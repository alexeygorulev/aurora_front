import styled, { css } from 'styled-components';
import { StyledLoaderComponentProps, StyledLoaderInnerComponentProps } from './types';
import { media } from 'components/_themes/constants';
import { getColorLoader, getSizeLoader } from './utils';

export const StyledLoader = styled.div<StyledLoaderComponentProps>`
  position: relative;
  width: ${(props) => getSizeLoader(props, 's')};
  margin: 0 auto;
  height: ${(props) => getSizeLoader(props, 's')};
  border-radius: 50%;
  perspective: 800px;

  @media (${media.tablet}) {
    width: ${(props) => getSizeLoader(props, 'm')};
    height: ${(props) => getSizeLoader(props, 'm')};
  }
  @media (${media.desktop}) {
    width: ${(props) => getSizeLoader(props, 'l')};
    height: ${(props) => getSizeLoader(props, 'l')};
  }
`;

export const StyledInner = styled.div<StyledLoaderInnerComponentProps>`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  ${({ sInnerType }) =>
    sInnerType === 'one' &&
    css`
      left: 0%;
      top: 0%;
      animation: rotate-one 1s linear infinite;
      border-bottom: 3px solid ${(props) => getColorLoader(props as StyledLoaderInnerComponentProps)};
    `}
  ${({ sInnerType }) =>
    sInnerType === 'two' &&
    css`
      right: 0%;
      top: 0%;
      animation: rotate-two 1s linear infinite;
      border-right: 3px solid ${(props) => getColorLoader(props as StyledLoaderInnerComponentProps)};
    `}
  ${({ sInnerType }) =>
    sInnerType === 'three' &&
    css`
      right: 0%;
      bottom: 0%;
      animation: rotate-three 1s linear infinite;
      border-top: 3px solid ${(props) => getColorLoader(props as StyledLoaderInnerComponentProps)};
    `}

    @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
`;
