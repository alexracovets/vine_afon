"use client";

import { ActiveTube } from "./ActiveTube";
import { Dash } from "../../Dashes/Dash";
import { Leaf } from "./Leaf";
import { DataTubeLeaf } from "@/src/types";

interface TubesActiveGroupProps {
    row: DataTubeLeaf;
    midleTubeWidth: number;
    activeTubesWidth: number;
    tubeHeight: number;
    borderWidth: number;
    borderHeight: number;
    lineHeight_2Normal: number;
    dashStyle: string;
    activeTubesStyle: string;
};

export const TubesActiveGroup = ({ row, midleTubeWidth, activeTubesWidth, tubeHeight, borderWidth, borderHeight, lineHeight_2Normal, dashStyle, activeTubesStyle }: TubesActiveGroupProps) => {

    return (
        <g filter="url(#roughness)" >
            {row.tubes.map((tube, idx) => {
                return (
                    <g key={idx}>
                        <ActiveTube
                            idx={idx}
                            x={(6 + idx * activeTubesWidth) * midleTubeWidth} y={lineHeight_2Normal}
                            width={midleTubeWidth * activeTubesWidth}
                            height={tubeHeight}
                            borderHeight={borderHeight}
                            className={activeTubesStyle}
                            tube={tube}
                        />
                        <Dash
                            x={(6 + idx * activeTubesWidth) * midleTubeWidth - borderWidth} y={lineHeight_2Normal - (borderHeight - tubeHeight) / 2}
                            width={borderWidth * 1.5}
                            height={borderHeight}
                            rounded={borderWidth / 2}
                            className={dashStyle}
                        />
                    </g>
                )
            })}
            {row.leaf.map((leaf, idx) => {
                return (
                    <g key={idx}>
                        <Leaf x={(6.15 + idx * activeTubesWidth) * midleTubeWidth} y={40} leaf={leaf} />
                    </g>
                )
            })}
        </g>
    );
};