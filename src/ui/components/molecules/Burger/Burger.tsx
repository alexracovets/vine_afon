"use client";

import { Fade as Hamburger } from 'hamburger-react';
import { Dispatch, SetStateAction } from "react";

import useMobileMenu from '@/store/useMobileMenu';

import { cn } from '@/src/utils/cn';

export const Burger = () => {
    const setIsOpenMobileMenu = useMobileMenu((state) => state.setIsOpenMobileMenu);
    const isOpen = useMobileMenu((state) => state.isOpenedMobileMenu);

    const toggleMenu: Dispatch<SetStateAction<boolean>> = (valueOrFn) => {
        if (typeof valueOrFn === "function") {
            setIsOpenMobileMenu(valueOrFn(isOpen));
        } else {
            setIsOpenMobileMenu(valueOrFn);
        }
    };

    return (
        <div className={cn(
            'border-[2px] border-regalMain rounded-[10px]'
        )}>
            <Hamburger toggled={isOpen} toggle={toggleMenu} color="#6a2841" size={18} />
        </div>
    );
};