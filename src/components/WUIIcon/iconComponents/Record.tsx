import * as React from 'react';
import { SVGProps } from 'react';

const SvgRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Record_svg__a)">
      <circle cx={8} cy={8} r={3.35} stroke="currentColor" strokeWidth={1.3} />
      <circle cx={8} cy={8} r={2} fill="currentColor" />
      <path
        d="M1.5 4.75V3.125A1.625 1.625 0 0 1 3.125 1.5H4.75M1.5 11.25v1.625A1.625 1.625 0 0 0 3.125 14.5H4.75M11.25 1.5h1.625A1.625 1.625 0 0 1 14.5 3.125V4.75M11.25 14.5h1.625a1.625 1.625 0 0 0 1.625-1.625V11.25"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Record_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRecord;
