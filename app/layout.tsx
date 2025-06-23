import Head from "next/head";
import type { Metadata } from "next";
import "../styles/globals.css";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Domani Transport",
  description: "Efficient customs clearance and logistics in Nigeria.",
  icons: {
    icon: "/favicon.svg", // this will add: <link rel="icon" href="/favicon.svg" />
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {    
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
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
