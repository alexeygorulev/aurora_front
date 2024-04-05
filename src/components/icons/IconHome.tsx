import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconHome: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.58862 9L12.5886 2L21.5886 9V20C21.5886 20.5304 21.3779 21.0391 21.0028 21.4142C20.6278 21.7893 20.1191 22 19.5886 22H5.58862C5.05819 22 4.54948 21.7893 4.17441 21.4142C3.79934 21.0391 3.58862 20.5304 3.58862 20V9Z"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.58862 22V12H15.5886V22"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconHome;
