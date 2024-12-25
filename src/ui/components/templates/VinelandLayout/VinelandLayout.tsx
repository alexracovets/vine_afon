"use client";

import { ReactNode } from "react";

import { Footer, Header, OverlayMobileMenu } from "@/src/ui/components/organisms";
import { montserrat } from "@/src/ui/foundation/fonts";
import { useCheckModal, useCheckResponsive } from "@/src/hooks";

interface VinelandLayoutProps {
    children: ReactNode;
}

export const VinelandLayout = ({ children }: VinelandLayoutProps) => {

    useCheckResponsive();
    useCheckModal();
    
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${montserrat.className} antialiased`}>
                <Header />
                <main>
                    {children}
                    <OverlayMobileMenu />
                </main>
                <Footer />
            </body>
        </html>
    );
}