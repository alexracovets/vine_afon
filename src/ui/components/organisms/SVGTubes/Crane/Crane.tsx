"use client";

import { CraneProps } from "@/src/types";

export const Crane = ({ x, y, className }: CraneProps) => {
    const whiteFill = "#7f8ebd";
    const widthCraneStart = 40;
    const heightCraneStart = 8;
    const rounded = .7;

    return (
        <g
            transform={`translate(${x + widthCraneStart / 2}, ${y - heightCraneStart / 2})`}
            className={className}
        >
            <rect
                x="0" y="0"
                width={widthCraneStart}
                height={heightCraneStart}
                fill={whiteFill}
                rx={rounded} ry={rounded}
            />
            <rect
                x={widthCraneStart * .1} y={-heightCraneStart * 2}
                width={widthCraneStart * .8}
                height={heightCraneStart * 2}
                rx={rounded} ry={rounded}
            />
            <rect
                x={widthCraneStart * .3} y={-heightCraneStart * 3}
                width={widthCraneStart * .4}
                height={heightCraneStart}
                fill={whiteFill}
            />
            <rect
                x={widthCraneStart * .2} y={-heightCraneStart * 3.5}
                width={widthCraneStart * .6} height={heightCraneStart * .5}
                rx={rounded} ry={rounded}
            />
            <rect
                x={widthCraneStart * .4} y={-heightCraneStart * 5.5}
                width={widthCraneStart * .2} height={heightCraneStart * 2}
                fill={whiteFill}
            />
            <rect
                x={widthCraneStart * -.1} y={-heightCraneStart * 5.5}
                width={widthCraneStart * 1.2} height={heightCraneStart}
                rx={rounded * 2} ry={rounded * 2}
            />
            <rect
                x={widthCraneStart * .3} y={-heightCraneStart * 5.75}
                width={widthCraneStart * .4} height={heightCraneStart * 1.5}
                rx={rounded * 2} ry={rounded * 2}
            />
        </g>
    );
};