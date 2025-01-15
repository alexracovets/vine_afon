"use client";

import { useCallback, useEffect, useRef } from "react";
import { useControls } from "react-zoom-pan-pinch";

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
    const { resetTransform } = useControls();

    const rectRef = useRef<SVGRectElement>(null);
    const widthBlock = 87;
    const heightBlock = 27;

    const updatePosition = useCallback(() => {

        resetTransform();
        setTimeout(() => {
            if (rectRef.current && name && status && id) {
                const rect = rectRef.current.getBoundingClientRect();
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
        }, 300)

    }, [setPosition, resetTransform, name, status, id]);

    useEffect(() => {
        updatePosition();

        window.addEventListener("resize", updatePosition);
        return () => {
            window.removeEventListener("resize", updatePosition);
        };
    }, [updatePosition]);

    return (
        <rect
            ref={rectRef}
            transform={`translate(${second ? widthBlock + widthBlock / 4 - widthBlock / 2 : widthBlock / 4} 0)`}
            x={widthBlock * (row - 1)} y={-col * heightBlock}
            width={widthBlock} height={heightBlock}
        />
    );
};