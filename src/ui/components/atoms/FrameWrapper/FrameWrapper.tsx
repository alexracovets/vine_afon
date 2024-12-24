"use client";

import { cn } from "@/src/utils/cn";

interface FrameWrapperProps {
    children: React.ReactNode;
}

export const FrameWrapper = ({ children }: FrameWrapperProps) => {

    return (
        <div
            className={cn(
                "relative flex flex-col justify-end items-start",
                "w-[54.5rem] h-[33.7rem] pb-[5.8rem] px-[11rem] gap-y-[2rem]",
                "max-tablet:w-[32.8rem] max-tablet:h-[17rem] max-tablet:pl-[7rem] max-tablet:pr-[3rem] max-tablet:pb-[2rem] max-tablet:gap-y-[1rem]",
                "max-mobile:w-[25rem] max-mobile:h-[16rem] max-mobile:pl-[4rem] max-mobile:pr-[3rem] max-mobile:pb-[2.4rem]"
            )}
        >
            {children}
        </div>
    );
};