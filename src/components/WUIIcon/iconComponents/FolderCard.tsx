import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderCard = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M38 12.773V34.5a1.5 1.5 0 0 1-1.5 1.5h-33A1.5 1.5 0 0 1 2 34.5v-29A1.5 1.5 0 0 1 3.5 4h9.94c.477 0 .935.216 1.272.602l6.146 6.07c.338.384.795.6 1.273.6H36.5a1.5 1.5 0 0 1 1.5 1.5Z"
      fill="#EBE8FE"
      stroke="#7968F8"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFolderCard;
