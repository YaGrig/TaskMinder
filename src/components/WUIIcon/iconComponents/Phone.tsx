import * as React from 'react';
import { SVGProps } from 'react';

const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.333 2.667H6L7.333 6 5.667 7A7.334 7.334 0 0 0 9 10.333l1-1.666L13.333 10v2.667A1.333 1.333 0 0 1 12 14 10.667 10.667 0 0 1 2 4a1.333 1.333 0 0 1 1.333-1.333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPhone;
