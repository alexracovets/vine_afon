import type { Metadata } from "next";

import { VinelandLayout } from "@/src/ui/components/templates";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Vine of Athos",
  description: "Vine of Athos - винороби Афону у Відбудові",
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <VinelandLayout>
      {children}
    </VinelandLayout>
  );
}
