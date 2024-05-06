import { Theme } from 'components/_themes/types';
import styled from 'styled-components';
import { getWidth } from '../Button/utils';
import { mediaSizes } from 'components/_themes/constants';
import { ButtonSizes, ButtonTypes, Display, Size } from 'components/_themes/dark/types';

export type StyledTabsComponentProps = {
  theme: Theme;
  sDisplay: Display;
  sFontSize: Size;
  sDisabled: boolean;
  sRounded: boolean;
  sWidth: string | number;
  sType: ButtonTypes;
  sSize: ButtonSizes;
};

const getColor = (props: StyledTabsComponentProps): string => {
  const { sDisabled, sType, theme } = props;
  if (sDisabled) return theme.button.colors[sType].disabled;
  return theme.button.colors[sType].normal;
};

const getBackgroundColor = (props: StyledTabsComponentProps): string => {
  const { sDisabled, sType, theme } = props;
  if (sDisabled) return theme.button.backgroundColors[sType].disabled;
  return theme.button.backgroundColors[sType].normal;
};

const getBorderColor = (props: StyledTabsComponentProps): string => {
  const { sDisabled, sType, theme } = props;
  if (sDisabled) return theme.button.borderColors[sType].disabled;
  return theme.button.borderColors[sType].normal;
};

const getBorderRadius = (props: StyledTabsComponentProps, mediaSize: string): string => {
  const { theme, sSize, sRounded } = props;
  if (sRounded) return `${theme.button.borderRadius.rounded[mediaSize][sSize]}px`;
  return `${theme.button.borderRadius.normal[mediaSize][sSize]}px`;
};

const getFontSize = (props: StyledTabsComponentProps, mediaSize: string): string => {
  const { theme, sFontSize } = props;
  return `${theme.button.fontSizes[mediaSize][sFontSize]}px`;
};

const getHeight = (props: StyledTabsComponentProps, mediaSize: string): string => {
  const { theme, sSize } = props;
  return `${theme.button.height[mediaSize][sSize]}px`;
};

const getLineHeight = (props: StyledTabsComponentProps, mediaSize: string): string => {
  const { theme, sSize } = props;
  return `${theme.button.lineHeight[mediaSize][sSize]}px`;
};

const getPadding = (props: StyledTabsComponentProps, mediaSize: string): string => {
  const { theme, sSize } = props;
  const padding = theme.button.padding[mediaSize][sSize];
  return `${padding[0]}px ${padding[1]}px`;
};

export const StyledTabs = styled.div<StyledTabsComponentProps>`
  width: ${({ sDisplay, sWidth }) => getWidth(sWidth, sDisplay)};
  color: ${(props) => getColor(props)};
  background: ${(props) => getBackgroundColor(props)};
  border: 1px solid ${(props) => getBorderColor(props)};
  border-radius: ${(props) => getBorderRadius(props, mediaSizes.s)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  height: ${(props) => getHeight(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  padding: ${(props) => getPadding(props, mediaSizes.s)};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
