import * as React from 'react';
import { SVGProps } from 'react';

const SvgAttach = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Attach_svg__a)">
      <path
        d="m15 7-6.5 6.5a2.121 2.121 0 1 0 3 3L18 10a4.242 4.242 0 1 0-6-6l-6.5 6.5a6.364 6.364 0 1 0 9 9L21 13"
        stroke="#7968F8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Attach_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgAttach;
