"use client";

import Image from "next/image";

import { cn } from "@/src/utils/cn";

interface FillImageProps {
    src: string;
    alt: string;
    className?: string;
    cover?: boolean;
    onLoad?: () => void;
};

export const ImageAtom = ({ src, alt, className, cover, onLoad }: FillImageProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100%"
            onLoad={onLoad}
            className={cn(
                "object-center select-none pointer-events-none z-[-1]",
                cover ? "object-cover" : "object-contain",
                className
            )} />
    );
};