import * as React from 'react';
import { SVGProps } from 'react';

const SvgCard = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={1.75} y={4.75} width={20.5} height={14.5} rx={2.25} stroke="currentColor" strokeWidth={1.5} />
    <path d="M2 9h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" />
    <path d="M12 13h8M16 15h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    <rect x={4.75} y={11.75} width={4.5} height={4.5} rx={1.25} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);

export default SvgCard;
