import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.667 11.333v1.334A1.333 1.333 0 0 0 4 14h8a1.334 1.334 0 0 0 1.333-1.333v-1.334M4.667 7.333 8 10.667l3.333-3.334M8 2.667v8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDownload;
