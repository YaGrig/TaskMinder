import * as React from 'react';
import { SVGProps } from 'react';

const SvgRectSkew = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.5 19 7 1h11.5L13 19Z" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgRectSkew;
