import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.1 5.333a.9.9 0 0 1 .9-.9h.008a.9.9 0 1 1 0 1.8H8a.9.9 0 0 1-.9-.9ZM6.684 8a.65.65 0 0 1 .65-.65H8a.65.65 0 0 1 .65.65v2.017h.017a.65.65 0 0 1 0 1.3H8a.65.65 0 0 1-.65-.65V8.65h-.016a.65.65 0 0 1-.65-.65Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInfo;
