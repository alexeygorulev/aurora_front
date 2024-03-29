import React from 'react';

import { StyledBlock } from './_style';
import { BlockComponentProps } from './types';
import { useTheme } from 'styled-components';

const Block: React.FC<BlockComponentProps> = (props) => {
  const {
    size = 'm',
    color = 'major',
    textAlign = 'left',
    margin = 'm',
    weight = 'medium',
    padding = 'm',
    vPadding = null,
    hPadding = null,
    children,
    withoutLineHeight = false,
    ...rest
  } = props;

  return (
    <StyledBlock
      theme={useTheme()}
      sSize={size}
      sTextAlign={textAlign}
      sMargin={margin}
      sPadding={padding}
      sVPadding={vPadding}
      sHPadding={hPadding}
      sColor={color}
      sWeight={weight}
      withoutLineHeight={withoutLineHeight}
      {...rest}
    >
      {children}
    </StyledBlock>
  );
};

export default Block;
