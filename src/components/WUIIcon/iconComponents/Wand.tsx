import * as React from 'react';
import { SVGProps } from 'react';

const SvgWand = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      clipPath="url(#Wand_svg__a)"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14 14 4l-2-2L2 12l2 2ZM10 4l2 2M6 2a1.333 1.333 0 0 0 1.333 1.333A1.333 1.333 0 0 0 6 4.667a1.333 1.333 0 0 0-1.333-1.334A1.333 1.333 0 0 0 6 2ZM12.667 8.666A1.334 1.334 0 0 0 14 10a1.333 1.333 0 0 0-1.333 1.333A1.333 1.333 0 0 0 11.333 10a1.333 1.333 0 0 0 1.334-1.334Z" />
    </g>
    <defs>
      <clipPath id="Wand_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWand;
