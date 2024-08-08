import * as React from 'react';
import { SVGProps } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={8} cy={8} r={6.35} stroke="currentColor" strokeWidth={1.3} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4.35a.65.65 0 0 1 .65.65v3.175l1.74 1.305a.65.65 0 1 1-.78 1.04L7.35 8.825V5A.65.65 0 0 1 8 4.35Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClock;
