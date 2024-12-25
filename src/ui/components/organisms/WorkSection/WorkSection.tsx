"use client";

import { Container, Section } from "@/src/ui/components/atoms";
import { ProgressSteps } from "@/src/ui/components/molecules";

export const WorkSection = () => {

    return (
        <Section rounded>
            <Container>
                <ProgressSteps />
            </Container>
        </Section>
    );
};