import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.75 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMinus;
