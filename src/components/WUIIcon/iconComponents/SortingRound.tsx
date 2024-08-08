import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortinground = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.5 5.5h7M6.25 8.125h3.5M5.375 10.75h5.25"
      stroke="currentColor"
      strokeWidth={1.137}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={8} cy={8} r={7.35} stroke="currentColor" strokeWidth={1.3} />
  </svg>
);

export default SvgSortinground;
