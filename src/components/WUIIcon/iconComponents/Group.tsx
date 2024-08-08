import * as React from 'react';
import { SVGProps } from 'react';

const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 35v-3.333A6.667 6.667 0 0 1 16.667 25h6.666A6.667 6.667 0 0 1 30 31.667V35m-3.333-23.333a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0ZM31.379 11.724a4.372 4.372 0 0 1 0 8.47m5.465 11.061v-2.186a4.372 4.372 0 0 0-3.28-4.208M8.621 11.724a4.372 4.372 0 0 0 0 8.47M3.156 31.256v-2.186a4.372 4.372 0 0 1 3.28-4.208"
      stroke="currentColor"
      strokeWidth={2.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGroup;
