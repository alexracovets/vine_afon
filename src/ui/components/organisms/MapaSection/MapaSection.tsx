"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { SVGTubes, SVGBuilding, BlockPopUp } from "@/src/ui/components/organisms";

export const MapaSection = () => {

    return (
        <div className="bg-[#96d55a]">
            <TransformWrapper initialScale={1} minScale={.7}>
                <TransformComponent>
                    <div
                        className="flex flex-col justify-start items-start flex-grow pt-[10rem] relative"
                    >
                        <div
                            className="flex-grow w-[100dvw] h-[calc(100dvh-10rem)] flex justify-center items-center"
                        >
                            <div className="w-[50%] h-full flex flex-col justify-center">
                                <SVGTubes />
                            </div>
                            <div className="w-[50%] flex h-full">
                                <SVGBuilding />
                            </div>
                        </div>
                        <BlockPopUp />
                    </div >
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};