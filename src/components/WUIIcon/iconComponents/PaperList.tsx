import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaperList = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={65} cy={65} r={64.234} stroke="#F5F5F6" strokeWidth={1.533} />
    <path
      d="m48.394 47.225 2.945 2.944 4.907-4.907M48.394 59.002l2.945 2.945 4.907-4.907M48.394 70.78l2.945 2.945 4.907-4.908M63.117 48.206h17.666M63.117 59.984h17.666M63.117 71.762h17.666"
      stroke="#9384FF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={38} y={32} width={53} height={66} rx={4} stroke="#9384FF" strokeWidth={2} />
  </svg>
);

export default SvgPaperList;
