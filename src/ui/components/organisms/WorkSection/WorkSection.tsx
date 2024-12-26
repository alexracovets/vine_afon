"use client";

import { Container, Section, SupportInfoWrapper } from "@/src/ui/components/atoms";
import { SupportInfoContent, ProgressSteps, SupportInfoTitle } from "@/src/ui/components/molecules";

export const WorkSection = () => {

    return (
        <Section rounded>
            <Container className="gap-y-[10rem] max-tablet:gap-y-[5rem]">
                <ProgressSteps />
                <SupportInfoWrapper>
                    <SupportInfoTitle />
                    <SupportInfoContent />
                </SupportInfoWrapper>
            </Container>
        </Section>
    );
};