import * as React from 'react';
import { SVGProps } from 'react';

const SvgPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 1 1 9.182l7.364 2.454L10.818 19 19 1Z" />
  </svg>
);

export default SvgPointer;
