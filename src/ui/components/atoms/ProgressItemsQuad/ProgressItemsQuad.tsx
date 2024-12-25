"use client";

import { cn } from "@/src/utils/cn";

interface ProgressItemsQuadProps {
    value: number;
};

export const ProgressItemsQuad = ({ value }: ProgressItemsQuadProps) => {

    return (
        <div
            className={cn(
                "flex justify-center items-center w-full bg-regalMain font-[600] text-regalWhite",
                "max-w-[9.3rem] h-[9.3rem] text-[3.2rem] rounded-[1rem]",
                "max-tablet:max-w-[4.6rem] max-tablet:h-[4.6rem] max-tablet:text-[1.6rem] max-tablet:rounded-[0.6rem]",
                "max-mobile:max-w-[3.6rem] max-mobile:h-[3.6rem] max-mobile:text-[1.6rem]",
            )}
        >
            {value}
        </div>
    );
};