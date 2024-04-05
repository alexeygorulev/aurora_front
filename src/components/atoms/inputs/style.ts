import styled from 'styled-components';
import { StyledInputProps } from './InputCheckbox/types';
import { StyledInputElementProps, StyledInputIconProps, StyledInputLabelProps } from './types';
import { media, mediaSizes } from 'components/_themes/constants';
import {
  getInputBorderRadius,
  getInputElementBackgroundColor,
  getInputElementBorderColor,
  getInputElementColor,
  getInputElementFontSize,
  getInputElementFontWeight,
  getInputElementHeight,
  getInputElementLineHeight,
  getInputElementPadding,
  getInputFontFamily,
  getInputLabelColor,
  getInputLabelFontSize,
  getInputLabelFontWeight,
  getInputLabelLeft,
  getInputLabelLineHeight,
  getInputLabelRight,
  getInputLabelTop,
} from './utils';

export function getInputWidth(props: StyledInputProps) {
  if (typeof props.sWidth === 'number') return `${props.sWidth}px`;
  return props.sWidth || '100%';
}

export function getInputIconRight(props: StyledInputIconProps, mediaSize: string) {
  const theme = props.theme.input;
  return `${theme.icon.right[mediaSize][props.sSize]}px`;
}

export const StyledInputHtmlInput = styled.input`
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 0;
  width: 0;
  opacity: 0;
  border: none;
  outline: none;
`;

export const StyledInput = styled.div<StyledInputProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: ${(props) => getInputWidth(props)};

  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  & input:-webkit-autofill:active,
  & input:-webkit-autofill:valid,
  & select:-webkit-autofill,
  & select:-webkit-autofill:hover,
  & select:-webkit-autofill:focus {
    -webkit-transition-delay: 99999s;
  }
`;

export const StyledInputLabel = styled.label<StyledInputLabelProps>`
  display: block;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  text-align: left;
  transform: translateY(-50%);
  transition:
    top 0.12s ease-out,
    font-weight 0.12s ease-out;
  pointer-events: none;
  font-family: ${(props) => getInputFontFamily(props)};
  color: ${(props) => getInputLabelColor(props)};
  font-weight: ${(props) => getInputLabelFontWeight(props)};
  top: ${(props) => getInputLabelTop(props, mediaSizes.s)};
  left: ${(props) => getInputLabelLeft(props, mediaSizes.s)};
  right: ${(props) => getInputLabelRight(props, mediaSizes.s)};
  font-size: ${(props) => getInputLabelFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getInputLabelLineHeight(props, mediaSizes.s)};

  @media (${media.tablet}) {
    top: ${(props) => getInputLabelTop(props, mediaSizes.m)};
    left: ${(props) => getInputLabelLeft(props, mediaSizes.m)};
    right: ${(props) => getInputLabelRight(props, mediaSizes.m)};
    font-size: ${(props) => getInputLabelFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getInputLabelLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    top: ${(props) => getInputLabelTop(props, mediaSizes.l)};
    left: ${(props) => getInputLabelLeft(props, mediaSizes.l)};
    right: ${(props) => getInputLabelRight(props, mediaSizes.l)};
    font-size: ${(props) => getInputLabelFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getInputLabelLineHeight(props, mediaSizes.l)};
  }
`;

export const StyledInputIcon = styled.div<StyledInputIconProps>`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
  cursor: ${(props) => (props.sClickable && !props.sDisabled ? 'pointer' : 'default')};
  right: ${(props) => getInputIconRight(props, mediaSizes.s)};
  pointer-events: ${(props) => (props.sClickable ? 'auto' : 'none')};

  @media (${media.tablet}) {
    right: ${(props) => getInputIconRight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    right: ${(props) => getInputIconRight(props, mediaSizes.l)};
  }
`;

export const StyledInputIconLeft = styled(StyledInputIcon)`
  position: absolute;
  left: 8px;
`;

export const StyledInputElement = styled.div<StyledInputElementProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  outline: 0 none;
  opacity: 1;
  width: 100%;
  max-width: 100%;
  border-radius: ${(props) => getInputBorderRadius(props)}px;
  font-weight: ${(props) => getInputElementFontWeight(props)};
  transition:
    border-color 0.32s ease-out,
    background-color 0.32s ease-out,
    color 0.32s ease-out;
  font-family: ${(props) => getInputFontFamily(props)};
  text-align: ${(props) => (props.sTextAlign ? props.sTextAlign : 'left')};
  color: ${(props) => getInputElementColor(props)};
  background: ${(props) => getInputElementBackgroundColor(props)};
  border: 1px solid ${(props) => getInputElementBorderColor(props)};
  min-height: ${(props) => getInputElementHeight(props, mediaSizes.s)};
  line-height: ${(props) => getInputElementLineHeight(props, mediaSizes.s)};
  font-size: ${(props) => getInputElementFontSize(props, mediaSizes.s)};
  padding: ${(props) => getInputElementPadding(props, mediaSizes.s)};
  padding-left: ${(props) => (props.sLeftIcon ? '40px' : '')};

  @media (${media.tablet}) {
    min-height: ${(props) => getInputElementHeight(props, mediaSizes.m)};
    line-height: ${(props) => getInputElementLineHeight(props, mediaSizes.m)};
    font-size: ${(props) => getInputElementFontSize(props, mediaSizes.m)};
    padding: ${(props) => getInputElementPadding(props, mediaSizes.m)};
    padding-left: ${(props) => (props.sLeftIcon ? '40px' : '')};
  }

  @media (${media.desktop}) {
    min-height: ${(props) => getInputElementHeight(props, mediaSizes.l)};
    line-height: ${(props) => getInputElementLineHeight(props, mediaSizes.l)};
    font-size: ${(props) => getInputElementFontSize(props, mediaSizes.l)};
    padding: ${(props) => getInputElementPadding(props, mediaSizes.l)};
    padding-left: ${(props) => (props.sLeftIcon ? '40px' : '')};
  }
`;
