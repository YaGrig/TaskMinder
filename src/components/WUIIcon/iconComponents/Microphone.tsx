import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.868 3.415a2.77 2.77 0 0 0-2.77 2.77v5.808a2.77 2.77 0 1 0 5.54 0V6.185a2.77 2.77 0 0 0-2.77-2.77Zm-4.2 2.77a4.2 4.2 0 1 1 8.4 0v5.808a4.2 4.2 0 1 1-8.4 0V6.185Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.737 11.278c.395 0 .715.32.715.715a7.417 7.417 0 0 0 14.833 0 .715.715 0 0 1 1.43 0 8.847 8.847 0 0 1-17.693 0c0-.395.32-.715.715-.715ZM8.507 24.771c0-.395.32-.715.715-.715h9.293a.715.715 0 1 1 0 1.43H9.222a.715.715 0 0 1-.715-.715Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.868 19.41c.395 0 .715.32.715.715v4.646a.715.715 0 1 1-1.43 0v-4.646c0-.395.32-.715.715-.715Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMicrophone;
