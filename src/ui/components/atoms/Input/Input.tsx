"use client";

import { cn } from "@/src/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    value?: string;
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
                'text-[1.6rem] leading-[1.92rem] w-full text-regalBlack font-roboto p-[2rem] rounded-[1.3rem] block',
                'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:p-[1rem] max-mobile:rounded-[.6rem]',
                className
            )}
            {...props}
        />
    );
};