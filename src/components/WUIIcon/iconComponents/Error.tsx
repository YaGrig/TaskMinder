import * as React from 'react';
import { SVGProps } from 'react';

const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 8.5v7m0 2.5v.1m9.927 3.4c.825 0 1.34-.88.927-1.584l-9.927-16.89a1.08 1.08 0 0 0-1.854 0l-9.927 16.89c-.414.703.102 1.584.927 1.584h19.854Z"
      stroke="#FF3C49"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgError;
