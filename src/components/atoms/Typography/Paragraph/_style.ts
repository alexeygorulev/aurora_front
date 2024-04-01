import { media, mediaSizes } from 'components/_themes/constants';
import styled from 'styled-components';
import { StyledParagraphProps } from './types';
import {
  getColor,
  getParagraphFontSize,
  getParagraphFontFamily,
  getParagraphFontWeight,
  getParagraphLineHeight,
  getTextAlign,
} from '../utils';
import { StyledHeading } from '../Heading/_style';

export const StyledParagraph = styled.p<StyledParagraphProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 0;
  font-family: ${({ theme }) => getParagraphFontFamily(theme)};
  font-weight: ${({ theme, sWeight }) => getParagraphFontWeight(theme, sWeight)};
  line-height: ${({ theme, sSize }) => getParagraphLineHeight(theme, sSize, mediaSizes.s)};
  font-size: ${({ theme, sSize }) => getParagraphFontSize(theme, sSize, mediaSizes.s)};
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
    font-size: ${({ theme, sSize }) => getParagraphFontSize(theme, sSize, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${({ theme, sSize }) => getParagraphFontSize(theme, sSize, mediaSizes.l)};
  }
`;
