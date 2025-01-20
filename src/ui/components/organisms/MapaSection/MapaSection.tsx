"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { SVGTubes, SVGBuilding, BlockPopUp } from "@/src/ui/components/organisms";

import useBlockPosition from "@/store/useBlockPosition";

export const MapaSection = () => {
    const isBlockPopUp = useBlockPosition((state) => state.isActive);



    return (
        <div className="bg-[#96d55a]" >
            <Canvas >
                <Html
                    as="div"
                    zIndexRange={[0, -1]}
                    fullscreen
                    className="flex flex-col justify-start items-start flex-grow relative">
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
                                    className="flex-grow w-[100dvw] h-[100dvh] flex justify-center items-center"
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
                    </TransformWrapper >
                </Html>
            </Canvas>
        </div >
    );
};