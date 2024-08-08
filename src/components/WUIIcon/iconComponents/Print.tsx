import * as React from 'react';
import { SVGProps } from 'react';

const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.333 11.333h1.334A1.333 1.333 0 0 0 14 10V7.333A1.334 1.334 0 0 0 12.667 6H3.333A1.333 1.333 0 0 0 2 7.333V10a1.333 1.333 0 0 0 1.333 1.333h1.334M11.333 6V3.333A1.334 1.334 0 0 0 10 2H6a1.333 1.333 0 0 0-1.333 1.333V6"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 8.667H6c-.736 0-1.333.597-1.333 1.333v2.667C4.667 13.403 5.264 14 6 14h4c.736 0 1.333-.597 1.333-1.333V10c0-.736-.597-1.333-1.333-1.333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPrint;
