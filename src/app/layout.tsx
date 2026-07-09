import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBackground } from "@/components/shared/GradientBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaveen Gunarathna | Portfolio",
  description: "Personal portfolio website for Kaveen Gunarathna"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GradientBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
