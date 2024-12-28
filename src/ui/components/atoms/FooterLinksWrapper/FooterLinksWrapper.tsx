"use client";

import { cn } from "@/src/utils/cn";

interface FooterLinksWrapperProps {
    children: React.ReactNode;
};

export const FooterLinksWrapper = ({ children }: FooterLinksWrapperProps) => {

    return (
        <div
            className={cn(
                "flex justify-end flex-wrap gap-y-[2rem] max-w-[75rem]",
                "max-tablet:gap-y-[1rem]",
                "max-mobile:flex-col max-mobile:justify-start max-tablet:items-start"
            )}
        >
            {children}
        </div>
    );
};