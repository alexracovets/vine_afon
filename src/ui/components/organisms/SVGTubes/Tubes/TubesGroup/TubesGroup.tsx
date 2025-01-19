"use client";

import { Tube } from "../Tube";

interface TubesGroupProps {
    midleTubeWidth: number;
    tubeHeight: number;
    borderHeight: number;
    lineHeight_0: number;
    lineHeight_1: number;
    lineHeight_2Normal: number;
    className: string;
};

export const TubesGroup = ({ midleTubeWidth, tubeHeight, borderHeight, lineHeight_0, lineHeight_1, lineHeight_2Normal, className }: TubesGroupProps) => {
    return (
        <g filter="url(#roughness)" >
            <Tube
                x={0} y={lineHeight_0}
                width={midleTubeWidth / 2}
                tubeHeight={tubeHeight}
                borderHeight={borderHeight}
                className={className}
            />
            <Tube
                x={0.5 * midleTubeWidth} y={lineHeight_0}
                width={midleTubeWidth * 2}
                tubeHeight={tubeHeight}
                borderHeight={borderHeight}
                className={className}
            />
            <Tube
                x={2.5 * midleTubeWidth} y={lineHeight_0}
                width={midleTubeWidth}
                tubeHeight={tubeHeight}
                borderHeight={borderHeight}
                className={className}
            />
            <Tube
                x={3 * midleTubeWidth} y={lineHeight_1 + 10.5}
                width={midleTubeWidth / 2}
                tubeHeight={tubeHeight}
                borderHeight={borderHeight}
                className={className}
            />
            <Tube
                x={3 * midleTubeWidth} y={lineHeight_2Normal}
                width={midleTubeWidth * 1.5}
                tubeHeight={tubeHeight}
                borderHeight={borderHeight}
                className={className}
            />
            <Tube
                x={4.5 * midleTubeWidth} y={lineHeight_2Normal}
                width={midleTubeWidth * 1.5}
                tubeHeight={tubeHeight}
                borderHeight={borderHeight}
                className={className}
            />
        </g>
    );
};