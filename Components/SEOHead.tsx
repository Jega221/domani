// File: components/SEOHead.tsx   ✅ (ONLY the React component here)
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
};

export default function SEOHead({
  title = "Domani Transport - Customs Clearance, Logistics & Import Services in Nigeria | Domani",
  description = "Expert logistics and hassle‑free customs clearance services across Nigeria...",
  keywords = "Domani, Transport, Customs Clearance, Logistics, Nigeria, Shipping, Delivery, Freight",
  url = "https://domanitransport.com",
  image = "/opengraph-image.png",
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
}
