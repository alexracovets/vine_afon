"use client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Box, OrbitControls } from "@react-three/drei";

export const MapaSection = () => {

    return (
        <div
            className="flex flex-col justify-start items-start flex-grow bg-regalMain"
        >
            <Canvas
                linear={false}
                onCreated={({ gl }) => {
                    gl.toneMapping = THREE.NoToneMapping;
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                }}
            >
                <Box />
                <OrbitControls />

            </Canvas>
        </div>
    );
};