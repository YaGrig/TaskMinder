import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M1 1h18v18H1z" />
  </svg>
);

export default SvgSquare;
