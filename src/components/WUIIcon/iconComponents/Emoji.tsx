import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmoji = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <circle
      cx={128}
      cy={128}
      r={96}
      fill="none"
      stroke="#A5B0CB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="#A5B0CB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M169.578 151.996a48.027 48.027 0 0 1-83.156.001"
    />
    <circle cx={92} cy={108} fill="#A5B0CB" r={12} />
    <circle cx={164} cy={108} fill="#A5B0CB" r={12} />
  </svg>
);

export default SvgEmoji;
