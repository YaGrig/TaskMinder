import * as React from 'react';
import { SVGProps } from 'react';

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.35 3.5A2.15 2.15 0 0 1 4.5 1.35h4.086c.437 0 .857.174 1.167.483l3.414 3.414c.31.31.483.73.483 1.167V12.5a2.15 2.15 0 0 1-2.15 2.15h-7a2.15 2.15 0 0 1-2.15-2.15v-9Zm2.15-.85a.85.85 0 0 0-.85.85v9c0 .47.38.85.85.85h7c.47 0 .85-.38.85-.85V6.65H9A.65.65 0 0 1 8.35 6V2.65H4.5Zm5.15.92v1.78h1.78L9.65 3.57Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFile;
