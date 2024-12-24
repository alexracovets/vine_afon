"use client";

import { Fade as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';

import useMobileMenu from '@/store/useMobileMenu'; 

import { cn } from '@/src/utils/cn';

export const Burger = () => {
    const [isOpen, setOpen] = useState(false);
    const setIsOpenMobileMenu = useMobileMenu((state) => state.setIsOpenMobileMenu);

    useEffect(() => {
        setIsOpenMobileMenu(isOpen);
    }, [isOpen, setIsOpenMobileMenu]);

    return (
        <div className={cn(
            'border-[2px] border-regalMain rounded-[10px]'
        )}>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#6a2841" size={18} />
        </div>
    );
};