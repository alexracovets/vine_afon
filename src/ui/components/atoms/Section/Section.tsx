"use client";

import { cn } from "@/src/utils/cn";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section className={cn("w-full", className)}>
            {children}
        </section>
    );
};