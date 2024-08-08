import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeparture = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.667 9.333 14 2M14 2 9.667 14A.367.367 0 0 1 9 14L6.667 9.333 2 7a.367.367 0 0 1 0-.667L14 2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDeparture;
