import * as React from 'react';
import { SVGProps } from 'react';

const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Stopwatch_svg__a)" fill="#FF8A00">
      <path d="m13.072 5.486.767-.766a.562.562 0 1 0-.795-.796l-.767.767a6.228 6.228 0 0 0-3.443-1.428v-.52h.515a.833.833 0 0 0 .832-.832V.832A.833.833 0 0 0 9.35 0H7.193a.833.833 0 0 0-.833.832v1.079c0 .458.374.831.833.831h.515v.521a6.227 6.227 0 0 0-3.443 1.428l-.767-.767a.562.562 0 1 0-.795.796l.767.766a6.227 6.227 0 0 0-1.457 4.006 6.264 6.264 0 0 0 6.258 6.258 6.264 6.264 0 0 0 6.258-6.258c0-1.523-.549-2.92-1.456-4.006Zm-4.801 9.139a5.138 5.138 0 0 1-5.133-5.133A5.138 5.138 0 0 1 8.271 4.36a5.138 5.138 0 0 1 5.132 5.132 5.138 5.138 0 0 1-5.132 5.133Zm-.786-13.5h1.571v.492h-1.57v-.492Z" />
      <path d="M10.537 8.93H8.833V7.126a.563.563 0 0 0-1.125 0v2.366c0 .311.252.563.563.563h2.266a.563.563 0 0 0 0-1.125Z" />
    </g>
    <defs>
      <clipPath id="Stopwatch_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStopwatch;
