import * as React from 'react';
import { SVGProps } from 'react';

const SvgBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.35 2C.35 1.089 1.089.35 2 .35h12c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 14 11.65H2A1.65 1.65 0 0 1 .35 10V2ZM2 1.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h12a.35.35 0 0 0 .35-.35V2a.35.35 0 0 0-.35-.35H2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.46 11.04a.65.65 0 0 1 0 .92l-2.5 2.5a.65.65 0 1 1-.92-.92l2.5-2.5a.65.65 0 0 1 .92 0ZM9.54 11.04a.65.65 0 0 0 0 .92l2.5 2.5a.65.65 0 1 0 .92-.92l-2.5-2.5a.65.65 0 0 0-.92 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBoard;
