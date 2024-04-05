import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconEdit: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.5886 3.00006C17.8513 2.73741 18.1631 2.52907 18.5062 2.38693C18.8494 2.24479 19.2172 2.17163 19.5886 2.17163C19.9601 2.17163 20.3279 2.24479 20.671 2.38693C21.0142 2.52907 21.326 2.73741 21.5886 3.00006C21.8513 3.2627 22.0596 3.57451 22.2017 3.91767C22.3439 4.26083 22.417 4.62862 22.417 5.00006C22.417 5.37149 22.3439 5.73929 22.2017 6.08245C22.0596 6.42561 21.8513 6.73741 21.5886 7.00006L8.08862 20.5001L2.58862 22.0001L4.08862 16.5001L17.5886 3.00006Z"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconPrimitive>
  );
};

export default IconEdit;
