import * as React from 'react';
import { SVGProps } from 'react';

const SvgReportAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 3.333H4.667a1.333 1.333 0 0 0-1.334 1.334v8A1.333 1.333 0 0 0 4.667 14h6.666a1.334 1.334 0 0 0 1.334-1.333v-8a1.334 1.334 0 0 0-1.334-1.334H10"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.667 2H7.333a1.333 1.333 0 1 0 0 2.667h1.334a1.333 1.333 0 0 0 0-2.667ZM6 11.333V8M8 11.333v-.666M10 11.333v-2"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgReportAnalytics;
