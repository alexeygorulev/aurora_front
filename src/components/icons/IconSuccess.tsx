import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconSuccess: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8859 1.89478C6.90288 1.89478 2.05261 6.37194 2.05261 11.8948C2.05261 17.4176 6.90288 21.8948 12.8859 21.8948C18.869 21.8948 23.7193 17.4176 23.7193 11.8948C23.7193 6.37194 18.869 1.89478 12.8859 1.89478ZM12.8859 19.8948C8.10716 19.8948 4.21928 16.306 4.21928 11.8948C4.21928 7.48358 8.10716 3.89478 12.8859 3.89478C17.6647 3.89478 21.5526 7.48358 21.5526 11.8948C21.5526 16.306 17.6647 19.8948 12.8859 19.8948ZM16.9655 8.32202L18.4974 9.73607L11.8026 15.9418L7.78666 12.2347L9.31856 10.8207L11.8026 13.1136L16.9655 8.32202Z"
          fill="#0BC120"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconSuccess;
