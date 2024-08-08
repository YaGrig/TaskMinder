import * as React from 'react';
import { SVGProps } from 'react';

const SvgAudio = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 5.333a3.333 3.333 0 0 1 0 5.334M11.8 3.333a6 6 0 0 1 0 9.334M4 10H2.667A.667.667 0 0 1 2 9.333V6.667A.667.667 0 0 1 2.667 6H4l2.333-3a.533.533 0 0 1 1 .333v9.334a.533.533 0 0 1-1 .333L4 10Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAudio;
