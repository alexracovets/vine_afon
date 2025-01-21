"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { memo, useEffect } from "react";

import { SVGTubes, SVGBuilding, BlockPopUp } from "@/src/ui/components/organisms";

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
                                "max-mobile:flex-col-reverse",
                            )}
                        >
                            <div className={cn(
                                "w-[50%] h-full flex",
                                "max-mobile:w-full max-mobile:h-auto"
                            )}>
                                <SVGTubes />
                            </div>
                            <div className={cn(
                                "w-[50%] h-full flex",
                                "max-mobile:w-full max-mobile:h-auto"
                            )}>
                                <SVGBuilding />
                            </div>
                        </div>
                        <BlockPopUp />
                    </TransformComponent>
                </TransformWrapper >
            </div>
        </div >
    );
});

MapaSection.displayName = "MapaSection";