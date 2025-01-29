"use client";

import { LeafData } from "@/src/types";
import { cn } from "@/src/utils/cn";
import useCardShop from "@/store/useCardShop";
import Image from "next/image";
import { useEffect, useState } from "react";



export const Leaf = ({ status, row, col, id }: LeafData) => {
    const addLeaf = useCardShop((state) => state.addLeaf);
    const removeLeaf = useCardShop((state) => state.removeLeaf);
    const [isActive, setIsActive] = useState(false);

    const clickHandler = () => {
        if (status === "active") {
            setIsActive(!isActive);
        }
    }

    useEffect(() => {
        if (isActive) {
            addLeaf({
                row,
                col,
                id,
                status: status
            })
        } else {
            removeLeaf({
                row,
                col,
                id,
                status: status
            })
        }
    }, [isActive, addLeaf, removeLeaf, status]);

    return (
        <div
            onClick={clickHandler}
            className={cn(
                "absolute bg-regalWhite rounded-[50%] flex justify-center items-center border-regalMain cursor-pointer",
                "transition duration-300 ease-in-out",
                "border-[.3rem] max-tablet:border-[.2rem]",
                "w-[4rem] h-[4rem] max-tablet:w-[2rem] max-tablet:h-[2rem]",
                "top-[-5rem] left-[.25rem] max-tablet:top-[-2.5rem] max-tablet:left-[.075rem] max-mobile:top-[-2.3rem] max-mobile:left-[.05rem]",
                "hover:grayscale-0",
                isActive ? "grayscale-0" : "grayscale"
            )}
        >
            <div
                className="w-[3rem] h-[3rem] relative"
            >
                <Image src='mapa/leaf.png' priority alt="leaf" fill className="object-contain" />
            </div>
        </div>
    );
};