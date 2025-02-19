"use client";

import Link from "next/link";

import useMobileMenu from "@/store/useMobileMenu";
import { cn } from "@/src/utils/cn";
import { useEffect, useState } from "react";

interface NavigationLinkProps {
    href: string;
    name: string;
    frame: boolean;
}

export const NavigationLink = ({ href, name, frame }: NavigationLinkProps) => {
    const setMobileMenu = useMobileMenu((state) => state.setIsOpenMobileMenu);
    const [isFrame, setIsFrame] = useState(false);

    const clickHandler = () => {
        setMobileMenu(false);
    };

    useEffect(() => {
        setIsFrame(frame);
    }, [frame]);

    return (
        <li
            className={cn(
                isFrame && "border-[0.1rem] border-regalBlack rounded-[1rem] ml-[1.4rem]",
                isFrame && "transition duration-300 ease-in-out",
                isFrame && "hover:bg-regalMain hover:text-regalWhite",
                isFrame && "max-tablet:rounded-[.5rem] max-mobile:w-[13rem]",
            )}
        >
            <Link
                href={href}
                title={name}
                onClick={clickHandler}
                className={cn(
                    "hover:font-[600] before:block before:content-[attr(title)] before:font-[600] before:h-0 before:overflow-hidden before:invisible",
                    "text-[1.8rem] px-[2.4rem] py-[1.4rem] block",
                    "max-tablet:text-[1rem] max-tablet:px-[1rem] max-tablet:py-[.6rem]",
                    "max-mobile:text-[1.8rem] max-mobile:py-[1rem] max-mobile:px-[2rem]"
                )}>
                {name}
            </Link>
        </li>
    )
};