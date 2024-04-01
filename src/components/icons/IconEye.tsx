import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconEye: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_70_115)">
          <path
            d="M1.58862 12C1.58862 12 5.58862 4 12.5886 4C19.5886 4 23.5886 12 23.5886 12C23.5886 12 19.5886 20 12.5886 20C5.58862 20 1.58862 12 1.58862 12Z"
            stroke="#A7A7A7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5886 15C14.2455 15 15.5886 13.6569 15.5886 12C15.5886 10.3431 14.2455 9 12.5886 9C10.9318 9 9.58862 10.3431 9.58862 12C9.58862 13.6569 10.9318 15 12.5886 15Z"
            stroke="#A7A7A7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_70_115">
            <rect width="24" height="24" fill="white" transform="translate(0.588623)" />
          </clipPath>
        </defs>
      </svg>
    </IconPrimitive>
  );
};

export default IconEye;
