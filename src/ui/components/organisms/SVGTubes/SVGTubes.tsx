"use client";

import { TubesGroup, TubesActiveGroup } from "./Tubes";
import { Filters } from "./Filters";
import { Dashes } from "./Dashes";
import { Bendes } from "./Bendes";
import { Crane } from "./Crane";
import { Lines } from "./Lines";


const currentActiveBlock = [
    {
        tubes: [
            { row: 1, col: 1, id: 1, tubeStatus: "active" },
            { row: 1, col: 2, id: 2, tubeStatus: "active" },
            { row: 1, col: 3, id: 3, tubeStatus: "active" },
            { row: 1, col: 4, id: 4, tubeStatus: "active" },
            { row: 1, col: 5, id: 5, tubeStatus: "active" },
            { row: 1, col: 6, id: 6, tubeStatus: "active" },
            { row: 1, col: 7, id: 7, tubeStatus: "active" },
            { row: 1, col: 8, id: 8, tubeStatus: "active" },
            { row: 1, col: 9, id: 9, tubeStatus: "active" },
            { row: 1, col: 10, id: 10, tubeStatus: "active" }
        ],
        leaf: [
            { row: 1, col: 1, id: 1, tubeStatus: "active" },
            { row: 1, col: 2, id: 2, tubeStatus: "active" },
            { row: 1, col: 3, id: 3, tubeStatus: "active" },
            { row: 1, col: 4, id: 4, tubeStatus: "active" },
            { row: 1, col: 5, id: 5, tubeStatus: "active" },
            { row: 1, col: 6, id: 6, tubeStatus: "active" },
            { row: 1, col: 7, id: 7, tubeStatus: "active" },
            { row: 1, col: 8, id: 8, tubeStatus: "active" },
            { row: 1, col: 9, id: 9, tubeStatus: "active" },
            { row: 1, col: 10, id: 10, tubeStatus: "active" }
        ]
    },
    {
        tubes: [
            { row: 2, col: 1, id: 11, tubeStatus: "active" },
            { row: 2, col: 2, id: 12, tubeStatus: "active" },
            { row: 2, col: 3, id: 13, tubeStatus: "active" },
            { row: 2, col: 4, id: 14, tubeStatus: "active" },
            { row: 2, col: 5, id: 15, tubeStatus: "active" },
            { row: 2, col: 6, id: 16, tubeStatus: "active" },
            { row: 2, col: 7, id: 17, tubeStatus: "active" },
            { row: 2, col: 8, id: 18, tubeStatus: "active" },
            { row: 2, col: 9, id: 19, tubeStatus: "active" },
            { row: 2, col: 10, id: 20, tubeStatus: "active" }
        ],
        leaf: [
            { row: 2, col: 1, id: 11, tubeStatus: "active" },
            { row: 2, col: 2, id: 12, tubeStatus: "active" },
            { row: 2, col: 3, id: 13, tubeStatus: "active" },
            { row: 2, col: 4, id: 14, tubeStatus: "active" },
            { row: 2, col: 5, id: 15, tubeStatus: "active" },
            { row: 2, col: 6, id: 16, tubeStatus: "active" },
            { row: 2, col: 7, id: 17, tubeStatus: "active" },
            { row: 2, col: 8, id: 18, tubeStatus: "active" },
            { row: 2, col: 9, id: 19, tubeStatus: "active" },
            { row: 2, col: 10, id: 20, tubeStatus: "active" }
        ]
    },
    {
        tubes: [
            { row: 3, col: 1, id: 21, tubeStatus: "active" },
            { row: 3, col: 2, id: 22, tubeStatus: "active" },
            { row: 3, col: 3, id: 23, tubeStatus: "active" },
            { row: 3, col: 4, id: 24, tubeStatus: "active" },
            { row: 3, col: 5, id: 25, tubeStatus: "active" },
            { row: 3, col: 6, id: 26, tubeStatus: "active" },
            { row: 3, col: 7, id: 27, tubeStatus: "active" },
            { row: 3, col: 8, id: 28, tubeStatus: "active" },
            { row: 3, col: 9, id: 29, tubeStatus: "active" },
            { row: 3, col: 10, id: 30, tubeStatus: "active" }
        ],
        leaf: [
            { row: 3, col: 1, id: 21, tubeStatus: "active" },
            { row: 3, col: 2, id: 22, tubeStatus: "active" },
            { row: 3, col: 3, id: 23, tubeStatus: "active" },
            { row: 3, col: 4, id: 24, tubeStatus: "active" },
            { row: 3, col: 5, id: 25, tubeStatus: "active" },
            { row: 3, col: 6, id: 26, tubeStatus: "active" },
            { row: 3, col: 7, id: 27, tubeStatus: "active" },
            { row: 3, col: 8, id: 28, tubeStatus: "active" },
            { row: 3, col: 9, id: 29, tubeStatus: "active" },
            { row: 3, col: 10, id: 30, tubeStatus: "active" }
        ]
    },
    {
        tubes: [
            { row: 4, col: 1, id: 31, tubeStatus: "active" },
            { row: 4, col: 2, id: 32, tubeStatus: "active" },
            { row: 4, col: 3, id: 33, tubeStatus: "active" },
            { row: 4, col: 4, id: 34, tubeStatus: "active" },
            { row: 4, col: 5, id: 35, tubeStatus: "active" },
            { row: 4, col: 6, id: 36, tubeStatus: "active" },
            { row: 4, col: 7, id: 37, tubeStatus: "active" },
            { row: 4, col: 8, id: 38, tubeStatus: "active" },
            { row: 4, col: 9, id: 39, tubeStatus: "active" },
            { row: 4, col: 10, id: 40, tubeStatus: "active" }
        ],
        leaf: [
            { row: 4, col: 1, id: 31, tubeStatus: "active" },
            { row: 4, col: 2, id: 32, tubeStatus: "active" },
            { row: 4, col: 3, id: 33, tubeStatus: "active" },
            { row: 4, col: 4, id: 34, tubeStatus: "active" },
            { row: 4, col: 5, id: 35, tubeStatus: "active" },
            { row: 4, col: 6, id: 36, tubeStatus: "active" },
            { row: 4, col: 7, id: 37, tubeStatus: "active" },
            { row: 4, col: 8, id: 38, tubeStatus: "active" },
            { row: 4, col: 9, id: 39, tubeStatus: "active" },
            { row: 4, col: 10, id: 40, tubeStatus: "active" }
        ]
    },
    {
        tubes: [
            { row: 5, col: 1, id: 41, tubeStatus: "active" },
            { row: 5, col: 2, id: 42, tubeStatus: "active" },
            { row: 5, col: 3, id: 43, tubeStatus: "active" },
            { row: 5, col: 4, id: 44, tubeStatus: "active" },
            { row: 5, col: 5, id: 45, tubeStatus: "active" },
            { row: 5, col: 6, id: 46, tubeStatus: "active" },
            { row: 5, col: 7, id: 47, tubeStatus: "active" },
            { row: 5, col: 8, id: 48, tubeStatus: "active" },
            { row: 5, col: 9, id: 49, tubeStatus: "active" },
            { row: 5, col: 10, id: 50, tubeStatus: "active" }
        ],
        leaf: [
            { row: 5, col: 1, id: 41, tubeStatus: "active" },
            { row: 5, col: 2, id: 42, tubeStatus: "active" },
            { row: 5, col: 3, id: 43, tubeStatus: "active" },
            { row: 5, col: 4, id: 44, tubeStatus: "active" },
            { row: 5, col: 5, id: 45, tubeStatus: "active" },
            { row: 5, col: 6, id: 46, tubeStatus: "active" },
            { row: 5, col: 7, id: 47, tubeStatus: "active" },
            { row: 5, col: 8, id: 48, tubeStatus: "active" },
            { row: 5, col: 9, id: 49, tubeStatus: "active" },
            { row: 5, col: 10, id: 50, tubeStatus: "active" }
        ]
    }
]

import { cn } from "@/src/utils/cn";

export const SVGTubes = () => {
    const midleTubeWidth = 55;
    const bendHeight = 35;
    const tubeHeight = 25;
    const borderHeight = 30;
    const borderWidth = 5;

    const lineHeight_0 = (borderHeight - tubeHeight) / 2;
    const lineHeight_1 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 2 + tubeHeight;
    const lineHeight_2 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 3 + tubeHeight * 2;
    const lineHeight_2Normal = lineHeight_2 + (borderHeight - tubeHeight) - 16;

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
            <g transform="translate(0, 100)">
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