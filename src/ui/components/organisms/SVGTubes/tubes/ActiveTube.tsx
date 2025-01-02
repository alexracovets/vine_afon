"use client";

import { useState } from "react";

import { ActiveType } from "@/src/types";
import { Tube } from "./Tube";

export const ActiveTube = ({ x, y, width, idx, height, borderHeight, className }: ActiveType) => {
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);


    return (
        <g
            className="cursor-pointer"
            onClick={() => setIsActive(!isActive)} // Перемикання стану при кліку
            onPointerEnter={() => setIsHover(true)} // Підсвічування при наведенні
            onPointerLeave={() => setIsHover(false)} // Підсвічування при наведенні
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
                <linearGradient id={`wave-gradient_${idx}`} x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3986fd" />
                    <stop offset="100%" stopColor="#009fff" />
                </linearGradient>
                <mask id={`wave-mask_${idx}`}>
                    <rect
                        x={x}
                        y={isActive ? y : (isHover ? y + height / 1.5 : y + height)}
                        width={width}
                        height={height - 2}
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
                fill={`url(#wave-gradient_${idx})`}
                mask={`url(#wave-mask_${idx})`}
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