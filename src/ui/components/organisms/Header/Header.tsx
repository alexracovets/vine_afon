"use client";

import { Container, Logo } from "@/src/ui/components/atoms";
import { Navigation } from "@/src/ui/components/molecules";
import { cn } from "@/src/utils/cn";

export const Header = () => {

    return (
        <header className='absolute left-0 top-0 w-full'>
            <Container className="pt-[1rem]">
                <div className={cn(
                    "flex justify-between items-center bg-regalWhite rounded-[3rem] px-[4.6rem] py-[2rem]",
                    "max-tablet:px-[2.2rem] max-tablet:py-[1.5rem] max-tablet:rounded-[2rem]"
                )}>
                    <Logo header />
                    <Navigation />
                </div>
            </Container>
        </header>
    )
};