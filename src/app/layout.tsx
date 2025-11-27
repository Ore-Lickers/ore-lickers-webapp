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
          <main className="flex flex-col bg-[url(/space-background.jpg)] min-h-screen">
            <div className="container mx-auto bg-black p-16 pt-20">
              <div className="page-content">{children}</div>
              <FooterComponent />
            </div>
          </main>
        </body>
      </Provider>
    </html>
  );
}
