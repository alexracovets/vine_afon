"use client";

import { useState, useEffect } from 'react';

export const useHeaderHeight = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    const checkHeaderHeight = () => {
        const header = document.querySelector("header");
        if (header) setHeaderHeight(header.clientHeight);
    };

    useEffect(() => {
        const handleResize = () => checkHeaderHeight();
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return headerHeight;
};