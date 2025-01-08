"use client";

import { SVGTubes } from "@/src/ui/components/organisms";

// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei";
// import { PumpsThree } from "@/src/ui/components/organisms/PumpsThree";

export const MapaSection = () => {

    return (
        <div
            className="flex flex-col justify-start items-start flex-grow bg-[#96d55a]"
        >
            {/* <Canvas
                linear={false}
                onCreated={({ gl }) => {
                    gl.toneMapping = THREE.NoToneMapping;
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                }}
                camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
            >
                <OrbitControls
                    enableRotate={false}
                />
                <PumpsThree />
            </Canvas> */}

            <div
                className="flex-grow w-full h-full flex justify-center items-center"
            >
                <div className="w-[50%] flex flex-col">
                    <SVGTubes num={0} />
                    <SVGTubes num={1} />
                    <SVGTubes num={2} />
                </div>
                <div className="w-[50%]">

                </div>
            </div>
        </div>
    );
};