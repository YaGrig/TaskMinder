import * as React from 'react';
import { SVGProps } from 'react';

const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 14v-2.667A2.667 2.667 0 1 1 4.667 14H2Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2a10.667 10.667 0 0 0-8.533 6.8M14 2a10.668 10.668 0 0 1-6.8 8.533"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.067 6A6 6 0 0 1 10 8.933"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgBrush;
