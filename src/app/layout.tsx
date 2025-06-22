import type { Metadata } from "next";
import "./globals.css";

import { Inter, Calistoga, Host_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          hostGrotesk.variable,
          "bg-gray-950 text-white font-sans"
        )}
      >
        <ActiveSectionContextProvider>
          {children}
          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
