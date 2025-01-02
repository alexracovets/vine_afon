"use client";

import { DashType } from "@/src/types";

export const Dash = ({ x, y, width, height, rounded, className }: DashType) => {

    return (
        <g>
            <rect x={x} y={y}
                width={width}
                height={height}
                rx={rounded} ry={rounded} cy={rounded} cx={rounded}
                className={className}
            />
            <rect x={x} y={y}
                width={width}
                height={height / 3}
                rx={rounded} ry={rounded} cy={rounded} cx={rounded}
                fill="url(#dash-gradient)"
            />
            <rect x={x} y={y + 2 * height / 3}
                width={width}
                height={height / 3}
                rx={rounded} ry={rounded} cy={rounded} cx={rounded}
                fill="url(#dash-gradient-revers)"
            />
        </g>

    )
};