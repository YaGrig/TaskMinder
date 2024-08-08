import * as React from 'react';
import { SVGProps } from 'react';

const SvgRectRound = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={1} y={1} width={18} height={18} rx={3} stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgRectRound;
