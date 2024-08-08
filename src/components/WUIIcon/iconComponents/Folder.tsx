import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.556 2.65a.955.955 0 0 0-.654.252.776.776 0 0 0-.252.565v8.066c0 .204.086.408.252.565a.955.955 0 0 0 .654.252h10.889a.955.955 0 0 0 .654-.252.776.776 0 0 0 .251-.565V5.667a.776.776 0 0 0-.251-.565.955.955 0 0 0-.655-.252H8a.65.65 0 0 1-.446-.177L5.41 2.65H2.556ZM1.01 1.957a2.255 2.255 0 0 1 1.546-.607h3.11a.65.65 0 0 1 .447.177L8.258 3.55h5.187c.573 0 1.13.214 1.545.607.418.393.66.936.66 1.51v5.866c0 .574-.242 1.117-.66 1.51a2.255 2.255 0 0 1-1.546.607H2.556c-.573 0-1.13-.214-1.546-.607a2.075 2.075 0 0 1-.66-1.51V3.467c0-.574.242-1.117.66-1.51Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6.017a.65.65 0 0 1 .65.65v4a.65.65 0 1 1-1.3 0v-4a.65.65 0 0 1 .65-.65Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.35 8.667a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3H6a.65.65 0 0 1-.65-.65Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolder;
