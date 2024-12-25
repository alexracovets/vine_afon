"use client";

import useMobileMenu from "@/store/useMobileMenu";
import { useEffect } from "react";

export const useCheckModal = () => {
    const isOpenedMobileMenu = useMobileMenu((state) => state.isOpenedMobileMenu);

    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpenedMobileMenu) {
            body?.classList.add("overflow-hidden");
        } else {
            body?.classList.remove("overflow-hidden");
        }

    }, [isOpenedMobileMenu]);

    return null;
};