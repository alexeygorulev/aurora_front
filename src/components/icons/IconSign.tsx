import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconSign: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5886 16C14.7978 16 16.5886 14.2091 16.5886 12C16.5886 9.79086 14.7978 8 12.5886 8C10.3795 8 8.58862 9.79086 8.58862 12C8.58862 14.2091 10.3795 16 12.5886 16Z"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5886 7.99999V13C16.5886 13.7956 16.9047 14.5587 17.4673 15.1213C18.0299 15.6839 18.793 16 19.5886 16C20.3843 16 21.1473 15.6839 21.71 15.1213C22.2726 14.5587 22.5886 13.7956 22.5886 13V12C22.5885 9.74302 21.8249 7.55247 20.4219 5.78452C19.019 4.01658 17.0592 2.77521 14.8613 2.26229C12.6634 1.74936 10.3566 1.99503 8.31598 2.95936C6.27539 3.92368 4.62103 5.54995 3.62189 7.57371C2.62275 9.59748 2.3376 11.8997 2.8128 14.1061C3.288 16.3125 4.49561 18.2932 6.23926 19.7263C7.98292 21.1593 10.1601 21.9603 12.4167 21.9991C14.6733 22.0379 16.8767 21.3122 18.6686 19.94"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconSign;
