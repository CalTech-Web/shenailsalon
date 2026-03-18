import type { Metadata } from "next";
import Script from "next/script";
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
  founder: {
    "@type": "Person",
    name: "Nancy Davidson",
  },
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nancy Davidson",
  url: "https://shenailsalon.com/author/snsadmin/",
  worksFor: {
    "@type": "Organization",
    name: "Nail Salon Reviews and Products",
    url: "https://shenailsalon.com",
  },
  jobTitle: "Author and Editor",
  description: "Nancy Davidson has written 129 nail care articles covering acrylic, gel, dip, polygel, and more, plus curated reviews of nail salons across 50 California cities since 2024.",
  knowsAbout: [
    "Acrylic nails",
    "Gel nails",
    "Dip powder nails",
    "Gel-X nails",
    "Builder gel nails",
    "Shellac manicures",
    "Polygel nails",
    "Nail shapes",
    "Nail composition and keratin",
    "Nail care and maintenance",
    "DIY nail removal",
    "California nail salons",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q8B6W5ZRX0"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Q8B6W5ZRX0');
gtag('config', 'G-7QJ5Y9YDDC');`}
        </Script>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
