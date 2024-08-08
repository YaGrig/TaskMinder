import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelectfilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#Select_filled_svg__b)" clipPath="url(#Select_filled_svg__a)">
      <path d="m2 2 12 4-5.333 2.667L6 14 2 2Z" fill="#4F3ED5" />
      <path
        d="m2 2 12 4-5.333 2.667L6 14 2 2Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Select_filled_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
      <filter
        id="Select_filled_svg__b"
        x={0.35}
        y={-0.65}
        width={15.3}
        height={17.3}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={-1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3402_433765" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend in2="effect1_dropShadow_3402_433765" result="effect2_dropShadow_3402_433765" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_3402_433765" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgSelectfilled;
