import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconSlash: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.7031 22C19.6335 22 24.4411 17.5228 24.4411 12C24.4411 6.47715 19.6335 2 13.7031 2C7.77266 2 2.96509 6.47715 2.96509 12C2.96509 17.5228 7.77266 22 13.7031 22Z"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.11133 4.93005L21.2949 19.0701"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconSlash;
