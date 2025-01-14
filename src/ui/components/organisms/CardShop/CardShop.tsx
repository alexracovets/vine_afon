"use client";

import { cn } from "@/src/utils/cn";
import { CardsIems, Price } from "@/src/ui/components/molecules";

import useBlockPosition from "@/store/useBlockPosition";

export const CardShop = () => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);

    return (
        <div className={cn(
            'absolute left-[8.8rem] bottom-[.5rem] flex justify-between items-center w-[133.9rem] py-[1rem] px-[2rem] bg-regalBlack rounded-[2.5rem]',
            'max-tablet:left-[2.9rem] max-tablet:w-[68.7rem] max-tablet:rounded-[1.5rem] max-tablet:py-[2rem]',
            'max-mobile:left-0 max-mobile:bottom-0 max-mobile:w-full max-mobile:flex-col max-mobile:rounded-none max-mobile:rounded-t-[1rem]',
            "transoform transition-opacity duration-300",
            isBlockPopUp ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
            <CardsIems />
            <Price />
        </div>
    );
};