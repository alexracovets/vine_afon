"use client";

import { Building, DoorBuilding, DownBuilding, ActiveBlocks, BuildingBlocks } from "./AssetsBuilding";

export const SVGBuilding = () => {

    return (
        <svg width="100%" className="flex-grow h-full max-h-full">
            <g transform="translate(0, -100)">
                <Building />
                <g clipPath="url(#buildingClip)">
                    <DownBuilding />
                    <BuildingBlocks />
                    <DoorBuilding />
                    <ActiveBlocks />
                </g> 
            </g> 
        </svg>
    );
};