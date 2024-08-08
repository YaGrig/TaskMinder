import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54 3.54a.65.65 0 0 1 .92 0l4 4a.65.65 0 0 1 0 .92l-4 4a.65.65 0 0 1-.92-.92L9.08 8 5.54 4.46a.65.65 0 0 1 0-.92Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronRight;
