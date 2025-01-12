"use client";

import { useEffect, useRef } from "react";

interface BlockProps {
    row: number;
    col: number;
    second?: boolean;
};

export const BlockActive = ({ row, col, second }: BlockProps) => {
    const rectRef = useRef<SVGRectElement>(null);
    const widthBlock = 87;
    const heightBlock = 25;

    useEffect(() => {
        if (rectRef.current) {
            const rect = rectRef.current.getBoundingClientRect();
            console.log({
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
            });
        }
    }, []);

    return (
        <rect
            ref={rectRef}
            transform={`translate(${second ? widthBlock + widthBlock / 4 - widthBlock / 2 : widthBlock / 4} 0)`}
            x={widthBlock * (row - 1)} y={-col * heightBlock}
            fill="red"
            stroke="black"
            width={widthBlock} height={heightBlock}
            rx="2" ry="2"
        />
    );
};