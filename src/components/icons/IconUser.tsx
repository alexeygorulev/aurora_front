import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconUser: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5886 21V19C20.5886 17.9391 20.1672 16.9217 19.417 16.1716C18.6669 15.4214 17.6495 15 16.5886 15H8.58862C7.52776 15 6.51034 15.4214 5.7602 16.1716C5.01005 16.9217 4.58862 17.9391 4.58862 19V21"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5886 11C14.7978 11 16.5886 9.20914 16.5886 7C16.5886 4.79086 14.7978 3 12.5886 3C10.3795 3 8.58862 4.79086 8.58862 7C8.58862 9.20914 10.3795 11 12.5886 11Z"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconUser;
