import * as React from 'react';
import { SVGProps } from 'react';

const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Repeat_svg__a)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M8 2.65a5.35 5.35 0 1 0 4.635 8.024.65.65 0 0 1 1.125.651 6.65 6.65 0 1 1 .68-4.987.65.65 0 0 1-1.258.324A5.353 5.353 0 0 0 8 2.65Z" />
      <path d="M14.014 9.85a.65.65 0 0 1 .65.65V14a.65.65 0 0 1-1.3 0v-2.85H10.5a.65.65 0 1 1 0-1.3h3.514Z" />
    </g>
    <defs>
      <clipPath id="Repeat_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRepeat;
