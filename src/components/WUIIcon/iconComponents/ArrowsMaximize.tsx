import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 5.667h-2.667V3M14.334 1.667l-4 4M3 10.333h2.667V13M5.667 10.333l-4 4M13 10.333h-2.667V13M14.333 14.333l-4-4M3 5.667h2.667V3M5.667 5.667l-4-4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsMaximize;
