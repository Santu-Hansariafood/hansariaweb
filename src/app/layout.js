import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hansariafood.com"),
  title: {
    default: "Hansaria Food - Commodity Trading & Market Intelligence",
    template: "%s | Hansaria Food",
  },
  description:
    "Leading commodity trading and market intelligence company providing expert services in trading, broking, and market analysis across India.",
  keywords: [
    "commodity trading",
    "market intelligence",
    "broking services",
    "hansaria food",
    "commodity market",
    "trading services",
  ],
  authors: [{ name: "Hansaria Food" }],
  creator: "Hansaria Food",
  publisher: "Hansaria Food",
  formatDetection: {
    email: "info@hansariafood.com",
    address: "45, Connaught Place, New Delhi",
    telephone: "+91 123 456 7890",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hansariafood.com",
    siteName: "Hansaria Food",
    title: "Hansaria Food - Commodity Trading & Market Intelligence",
    description:
      "Leading commodity trading and market intelligence company providing expert services in trading, broking, and market analysis across India.",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Hansaria Food Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hansaria Food - Commodity Trading & Market Intelligence",
    description:
      "Leading commodity trading and market intelligence company providing expert services in trading, broking, and market analysis across India.",
    images: ["/logo/logo.png"],
    creator: "@hansariafood",
  },
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://hansariafood.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navbar />
        <main className="pt-[4rem] md:pt-[5rem] w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
