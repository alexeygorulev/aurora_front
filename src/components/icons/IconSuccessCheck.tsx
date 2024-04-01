import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconSuccessCheck: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_49_66)">
          <path
            d="M226.025 -16.5H-150.684V196H226.025V-16.5Z"
            stroke="white"
            stroke-miterlimit="2"
            stroke-linejoin="round"
          />
          <path
            d="M16.5113 4.96884L6.71216 13.8134L2.36206 9.88742L3.1764 9.15243L6.69392 12.3272L15.679 4.21765C15.9565 4.46814 16.2341 4.71862 16.5113 4.96884Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="2"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_49_66">
            <rect width="18.8354" height="17" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </IconPrimitive>
  );
};

export default IconSuccessCheck;
