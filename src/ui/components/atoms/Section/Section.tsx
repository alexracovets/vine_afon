"use client";

import { cn } from "@/src/utils/cn";

interface SectionProps {
    children: React.ReactNode;
    start?: boolean;
    rounded?: boolean;
    className?: string;
    id?: string;
}

export const Section = ({ children, start, rounded, className, id }: SectionProps) => {

    const roudedStyle = cn(
        "mt-[-5rem] rounded-t-[4rem] bg-regalWhite",
        "max-tablet:mt-[-2rem] max-tablet:rounded-t-[2rem]",
        "max-mobile:mt-[-1rem] max-mobile:rounded-t-[1rem]"
    );

    const startStyle = cn(
        "relative w-full min-h-[calc(100dvh+5rem)] flex justify-end items-end pr-[8.8rem] pb-[12.5rem] pt-[13rem]",
        "max-tablet:min-h-[60.8rem] max-tablet:pr-[3rem] max-tablet:pb-[6.2rem] max-tablet:pt-0",
        "max-mobile:min-h-[33.9rem] max-mobile:pr-[2rem] max-mobile:pb-[4.7rem]"
    );

    return (
        <section
            id={id}
            className={
                cn(
                    "w-full py-[10rem]",
                    "max-tablet:py-[5rem]",
                    className,
                    rounded && roudedStyle,
                    start && startStyle
                )}
        >
            {children}
        </section>
    );
};