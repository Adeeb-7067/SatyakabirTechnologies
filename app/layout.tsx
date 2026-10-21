import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Squada_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const squadaOne = Squada_One({
  variable: "--font-squada-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Satya Kabir Technologies | Build Better Products",
  description:
    "Join the 10,000+ brands around the world—Powerful, self-serve product analytics to help you convert, engage, and retain more users.",
  icons: {
    icon: "/images/sk-logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${squadaOne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080d1a] text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer /> 
      </body>
    </html>
  );
}
