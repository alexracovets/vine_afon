"use client";

import { ImageAtom, Section } from "@/src/ui/components/atoms";
import { MainFrame } from "@/src/ui/components/organisms";

export const StartSection = () => {

    return (
        <Section start>
            <ImageAtom src="/startSection/bg.jpg" alt="bg" cover priority />
            <MainFrame />
        </Section>
    );
};