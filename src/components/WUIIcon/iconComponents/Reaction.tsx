import * as React from 'react';
import { SVGProps } from 'react';

const SvgReaction = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.667 13.332A5.585 5.585 0 0 1 8 14c-2.946 0-5.333-2.237-5.333-4.997 0-.755.1-1.461.27-2.117m9.847 4.328c.352-.667.55-1.417.55-2.211 0-2.495-1.357-4.444-2.293-5.373-.173-.173-.462-.097-.56.125-.498 1.127-1.536 2.75-2.862 2.75-.82.109-2.074-.593-1.062-4.073.09-.313-.244-.565-.5-.355A9.76 9.76 0 0 0 4 4.432"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgReaction;
