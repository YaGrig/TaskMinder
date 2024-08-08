import * as React from 'react';
import { SVGProps } from 'react';

const SvgScaleBigger = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Scale-bigger_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 10a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0ZM10 2.25a7.75 7.75 0 1 0 4.924 13.735l5.546 5.545a.75.75 0 1 0 1.06-1.06l-5.545-5.546A7.75 7.75 0 0 0 10 2.25Z"
        fill="currentColor"
      />
      <path d="M10 7v6M13 10H7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="Scale-bigger_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgScaleBigger;
