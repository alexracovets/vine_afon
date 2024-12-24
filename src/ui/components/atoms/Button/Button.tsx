"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { MdArrowOutward } from "react-icons/md";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/src/utils/cn";

const buttonVariants = cva(
    "inline-flex items-center justify-center border-[0.1rem] border-regalBlack bg-transperant",
    {
        variants: {
            variant: {
                default: "",
                destructive: "",
                outline: cn(
                    "transition-all duration-300 ease-in-out hover:text-regalWhite hover:bg-regalMain",
                    "text-[2.2rem] font-[600] px-[3rem] py-[1.65rem] rounded-[1rem]",
                    "max-tablet:text-[1.8rem] max-tablet:px-[1.6rem] max-tablet:py-[.8rem] max-tablet:rounded-[.6rem]"
                ),
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
        const [isHover, setIsHover] = React.useState(false);
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                onPointerEnter={() => setIsHover(true)}
                onPointerLeave={() => setIsHover(false)}
                ref={ref}>
                <span
                    className={cn(
                        'transition-all duration-300 ease-in',
                        'max-mobile:text-regalWhite',
                        isHover ? 'translate-x-[1.8rem] text-regalWhite max-tablet:translate-x-[1.2rem] max-mobile:translate-x-[.9rem]' : 'translate-x-[0rem]',
                    )}
                >
                    {props.children}
                </span>
                <MdArrowOutward
                    color={isHover ? variant === 'default' ? '#FFFFFF' : '' : variant === 'default' ? '#171717' : ''}
                    className={cn(
                        'w-[2.8rem] h-[2.8rem] ml-[.8rem] transition-all duration-300 ease-out delay-300',
                        'max-tablet:w-[1.6rem] max-tablet:h-[1.6rem] max-tablet:ml-[.4rem] max-mobile:text-regalWhite',
                        'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem] max-mobile:ml-[.2rem]',
                        isHover ? 'opacity-[0] text-regalWhite translate-x-[3rem] translate-y-[-3rem]' : 'opacity-[1] translate-x-[0rem] translate-y-[0rem]'
                    )} />
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
