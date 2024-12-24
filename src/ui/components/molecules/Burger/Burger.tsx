"use client";

import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';

import { cn } from '@/src/utils/cn';

export const Burger = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={cn(
            'border-[2px] border-regalMain rounded-[10px]'
        )}>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#6a2841" size={18} />
        </div>
    );
};