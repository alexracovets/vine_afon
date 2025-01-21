"use client";

import { useState } from "react";

import { CardsIems, Price } from "@/src/ui/components/molecules";
import useBlockPosition from "@/store/useBlockPosition";
import { Container } from "@/src/ui/components/atoms";

import { cn } from "@/src/utils/cn";
import { CircleChevronDown } from "lucide-react";


export const CardShop = () => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);
    const [isShow, setIsShow] = useState(false);

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    return (
        <Container className={cn(
            "absolute left-0 bottom-0 z-[1] p-[1rem] overflow-hidden pt-[5rem] pointer-events-none",
            "max-tablet:pb-0",
            "max-mobile:pt-[5rem]",
            "transform transition-opacity duration-300",
            isBlockPopUp ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
            <div className={cn(
                "relative transition-transform duration-300 ease-in-out",
                isShow ? "translate-y-0" : "translate-y-[100%]"
            )}>
                <div
                    onClick={toggleShow}
                    className={cn(
                        "absolute top-[.1rem] right-[3rem] z-[1] p-[1rem] cursor-pointer w-[5rem] h-[5rem] bg-regalBlack translate-y-[-100%] rounded-t-[1rem] text-white flex justify-center items-center",
                        isBlockPopUp ? "pointer-events-none" : "pointer-events-auto"
                    )}
                >
                    <CircleChevronDown
                        className={cn(
                            "w-[3rem] h-[3rem] transition-transform duration-500 ease-in-out",
                            isShow ? "rotate-0" : "rotate-180"
                        )} />
                </div>
                <div
                    className={cn(
                        "flex justify-between items-center w-full bg-regalBlack rounded-[2.5rem] overflow-hidden py-[2rem] px-[2rem]",
                        "max-tablet:rounded-[1.5rem] max-tablet:py-[2rem]",
                        "max-mobile:flex-col max-tablet:rounded-t-[1rem] max-tablet:rounded-b-none",
                        isBlockPopUp ? "pointer-events-none" : "pointer-events-auto"
                    )}
                >
                    <CardsIems />
                    <Price />
                </div>
            </div>

        </Container>
    );
};