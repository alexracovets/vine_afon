"use client";

import { useDotButton } from "@/src/hooks/useDotButton/useDotButton";
import { usePrevNextButtons } from "@/src/hooks/usePrevNextButtons";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious, CarouselApi, DotButton } from "@/src/ui/components/molecules";
import { cn } from "@/src/utils/cn";
import { useState } from "react";
import { ImageAtom } from "@/src/ui/components/atoms";

export const ShowCase = () => {
    const [api, setApi] = useState<CarouselApi>();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(api)

    const slides = [
        {
            name: "slide0",
            image: "slide_0.jpg",
        },
        {
            name: "slide1",
            image: "slide_1.jpg",
        },
        {
            name: "slide2",
            image: "slide_2.jpg",
        }
    ];

    return (
        <div>
            <div
                className={cn(
                    "flex justify-end items-center gap-x-[.6rem] mb-[2rem] px-[2rem]",
                    "max-tablet:gap-x-[.4rem] max-tablet:mb-[1rem]",
                    "max-mobile:px-0"
                )}
            >
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => onDotButtonClick(index)}
                    />
                ))}
            </div>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {slides.map((slide, idx) => {
                        return (
                            <CarouselItem key={idx}>
                                <div
                                    className={cn(
                                        "relative w-[130rem] h-[50rem] rounded-[4rem] mx-auto overflow-hidden",
                                        "max-tablet:w-full max-tablet:h-[30rem] max-tablet:rounded-[2rem]",
                                        "max-mobile:h-[15.5rem] max-mobile:rounded-[1rem]"
                                    )}
                                >
                                    <ImageAtom src={`/showCaseSection/${slide.image}`} alt={slide.name} cover />
                                </div>
                            </CarouselItem>
                        );
                    })};
                </CarouselContent>
                <div
                    className={cn(
                        "flex gap-x-[1rem] mt-[2rem] px-[2rem]",
                        "max-tablet:gap-x-[.5rem] max-tablet:px-0 max-tablet:mt-[1rem]",
                        "max-mobile:mt-[1rem]"
                    )}
                >
                    <CarouselPrevious onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <CarouselNext onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </Carousel>
        </div>
    );
};