"use client";

interface SectionProps {
    children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
    return (
        <section className="w-full">
            {children}
        </section>
    );
};