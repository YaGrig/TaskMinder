import * as React from 'react';
import { SVGProps } from 'react';

const SvgShareScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.535 8.224a.75.75 0 0 0-1.07 0l-2.5 2.546a.75.75 0 1 0 1.07 1.051l1.215-1.237v5.166a.75.75 0 0 0 1.5 0v-5.166l1.215 1.237a.75.75 0 1 0 1.07-1.051l-2.5-2.546Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.3 4.5A4.3 4.3 0 0 0 3 8.8v6.4a4.3 4.3 0 0 0 4.3 4.3H10v4H7.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H18v-4h2.7a4.3 4.3 0 0 0 4.3-4.3V8.8a4.3 4.3 0 0 0-4.3-4.3H7.3ZM20.7 6H7.3a2.8 2.8 0 0 0-2.8 2.8v6.4A2.8 2.8 0 0 0 7.3 18h13.4a2.8 2.8 0 0 0 2.8-2.8V8.8A2.8 2.8 0 0 0 20.7 6Zm-4.2 13.5v4h-5v-4h5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShareScreen;
