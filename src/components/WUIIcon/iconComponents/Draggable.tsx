import * as React from 'react';
import { SVGProps } from 'react';

const SvgDraggable = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Draggable_svg__a)" fill="#8A94AE" stroke="#8A94AE" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.999 4a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM5.999 8.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM5.999 13.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM9.999 4a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM9.999 8.666a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM9.999 13.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z" />
    </g>
    <defs>
      <clipPath id="Draggable_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDraggable;
