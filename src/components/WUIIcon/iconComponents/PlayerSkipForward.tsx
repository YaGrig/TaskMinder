import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlayerSkipForward = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.667 3.333v9.334l8-4.667-8-4.667ZM13.333 3.333v9.334"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPlayerSkipForward;
