import * as React from 'react';
import { SVGProps } from 'react';

const SvgFinished = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.65a5.35 5.35 0 1 0 0 10.7.65.65 0 1 1 0 1.3A6.65 6.65 0 1 1 14.65 8a.65.65 0 1 1-1.3 0A5.35 5.35 0 0 0 8 2.65Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.407 10.849a.65.65 0 0 1 .15.907l-3.028 3.122a.65.65 0 0 1-.989.082l-1.5-1.5a.65.65 0 1 1 .92-.92l.957.958L14.5 11a.65.65 0 0 1 .907-.151ZM8 4.35a.65.65 0 0 1 .65.65v3.175l1.74 1.305a.65.65 0 1 1-.78 1.04L7.35 8.825V5A.65.65 0 0 1 8 4.35Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFinished;
