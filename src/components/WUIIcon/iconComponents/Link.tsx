import * as React from 'react';
import { SVGProps } from 'react';

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.667 9.333a2.333 2.333 0 0 0 3.333 0l2.667-2.666a2.357 2.357 0 1 0-3.334-3.334L9 3.667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.333 6.667a2.333 2.333 0 0 0-3.333 0L3.333 9.333a2.357 2.357 0 0 0 3.334 3.334L7 12.333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLink;
