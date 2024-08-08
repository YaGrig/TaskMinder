import * as React from 'react';
import { SVGProps } from 'react';

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 4h7.333M6 8h7.333M6 12h7.333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.333 4v.006M3.333 8v.006M3.333 12v.006"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgList;
