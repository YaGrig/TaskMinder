import * as React from 'react';
import { SVGProps } from 'react';

const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.65A2.35 2.35 0 0 0 2.65 6v7.544l1.762-1.58a1.65 1.65 0 0 1 1.101-.423H11a2.35 2.35 0 0 0 2.35-2.35V6A2.35 2.35 0 0 0 11 3.65H5ZM1.35 6A3.65 3.65 0 0 1 5 2.35h6A3.65 3.65 0 0 1 14.65 6v3.191a3.65 3.65 0 0 1-3.65 3.65H5.513a.35.35 0 0 0-.233.09l-2.846 2.553A.65.65 0 0 1 1.35 15V6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChat;
