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
                destructive: "",
                outline: "",
                secondary: "",
                ghost: "",
                link: ""
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