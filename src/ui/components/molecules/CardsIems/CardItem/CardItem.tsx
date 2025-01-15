"use client";

import { useEffect, useState } from "react";

import { ImageAtom } from "@/src/ui/components/atoms";
import { cn } from "@/src/utils/cn";
import { BlockActiveData, LeafData, TubeData } from "@/src/types";


interface CardItemProps {
    image: string;
    alt: string;
    value: LeafData[] | TubeData[] | BlockActiveData[];
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
                    "max-tablet:min-w-[13rem] max-tablet:h-[5rem]"
                )}
            >
                <div className={cn(
                    "w-[9rem] h-[9rem] relative z-[1] bg-regalWhite",
                    "max-tablet:w-[5rem] max-tablet:h-[5rem]",
                    "outline outline-[.5rem] outline-regalMain rounded-[50%] overflow-hidden"
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