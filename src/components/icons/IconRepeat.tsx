import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconRepeat: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.5886 1L21.5886 5L17.5886 9"
          stroke="#A7A7A7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.58862 11V9C3.58862 7.93913 4.01005 6.92172 4.7602 6.17157C5.51034 5.42143 6.52776 5 7.58862 5H21.5886"
          stroke="#A7A7A7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.58862 23L3.58862 19L7.58862 15"
          stroke="#A7A7A7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.5886 13V15C21.5886 16.0609 21.1672 17.0783 20.417 17.8284C19.6669 18.5786 18.6495 19 17.5886 19H3.58862"
          stroke="#A7A7A7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconRepeat;
