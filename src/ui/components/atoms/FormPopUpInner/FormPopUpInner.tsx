"use client";

import { cn } from "@/src/utils/cn";

interface FormPopUpInnerProps {
    children: React.ReactNode;
}

export const FormPopUpInner = ({ children }: FormPopUpInnerProps) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={cn(
                "max-h-[100%] overflow-y-hidden",
                'relative w-[65.8rem] bg-regalBlack rounded-[4rem] py-[7rem] px-[5rem] flex flex-col justify-center items-center',
                'max-mobile:w-full max-mobile:h-full max-mobile:rounded-none max-mobile:px-[2rem]'
            )}
        >
            {children}
        </div>
    );
};