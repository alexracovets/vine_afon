"use client";

import { cn } from "@/src/utils/cn";
import { ImageAtom } from "../../atoms";
import { useEffect, useState } from "react";
import useCardShop from "@/store/useCardShop";

export const CardsIems = () => {
    const count = 1;
    const activeTubes = useCardShop((state) => state.tubes);
    const [tubesCount, setTubesCount] = useState(0);

    useEffect(() => {
        setTubesCount(activeTubes.length);
    }, [activeTubes])

    return (
        <div className={cn(
            'flex justify-start items-center gap-[2rem]',
            'max-tablet:gap-[1.2rem]',
            'max-mobile:w-full max-mobile:gap-[1.133rem] max-mobile:mb-[3rem]'
        )}>
            <div
                className={cn(
                    "flex justify-start items-center gap-x-[1rem] h-[9rem] min-w-[21rem]",

                )}
            >
                <div className={cn(
                    "w-[9rem] h-[9rem] relative z-[1]",
                    "outline outline-[.5rem] outline-regalMain rounded-[50%] overflow-hidden"
                )}>
                    <ImageAtom src="/jpg/leaf.jpg" alt="leaf" />
                </div>
                <span className={cn(
                    "text-[5rem] font-bold text-regalWhite mt-[1.067rem]"
                )}>
                    x
                </span>
                <div
                    className={cn(
                        "text-[5rem] font-bold text-regalWhite mt-[1.067rem]"
                    )}>
                    {count}
                </div>
            </div>
            <div
                className="flex justify-start items-center gap-x-[1rem] h-[9rem] min-w-[21rem]"
            >
                <div
                    className={cn(
                        "w-[9rem] h-[9rem] relative z-[1]",
                        "outline outline-[.5rem] outline-regalMain rounded-[50%] overflow-hidden bg-regalWhite"
                    )}
                >
                    <ImageAtom src="/jpg/tube.jpg" alt="leaf" className="containe" />
                </div>
                <span className={cn(
                    "text-[5rem] font-bold text-regalWhite mt-[1.067rem]"
                )}>
                    x
                </span>
                <div
                    className={cn(
                        "text-[5rem] font-bold text-regalWhite mt-[1.067rem]"
                    )}>
                    {tubesCount}
                </div>
            </div>
            <div
                className="flex justify-start items-center gap-x-[1rem] h-[9rem] min-w-[21rem]"
            >
                <div
                    className={cn(
                        "w-[9rem] h-[9rem] relative z-[1]",
                        "outline outline-[.5rem] outline-regalMain rounded-[50%] overflow-hidden bg-regalWhite"
                    )}
                >
                    <ImageAtom src="/jpg/block.jpg" alt="leaf" className="containe" />
                </div>
                <span className={cn(
                    "text-[5rem] font-bold text-regalWhite mt-[1.067rem]"
                )}>
                    x
                </span>
                <div
                    className={cn(
                        "text-[5rem] font-bold text-regalWhite mt-[1.067rem]"
                    )}>
                    {count}
                </div>
            </div>
        </div >
    );
};