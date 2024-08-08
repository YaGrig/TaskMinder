import * as React from 'react';
import { SVGProps } from 'react';

const SvgFigures = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M.9 11.9h7.2v7.2H.9z" />
    <circle cx={15.5} cy={15.5} r={3.6} />
    <path d="M6.363 8.1 10 1.8l3.637 6.3H6.363Z" />
  </svg>
);

export default SvgFigures;
