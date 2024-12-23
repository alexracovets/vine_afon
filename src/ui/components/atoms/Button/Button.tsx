import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/utils/cn";

const buttonVariants = cva(
    "inline-flex items-center justify-center",
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

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
export { Button, buttonVariants };
