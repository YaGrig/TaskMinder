import * as React from 'react';
import { SVGProps } from 'react';

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.697 2.024C7.03.66 8.971.66 9.303 2.024a1.34 1.34 0 0 0 2.001.83c1.2-.732 2.574.642 1.843 1.843a1.342 1.342 0 0 0 .829 2c1.365.332 1.365 2.274 0 2.606a1.34 1.34 0 0 0-.83 2.001c.732 1.2-.642 2.574-1.843 1.843a1.342 1.342 0 0 0-2 .829c-.332 1.365-2.274 1.365-2.606 0a1.34 1.34 0 0 0-2.001-.83c-1.2.732-2.574-.642-1.843-1.843a1.341 1.341 0 0 0-.829-2C.66 8.97.66 7.029 2.024 6.697a1.34 1.34 0 0 0 .83-2.001c-.732-1.2.642-2.574 1.843-1.843a1.34 1.34 0 0 0 2-.829Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSettings;
