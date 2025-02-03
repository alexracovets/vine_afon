"use client";

import { TubeData } from "@/src/types";
import { cn } from "@/src/utils/cn";
import useCardShop from "@/store/useCardShop";
import { useCallback, useEffect, useState } from "react";



export const Tube = ({ status, row, col, id }: TubeData) => {
    const addTube = useCardShop((state) => state.addTube);
    const removeTube = useCardShop((state) => state.removeTube);
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const clickHandler = () => {
        if (status === "active") {
            setIsActive(!isActive);
        }
    }

    const addItem = useCallback(() => {
        addTube({ row, col, id, status: status });
    }, [addTube, row, col, id, status]);

    const removeItem = useCallback(() => {
        removeTube({ row, col, id, status: status });
    }, [removeTube, row, col, id, status]);

    useEffect(() => {
        if (isActive) {
            addItem();
        } else {
            removeItem();
        }
    }, [isActive, addItem, removeItem]);

    return (
        <div
            className={cn(
                "w-full h-full bg-regalWhite wave cursor-pointer",
                isHover && !isActive && "before:translate-y-[-20%] before:rotate-[20deg] after:translate-y-[-20%] after:rotate-[20deg]",
                isActive ?
                    "before:translate-y-[-100%] before:rotate-[360deg] after:translate-y-[-100%] after:rotate-[360deg]"
                    :
                    "before:translate-y-[0%] before:rotate-[0deg] after:translate-y-[0%] after:rotate-[0deg]"
            )}
            onClick={clickHandler}
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={() => setIsHover(false)}
        />
    );
}