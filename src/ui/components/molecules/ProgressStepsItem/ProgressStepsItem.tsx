"use client";

import { ProgressItemsQuad, ProgressStepsItemWrapper, Text } from "@/src/ui/components/atoms";

interface ProgressStepsItemProps {
    number: number;
    value: string;
};

export const ProgressStepsItem = ({ number, value }: ProgressStepsItemProps) => {

    return (
        <ProgressStepsItemWrapper>
            <ProgressItemsQuad value={number} />
            <Text variant="progress">
                {value}
            </Text>
        </ProgressStepsItemWrapper>
    );
};