import * as React from 'react';
import { SVGProps } from 'react';

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.65a2.017 2.017 0 1 0 0 4.033A2.017 2.017 0 0 0 8 2.65ZM4.683 4.667a3.317 3.317 0 1 1 6.634 0 3.317 3.317 0 0 1-6.634 0ZM6.667 10.65a2.017 2.017 0 0 0-2.017 2.017V14a.65.65 0 1 1-1.3 0v-1.333A3.317 3.317 0 0 1 6.667 9.35h2.666a3.317 3.317 0 0 1 3.317 3.317V14a.65.65 0 1 1-1.3 0v-1.333a2.017 2.017 0 0 0-2.017-2.017H6.667Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUser;
