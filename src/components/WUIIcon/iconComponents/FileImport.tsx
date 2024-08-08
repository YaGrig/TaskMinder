import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileImport = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 1v3.263a.737.737 0 0 0 .737.737H14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 8V2.474A1.474 1.474 0 0 1 4.474 1H10l4 4v8a1.474 1.474 0 0 1-1.474 1.474H8.5M1 12.79h5.158m0 0-2.21-2.211m2.21 2.21L3.948 15"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFileImport;
