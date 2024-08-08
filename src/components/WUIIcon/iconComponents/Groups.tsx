import * as React from 'react';
import { SVGProps } from 'react';

const SvgGroups = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.087a2.666 2.666 0 0 1 0 5.166M14 14v-1.333a2.667 2.667 0 0 0-2-2.567M14.672 2a2.667 2.667 0 0 1 0 5.167M18 14v-1.333a2.667 2.667 0 0 0-2-2.567"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGroups;
