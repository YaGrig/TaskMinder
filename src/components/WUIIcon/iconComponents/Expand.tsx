import * as React from 'react';
import { SVGProps } from 'react';

const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 19h14V5h-7V3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5c-1.1 0-2-.9-2-2v-7h2v7Zm5-16v2H6.41l9.83 9.83-1.41 1.41L5 6.41V10H3V3h7Z"
      fill="#4A5368"
    />
  </svg>
);

export default SvgExpand;
