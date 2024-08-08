import * as React from 'react';
import { SVGProps } from 'react';

const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 1v14M13 1v14M1 13h14M1 3h14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFrame;
