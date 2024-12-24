"use client";

import { cn } from "@/src/utils/cn";
import Link from "next/link";

interface NavigationLinkProps {
    href: string;
    name: string;
    frame: boolean;
}

export const NavigationLink = ({ href, name, frame }: NavigationLinkProps) => {

    return (
        <li
            className={cn(
                frame && "border-[0.1rem] border-regalBlack rounded-[1rem] ml-[1.4rem]",
                frame && "transition duration-300 ease-in-out",
                frame && "hover:bg-regalMain hover:text-regalWhite",
                frame && "max-tablet:rounded-[.5rem]",
            )}
        >
            <Link
                href={href}
                title={name}
                className={cn(
                    "hover:font-[600] before:block before:content-[attr(title)] before:font-[600] before:h-0 before:overflow-hidden before:invisible",
                    "text-[1.8rem] px-[2.4rem] py-[1.4rem] block",
                    "max-tablet:text-[1rem] max-tablet:px-[1rem] max-tablet:py-[.6rem]",

                )}>
                {name}
            </Link>
        </li>
    )
};