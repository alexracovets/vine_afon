"use client";

import { Container, Logo } from "@/src/ui/components/atoms";
import { FooterLinks } from "@/src/ui/components/molecules";
import { cn } from "@/src/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const pathName = usePathname();
    const isMapaPage = pathName.includes('vine');
    const footerWrapperStyles = cn(
        'bg-regalBlack py-[5rem] max-tablet:py-[3rem] max-mobile:py-[3rem] flex-row justify-between items-center w-full',
        'max-mobile:flex-col max-mobile:justify-start max-mobile:items-start max-mobile:gap-y-[1.5rem]'
    );

    return (
        <>
            {
                !isMapaPage && <footer id="contacts">
                    <Container rounded className={footerWrapperStyles} >
                        <Link href="/#home">
                            <Logo isFooter />
                        </Link>
                        <FooterLinks />
                    </Container>
                </footer>
            }
        </>
    );
};