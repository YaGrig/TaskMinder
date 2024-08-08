import * as React from 'react';
import { SVGProps } from 'react';

const SvgCancelled = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.65a6.35 6.35 0 1 0 0 12.7 6.35 6.35 0 0 0 0-12.7ZM.35 8a7.65 7.65 0 1 1 15.3 0A7.65 7.65 0 0 1 .35 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.42 3.5 3.5 13.42l-.92-.92 9.92-9.92.92.92Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCancelled;
