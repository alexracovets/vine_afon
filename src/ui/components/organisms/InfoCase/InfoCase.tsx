"use client";

import { SupportInfoContent, SupportInfoTitle } from "@/src/ui/components/molecules";
import { SupportInfoWrapper } from "@/src/ui/components/atoms";

export const InfoCase = () => {

    return (
        <SupportInfoWrapper>
            <SupportInfoTitle />
            <SupportInfoContent />
        </SupportInfoWrapper>
    );
};