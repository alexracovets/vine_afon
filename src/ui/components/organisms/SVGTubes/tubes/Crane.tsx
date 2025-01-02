"use client";

import { CraneProps } from "@/src/types";
import { cn } from "@/src/utils/cn";

export const Crane = ({ x, y, className }: CraneProps) => {
    const whiteFill = "#7f8ebd";

    return (
        <g
            transform={`translate(${x}, ${y}) scale(1)`}
            className={cn(className, "stroke-[2px]")}
        >
            <rect x="25.324" y="98.804" width="50.749" height="10.151" rx="1.484" ry="1.484" fill={whiteFill} />
            <rect x="29.696" y="77.098" width="42.006" height="21.706" rx="1.484" ry="1.484" />
            <rect x="39.064" y="64.294" width="22.955" height="12.804" fill={whiteFill} />
            <rect x="34.067" y="58.672" width="31.7" height="5.934" rx="1.753" ry="1.753" />
            <rect x="43.905" y="34.468" width="11.398" height="24.204" fill={whiteFill}/>
            <rect x="9.239" y="33.219" width="80.108" height="11.555" rx="3.506" ry="3.506" />
            <rect x="37.346" y="29.003" width="23.671" height="19.833" rx="3.507" ry="3.507" />
        </g>
    );
};