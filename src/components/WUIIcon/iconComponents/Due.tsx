import * as React from 'react';
import { SVGProps } from 'react';

const SvgDue = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Due_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.983 2a.65.65 0 0 0-1.3 0v.672h-1.39a1.95 1.95 0 0 0-1.95 1.95v8.06a1.95 1.95 0 0 0 1.95 1.95h4.689a.65.65 0 1 0 0-1.3h-4.69a.65.65 0 0 1-.65-.65V7.317h10.715v.333a.65.65 0 1 0 1.3 0V4.622a1.95 1.95 0 0 0-1.95-1.95h-1.39V2a.65.65 0 1 0-1.3 0v.672H5.983V2Zm-1.3 1.972V4a.65.65 0 0 0 1.3 0v-.028h4.034V4a.65.65 0 1 0 1.3 0v-.028h1.39a.65.65 0 0 1 .65.65v1.395H2.643V4.622a.65.65 0 0 1 .65-.65h1.39Z"
        fill="#FF8A00"
      />
      <path
        d="m10.221 10.245 3.758 3.757M13.979 10.245l-3.758 3.757"
        stroke="#FF8A00"
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="Due_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDue;
