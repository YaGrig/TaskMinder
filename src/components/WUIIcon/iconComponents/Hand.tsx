import * as React from 'react';
import { SVGProps } from 'react';

const SvgHand = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.533 8.7V3.45c0-.278.125-.545.347-.742.222-.197.523-.308.837-.308.313 0 .614.11.836.308a.994.994 0 0 1 .347.742V8M6.9 3.45v-1.4c0-.138.03-.274.09-.402.06-.127.147-.243.256-.34.11-.098.24-.175.384-.228a1.315 1.315 0 0 1 .906 0c.144.053.274.13.384.228.11.097.197.213.257.34.059.128.09.264.09.402V8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.267 3.45c0-.278.125-.545.346-.742.222-.197.523-.308.837-.308.314 0 .615.11.837.308a.994.994 0 0 1 .346.742V8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.633 4.85c0-.278.125-.546.347-.742.222-.197.523-.308.837-.308.313 0 .614.11.836.308A.994.994 0 0 1 14 4.85v5.95c0 1.114-.499 2.182-1.386 2.97-.888.787-2.092 1.23-3.347 1.23H7.689h.164a5.218 5.218 0 0 1-2.246-.502A4.575 4.575 0 0 1 3.9 13.11l-.155-.21c-.246-.335-1.11-1.672-2.592-4.01a.947.947 0 0 1-.112-.784c.078-.264.27-.49.535-.631.281-.15.611-.212.937-.177.326.036.63.167.862.373L4.534 8.7"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgHand;
