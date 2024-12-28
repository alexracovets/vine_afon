"use client";

import { HowWorks, InfoCase, ShowCase } from "@/src/ui/components/organisms";
import { Container, Section } from "@/src/ui/components/atoms";
import { ProgressSteps } from "@/src/ui/components/molecules";

export const WorkSection = () => {

    return (
        <Section rounded id="work">
            <Container className="gap-y-[10rem] max-tablet:gap-y-[5rem]">
                <ProgressSteps />
                <InfoCase />
                <ShowCase />
                <HowWorks />
            </Container>
        </Section>
    );
};