"use client";

import { ProgressStepsItem } from "@/src/ui/components/molecules";
import { ProgressStepsWrapper } from "@/src/ui/components/atoms";

export const ProgressSteps = () => {

    const steps = [
        {
            number: 1,
            value: "Обери лозу",
        },
        {
            number: 2,
            value: "Забронюй",
        },
        {
            number: 3,
            value: "Оплати",
        },
        {
            number: 4,
            value: "Отримай 3 подарунка",
        }
    ];

    return (
        <ProgressStepsWrapper>
            {steps.map((step, idx) => (
                <ProgressStepsItem
                    key={idx}
                    number={step.number}
                    value={step.value}
                />
            ))}
        </ProgressStepsWrapper>
    );
};