import * as React from 'react';
import { SVGProps } from 'react';

const SvgCamera2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Camera2_svg__a)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="M17.878 6.7 14.4 8.784v3.257l3.478 2.083c.02.013.034.014.041.013.007 0 .024-.003.049-.021a.298.298 0 0 0 .087-.115.508.508 0 0 0 .045-.212V7.036a.508.508 0 0 0-.045-.212.299.299 0 0 0-.087-.115.092.092 0 0 0-.049-.021c-.007 0-.02 0-.04.013Zm-.668-1.115a1.37 1.37 0 0 1 1.531.08c.216.159.382.372.493.61.11.238.166.5.166.76v6.755c0 .26-.056.522-.166.76-.111.238-.277.451-.493.61a1.37 1.37 0 0 1-1.531.079l-3.794-2.272a.65.65 0 0 1-.316-.557V8.415c0-.228.12-.44.316-.557l3.794-2.273Z" />
      <path d="M3.333 4.813c-.791 0-1.433.641-1.433 1.433v8.333c0 .792.642 1.433 1.433 1.433h8.334c.791 0 1.433-.641 1.433-1.433V6.246c0-.792-.642-1.433-1.433-1.433H3.333ZM.6 6.246a2.733 2.733 0 0 1 2.733-2.733h8.334A2.733 2.733 0 0 1 14.4 6.246v8.333a2.733 2.733 0 0 1-2.733 2.733H3.333A2.733 2.733 0 0 1 .6 14.58V6.246Z" />
    </g>
    <defs>
      <clipPath id="Camera2_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCamera2;
