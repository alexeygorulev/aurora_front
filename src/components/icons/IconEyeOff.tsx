import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconEyeOff: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_70_116)">
          <path
            d="M18.5286 17.94C16.8192 19.243 14.7377 19.9649 12.5886 20C5.58862 20 1.58862 12 1.58862 12C2.83251 9.68192 4.55776 7.65663 6.64862 6.06003M10.4886 4.24002C11.177 4.0789 11.8817 3.99836 12.5886 4.00003C19.5886 4.00003 23.5886 12 23.5886 12C22.9816 13.1356 22.2577 14.2048 21.4286 15.19M14.7086 14.12C14.434 14.4148 14.1028 14.6512 13.7348 14.8151C13.3668 14.9791 12.9695 15.0673 12.5667 15.0744C12.1639 15.0815 11.7638 15.0074 11.3902 14.8565C11.0167 14.7056 10.6773 14.4811 10.3925 14.1962C10.1076 13.9113 9.88302 13.572 9.73213 13.1984C9.58125 12.8249 9.50715 12.4247 9.51426 12.0219C9.52136 11.6191 9.60953 11.2219 9.7735 10.8539C9.93747 10.4859 10.1739 10.1547 10.4686 9.88003"
            stroke="#A7A7A7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.58862 1L23.5886 23"
            stroke="#A7A7A7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_70_116">
            <rect width="24" height="24" fill="white" transform="translate(0.588623)" />
          </clipPath>
        </defs>
      </svg>
    </IconPrimitive>
  );
};

export default IconEyeOff;
