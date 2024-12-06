import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picklesthesleepydog.com"),
  title: "Pickle the Sleepy Dog | I'm not sleeping, you are",
  description:
    "Meet Pickles, the elderly canine who's mastered the art of napping. When he's not sleeping, he's thinking about his next cozy spot to doze off.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://picklesthesleepydog.com/",
    siteName: "Pickle the Sleepy Dog",
    images: [
      {
        url: "https://picklesthesleepydog.com/share-image.jpg",
        width: 1157,
        height: 425,
        alt: "Pickle the Sleepy Dog",
      },
    ],
  },
  keywords: [
    "Pickle the Sleepy Dog",
    "cryptocurrency",
    "meme coin",
    "community token",
    "Solana ecosystem",
  ],
  authors: [{ name: "Pickle the Sleepy Dog Team" }],
  category: "Cryptocurrency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
