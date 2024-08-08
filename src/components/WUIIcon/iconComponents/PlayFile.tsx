import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlayFile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.148 10.614A.75.75 0 0 0 11 11.25v7.5a.75.75 0 0 0 1.148.636l6-3.75a.75.75 0 0 0 0-1.272l-6-3.75ZM16.335 15 12.5 17.397v-4.794L16.335 15Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.293 3.293 14 6h6.7a4.3 4.3 0 0 1 4.3 4.3v9.4a4.3 4.3 0 0 1-4.3 4.3H7.3A4.3 4.3 0 0 1 3 19.7V7.3A4.3 4.3 0 0 1 7.3 3h3.286a1 1 0 0 1 .707.293ZM13.379 7.5H20.7a2.8 2.8 0 0 1 2.8 2.8v9.4a2.8 2.8 0 0 1-2.8 2.8H7.3a2.8 2.8 0 0 1-2.8-2.8V7.3a2.8 2.8 0 0 1 2.8-2.8h3.079l3 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlayFile;
