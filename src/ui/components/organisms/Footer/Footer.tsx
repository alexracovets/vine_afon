"use client";

import { Container, Logo } from "@/src/ui/components/atoms";
import { FooterLinks } from "@/src/ui/components/molecules";
import { cn } from "@/src/utils/cn";

export const Footer = () => {

    const footerWrapperStyles = cn(
        'bg-regalBlack py-[5rem] max-tablet:py-[3rem] max-mobile:py-[3rem] flex-row justify-between items-center w-full',
        'max-mobile:flex-col max-mobile:justify-start max-mobile:items-start max-mobile:gap-y-[1.5rem]'
    );

    return (
        <footer>
            <Container rounded className={footerWrapperStyles} >
                <Logo isFooter />
                <FooterLinks />
            </Container>
        </footer>
    )
};