import styled, { css, keyframes } from 'styled-components';
import { StyledButtonProps } from './types';
import { media, mediaSizes } from 'components/_themes/constants';
import {
  getBackgroundColor,
  getBackgroundColorAnimation,
  getBorderColor,
  getBorderRadius,
  getColor,
  getDisplay,
  getFontSize,
  getFontWeight,
  getHeight,
  getLineHeight,
  getPadding,
  getWidth,
} from './utils';
import { typeWithOutAnimation } from './constants';

const expandCircle = keyframes`
  from {
    transform: scale(0);
    opacity: 0.4;
  }
  to {
    transform: scale(var(--scale-factor)); 
    opacity: 1;
  }
`;

const circleAnimation = css`
  animation: ${expandCircle} 1.5s forwards;
`;

export const StyledButton = styled.button.attrs({ type: 'button' })<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: ${({ theme, sDisplay }) => getDisplay(theme, sDisplay)};
  vertical-align: middle;
  max-width: 100%;
  font-family: ${({ theme }) => theme.button.fontFamily};
  font-weight: ${({ theme, sFontWeight }) => getFontWeight(theme, sFontWeight)};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  transition: all 0.4s ease-out;
  outline: 0 none;
  cursor: ${({ sDisabled }) => (sDisabled ? 'not-allowed' : 'pointer')};
  width: ${({ sDisplay, sWidth }) => getWidth(sWidth, sDisplay)};
  color: ${(props) => getColor(props, false, false)};
  background: ${(props) => getBackgroundColor(props, false, false)};
  border: 1px solid ${(props) => getBorderColor(props, false, false)};
  border-radius: ${(props) => getBorderRadius(props, mediaSizes.s)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  height: ${(props) => getHeight(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  padding: ${(props) => getPadding(props, mediaSizes.s)};
  z-index: 10;

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: ${(props) => getBackgroundColorAnimation(props, 'top')};
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 3px;
    height: 90%;
    background: ${(props) => getBackgroundColorAnimation(props, 'right')};
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 3px;
    background: ${(props) => getBackgroundColorAnimation(props, 'bottom')};
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${(props) => getBackgroundColorAnimation(props, 'left')};
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }

  @media (${media.tablet}) {
    border-radius: ${(props) => getBorderRadius(props, mediaSizes.m)};
    height: ${(props) => getHeight(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
    padding: ${(props) => getPadding(props, mediaSizes.m)};
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    border-radius: ${(props) => getBorderRadius(props, mediaSizes.l)};
    height: ${(props) => getHeight(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
    padding: ${(props) => getPadding(props, mediaSizes.l)};
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
  }

  &::after {
    content: '';
    position: absolute;
    left: 45%;
    top: 45%;
    width: 20px;
    height: 20px;
    background: ${(props) => getBackgroundColor(props, false, true)};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition:
      transform 0.5s,
      opacity 0.5s;
    z-index: -1;
  }

  &:hover::after {
    ${({ sDisabled, sType }) => (sDisabled || typeWithOutAnimation.includes(sType) ? '' : circleAnimation)}
  }

  &:hover {
    border-color: ${(props) => getBorderColor(props, false, true)};
    box-shadow: ${({ sDisabled }) => (sDisabled ? 'none' : '0 0px 20px rgba(110, 48, 180, 0.4)')};
  }

  &:active {
    background: ${(props) => getBackgroundColor(props, true, true)};
    border-color: ${(props) => getBorderColor(props, true, true)};
    transition: none;
    transform: ${({ sDisabled }) => (sDisabled ? 'none' : 'translateY(2px)')};
  }
`;

export const StyledButtonIcon = styled.div`
  display: inline;
  margin: 0px 8px 2px 0px;
`;

export const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
