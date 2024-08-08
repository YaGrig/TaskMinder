import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.72 4.365a.683.683 0 0 1 .613-.382h9.334c.269 0 .502.156.613.382L8 7.885l-5.28-3.52Zm-.07 1.516 4.99 3.326a.65.65 0 0 0 .72 0l4.99-3.326v5.452a.683.683 0 0 1-.683.684H3.333a.683.683 0 0 1-.683-.684V5.881Zm12-1.201v6.653a1.983 1.983 0 0 1-1.983 1.984H3.333a1.983 1.983 0 0 1-1.983-1.984V4.667c0-1.096.888-1.984 1.983-1.984h9.334A1.983 1.983 0 0 1 14.65 4.68Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMessage;
