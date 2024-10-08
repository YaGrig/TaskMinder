import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaymentInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#PaymentInfo_svg__a)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
      <path d="m2.333 5.431 13.523-3.623a.5.5 0 0 1 .612.353l1.046 3.906A2 2 0 0 1 19 8v1.451a1.999 1.999 0 0 0 .47-1.883l-1.553-5.795a2 2 0 0 0-2.45-1.414L1.944 3.982A2 2 0 0 0 .53 6.432L1 8.185V8a2 2 0 0 1 1.034-1.752l-.055-.205a.5.5 0 0 1 .354-.612Z" />
      <path d="M17 7.5H3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5ZM3 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H3Z" />
      <path d="M7.52 15.072h.508v.328a.602.602 0 0 0 .6.6h.14a.6.6 0 0 0 .6-.6v-.328h1.801a.52.52 0 1 0 0-1.04H9.368v-.883h1.57a4.59 4.59 0 0 0 .895-.081l.01-.002a4.022 4.022 0 0 0 .526-.14c.166-.059.32-.128.463-.21.107-.06.208-.127.302-.201a2.242 2.242 0 0 0 .635-.826A2.538 2.538 0 0 0 14 10.602v-.056c0-.448-.065-.83-.195-1.144a1.184 1.184 0 0 0-.024-.055 1.872 1.872 0 0 0-.601-.781 2.098 2.098 0 0 0-.24-.161 2.507 2.507 0 0 0-.707-.27 4.301 4.301 0 0 0-.36-.07A5.657 5.657 0 0 0 10.997 8H8.628a.6.6 0 0 0-.6.6v3.44h-.474a.554.554 0 1 0 0 1.109h.474v.882h-.507a.52.52 0 0 0 0 1.041Zm1.848-3.032h1.571c.224-.005.432-.03.624-.08.101-.024.196-.056.286-.094.1-.043.194-.095.28-.155a1.177 1.177 0 0 0 .38-.44c.025-.044.046-.09.064-.137a1.59 1.59 0 0 0 .098-.588 1.712 1.712 0 0 0-.13-.67 1.006 1.006 0 0 0-.173-.267.908.908 0 0 0-.158-.138 1.075 1.075 0 0 0-.268-.15 1.416 1.416 0 0 0-.275-.076 3.552 3.552 0 0 0-.751-.068H9.368v2.863Z" />
    </g>
    <defs>
      <clipPath id="PaymentInfo_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPaymentInfo;
