import * as React from 'react';
import { SVGProps } from 'react';

const SvgCourses = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Courses_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.355 4.925a.65.65 0 0 0-.005.093v10.808a.646.646 0 0 0 .407.615.649.649 0 0 0 .553-.031l.015-.009a6.85 6.85 0 0 1 6.887.02.65.65 0 0 0 .596-.01l.017-.01a6.849 6.849 0 0 1 6.85 0 .65.65 0 0 0 .975-.573V5.017a.655.655 0 0 0-.325-.575 8.15 8.15 0 0 0-7.825-.178 8.15 8.15 0 0 0-7.825.178.647.647 0 0 0-.32.483Zm14.995.467a6.85 6.85 0 0 0-6.2 0v9.404a8.15 8.15 0 0 1 6.2 0V5.392Zm-7.5 0v9.404a8.151 8.151 0 0 0-6.2 0V5.392a6.85 6.85 0 0 1 6.2 0Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Courses_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCourses;
