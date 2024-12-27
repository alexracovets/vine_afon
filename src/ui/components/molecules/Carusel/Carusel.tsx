"use client";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/src/ui/components/atoms/Button";
import { cn } from "@/src/utils/cn";

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }

    return context
}

const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        )
        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return
            }

            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === "ArrowRight") {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext]
        )

        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api?.off("select", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()
    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
})
CarouselItem.displayName = "CarouselItem"

const buttonStyles = cn(
    "transition-all duration-300 ease-in-out transform hover:scale-[1.05] focus:outline-none will-change-transform",
    "disabled:opacity-50 disabled:scale-[0.9]",
    "h-[3rem] w-[3rem] rounded-full border-[0.1rem] border-regalMain flex justify-center items-center",
    "max-tablet:h-[2.5rem] max-tablet:w-[2.5rem]",
    "max-mobile:h-[1.8rem] max-mobile:w-[1.8rem]"
);
const arrowStyles = cn(
    "h-[1.5rem] w-[1.5rem] text-regalMain",
    "max-tablet:h-[1.4rem] max-tablet:w-[1.4rem]",
    "max-mobile:h-[1.1rem] max-mobile:w-[1.1rem]"
);

const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel()

    return (
        <button
            ref={ref}
            className={cn(
                buttonStyles,
                className
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className={arrowStyles} />
            <span className="sr-only">Previous slide</span>
        </button>
    )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
        <button
            ref={ref}
            className={cn(
                buttonStyles,
                className
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className={arrowStyles} />
            <span className="sr-only">Next slide</span>
        </button>
    )
})
CarouselNext.displayName = "CarouselNext"

type DotButtonProps = React.ComponentPropsWithRef<'button'> & {
    selected: boolean;
};
export const DotButton: React.FC<DotButtonProps> = (props) => {
    const { children, selected, ...restProps } = props;

    return (
        <button
            type="button"
            {...restProps}
            className={cn(
                "w-[1.7rem] h-[1.7rem] rounded-[50%] transition-all duration-300 ease-in-out outline outline-[0.1rem] outline-regalMain will-change-transform",
                "max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]",
                "max-mobile:w-[.9rem] max-mobile:h-[.9rem]",
                selected ? "bg-regalMain scale-[1.05]" : "bg-[#D9D9D9]"
            )}
        >
            {children}
        </button>
    )
};


export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
}
