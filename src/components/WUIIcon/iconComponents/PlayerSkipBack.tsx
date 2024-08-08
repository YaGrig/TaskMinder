import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlayerSkipBack = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.333 3.333v9.334L5.333 8l8-4.667ZM2.667 3.333v9.334"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPlayerSkipBack;
