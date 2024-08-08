import * as React from 'react';
import { SVGProps } from 'react';

const SvgSchool = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.902 2.396a.65.65 0 0 1 .482 0l7.143 2.858a.65.65 0 0 1 .409.603v4.286a.65.65 0 1 1-1.3 0V6.817l-6.252 2.5a.65.65 0 0 1-.482 0L.759 6.462a.65.65 0 0 1 0-1.207l7.143-2.858Zm5.634 3.461L8.143 8.014 2.75 5.857 8.143 3.7l5.393 2.157Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.858 6.35a.65.65 0 0 1 .65.65v3.857c0 .198.172.572.895.934.693.346 1.678.559 2.74.559 1.062 0 2.047-.213 2.74-.56.723-.36.896-.735.896-.933V7a.65.65 0 0 1 1.3 0v3.857c0 .94-.73 1.655-1.615 2.097-.914.457-2.11.696-3.32.696-1.212 0-2.407-.239-3.322-.696-.884-.443-1.614-1.158-1.614-2.097V7a.65.65 0 0 1 .65-.65Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSchool;
