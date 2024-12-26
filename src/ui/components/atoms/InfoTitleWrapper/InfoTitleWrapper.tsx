"use client";

import { cn } from "@/src/utils/cn";

interface InfoTitleWrapperProps {
    children: React.ReactNode;
};

export const InfoTitleWrapper = ({ children }: InfoTitleWrapperProps) => {

    return (
        <div className={cn(
            "flex flex-col w-full",
            "max-w-[54.5rem] gap-y-[4rem]",
            "max-tablet:max-w-[26.8rem] max-tablet:gap-y-[2rem]",
            "max-mobile:max-w-full"
        )}>
            {children}
        </div>
    );
};