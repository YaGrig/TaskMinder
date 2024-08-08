import * as React from 'react';
import { SVGProps } from 'react';

const SvgIconPremium = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={20} height={20} rx={10} fill="#FF8A00" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.676 7.394a.5.5 0 0 1-.282.282L2.679 9.535a.5.5 0 0 0 0 .93l4.715 1.86a.5.5 0 0 1 .282.281l1.859 4.715a.5.5 0 0 0 .93 0l1.86-4.715a.5.5 0 0 1 .281-.281l4.715-1.86a.5.5 0 0 0 0-.93l-4.715-1.86a.5.5 0 0 1-.281-.281l-1.86-4.715a.5.5 0 0 0-.93 0l-1.86 4.715ZM10 5.044 8.885 7.87A1.8 1.8 0 0 1 7.87 8.885L5.043 10l2.828 1.115a1.8 1.8 0 0 1 1.014 1.014L10 14.957l1.115-2.828a1.8 1.8 0 0 1 1.014-1.014L14.957 10l-2.828-1.115a1.8 1.8 0 0 1-1.014-1.014L10 5.043Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconPremium;
