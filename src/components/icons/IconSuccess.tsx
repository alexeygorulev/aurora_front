import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconSuccess: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.3465 2.36841C9.29239 2.36841 2.76318 7.96487 2.76318 14.8684C2.76318 21.7719 9.29239 27.3684 17.3465 27.3684C25.4006 27.3684 31.9298 21.7719 31.9298 14.8684C31.9298 7.96487 25.4006 2.36841 17.3465 2.36841ZM17.3465 24.8684C10.9135 24.8684 5.67985 20.3824 5.67985 14.8684C5.67985 9.35442 10.9135 4.86841 17.3465 4.86841C23.7795 4.86841 29.0132 9.35442 29.0132 14.8684C29.0132 20.3824 23.7795 24.8684 17.3465 24.8684ZM22.8382 10.4025L24.9004 12.17L15.8882 19.9271L10.4821 15.2934L12.5443 13.5258L15.8882 16.392L22.8382 10.4025Z"
          fill="#0BC120"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconSuccess;
