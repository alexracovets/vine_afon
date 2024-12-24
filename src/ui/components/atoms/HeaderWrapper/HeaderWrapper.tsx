"use client";

import { cn } from "@/src/utils/cn";

interface HeaderWrapperProps {
    children: React.ReactNode;
};

export const HeaderWrapper = ({ children }: HeaderWrapperProps) => {

    return (
        <div className={cn(
            "flex justify-between items-center bg-regalWhite rounded-[3rem] px-[4.6rem] py-[2rem]",
            "max-tablet:px-[2.2rem] max-tablet:py-[1.5rem] max-tablet:rounded-[2rem]",
            "max-mobile:px-[2rem]  max-mobile:rounded-none"
        )}>
            {children}
        </div>
    );
};