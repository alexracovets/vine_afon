"use client";

import { useEffect, useState } from "react";

import { ActiveType } from "@/src/types";
import { Tube } from "../../Tube";
import useCardShop from "@/store/useCardShop";

export const ActiveTube = ({ x, y, width, idx, height, borderHeight, className, tube }: ActiveType) => {
    const addTube = useCardShop((state) => state.addTube);
    const removeTube = useCardShop((state) => state.removeTube);
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const clickHandler = () => {
        if (tube.tubeStatus === "active") {
            setIsActive(!isActive);
        }
    }

    useEffect(() => {
        if (isActive) {
            addTube(tube)
        } else {
            removeTube(tube)
        }
    }, [isActive, addTube, removeTube, tube]);

    return (
        <g
            className="cursor-pointer"
            onClick={clickHandler}
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={() => setIsHover(false)}
        >
            <Tube
                x={x} y={y}
                width={width}
                tubeHeight={height}
                borderHeight={borderHeight}
                className={className}
            />
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                className={className}
                fill="none"
                stroke="#172b4e"
                strokeWidth="2"
            />
            <defs>
                <linearGradient id={`wave-gradient_${tube.row}-${idx}`} x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3986fd" />
                    <stop offset="100%" stopColor="#009fff" />
                </linearGradient>
                <mask id={`wave-mask_${tube.row}-${idx}`}>
                    <rect
                        x={x}
                        y={isActive ? y : (isHover ? y + height / 1.5 : y + height)}
                        width={width}
                        height={height}
                        fill="white"
                        style={{
                            transition: isHover ? "y .5s ease-in-out" : "y 1.5s ease-in-out",
                        }}
                    />
                </mask>
            </defs>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={`url(#wave-gradient_${tube.row}-${idx})`}
                mask={`url(#wave-mask_${tube.row}-${idx})`}
                style={{
                    transition: isHover ? "y .5s ease-in-out" : "y 1.5s ease-in-out",
                }}
            />
            <rect
                transform={`translate(${x} ${y})`}
                width={width}
                height={height / 3}
                fill="url(#tube-gradient)"
            />
            <rect
                transform={`translate(${x} ${y + (2 * height) / 3})`}
                width={width}
                height={height / 3}
                fill="url(#tube-gradient-revers)"
            />
        </g>
    );
};