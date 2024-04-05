import { Theme } from 'components/_themes/types';
import { StyledButtonProps } from './types';
import { ButtonAnimationTypes, Display, FontWeight } from 'components/_themes/dark/types';
export const getDisplay = (theme: Theme, sDisplay: Display): string => {
  return theme.button.display[sDisplay];
};

export const getFontWeight = (theme: Theme, sFontWeight: FontWeight): number => {
  return theme.button.fontWeight[sFontWeight];
};

export const getWidth = (sWidth: number | string, sDisplay: Display): string => {
  if (typeof sWidth === 'number') return `${sWidth}px`;
  return sWidth || (sDisplay === 'block' ? '100%' : 'auto');
};

export const getColor = (props: StyledButtonProps, sPressed: boolean, sHovered: boolean): string => {
  const { sDisabled, sFocused, sType, theme } = props;
  if (sDisabled) return theme.button.colors[sType].disabled;
  if (sPressed) return theme.button.colors[sType].pressed;
  if (sHovered) return theme.button.colors[sType].hovered;
  if (sFocused) return theme.button.colors[sType].focused;
  return theme.button.colors[sType].normal;
};

export const getBackgroundColor = (props: StyledButtonProps, sPressed: boolean, sHovered: boolean): string => {
  const { sDisabled, sFocused, sType, theme, isLeaveBackGround, sSelected } = props;
  if (sType === 'secondary' && sSelected) return theme.button.backgroundColors[sType].selected;
  if (isLeaveBackGround) return theme.button.backgroundColors[sType].normal;
  if (sDisabled) return theme.button.backgroundColors[sType].disabled;
  if (sPressed) return theme.button.backgroundColors[sType].pressed;
  if (sHovered) return theme.button.backgroundColors[sType].hovered;
  if (sFocused) return theme.button.backgroundColors[sType].focused;
  return theme.button.backgroundColors[sType].normal;
};

export const getBackgroundColorAnimation = (props: StyledButtonProps, sAnimationType: ButtonAnimationTypes): string => {
  const { theme, sType, sDisabled } = props;
  if (sDisabled) return 'none';
  return theme.button.backgroundColorsAnimation[sType][sAnimationType];
};

export const getBorderColor = (props: StyledButtonProps, sPressed: boolean, sHovered: boolean): string => {
  const { sDisabled, sFocused, sType, theme, sSelected } = props;
  if (sType === 'secondary' && sSelected) return theme.button.backgroundColors[sType].selected;
  if (sDisabled) return theme.button.borderColors[sType].disabled;
  if (sPressed) return theme.button.borderColors[sType].pressed;
  if (sHovered) return theme.button.borderColors[sType].hovered;
  if (sFocused) return theme.button.borderColors[sType].focused;
  return theme.button.borderColors[sType].normal;
};

export const getBorderRadius = (props: StyledButtonProps, mediaSize: string): string => {
  const { theme, sRounded, sSize } = props;
  if (sRounded) return `${theme.button.borderRadius.rounded[mediaSize][sSize]}px`;
  return `${theme.button.borderRadius.normal[mediaSize][props.sSize]}px`;
};

export const getHeight = (props: StyledButtonProps, mediaSize: string): string => {
  const { theme, sSize } = props;

  return `${theme.button.height[mediaSize][sSize]}px`;
};

export const getLineHeight = (props: StyledButtonProps, mediaSize: string): string => {
  const { theme, sSize } = props;
  return `${theme.button.lineHeight[mediaSize][sSize]}px`;
};

export const getPadding = (props: StyledButtonProps, mediaSize: string): string => {
  const { theme, sSize } = props;
  const padding = theme.button.padding[mediaSize][sSize];
  return `${padding[0]}px ${padding[1]}px`;
};

export const getFontSize = (props: StyledButtonProps, mediaSize: string): string => {
  const { theme, sFontSize } = props;
  return `${theme.button.fontSizes[mediaSize][sFontSize]}px`;
};
