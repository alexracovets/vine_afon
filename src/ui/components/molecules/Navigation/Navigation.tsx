"use client";

import { NavigationLink } from "@/src/ui/components/atoms";

export const Navigation = () => {

    const links = [
        {
            name: "Лоза",
            href: "#",
            frame: false
        },
        {
            name: "Як це працює",
            href: "#",
            frame: false
        },
        {
            name: "Відео",
            href: "#",
            frame: false
        },
        {
            name: "Контакти",
            href: "#",
            frame: true
        }
    ];

    return (
        <nav>
            <ul className="flex">
                {links.map((link, idx) => (
                    <NavigationLink key={idx} name={link.name} href={link.href} frame={link.frame} />
                ))}
            </ul>
        </nav>
    )
};