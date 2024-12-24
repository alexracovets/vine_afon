"use client";

import Headroom from 'react-headroom';

import { Container, HeaderWrapper, Logo } from "@/src/ui/components/atoms";
import { Navigation, Burger } from "@/src/ui/components/molecules";

import useResponsive from '@/store/useResponsive';

export const Header = () => {
    const responsive = useResponsive(state => state.responsive);

    return (
        <header className='relative w-full max-mobile:relative'>
            <Headroom>
                <Container className="pt-[1rem] max-mobile:pt-0 max-mobile:px-0 relative">
                    <HeaderWrapper>
                        <Logo header />
                        {responsive !== "mobile" && <Navigation />}
                        {responsive === "mobile" && <Burger />}
                    </HeaderWrapper>
                </Container>
            </Headroom>
        </header >
    )
};