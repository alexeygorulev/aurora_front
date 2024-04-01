import React from 'react';

import { StyledHeading } from './_style';
import { HeadingComponentProps } from './types';
import { useTheme } from 'styled-components';

const Heading: React.FC<HeadingComponentProps> = (props) => {
  const { size = 'm', textAlign = 'left', color = 'major', weight = 'medium', children, ...rest } = props;

  return (
    <StyledHeading theme={useTheme()} sWeight={weight} sSize={size} sTextAlign={textAlign} sColor={color} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
