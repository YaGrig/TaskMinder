import * as React from 'react';
import { SVGProps } from 'react';

const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.65 10A4.65 4.65 0 0 1 11 14.65h-1a.65.65 0 0 1 0-1.3h1a3.35 3.35 0 1 0 0-6.7H1a.65.65 0 1 1 0-1.3h10A4.65 4.65 0 0 1 15.65 10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46 10.46a.65.65 0 0 1-.92 0l-4-4a.65.65 0 0 1 0-.92l4-4a.65.65 0 1 1 .92.92L1.92 6l3.54 3.54a.65.65 0 0 1 0 .92Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBack;
