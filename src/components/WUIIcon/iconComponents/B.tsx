import * as React from 'react';
import { SVGProps } from 'react';

const SvgB = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.667 13.333V2.667h4a2.667 2.667 0 0 1 0 5.333 2.667 2.667 0 0 1 0 5.333h-4ZM4.667 8h4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgB;
