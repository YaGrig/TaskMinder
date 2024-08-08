import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinus1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.65 8a.65.65 0 0 1-.65.65H2a.65.65 0 0 1 0-1.3h12a.65.65 0 0 1 .65.65Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMinus1;
