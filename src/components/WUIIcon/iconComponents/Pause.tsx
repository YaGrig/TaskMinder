import * as React from 'react';
import { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.35 3A.65.65 0 0 1 3 2.35h3a.65.65 0 0 1 .65.65v10a.65.65 0 0 1-.65.65H3a.65.65 0 0 1-.65-.65V3Zm1.3.65v8.7h1.7v-8.7h-1.7ZM9.35 3a.65.65 0 0 1 .65-.65h3a.65.65 0 0 1 .65.65v10a.65.65 0 0 1-.65.65h-3a.65.65 0 0 1-.65-.65V3Zm1.3.65v8.7h1.7v-8.7h-1.7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPause;
