import styled from 'styled-components';
import { StyledGridItemProps, StyledGridProps } from './types';
import { getAlignItems, getDirection, getItemWidth, getJustify, getSpacing } from './utils';
import { media, mediaSizes } from 'components/_themes/constants';

export const StyledGridItem = styled.div<StyledGridItemProps>`
  position: relative;
  box-sizing: border-box;
  width: ${({ sSize }) => getItemWidth(sSize, null, null)};
  flex-grow: ${({ isGrow }) => (isGrow ? 1 : 'initial')};

  @media (${media.tablet}) {
    width: ${({ sSize, sTablet }) => getItemWidth(sSize, sTablet, null)};
  }

  @media (${media.desktop}) {
    width: ${({ sSize, sTablet, sDesktop }) => getItemWidth(sSize, sTablet, sDesktop)};
  }

  ${(props) =>
    props.sPadding &&
    `
        padding: ${getSpacing(props.sPadding, mediaSizes.s)} !important;
        @media (${media.tablet}) { padding: ${getSpacing(props.sPadding, mediaSizes.m)} !important; }
        @media (${media.desktop}) { padding: ${getSpacing(props.sPadding, mediaSizes.l)} !important; }
  `}
`;

export const StyledGrid = styled.div<StyledGridProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row ${(props) => (props.sNoWrap ? 'nowrap' : 'wrap')};
  margin: -${(props) => getSpacing(props.sSpacing, mediaSizes.s)};
  justify-content: ${(props) => getJustify(props.sJustify)};
  align-items: ${(props) => getAlignItems(props.sAlignItems)};
  flex-direction: ${(props) => getDirection(props.sDirection)};

  & > ${StyledGridItem} {
    padding: ${(props) => getSpacing(props.sSpacing, mediaSizes.s)};
  }

  @media (${media.tablet}) {
    margin: -${(props) => getSpacing(props.sSpacing, mediaSizes.m)};

    & > ${StyledGridItem} {
      padding: ${(props) => getSpacing(props.sSpacing, mediaSizes.m)};
    }
  }

  @media (${media.desktop}) {
    margin: -${(props) => getSpacing(props.sSpacing, mediaSizes.l)};

    & > ${StyledGridItem} {
      padding: ${(props) => getSpacing(props.sSpacing, mediaSizes.l)};
    }
  }
`;
