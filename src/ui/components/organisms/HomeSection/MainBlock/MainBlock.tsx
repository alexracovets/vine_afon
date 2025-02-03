"use client";

import { useCallback, useEffect, useRef } from "react";
import { useControls } from "react-zoom-pan-pinch";

import useBlockPosition from "@/store/useBlockPosition";
import { cn } from "@/src/utils/cn";

export const MainBlock = () => {
    const setMainBlockPosition = useBlockPosition((state) => state.setMainBlockPosition);
    const mainBlock = useBlockPosition((state) => state.mainBlock);
    const blockRef = useRef<HTMLDivElement>(null);
    const { resetTransform } = useControls();

    const getPosition = useCallback(() => {
        if (blockRef.current) {
            const rect = blockRef.current.getBoundingClientRect();

            setMainBlockPosition({
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
                name: mainBlock.name,
                status: mainBlock.status
            });
        }
    }, [setMainBlockPosition, mainBlock.name, mainBlock.status]);

    const updatePosition = useCallback(() => {
        resetTransform();
        setTimeout(() => {
            getPosition();
        }, 300)

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
            className={cn(
                "absolute bottom-[9.1rem] right-[1.8rem]",
                "max-tablet:bottom-[5.3rem] max-tablet:right-[.8rem]",
                "max-mobile:bottom-[3.8rem] max-mobile:right-[.6rem]"
            )}
        >
            <div
                ref={blockRef}
                className={cn(
                    `bg-white flex`,
                    "border-[.1rem] border-blocks-stroke",
                    "w-[15.4rem] h-[15rem]",
                    "max-tablet:w-[8.1rem] max-tablet:h-[7.6rem]",
                    "max-mobile:w-[6.3rem] max-mobile:h-[5.9rem]"
                )}
            />
        </div>
    );
}