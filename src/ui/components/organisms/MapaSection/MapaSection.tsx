"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { SVGTubes, SVGBuilding, BlockPopUp } from "@/src/ui/components/organisms";
import useBlockPosition from "@/store/useBlockPosition";

export const MapaSection = () => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);

    return (
        <div className="bg-[#96d55a]" >
            <TransformWrapper initialScale={1} minScale={.7} disabled={isBlockPopUp} doubleClick={{ disabled: true }}>
                <TransformComponent>
                    <div
                        className="flex flex-col justify-start items-start flex-grow  pt-[5rem] relative"
                    >
                        <div
                            className="flex-grow w-[100dvw] h-[calc(100dvh-5rem)] flex justify-center items-center"
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