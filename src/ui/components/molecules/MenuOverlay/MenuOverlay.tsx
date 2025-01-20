"use client";

import { cn } from "@/src/utils/cn";

interface MenuOverlayProps {
    isOpen: boolean;
    headerHeight: number;
    children: React.ReactNode;
}

export const MenuOverlay = ({ isOpen, headerHeight, children }: MenuOverlayProps) => {

    return (
        <dialog
            style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }}
            className={cn(
                "transition-all duration-300 ease-in-out",
                "fixed left-0 flex-grow w-full max-h-max bg-white z-[10] flex",
                isOpen ? "translate-x-0" : "translate-x-[150%]"
            )}
        >
            {children}
        </dialog>
    );
};