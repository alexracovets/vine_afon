"use client";
import { Bend } from "./Bend";

interface BendesProps {
    midleTubeWidth: number;
    bendHeight: number;
    lineHeight_0: number;
    lineHeight_1: number;
    lineHeight_2: number;
    className: string;
};

export const Bendes = ({ midleTubeWidth, bendHeight, lineHeight_0, lineHeight_1, lineHeight_2, className }: BendesProps) => {
    return (
        <g name="bendes">
            <Bend
                x={3.5 * midleTubeWidth + 5} y={lineHeight_0 - 5}
                rotate={270}
                className={className}
            />
            <Bend
                x={3.5 * midleTubeWidth - 0.5} y={bendHeight - 2}
                rotate={0}
                className={className}
            />
            <Bend
                x={2.5 * midleTubeWidth - 2} y={lineHeight_1 - 21}
                rotate={180}
                className={className}
            />
            <Bend
                x={2.5 * midleTubeWidth - 7.5} y={lineHeight_2 - 21}
                rotate={90}
                className={className}
            />
        </g>
    );
};