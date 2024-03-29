import React from 'react';

import { StyledParagraph } from './_style';
import { ParagraphComponentProps } from './types';
import { useTheme } from 'styled-components';

const Paragraph: React.FC<ParagraphComponentProps> = (props) => {
  const { size = 'm', color = 'major', textAlign = 'left', weight = 'medium', children, ...rest } = props;

  return (
    <StyledParagraph theme={useTheme()} sSize={size} sTextAlign={textAlign} sColor={color} sWeight={weight} {...rest}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
