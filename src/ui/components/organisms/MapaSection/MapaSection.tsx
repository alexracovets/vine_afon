"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { memo, useEffect } from "react";

import { BlockPopUp, TubesSection, HomeSection } from "@/src/ui/components/organisms";

import useBlockPosition from "@/store/useBlockPosition";
import useLoaderStore from '@/store/useLoaderStore';
import { cn } from "@/src/utils/cn";

export const MapaSection = memo(() => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);
    const setIsVineIsLoad = useLoaderStore(state => state.setIsVineIsLoad);

    useEffect(() => {
        setIsVineIsLoad(true);
        return () => {
            setIsVineIsLoad(false);
        };
    }, [setIsVineIsLoad]);

    return (
        <div className="bg-[#96d55a]" >
            <div
                className="flex flex-col justify-start items-start relative flex-grow">
                <TransformWrapper
                    initialScale={1}
                    disabled={isBlockPopUp}
                    doubleClick={{ disabled: true }}

                >
                    <TransformComponent wrapperClass="flex flex-col justify-start items-start flex-grow relative">
                        <div
                            className={cn(
                                "flex-grow w-[100dvw] h-[calc(100dvh-8.2rem)] flex justify-center items-center mt-[8.2rem]",
                                "max-mobile:flex-col-reverse max-mobile:gap-y-[1rem] max-mobile:h-[100dvh] max-mobile:mt-0"
                            )}
                        >
                            <TubesSection />
                            <HomeSection />
                        </div>
                        <BlockPopUp />
                    </TransformComponent>
                </TransformWrapper >
            </div>
        </div >
    );
});

MapaSection.displayName = "MapaSection";