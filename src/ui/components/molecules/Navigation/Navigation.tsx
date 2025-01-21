"use client";

import { NavigationLink } from "@/src/ui/components/atoms";

export const Navigation = () => {

    const links = [
        {
            name: "Лоза",
            href: "/vine",
            frame: false
        },
        {
            name: "Як це працює",
            href: "/#work",
            frame: false
        },
        {
            name: "Відео",
            href: "/#video",
            frame: false
        },
        {
            name: "Контакти",
            href: "/#contacts",
            frame: true
        }
    ];

    return (
        <nav className="max-mobile:w-full max-mobile:flex">
            <ul className="flex max-mobile:flex-col max-mobile:w-full max-mobile:justify-center max-mobile:flex-grow">
                {links.map((link, idx) => (
                    <NavigationLink key={idx} name={link.name} href={link.href} frame={link.frame} />
                ))}
            </ul>
        </nav>
    )
};