import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 24c6.628 0 12-5.372 12-12S18.628 0 12 0 0 5.372 0 12s5.372 12 12 12Z" fill="#7669EF" />
    <path
      d="m6.57 12.776 3.103 3.103 7.758-7.758"
      stroke="currentColor"
      strokeWidth={1.828}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCheckCircle;
