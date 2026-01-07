import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "./components/header/topNavBar/topNavBar";
import Footer from "./components/footer/footer";
import ScrollSpy from "./actions/scrollSpy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Bourguignon",
  description: "Web Developer Junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <TopNavBar></TopNavBar>
        </header>
        <ScrollSpy></ScrollSpy>
        {children}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
