"use client";

import { TubesGroup, TubesActiveGroup } from "./Tubes";
import { Filters } from "./Filters";
import { Dashes } from "./Dashes";
import { Bendes } from "./Bendes";
import { Crane } from "./Crane";
import { Lines } from "./Lines";

import useActiveTubes from "@/store/useActiveTubes";

import { cn } from "@/src/utils/cn";

export const SVGTubes = () => {
    const currentActiveBlock = useActiveTubes((state) => state.rows);
    const midleTubeWidth = 50;
    const bendHeight = 45.47;
    const tubeHeight = 37.5;
    const bendWidth = 22.75;
    const borderHeight = 45;
    const borderWidth = 4;

    const lineHeight_0 = (borderHeight - tubeHeight) / 2;
    const lineHeight_1 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 2 + tubeHeight;
    const lineHeight_2 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 3 + tubeHeight * 2;
    const lineHeight_2Normal = lineHeight_2 + (borderHeight - tubeHeight);

    const dashStyle = cn(
        "fill-[#2d5b9d] stroke-[2px] stroke-[#091428]"
    );
    const activeTubesStyle = cn(
        "fill-white stroke-[2px] stroke-[#091428] fill-[#b4c6e9]"
    );

    const testStyle = cn(
        "fill-[#2d5b9d] stroke-[2px] stroke-[#091428]"
    );
    const activeTubesWidth = 1.3;

    return (
        <svg width="100%" className="flex-grow h-full max-h-full">
            <Filters />
            <g transform="translate(0, 100) scale(.99)">
                {
                    currentActiveBlock.map((row, idx) => {
                        return (
                            <g
                                key={idx}
                                filter="url(#drop-shadow)"
                                transform={`translate(0, ${idx * 171})`}
                            >
                                <TubesGroup
                                    midleTubeWidth={midleTubeWidth}
                                    tubeHeight={tubeHeight}
                                    borderHeight={borderHeight}
                                    lineHeight_0={lineHeight_0}
                                    lineHeight_1={lineHeight_1}
                                    lineHeight_2Normal={lineHeight_2Normal}
                                    className={testStyle}
                                />
                                <Bendes
                                    midleTubeWidth={midleTubeWidth}
                                    bendWidth={bendWidth}
                                    bendHeight={bendHeight}
                                    borderHeight={borderHeight}
                                    tubeHeight={tubeHeight}
                                    lineHeight_0={lineHeight_0}
                                    lineHeight_1={lineHeight_1}
                                    lineHeight_2={lineHeight_2}
                                    className={testStyle}
                                />
                                <TubesActiveGroup
                                    num={idx}
                                    midleTubeWidth={midleTubeWidth}
                                    activeTubesWidth={activeTubesWidth}
                                    tubeHeight={tubeHeight}
                                    borderWidth={borderWidth}
                                    borderHeight={borderHeight}
                                    lineHeight_2Normal={lineHeight_2Normal}
                                    dashStyle={dashStyle}
                                    activeTubesStyle={activeTubesStyle}
                                />
                                <Dashes
                                    borderWidth={borderWidth}
                                    borderHeight={borderHeight}
                                    midleTubeWidth={midleTubeWidth}
                                    tubeHeight={tubeHeight}
                                    bendHeight={bendHeight}
                                    lineHeight_2Normal={lineHeight_2Normal}
                                    activeTubesWidth={activeTubesWidth}
                                    dashStyle={dashStyle}
                                />
                                <Crane
                                    x={4.5 * midleTubeWidth - 2} y={lineHeight_2Normal}
                                    className={dashStyle}
                                />
                                <Lines />
                            </g>
                        )
                    })
                }
            </g>
        </svg>
    );
};