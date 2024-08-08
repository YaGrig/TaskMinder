import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 4-8 8M5 4h7v7" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgArrowUpRight;
