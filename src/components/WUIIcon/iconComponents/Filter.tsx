import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.95 3.333a.65.65 0 0 1-.65.65h-2.1v.133a.5.5 0 0 1-.5.5h-1.566a.5.5 0 0 1-.5-.5v-.133H1.7a.65.65 0 0 1 0-1.3h7.934V2.55a.5.5 0 0 1 .5-.5H11.7a.5.5 0 0 1 .5.5v.133h2.1a.65.65 0 0 1 .65.65Zm-.65 5.316a.65.65 0 0 0 0-1.3H6.6V7.24a.5.5 0 0 0-.5-.5H4.531a.5.5 0 0 0-.5.5v.11H1.7a.65.65 0 0 0 0 1.3H4.03v.159a.5.5 0 0 0 .5.5H6.1a.5.5 0 0 0 .5-.5v-.16h7.7Zm0 4.667a.65.65 0 0 0 0-1.3h-3.5v-.156a.5.5 0 0 0-.5-.5H8.731a.5.5 0 0 0-.5.5v.156H1.7a.65.65 0 1 0 0 1.3H8.23v.113a.5.5 0 0 0 .5.5H10.3a.5.5 0 0 0 .5-.5v-.113h3.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilter;
