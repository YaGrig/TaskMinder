import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 15H1V5h7V2l9.5 8L8 18v-3Z" />
  </svg>
);

export default SvgArrowRight;
