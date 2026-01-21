import React from 'react';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tap into the cloud. Accelerate your growth.",
  description: "Tap-IT helps ambitious businesses scale securely with future-ready IT infrastructure managed by experts.",
  openGraph: {
    title: "Tap into the cloud. Accelerate your growth.",
    description: "Tap-IT helps ambitious businesses scale securely with future-ready IT infrastructure managed by experts.",
    siteName: "Tap-IT",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://storage.googleapis.com/tap-it-assets-eu/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Removed scale-down-laptop from body so Home stays full scale */}
      <body className="antialiased font-sans overflow-x-hidden bg-white text-[#081A57]">
        {children}
      </body>
    </html>
  );
}