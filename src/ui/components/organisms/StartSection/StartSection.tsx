"use client";

import { ImageAtom, Section } from "@/src/ui/components/atoms";
import { MainFrame } from "@/src/ui/components/molecules";

export const StartSection = () => {

    return (
        <Section startSection>
            <ImageAtom src="/StartSection/bg.jpg" alt="bg" cover />
            <MainFrame />
        </Section>
    )
};