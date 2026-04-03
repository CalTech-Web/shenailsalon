import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Nails: What They Are, vs Acrylic, Cost & Designs",
  description:
    "Solar Nails are a Creative Nail Design acrylic enhancement with pink-and-white color built into the acrylic. Learn what solar nails are, how they compare to regular acrylic and gel, how long they last, and what they cost.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-solar-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-solar-nails/",
    title: "Solar Nails: What They Are, vs Acrylic, Cost & Designs",
    description:
      "Solar Nails are a Creative Nail Design acrylic enhancement with pink-and-white color built into the acrylic. Learn what solar nails are, how they compare to regular acrylic and gel, how long they last, and what they cost.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Solar Nails", item: "https://shenailsalon.com/what-are/what-are-solar-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Solar Nails: What They Are, vs Acrylic, Cost & Designs",
  description:
    "A complete guide to solar nails. Covers what solar nails are, how they differ from standard acrylic and gel nails, the classic pink and white design, how long they last, cost breakdown, and removal.",
  url: "https://shenailsalon.com/what-are/what-are-solar-nails/",
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
  dateModified: "2026-04-03",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-solar-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are solar nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar Nails are an acrylic nail enhancement made with products from Creative Nail Design (CND). The signature look uses a pink acrylic powder for the nail body and a white acrylic powder for the tip, creating a permanent French manicure effect built directly into the acrylic. Because the color is part of the acrylic itself, solar nails do not need polish applied on top. The technique has been offered in nail salons since the 1990s and remains one of the most recognizable acrylic nail styles.",
      },
    },
    {
      "@type": "Question",
      name: "Are solar nails the same as acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar Nails are a type of acrylic nail. Both use a liquid monomer and powder polymer that harden through a chemical reaction without a UV lamp. The differences are the brand of products used (Solar Nails use Creative Nail Design formulas), the built-in pink and white color system, and the application method. Solar nails are usually applied directly to the natural nail rather than over a plastic tip. Standard acrylic nails use any brand of monomer and polymer the salon stocks and are finished with polish on top.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between solar nails and regular acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main differences are the color system and removal method. Solar nails use CND pink and white acrylic powders that create a French manicure look without any polish. Standard acrylic nails are applied in a neutral clear or natural color and then polished. Solar nails are also acetone-resistant, meaning they must be filed or drilled off rather than soaked off in acetone the way most standard acrylic nails can be removed.",
      },
    },
    {
      "@type": "Question",
      name: "How long do solar nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar nails typically last 3 to 4 weeks between fill appointments. Because the color is built into the acrylic rather than applied as polish, there is no chipping or peeling between visits. The natural nail grows out from the cuticle, creating a gap that needs to be filled with fresh acrylic. With consistent fills, a full set can last 6 to 8 weeks before removal and reapplication is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "How much do solar nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full set of solar nails typically costs $45 to $85 at a salon. Solar nails often cost slightly more than standard acrylic because CND products carry a premium and because the two-color application requires additional skill. Fill appointments run $30 to $55 every 3 to 4 weeks. In California, mid-range salons charge $55 to $90 for a full solar nail set.",
      },
    },
    {
      "@type": "Question",
      name: "Can you remove solar nails with acetone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, solar nails cannot be removed by soaking in acetone the way standard acrylic can. CND's formula is more resistant to acetone. The correct removal method is to have a technician file or drill the acrylic down until it is thin enough to gently lift off. Attempting to soak or force off solar nails at home risks damaging the natural nail. Removal at a salon typically takes 20 to 40 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Are solar nails better than regular acrylic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whether solar nails are better depends on what you want. Solar nails offer a classic, low-maintenance French manicure look that does not chip because the color is in the acrylic. They also last slightly longer between fills than standard acrylic. On the other hand, they are more expensive, harder to remove, and less versatile if you want to change nail colors regularly. Standard acrylic gives you more color flexibility. Neither is universally better; the right choice depends on your lifestyle and aesthetic preferences.",
      },
    },
  ],
};

const vsColHeaders = ["Feature", "Solar Nails", "Standard Acrylic", "Gel Nails"];
const vsRows = [
  ["Chemistry", "Acrylic (CND monomer + polymer)", "Acrylic (any brand)", "UV/LED-cured gel resin"],
  ["UV/LED lamp needed", "No", "No", "Yes"],
  ["Color system", "Pink and white powder built in", "Polish applied on top", "Gel color or polish on top"],
  ["Applied over tips", "Usually direct on natural nail", "With or without tips", "With or without tips"],
  ["Odor during application", "Strong (monomer fumes)", "Strong (monomer fumes)", "Mild to none"],
  ["Removal method", "File or drill off (acetone-resistant)", "Acetone soak-off (15 to 20 min)", "Acetone soak-off (10 to 15 min)"],
  ["Wear time between fills", "3 to 4 weeks", "2 to 3 weeks", "2 to 3 weeks"],
  ["Average full set cost", "$45 to $85", "$35 to $75", "$50 to $100"],
];

const designRows = [
  ["Classic pink and white", "Soft pink body, bright white tip, no polish needed", "Everyday wear, professional settings, bridal"],
  ["All-pink solar", "No white tip; sheer pink acrylic across the whole nail for a natural look", "Subtle enhancement, short-to-medium lengths"],
  ["Soft ombre solar", "Pink fades gradually into white toward the tip rather than a hard line", "Bridal, formal events, a softer take on the classic"],
  ["Colored polish over solar base", "A gel or regular polish color applied over the pink acrylic base", "Seasonal colors, trend looks, nail art without changing the base"],
  ["Glitter solar nails", "Fine glitter blended into the white tip powder or applied as a top layer", "Special occasions, holiday nails, parties"],
  ["Nail art on solar", "Painted designs, foils, or gems applied over the finished acrylic surface", "Custom looks that preserve the structured solar base"],
];

const costRows = [
  ["Full set, salon (standard length)", "$45 to $70", "Shorter application time; classic pink and white only"],
  ["Full set, salon (long)", "$65 to $85", "More product used; longer filing and shaping time"],
  ["Fill appointment", "$30 to $55", "Every 3 to 4 weeks; pink and white fills take more skill"],
  ["Nail art add-on", "+$5 to $30", "Per set; gems, foils, or painted designs"],
  ["Removal at salon", "$15 to $30", "File-down removal; 20 to 40 minutes per full set"],
  ["At-home CND kit", "$40 to $80", "Professional-grade products; steep learning curve for the two-color technique"],
  ["California salon average", "$55 to $90", "Full set at mid-range salons in major CA cities"],
];

const prosData = [
  "Built-in French manicure look that cannot chip or peel between fills",
  "No polish top coat required, which reduces maintenance between appointments",
  "Longer time between fills (3 to 4 weeks) compared to standard acrylic",
  "Very durable acrylic base that holds length and nail art well",
  "Classic, professional appearance that suits formal settings and everyday wear",
  "CND products have a long track record in professional salons and are widely available",
];

const consData = [
  "Cannot be removed with acetone soak-off; requires filing or drilling, which takes longer",
  "Generally more expensive than standard acrylic because of the CND product cost",
  "Less flexible for color changes because the pink and white base is fixed",
  "Strong chemical odor during application from the acrylic monomer",
  "Two-color technique requires a skilled technician; quality varies significantly by salon",
  "The term is used loosely in some salons to mean any acrylic, so confirm products before booking",
];

export default function SolarNailsPage() {
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
            <span>Solar Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Solar Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Solar Nails are a specific type of acrylic nail enhancement made with Creative Nail Design (CND) products. The classic look uses a pink acrylic powder for the nail body and a white acrylic powder for the tip, creating a permanent French manicure effect built directly into the acrylic. I first came across them at a salon that had a little sign advertising &ldquo;Solar Nails&rdquo; and had no idea what made them different from the acrylic nails I already knew. This guide covers what solar nails actually are, how they compare to standard acrylic and gel, the designs you can get, how long they last, and what they cost. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are solar nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Solar Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Solar Nails are an acrylic nail system developed and trademarked by Creative Nail Design, commonly known as CND. Like all acrylic nails, solar nails are created by combining a liquid monomer and a powder polymer that react chemically to harden without a UV or LED lamp. What makes solar nails distinct is the two-color powder system: a soft pink powder is used to cover the nail body from cuticle to the start of the free edge, and a bright white powder is used to build out the tip. The result is a French manicure look that is embedded in the acrylic itself rather than painted on top.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Because the color is part of the acrylic structure, solar nails do not require a polish top coat between appointments. The pink and white stays intact as the nail grows. When the natural nail grows out, only the new growth at the cuticle area needs to be filled, and that fill restores the color seamlessly. This is why solar nails are sometimes described as low-maintenance between visits.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The name &ldquo;solar&rdquo; comes from CND, which introduced the product line decades ago. Over time, the term has been used loosely in many nail salons to describe any pink and white acrylic set, even when the products used are not actually CND. If you want the authentic solar nail system, ask the salon specifically whether they use Creative Nail Design products before booking.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Solar nails are applied directly to the natural nail in most cases, without a plastic tip underneath. The technician sculpts the pink and white acrylic to the desired length and shape using a nail form placed under the free edge. This direct-to-natural-nail application is part of why CND positions solar nails as a technique that strengthens the natural nail rather than covering it with a tip.
            </p>
          </div>

          {/* Solar vs acrylic vs gel comparison table */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Solar Nails vs Acrylic vs Gel Nails</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Solar nails, standard acrylic, and gel nails are all professional nail enhancements, but they differ in chemistry, color system, odor, and how they are removed. The table below shows the key differences.
            </p>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "#E2EAF4" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#EBF4FF" }}>
                    {vsColHeaders.map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold" style={{ color: "#1E293B" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {vsRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FBFF" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3" style={{ color: j === 0 ? "#1E293B" : "#707070", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#707070" }}>
              For a deeper comparison of acrylic chemistry and application, see the{" "}
              <Link href="/what-are/what-are-acrylic-nails/" style={{ color: "#046BD2" }} className="hover:underline">acrylic nails guide</Link>.{" "}
              For gel nails, see the{" "}
              <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">gel nails guide</Link>.
            </p>
          </div>

          {/* Are solar nails acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Are Solar Nails Acrylic?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Yes. Solar nails are a form of acrylic nails. The chemistry is the same: a liquid monomer combines with a powder polymer to form a hard acrylic compound through a chemical reaction that does not require heat or light. Solar nails use CND-branded monomer and polymer, while standard acrylic nails can use any brand.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The key distinction is the powder color system. Standard acrylic uses a single clear or natural powder and relies on polish for color. Solar nails use two specific powder shades — pink and white — that are chosen to mimic the appearance of a French manicure at every stage of the nail. The pink sits under what will become the nail body; the white extends past the fingertip to form the free edge.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Common source of confusion</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Many salons advertise &ldquo;solar nails&rdquo; as a general menu item but use non-CND acrylic products to create a pink and white set. Technically, only sets using Creative Nail Design products are true solar nails. If you ask for solar nails and receive a pink and white acrylic set made with another brand, it will look identical but is not the trademarked solar nail system.
              </p>
            </div>
          </div>

          {/* Solar nails vs gel nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Solar Nails vs Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Solar nails and gel nails are fundamentally different products. Solar nails are acrylic: they harden through a chemical reaction between monomer and polymer in open air, with no lamp required. Gel nails are a resin that remains soft until exposed to UV or LED light, which triggers the curing process. The feel, flexibility, and odor are different.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel nails tend to feel more flexible and lightweight on the finger. Solar nails are harder and more rigid, which makes them better for longer lengths but can feel slightly heavier. Gel nails have little to no odor during application; solar nails have a strong monomer scent that requires good ventilation.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For removal, standard gel nails soak off in acetone in about 10 to 15 minutes. Solar nails must be filed or drilled off because of their acetone resistance. If easy removal is important to you, gel nails offer a simpler at-home or salon removal process.
            </p>
          </div>

          {/* Designs section */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Solar Nail Designs and Color Options</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The classic solar nail look is pink and white, but there are several ways to customize or vary the design. The table below covers the main options.
            </p>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "#E2EAF4" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#EBF4FF" }}>
                    {["Design", "Description", "Best For"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold" style={{ color: "#1E293B" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {designRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FBFF" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3" style={{ color: j === 0 ? "#1E293B" : "#707070", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How long do solar nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Solar Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Solar nails last 3 to 4 weeks between fill appointments. This is slightly longer than the 2 to 3 week fill schedule typical for standard acrylic, and it is because the color does not chip or fade between visits. The only visible change over time is the new nail growth at the cuticle, which shows up as a gap between the pink acrylic and the skin. That gap is what prompts the fill appointment.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              With consistent fills, a full solar nail set can last 6 to 8 weeks before the acrylic needs to be removed and reapplied from scratch. Letting fills go beyond 4 to 5 weeks creates a larger and more visible growth gap and puts mechanical stress on the acrylic bond, increasing the risk of lifting or breakage.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Factors that shorten solar nail wear include daily water exposure (dishwashing, long showers, swimming), using the nails as tools for opening packages or scratching surfaces, and low-quality application that does not properly prepare the natural nail plate before acrylic adhesion.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Solar Nails Cost?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Solar nails cost slightly more than standard acrylic because of the CND product premium and the skill required for the two-color technique. The table below shows typical pricing at salons.
            </p>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "#E2EAF4" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#EBF4FF" }}>
                    {["Service", "Typical Cost", "Notes"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold" style={{ color: "#1E293B" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FBFF" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3" style={{ color: j === 0 ? "#1E293B" : "#707070", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Pros and Cons of Solar Nails</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3" style={{ color: "#1E293B" }}>Pros</h3>
                <ul className="space-y-2">
                  {prosData.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#707070" }}>
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(4,107,210,0.1)", color: "#046BD2" }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3" style={{ color: "#1E293B" }}>Cons</h3>
                <ul className="space-y-2">
                  {consData.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#707070" }}>
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(220,38,38,0.1)", color: "#DC2626" }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Removal */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Are Solar Nails Removed?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Solar nails cannot be removed by soaking in acetone the way most standard acrylic nails can. CND&apos;s formula is formulated to be more durable and acetone-resistant, which contributes to the longer wear time but also means the removal process is more involved.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              At a salon, a technician uses a coarse nail file or an electric file (e-file) to file down the bulk of the acrylic until it is very thin. The remaining thin layer is then gently lifted or filed away without excessive pressure on the natural nail. The process takes approximately 20 to 40 minutes for a full set and costs $15 to $30 at most salons.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Attempting to remove solar nails at home by soaking or forcing them off risks damaging or thinning the natural nail plate. If you want to remove them at home, use a coarse file to thin the acrylic surface gradually and work slowly rather than trying to pop or peel any sections.
            </p>
          </div>

          {/* FAQ section */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="rounded-lg border p-5" style={{ borderColor: "#E2EAF4", background: "#F8FBFF" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#1E293B" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related content */}
      <section className="py-10 px-4" style={{ background: "#F8FBFF" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1E293B" }}>Related Nail Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/what-are/what-are-acrylic-nails/", label: "What Are Acrylic Nails?" },
              { href: "/what-are/what-are-gel-nails/", label: "What Are Gel Nails?" },
              { href: "/what-are/what-are-dip-nails/", label: "What Are Dip Nails?" },
              { href: "/what-are/what-are-fake-nails/", label: "What Are Fake Nails?" },
              { href: "/what-are/what-are-nail-extensions/", label: "What Are Nail Extensions?" },
              { href: "/how-to/how-to-remove-acrylic-nails/", label: "How to Remove Acrylic Nails" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 transition-colors"
                style={{ background: "#fff", borderColor: "#E2EAF4" }}
              >
                <span className="text-sm font-medium" style={{ color: "#046BD2" }}>{label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/category/what-are"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: "#046BD2" }}
            >
              Browse all nail guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
