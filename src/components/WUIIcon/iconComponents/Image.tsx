import * as React from 'react';
import { SVGProps } from 'react';

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.35 4A2.65 2.65 0 0 1 4 1.35h8A2.65 2.65 0 0 1 14.65 4v8A2.65 2.65 0 0 1 12 14.65H4A2.65 2.65 0 0 1 1.35 12V4ZM4 2.65A1.35 1.35 0 0 0 2.65 4v8c0 .746.605 1.35 1.35 1.35h8A1.35 1.35 0 0 0 13.35 12V4A1.35 1.35 0 0 0 12 2.65H4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.459 7.687a1.35 1.35 0 0 0-1.806 0L2.435 9.683a.65.65 0 0 1-.87-.966L3.783 6.72a2.65 2.65 0 0 1 3.545 0l3.107 2.796a.65.65 0 1 1-.87.966L6.46 7.687Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.955 9.874a1.35 1.35 0 0 0-1.91 0l-.585.586a.65.65 0 0 1-.92-.92l.586-.585a2.65 2.65 0 0 1 3.748 0l.586.585a.65.65 0 1 1-.92.92l-.585-.586Z"
      fill="currentColor"
    />
    <path d="M11.5 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" fill="currentColor" />
  </svg>
);

export default SvgImage;
