"use client";

import { useEffect, useRef } from "react";
import Headroom from "react-headroom";
import useMobileMenu from "@/store/useMobileMenu";

interface HeaderHeadroomProps {
    children: React.ReactNode;
}

interface HeadroomRef extends Headroom {
    pin: () => void;
    unpin: () => void;
}

export const HeaderHeadroom = ({ children }: HeaderHeadroomProps) => {
    const headroomRef = useRef<HeadroomRef | null>(null);
    const isOpenedMobileMenu = useMobileMenu((state) => state.isOpenedMobileMenu);

    useEffect(() => {
        const headroom = headroomRef.current;

        if (headroom && isOpenedMobileMenu) {
            headroom.pin();
        }
    }, [isOpenedMobileMenu]);

    return (
        <Headroom ref={headroomRef}>
            {children}
        </Headroom>
    );
};
