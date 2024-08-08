import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m19 12.104 4.553-2.728a.863.863 0 0 1 .492-.125c.17.01.336.07.48.178.146.107.265.257.348.435.083.179.127.38.127.584v8.104c0 .205-.044.405-.127.584a1.134 1.134 0 0 1-.347.435.887.887 0 0 1-.481.178.863.863 0 0 1-.492-.125L19 16.897v-4.793ZM16.5 7h-10A2.5 2.5 0 0 0 4 9.5v10A2.5 2.5 0 0 0 6.5 22h10a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 16.5 7Z"
      stroke="currentColor"
      strokeWidth={1.43}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgVideoCamera;
