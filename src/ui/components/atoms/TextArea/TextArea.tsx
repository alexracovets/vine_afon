"use client";

import { cn } from "@/src/utils/cn";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

export const TextArea = ({ placeholder, value, onChange, className, ...props }: TextAreaProps) => {
    return (
        <textarea 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn(
                'text-[1.6rem] leading-[1.92rem] w-full text-regalBlack font-roboto p-[2rem] rounded-[1.3rem] mb-[2rem]',
                'max-mobile:text-[1.2rem] max-mobile:leading-[1.44rem] max-mobile:p-[1rem] max-mobile:rounded-[.6rem]',
                className
            )}
            {...props}
        />
    );
};