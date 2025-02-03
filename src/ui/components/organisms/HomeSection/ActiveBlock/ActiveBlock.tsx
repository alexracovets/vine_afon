"use client";

import { useCallback, useEffect, useRef } from "react";
import { useControls } from "react-zoom-pan-pinch";

import useBlockPosition from "@/store/useBlockPosition";
import { cn } from "@/src/utils/cn";

interface ActiveBlockProps {
    status: string;
    name: string;
    id: number;
    blocksWidth: string;
    blocksHeight: string;
};

export const ActiveBlock = ({ status, name, id, blocksWidth, blocksHeight }: ActiveBlockProps) => {
    const setPosition = useBlockPosition((state) => state.setPosition);
    const { resetTransform } = useControls();
    const blockRef = useRef<HTMLDivElement>(null);

    const getPosition = useCallback(() => {
        if (blockRef.current) {
            const rect = blockRef.current.getBoundingClientRect();
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
    }, [setPosition, name, status, id]);

    const updatePosition = useCallback(() => {
        resetTransform();
        getPosition();

    }, [getPosition]);

    useEffect(() => {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => {
            window.removeEventListener("resize", updatePosition);
        };
    }, [updatePosition]);

    return (
        <div
            ref={blockRef}
            className={cn(
                `bg-white flex`,
                blocksWidth, blocksHeight,
                "border-[.1rem] border-blocks-stroke"
            )}
        />
    );
};