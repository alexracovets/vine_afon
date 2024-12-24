"use client";

import { ImageAtom, Section } from "@/src/ui/components/atoms";
import { MainFrame } from "@/src/ui/components/molecules";
import { cn } from "@/src/utils/cn";

export const StartSection = () => {

    return (
        <Section
            className={cn(
                "relative w-full min-h-[100dvh] flex justify-end items-end pr-[8.8rem] pb-[12.5rem]",
                "max-tablet:min-h-[60.8rem]"
            )}>
            <ImageAtom src="/StartSection/bg.jpg" alt="bg" cover />
            <MainFrame />
        </Section>
    )
};