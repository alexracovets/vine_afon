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
                    "text-[1.8rem] leading-[1.3]",
                    "max-tablet:text-[1rem]",
                    "max-mobile:text-[1.2rem]"
                ),
                acordionTitle: cn(
                    "text-[3rem] font-[600] leading-[1]",
                    "max-tablet:text-[2rem]",
                    "max-mobile:text-[1.6rem]"
                ),
                activeBlockNumber: cn(
                    "text-[4rem] font-[600] text-regalWhite leading-[1]",
                ),
                activeBlockName: cn(
                    "text-[3rem] font-[600] text-regalWhite leading-[1]",
                ),
                activeBlockNameFill: cn(
                    "text-[5rem] font-[600] text-[#efbf04] leading-[1]",
                ),
                activeBlock: cn(
                    "text-[1rem] font-[600] textShadow leading-[1]",
                ),
                popUpError: cn(
                    "text-[1.5rem] font-[600] text-red-500 leading-[1] block w-full py-[.2rem]",
                ),
                formTitle: cn(
                    'text-[4.321rem] text-regalWhite text-center font-[600] leading-[4.754rem] mb-[2rem]',
                    'max-mobile:text-[2rem] max-mobile:leading-[2.2rem]'
                ),
                formSubTitle: cn(
                    'text-[1.6rem] text-center text-regalWhite font-[300] leading-[1.92rem] mb-[3rem] w-[45.3rem] mx-auto',
                    'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:w-full'
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