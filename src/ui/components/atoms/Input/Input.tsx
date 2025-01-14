"use client";

import { cn } from "@/src/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Input = ({ type, placeholder, value, onChange, className, ...props }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn(
                "text-regalBlack text-[1.8rem] font-[600] px-[1.6rem] py-[1rem] rounded-[.6rem]",
                "border-[0.1rem] border-regalBlack bg-regalWhite",
                "transition-all duration-300 ease-in-out",
                className
            )}
            {...props}
        />
    );
};