"use client";

import { BendProps } from "@/src/types";

export const Bend = ({ x, y, rotate, className }: BendProps) => {
    return (
        <g className={className}>
            <path
                strokeWidth={4}
                transform={`translate(${x}, ${y}) rotate(${rotate}, 22.75, 22.75) scale(0.5)`}
                d="M 0.265 14.524 C 9.366 14.524 15.704 11.589 15.704 0 L 90.941 0.34 C 90.941 74.715 50.162 89.733 0 89.733 L 0.265 14.524 Z" />
        </g>
    )
};