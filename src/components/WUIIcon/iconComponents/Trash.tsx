import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.667 4.667h10.666M6.667 7.333v4M9.333 7.333v4M3.333 4.667l.667 8A1.333 1.333 0 0 0 5.333 14h5.334A1.334 1.334 0 0 0 12 12.667l.667-8M6 4.667v-2A.667.667 0 0 1 6.667 2h2.666a.667.667 0 0 1 .667.667v2"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTrash;
