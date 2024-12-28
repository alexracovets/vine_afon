"use client";

import { Navigation, Burger, HeaderHeadroom } from "@/src/ui/components/molecules";
import { Container, HeaderWrapper, Logo } from "@/src/ui/components/atoms";

import useResponsive from '@/store/useResponsive';

export const Header = () => {
    const responsive = useResponsive(state => state.responsive);

    return (
        <header className='absolute left-0 top-0 w-full max-mobile:relative'>
            <HeaderHeadroom>
                <Container className="pt-[1rem] max-mobile:pt-0 max-mobile:px-0 relative">
                    <HeaderWrapper>
                        <Logo isHeader />
                        {responsive !== "mobile" && <Navigation />}
                        {responsive === "mobile" && <Burger />}
                    </HeaderWrapper>
                </Container>
            </HeaderHeadroom>
        </header >
    );
};