import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.317 2a.65.65 0 1 0-1.3 0v.683H5.983V2a.65.65 0 1 0-1.3 0v.683H3.5c-1.113 0-2.15.818-2.15 1.984v8c0 1.165 1.037 1.983 2.15 1.983h9c1.113 0 2.15-.818 2.15-1.983v-8c0-1.166-1.037-1.984-2.15-1.984h-1.183V2Zm2.033 4.017v-1.35c0-.308-.306-.684-.85-.684h-1.183V4a.65.65 0 1 1-1.3 0v-.017H5.983V4a.65.65 0 0 1-1.3 0v-.017H3.5c-.543 0-.85.376-.85.684v1.35h10.7Zm-10.7 1.3h10.7v5.35c0 .307-.306.683-.85.683h-9c-.543 0-.85-.376-.85-.683v-5.35Zm4.683 1.366a.65.65 0 0 0 0 1.3h.017v1.35a.65.65 0 0 0 1.3 0v-2a.65.65 0 0 0-.65-.65h-.667Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendar;
