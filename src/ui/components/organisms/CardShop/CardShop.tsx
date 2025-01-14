"use client";

import { cn } from "@/src/utils/cn";
import { CardsIems, Price } from "@/src/ui/components/molecules";

export const CardShop = () => {

    return (
        <div className={cn(
            'absolute left-[8.8rem] bottom-[2dvh] flex justify-between items-center w-[133.9rem] py-[1rem] px-[2rem] bg-regalBlack rounded-[2.5rem]',
            'max-tablet:left-[2.9rem] max-tablet:w-[68.7rem] max-tablet:rounded-[1.5rem] max-tablet:py-[2rem]',
            'max-mobile:left-0 max-mobile:bottom-0 max-mobile:w-full max-mobile:flex-col max-mobile:rounded-none max-mobile:rounded-t-[1rem]'
        )}>
            <CardsIems />
            <Price />
        </div>
    );
};