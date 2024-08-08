import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1 19.78 17.821 2.902"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m21 0-4.16 10L11 4.16 21 0Z" fill="currentColor" />
  </svg>
);

export default SvgArrow;
