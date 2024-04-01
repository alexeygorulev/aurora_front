import React from 'react';

import { StyledGridItem } from '../_styles';
import { gridSizes } from '../_constants';
import { GridItemComponentProps } from '../types';

export const GridItem: React.FC<GridItemComponentProps> = (props) => {
  const { size = gridSizes[0], padding = null, tablet = null, desktop = null, grow = false, children, ...rest } = props;

  if (!children) return null;

  return (
    <StyledGridItem sSize={size} sPadding={padding} sTablet={tablet} sDesktop={desktop} isGrow={grow} {...rest}>
      {children}
    </StyledGridItem>
  );
};

export default GridItem;
