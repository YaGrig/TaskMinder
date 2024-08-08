import * as React from 'react';
import { SVGProps } from 'react';

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.207 3.207a2.536 2.536 0 1 1 3.586 3.586l-7 7a.65.65 0 0 1-.46.19H2.667a.65.65 0 0 1-.65-.65v-2.667a.65.65 0 0 1 .19-.46l7-7ZM11 3.764c-.328 0-.642.13-.874.362l-6.81 6.81v1.747h1.748l6.81-6.81A1.235 1.235 0 0 0 11 3.765Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.54 3.874a.65.65 0 0 1 .92 0l2.666 2.666a.65.65 0 0 1-.919.92L8.54 4.793a.65.65 0 0 1 0-.92Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEdit;
