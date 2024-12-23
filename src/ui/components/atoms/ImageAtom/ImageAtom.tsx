import Image from "next/image";

import { cn } from "@/lib/utils";

interface FillImageProps {
    src: string;
    alt: string;
    conver?: boolean;
};

export const ImageAtom = ({ src, alt, conver }: FillImageProps) => {
    return (
        <Image src={src} alt={alt} fill className={cn(
            "object-center",
            conver ? "object-cover" : "object-contain"
        )} />
    );
};