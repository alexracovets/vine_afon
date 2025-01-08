"use client";

import { SVGTubes, SVGBuilding } from "@/src/ui/components/organisms";

export const MapaSection = () => {

    return (
        <div
            className="flex flex-col justify-start items-start flex-grow bg-[#96d55a]"
        >
            <div
                className="flex-grow w-full h-[100dvh] flex justify-center items-center"
            >
                <div className="w-[50%] h-full flex flex-col justify-center">
                    <SVGTubes num={0} />
                    <SVGTubes num={1} />
                    <SVGTubes num={2} />
                </div>
                <div className="w-[50%] flex h-full">
                    <SVGBuilding />
                </div>
            </div>
        </div>
    );
};