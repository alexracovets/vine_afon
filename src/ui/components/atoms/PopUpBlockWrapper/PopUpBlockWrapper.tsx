"use client";

import { MouseEvent } from "react";

import { cn } from "@/src/utils/cn";
import { BlockPositionType } from "@/src/types";

interface PopUpBlockWrapperProps {
    openPopUp: (e: MouseEvent<HTMLDialogElement>, idx: number) => void;
    isActiveBlock: boolean;
    block: BlockPositionType;
    active: boolean;
    reserved: boolean;
    buyed: boolean;
    idx: number;
    children: React.ReactNode;
}

export const PopUpBlockWrapper = ({ openPopUp, isActiveBlock, block, active, reserved, buyed, idx, children }: PopUpBlockWrapperProps) => {
    return (
        <dialog
            className={cn(
                "fixed transition-[transform left top width height] ease-in flex justify-center items-center will-change-contents outline",
                isActiveBlock ?
                    "duration-500 z-[10] rounded-[2rem]  outline-[.5rem] outline-[#efbf04]" :
                    "duration-300 z-[0] rounded-[.1rem] outline-[1px] outline-regalMain cursor-pointer",
                active && "bg-[#247616]",
                reserved && "bg-[#1f2b1d]",
                buyed && "bg-[#7b8618]",
                isActiveBlock && "bg-[#171717]",
                "block_shadow"
            )}
            onClick={(e) => openPopUp(e, idx)}
            style={{
                width: isActiveBlock ? "60rem" : block.width,
                height: isActiveBlock ? "35rem" : block.height,
                left: isActiveBlock ? "50%" : block.x,
                top: isActiveBlock ? "50%" : block.y,
                transform: isActiveBlock ? "translate(-50%, -50%)" : "translate(0%, 0%)",
            }}
        >
            {children}
        </dialog>
    );
};