"use client";

import { useState, useEffect } from 'react';
import useResponsive from '@/store/useResponsive';

export const useLoader = () => {
    const [loading, setLoading] = useState(true);
    const responsive = useResponsive(state => state.responsive);

    useEffect(() => {
        if (responsive === 'waiting') {
            setLoading(true);
        } else {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1);

            return () => clearTimeout(timer);
        }
    }, [responsive]);

    return loading;
};