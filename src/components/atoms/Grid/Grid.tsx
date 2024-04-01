import React from 'react';

import { StyledGrid } from './_styles';

import { GridComponent } from './types';
import GridItem from './_internal/GridItem';

const Grid: GridComponent = (props) => {
  const {
    justify = 'start',
    alignItems = 'start',
    direction = 'row',
    spacing = 'm',
    noWrap = false,
    children,
    ...rest
  } = props;
  return (
    <StyledGrid
      sJustify={justify}
      sAlignItems={alignItems}
      sDirection={direction}
      sSpacing={spacing}
      sNoWrap={noWrap}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

Grid.Item = GridItem;

export default Grid;
