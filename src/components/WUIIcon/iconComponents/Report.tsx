import * as React from 'react';
import { SVGProps } from 'react';

const SvgReport = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.123 3.018H3.705a1.418 1.418 0 0 0-1.417 1.417v8.505a1.417 1.417 0 0 0 1.417 1.418h4.038M12.21 9.396v2.836h2.835M12.21 7.27V4.435a1.418 1.418 0 0 0-1.417-1.417H9.375"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.958 1.6H6.54a1.418 1.418 0 1 0 0 2.835h1.418a1.418 1.418 0 1 0 0-2.835ZM12.21 15.067a2.835 2.835 0 1 0 0-5.67 2.835 2.835 0 0 0 0 5.67ZM5.123 7.27h2.835M5.123 10.105h2.126"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgReport;
