import * as React from 'react';
import { SVGProps } from 'react';

const SvgEditBox = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.846 4H3.538A1.539 1.539 0 0 0 2 5.538v6.923A1.538 1.538 0 0 0 3.538 14h6.923A1.538 1.538 0 0 0 12 12.461v-2.307"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 10h2.227l6.312-6.311A1.575 1.575 0 1 0 12.31 1.46L6 7.773V10ZM12 3l1.5 1.5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEditBox;
