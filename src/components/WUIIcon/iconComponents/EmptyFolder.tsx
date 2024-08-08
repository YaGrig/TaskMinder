import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmptyFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#EmptyFolder_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.194 3.125c-.361 0-.7.136-.946.367-.243.23-.373.533-.373.841v10.084c0 .308.13.611.373.841.245.231.585.367.946.367h13.612c.361 0 .7-.136.946-.367.244-.23.373-.533.373-.841V7.083c0-.308-.13-.611-.373-.841a1.38 1.38 0 0 0-.946-.367H10a.625.625 0 0 1-.429-.17l-2.736-2.58h-3.64Zm-1.803-.543a2.63 2.63 0 0 1 1.803-.707h3.89c.159 0 .312.06.428.17l2.736 2.58h6.558c.67 0 1.319.25 1.803.707.486.458.766 1.087.766 1.751v7.334c0 .664-.28 1.293-.766 1.75a2.63 2.63 0 0 1-1.803.708H3.194c-.67 0-1.319-.25-1.803-.707a2.407 2.407 0 0 1-.766-1.751V4.333c0-.664.28-1.293.766-1.75Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="EmptyFolder_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgEmptyFolder;
