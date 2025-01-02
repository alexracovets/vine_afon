"use client";

import { cn } from "@/src/utils/cn";
import { Tube, Bend, Crane, Dash } from "./tubes";

export const SVGTubes = () => {
    const midleTubeWidth = 100;
    const bendHeight = 90.94;
    const bendWidth = 89.73;
    const borderHeight = 90;
    const borderWidth = 8;
    const tubeHeight = 75;

    const lineHeight_0 = (borderHeight - tubeHeight) / 2;
    const lineHeight_1 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 2 + tubeHeight;
    const lineHeight_2 = (borderHeight - tubeHeight) / 2 + (bendHeight - tubeHeight) * 3 + tubeHeight * 2;
    const lineHeight_2Normal = lineHeight_2 + (borderHeight - tubeHeight) - 3;

    const dashStyle = cn(
        "fill-blue-900 stroke-[2px] stroke-[#0a1528]",
        "hover:fill-red-500",
    );

    const testStyle = cn(
        "fill-blue-900 stroke-[3px] stroke-blue-500",
        "hover:fill-red-500",
    );
    const activeTubesWidth = 1.3;
    const activeTubes = [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        }
    ];

    return (
        <svg
            width="100vw" viewBox="0 0 1920 342"

        >
            <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="black" floodOpacity="0.5" />
            </filter>
            <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                <feOffset dx="0" dy="0" result="offset" />
                <feComposite in="offset" in2="SourceAlpha" operator="out" result="inverse" />
                <feFlood floodColor="black" floodOpacity="0.5" result="shadowColor" />
                <feComposite in="shadowColor" in2="inverse" operator="in" result="shadow" />
                <feComposite in="shadow" in2="SourceGraphic" operator="over" />
            </filter>
            <g filter="url(#drop-shadow)" transform="translate(0, 8)">
                <Tube
                    x={0} y={lineHeight_0}
                    width={midleTubeWidth / 2}
                    tubeHeight={tubeHeight}
                    borderHeight={borderHeight}
                    className={testStyle}
                />
                <Tube
                    x={0.5 * midleTubeWidth} y={lineHeight_0}
                    width={midleTubeWidth * 2}
                    tubeHeight={tubeHeight}
                    borderHeight={borderHeight}
                    className={testStyle}
                />
                <Tube
                    x={2.5 * midleTubeWidth} y={lineHeight_0}
                    width={midleTubeWidth}
                    tubeHeight={tubeHeight}
                    borderHeight={borderHeight}
                    className={testStyle}
                />
                <Bend
                    x={3.5 * midleTubeWidth - 2} y={lineHeight_0 + 1}
                    rotate={270}
                    className={testStyle}
                />
                <Bend
                    x={3.5 * midleTubeWidth - 2} y={(borderHeight - tubeHeight) / 2 + bendHeight - 1}
                    rotate={0}
                    className={testStyle}
                />
                <Tube
                    x={3 * midleTubeWidth} y={lineHeight_1 - 2}
                    width={midleTubeWidth / 2}
                    tubeHeight={tubeHeight}
                    borderHeight={borderHeight}
                    className={testStyle}
                />
                <Bend
                    x={3 * midleTubeWidth - bendWidth} y={lineHeight_1 - 1}
                    rotate={180}
                    className={testStyle}
                />
                <Bend
                    x={3 * midleTubeWidth - bendWidth} y={lineHeight_2 - 3}
                    rotate={90}
                    className={testStyle}
                />
                <Tube
                    x={3 * midleTubeWidth} y={lineHeight_2Normal}
                    width={midleTubeWidth * 1.5}
                    tubeHeight={tubeHeight}
                    borderHeight={borderHeight}
                    className={testStyle}
                />
                <Tube
                    x={4.5 * midleTubeWidth} y={lineHeight_2Normal}
                    width={midleTubeWidth * 1.5}
                    tubeHeight={tubeHeight}
                    borderHeight={borderHeight}
                    className={testStyle}
                />
                <Dash
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
                {activeTubes.map((tube, idx) => {
                    return (
                        <g key={idx}>
                            <Tube
                                x={(6 + idx * activeTubesWidth) * midleTubeWidth} y={lineHeight_2Normal}
                                width={midleTubeWidth * activeTubesWidth}
                                tubeHeight={tubeHeight}
                                borderHeight={borderHeight}
                                className={testStyle}
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
                <Crane
                    x={4.5 * midleTubeWidth} y={lineHeight_2Normal - 160}
                    className={dashStyle}
                />
            </g>
        </svg>
    );
};