import React from 'react';

import { IconPrimitiveProps } from '../types';
import { StyledIcon, StyledIconSvg } from '../style';
import { useTheme } from 'styled-components';

const IconPrimitive: React.FC<IconPrimitiveProps> = (props) => {
  const { size = 'm', display = 'inline', color = 'secondary10', viewBox, children } = props;

  return (
    <StyledIcon theme={useTheme()} data-component="Icon" sSize={size} sDisplay={display}>
      <StyledIconSvg theme={useTheme()} viewBox={`0 0 ${viewBox} ${viewBox}`} focusable="false" sColor={color}>
        {children}
      </StyledIconSvg>
    </StyledIcon>
  );
};

export default IconPrimitive;
