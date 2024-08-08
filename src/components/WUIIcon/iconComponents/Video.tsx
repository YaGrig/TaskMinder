import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.889 2.5H4.11C2.393 2.5 1 3.907 1 5.643v4.714C1 12.093 2.393 13.5 4.111 13.5h7.778c1.718 0 3.111-1.407 3.111-3.143V5.643C15 3.907 13.607 2.5 11.889 2.5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m6.5 5.5 4 2.5-4 2.5v-5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgVideo;
