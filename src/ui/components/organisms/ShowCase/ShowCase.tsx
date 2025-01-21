"use client";

import { useDotButton } from "@/src/hooks/useDotButton/useDotButton";
import { usePrevNextButtons } from "@/src/hooks/usePrevNextButtons";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious, CarouselApi, DotButton } from "@/src/ui/components/molecules";
import { cn } from "@/src/utils/cn";
import { useEffect, useState } from "react";
import { ImageAtom } from "@/src/ui/components/atoms";

import useLoaderStore from '@/store/useLoaderStore';

export const ShowCase = () => {
    const [api, setApi] = useState<CarouselApi>();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
    const setIsMainIsLoad = useLoaderStore(state => state.setIsMainIsLoad);
    const [loadedCount, setLoadedCount] = useState(0);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(api);

    const slides = [
        { name: "slide0", image: "0.jpg" },
        { name: "slide1", image: "1.jpg" },
        { name: "slide2", image: "2.jpg" },
        { name: "slide3", image: "3.jpg" },
        { name: "slide4", image: "4.jpg" },
        { name: "slide5", image: "5.jpg" },
        { name: "slide6", image: "6.jpg" },
        { name: "slide7", image: "7.jpg" },
        { name: "slide8", image: "8.jpg" },
        { name: "slide9", image: "9.jpg" },
        { name: "slide10", image: "10.jpg" },
        { name: "slide11", image: "11.jpg" },
        { name: "slide12", image: "12.jpg" },
        { name: "slide13", image: "13.jpg" },
        { name: "slide14", image: "14.jpg" },
        { name: "slide15", image: "15.jpg" },
    ];

    const handleImageLoad = () => {
        setLoadedCount((prev) => {
            const newCount = prev + 1;
            return newCount;
        });
    };

    useEffect(() => {
        setIsMainIsLoad(loadedCount === slides.length);
    }, [loadedCount, slides.length, setIsMainIsLoad]);

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
                                        "relative w-full h-[50rem] rounded-[4rem] mx-auto overflow-hidden",
                                        "max-tablet:h-[30rem] max-tablet:rounded-[2rem]",
                                        "max-mobile:h-[15.5rem] max-mobile:rounded-[1rem]"
                                    )}
                                >
                                    <ImageAtom
                                        src={`/showCaseSection/${slide.image}`}
                                        alt={slide.name}
                                        cover
                                        onLoad={handleImageLoad}
                                    />
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