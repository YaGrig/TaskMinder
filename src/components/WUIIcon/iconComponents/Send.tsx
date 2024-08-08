import * as React from 'react';
import { SVGProps } from 'react';

const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Send_svg__a)" stroke="#8A94AE" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 14 21 3M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3Z" />
    </g>
    <defs>
      <clipPath id="Send_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSend;
