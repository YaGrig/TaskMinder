import * as React from 'react';
import { SVGProps } from 'react';

const SvgWriting = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.333 11.333v-8A1.32 1.32 0 0 0 12 2a1.32 1.32 0 0 0-1.333 1.333v8L12 12.667l1.333-1.334ZM10.667 4.667h2.666M12 12.667H3.333a1.333 1.333 0 1 1 0-2.667H6a1.333 1.333 0 0 0 0-2.667H4"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgWriting;
