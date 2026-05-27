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
  title: "tako — Portfolio",
  description: "Product Designer & Developer. I build digital products at the edge of design and code.",
  openGraph: {
    title: "tako — Portfolio",
    description: "Product Designer & Developer. I build digital products at the edge of design and code.",
    url: "https://tako-portfolio-tau.vercel.app",
    siteName: "tako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tako — Portfolio",
    description: "Product Designer & Developer. I build digital products at the edge of design and code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
