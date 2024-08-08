import * as React from 'react';
import { SVGProps } from 'react';

const SvgEntry = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.04 5.04a.65.65 0 0 0 0 .92l1.39 1.39H1a.65.65 0 1 0 0 1.3h8.43l-1.39 1.39a.65.65 0 0 0 .92.92l2.5-2.5a.65.65 0 0 0 0-.92l-2.5-2.5a.65.65 0 0 0-.92 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.35 1.5A.65.65 0 0 1 4 .85h10a.65.65 0 0 1 .65.65v13.15a.65.65 0 0 1-.65.65H4a.65.65 0 0 1-.65-.65v-2.546a.65.65 0 0 1 1.3 0V14h8.7V2.15h-8.7v1.895a.65.65 0 0 1-1.3 0V1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEntry;
