import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.667 2.667h2.666v2.666M9.333 6.667l4-4M5.333 13.333H2.667v-2.666M2.667 13.333l4-4M10.667 13.333h2.666v-2.666M9.333 9.333l4 4M5.333 2.667H2.667v2.666M2.667 2.667l4 4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsMinimize;
