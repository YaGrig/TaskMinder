import * as React from 'react';
import { SVGProps } from 'react';

const SvgScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10.143a.857.857 0 0 0 .857-.857V3a1 1 0 0 0-1-1ZM1 14h14"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgScreen;
