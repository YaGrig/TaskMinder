import * as React from 'react';
import { SVGProps } from 'react';

const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.647 1.35a.65.65 0 0 1 .65.65v4.235a.65.65 0 0 1-.088.328L4.65 9.235v.586h6.935v-.586l-1.558-2.672a.65.65 0 0 1-.089-.328V2a.65.65 0 1 1 1.3 0v4.06l1.559 2.671a.65.65 0 0 1 .088.328v1.412a.65.65 0 0 1-.65.65H4a.65.65 0 0 1-.65-.65V9.059a.65.65 0 0 1 .089-.328L4.997 6.06V2a.65.65 0 0 1 .65-.65Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.117 9.82a.65.65 0 0 1 .65.65V14a.65.65 0 1 1-1.3 0v-3.53a.65.65 0 0 1 .65-.65ZM4.174 2a.65.65 0 0 1 .65-.65h6.588a.65.65 0 1 1 0 1.3H4.824a.65.65 0 0 1-.65-.65Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPin;
