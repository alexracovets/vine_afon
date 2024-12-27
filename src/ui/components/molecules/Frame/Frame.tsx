"use client";

import { ImageAtom } from "@/src/ui/components/atoms";

import useResponsive from '@/store/useResponsive';

export const Frame = () => {
    const responsive = useResponsive(state => state.responsive);

    return (
        <>
            {responsive === "desktop" && <ImageAtom src="/startSection/frame/frame.svg" alt="frame" />}
            {responsive === "tablet" && <ImageAtom src="/startSection/frame/frame_tablet.svg" alt="frame" />}
            {responsive === "mobile" && <ImageAtom src="/startSection/frame/frame_mobile.svg" alt="frame" />}
        </>
    )
};