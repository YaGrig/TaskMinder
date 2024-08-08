import * as React from 'react';
import { SVGProps } from 'react';

const SvgExercise = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.686 2.2c-.514 0-.886.393-.886.822v9.956c0 .43.372.822.886.822h7.428c.514 0 .886-.393.886-.822V3.022c0-.43-.371-.822-.886-.822H4.686ZM2.6 3.022C2.6 1.881 3.56 1 4.686 1h7.428c1.127 0 2.086.88 2.086 2.022v9.956c0 1.141-.959 2.022-2.086 2.022H4.686C3.559 15 2.6 14.119 2.6 12.978V3.022Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.4 4.667a.6.6 0 0 1 .6-.6h4a.6.6 0 1 1 0 1.2H6a.6.6 0 0 1-.6-.6ZM5.4 7.333a.6.6 0 0 1 .6-.6h4a.6.6 0 1 1 0 1.2H6a.6.6 0 0 1-.6-.6ZM5.4 10a.6.6 0 0 1 .6-.6h2.667a.6.6 0 1 1 0 1.2H6a.6.6 0 0 1-.6-.6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExercise;
