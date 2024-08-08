import * as React from 'react';
import { SVGProps } from 'react';

const SvgTools = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 14h2.667l8.666-8.667a1.885 1.885 0 1 0-2.666-2.666L2 11.333V14ZM9.667 3.667l2.666 2.666M8 5.333 4.667 2 2 4.667 5.333 8M4.667 5.333l-1 1M10.667 8 14 11.333 11.333 14 8 10.667M10.667 11.333l-1 1"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTools;
