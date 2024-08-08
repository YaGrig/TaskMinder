import * as React from 'react';
import { SVGProps } from 'react';

const SvgRegularLesson = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Regular-lesson_svg__a)" stroke="#8A94AE" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.667 8V6a2 2 0 0 1 2-2h8.667m0 0-2-2m2 2-2 2M13.334 8v2a2 2 0 0 1-2 2H2.667m0 0 2 2m-2-2 2-2" />
    </g>
    <defs>
      <clipPath id="Regular-lesson_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRegularLesson;
