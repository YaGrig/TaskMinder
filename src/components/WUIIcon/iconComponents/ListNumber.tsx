import * as React from 'react';
import { SVGProps } from 'react';

const SvgListNumber = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.364 4h9.09M4.364 8h9.09M4.364 12h9.09"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g clipPath="url(#List-number_svg__a)">
      <path
        d="M1.733 5.067V2.933l-.666.667"
        stroke="currentColor"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g clipPath="url(#List-number_svg__b)">
      <path
        d="M1.067 7.467a.533.533 0 1 1 1.066 0c0 .146-.075.27-.154.375l-.912 1.225h1.066"
        stroke="currentColor"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g
      clipPath="url(#List-number_svg__c)"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.6 12a.533.533 0 1 0-.533-.533M1.067 12.533A.533.533 0 1 0 1.6 12" />
    </g>
    <defs>
      <clipPath id="List-number_svg__a">
        <path fill="currentColor" transform="translate(0 2.4)" d="M0 0h3.2v3.2H0z" />
      </clipPath>
      <clipPath id="List-number_svg__b">
        <path fill="currentColor" transform="translate(0 6.4)" d="M0 0h3.2v3.2H0z" />
      </clipPath>
      <clipPath id="List-number_svg__c">
        <path fill="currentColor" transform="translate(0 10.4)" d="M0 0h3.2v3.2H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgListNumber;
