import * as React from 'react';
import { SVGProps } from 'react';

const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 11.333v.007" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8 9a1 1 0 0 1 .667-1 1.733 1.733 0 1 0-2-2.667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgHelp;
