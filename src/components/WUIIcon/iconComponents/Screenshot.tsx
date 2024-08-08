import * as React from 'react';
import { SVGProps } from 'react';

const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 1H1v2M3 15H1v-2M13 1h2v2M13 15h2v-2M4.111 5.14h.556c.294 0 .577-.115.785-.32.209-.205.326-.483.326-.773 0-.145.058-.284.163-.387a.56.56 0 0 1 .392-.16h3.334a.56.56 0 0 1 .393.16.542.542 0 0 1 .162.387c0 .29.117.568.326.773.208.205.49.32.785.32h.556c.295 0 .577.116.786.321.208.205.325.483.325.773v4.922c0 .29-.117.569-.325.774a1.12 1.12 0 0 1-.786.32H4.11a1.12 1.12 0 0 1-.786-.32A1.085 1.085 0 0 1 3 11.156V6.234c0-.29.117-.568.325-.773a1.12 1.12 0 0 1 .786-.32"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9.5A1.25 1.25 0 1 0 8 7a1.25 1.25 0 0 0 0 2.5Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgScreenshot;
