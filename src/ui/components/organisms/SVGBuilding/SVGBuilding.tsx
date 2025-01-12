"use client";

import { Building, DoorBuilding, DownBuilding } from "./AssetsBuilding";
import { BuildingBlocks } from "./AssetsBuilding/BuildingBlocks";

export const SVGBuilding = () => {

    return (
        <svg width="100%" viewBox="0 0 960 1080" className="flex-grow h-full max-h-full"> 
            <Building />
            <g clipPath="url(#buildingClip)">
                <DownBuilding />
                <BuildingBlocks />
                <DoorBuilding />
            </g>
        </svg>
    );
};