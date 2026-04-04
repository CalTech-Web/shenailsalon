import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Gel Polish? How It Works, How Long It Lasts & Cost",
  description:
    "Gel polish is a UV-cured nail coating that lasts 2 to 4 weeks without chipping. Learn how gel polish differs from regular polish and shellac, how much it costs, and how to remove it.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-gel-polish-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-gel-polish-nails/",
    title: "What Is Gel Polish? How It Works, How Long It Lasts & Cost",
    description:
      "Gel polish is a UV-cured nail coating that lasts 2 to 4 weeks without chipping. Learn how gel polish differs from regular polish and shellac, how much it costs, and how to remove it.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Is Gel Polish?", item: "https://shenailsalon.com/what-are/what-are-gel-polish-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Gel Polish? How It Works, How Long It Lasts & Cost",
  description:
    "Gel polish is a UV-cured nail coating that lasts 2 to 4 weeks without chipping. This guide explains how gel polish works, how it compares to shellac and regular polish, what it costs, and how to remove it safely.",
  url: "https://shenailsalon.com/what-are/what-are-gel-polish-nails/",
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
  dateModified: "2026-04-04",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-gel-polish-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is gel polish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel polish is a nail coating made from a gel-based formula that is applied like regular nail polish but cured under a UV or LED lamp instead of air-drying. Each coat hardens in 30 to 60 seconds under the lamp, producing a chip-resistant finish that lasts 2 to 4 weeks. Gel polish does not add length or thickness to the nail. It is applied over the natural nail only.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gel polish and regular nail polish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular nail polish air-dries through solvent evaporation and typically chips within 3 to 7 days. Gel polish is cured under a UV or LED lamp through a chemical process called photopolymerization, which creates a much harder, more durable surface. Gel polish lasts 2 to 4 weeks without chipping. Removal also differs: regular polish comes off with acetone-free remover in seconds, while gel polish requires soaking in acetone for 10 to 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gel polish and shellac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac is a specific brand of gel polish made by CND (Creative Nail Design). All shellac is gel polish, but not all gel polish is shellac. Shellac uses a proprietary hybrid formula that is slightly thinner and more flexible than many other gel polishes. Other popular gel polish brands include OPI, Gelish, and Essie Gel. In terms of wear time, application, and removal, shellac and other gel polishes are nearly identical.",
      },
    },
    {
      "@type": "Question",
      name: "How long does gel polish last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel polish typically lasts 2 to 4 weeks without chipping. Most people get 2 to 3 weeks of wear before the grown-out base becomes noticeable. Gel polish lasts longer when nails are properly prepped before application, cuticle oil is applied daily during wear, and hands are kept away from prolonged water exposure. Frequent hand washing, cleaning products, and swimming all shorten wear time.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a gel polish manicure cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gel polish manicure at a nail salon typically costs $35 to $65 in the United States. In California, the average is $40 to $70, with higher prices in cities like Los Angeles and San Francisco. A gel polish manicure costs about $15 to $25 more than a regular polish manicure, but it lasts 3 to 4 times longer, so the cost per week is comparable. At-home gel polish kits cost $40 to $80 for the initial setup including polishes, a UV or LED lamp, and remover supplies.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove gel polish at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To remove gel polish at home: (1) Lightly buff the surface of each nail with a 180-grit file to break the top coat seal. (2) Soak a cotton ball in 100% acetone. (3) Place the soaked cotton on the nail and wrap each finger tightly in aluminum foil. (4) Wait 10 to 15 minutes. (5) Press down and slide the foil off. The gel polish should come away with the cotton. (6) Use a cuticle pusher to remove any remaining product. (7) Apply cuticle oil to rehydrate nails. Never peel gel polish off, as this strips the natural nail plate and causes lasting damage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do gel polish at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can apply gel polish at home with a UV or LED nail lamp and gel polish designed for home use. Popular home gel polish brands include Beetles, Modelones, and Sally Hansen Miracle Gel (which uses a special top coat instead of a lamp). Home application requires careful nail prep to get good adhesion and long wear. Expect a learning curve of two to three tries before results approach salon quality.",
      },
    },
  ],
};

const vsRegularPolishRows = [
  ["Drying method", "UV or LED lamp (30 to 60 sec per coat)", "Air dry (10 to 20 min total)"],
  ["Wear time", "2 to 4 weeks", "3 to 7 days"],
  ["Chip resistance", "Very high", "Low to moderate"],
  ["Finish quality", "High-gloss, stays shiny", "Varies, dulls over time"],
  ["Removal method", "Acetone soak (10 to 15 min)", "Standard remover (under 1 min)"],
  ["At-home use", "Requires UV or LED lamp", "No equipment needed"],
  ["Cost (salon)", "$35 to $65", "$15 to $30"],
];

const vsShellacRows = [
  ["Made by", "Many brands (OPI, Gelish, Essie, etc.)", "CND only"],
  ["Formula type", "Varies by brand", "Thin, flexible hybrid polish"],
  ["Cure method", "UV or LED lamp", "UV or LED lamp"],
  ["Wear time", "2 to 4 weeks", "2 to 4 weeks"],
  ["Removal", "Acetone soak (10 to 15 min)", "Acetone soak (10 to 15 min)"],
  ["Adds nail length", "No", "No"],
  ["Cost (salon)", "$35 to $65", "$30 to $60"],
  ["Available at home", "Yes (many brands)", "Yes (CND Shellac kits)"],
];

const gelPolishBrandsRows = [
  ["OPI Infinite Shine", "Widely available, 200+ shades", "High"],
  ["Gelish", "Professional grade, used in many salons", "Very high"],
  ["CND Shellac", "CND's proprietary hybrid formula", "High"],
  ["Beetles Gel Polish", "Popular for home use, affordable kits", "Good"],
  ["Modelones", "Budget-friendly home kits with lamp", "Good"],
  ["Essie Gel Couture", "Fashion-forward shades, drugstore available", "Moderate"],
  ["Sally Hansen Miracle Gel", "No-lamp option, uses special top coat", "Moderate"],
];

export default function GelPolishNailsPage() {
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
            <span>What Is Gel Polish?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Is Gel Polish?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Gel polish is a UV-cured nail coating that lasts 2 to 4 weeks without chipping. This guide explains how gel polish works, how it compares to regular polish and shellac, how much a gel manicure costs, and how to remove it safely at home. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What is gel polish */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Gel Polish?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel polish is a nail coating made from a light-activated gel formula. It applies in thin coats like regular nail polish, but instead of air-drying, each coat is cured under a UV or LED lamp for 30 to 60 seconds. The lamp triggers a chemical reaction that turns the soft gel into a hard, chip-resistant surface bonded to the nail.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I switched to gel polish years ago and have never gone back to regular lacquer. The difference in wear time is dramatic. My regular polish chips within three to four days, especially at the tips. Gel polish lasts me two to three full weeks with no chips at all, even with daily typing, cooking, and everything else.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Gel polish is applied over the natural nail only. It does not add length or create extensions. If you want longer nails, you would need <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">gel nail extensions</Link>, <Link href="/what-are/what-are-acrylic-nails/" style={{ color: "#046BD2" }} className="hover:underline">acrylic nails</Link>, or <Link href="/what-are/what-are-gel-x-nails/" style={{ color: "#046BD2" }} className="hover:underline">gel-x nails</Link>. Gel polish is strictly a color and finish treatment for the natural nail.
            </p>
          </div>

          {/* How does gel polish work */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Does Gel Polish Work?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel polish contains special molecules called photoinitiators that react to UV or LED light. When the lamp shines on the wet gel, the photoinitiators trigger a process called photopolymerization, which links the gel molecules together into a rigid, cross-linked structure. This is what makes cured gel polish so much harder and more durable than air-dried lacquer.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A standard gel polish manicure at a nail salon follows these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Nails are filed and shaped. Cuticles are pushed back.</li>
              <li>A nail dehydrator or primer is applied to remove oils and help adhesion.</li>
              <li>A base coat is applied and cured under the lamp for 30 to 60 seconds.</li>
              <li>Two coats of gel color are applied, each cured separately.</li>
              <li>A top coat is applied and cured.</li>
              <li>A gel cleanser or isopropyl alcohol is wiped over the nails to remove the tacky inhibition layer.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Once the final coat is cured, the nails are completely hard and dry. No wait time is needed before leaving the salon, which is one of gel polish's biggest practical advantages over regular lacquer.
            </p>
          </div>

          {/* Gel polish vs regular polish */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel Polish vs Regular Nail Polish</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The two main differences between gel polish and regular nail polish are wear time and the removal process. Gel polish lasts 3 to 4 times longer, but it requires acetone and more effort to remove. Regular polish is faster to apply and remove but chips within days.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Polish</th>
                    <th className="text-left px-4 py-2 font-semibold">Regular Polish</th>
                  </tr>
                </thead>
                <tbody>
                  {vsRegularPolishRows.map(([feature, gel, regular], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gel}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Gel polish vs shellac */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel Polish vs Shellac</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <Link href="/what-are/what-are-shellac-nails/" style={{ color: "#046BD2" }} className="hover:underline">Shellac</Link> is a specific brand of gel polish made by CND (Creative Nail Design). In practical terms, shellac and gel polish work the same way, last the same amount of time, and are removed the same way. The difference is brand and formula: CND Shellac uses a proprietary thin, flexible hybrid formulation, while other gel polishes vary by brand.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Many nail salons advertise shellac but may use a different gel polish brand. In everyday usage, "shellac" and "gel polish" are often used interchangeably by salon clients and even some technicians.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Polish</th>
                    <th className="text-left px-4 py-2 font-semibold">Shellac</th>
                  </tr>
                </thead>
                <tbody>
                  {vsShellacRows.map(([feature, gel, shellac], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gel}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shellac}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How long does gel polish last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Does Gel Polish Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel polish lasts 2 to 4 weeks for most people. The first two weeks are almost always chip-free. After that, the color itself usually stays intact but the regrowth gap at the base of the nail becomes more noticeable. Most people schedule gel polish fills or removal every 2 to 3 weeks.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Factors that extend gel polish wear time:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Proper nail prep before application (dehydrated, oil-free nail surface)</li>
              <li>Daily cuticle oil applied to the nail edges</li>
              <li>Wearing gloves for cleaning and dishwashing</li>
              <li>Avoiding picking or peeling at the polish edges</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Factors that shorten gel polish wear time include frequent swimming, prolonged hand washing, acetone exposure, and trauma to the nail tips such as heavy keyboard use or opening packages with your nails.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Does Gel Polish Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A gel polish manicure at a nail salon typically costs $35 to $65 in the United States. In California, prices run $40 to $70 depending on the city, with Los Angeles and San Francisco salons at the higher end.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Compared to a regular polish manicure at $15 to $30, gel polish costs about $20 more per visit. But gel polish lasts 3 to 4 times longer, so the cost per week is actually similar or lower over time.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For home use, a starter gel polish kit costs $40 to $80 and includes several gel polishes, a UV or LED lamp, base coat, top coat, and removal supplies. After the initial lamp purchase, individual gel polish bottles cost $8 to $20 each.
            </p>
          </div>

          {/* Popular brands */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Popular Gel Polish Brands</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel polish is made by many brands across professional and consumer markets. Here are some of the most widely used:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Brand</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                    <th className="text-left px-4 py-2 font-semibold">Durability</th>
                  </tr>
                </thead>
                <tbody>
                  {gelPolishBrandsRows.map(([brand, notes, durability], i) => (
                    <tr key={brand} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{brand}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{durability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Gel Polish</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Lasts 2 to 4 weeks without chipping</li>
                  <li>Nails are fully dry immediately after curing</li>
                  <li>High-gloss finish that stays shiny throughout wear</li>
                  <li>Hundreds of color options across many brands</li>
                  <li>Lower nail damage than acrylics when removed properly</li>
                  <li>Can be done at home with a basic lamp kit</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>Cannot add nail length or thickness</li>
                  <li>Requires UV or LED lamp for curing</li>
                  <li>Must be removed with acetone (not regular remover)</li>
                  <li>Repeated acetone exposure dries nails over time</li>
                  <li>More expensive than regular polish per salon visit</li>
                  <li>Home application takes practice to get right</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to remove */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Gel Polish at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel polish must be removed with acetone. Peeling it off pulls the top layers of the natural nail with it, which causes lasting thinning and weakness. Here is how to remove gel polish safely at home:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Lightly buff the surface of each nail with a 180-grit file to break the top coat seal.</li>
              <li>Soak a cotton ball in 100% acetone.</li>
              <li>Place the soaked cotton ball on the nail and wrap the finger tightly in aluminum foil.</li>
              <li>Wait 10 to 15 minutes.</li>
              <li>Press down as you slide the foil off. The softened gel should lift away with the cotton.</li>
              <li>Use a wooden cuticle pusher to gently remove any stubborn product. Do not scrape hard.</li>
              <li>Apply cuticle oil and hand cream to rehydrate nails and surrounding skin.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Acetone-free removers do not work on gel polish. You need 100% pure acetone. After removal, give nails a few days to rest and recover their natural moisture before the next gel application.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Gel Polish</h2>
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
                { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
                { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
                { title: "How to Remove Gel Nails at Home", href: "/how-to/how-to-remove-gel-nails/" },
                { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
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
                Browse all What Are guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
