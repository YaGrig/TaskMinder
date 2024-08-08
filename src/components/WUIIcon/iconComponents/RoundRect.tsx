import * as React from 'react';
import { SVGProps } from 'react';

const SvgRoundRect = (props: SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="1" y="1" width="22" height="22" rx="4" stroke="black" stroke-width="2"/>
    </svg>
);

export default SvgRoundRect;
