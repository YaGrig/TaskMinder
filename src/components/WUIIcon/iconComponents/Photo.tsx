import * as React from 'react';
import { SVGProps } from 'react';

const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3.317a.017.017 0 0 0-.017.016A1.983 1.983 0 0 1 4 5.317h-.667A.683.683 0 0 0 2.65 6v6a.683.683 0 0 0 .683.683h9.334A.684.684 0 0 0 13.35 12V6a.684.684 0 0 0-.683-.683H12a1.983 1.983 0 0 1-1.983-1.984.017.017 0 0 0-.017-.016H6Zm-2.667.7A1.983 1.983 0 0 0 1.35 6v6a1.983 1.983 0 0 0 1.983 1.983h9.334A1.983 1.983 0 0 0 14.65 12V6a1.984 1.984 0 0 0-1.983-1.983H12a.683.683 0 0 1-.683-.684A1.317 1.317 0 0 0 10 2.017H6a1.317 1.317 0 0 0-1.317 1.316.683.683 0 0 1-.683.684h-.667Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7.317a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Zm-2.65 1.35a2.65 2.65 0 1 1 5.3 0 2.65 2.65 0 0 1-5.3 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPhoto;
