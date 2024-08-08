import * as React from 'react';
import { SVGProps } from 'react';

const SvgCopy1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 5.333H6.667c-.737 0-1.334.597-1.334 1.334V12c0 .736.597 1.333 1.334 1.333H12c.736 0 1.333-.597 1.333-1.333V6.667c0-.737-.597-1.334-1.333-1.334Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.667 5.333V4a1.333 1.333 0 0 0-1.334-1.333H4A1.333 1.333 0 0 0 2.667 4v5.333A1.333 1.333 0 0 0 4 10.667h1.333"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCopy1;
