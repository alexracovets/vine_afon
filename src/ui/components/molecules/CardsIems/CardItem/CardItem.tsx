"use client";

import { useEffect, useState } from "react";

import { ImageAtom } from "@/src/ui/components/atoms";
import { cn } from "@/src/utils/cn";
import { BlockActiveData, LeafData, TubeData, MainBlockData } from "@/src/types";


interface CardItemProps {
    image: string;
    alt: string;
    value: LeafData[] | TubeData[] | BlockActiveData[] | MainBlockData[];
};

export const CardItem = ({ image, alt, value }: CardItemProps) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(value.length);
    }, [value]);

    return (
        <>
            <div
                className={cn(
                    "flex justify-start items-center gap-x-[1rem] h-[9rem] min-w-[21rem]",
                    "max-tablet:min-w-[15rem] max-tablet:h-[5rem]",
                    "max-mobile:w-[50%]"
                )}
            >
                <div className={cn(
                    "w-[9rem] h-[9rem] relative z-[1] bg-regalWhite",
                    "outline outline-[.5rem] outline-regalMain rounded-[50%] overflow-hidden",
                    "max-tablet:w-[5rem] max-tablet:h-[5rem]",
                    "max-mobile:w-[4rem] max-mobile:h-[4rem] max-mobile:outline-[.3rem]",

                )}>
                    <ImageAtom src={image} alt={alt} />
                </div>
                <span className={cn(
                    "text-[5rem] font-bold text-regalWhite",
                    "max-tablet:text-[3rem]"
                )}>
                    x
                </span>
                <div
                    className={cn(
                        "text-[5rem] font-bold text-regalWhite",
                        "max-tablet:text-[3rem]"
                    )}>
                    {count}
                </div>
            </div>
        </>
    );
};