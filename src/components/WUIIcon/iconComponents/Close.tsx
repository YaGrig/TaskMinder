import * as React from 'react';
import { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.298 3.298a.65.65 0 0 1 .919 0l8.485 8.485a.65.65 0 0 1-.919.92L3.298 4.216a.65.65 0 0 1 0-.92Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.702 3.298a.65.65 0 0 1 0 .919l-8.485 8.485a.65.65 0 0 1-.92-.919l8.486-8.485a.65.65 0 0 1 .92 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgClose;
