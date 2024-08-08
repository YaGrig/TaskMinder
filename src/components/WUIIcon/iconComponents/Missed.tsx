import * as React from 'react';
import { SVGProps } from 'react';

const SvgMissed = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.65a5.35 5.35 0 1 0 0 10.7.65.65 0 1 1 0 1.3A6.65 6.65 0 1 1 14.65 8a.65.65 0 1 1-1.3 0A5.35 5.35 0 0 0 8 2.65Z"
      fill="#FF3C49"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.35 4.35A.65.65 0 0 0 7.7 5v3.175L5.96 9.48a.65.65 0 0 0 .78 1.04L9 8.825V5a.65.65 0 0 0-.65-.65Z"
      fill="#FF3C49"
    />
    <path d="m10 10 3.757 3.757M13.757 10 10 13.757" stroke="#FF3C49" strokeWidth={1.3} strokeLinecap="round" />
  </svg>
);

export default SvgMissed;
