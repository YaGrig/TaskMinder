import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeployout = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.333 2.667V4A1.333 1.333 0 0 1 4 5.333H2.667M5.333 13.333V12A1.333 1.333 0 0 0 4 10.667H2.667M13.333 5.333H12A1.333 1.333 0 0 1 10.667 4V2.667M13.333 10.667H12A1.333 1.333 0 0 0 10.667 12v1.333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDeployout;
