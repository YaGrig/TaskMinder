import * as React from 'react';
import { SVGProps } from 'react';

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7.15a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.05.75a2.05 2.05 0 1 1 4.1 0 2.05 2.05 0 0 1-4.1 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.754 7.9C3.51 10.819 5.599 12.15 8 12.15c2.401 0 4.489-1.331 6.247-4.25C12.489 4.981 10.4 3.65 8 3.65S3.511 4.981 1.754 7.9ZM.436 7.577C2.373 4.187 4.888 2.35 8 2.35s5.627 1.837 7.564 5.227a.65.65 0 0 1 0 .645C13.627 11.612 11.112 13.45 8 13.45S2.373 11.613.436 8.222a.65.65 0 0 1 0-.645Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEye;
