import * as React from 'react';
import { SVGProps } from 'react';

const SvgT = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.333 10 14 12.667M14 10l-2.667 2.667M4.667 4v-.667H12V4M4.667 12.667h2.666M8.667 3.333 6 12.667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgT;
