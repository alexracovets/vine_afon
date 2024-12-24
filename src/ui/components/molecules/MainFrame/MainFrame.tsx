"use client";

import { Button, Logo } from "@/src/ui/components/atoms";
import { Frame } from "@/src/ui/components/molecules";

import { cn } from "@/src/utils/cn";

export const MainFrame = () => {
    return (
        <div
            className={cn(
                "relative flex flex-col justify-end items-start",
                "w-[54.5rem] h-[33.7rem] pb-[5.8rem] pl-[11rem] pr-[11rem] gap-y-[2rem]",
                "max-tablet:w-[32.8rem] max-tablet:h-[17rem] max-tablet:pl-[7rem] max-tablet:pr-[3rem] max-tablet:pb-[2rem] max-tablet:gap-y-[1rem]"
            )}
        >
            <Frame />
            <div
                className="flex justify-between items-center gap-x-[3rem]"
            >
                <p className={cn(
                    "text-[2.5rem] font-[300] leading-[1.3]",
                    "max-tablet:text-[1.4rem]"
                )}>Винороби Афону у Відбудові</p>
                <Logo />
            </div>
            <Button variant="outline">Посадити лозу</Button>
        </div>
    )
}