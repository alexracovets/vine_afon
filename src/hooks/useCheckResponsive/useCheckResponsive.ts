"use client";

import { useEffect } from 'react';

import useResponsive from '@/store/useResponsive';

export const useCheckResponsive = () => {

  const setResponsive = useResponsive(state => state.setResponsive);

  useEffect(() => {
    const handleResize = () => setResponsive(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setResponsive]);

  return null;
};