import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavBar from "./components/header/topNavBar/topNavBar";
import Footer from "./components/footer/footer";
import ScrollSpy from "./actions/scrollSpy";
import { ThemeProvider } from "./actions/themeProvider";
import MenuTools from "./components/header/menuTools/menuTools";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <header>
            <MenuTools />
            <TopNavBar />
          </header>

          <ScrollSpy />
          {children}

          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>

  );
}
