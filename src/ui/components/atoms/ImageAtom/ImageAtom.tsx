"use client";

import Image from "next/image";

import { cn } from "@/src/utils/cn";

interface FillImageProps {
    src: string;
    alt: string;
    className?: string;
    cover?: boolean;
};

export const ImageAtom = ({ src, alt, className, cover }: FillImageProps) => {
    return (
        <Image src={src} alt={alt} fill className={cn(
            "object-center select-none pointer-events-none z-[-1]",
            cover ? "object-cover" : "object-contain",
            className
        )} />
    );
};