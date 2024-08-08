import * as React from 'react';
import { SVGProps } from 'react';

const SvgAttention = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 5v3M8 10.667h.007"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAttention;
