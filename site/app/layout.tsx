import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://shenailsalon.com"),
  title: {
    default: "Nail Salon Reviews and Products",
    template: "%s | Nail Salon Reviews and Products",
  },
  description: "Free nail guides covering acrylic, gel, dip, and more, plus curated salon reviews across 50 California cities. 129 articles by Nancy Davidson. No paywall.",
  openGraph: {
    type: "website",
    siteName: "Nail Salon Reviews and Products",
    locale: "en_US",
    url: "https://shenailsalon.com",
    title: "Nail Salon Reviews and Products",
    description: "Free nail guides and California salon reviews. 129 articles by Nancy Davidson covering nail types, how-to tutorials, and salons in 50+ cities.",
  },
  twitter: {
    card: "summary",
    title: "Nail Salon Reviews and Products",
    description: "Free nail guides and California salon reviews. 129 articles by Nancy Davidson.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nail Salon Reviews and Products",
  url: "https://shenailsalon.com",
  description: "A California-focused nail content blog with educational guides on nail types, application techniques, and curated nail salon recommendations.",
  foundingDate: "2024",
  author: {
    "@type": "Person",
    name: "Nancy Davidson",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
