import * as React from 'react';
import { SVGProps } from 'react';

const SvgDoneCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Done-check_svg__a)" stroke="currentColor" strokeWidth={4} strokeLinecap="round">
      <path d="M25 36.875 37.273 50 70 15" strokeLinejoin="round" />
      <path d="M74.827 36.525A35 35 0 1 1 51.92 7.093" />
    </g>
    <defs>
      <clipPath id="Done-check_svg__a">
        <path fill="currentColor" d="M0 0h80v80H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDoneCheck;
