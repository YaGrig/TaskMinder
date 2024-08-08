import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.5 13.5h6A1.5 1.5 0 0 0 15 12V6.5A1.5 1.5 0 0 0 13.5 5H9.27a.625.625 0 0 1-.46-.207L6.59 2.707a.625.625 0 0 0-.459-.207h-2.63A1.5 1.5 0 0 0 2 4v4.353M2 11.5h2m0 0v-2m0 2v2m0-2h2"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFolderAdd;
