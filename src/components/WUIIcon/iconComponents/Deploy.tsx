import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeploy = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.667 5.333V4A1.333 1.333 0 0 1 4 2.667h1.333M2.667 10.667V12A1.333 1.333 0 0 0 4 13.333h1.333M10.667 2.667H12A1.333 1.333 0 0 1 13.333 4v1.333M10.667 13.333H12A1.334 1.334 0 0 0 13.333 12v-1.333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDeploy;
