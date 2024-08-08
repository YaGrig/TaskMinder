import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m4 4 8 8M12 5v7H5" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgArrowDownRight;
