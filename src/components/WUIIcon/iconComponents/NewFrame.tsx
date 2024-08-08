import * as React from 'react';
import { SVGProps } from 'react';

const SvgNewFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.241 7.5v4.707c0 .99.803 1.793 1.793 1.793h7.173c.99 0 1.793-.803 1.793-1.793V5.034c0-.99-.803-1.793-1.793-1.793H7.5M3.24 1.624V5M5 3.241H1.412"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgNewFrame;
