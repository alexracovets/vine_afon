"use client";

import { MouseEvent } from "react";

import useBlockPosition from "@/store/useBlockPosition";
import { cn } from "@/src/utils/cn";

interface PopupBlockBGProps {
    closePopUp: (e: MouseEvent<HTMLDialogElement> | MouseEvent<HTMLButtonElement>) => void;
}

export const PopupBlockBG = ({ closePopUp }: PopupBlockBGProps) => {
    const isActiveBlocks = useBlockPosition((state) => state.isActive);
    const isActiveMainBlock = useBlockPosition((state) => state.isMainBlockActive);

    return (
        <dialog
            onClick={closePopUp}
            className={cn(
                "w-full h-[100dvh] left-0 top-0 absolute flex justify-center items-center",
                isActiveBlocks || isActiveMainBlock ? "bg-bgDialog z-[0]" : "bg-transparent z-[-1]"
            )}
        />
    );
}