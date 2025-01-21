"use client";

import useResponsive from '@/store/useResponsive';
import { cn } from "@/src/utils/cn";

interface PopUpBlockWrapperProps {
    children: React.ReactNode;
    isActive: boolean;
    active: boolean;
    reserved: boolean;
    buyed: boolean;
    mainBlock: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    openPopUp: (value: boolean) => void;
}

export const PopUpBlockWrapperMain = ({ isActive, active, reserved, buyed, mainBlock, openPopUp, children }: PopUpBlockWrapperProps) => {
    const responsive = useResponsive(state => state.responsive);

    return (
        <dialog
            className={cn(
                "absolute transition-[transform left top width height] ease-in flex justify-center items-center will-change-contents outline overflow-hidden",
                isActive ?
                    "duration-500 z-[10] rounded-[2rem]  outline-[.5rem] outline-[#efbf04] bg-[#171717]" :
                    "duration-300 z-[0] rounded-[.1rem] outline-[1px] outline-regalMain cursor-pointer",
                active && "bg-[#247616]",
                reserved && "bg-[#1f2b1d]",
                buyed && "bg-[#7b8618]",
                "block_shadow"
            )}
            onClick={() => openPopUp(true)}

            style={{
                width: responsive === "mobile" ? (isActive ? "95%" : mainBlock.width) : (isActive ? "60rem" : mainBlock.width),
                height: responsive === "mobile" ? (isActive ? "70dvh" : mainBlock.height) : (isActive ? "50rem" : mainBlock.height),
                left: isActive ? "50%" : mainBlock.x,
                top: isActive ? "50%" : mainBlock.y,
                transform: isActive ? "translate(-50%, -50%)" : "translate(0%, 0%)",
            }}
        >
            {children}
        </dialog>
    );
};