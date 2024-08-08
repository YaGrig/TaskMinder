import * as React from 'react';
import { SVGProps } from 'react';

const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    strokeWidth={2}
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m2 18 8-15.5L18 18H2.305Z" />
  </svg>
);

export default SvgTriangle;
