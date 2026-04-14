import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "My BTS Website",
    template: "%s | My BTS Website",
  },
  description: "Joyce's BTS website, dedicated to her ult bias V (Kim Taehyung).",
  openGraph: {
    title: "My BTS Website",
    description: "Joyce's BTS website, dedicated to her ult bias V (Kim Taehyung).",
    url: "/",
    siteName: "My BTS Website",
    images: [
      {
        url: "/share-image.jpeg",
        width: 1200,
        height: 630,
        alt: "My BTS Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My BTS Website",
    description: "Joyce's BTS website, dedicated to her ult bias V (Kim Taehyung).",
    images: ["/share-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
