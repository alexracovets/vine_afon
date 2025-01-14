"use client";

import { Building, DoorBuilding, DownBuilding, ActiveBlocks, BuildingBlocks } from "./AssetsBuilding";

export const SVGBuilding = () => {

    return (
        <svg width="100%" className="flex-grow h-full max-h-full">
            <Building />
            <g clipPath="url(#buildingClip)">
                <DownBuilding />
                <BuildingBlocks />
                <DoorBuilding />
                <ActiveBlocks />
            </g>
        </svg>
    );
};