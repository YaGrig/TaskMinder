import * as React from 'react';
import { SVGProps } from 'react';

const SvgSadSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 136 137" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M134 68.5c0 36.451-29.549 66-66 66-36.45 0-66-29.549-66-66 0-36.45 29.55-66 66-66 36.451 0 66 29.55 66 66Z"
      stroke="#A5B0CB"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <path
      d="M89 90.5c-4.882-6.656-12.916-11-22-11s-17.117 4.344-22 11"
      stroke="#A5B0CB"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <circle cx={48.5} cy={54} r={4.5} fill="#A5B0CB" />
    <circle cx={85.5} cy={54} r={4.5} fill="#A5B0CB" />
  </svg>
);

export default SvgSadSmile;
