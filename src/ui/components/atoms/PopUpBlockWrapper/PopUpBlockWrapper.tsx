"use client";

import { MouseEvent } from "react";

import { cn } from "@/src/utils/cn";
import { BlockPositionType } from "@/src/types";
import useResponsive from '@/store/useResponsive';

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
    const responsive = useResponsive(state => state.responsive);

    return (
        <dialog
            className={cn(
                "absolute transition-all duration-500 ease-in flex justify-center items-center will-change-contents outline",
                isActiveBlock ?
                    "z-[10] rounded-[2rem] outline-[.5rem] outline-[#efbf04]" :
                    "z-[0] rounded-[.1rem] outline-[1px] outline-regalMain cursor-pointer",
                active && "bg-[#247616]",
                reserved && "bg-[#1f2b1d]",
                buyed && "bg-[#7b8618]",
                isActiveBlock && "bg-[#171717]",
                "block_shadow"
            )}
            onClick={(e) => openPopUp(e, idx)}
            style={{
                width: responsive === "mobile" ? (isActiveBlock ? "95%" : block.width - 1) : (isActiveBlock ? "60rem" : block.width - 1),
                height: responsive === "mobile" ? (isActiveBlock ? "70dvh" : block.height - 1) : (isActiveBlock ? "35rem" : block.height - 1),
                left: isActiveBlock ? "50%" : block.x + 0.5,
                top: isActiveBlock ? "50%" : block.y + 0.5,
                transform: isActiveBlock ? "translate(-50%, -50%)" : "translate(0%, 0%)",
            }}
        >
            {children}
        </dialog>
    );
};