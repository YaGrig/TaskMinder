import * as React from 'react';
import { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    strokeWidth={2}
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m10 1.618 1.77 5.446.112.346h6.09l-4.633 3.366-.294.213.112.346 1.77 5.446-4.633-3.366-.294-.213-.294.213-4.633 3.366 1.77-5.446.112-.346-.294-.213L2.028 7.41h6.09l.112-.346L10 1.618Z" />
  </svg>
);

export default SvgStar;
