import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build2Break 2026 - OSDG Hackathon | January 6-9, Las Vegas",
  description: "Join the premier Build2Break hackathon by OSDG Club. January 6-9, 2026 in Las Vegas, NV. Register now for the opportunity of a lifetime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
