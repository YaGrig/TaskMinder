import * as React from 'react';
import { SVGProps } from 'react';

const SvgPoints = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.333 6.833a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334Zm4.667 0a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334ZM11.5 8a1.167 1.167 0 1 1 2.333 0A1.167 1.167 0 0 1 11.5 8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPoints;
