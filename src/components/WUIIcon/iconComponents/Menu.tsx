import * as React from 'react';
import { SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3 3.983a.65.65 0 0 0 0-1.3H1.7a.65.65 0 0 0 0 1.3h12.6Zm.65 4.016a.65.65 0 0 1-.65.65H1.7a.65.65 0 0 1 0-1.3h12.6a.65.65 0 0 1 .65.65Zm0 4.667a.65.65 0 0 1-.65.65H1.7a.65.65 0 1 1 0-1.3h12.6a.65.65 0 0 1 .65.65Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMenu;
