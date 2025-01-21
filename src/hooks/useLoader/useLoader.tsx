"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import useResponsive from '@/store/useResponsive';
import useLoaderStore from '@/store/useLoaderStore';

export const useLoader = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const responsive = useResponsive(state => state.responsive);
    const mainIsLoad = useLoaderStore(state => state.mainIsLoad);
    const vineIsLoad = useLoaderStore(state => state.vineIsLoad);
    const isResponsiveIsLoad = useLoaderStore(state => state.responsiveIsLoad);
    const setIsResponsiveIsLoad = useLoaderStore(state => state.setIsResponsiveIsLoad);

    useEffect(() => {
        if (pathname === '/') {
            setLoading(!(mainIsLoad && isResponsiveIsLoad));
        } else if (pathname === '/vine') {
            if (vineIsLoad && isResponsiveIsLoad) {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
                setLoading(true)
            } else {
                setLoading(true)
            }
        }
    }, [pathname, mainIsLoad, vineIsLoad, isResponsiveIsLoad]);

    useEffect(() => {
        if (responsive === 'waiting') {
            setIsResponsiveIsLoad(false);
        } else {
            const timer = setTimeout(() => {
                setIsResponsiveIsLoad(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [setIsResponsiveIsLoad, responsive]);

    return loading;
};