import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Gel-X Nails? How They Work, Cost & How Long They Last",
  description:
    "Gel-X nails are soft gel extensions by Aprés Nail applied over a structure gel and cured under LED. Learn how gel-x works, how long it lasts, what it costs, and how it compares to acrylic nails.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-gel-x-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-gel-x-nails/",
    title: "What Are Gel-X Nails? How They Work, Cost & How Long They Last",
    description:
      "Gel-X nails are soft gel extensions by Aprés Nail applied over a structure gel and cured under LED. Learn how gel-x works, how long it lasts, what it costs, and how it compares to acrylic nails.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are Gel-X Nails?", item: "https://shenailsalon.com/what-are/what-are-gel-x-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Gel-X Nails? How They Work, Cost & How Long They Last",
  description:
    "Gel-X nails are soft gel extensions by Aprés Nail applied with a structure gel base coat and cured under an LED lamp. This guide covers how gel-x works, how long it lasts, what it costs, and how it compares to acrylics and hard gel.",
  url: "https://shenailsalon.com/what-are/what-are-gel-x-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-gel-x-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are gel-x nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel-X nails are soft gel nail extensions developed by Aprés Nail. They are full-cover nail tips pre-made from soft gel that are bonded to the natural nail using a structure gel base coat and cured under an LED lamp. Unlike acrylics, gel-x contains no liquid monomer, so there is no strong chemical smell. They are lighter and more flexible than acrylic extensions and typically last 3 to 5 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gel-x nails and acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel-x nails use pre-shaped soft gel tips bonded with a structure gel and cured under LED, while acrylic nails are sculpted from a liquid monomer and powder polymer that hardens in air. Gel-x has no harsh chemical smell, is more flexible, and is removed by soaking in acetone. Acrylics are stronger and more rigid, last slightly longer (2 to 3 weeks per fill), and are harder to remove, often requiring filing as well as acetone. Gel-x is generally considered less damaging to the natural nail.",
      },
    },
    {
      "@type": "Question",
      name: "How long do gel-x nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel-x nails typically last 3 to 5 weeks. Most people get 3 to 4 weeks before the grown-out base becomes noticeable. Wear time depends on nail prep, how well the structure gel was applied, and how much stress the nails are exposed to. Frequent hand washing, swimming, and manual work can shorten wear to 2 to 3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "How much do gel-x nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full set of gel-x nails at a nail salon typically costs between $65 and $120 in the United States. In California, prices range from $70 to $110 depending on the salon and city. Gel-x sets cost more than a gel polish manicure because of the tip application, LED cure time, and the complexity of the process. A fill (infill) when the extensions grow out costs $40 to $70.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove gel-x nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To remove gel-x nails: (1) Lightly file the surface of each extension with a 180-grit file to break the top coat seal. (2) Soak a cotton ball in 100% acetone and place it on the nail. (3) Wrap each finger in aluminum foil. (4) Wait 15 to 20 minutes. (5) Slide the foil off and use a cuticle pusher to gently remove the softened gel-x tip. Repeat the soak if needed. Because gel-x is made of soft gel, it breaks down more easily in acetone than acrylic, making removal faster and less damaging.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do gel-x nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, gel-x nails can be done at home. Aprés Nail and other brands sell DIY gel-x kits that include pre-shaped soft gel tips, structure gel, and an LED lamp. The at-home process takes practice to size and position the tips correctly, but many people achieve salon-quality results after a few tries. The key steps are: sizing and fitting each tip, applying the structure gel over the natural nail, pressing the tip onto the gel, and curing under an LED lamp for 60 seconds.",
      },
    },
  ],
};

const vsAcrylicRows = [
  ["Application method", "Soft gel tip + structure gel, cured under LED", "Liquid monomer + powder polymer, air hardens"],
  ["Chemical smell", "None", "Strong (monomer fumes)"],
  ["Flexibility", "Flexible, softer feel", "Rigid, harder"],
  ["Wear time", "3 to 5 weeks", "2 to 3 weeks per fill"],
  ["Removal", "Acetone soak (15 to 20 min)", "Filing + acetone soak"],
  ["Nail damage", "Low", "Low to moderate"],
  ["Cost (full set)", "$65 to $120", "$45 to $100"],
  ["At-home friendly", "Yes, with a kit", "Difficult without training"],
];

const vsHardGelRows = [
  ["Material", "Soft gel (pre-shaped tips)", "Hard gel (sculpted or tip + overlay)"],
  ["Flexibility", "Flexible, some give", "Rigid, no flex"],
  ["Removal", "Acetone soak (15 to 20 min)", "Must be filed off (does not dissolve in acetone)"],
  ["Wear time", "3 to 5 weeks", "3 to 6 weeks"],
  ["Repair", "Can be patched with gel", "Must be filed and rebuilt"],
  ["Cost (full set)", "$65 to $120", "$70 to $130"],
  ["Appearance", "Natural, thin finish", "Can be built thicker for strength"],
];

const vsPolygelRows = [
  ["Material", "Pre-shaped soft gel tips", "Hybrid gel-acrylic putty"],
  ["Application", "Tip placed onto structure gel, cured", "Sculpted onto nail form or tip, cured"],
  ["Flexibility", "Flexible", "Slightly more rigid than gel-x"],
  ["Wear time", "3 to 5 weeks", "3 to 5 weeks"],
  ["Removal", "Acetone soak", "Acetone soak or file off"],
  ["Difficulty (at home)", "Moderate", "Moderate to high"],
  ["Cost (salon)", "$65 to $120", "$65 to $120"],
];

export default function GelXNailsPage() {
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
            <span>What Are Gel-X Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Gel-X Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Gel-X nails are soft gel nail extensions by Aprés Nail, applied using a structure gel base coat and cured under an LED lamp. They add length without acrylic monomer, are more flexible than acrylics, and last 3 to 5 weeks. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are gel-x nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Gel-X Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel-X nails are a soft gel nail extension system created by Aprés Nail. Instead of sculpting an extension from scratch using acrylic powder and liquid monomer, gel-x uses pre-shaped full-cover nail tips made entirely from soft gel. Each tip is bonded to the natural nail using a gel called structure gel (or extend gel), then hardened under an LED lamp in about 60 seconds.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I switched to gel-x from acrylics a few years ago and never looked back. The biggest difference I noticed immediately was the smell. There is no chemical odor at all with gel-x, which is a huge deal for both clients and nail techs. The nails also feel lighter and have a slight flex to them, which makes them feel more natural than stiff acrylics.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The Aprés Nail Gel-X system launched around 2017 and became one of the fastest-growing nail extension methods in the industry. Today, the tips come in dozens of shapes and sizes including almond, coffin, stiletto, square, and round, and they are available in clear, natural, and opaque finishes.
            </p>
          </div>

          {/* How gel-x nails are applied */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Are Gel-X Nails Applied?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel-x is a multi-step process that takes about 60 to 90 minutes for a full set. Here is what happens during a gel-x appointment:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>The nail technician files and shapes the natural nails, pushes back cuticles, and lightly buffs the nail surface to remove shine.</li>
              <li>A nail dehydrator and pH bonder are applied to the nail plate to remove oils and improve adhesion.</li>
              <li>The technician selects the correct size gel-x tip for each nail. A proper fit covers the nail plate edge to edge without touching the skin.</li>
              <li>A thin layer of structure gel (extend gel) is applied to the natural nail.</li>
              <li>The gel-x tip is placed onto the structure gel at a 45-degree angle, then pressed flat against the nail to remove air bubbles.</li>
              <li>Each nail is cured under an LED lamp for 30 to 60 seconds.</li>
              <li>The nail technician files and shapes the extensions to the desired length and shape.</li>
              <li>Gel polish is applied in base coat, color, and top coat layers, each cured under the LED lamp.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The nails are completely finished and hard immediately after the final cure. There is no drying time like with regular nail polish.
            </p>
          </div>

          {/* How long do gel-x nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Gel-X Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel-X nails last 3 to 5 weeks for most people. The first two to three weeks are typically perfect. After that, you will see a gap at the base of the nail where the natural nail has grown. This is called grow-out, not lifting or damage. Most people get a fill or a fresh set every three to four weeks.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Wear time is affected by nail prep and how much stress the nails experience. Frequent hand washing, swimming, or work that puts pressure on the nail tips can cause lifting sooner. Applying cuticle oil daily, wearing gloves when cleaning, and avoiding using your nails as tools will maximize wear.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Gel-X Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A full set of gel-x nails at a nail salon costs between $65 and $120 in the United States. A fill, which is done when the natural nail grows out and the gap needs to be filled, costs $40 to $70. In California, full sets typically run $70 to $110 in most cities, with higher-end salons in Los Angeles and San Francisco charging up to $130 or more for elaborate nail art.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Gel-x sets cost more than a standard gel polish manicure because of the additional time for tip sizing, application, LED curing, and shaping. Compared to a full set of acrylics, gel-x is usually $10 to $20 more expensive due to the cost of the Aprés Nail tips themselves.
            </p>
          </div>

          {/* Gel-X vs Acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel-X vs Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel-x and acrylic nails are both nail extension systems, but the way they are made and how they feel are quite different. Acrylics are sculpted from a liquid monomer mixed with acrylic powder that hardens in air. Gel-x uses pre-made soft gel tips bonded with structure gel and cured under LED.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel-X</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAcrylicRows.map(([feature, gelx, acrylic], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gelx}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gel-X vs Hard Gel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel-X vs Hard Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Hard gel (also called builder gel or BIAB) is sculpted onto the nail using a brush, similar to how acrylics are shaped, and then cured under a UV or LED lamp. Gel-x uses a pre-made tip. The key difference in wear is that hard gel must be filed off because it does not dissolve in acetone, while gel-x softens and can be soaked off.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel-X</th>
                    <th className="text-left px-4 py-2 font-semibold">Hard Gel</th>
                  </tr>
                </thead>
                <tbody>
                  {vsHardGelRows.map(([feature, gelx, hardGel], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gelx}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{hardGel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gel-X vs Polygel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel-X vs Polygel</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel is a hybrid nail extension material that combines acrylic powder with gel into a moldable putty that is shaped by hand and cured under LED. Like gel-x, polygel has no strong smell and can be soaked off. The main difference is that polygel requires sculpting skills while gel-x uses pre-made tips that just need to be fitted and placed.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel-X</th>
                    <th className="text-left px-4 py-2 font-semibold">Polygel</th>
                  </tr>
                </thead>
                <tbody>
                  {vsPolygelRows.map(([feature, gelx, polygel], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gelx}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{polygel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and Cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Gel-X Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>No acrylic monomer, so no strong chemical smell</li>
                  <li>Lighter and more flexible than acrylics</li>
                  <li>Removed by acetone soak without excessive filing</li>
                  <li>Pre-shaped tips make application faster and consistent</li>
                  <li>Lower nail damage compared to traditional acrylics</li>
                  <li>Can be done at home with a kit and LED lamp</li>
                  <li>Lasts 3 to 5 weeks with good prep</li>
                  <li>Dozens of shapes and sizes available</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>More expensive than a standard gel polish manicure</li>
                  <li>Requires precise tip sizing for best adhesion</li>
                  <li>Less rigid than acrylics, can break under heavy stress</li>
                  <li>Aprés Nail tips and structure gel required (branded system)</li>
                  <li>LED lamp required for curing</li>
                  <li>Poor prep leads to lifting, especially near the cuticle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Remove */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Gel-X Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel-x is one of the easiest nail extension systems to remove because soft gel dissolves in acetone, unlike hard gel which must be filed off. Here is how to remove gel-x nails safely at home:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Clip the extensions down to a manageable length if they are very long.</li>
              <li>Lightly file the shiny surface of each nail with a 180-grit file to break the top coat seal and help acetone penetrate faster.</li>
              <li>Soak a cotton ball in 100% acetone (not acetone-free remover, which will not work).</li>
              <li>Place the soaked cotton ball on the nail and wrap each finger tightly in aluminum foil.</li>
              <li>Wait 15 to 20 minutes. The soft gel tip will begin to soften and break down.</li>
              <li>Press the foil down as you slide it off. Most of the extension should come away with the cotton.</li>
              <li>Use a wooden cuticle pusher to gently scrape off any remaining gel. Do not force it. If the gel is still firm, re-wrap and soak for another 5 to 10 minutes.</li>
              <li>Apply cuticle oil or a nourishing hand cream to rehydrate the nails and surrounding skin.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Never peel gel-x nails off forcefully. Ripping them off pulls layers of the natural nail plate with them, causing thin, weak nails that take months to recover.
            </p>
          </div>

          {/* Can you do gel-x at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Can You Do Gel-X Nails at Home?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Yes. Gel-x is one of the more beginner-friendly nail extension systems for home use. Aprés Nail sells DIY kits that include full-cover soft gel tips in multiple shapes and a box of sizes, a bottle of extend gel, and an LED lamp. Many other brands now sell compatible soft gel tip systems as well.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The hardest part of doing gel-x at home is sizing the tips correctly. A tip that is too small leaves the edges of the nail plate exposed, which causes lifting. A tip that is too large touches the skin and also lifts. Take the time to test-fit every tip before applying the structure gel.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The total cost of a starter kit ranges from $40 to $80. After the initial investment, each set of tips costs $10 to $20 depending on the brand. This makes at-home gel-x significantly cheaper than salon visits over time.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Gel-X Nails</h2>
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
                { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
                { title: "What Are Polygel Nails?", href: "/what-are/what-are-polygel-nails/" },
                { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
                { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
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
