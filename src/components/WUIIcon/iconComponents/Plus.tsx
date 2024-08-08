import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.65 2a.65.65 0 0 0-1.3 0v5.35H2a.65.65 0 1 0 0 1.3h5.35V14a.65.65 0 1 0 1.3 0V8.65H14a.65.65 0 1 0 0-1.3H8.65V2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlus;
