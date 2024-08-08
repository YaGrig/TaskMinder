import * as React from 'react';
import { SVGProps } from 'react';

const SvgPausa = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#7968F8" d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

export default SvgPausa;
