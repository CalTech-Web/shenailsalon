import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Acrylic, Gel, and Dip Nails? | 44 Nail Guides",
  description: "44 guides covering what every nail type is made of, how long it lasts, and how it compares. Acrylic, gel, dip, polygel, shellac, gel-x, BIAB, and more.",
  alternates: { canonical: "https://shenailsalon.com/category/what-are" },
  openGraph: {
    url: "https://shenailsalon.com/category/what-are",
    title: "What Are Acrylic, Gel, and Dip Nails? | 44 Nail Guides",
    description: "44 guides covering what every nail type is made of, how long it lasts, and how it compares. Acrylic, gel, dip, polygel, shellac, gel-x, BIAB, and more.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shenailsalon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "What Are Nail Guides",
      item: "https://shenailsalon.com/category/what-are",
    },
  ],
};

const articles = [
  { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
  { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
  { title: "What Are Dip Nails (SNS)?", href: "/what-are/what-are-dip-nails/" },
  { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
  { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
  { title: "What Are Press-On Nails?", href: "/what-are/what-are-press-on-nails/" },
  { title: "What Are Polygel Nails?", href: "/what-are/what-are-polygel-nails/" },
  { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
  { title: "What Are BIAB Nails?", href: "/what-are/what-are-biab-nails/" },
  { title: "What Are Solar Nails?", href: "/what-are/what-are-solar-nails/" },
  { title: "What Are Coffin Nails?", href: "/what-are/what-are-coffin-nails/" },
  { title: "What Are Chrome Nails?", href: "/what-are/what-are-chrome-nails/" },
  { title: "What Are Ombre Nails?", href: "/what-are/what-are-ombre-nails/" },
  { title: "What Are Cat-Eye Nails?", href: "/what-are/what-are-cat-eye-nails/" },
  { title: "What Are Russian Nails?", href: "/what-are/what-are-russian-nails/" },
  { title: "What Are Paper Nails?", href: "/what-are/what-are-paper-nails/" },
  { title: "What Are Fake Nails?", href: "/what-are/what-are-fake-nails/" },
  { title: "What Are Nail Wraps?", href: "/what-are/what-are-nail-wraps/" },
  { title: "What Are Nail Stickers?", href: "/what-are/what-are-nail-stickers/" },
  { title: "What Are Nail Tips?", href: "/what-are/what-are-nail-tips/" },
  { title: "What Are Gel Polish Nails?", href: "/what-are/what-are-gel-polish-nails/" },
  { title: "What Are Soak-Off Nails?", href: "/what-are/what-are-soak-off-nails/" },
  { title: "What Causes White Spots on Nails?", href: "/what-are/what-are-white-spots-on-nails/" },
  { title: "What Are Keratin Nails?", href: "/what-are/what-are-keratin-nails/" },
  { title: "What Are ABS Plastic Nails?", href: "/what-are/what-are-abs-plastic-nails/" },
  { title: "What Are Acrylic Resin Nails?", href: "/what-are/what-are-acrylic-resin-nails/" },
  { title: "What Are Almond-Shaped Nails?", href: "/what-are/what-are-almond-shaped-nails/" },
  { title: "What Are Stiletto Nails?", href: "/what-are/what-are-stiletto-nails/" },
  { title: "What Are Square Nails?", href: "/what-are/what-are-square-nails/" },
  { title: "What Are Oval Nails?", href: "/what-are/what-are-oval-nails/" },
  { title: "What Are Ballerina Nails?", href: "/what-are/what-are-ballerina-nails/" },
  { title: "What Are Duck Nails?", href: "/what-are/what-are-duck-nails/" },
  { title: "What Are Flare Nails?", href: "/what-are/what-are-flare-nails/" },
  { title: "What Are Glitter Nails?", href: "/what-are/what-are-glitter-nails/" },
  { title: "What Are Matte Nails?", href: "/what-are/what-are-matte-nails/" },
  { title: "What Are Marble Nails?", href: "/what-are/what-are-marble-nails/" },
  { title: "What Are Holographic Nails?", href: "/what-are/what-are-holographic-nails/" },
  { title: "What Are 3D Nails?", href: "/what-are/what-are-3d-nails/" },
  { title: "What Are French Tip Nails?", href: "/what-are/what-are-french-tip-nails/" },
  { title: "What Are Reverse French Nails?", href: "/what-are/what-are-reverse-french-nails/" },
  { title: "What Are Half-Moon Nails?", href: "/what-are/what-are-half-moon-nails/" },
  { title: "What Are Negative Space Nails?", href: "/what-are/what-are-negative-space-nails/" },
  { title: "What Are Nail Extensions?", href: "/what-are/what-are-nail-extensions/" },
  { title: "What Are Long Nails?", href: "/what-are/what-are-long-nails/" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "What Are Nail Guides",
  url: "https://shenailsalon.com/category/what-are",
  numberOfItems: articles.length,
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: article.title,
    url: `https://shenailsalon.com${article.href}`,
  })),
};

export default function WhatArePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Hero banner */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#808285" }}>
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>What Are</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>💅</span>
            <span>44+ Guides</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E293B" }}>
            What Are Nail Guides
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#808285" }}>
            Acrylic nails use polymer powder. Gel nails cure under UV light. Dip powder skips the lamp entirely. These 44 guides explain how each nail type works, what it costs, how long it lasts, and what it does to your natural nail underneath.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#046BD2" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{article.title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#046BD2" }}>
                    Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "#F0F5FA", borderColor: "rgba(4,107,210,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#808285" }}>
              Nancy Davidson wrote all 44 of these guides, covering everything from acrylic and gel to BIAB, polygel, and Russian manicures. Each article explains what the nail is made of, how long it holds, and how it compares to the closest alternative. Sources include Byrdie, Allure, Refinery29, and Salon Success Academy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
