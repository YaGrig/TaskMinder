import * as React from 'react';
import { SVGProps } from 'react';

const SvgFile1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.333 2v2.667a.667.667 0 0 0 .667.666h2.667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.333 14H4.667a1.333 1.333 0 0 1-1.334-1.333V3.333A1.333 1.333 0 0 1 4.667 2h4.666l3.334 3.333v7.334A1.334 1.334 0 0 1 11.333 14ZM6 6h.667M6 8.667h4M6 11.333h4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFile1;
