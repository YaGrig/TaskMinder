import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={2.6}
    stroke="currentColor"
    {...props}
  >
    <path d="M13 19h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4.15" />
    <path d="m13.5 18.85-7.5 6v-5.946h-.5" />
  </svg>
);

export default SvgCloud;
