import styled from 'styled-components';
import { StyledBlockProps } from './types';
import {
  getBlockFontFamily,
  getBlockMargin,
  getBlockPadding,
  getColor,
  getHeadingFontSize,
  getHeadingFontWeight,
  getHeadingLineHeight,
  getTextAlign,
} from '../utils';
import { media, mediaSizes } from 'components/_themes/constants';
import { StyledHeading } from '../Heading/_style';

export const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-family: ${({ theme }) => getBlockFontFamily(theme)};
  font-weight: ${({ theme, sWeight }) => getHeadingFontWeight(theme, sWeight)};
  line-height: ${({ theme, sSize, withoutLineHeight }) =>
    withoutLineHeight ? 0 : getHeadingLineHeight(theme, sSize, mediaSizes.s)};
  margin: ${({ sMargin, theme }) => getBlockMargin(theme, sMargin)};
  padding: ${({ sHPadding, sPadding, sVPadding, theme }) => getBlockPadding(theme, sPadding, sVPadding, sHPadding)};
  font-size: ${({ theme, sSize }) => getHeadingFontSize(theme, sSize, mediaSizes.s)};
  text-align: ${({ sTextAlign }) => getTextAlign(sTextAlign)};
  color: ${({ theme, sColor }) => getColor(theme, sColor)};

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  ${StyledHeading} + & {
    margin-top: 0;
  }

  @media (${media.tablet}) {
    padding: ${({ sHPadding, sPadding, sVPadding, theme }) => getBlockPadding(theme, sPadding, sVPadding, sHPadding)};
    font-size: ${({ theme, sSize }) => getHeadingFontSize(theme, sSize, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    padding: ${({ sHPadding, sPadding, sVPadding, theme }) => getBlockPadding(theme, sPadding, sVPadding, sHPadding)};
    font-size: ${({ theme, sSize }) => getHeadingFontSize(theme, sSize, mediaSizes.l)};
  }
`;
