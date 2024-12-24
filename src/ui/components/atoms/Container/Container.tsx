"use client";

import { cn } from "@/src/utils/cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {

    return (
        <div
            className={cn(
                "w-full px-[8.8rem]",
                "max-tablet:px-[3rem]",
                className)
            }
        >
            {children}
        </div>
    );
};