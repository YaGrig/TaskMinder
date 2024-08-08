import * as React from 'react';
import { SVGProps } from 'react';

const SvgNbase = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      clipPath="url(#Nbase_svg__a)"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 4H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3M17.071 8.839V2.946h-5.893M10 10.017l7.071-7.07" />
    </g>
    <defs>
      <clipPath id="Nbase_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNbase;
