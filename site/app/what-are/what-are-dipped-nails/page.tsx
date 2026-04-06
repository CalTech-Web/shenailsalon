import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Dipped Nails? Dip Powder Explained, Cost & How Long They Last",
  description:
    "Dipped nails are dip powder nails, a nail enhancement using resin and acrylic powder that lasts 3 to 4 weeks without a UV lamp. Learn what dipped nails mean, how they compare to acrylic and gel, cost, and whether they damage your nails.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-dipped-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-dipped-nails/",
    title: "What Are Dipped Nails? Dip Powder Explained, Cost & How Long They Last",
    description:
      "Dipped nails are dip powder nails, a nail enhancement using resin and acrylic powder that lasts 3 to 4 weeks without a UV lamp. Learn what dipped nails mean, how they compare to acrylic and gel, cost, and whether they damage your nails.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are Dipped Nails?", item: "https://shenailsalon.com/what-are/what-are-dipped-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Dipped Nails? Dip Powder Explained, Cost & How Long They Last",
  description:
    "A complete guide to dipped nails (dip powder nails). Covers what dipped nails are, why they are called dipped, how they compare to acrylic and gel, how long they last, cost, safety, and at-home application. Written by Nancy Davidson.",
  url: "https://shenailsalon.com/what-are/what-are-dipped-nails/",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-dipped-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are dipped nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipped nails are the same as dip powder nails. The name comes from the application process: a resin adhesive is applied to the nail and the finger is dipped into a jar of finely milled colored acrylic powder, or the powder is brushed on. Layers are built up, then an activator liquid hardens the powder without a UV or LED lamp. Dipped nails are also called SNS nails, powder dip nails, and dip nails.",
      },
    },
    {
      "@type": "Question",
      name: "Are dipped nails the same as acrylic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipped nails and acrylic nails are not the same, although both use acrylic powder. Acrylics combine liquid monomer with powder to form a sculpted layer applied with a brush, and produce strong fumes. Dipped nails use a resin adhesive with finely milled acrylic powder and no liquid monomer. Dipped nails produce less odor, do not require a lamp, and are generally considered less damaging. Acrylics allow more sculpting and extreme length.",
      },
    },
    {
      "@type": "Question",
      name: "How long do dipped nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipped nails typically last 3 to 4 weeks. With good prep and careful maintenance, some people get 4 to 5 weeks of wear. They last longer than gel polish (2 to 3 weeks) and about the same as a full gel manicure. Chipping and lifting at the cuticle are the most common signs that it is time for a new set.",
      },
    },
    {
      "@type": "Question",
      name: "How much do dipped nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipped nails at a nail salon typically cost $35 to $65 in most parts of the United States. In California, prices range from $40 to $75. A removal-and-new-set appointment combined may run $50 to $90. At-home dip kits are available for $20 to $50 and include powder, base coat, activator, and sealant.",
      },
    },
    {
      "@type": "Question",
      name: "Are dipped nails bad for your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipped nails are generally considered one of the less damaging nail enhancement options because they do not use liquid monomer. The main risk is improper removal: peeling or filing off the dip powder incorrectly can thin the nail plate. Soaking in acetone for 10 to 15 minutes and gently pushing off the softened product is the correct way to remove them. Properly applied and properly removed dipped nails cause minimal natural nail damage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do dipped nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At-home dip powder kits are widely available from brands like SNS, Kiara Sky, and OPI. A basic kit includes base coat, colored powder, activator, and top coat. The main challenges for beginners are getting even powder layers and keeping a clean margin at the cuticle. With a little practice the technique is manageable for home use.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between dipped nails and gel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipped nails use a resin adhesive and acrylic powder hardened by a chemical activator, with no lamp required. Gel nails use a gel product cured under a UV or LED lamp. Dipped nails produce a thicker, harder coating that lasts slightly longer than gel polish. Gel nails, especially gel polish, produce a thinner, more flexible finish that looks more natural. Both are removed with acetone.",
      },
    },
  ],
};

const comparisonRows = [
  ["Application method", "Resin adhesive + acrylic powder layers, dipped or brushed on", "Liquid monomer + acrylic powder, brush-sculpted", "Gel product cured under UV or LED lamp", "Gel polish cured under UV or LED lamp"],
  ["UV or LED lamp required", "No", "No", "Yes", "Yes"],
  ["Odor during application", "Low", "Strong (liquid monomer fumes)", "Low to moderate", "Low"],
  ["Wear time", "3 to 4 weeks", "2 to 3 weeks before fill", "2 to 3 weeks (gel polish) to longer (hard gel)", "2 to 3 weeks"],
  ["Thickness", "Moderate, uniform", "Thick, sculptable", "Thin (gel polish) to moderate (hard gel)", "Thin"],
  ["Length extension", "Yes, with tips or forms", "Yes, extensive sculpting", "Yes, with hard gel forms", "No (overlay only)"],
  ["Removal", "Acetone soak, 10 to 15 minutes", "Acetone soak, 15 to 30 minutes", "Acetone soak or file off (hard gel)", "Acetone soak, 10 to 15 minutes"],
  ["Nail damage risk", "Low to moderate", "Moderate (monomer and filing)", "Low to moderate", "Low"],
  ["Salon cost", "$35 to $65", "$40 to $80 full set", "$30 to $60 (gel polish), $50 to $100 (hard gel)", "$35 to $55"],
  ["DIY friendliness", "Moderate (kits available)", "Low (monomer needs ventilation)", "Moderate (gel polish kits available)", "Moderate (gel polish kits available)"],
];

const wearTimeRows = [
  ["Salon dip powder set", "3 to 4 weeks", "Professional prep and layering extends wear"],
  ["Dip with nail tips added for length", "3 to 5 weeks", "Tips add structure at the stress point"],
  ["At-home dip kit", "2 to 3 weeks", "Prep quality is the biggest factor"],
  ["Dip overlay on natural nails (no tips)", "3 to 4 weeks", "Shorter nails have less leverage stress"],
  ["Dip with nail art", "2 to 4 weeks", "Added elements can lift at edges sooner"],
];

const costRows = [
  ["Dip powder manicure (US average)", "$35 to $65", "Full set with no added length"],
  ["Dip powder manicure (California)", "$40 to $75", "Prices vary by city and salon tier"],
  ["Dip with tips (added length)", "$50 to $85", "Extra charge for tip application"],
  ["Dip removal only", "$15 to $25", "Acetone soak and clean-up"],
  ["Removal plus new set", "$50 to $90", "Combined appointment"],
  ["At-home dip kit", "$20 to $50", "Includes base, powder, activator, sealant"],
  ["Dip powder refill (color reorder)", "$10 to $20 per powder", "Individual colored powders"],
];

export default function DippedNailsPage() {
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
            <span>What Are Dipped Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Dipped Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Dipped nails are dip powder nails: a nail enhancement where a resin adhesive and colored acrylic powder are layered on the nail to build a hard, chip-resistant coating that lasts 3 to 4 weeks, with no UV or LED lamp required. Also called SNS nails, powder dip, and dip nails, this technique is one of the most popular nail services at salons today. This guide explains what dipped nails are, why they are called dipped, how they compare to acrylic and gel, how long they last, what they cost, and whether they are safe for your natural nails. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are dipped nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Dipped Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Dipped nails are a type of nail enhancement that uses two products applied in sequence: a cyanoacrylate-based resin adhesive (similar to nail glue) and a finely milled colored acrylic powder. The nail technician brushes the resin onto the nail plate and then either dips the finger directly into a jar of powder or brushes the powder over the nail. The process is repeated in two to three layers to build color and thickness. An activator liquid is applied over the layers, which reacts with the resin to harden the powder into a smooth, durable coating. No UV or LED lamp is used at any point.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I first tried dipped nails because I wanted something that would last longer than my gel polish manicures were lasting. I was getting about 10 days out of gel before I noticed chipping at the tip, and a friend recommended dip powder. That first set lasted almost four weeks, which I had never gotten from gel before. The finish was thicker and had a slightly different look than gel, but I got used to it quickly.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Dipped nails are the same product as dip powder nails, dip nails, and SNS nails. SNS is a brand name (Signature Nail Systems) that became so widely used it is now treated as a generic term for the technique, similar to how people say Xerox to mean any photocopy. If a nail salon menu lists SNS nails, dip powder nails, or powder dip, they are all referring to the same service.
            </p>
          </div>

          {/* Why are they called dipped nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Why Are They Called Dipped Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The name comes from the original application method: after the resin adhesive is applied to the nail, the entire finger is physically dipped into a small jar of colored powder at a 45-degree angle. The powder clings to the wet resin, creating an even coat. The technique is literally a dipping motion, which is how the product category got its name.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Many salons have moved away from the traditional dipping jar and now brush the powder onto the nail instead, to avoid cross-contamination between clients. The result is identical, but the term "dipped nails" stuck even though the jar-dipping step is no longer universal. If you are curious about how your salon applies powder, it is completely reasonable to ask whether they brush or dip before your appointment.
            </p>
          </div>

          {/* Dipped nails vs other types */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Dipped Nails vs Acrylic vs Gel vs Shellac</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Dipped nails are often compared to acrylic nails and gel nails because all three are popular nail enhancement options that add durability and color. Here is how they compare on the factors that matter most.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Dipped Nails</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel</th>
                    <th className="text-left px-4 py-2 font-semibold">Shellac</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, dip, acrylic, gel, shellac], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{dip}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gel}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shellac}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "#707070" }}>
              For readers who want durability without a lamp, dipped nails are the strongest option. For a thin, natural-looking finish, shellac or gel polish is lighter. For extreme length or sculpted shapes, acrylics offer the most flexibility.
            </p>
          </div>

          {/* How long do dipped nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Dipped Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Dipped nails typically last 3 to 4 weeks. The rigid, thick coating resists chipping better than gel polish and generally outlasts a standard shellac manicure by 1 to 2 weeks. How long your specific set lasts depends on nail prep quality, the number of powder layers, your daily activities, and your natural nail growth rate.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Scenario</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected Wear</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {wearTimeRows.map(([scenario, time, notes], i) => (
                    <tr key={scenario} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{scenario}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{time}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "#707070" }}>
              The most common reasons dipped nails lift early are oily nail beds (skipped or insufficient dehydrator step), layers applied too thick, or physical stress such as typing, cleaning, or sports. If your set lifts at the cuticle within the first week, the prep step is almost always the cause.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Dipped Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Dipped nails cost about $35 to $65 at a nail salon in most parts of the United States. California salons typically charge $40 to $75 for a standard set. Prices vary based on nail length, whether tips are added, nail art complexity, and the salon location.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Service</th>
                    <th className="text-left px-4 py-2 font-semibold">Typical Cost</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(([service, cost, notes], i) => (
                    <tr key={service} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{service}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cost}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Are dipped nails bad for your nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Are Dipped Nails Bad for Your Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Dipped nails are generally considered one of the less damaging nail enhancement options available. The main reason is that dip powder systems do not use liquid monomer, which is one of the more irritating and potentially damaging ingredients in traditional acrylic systems.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The biggest risk to natural nail health with dipped nails is improper removal. Peeling or prying the hardened powder off the nail without soaking it first pulls layers of natural nail plate off with the product. The correct removal method is to soak the nails in pure acetone for 10 to 15 minutes and then gently push the softened powder off with a cuticle pusher. When done correctly, removal causes minimal damage.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Light buffing before application is required to help the product adhere, which removes a small amount of the nail surface. This is standard practice across all nail enhancement types. Using a nail strengthener or cuticle oil between sets can help maintain natural nail health if you get dipped nails regularly.
            </p>
          </div>

          {/* Can you do dipped nails at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Can You Do Dipped Nails at Home?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Yes, dipped nails can be done at home. At-home dip powder kits are available from brands including SNS, Kiara Sky, OPI, Revel Nail, and Nugenesis, and typically cost $20 to $50 for a starter set. Each kit includes a base coat (resin), colored powder, activator, and a top coat or sealant.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The main challenges for first-time home users are getting even powder layers, keeping a clean margin at the cuticle, and getting the activator application right (too much activator can cause yellowing or a tacky finish). The technique takes practice, but it is more beginner-friendly than applying acrylic nails at home because it does not involve liquid monomer or sculpting skills.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For best results at home, start with shorter nails, apply thin powder layers, and take your time with the nail prep step (cleaning, dehydrating, and lightly buffing the natural nail surface). Good prep is the single biggest factor in how long a home dip set lasts.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Dipped Nails Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-lg border" style={{ background: "#F8FBFF", borderColor: "#D1E8FF" }}>
                <p className="font-semibold mb-3 text-sm" style={{ color: "#046BD2" }}>Pros</p>
                <ul className="space-y-2 text-sm" style={{ color: "#707070" }}>
                  <li>No UV or LED lamp needed</li>
                  <li>Lasts 3 to 4 weeks, longer than most gel polish</li>
                  <li>Low odor compared to acrylic systems</li>
                  <li>Hundreds of color and finish options</li>
                  <li>Thick coating protects natural nails from breakage</li>
                  <li>DIY kits widely available</li>
                  <li>Less damaging than acrylic when properly removed</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ background: "#FFF8F8", borderColor: "#FFD1D1" }}>
                <p className="font-semibold mb-3 text-sm" style={{ color: "#B91C1C" }}>Cons</p>
                <ul className="space-y-2 text-sm" style={{ color: "#707070" }}>
                  <li>Thicker look than gel polish, not ideal for very short nails</li>
                  <li>Communal dipping jars can be a hygiene concern</li>
                  <li>Requires acetone for removal (10 to 15 minutes)</li>
                  <li>Peeling it off instead of soaking causes nail damage</li>
                  <li>Home application has a learning curve</li>
                  <li>Ombre and nail art designs are more complex than solid color</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-b pb-5" style={{ borderColor: "#E2EAF4" }}>
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
              { href: "/what-are/what-are-dip-nails/", title: "What Are Dip Nails? (Full Technical Guide)" },
              { href: "/how-to/how-to-apply-dip-powder-nails/", title: "How To Apply Dip Powder Nails at Home" },
              { href: "/how-to/how-to-remove-dip-nails/", title: "How To Remove Dip Nails (Acetone Soak Method)" },
              { href: "/what-are/what-are-acrylic-nails/", title: "What Are Acrylic Nails?" },
              { href: "/what-are/what-are-gel-nails/", title: "What Are Gel Nails?" },
              { href: "/what-are/what-are-shellac-nails/", title: "What Are Shellac Nails?" },
            ].map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 transition-colors"
                style={{ background: "#fff", borderColor: "#E2EAF4" }}
              >
                <span className="text-sm font-medium" style={{ color: "#046BD2" }}>{title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/category/what-are"
              className="text-sm font-semibold hover:underline"
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
