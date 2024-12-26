"use client";

import { cn } from "@/src/utils/cn";

interface InfoContentWrapperProps {
    children: React.ReactNode;
};

export const InfoContentWrapper = ({ children }: InfoContentWrapperProps) => {

    return (
        <div
            className={cn(
                "flex flex-col w-full",
                "max-w-[77.1rem] gap-y-[2.4rem]",
                "max-tablet:max-w-[40.6rem] max-tablet:gap-y-[1.2rem]",
                "max-mobile:max-w-full"
            )}
        >
            {children}
        </div>
    );
};