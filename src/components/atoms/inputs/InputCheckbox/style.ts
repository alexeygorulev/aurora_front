import styled from 'styled-components';

import { StyledIcon } from 'components/icons/style';

import { StyledInputCheckboxProps } from './types';
import { StyledInputHtmlInput } from '../style';
import { media, mediaSizes } from 'components/_themes/constants';

export const getColor = (props: StyledInputCheckboxProps, sHovered: boolean, sPressed: boolean) => {
  const theme = props.theme.input.inputCheckBox;

  const colors = props.sChecked ? theme.colors.checked : theme.colors.normal;

  if (props.sDisabled) return colors.disabled;
  if (props.sError) return colors.error;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  return colors.normal;
};

export const getPadding = (props: StyledInputCheckboxProps, mediaSize: string): string => {
  const theme = props.theme.input.inputCheckBox;

  const padding = theme.padding[mediaSize][props.sSize];
  return `${padding[0]}px ${padding[1]}px`;
};

export const getFontWeight = (props: StyledInputCheckboxProps): number => {
  const theme = props.theme.input.inputCheckBox;

  return theme.fontWeight[props.sSize];
};

export const getLineHeight = (props: StyledInputCheckboxProps, mediaSize: string): string => {
  const theme = props.theme.input.inputCheckBox;

  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
};

export const getFontSize = (props: StyledInputCheckboxProps, mediaSize: string): string => {
  const theme = props.theme.input.inputCheckBox;

  return `${theme.fontSize[mediaSize][props.sSize]}px`;
};

export const getIconSize = (props: StyledInputCheckboxProps, mediaSize: string): string => {
  const theme = props.theme.input.inputCheckBox;

  return `${theme.icon.sizes[mediaSize][props.sSize]}px`;
};

export const getIconBorderColor = (props: StyledInputCheckboxProps, sHovered: boolean, sPressed: boolean): string => {
  const theme = props.theme.input.inputCheckBox;

  const colors = props.sChecked ? theme.icon.borderColors.checked : theme.icon.borderColors.normal;

  if (props.sDisabled) return colors.disabled;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  if (props.sError) return colors.error;
  return colors.normal;
};

export const getIconBackgroundColor = (
  props: StyledInputCheckboxProps,
  sHovered: boolean,
  sPressed: boolean,
): string => {
  const theme = props.theme.input.inputCheckBox;

  const colors = props.sChecked ? theme.icon.backgroundColors.checked : theme.icon.backgroundColors.normal;

  if (props.sDisabled) return colors.disabled;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  if (props.sError) return colors.error;
  return colors.normal;
};

export const getLabelPadding = (props: StyledInputCheckboxProps, mediaSize: string): string => {
  const theme = props.theme.input;

  const padding = theme.label.padding[mediaSize][props.sSize];
  return `${padding[0]}px ${padding[1]}px ${padding[0]}px ${padding[2]}px`;
};

export const StyledInputCheckboxIcon = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-shrink: 0;
  border: 1px solid;
  border-radius: 4px;

  ${StyledIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledInputCheckboxLabel = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
`;

export const StyledInputCheckbox = styled.label<StyledInputCheckboxProps>`
  position: relative;
  box-sizing: border-box;
  display: ${(props) => (props.sBlock ? 'block' : 'inline-block')};
  cursor: ${(props) => (props.sDisabled ? 'normal' : 'pointer')};
  color: ${(props) => getColor(props, false, false)};
  padding: ${(props) => getPadding(props, mediaSizes.s)};
  font-weight: ${(props) => getFontWeight(props)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};

  ${StyledInputCheckboxIcon} {
    height: ${(props) => getIconSize(props, mediaSizes.s)};
    width: ${(props) => getIconSize(props, mediaSizes.s)};
    color: ${(props) => getColor(props, false, false)};
    border-color: ${(props) => getIconBorderColor(props, false, false)};
    background: ${(props) => getIconBackgroundColor(props, false, false)};
  }

  ${StyledInputCheckboxLabel} {
    padding: ${(props) => getLabelPadding(props, mediaSizes.s)};
  }

  &:hover {
    color: ${(props) => getColor(props, true, false)};

    ${StyledInputCheckboxIcon} {
      border-color: ${(props) => getIconBorderColor(props, true, false)};
      background: ${(props) => getIconBackgroundColor(props, true, false)};
    }
  }

  &:active {
    color: ${(props) => getColor(props, true, true)};

    ${StyledInputCheckboxIcon} {
      border-color: ${(props) => getIconBorderColor(props, true, true)};
      background: ${(props) => getIconBackgroundColor(props, true, true)};
    }
  }

  @media (${media.tablet}) {
    padding: ${(props) => getPadding(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};

    ${StyledInputCheckboxIcon} {
      height: ${(props) => getIconSize(props, mediaSizes.m)};
      width: ${(props) => getIconSize(props, mediaSizes.m)};
    }

    ${StyledInputCheckboxLabel} {
      padding: ${(props) => getLabelPadding(props, mediaSizes.m)};
    }
  }

  @media (${media.desktop}) {
    padding: ${(props) => getPadding(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};

    ${StyledInputCheckboxIcon} {
      height: ${(props) => getIconSize(props, mediaSizes.l)};
      width: ${(props) => getIconSize(props, mediaSizes.l)};
    }

    ${StyledInputCheckboxLabel} {
      padding: ${(props) => getLabelPadding(props, mediaSizes.l)};
    }
  }
`;

export const StyledInputCheckboxInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`;

export const StyledInputCheckboxHtmlInput = styled(StyledInputHtmlInput).attrs({
  type: 'checkbox',
})``;
