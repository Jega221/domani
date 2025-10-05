import type { Metadata } from "next";
import "../styles/globals.css";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";
import { Toaster } from "react-hot-toast";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default:"custums clearance nigeria | Domani Transport",
    template: "%s -  Domani Transport",
  },
  description: "Trusted clearing agent in Lagos/Kano, Nigeria. We handle import/export, customs clearance, freight forwarding & logistics with speed, transparency & competitive pricing.",
  keywords: [
    "customs clearance Nigeria",
    "import Nigeria",
    "logistics Nigeria",
    "freight forwarding",
    "clearance agent",
    "clearance services",
    "Domani Transport"
  ],
  openGraph: {
    title: "Domani Transport | Customs clearance & Logistics in Nigeria",
    description: "Domani Transport provides customs clearance and logistics services in Nigeria, helping businesses import goods efficiently and compliantly.",
    url: "https://domanitransport.com",
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
    siteName: "Domani Transport",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domani Transport | Customs clearance & Logistics in Nigeria",
    description: "Domani Transport provides customs clearance and logistics services in Nigeria, helping businesses import goods efficiently and compliantly.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {    
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <Navbar />
        <Toaster position="top-right" />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
