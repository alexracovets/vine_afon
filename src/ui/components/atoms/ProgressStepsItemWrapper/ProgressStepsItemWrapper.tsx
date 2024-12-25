"use client";

import { cn } from "@/src/utils/cn";

interface ProgressStepsItemWrapperProps {
    children: React.ReactNode;
};

export const ProgressStepsItemWrapper = ({ children }: ProgressStepsItemWrapperProps) => {
    return (
        <div
            className={cn(
                "flex justify-start items-center w-[25%] gap-x-[2rem]",
                "max-tablet:gap-x-[1.2rem]",
                "max-mobile:gap-x-[2rem] max-mobile:w-full"
            )}
        >
            {children}
        </div>
    );
};