"use client";

import { useControls } from "react-zoom-pan-pinch";
import { useCallback, useEffect, useRef } from "react";
import useBlockPosition from "@/store/useBlockPosition";

export const MainBlock = () => {
    const setMainBlockPosition = useBlockPosition((state) => state.setMainBlockPosition);
    const mainBlock = useBlockPosition((state) => state.mainBlock);
    const rectRef = useRef<SVGRectElement>(null);
    const { resetTransform } = useControls();

    const updatePosition = useCallback(() => {
        resetTransform();
        setTimeout(() => {
            if (rectRef.current) {
                const rect = rectRef.current.getBoundingClientRect();

                setMainBlockPosition({
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height,
                    name: mainBlock.name,
                    status: mainBlock.status
                });
            }
        }, 300)

    }, [setMainBlockPosition]);

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
            x="745" y="540"
            width="180" height="170"
            fill="rgb(216, 216, 216)"
            stroke="rgb(0, 0, 0)"
        />
    );
};