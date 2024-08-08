import * as React from 'react';
import { SVGProps } from 'react';

const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19 5H5v14h7v2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2v7h-2V5Zm-5 16v-2h3.59L7.76 9.17l1.41-1.41L19 17.59V14h2v7h-7Z"
      fill="#4A5368"
    />
  </svg>
);

export default SvgCollapse;
