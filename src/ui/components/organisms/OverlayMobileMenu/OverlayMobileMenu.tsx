"use client";

import { useEffect } from "react";

import { MenuOverlay, Navigation } from "@/src/ui/components/molecules";
import useMobileMenu from "@/store/useMobileMenu";
import useResponsive from "@/store/useResponsive";
import { useHeaderHeight } from "@/src/hooks";

export const OverlayMobileMenu = () => {
    const headerHeight = useHeaderHeight();
    const isOpenedMobileMenu = useMobileMenu((state) => state.isOpenedMobileMenu);
    const setIsOpenMobileMenu = useMobileMenu((state) => state.setIsOpenMobileMenu);
    const responsive = useResponsive((state) => state.responsive);

    useEffect(() => {
        if (responsive !== "mobile") setIsOpenMobileMenu(false);
    }, [responsive, setIsOpenMobileMenu]);

    return (
        <MenuOverlay
            isOpen={isOpenedMobileMenu}
            headerHeight={headerHeight}
        >
            <Navigation />
        </MenuOverlay>
    );
};