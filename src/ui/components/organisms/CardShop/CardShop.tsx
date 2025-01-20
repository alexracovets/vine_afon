"use client";

import { cn } from "@/src/utils/cn";
import { CardsIems, Price } from "@/src/ui/components/molecules";

import useBlockPosition from "@/store/useBlockPosition";
import { Container } from "@/src/ui/components/atoms";

export const CardShop = () => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);

    return (
        <Container className={cn(
            "absolute left-0 bottom-0 z-[1] p-[1rem]",
            "max-mobile:p-0",
            "transform transition-opacity duration-300",
            isBlockPopUp ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
            <div
                className={cn(
                    "flex justify-between items-center w-full bg-regalBlack rounded-[2.5rem] overflow-hidden py-[2rem] px-[2rem]",
                    "max-tablet:rounded-[1.5rem] max-tablet:py-[2rem]",
                    "max-mobile:flex-col"
                )}
            >
                <CardsIems />
                <Price />
            </div>
        </Container>
    );
};