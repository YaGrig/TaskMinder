import * as React from 'react';
import { SVGProps } from 'react';

const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.533 5V2.75a.758.758 0 0 0-.214-.53A.725.725 0 0 0 10.8 2H3.467a1.45 1.45 0 0 0-1.037.44C2.155 2.72 2 3.101 2 3.5s.155.78.43 1.06c.275.282.648.44 1.037.44h8.8c.194 0 .38.079.518.22.138.14.215.331.215.53V8m0 3v2.25c0 .199-.077.39-.215.53a.725.725 0 0 1-.518.22h-8.8a1.45 1.45 0 0 1-1.037-.44A1.518 1.518 0 0 1 2 12.5v-9"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8v3h-2.667c-.353 0-.692-.158-.943-.44A1.6 1.6 0 0 1 10 9.5c0-.398.14-.78.39-1.06.25-.282.59-.44.943-.44H14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPayment;
