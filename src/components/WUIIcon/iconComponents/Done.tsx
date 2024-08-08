import * as React from 'react';
import { SVGProps } from 'react';

const SvgDone = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.793 4.742a.8.8 0 0 1 0 1.036l-6.667 7.514a.6.6 0 0 1-.919 0L2.874 9.535a.8.8 0 0 1 0-1.036.6.6 0 0 1 .919 0l2.874 3.239 6.207-6.996a.6.6 0 0 1 .919 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDone;
