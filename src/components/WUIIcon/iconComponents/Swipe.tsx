import * as React from 'react';
import { SVGProps } from 'react';

const SvgSwipe = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      clipPath="url(#Swipe_svg__a)"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.8 11.5H3M9 15l4.8-3.5M9 8l4.8 3.5M2 4.5h10.8M6.8 8 2 4.5M6.8 1 2 4.5" />
    </g>
    <defs>
      <clipPath id="Swipe_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSwipe;
