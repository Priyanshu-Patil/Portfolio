import type { Metadata } from "next";
import "./globals.css";

import { Inter, Calistoga, Host_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/activeSectionContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const hostGrotesk = Host_Grotesk({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "Priyanshu Patil — Software Engineer | Frontend Developer",
  description: "Creative Frontend Developer",
  icons: {
    icon: "/my-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          hostGrotesk.variable,
          "bg-gray-950 text-white font-sans"
        )}
      >
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
