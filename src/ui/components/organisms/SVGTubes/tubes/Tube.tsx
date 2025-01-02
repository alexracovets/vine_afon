"use client";

import { TubeProps } from "@/src/types";

export const Tube = ({ x, y, width, tubeHeight, className }: TubeProps) => {
    return (
        <rect x={x} y={y} width={width} height={tubeHeight} className={className} filter="url(#inner-shadow)" />
    )
};