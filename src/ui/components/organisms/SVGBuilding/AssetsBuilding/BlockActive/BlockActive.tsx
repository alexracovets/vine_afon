"use client";

import { useEffect, useRef } from "react";

import useBlockPosition from "@/store/useBlockPosition";

interface BlockProps {
    row: number;
    col: number;
    second?: boolean;
    name: string;
    status: string;
    index: number;
};

export const BlockActive = ({ row, col, second, name, status, index }: BlockProps) => {
    const setPosition = useBlockPosition((state) => state.setPosition);

    const rectRef = useRef<SVGRectElement>(null);
    const widthBlock = 87;
    const heightBlock = 27;

    useEffect(() => {
        if (rectRef.current && name && status && index) {
            const rect = rectRef.current.getBoundingClientRect();
            setPosition({
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
                name: name,
                status: status,
                idx: index
            });
        }

    }, [setPosition, name, status, index]);

    return (
        <rect
            ref={rectRef}
            transform={`translate(${second ? widthBlock + widthBlock / 4 - widthBlock / 2 : widthBlock / 4} 0)`}
            x={widthBlock * (row - 1)} y={-col * heightBlock}
            width={widthBlock} height={heightBlock}
        />
    );
};