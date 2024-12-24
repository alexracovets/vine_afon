"use client";

import { cn } from "@/src/utils/cn";

interface SectionProps {
    children: React.ReactNode;
    startSection?: boolean;
    className?: string;
}

export const Section = ({ children, startSection, className }: SectionProps) => {
    return (
        <section
            className={
                cn(
                    "w-full",
                    className,
                    startSection && "relative w-full min-h-[100dvh] flex justify-end items-end pr-[8.8rem] pb-[12.5rem]",
                    startSection && "max-tablet:min-h-[60.8rem] max-tablet:pr-[3rem] max-tablet:pb-[6.2rem]",
                    startSection && "max-mobile:min-h-[33.9rem] max-mobile:pr-[2rem] max-mobile:pb-[4.7rem]"
                )}
        >
            {children}
        </section>
    );
};