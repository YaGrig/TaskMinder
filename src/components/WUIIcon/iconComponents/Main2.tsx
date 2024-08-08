import * as React from 'react';
import { SVGProps } from 'react';

const SvgMain2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.984c-.562 0-1.017.455-1.017 1.016v4.35H9.35V3.984H5Zm5-1.3H5A2.317 2.317 0 0 0 2.683 5v10A2.317 2.317 0 0 0 5 17.317h10A2.317 2.317 0 0 0 17.317 15V5A2.317 2.317 0 0 0 15 2.684h-5Zm.65 1.3V9.35h5.367V5c0-.561-.456-1.016-1.017-1.016h-4.35Zm-1.3 6.666H3.983V15c0 .562.455 1.017 1.017 1.017h4.35V10.65Zm1.3 5.367V10.65h5.367V15c0 .562-.456 1.017-1.017 1.017h-4.35Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMain2;
