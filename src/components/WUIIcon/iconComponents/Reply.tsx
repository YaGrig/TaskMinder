import * as React from 'react';
import { SVGProps } from 'react';

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.35 6A4.65 4.65 0 0 1 5 1.35h1a.65.65 0 0 1 0 1.3H5a3.35 3.35 0 1 0 0 6.7h10a.65.65 0 1 1 0 1.3H5A4.65 4.65 0 0 1 .35 6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.54 5.54a.65.65 0 0 1 .92 0l4 4a.65.65 0 0 1 0 .92l-4 4a.65.65 0 0 1-.92-.92L14.08 10l-3.54-3.54a.65.65 0 0 1 0-.92Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReply;
