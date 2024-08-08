import * as React from 'react';
import { SVGProps } from 'react';

const SvgLoudSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 5.326a2 2 0 0 1 0 4M6.667 5.326v7.333a.667.667 0 0 1-.667.667h-.666a.667.667 0 0 1-.667-.667V9.326"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m8 5.326 3.016-2.513a.6.6 0 0 1 .984.461v8.104a.6.6 0 0 1-.984.461L8 9.326H2.667A.667.667 0 0 1 2 8.66V5.993a.667.667 0 0 1 .667-.667H8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLoudSpeaker;
