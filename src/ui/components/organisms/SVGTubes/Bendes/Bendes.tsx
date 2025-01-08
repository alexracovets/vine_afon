"use client";
import { Bend } from "./Bend";

interface BendesProps {
    midleTubeWidth: number;
    bendWidth: number;
    bendHeight: number;
    borderHeight: number;
    tubeHeight: number;
    lineHeight_0: number;
    lineHeight_1: number;
    lineHeight_2: number;
    className: string;
};

export const Bendes = ({ midleTubeWidth, bendWidth, bendHeight, borderHeight, tubeHeight, lineHeight_0, lineHeight_1, lineHeight_2, className }: BendesProps) => {
    return (
        <g name="bendes">
            <Bend
                x={3.5 * midleTubeWidth} y={lineHeight_0}
                rotate={270}
                className={className}
            />
            <Bend
                x={3.5 * midleTubeWidth - 1} y={(borderHeight - tubeHeight) / 2 + bendHeight}
                rotate={0}
                className={className}
            />
            <Bend
                x={2.5 * midleTubeWidth - bendWidth + 2} y={lineHeight_1 - 1.25}
                rotate={180}
                className={className}
            />
            <Bend
                x={2.5 * midleTubeWidth - bendWidth + 2} y={lineHeight_2 - .5}
                rotate={90}
                className={className}
            />
        </g>
    );
};