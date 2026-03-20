import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vasilina Gultai | Personal Trainer & S&C Coach",
  description:
    "IUSCA Level 4 certified Strength & Conditioning coach based in Prague. Individualised training programs, measurable results, 7 languages.",
  openGraph: {
    title: "Vasilina Gultai | Personal Trainer & S&C Coach",
    description:
      "IUSCA Level 4 certified coach. 36+ coached sessions. Measurable results. Based in Prague.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
