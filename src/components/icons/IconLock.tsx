import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconLock: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.4484 11H5.41518C4.22909 11 3.26758 11.8954 3.26758 13V20C3.26758 21.1046 4.22909 22 5.41518 22H20.4484C21.6345 22 22.596 21.1046 22.596 20V13C22.596 11.8954 21.6345 11 20.4484 11Z"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.56274 11V7C7.56274 5.67392 8.12841 4.40215 9.13529 3.46447C10.1422 2.52678 11.5078 2 12.9317 2C14.3557 2 15.7213 2.52678 16.7282 3.46447C17.7351 4.40215 18.3008 5.67392 18.3008 7V11"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconLock;
