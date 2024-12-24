"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/cn";

interface TextProps extends VariantProps<typeof textVariants> {
    children: React.ReactNode;
    className?: string;
}

const textVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "",
                frame: cn(
                    "text-[2.5rem] font-[300] leading-[1.3]",
                    "max-tablet:text-[1.4rem]",
                    "max-mobile:text-[1.2rem]"
                ),
            }
        },
        defaultVariants: {
            variant: "default"
        },
    }
);

export const Text = ({ children, className, variant }: TextProps) => {
    return (
        <p className={cn(textVariants({ variant, className }))}>
            {children}
        </p>
    );
};