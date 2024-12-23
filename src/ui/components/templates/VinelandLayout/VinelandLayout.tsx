"use client";

import { ReactNode } from "react";

import { Footer, Header } from "@/src/ui/components/organisms";
import { montserrat } from "@/src/ui/foundation/fonts";

interface VinelandLayoutProps {
    children: ReactNode;
}

export const VinelandLayout = ({ children }: VinelandLayoutProps) => {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${montserrat.className} antialiased`}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}