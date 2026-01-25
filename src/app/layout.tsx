import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AdminProvider } from "@/contexts/AdminContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional IT Services Dubai | Networking, CCTV, Security | SAS IT",
  description: "24/7 IT support in Dubai. Networking, CCTV installation, server solutions, structured cabling. 500+ projects completed. Same-day service. Call +971-526716178",
  keywords: "IT services Dubai, networking solutions UAE, CCTV installation Dubai, server solutions, website development, structured cabling, computer repair Dubai, IT support UAE",
  authors: [{ name: "SAS IT Services" }],
  openGraph: {
    title: "SAS IT Services - We Make IT Happen!",
    description: "Professional IT Solutions in Dubai, UAE",
    url: "https://sasitservices.com",
    siteName: "SAS IT Services",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
        alt: "SAS IT Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAS IT Services - We Make IT Happen!",
    description: "Professional IT Solutions in Dubai, UAE",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
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
        <AdminProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </AdminProvider>
      </body>
    </html>
  );
}
