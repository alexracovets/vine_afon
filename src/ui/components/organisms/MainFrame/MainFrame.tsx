"use client";

import { Button, FrameInfoWrapper, FrameWrapper, Logo } from "@/src/ui/components/atoms";
import { Frame } from "@/src/ui/components/molecules";

import { cn } from "@/src/utils/cn";

export const MainFrame = () => {
    return (
        <FrameWrapper>
            <Frame />
            <FrameInfoWrapper>
                <p className={cn(
                    "text-[2.5rem] font-[300] leading-[1.3]",
                    "max-tablet:text-[1.4rem]",
                    "max-mobile:text-[1.2rem]"
                )}>
                    Винороби Афону у Відбудові
                </p>
                <Logo />
            </FrameInfoWrapper>
            <Button variant="outline">Посадити лозу</Button>
        </FrameWrapper>
    )
}