import * as React from 'react';
import { SVGProps } from 'react';

const SvgTiltshift = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      x={1.333}
      y={1.333}
      width={13.333}
      height={13.333}
      rx={4}
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <path
      d="M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTiltshift;
