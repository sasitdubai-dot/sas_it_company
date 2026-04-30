import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
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
  title: {
    default: "IT Support Company Dubai | Networking, CCTV, Security | SAS IT",
    template: "%s | SAS IT Services Dubai",
  },
  description:
    "Leading IT support company in Dubai. Networking, CCTV installation, server solutions, structured cabling, IT AMC. 500+ projects. 24/7 support. Call +971-526716178",
  keywords:
    "IT support company Dubai, IT services Dubai, CCTV installation Dubai, networking solutions UAE, IT AMC Dubai, server solutions Dubai, structured cabling Dubai, managed IT services Dubai",
  authors: [{ name: "SAS IT Services", url: "https://www.sasitdubai.com" }],
  metadataBase: new URL("https://www.sasitdubai.com"),
  alternates: {
    canonical: "https://www.sasitdubai.com",
  },
  openGraph: {
    title: "IT Support Company Dubai | SAS IT Services",
    description:
      "Leading IT support company in Dubai. Networking, CCTV, server solutions, IT AMC. 500+ projects completed. 24/7 support.",
    url: "https://www.sasitdubai.com",
    siteName: "SAS IT Services",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
        alt: "SAS IT Services Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Support Company Dubai | SAS IT Services",
    description:
      "Leading IT support company in Dubai. Networking, CCTV, server solutions, IT AMC. 500+ projects.",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        <LocalBusinessSchema />
        <AdminProvider>
          <Header />
          {children}
          <Footer />
        </AdminProvider>
      </body>
    </html>
  );
}
