import * as React from 'react';
import { SVGProps } from 'react';

const SvgMagicWand = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      clipPath="url(#MagicWand_svg__a)"
      stroke="#4F3ED5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 24.5 24.5 7 21 3.5 3.5 21 7 24.5ZM17.5 7l3.5 3.5M10.5 3.5a2.333 2.333 0 0 0 2.333 2.333A2.333 2.333 0 0 0 10.5 8.167a2.333 2.333 0 0 0-2.333-2.334A2.333 2.333 0 0 0 10.5 3.5ZM22.167 15.167A2.333 2.333 0 0 0 24.5 17.5a2.333 2.333 0 0 0-2.333 2.333 2.333 2.333 0 0 0-2.334-2.333 2.333 2.333 0 0 0 2.334-2.333Z" />
    </g>
    <defs>
      <clipPath id="MagicWand_svg__a">
        <path fill="currentColor" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMagicWand;
