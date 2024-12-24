"use client";

import { ImageAtom } from "@/src/ui/components/atoms";

export const Frame = () => {
    return (
        <>
            <ImageAtom src="/StartSection/frame/frame.svg" alt="frame" className="max-tablet:hidden" />
            <ImageAtom src="/StartSection/frame/frame_tablet.svg" alt="frame" className="hidden max-tablet:block" />
        </>
    )
};