import * as React from 'react';
import { SVGProps } from 'react';

const SvgExit = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.354 5.98a.5.5 0 0 1 0 .707L3.207 7.833h6.126a.5.5 0 0 1 0 1H3.207L4.354 9.98a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 3.667c0-.46.373-.834.833-.834h5.334c.46 0 .833.373.833.834V13c0 .46-.373.833-.833.833H6.333A.833.833 0 0 1 5.5 13v-1.137a.5.5 0 0 1 1 0v.97h5v-9h-5v.834a.5.5 0 0 1-1 0v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExit;
