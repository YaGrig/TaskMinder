import * as React from 'react';
import { SVGProps } from 'react';

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.556 8H1l7-7 7 7h-1.556M3 8v5.444c0 .413.15.809.418 1.1.268.292.632.456 1.01.456h7.143c.38 0 .743-.164 1.01-.456.269-.291.419-.687.419-1.1V8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15v-4.5c0-.398.14-.78.39-1.06.25-.282.59-.44.943-.44h1.334c.353 0 .692.158.942.44.25.28.391.662.391 1.06V15"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgHome;
