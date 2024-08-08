import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.65 6.667a4.017 4.017 0 1 1 8.033 0 4.017 4.017 0 0 1-8.033 0ZM6.667 1.35a5.317 5.317 0 1 0 3.272 9.508l3.601 3.602a.65.65 0 0 0 .92-.92l-3.602-3.602A5.317 5.317 0 0 0 6.667 1.35Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
