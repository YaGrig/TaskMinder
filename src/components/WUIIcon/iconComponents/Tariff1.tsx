import * as React from 'react';
import { SVGProps } from 'react';

const SvgTariff1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={32} height={32} rx={16} fill="#AFAEFA" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16V0Z" fill="#EBE8FE" />
  </svg>
);

export default SvgTariff1;
