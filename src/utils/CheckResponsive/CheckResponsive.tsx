'use client';

import React, { useEffect } from 'react';

import useResponsive from '@/store/useResponsive';

export const CheckResponsive: React.FC = () => {
    const setResponsive = useResponsive(state => state.setResponsive);

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [setResponsive]);

    return null;
};