"use client";

import { cn } from "@/src/utils/cn";

interface FrameInfoWrapperProps {
    children: React.ReactNode;
}

export const FrameInfoWrapper = ({ children }: FrameInfoWrapperProps) => {
    return (
        <div
            className={cn(
                "flex justify-between items-center gap-x-[3rem]",
                "max-tablet:gap-x-[2rem]",
                "max-mobile:gap-x-[1rem]"
            )}
        >
            {children}
        </div>
    );
}