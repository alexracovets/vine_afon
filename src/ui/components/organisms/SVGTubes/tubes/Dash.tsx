"use client";

import { DashType } from "@/src/types";

export const Dash = ({ x, y, width, height, rounded, className }: DashType) => {

    return (
        <rect x={x} y={y}
            width={width}
            height={height}
            rx={rounded} ry={rounded} cy={rounded} cx={rounded}
            className={className}
        />
    )
};