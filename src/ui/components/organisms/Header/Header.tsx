"use client";

import { Container, HeaderWrapper, Logo } from "@/src/ui/components/atoms";
import { Navigation, Burger } from "@/src/ui/components/molecules";

import useResponsive from '@/store/useResponsive';

export const Header = () => {
    const responsive = useResponsive(state => state.responsive);

    return (
        <header className='absolute left-0 top-0 w-full max-mobile:relative'>
            <Container className="pt-[1rem] max-mobile:pt-0 max-mobile:px-0">
                <HeaderWrapper>
                    <Logo header />
                    {(responsive === "desktop" || responsive === "tablet") && <Navigation />}
                    {responsive === "mobile" && <Burger />}
                </HeaderWrapper>
            </Container>
        </header >
    )
};