"use client";

import { Dash } from "./Dash";

interface DashesProps {
    borderWidth: number;
    borderHeight: number;
    midleTubeWidth: number;
    tubeHeight: number;
    bendHeight: number;
    lineHeight_2Normal: number;
    activeTubesWidth: number;
    dashStyle: string;
};

export const Dashes = ({ borderWidth, borderHeight, midleTubeWidth, tubeHeight, bendHeight, lineHeight_2Normal, activeTubesWidth, dashStyle }: DashesProps) => {

    return (
        <g name="dashes">
            {/* <Dash
                x={0} y={0}
                width={borderWidth * 4}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={0.5 * midleTubeWidth - borderWidth / 2} y={0}
                width={borderWidth * 2}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={2.5 * midleTubeWidth - borderWidth / 2} y={0}
                width={borderWidth * 2}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={3.5 * midleTubeWidth - borderWidth} y={0}
                width={borderWidth}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={3.5 * midleTubeWidth + borderWidth} y={(borderHeight - tubeHeight) / 2 + bendHeight - borderWidth}
                width={borderHeight}
                height={borderWidth}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={3.5 * midleTubeWidth - borderWidth / 2} y={(borderHeight - tubeHeight) / 2 + bendHeight + borderWidth}
                width={borderWidth}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={3 * midleTubeWidth - borderWidth / 2} y={(borderHeight - tubeHeight) / 2 + bendHeight + borderWidth}
                width={borderWidth}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={2 * midleTubeWidth + borderWidth / 2} y={(borderHeight - tubeHeight) / 2 + 2 * bendHeight + borderWidth}
                width={borderHeight}
                height={borderWidth}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={3 * midleTubeWidth - borderWidth / 2} y={lineHeight_2Normal - (borderHeight - tubeHeight) / 2}
                width={borderWidth}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={4.5 * midleTubeWidth - borderWidth} y={lineHeight_2Normal - (borderHeight - tubeHeight) / 2}
                width={borderWidth * 1.5}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            />
            <Dash
                x={(6 + 10 * activeTubesWidth) * midleTubeWidth - borderWidth} y={lineHeight_2Normal - (borderHeight - tubeHeight) / 2}
                width={borderWidth * 2.5}
                height={borderHeight}
                rounded={borderWidth / 2}
                className={dashStyle}
            /> */}
        </g>
    );
};