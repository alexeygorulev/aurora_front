import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconCheck: React.FC<IconProps> = (props) => {
  const color = props.color === 'white' ? 'white' : '#A7A7A7';

  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5886 6L9.58862 17L4.58862 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconCheck;
