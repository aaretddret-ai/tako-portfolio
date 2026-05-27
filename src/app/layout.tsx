import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "tako — Portfolio",
  description:
    "Product Designer & Developer. I build digital products at the edge of design and code.",
  openGraph: {
    title: "tako — Portfolio",
    description:
      "Product Designer & Developer. I build digital products at the edge of design and code.",
    url: "https://tako-portfolio-tau.vercel.app",
    siteName: "tako",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tako — Portfolio",
    description:
      "Product Designer & Developer. I build digital products at the edge of design and code.",
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
      className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
