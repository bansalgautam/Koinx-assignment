import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import SideCard from "@/components/side-card/side-card";
import TrendingCoins from "@/components/trending-coins/trending-coins";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX Assignment",
  description: "Assignment submission for KoinX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#EFF2F5] antialiased overflow-x-hidden no-scrollbar",
          inter.className
        )}
      >
        <Header />
        <div className="py-4 md:px-2 max-w-[1368px] md:mx-auto flex flex-col lg:flex-row w-[100vw] gap-4">
          <div className="flex-1 md:flex-[7]">{children}</div>
          <div className="flex flex-1 lg:flex-[3] flex-col gap-4 py-9">
            <SideCard />
            <TrendingCoins />
          </div>
        </div>
      </body>
    </html>
  );
}
