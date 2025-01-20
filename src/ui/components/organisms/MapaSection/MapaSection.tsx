"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { SVGTubes, SVGBuilding, BlockPopUp } from "@/src/ui/components/organisms";

import useBlockPosition from "@/store/useBlockPosition";
import { cn } from "@/src/utils/cn";

export const MapaSection = () => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);

    return (
        <div className="bg-[#96d55a]">
            <Canvas>
                <Html
                    as="div"
                    zIndexRange={[0, -1]}
                    fullscreen
                    transform={false}
                    wrapperClass="w-full h-full flex"
                    className="flex flex-col justify-start items-start relative flex-grow">

                    <TransformWrapper
                        smooth={false}
                        initialScale={1}
                        disabled={isBlockPopUp}
                        doubleClick={{ disabled: true }}
                    >
                        <TransformComponent>
                            <div
                                className="flex flex-col justify-start items-start flex-grow relative"
                            >
                                <div
                                    className={cn(
                                        "flex-grow w-[100dvw] h-[100dvh] flex justify-center items-center",
                                        "max-tablet:flex-col-reverse"
                                    )}
                                >
                                    <div className={cn(
                                        "w-[50%] h-full flex",
                                        "max-tablet:w-full max-tablet:h-[50dvh]"
                                    )}>
                                        <SVGTubes />
                                    </div>
                                    <div className={cn(
                                        "w-[50%] h-full flex",
                                        "max-tablet:w-full max-tablet:h-[50dvh]"
                                    )}>
                                        <SVGBuilding />
                                    </div>
                                </div>
                                <BlockPopUp />
                            </div >
                        </TransformComponent>
                    </TransformWrapper >
                </Html>
            </Canvas>
        </div >
    );
};