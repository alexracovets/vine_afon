"use client";

import { useEffect, useRef } from "react";

import useBlockPosition from "@/store/useBlockPosition";

interface BlockProps {
    row: number;
    col: number;
    second?: boolean;
    name: string;
    status: string;
    id: number;
};

export const BlockActive = ({ row, col, second, name, status, id }: BlockProps) => {
    const setPosition = useBlockPosition((state) => state.setPosition);

    const rectRef = useRef<SVGRectElement>(null);
    const widthBlock = 87;
    const heightBlock = 27;

    const updatePosition = () => {
        if (rectRef.current && name && status && id) {
            const rect = rectRef.current.getBoundingClientRect();
            console.log("Updating position:", rect); // Дебаг
            setPosition({
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
                name: name,
                status: status,
                id: id
            });
        }
    };

    useEffect(() => {
        updatePosition();

        window.addEventListener("resize", updatePosition);
        return () => {
            window.removeEventListener("resize", updatePosition);
        };
    }, [setPosition, name, status, id]);

    return (
        <rect
            ref={rectRef}
            transform={`translate(${second ? widthBlock + widthBlock / 4 - widthBlock / 2 : widthBlock / 4} 0)`}
            x={widthBlock * (row - 1)} y={-col * heightBlock}
            width={widthBlock} height={heightBlock}
        />
    );
};