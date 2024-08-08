import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessageCloud = (props: SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path  d="M12 18.2826H11.8006L11.6559 18.4199L7 22.8365V18.7826V18.2826H6.5H2C1.17157 18.2826 0.5 17.611 0.5 16.7826V2C0.5 1.17157 1.17157 0.5 2 0.5H22C22.8284 0.5 23.5 1.17157 23.5 2V16.7826C23.5 17.611 22.8284 18.2826 22 18.2826H12Z" strokeWidth={2} stroke="black"/>
    </svg>
)

export default SvgMessageCloud;
