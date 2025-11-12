import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flex Living - Reviews Dashboard",
  description: "Manage and display guest reviews for Flex Living properties",
  icons: {
    icon: "/flex-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Multiple favicon links and cache-bust query param to ensure browsers fetch the new image */}
        <link rel="icon" href="/flex-logo.jpeg?v=2" type="image/jpeg" sizes="32x32" />
        <link rel="shortcut icon" href="/flex-logo.jpeg?v=2" />
        <link rel="apple-touch-icon" href="/flex-logo.jpeg?v=2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
