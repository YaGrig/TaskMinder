import * as React from 'react';
import { SVGProps } from 'react';

const SvgTariff2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 16 0 24V8l16 8Z" fill="#9384FF" />
    <path d="m16 16 16 8V8l-16 8Z" fill="#AFAEFA" />
    <path d="m0 8 16-8 16 8-16 8L0 8Z" fill="#7968F8" />
    <path d="m0 24 16-8 16 8-16 8-16-8Z" fill="#EBE8FE" />
  </svg>
);

export default SvgTariff2;
