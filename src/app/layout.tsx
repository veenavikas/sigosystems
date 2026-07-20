import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileTopNav, MobileBottomNav } from "@/components/layout/MobileNavigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIGO SYSTEMS | Empowering Precise Intelligence",
  description: "Navigating complex data landscapes with sovereign, enterprise-grade AI solutions built for high-stakes decisiveness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-full flex flex-col">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileTopNav />
        </div>

        <main className="flex-grow">
          {children}
        </main>

        <div className="hidden md:block">
          <Footer />
        </div>
        
        <div className="md:hidden">
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
