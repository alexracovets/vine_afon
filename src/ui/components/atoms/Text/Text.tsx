"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/cn";
import { createElement } from "react";

interface TextProps extends VariantProps<typeof textVariants> {
    children: React.ReactNode;
    className?: string;
    asChild?: keyof JSX.IntrinsicElements;
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
                progress: cn(
                    "text-[2.2rem] font-[600] leading-[1.2]",
                    "max-tablet:text-[1.2rem]",
                    "max-mobile:text-[1.6rem]"
                ),
                title: cn(
                    "text-[5rem] font-[500] leading-[1.1]",
                    "max-tablet:text-[2.4rem]",
                    "max-mobile:mb-[3rem]"
                ),
                info: cn(
                    "text-[1.8rem] leading-[1.22]",
                    "max-tablet:text-[1rem]",
                    "max-mobile:text-[1.2rem]"
                ),
            }
        },
        defaultVariants: {
            variant: "default"
        },
    }
);

export const Text = ({ children, className, variant, asChild = "p" }: TextProps) => {
    return createElement(
        asChild,
        {
            className: cn(textVariants({ variant, className }))
        },
        children
    );
};