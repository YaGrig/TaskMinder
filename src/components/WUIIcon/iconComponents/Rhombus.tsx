import * as React from 'react';
import { SVGProps } from 'react';

const SvgRhombus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m10 1.5 8.5 8.5-8.5 8.5L1.5 10Z" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgRhombus;
