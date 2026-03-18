import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Paint, Shape, and Remove Nails | 35 Step-by-Step Guides",
  description: "35 nail tutorials: how to paint your nails, how to shape nails, how to remove acrylic, gel, shellac, and dip nails. Supply lists, cost estimates, and numbered steps by Nancy Davidson.",
  alternates: { canonical: "https://shenailsalon.com/category/how-to" },
  openGraph: {
    url: "https://shenailsalon.com/category/how-to",
    title: "How To Paint, Shape, and Remove Nails | 35 Step-by-Step Guides",
    description: "35 nail tutorials: how to paint your nails, how to shape nails, how to remove acrylic, gel, shellac, and dip nails. Supply lists, cost estimates, and numbered steps by Nancy Davidson.",
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
      name: "How-To Nail Guides",
      item: "https://shenailsalon.com/category/how-to",
    },
  ],
};

const applicationGuides = [
  { title: "How To Apply Acrylic Nails at Home", href: "/how-to/how-to-apply-acrylic-nails/" },
  { title: "How To Apply Gel Nails at Home", href: "/how-to/how-to-apply-gel-nails/" },
  { title: "How To Apply Dip Powder Nails", href: "/how-to/how-to-apply-dip-powder-nails/" },
  { title: "How To Apply Press-On Nails", href: "/how-to/how-to-apply-press-on-nails/" },
  { title: "How To Apply Polygel Nails", href: "/how-to/how-to-apply-polygel-nails/" },
  { title: "How To Apply Builder Gel", href: "/how-to/how-to-apply-builder-gel/" },
  { title: "How To Apply Gel-X Nails", href: "/how-to/how-to-apply-gel-x-nails/" },
  { title: "How To Apply Nail Wraps", href: "/how-to/how-to-apply-nail-wraps/" },
  { title: "How To Apply Shellac", href: "/how-to/how-to-apply-shellac/" },
  { title: "How To Apply Paper Nails", href: "/how-to/how-to-apply-paper-nails/" },
];

const removalGuides = [
  { title: "How To Remove Acrylic Nails", href: "/how-to/how-to-remove-acrylic-nails/" },
  { title: "How To Remove Gel Nails", href: "/how-to/how-to-remove-gel-nails/" },
  { title: "How To Remove Dip Powder Nails", href: "/how-to/how-to-remove-dip-nails/" },
  { title: "How To Remove Gel-X Nails", href: "/how-to/how-to-remove-gel-x-nails/" },
  { title: "How To Remove Shellac Nails", href: "/how-to/how-to-remove-shellac-nails/" },
  { title: "How To Remove Press-On Nails", href: "/how-to/how-to-remove-press-on-nails/" },
  { title: "How To Remove Glue-On Nails", href: "/how-to/how-to-remove-glue-on-nails/" },
  { title: "How To Remove Fake Nails", href: "/how-to/how-to-remove-fake-nails/" },
  { title: "How To Remove Nail Wraps", href: "/how-to/how-to-remove-nail-wraps/" },
];

const careGuides = [
  { title: "How To Shape Your Nails", href: "/how-to/how-to-shape-nails/" },
  { title: "How To Paint Your Nails", href: "/how-to/how-to-paint-nails/" },
  { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
  { title: "How To Make Your Nails Grow Faster", href: "/how-to/how-to-make-nails-grow-faster/" },
  { title: "How To Stop Biting Your Nails", href: "/how-to/how-to-stop-biting-nails/" },
  { title: "How To Fix a Broken Nail", href: "/how-to/how-to-fix-a-broken-nail/" },
  { title: "How To Keep Nails Healthy", href: "/how-to/how-to-keep-nails-healthy/" },
  { title: "How To File Nails Correctly", href: "/how-to/how-to-file-nails/" },
  { title: "How To Push Back Cuticles", href: "/how-to/how-to-push-back-cuticles/" },
];

const subsections = [
  {
    title: "Application Guides",
    guides: applicationGuides,
    color: "#046BD2",
    desc: "Each guide lists every supply you need and a realistic cost estimate before step one.",
  },
  {
    title: "Removal Guides",
    guides: removalGuides,
    color: "#3A5FCC",
    desc: "Removal is where most at-home mistakes happen. These guides focus on getting it off without wrecking the nail bed.",
  },
  {
    title: "Nail Care and Maintenance",
    guides: careGuides,
    color: "#045CB4",
    desc: "Between appointments or going fully DIY, these cover the basics from filing and shaping to cuticle care.",
  },
];

const allGuides = [...applicationGuides, ...removalGuides, ...careGuides];

const faqs = [
  {
    q: "How do you paint your nails at home?",
    a: "Clean and dry your nails first. Apply a base coat and let it dry. Apply two thin coats of polish, waiting 2 minutes between coats. Finish with a topcoat. Avoid thick single coats, which cause smudging and uneven coverage.",
  },
  {
    q: "How do you shape your nails?",
    a: "File in one direction from the outer edge toward the center. Avoid sawing back and forth, which weakens the nail. The five main shapes are square, round, oval, almond, and coffin. Start with a coarse file to remove length, then switch to a fine-grit file to smooth the edge.",
  },
  {
    q: "How do you remove shellac nails?",
    a: "Buff the surface of the shellac lightly to break the seal. Soak a cotton ball in pure acetone and place it on the nail. Wrap each finger in foil and wait 10 to 15 minutes. The shellac should lift off easily. Never force or peel it, which can remove layers of the natural nail.",
  },
  {
    q: "How do you file your nails correctly?",
    a: "Use a fine-grit nail file and move in one direction from the side toward the center. Filing back and forth splits the nail edge. File at a slight angle to match your chosen shape, then finish with a buffer to smooth any roughness.",
  },
  {
    q: "How do you remove acrylic nails at home?",
    a: "File off the top coat and as much of the acrylic surface as possible. Soak nails in acetone for 20 to 30 minutes, either in a bowl or using acetone-soaked cotton wrapped in foil. Once the acrylic softens, push it off with a cuticle pusher. Do not force or rip it off.",
  },
  {
    q: "How do you do nails at home without a salon?",
    a: "Start with clean, dry nails. Push back cuticles with a wooden pusher. File to your preferred shape. Apply a base coat, two coats of color, and a topcoat. For gel results at home, a UV lamp and gel polish kit replicate most of what a salon does at a fraction of the cost.",
  },
  {
    q: "How do you paint your nails perfectly?",
    a: "Start with a base coat to protect the nail and improve adhesion. Apply the first coat of color in three strokes: one down the center, then one on each side. Let it dry for 2 minutes. Apply a second thin coat the same way. Finish with a topcoat and run it along the tip of the nail to seal the edge. Thin coats dry faster and chip less than thick ones.",
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
  name: "How-To Nail Guides",
  url: "https://shenailsalon.com/category/how-to",
  numberOfItems: allGuides.length,
  itemListElement: allGuides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    url: `https://shenailsalon.com${guide.href}`,
  })),
};

export default function HowToPage() {
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
            <span>How To</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>🛠️</span>
            <span>35+ Tutorials</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E293B" }}>
            Nail How-To Guides
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#707070" }}>
            Applying nails at home is doable. Removing them without damage is harder. These 35 guides cover both, along with shaping, care, and the supplies you actually need before you start.
          </p>
        </div>
      </section>

      {/* Subsections */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {subsections.map((sub) => (
            <div key={sub.title}>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-5 w-1 rounded-full" style={{ background: sub.color }}></div>
                <h2 className="text-xl font-bold" style={{ color: "#1E293B" }}>{sub.title}</h2>
              </div>
              <p className="text-sm mb-5" style={{ color: "#707070" }}>{sub.desc}</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {sub.guides.map((guide) => (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                  >
                    <div className="h-1 w-full" style={{ background: sub.color }}></div>
                    <div className="p-4">
                      <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{guide.title}</p>
                      <p className="text-xs mt-2 flex items-center gap-1" style={{ color: sub.color }}>
                        Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-12 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#1E293B" }}>
            Common Nail How-To Questions
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
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "#F0F5FA", borderColor: "rgba(4,107,210,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
              Each guide includes a supply list, an estimated cost, numbered steps, and a section on what tends to go wrong. Nancy Davidson wrote all 35 of them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
