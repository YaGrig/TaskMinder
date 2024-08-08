import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 4.667 5.667 9a1.414 1.414 0 1 0 2 2L12 6.667a2.828 2.828 0 1 0-4-4L3.667 7a4.243 4.243 0 1 0 6 6L14 8.667"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPaperclip;
