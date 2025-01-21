"use client";

import { MdOutlineLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import Link from "next/link";

import { FooterLinksWrapper } from "@/src/ui/components/atoms";
import { cn } from "@/src/utils/cn";

export const FooterLinks = () => {

    const iconWrapperStyles = cn(
        'w-[3.6rem] h-[3.6rem] rounded-[1rem] bg-regalWhite flex justify-center items-center mr-[2rem]',
        'max-tablet:w-[1.8rem] max-tablet:h-[1.8rem] max-tablet:rounded-[.4rem] max-tablet:mr-[1.2rem]',
        'max-mobile:w-[2.4rem] max-mobile:h-[2.4rem] max-mobile:rounded-[.6rem]'
    );
    const icoStyles = cn(
        'w-[2rem] h-[2rem]',
        'max-tablet:w-[1.2rem] max-tablet:h-[1.2rem]',
        'max-mobile:w-[1.4rem] max-mobile:h-[1.4rem]'
    );

    const nameStyles = cn(
        'text-[2.2rem] text-regalWhite',
        'max-tablet:text-[1.2rem]',
        'max-mobile:text-[1.4rem]'
    );

    const links = [
        {
            icon: <MdOutlineLocalPhone className={icoStyles} />,
            name: "+38 (093) 157 57 37",
            href: "tel:+380931575737"
        },
        {
            icon: <MdOutlineAlternateEmail className={icoStyles} />,
            name: "pilgrimage_center@ukr.net",
            href: "mailto:pilgrimage_center@ukr.net"
        },
        {
            icon: <IoPlanet className={icoStyles} />,
            name: "Web",
            href: "http://www.vine-afon.com/"
        },
        {
            icon: <FaInstagram className={icoStyles} />,
            name: "Instagram",
            href: "https://www.instagram.com/vvzbir_afon?igsh=cXFwanQ3Y3ByMnNo"
        }
    ];

    return (
        <FooterLinksWrapper>
            {
                links.map((link, idx) => {
                    return (
                        <Link
                            key={idx}
                            href={link.href}
                            className="flex justify-start items-center w-[50%] max-mobile:w-full"
                            target='_blank'
                            rel="nofollow"
                        >
                            <div className={iconWrapperStyles}>{link.icon}</div>
                            <span className={nameStyles}>{link.name}</span>
                        </Link>
                    );
                })
            }
        </FooterLinksWrapper>
    );
};