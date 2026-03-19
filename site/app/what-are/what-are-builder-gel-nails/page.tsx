import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Builder Gel Nails? BIAB, How Long They Last & Cost",
  description:
    "Builder gel nails (also called BIAB) are a thick UV-cured gel used to strengthen, extend, and sculpt nails. Learn how builder gel works, how long it lasts, what it costs, and how it compares to acrylic and gel polish.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-builder-gel-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-builder-gel-nails/",
    title: "What Are Builder Gel Nails? BIAB, How Long They Last & Cost",
    description:
      "Builder gel nails (also called BIAB) are a thick UV-cured gel used to strengthen, extend, and sculpt nails. Learn how builder gel works, how long it lasts, what it costs, and how it compares to acrylic and gel polish.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Are Builder Gel Nails?",
      item: "https://shenailsalon.com/what-are/what-are-builder-gel-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Builder Gel Nails? BIAB, How Long They Last & Cost",
  description:
    "Builder gel nails (also called BIAB or builder in a bottle) are a thick, viscous UV-cured gel used to strengthen, overlay, or extend natural nails. This guide covers how builder gel works, how long it lasts, what it costs, and how it compares to acrylic and gel polish.",
  url: "https://shenailsalon.com/what-are/what-are-builder-gel-nails/",
  author: {
    "@type": "Person",
    name: "Nancy Davidson",
    url: "https://shenailsalon.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Nail Salon Reviews and Products",
    url: "https://shenailsalon.com",
  },
  datePublished: "2024-11-01",
  dateModified: "2026-03-19",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-builder-gel-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are builder gel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Builder gel nails use a thick, viscous UV or LED-cured gel to strengthen, overlay, or extend natural nails. Unlike regular gel polish, builder gel is dense enough to self-level and add structure to the nail. It is sold as a pot gel or in a bottle (BIAB), cures under a UV or LED lamp, and lasts 3 to 5 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is BIAB nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIAB stands for Builder In A Bottle. It is a type of builder gel sold in a brush-on bottle for easier application, popularized by The Gel Bottle Inc. BIAB works the same way as traditional builder gel: it is applied over the natural nail, cured under a UV or LED lamp, and filed smooth. BIAB is especially popular for nail overlays that strengthen natural nails without extensions.",
      },
    },
    {
      "@type": "Question",
      name: "How long do builder gel nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Builder gel nails last 3 to 5 weeks. Most people get fills or a rebalance every 3 to 4 weeks as the nail grows. Builder gel overlays on natural nails tend to last closer to 4 to 5 weeks because there is no extension apex that can lift or snap. How long builder gel lasts depends on nail prep, application quality, and how much stress the nails endure.",
      },
    },
    {
      "@type": "Question",
      name: "How much does builder gel cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A builder gel overlay service at a nail salon costs between $45 and $80 in the United States. Builder gel extensions that add length typically cost $60 to $100. In California, BIAB overlay services run $50 to $75 on average. At-home BIAB starter kits cost $40 to $70 and include a pot of builder gel, base coat, top coat, and LED lamp.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between builder gel and acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Builder gel cures under a UV or LED lamp and remains slightly flexible after curing. Acrylic nails are formed by mixing a liquid monomer with a powder polymer that hardens in air without a lamp. Builder gel is odorless and tends to be gentler on the natural nail. Acrylics are harder, more durable, and easier to repair if they break. Both can add nail length or be used as a strengthening overlay.",
      },
    },
    {
      "@type": "Question",
      name: "Can builder gel be done at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BIAB (builder in a bottle) versions of builder gel are designed for at-home use. You need a UV or LED lamp, a base coat, the builder gel, a top coat, and a nail file. The main challenges are applying an even bead without flooding the cuticle and achieving a smooth finish before curing. With practice, at-home BIAB applications are comparable to a salon result.",
      },
    },
  ],
};

const vsAcrylicRows = [
  ["Curing method", "UV or LED lamp", "Air dry (chemical reaction)"],
  ["Odor during application", "None to minimal", "Strong chemical smell"],
  ["Flexibility after curing", "Slight flex, moves with nail", "Rigid, hard"],
  ["Nail damage", "Low to moderate", "Moderate (filing required)"],
  ["Wear time", "3 to 5 weeks", "2 to 3 weeks before fill"],
  ["Repairability", "Harder to patch alone", "Easy to fill and repair"],
  ["Cost (salon)", "$45 to $100", "$40 to $80"],
  ["At-home use", "Yes, with BIAB kits", "More difficult at home"],
];

const vsGelPolishRows = [
  ["Thickness", "Thick, viscous, adds structure", "Thin, polish-like"],
  ["Adds nail length", "Yes (with forms or tips)", "No"],
  ["Strengthens natural nail", "Yes (overlay)", "Minimal"],
  ["Wear time", "3 to 5 weeks", "2 to 3 weeks"],
  ["Filing required", "Yes, to shape and smooth", "No"],
  ["Removal", "File off or acetone soak (longer)", "Acetone soak (10 to 15 min)"],
  ["Cost (salon)", "$45 to $100", "$30 to $60"],
];

const applicationSteps = [
  { step: "Prep nails", detail: "Push back cuticles, lightly buff the nail plate, and cleanse with a nail dehydrator to remove oils." },
  { step: "Apply primer", detail: "Apply a thin layer of nail primer or acid-free bond to help the builder gel adhere." },
  { step: "Apply base coat", detail: "Apply a thin gel base coat and cure under the LED lamp for 30 to 60 seconds." },
  { step: "Apply builder gel bead", detail: "Pick up a small bead of builder gel with the brush. Place it at the center of the nail and push it toward the cuticle without flooding." },
  { step: "Shape the apex", detail: "Build the apex (highest point, just past the center of the nail) by adding a second bead if needed. The apex adds strength." },
  { step: "Cure", detail: "Cure under the UV or LED lamp for 60 to 90 seconds according to the gel manufacturer's instructions." },
  { step: "File and shape", detail: "File the surface smooth with a 180-grit file. Shape the free edge with a file or nail form. Remove dust with a brush." },
  { step: "Apply top coat", detail: "Apply a gel top coat and cure. Wipe off the inhibition layer with a nail cleanser pad to reveal the shine." },
];

const prosRows = [
  "Lasts 3 to 5 weeks without chipping",
  "Odorless application, no harsh fumes",
  "Can strengthen weak or damaged nails as an overlay",
  "Can add nail length with forms or tips",
  "Slight flexibility reduces snapping compared to acrylics",
  "BIAB format is beginner-friendly for at-home use",
  "Smooth, high-gloss finish",
];

const consRows = [
  "Requires UV or LED lamp to cure",
  "Filing step adds time and skill requirement",
  "Harder to repair at home if it cracks",
  "Acetone removal takes longer than gel polish (30 to 45 min)",
  "Incorrect application can trap moisture and cause lifting",
  "More expensive than gel polish overlays",
];

export default function BuilderGelNailsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#707070" }}>
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/category/what-are" style={{ color: "#046BD2" }} className="hover:underline">What Are</Link>
            <span className="mx-2">/</span>
            <span>What Are Builder Gel Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Builder Gel Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Builder gel nails (also called BIAB or builder in a bottle) use a thick, viscous gel cured under a UV or LED lamp to strengthen, overlay, or extend natural nails. They last 3 to 5 weeks, produce no harsh fumes, and can be done at home with a BIAB kit. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What is builder gel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Builder Gel?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel is a thick, self-leveling UV or LED-cured gel designed to add structure to the nail. Unlike regular gel polish, which is thin and only adds color, builder gel is dense enough to build an apex, correct nail shape, and reinforce weak or damaged nails. It comes in a pot or bottle and cures hard under a lamp.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I switched to builder gel overlays after years of breaking nails. The difference was immediate. My natural nails grew out longer than they ever had because the builder gel overlay protected them from everyday impact. The finish is glossy and smooth, and it never feels as bulky as acrylics.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Builder gel is sold under several names: builder gel, BIAB (builder in a bottle), hard gel, and sometimes simply overlay gel. The term BIAB was popularized by The Gel Bottle Inc., a UK-based brand, but it now refers broadly to any brush-on builder gel. These products all work the same way.
            </p>
          </div>

          {/* BIAB */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is BIAB? (Builder In A Bottle)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB stands for Builder In A Bottle. It is a format of builder gel that comes in a brush-on bottle rather than a pot, making application easier and more consistent. BIAB behaves identically to traditional builder gel: it is applied to the nail, shaped, cured under a UV or LED lamp, and filed smooth.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The main advantage of BIAB over pot builder gel is the built-in brush, which makes it more approachable for at-home use and reduces mess. Most major gel brands now offer a BIAB version. Popular options include The Gel Bottle Inc. BIAB, Aprés Nail Cover Gel, and NSI Attraction.
            </p>
          </div>

          {/* How long */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Builder Gel Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel nails last 3 to 5 weeks. Most people book a fill or rebalance appointment every 3 to 4 weeks as the nail grows and the product at the base grows out. If you use builder gel as a strengthening overlay on natural nails (without extending), you may get up to 5 weeks of wear before the grown-out base becomes noticeable.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Builder gel extensions with a longer free edge are more prone to lifting at the apex as the nail grows. Wear time is shorter for people who work with their hands, type heavily, or frequently have their hands in water.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Does Builder Gel Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A builder gel overlay at a nail salon costs between $45 and $80 in the United States. Builder gel extensions that add length run $60 to $100 depending on the salon and location. In California, BIAB overlay services average $50 to $75.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For at-home application, BIAB starter kits cost $40 to $70 and include a pot or bottle of builder gel, base coat, top coat, an LED lamp, and basic nail tools. The ongoing cost per set is low once you have the lamp.
            </p>
          </div>

          {/* Application guide */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Builder Gel Is Applied (8 Steps)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel application takes 60 to 90 minutes for a full set. Here is how the process works:
            </p>
            <div className="space-y-3">
              {applicationSteps.map((item, i) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 rounded-lg border border-gray-100"
                  style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{item.step}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Builder gel vs acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Builder Gel vs Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel and acrylic nails are both used to strengthen and extend nails, but they differ in application, feel, and removal.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Builder Gel</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAcrylicRows.map(([feature, gel, acrylic], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gel}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Builder gel vs gel polish */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Builder Gel vs Gel Polish</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel and gel polish are both UV or LED-cured, but they serve completely different purposes.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Builder Gel</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Polish</th>
                  </tr>
                </thead>
                <tbody>
                  {vsGelPolishRows.map(([feature, builder, polish], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{builder}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{polish}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Builder Gel Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  {prosRows.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  {consRows.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* How to remove */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Builder Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel removal takes longer than gel polish removal because the product is thicker. There are two methods:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-100" style={{ background: "#F8FBFF" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Method 1: File off (faster)</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                  Use a coarse file (100 to 150 grit) to file down most of the builder gel. Switch to a finer file (180 grit) as you approach the natural nail. Stop before you reach the nail plate. This method is faster but requires care not to over-file. A 240-grit buffer is used to smooth the remaining thin layer.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100" style={{ background: "#F8FBFF" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Method 2: Acetone soak (gentler)</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                  File the surface lightly to break the top coat seal. Soak cotton balls in 100% acetone, place one on each nail, and wrap with foil. Wait 30 to 45 minutes. Builder gel softens more slowly than gel polish. Use a cuticle pusher to scrape off the softened gel. Repeat soaking if needed. Finish with cuticle oil to rehydrate.
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              Never force or peel builder gel off. Doing so removes layers of the natural nail and causes lasting thinning and sensitivity.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Builder Gel Nails</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                  style={{
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#3A5FCC"}`,
                  }}
                >
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related articles */}
          <div className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Related Nail Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
                { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
                { title: "What Are Polygel Nails?", href: "/what-are/what-are-polygel-nails/" },
                { title: "What Are BIAB Nails?", href: "/what-are/what-are-biab-nails/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg p-3 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
                >
                  <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{link.title}</p>
                  <span className="ml-auto text-xs group-hover:translate-x-0.5 transition-transform" style={{ color: "#046BD2" }}>→</span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/category/what-are"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: "#046BD2" }}
              >
                Browse all 49 What Are guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
