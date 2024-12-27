"use client";

import { SupportInfoContent, ProgressSteps, SupportInfoTitle } from "@/src/ui/components/molecules";
import { Container, Section, SupportInfoWrapper } from "@/src/ui/components/atoms";
import { ShowCase } from "@/src/ui/components/organisms";

export const WorkSection = () => {

    return (
        <Section rounded>
            <Container className="gap-y-[10rem] max-tablet:gap-y-[5rem]">
                <ProgressSteps />
                <SupportInfoWrapper>
                    <SupportInfoTitle />
                    <SupportInfoContent />
                </SupportInfoWrapper>
                <ShowCase />
            </Container>
        </Section>
    );
};