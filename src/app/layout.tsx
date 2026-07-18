import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBackground } from "@/components/shared/GradientBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kaveen Gunarathna | Software Engineer",
  description: "Personal portfolio of Kaveen Gunarathna, a Computer Science Undergraduate and Aspiring Software Engineer specializing in full-stack development and clean architecture.",
  keywords: ["Kaveen Gunarathna", "Software Engineer", "Full-Stack Developer", "SLIIT", "Sri Lanka", "React", "Next.js", "Java", "Spring Boot"],
  authors: [{ name: "Kaveen Gunarathna", url: "https://kaveen-gunarathna-portfolio.vercel.app/" }],
  creator: "Kaveen Gunarathna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaveen-gunarathna-portfolio.vercel.app/",
    title: "Kaveen Gunarathna | Software Engineer",
    description: "Personal portfolio of Kaveen Gunarathna, a Computer Science Undergraduate and Aspiring Software Engineer specializing in full-stack development and clean architecture.",
    siteName: "Kaveen Gunarathna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaveen Gunarathna | Software Engineer",
    description: "Personal portfolio of Kaveen Gunarathna, a Computer Science Undergraduate and Aspiring Software Engineer specializing in full-stack development and clean architecture.",
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-slate-950 text-slate-50 antialiased selection:bg-amber-300/30">
        <GradientBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
