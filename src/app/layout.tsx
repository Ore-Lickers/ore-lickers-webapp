import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Provider } from "@/utils/providers";
import Header from "@/components/header/header";
import { ThemeInit } from "@/../.flowbite-react/init";
import FooterComponent from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ore Lickers",
  description: "EvE Online - Ore Lickers Corporation",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider>
        <body className={inter.className}>
          <ThemeInit />
          <Header />
          <div className="p-16 sm:ml-64">
            <div className="page-content">{children}</div>

            <FooterComponent />
          </div>
        </body>
      </Provider>
    </html>
  );
}
