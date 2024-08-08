import * as React from 'react';
import { SVGProps } from 'react';

const SvgU = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 2.4V9c0 .796.351 1.559.976 2.121.625.563 1.473.879 2.357.879h1.334c.884 0 1.732-.316 2.357-.879C11.649 10.56 12 9.796 12 9V2.4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3.333 14.667h10" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

export default SvgU;
