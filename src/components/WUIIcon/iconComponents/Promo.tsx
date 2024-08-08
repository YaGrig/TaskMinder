import * as React from 'react';
import { SVGProps } from 'react';

const SvgPromo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m7.818 10.06-4.243 4.243M8.525 13.596l-2.828 2.829M18.071 1.929l-3.536 3.535"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
    <circle
      cx={13.121}
      cy={6.879}
      r={1.35}
      transform="rotate(-45 13.121 6.879)"
      stroke="currentColor"
      strokeWidth={1.3}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.536 13.95 3.69-3.692c.33-.329.174-.929-.155-1.258a2 2 0 0 1 0-2.828c.329-.33.485-.93.156-1.259l-3.14-3.14c-.33-.329-.93-.173-1.259.156a2 2 0 0 1-2.828 0c-.329-.329-.93-.485-1.258-.156L6.05 5.464l.92.92 3.332-3.333a3.3 3.3 0 0 0 4.224 0l2.423 2.423a3.3 3.3 0 0 0 0 4.224l-3.333 3.332.92.92Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.05 5.464-4.95 4.95a2 2 0 0 0 0 2.829l5.657 5.656a2 2 0 0 0 2.829 0l4.95-4.95-.92-.918-4.95 4.95a.7.7 0 0 1-.99 0L2.02 12.322a.7.7 0 0 1 0-.99l4.95-4.95-.92-.919Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPromo;
