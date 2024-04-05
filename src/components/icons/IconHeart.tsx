import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconHeart: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_122_450)">
          <path
            d="M21.4287 4.60999C20.918 4.099 20.3116 3.69364 19.6441 3.41708C18.9766 3.14052 18.2612 2.99817 17.5387 2.99817C16.8163 2.99817 16.1008 3.14052 15.4334 3.41708C14.7659 3.69364 14.1595 4.099 13.6487 4.60999L12.5887 5.66999L11.5287 4.60999C10.497 3.5783 9.09777 2.9987 7.63874 2.9987C6.17971 2.9987 4.78043 3.5783 3.74874 4.60999C2.71705 5.64169 2.13745 7.04096 2.13745 8.49999C2.13745 9.95903 2.71705 11.3583 3.74874 12.39L4.80874 13.45L12.5887 21.23L20.3687 13.45L21.4287 12.39C21.9397 11.8792 22.3451 11.2728 22.6217 10.6053C22.8982 9.93789 23.0406 9.22248 23.0406 8.49999C23.0406 7.77751 22.8982 7.0621 22.6217 6.39464C22.3451 5.72718 21.9397 5.12075 21.4287 4.60999Z"
            stroke="#A7A7A7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_122_450">
            <rect width="24" height="24" fill="white" transform="translate(0.588623)" />
          </clipPath>
        </defs>
      </svg>
    </IconPrimitive>
  );
};

export default IconHeart;
