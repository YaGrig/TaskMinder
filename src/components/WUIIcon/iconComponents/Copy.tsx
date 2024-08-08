import * as React from 'react';
import { SVGProps } from 'react';

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.35 3c0-.911.739-1.65 1.65-1.65h6c.911 0 1.65.739 1.65 1.65v3h-1.3V3A.35.35 0 0 0 9 2.65H3a.35.35 0 0 0-.35.35v6c0 .193.157.35.35.35h3v1.3H3A1.65 1.65 0 0 1 1.35 9V3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.35 7c0-.911.739-1.65 1.65-1.65h6c.911 0 1.65.739 1.65 1.65v6A1.65 1.65 0 0 1 13 14.65H7A1.65 1.65 0 0 1 5.35 13V7ZM7 6.65a.35.35 0 0 0-.35.35v6c0 .193.157.35.35.35h6a.35.35 0 0 0 .35-.35V7a.35.35 0 0 0-.35-.35H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCopy;
