"use client";

import useMobileMenu from "@/store/useMobileMenu";
import { useEffect } from "react";
import { useLoader } from "../useLoader";

export const useCheckModal = () => {
    const isOpenedMobileMenu = useMobileMenu((state) => state.isOpenedMobileMenu);
    const isLoader = useLoader();

    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpenedMobileMenu || isLoader) {
            body?.classList.add("overflow-hidden");
        } else {
            body?.classList.remove("overflow-hidden");
        }

    }, [isOpenedMobileMenu, isLoader]);

    return null;
};