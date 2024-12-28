"use client";

import { cn } from "@/src/utils/cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    rounded?: boolean;
};

export const Container = ({ children, className, rounded }: ContainerProps) => {

    const roudedStyle = cn(
        "mt-[-5rem] rounded-t-[4rem] bg-regalWhite z-[1] relative",
        "max-tablet:mt-[-2rem] max-tablet:rounded-t-[2rem]",
        "max-mobile:mt-[-1rem] max-mobile:rounded-t-[1rem]"
    );

    return (
        <div
            className={cn(
                "w-full px-[8.8rem] flex flex-col",
                "max-tablet:px-[3rem]",
                "max-mobile:px-[2rem]",
                rounded && roudedStyle,
                className)
            }
        >
            {children}
        </div>
    );
};