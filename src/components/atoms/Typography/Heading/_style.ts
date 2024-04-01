import styled from 'styled-components';

import { StyledHeadingProps } from './types';
import {
  getColor,
  getHeadingFontFamily,
  getHeadingFontSize,
  getHeadingFontWeight,
  getHeadingLineHeight,
  getTextAlign,
} from '../utils';
import { media, mediaSizes } from 'components/_themes/constants';

export const StyledHeading = styled.div<StyledHeadingProps>`
  position: relative;
  display: block;
  padding: 0;
  font-family: ${({ theme }) => getHeadingFontFamily(theme)};
  font-weight: ${({ theme, sWeight }) => getHeadingFontWeight(theme, sWeight)};
  line-height: ${({ theme, sSize }) => getHeadingLineHeight(theme, sSize, mediaSizes.s)};
  font-size: ${({ theme, sSize }) => getHeadingFontSize(theme, sSize, mediaSizes.s)};
  text-align: ${({ sTextAlign }) => getTextAlign(sTextAlign)};
  color: ${({ theme, sColor }) => getColor(theme, sColor)};

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  @media (${media.tablet}) {
    font-size: ${({ theme, sSize }) => getHeadingFontSize(theme, sSize, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${({ theme, sSize }) => getHeadingFontSize(theme, sSize, mediaSizes.l)};
  }
`;
