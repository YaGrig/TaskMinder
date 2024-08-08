import * as React from 'react';
import { SVGProps } from 'react';

const SvgPreviewMock = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="#8A94AE">
      <path d="M57.063 24.252h.046M69.042 1.333H16.96c-8.63 0-15.625 6.996-15.625 15.625v52.084c0 8.629 6.996 15.625 15.625 15.625h52.083c8.63 0 15.625-6.996 15.625-15.625V16.958c0-8.63-6.995-15.625-15.625-15.625Z" />
      <path d="m1.334 58.689 20.833-20.577c2.376-2.257 5.07-3.446 7.813-3.446 2.743 0 5.437 1.189 7.812 3.446l26.042 25.721M55.5 53.424l4.861-6.242C62.578 44.442 65.093 43 67.653 43c2.56 0 5.075 1.442 7.291 4.182l9.723 12.485" />
    </g>
  </svg>
);

export default SvgPreviewMock;
