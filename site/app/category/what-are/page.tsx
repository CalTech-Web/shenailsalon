import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Nails Made Of? Acrylic, Gel, Dip and More | 49 Guides",
  description: "49 guides covering what fingernails are made of (keratin), and what every nail type is made of, how long it lasts, and how it compares. Covers acrylic, gel, dip, shellac, gel-x, BIAB, and more.",
  alternates: { canonical: "https://shenailsalon.com/category/what-are" },
  openGraph: {
    url: "https://shenailsalon.com/category/what-are",
    title: "What Are Nails Made Of? Acrylic, Gel, Dip and More | 49 Guides",
    description: "49 guides covering what fingernails are made of (keratin), and what every nail type is made of, how long it lasts, and how it compares. Covers acrylic, gel, dip, shellac, gel-x, BIAB, and more.",
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
  { title: "What Are Nails Made Of?", href: "/what-are/what-are-nails-made-of/" },
  { title: "What Are Fingernails Made Of?", href: "/what-are/what-are-finger-nails-made-of/" },
  { title: "What Are Toenails Made Of?", href: "/what-are/what-are-toe-nails-made-of/" },
  { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
  { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
  { title: "What Are Dip Nails (SNS)?", href: "/what-are/what-are-dip-nails/" },
  { title: "What Are Dipped Nails?", href: "/what-are/what-are-dipped-nails/" },
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
  { title: "What Are Puffin Nails?", href: "/what-are/what-are-puffin-nails/" },
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

const faqs = [
  {
    q: "What are shellac nails?",
    a: "Shellac nails are a hybrid nail polish system developed by CND that combines regular nail polish with gel polish. They cure under a UV or LED lamp, last 2 to 4 weeks without chipping, and are removed by soaking in acetone. Unlike acrylics or gel extensions, shellac does not add length or thickness.",
  },
  {
    q: "What are gel nails?",
    a: "Gel nails use a gel formula that hardens under a UV or LED lamp. They can be applied as a polish over your natural nail or as a gel extension to add length. Gel nails are flexible, glossy, and chip-resistant. Most gel manicures last 2 to 3 weeks.",
  },
  {
    q: "What are acrylic nails?",
    a: "Acrylic nails are created by combining a liquid monomer with a powder polymer to form a paste that is shaped onto the nail and hardens in air. They are used to extend nail length and add strength. Acrylics are durable and typically last 2 to 3 weeks before needing a fill.",
  },
  {
    q: "What are dip powder nails?",
    a: "Dip powder nails (also called SNS nails) use a resin adhesive and a colored acrylic powder dipped in layers to build a durable coating. No UV or LED lamp is needed. Dip manicures last 3 to 4 weeks and are considered gentler on the natural nail than acrylics.",
  },
  {
    q: "What are gel-x nails?",
    a: "Gel-x nails are soft gel nail extensions developed by Aprés Nail. A full-cover soft gel tip is applied over the natural nail using a gel base coat and cured under a UV or LED lamp. Gel-x extensions are lighter and more flexible than acrylic extensions and last 3 to 4 weeks.",
  },
  {
    q: "What are builder gel nails?",
    a: "Builder gel (also called BIAB, builder in a bottle, or hard gel) is a thick, viscous gel used to strengthen, extend, or sculpt nails. It cures under a UV or LED lamp, providing a semi-rigid overlay that protects the natural nail while adding length and structure.",
  },
  {
    q: "What are fingernails made of?",
    a: "Fingernails are made of a hardened protein called keratin, the same protein that forms hair and the outer layer of skin. The visible nail plate is composed of dead keratinized cells layered in sheets. The living part of the nail is the matrix, hidden beneath the base of the nail, where new cells are produced. Nails grow an average of 3 millimeters per month.",
  },
  {
    q: "What is a shellac manicure?",
    a: "A shellac manicure is a nail service using CND Shellac, a hybrid polish that combines regular nail polish with gel. The polish is applied in thin layers and cured under a UV or LED lamp after each coat. A shellac manicure lasts 2 to 4 weeks without chipping and is removed by soaking in acetone. It does not add length, thickness, or extensions to the nail.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "What Are Nail Guides",
  url: "https://shenailsalon.com/category/what-are",
  numberOfItems: 49,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero banner */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#707070" }}>
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>What Are</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>49+ Guides</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E293B" }}>
            What Are Nail Guides
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#707070" }}>
            Fingernails are made of keratin, the same protein as hair. Acrylic nails use polymer powder. Gel nails cure under UV light. Dip powder skips the lamp entirely. These 49 guides explain what nails are made of, how each enhancement type works, what it costs, and how long it lasts.
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

      {/* FAQ section */}
      <section className="py-12 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#1E293B" }}>
            Common Questions About Nail Types
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 border border-gray-100"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)", borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#3A5FCC"}` }}
              >
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-10 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "#F0F5FA", borderColor: "rgba(4,107,210,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
              Nancy Davidson wrote all 49 of these guides, covering everything from acrylic and gel to BIAB, polygel, and Russian manicures. Each article explains what the nail is made of, how long it holds, and how it compares to the closest alternative. Sources include Byrdie, Allure, Refinery29, and Salon Success Academy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
