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
    const midleTubeWidth = 55;
    const bendHeight = 35;
    const tubeHeight = 25;
    const borderHeight = 40;
    const borderWidth = 4;

    const lineHeight_0 = (borderHeight - tubeHeight) / 2;
    const lineHeight_1 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 2 + tubeHeight - 21.5;
    const lineHeight_2 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 3 + tubeHeight * 2 - 24;
    const lineHeight_2Normal = lineHeight_2 + (borderHeight - tubeHeight) - 3;

    const dashStyle = cn(
        "fill-[#2d5b9d] stroke-[1.5px] stroke-[#091428]"
    );
    const activeTubesStyle = cn(
        "fill-white stroke-[1.5px] stroke-[#091428] fill-[#b4c6e9]"
    );

    const testStyle = cn(
        "fill-[#2d5b9d] stroke-[1.5px] stroke-[#091428]"
    );
    const activeTubesWidth = 1.3;

    return (
        <svg width="100%" height="100%" viewBox="0 0 960 800" className="relative flex-grow h-full max-h-full overflow-visible z-[0]">
            <Filters />
            <g transform="translate(0, 50)">
                {
                    currentActiveBlock.map((row, idx) => {
                        return (
                            <g
                                key={idx}
                                filter="url(#drop-shadow)"
                                transform={`translate(0, ${idx * 110})`}
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
                                    bendHeight={bendHeight}
                                    lineHeight_0={lineHeight_0}
                                    lineHeight_1={lineHeight_1}
                                    lineHeight_2={lineHeight_2}
                                    className={testStyle}
                                />
                                <TubesActiveGroup
                                    row={row}
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