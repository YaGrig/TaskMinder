import * as React from 'react';
import { SVGProps } from 'react';

const SvgForward1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={8} cy={8} r={7.35} stroke="currentColor" strokeWidth={1.3} />
    <path
      d="m9.5 9.5 2-2m0 0-2-2m2 2H6a2 2 0 1 0 0 4h.5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgForward1;
