import * as React from 'react';
import { SVGProps } from 'react';

const SvgLayoutGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 2.667H3.333a.667.667 0 0 0-.666.666V6c0 .368.298.667.666.667H6A.667.667 0 0 0 6.667 6V3.333A.667.667 0 0 0 6 2.667ZM12.667 2.667H10a.667.667 0 0 0-.667.666V6c0 .368.299.667.667.667h2.667A.667.667 0 0 0 13.333 6V3.333a.667.667 0 0 0-.666-.666ZM6 9.333H3.333a.667.667 0 0 0-.666.667v2.667c0 .368.298.666.666.666H6a.667.667 0 0 0 .667-.666V10A.667.667 0 0 0 6 9.333ZM12.667 9.333H10a.667.667 0 0 0-.667.667v2.667c0 .368.299.666.667.666h2.667a.667.667 0 0 0 .666-.666V10a.667.667 0 0 0-.666-.667Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLayoutGrid;
