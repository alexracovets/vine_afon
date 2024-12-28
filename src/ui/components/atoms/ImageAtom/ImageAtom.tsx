"use client";

import Image from "next/image";

import { cn } from "@/src/utils/cn";

interface FillImageProps {
    src: string;
    alt: string;
    className?: string;
    cover?: boolean;
    priority?: boolean;
};

export const ImageAtom = ({ src, alt, className, cover, priority }: FillImageProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn(
                "object-center select-none pointer-events-none z-[-1]",
                cover ? "object-cover" : "object-contain",
                className
            )} />
    );
};