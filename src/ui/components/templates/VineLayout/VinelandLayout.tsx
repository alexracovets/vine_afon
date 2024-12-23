"use client";

import { montserrat } from "@/src/ui/foundation/fonts";
import { ReactNode } from "react";

interface VinelandLayoutProps {
    children: ReactNode;
}

export const VinelandLayout = ({ children }: VinelandLayoutProps) => {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${montserrat.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}