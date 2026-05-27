import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
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
      className={`${bebas.variable} ${dmMono.variable} h-full antialiased`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
@keyframes flor-float {
  0% { transform: translate(0px) rotate(0deg); }
  25% { transform: translate(3px, -4px) rotate(0.5deg); }
  50% { transform: translate(-2px, 2px) rotate(-0.3deg); }
  75% { transform: translate(4px, 3px) rotate(0.4deg); }
  100% { transform: translate(0px) rotate(0deg); }
}
`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
