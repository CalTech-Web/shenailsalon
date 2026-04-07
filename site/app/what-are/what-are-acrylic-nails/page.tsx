import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acrylic Nails: What They Are, Designs, Shapes & Cost Guide",
  description:
    "Acrylic nails are a nail enhancement made from a monomer liquid and polymer powder that hardens into a durable coating over the natural nail. Learn what acrylic nails are, popular designs, short vs long options, cost, and how they compare to gel and dip.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-acrylic-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-acrylic-nails/",
    title: "Acrylic Nails: What They Are, Designs, Shapes & Cost Guide",
    description:
      "Acrylic nails are a nail enhancement made from a monomer liquid and polymer powder that hardens into a durable coating over the natural nail. Learn what acrylic nails are, popular designs, short vs long options, cost, and how they compare to gel and dip.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Acrylic Nails", item: "https://shenailsalon.com/what-are/what-are-acrylic-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Acrylic Nails: What They Are, Designs, Shapes & Cost Guide",
  description:
    "A complete guide to acrylic nails. Covers what acrylic nails are, how they are made, popular designs and colors, short vs long options, shapes, cost, how they compare to gel and dip nails, and how to do them at home.",
  url: "https://shenailsalon.com/what-are/what-are-acrylic-nails/",
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
  dateModified: "2026-03-22",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-acrylic-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acrylic nails are a nail enhancement created by combining a liquid monomer (typically ethyl methacrylate) with a powder polymer. When mixed, the two components form a pliable bead that a nail technician sculpts over the natural nail or a nail tip. The mixture self-cures through a chemical reaction called polymerization, hardening into a rigid, durable coating without the need for a UV or LED lamp. Acrylic nails can add length, strength, and a smooth surface for polish or nail art.",
      },
    },
    {
      "@type": "Question",
      name: "How long do acrylic nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full set of acrylic nails typically lasts 6 to 8 weeks before the product needs to be fully removed or replaced. However, fill appointments are required every 2 to 3 weeks to rebalance the acrylic as the natural nail grows and a gap appears near the cuticle. With regular fills, the same set can last for months. Without fills, the gap widens, increasing the risk of lifting and bacterial growth under the nail.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between acrylic nails and gel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acrylic nails are made from a liquid monomer and powder polymer that air-cures through a chemical reaction. Gel nails are made from a gel formula that must be cured under a UV or LED lamp. Acrylic nails are generally stronger and more durable, making them better for long lengths. Gel nails feel lighter and more flexible, look glossier, and are odorless during application. Acrylic nails can be soaked off with acetone; hard gel nails must be filed off. Both last 2 to 3 weeks before a fill is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Are acrylic nails bad for your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acrylic nails are not inherently damaging if they are applied and removed correctly. The main risks come from improper removal, which can thin or break the natural nail plate if the acrylic is peeled or pried off instead of soaked in acetone. Over-filing of the natural nail during prep can also cause thinning. The monomer chemicals can cause skin sensitization with repeated direct exposure. When applied by a trained technician and removed by soaking with acetone, acrylic nails leave the natural nail in good condition.",
      },
    },
    {
      "@type": "Question",
      name: "How much do acrylic nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full set of acrylic nails at a salon typically costs $35 to $80 depending on length, shape, and location. In California, mid-range salons charge $45 to $100 for a full set. Fill appointments to maintain the nails every 2 to 3 weeks cost $20 to $50. Adding nail art, ombre effects, or chrome powder increases the total by $10 to $40. Budget salons may offer full sets for $25 to $40, while high-end or nail art focused salons charge $80 to $150 or more.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do acrylic nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At-home acrylic nail kits include a liquid monomer, powder polymer, nail forms or tips, a nail brush, and a file. The process is the same as in a salon: prep the nail, apply a primer, mix the monomer and powder on the brush, apply the bead to the nail, sculpt the shape, and file once cured. The main challenge is controlling the consistency of the bead and shaping the nail evenly. Beginners often start with nail tips rather than sculpting over forms. Proper ventilation is important because the monomer liquid has a strong odor.",
      },
    },
  ],
};

const vsGelRows = [
  ["How it cures", "Air-cures (chemical reaction)", "UV/LED lamp required"],
  ["Odor during application", "Strong (monomer fumes)", "Little to none"],
  ["Feel", "Rigid, very durable", "Lighter, slightly flexible"],
  ["Best for", "Long lengths, high durability", "Natural look, shorter wear"],
  ["Removal", "Soak off with acetone", "Hard gel must be filed; soft gel soaks off"],
  ["Fill schedule", "Every 2 to 3 weeks", "Every 2 to 3 weeks"],
  ["Cost per full set", "$35 to $80", "$45 to $100"],
  ["Damage risk", "Low if removed correctly", "Low if removed correctly"],
];

const vsDipRows = [
  ["Application method", "Brush + liquid monomer + powder", "Dip finger in powder + activator spray"],
  ["Curing method", "Air-cures (no lamp)", "Air-cures (activator reaction)"],
  ["Durability", "Very high", "High, slightly more rigid"],
  ["Thickness", "Can be thin to thick", "Tends to be thicker"],
  ["Odor", "Strong monomer smell", "Mild"],
  ["Removal", "Soak off with acetone (15 to 20 min)", "Soak off with acetone (15 to 20 min)"],
  ["Best for", "Long sculpted lengths, nail art", "Natural-looking enhancement, lower odor preference"],
];

const shapesRows = [
  ["Coffin (ballerina)", "Tapered sides, flat square tip", "Long to extra long", "Bold, geometric, fashion-forward"],
  ["Almond", "Tapered sides, soft rounded tip", "Medium to long", "Elegant, classic, elongates fingers"],
  ["Stiletto", "Tapered to a sharp point", "Long to extra long", "Dramatic, edgy, high-fashion"],
  ["Square", "Straight sides, flat top", "Short to medium", "Clean, modern, practical"],
  ["Round", "Straight sides, rounded tip", "Short to medium", "Soft, natural, low maintenance"],
  ["Oval", "Slightly tapered sides, rounded tip", "Medium", "Feminine, flattering on most fingers"],
];

const designRows = [
  ["Pink acrylic nails", "6,300/mo", "Versatile, works from soft baby pink to hot pink; suits every length"],
  ["White acrylic nails", "5,500/mo", "Clean and minimal; modern alternative to french tip"],
  ["French tip acrylic nails", "5,100/mo", "Classic nude base with white tip; coffin and almond shapes are most popular"],
  ["Black acrylic nails", "4,800/mo", "High-contrast, edgy; especially popular on coffin and stiletto shapes"],
  ["Ombre acrylic nails", "600/mo", "Gradient from one color to another; pink-to-white is the most searched variation"],
  ["Nude acrylic nails", "1,700/mo", "Skin-tone match; makes nails appear longer and naturally polished"],
  ["Chrome acrylic nails", "Part of chrome cluster", "Mirror powder finish applied over a gel layer; creates metallic effect"],
];

const applicationSteps = [
  "Clean and sanitize hands. Remove any existing polish. Push back cuticles gently with a cuticle pusher.",
  "Buff the surface of the natural nail lightly with a fine-grit file to remove shine. This helps the acrylic bond.",
  "Fit a nail tip if adding length, or fit a nail form under the free edge if sculpting without a tip.",
  "Apply a thin layer of nail primer (acid-based or acid-free) to the natural nail and let it dry fully. Primer improves adhesion.",
  "Dip the acrylic brush into the liquid monomer, then press it into the powder polymer to pick up a small bead of mixed product.",
  "Place the bead on the nail near the cuticle area and gently press and smooth toward the tip, shaping as you go. Work quickly because the bead sets within 60 to 90 seconds.",
  "Apply a second bead over the free edge for thickness and length. File the sides and tip to shape once the acrylic is fully hard (about 2 to 3 minutes).",
  "Buff the surface smooth, wipe with a lint-free pad, and apply gel polish or regular polish. Finish with a top coat.",
];

const atHomeSteps = [
  "Purchase a beginner acrylic kit that includes a liquid monomer, clear or pink powder, nail tips, nail glue, a size 8 or 10 nail brush, a nail file (100/180 grit), and a buffer.",
  "Work in a ventilated area. The monomer liquid has a strong odor. Open a window or use a small fan to direct fumes away from your face.",
  "Prep your nails: remove polish, push back cuticles, buff the surface lightly to remove shine, and clean with rubbing alcohol.",
  "Apply nail tips in the correct size for each finger using nail glue. Trim tips to the desired length before applying acrylic.",
  "Dip your brush in the monomer and wipe off excess on the edge of the bottle. Press the brush into the powder to pick up a small, smooth bead.",
  "Apply the bead near the cuticle zone and push it toward the tip in one smooth motion. Keep beads small to avoid bubbles and lumps.",
  "Let the acrylic cure fully (2 to 3 minutes per nail), then file and buff the surface smooth.",
  "Apply a base coat, then your color or nail art, then a top coat.",
];

const costRows = [
  ["Budget salon", "Full set", "$25 to $45"],
  ["Mid-range salon", "Full set", "$45 to $80"],
  ["High-end or nail art salon", "Full set", "$80 to $150+"],
  ["Any salon", "Fill (every 2 to 3 weeks)", "$20 to $50"],
  ["Any salon", "Nail art add-on", "$10 to $40"],
  ["California (mid-range)", "Full set", "$50 to $100"],
  ["At-home kit", "Starter kit", "$20 to $40 one-time"],
];

export default function AcrylicNailsPage() {
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
            <span>Acrylic Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Acrylic Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Acrylic nails are a nail enhancement made by combining a liquid monomer with a powder polymer that hardens into a durable coating over the natural nail. This guide covers what acrylic nails are, how they differ from gel and dip nails, popular shapes and designs, how the application process works, how to do them at home, how long they last, and how much they cost. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are acrylic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Acrylic Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic nails are a type of nail enhancement created by combining two components: a liquid monomer (typically ethyl methacrylate or methyl methacrylate) and a powder polymer. When a nail technician dips a brush into the liquid and then presses it into the powder, a small ball of mixed product forms. This bead is applied to the natural nail or a nail tip, sculpted into shape, and hardens through a chemical process called polymerization.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Unlike <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">gel nails</Link>, acrylic nails do not require a UV or LED lamp to cure. The hardening happens automatically through the chemical reaction between the monomer and polymer, typically completing within 2 to 3 minutes per nail. This makes acrylic one of the most efficient nail enhancement methods in professional salons.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic nails can be applied directly over the natural nail to add strength and a smooth surface, or they can be used to extend the nail past the fingertip using a nail tip or sculpting form. The result is a hard, durable coating that is strong enough to hold long lengths and complex nail art without cracking or bending.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Acrylic nails have been the most popular professional nail enhancement method in the United States for decades. They are available in every nail shape including coffin, almond, stiletto, square, round, and oval, and they serve as the base for a wide range of nail designs.
            </p>
          </div>

          {/* Acrylic vs Gel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Acrylic Nails vs Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic and gel nails are both professional nail enhancements, but they differ in chemistry, feel, application process, and removal. Acrylic nails are harder and more rigid, making them better suited for long lengths and high-impact nail art. <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">Gel nails</Link> feel lighter and more natural on the finger, and the application is odorless.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel</th>
                  </tr>
                </thead>
                <tbody>
                  {vsGelRows.map(([feature, acrylic, gel], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Acrylic vs Dip */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Acrylic Nails vs Dip Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic and <Link href="/what-are/what-are-dip-nails/" style={{ color: "#046BD2" }} className="hover:underline">dip nails</Link> use similar chemistry since both rely on a powder bonded to the nail, but the application method is different. Dip nails coat the nail in powder by dipping the finger directly into a jar or brushing powder over an adhesive, which is then sealed with an activator spray. Acrylic nails are brushed on as a mixed bead and shaped by hand. Acrylic allows more control over shaping and length; dip nails are faster and have less odor.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                    <th className="text-left px-4 py-2 font-semibold">Dip</th>
                  </tr>
                </thead>
                <tbody>
                  {vsDipRows.map(([feature, acrylic, dip], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{dip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Acrylic nail shapes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Acrylic Nail Shapes</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic nails can be filed into any shape because the product is hard and can be sculpted precisely. The shape is chosen before the final filing step. Here are the most common acrylic nail shapes and when to choose each one.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Shape</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Length</th>
                    <th className="text-left px-4 py-2 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {shapesRows.map(([shape, desc, length, best], i) => (
                    <tr key={shape} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{shape}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{desc}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{length}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              See the complete breakdown of every nail shape in the <Link href="/what-are/what-are-nail-shapes/" style={{ color: "#046BD2" }} className="hover:underline">nail shapes guide</Link>.
            </p>
          </div>

          {/* Short acrylic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Short Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Short acrylic nails extend 2 to 5 mm past the fingertip. At this length, acrylic adds strength and a smooth, even surface for polish without the maintenance burden of longer nails. Short acrylic nails are practical for people who work with their hands, type frequently, or simply prefer a neater appearance.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Square and oval are the most popular shapes for short acrylic nails because both look intentional at shorter lengths. Coffin and almond shapes are also possible at shorter lengths, though the taper is less dramatic.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Short acrylic nails are also a good starting point for first-time acrylic wearers, allowing you to get used to the feel and maintenance schedule before committing to a longer set.
            </p>
          </div>

          {/* Long acrylic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Long Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Long acrylic nails extend 10 mm or more past the fingertip. Acrylic is particularly well suited for long lengths because the material is rigid enough to resist snapping under the lateral pressure that comes with everyday use. Natural nails rarely grow to these lengths without breaking.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Long acrylic nails in coffin, stiletto, and almond shapes are the most photographed nail styles in beauty content and social media. The added length amplifies the drama of any nail design, from simple solid colors to elaborate 3D nail art.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Long acrylic nails require fills every 2 to 3 weeks and more careful daily habits. Using fingertips instead of nail edges for tasks, wearing gloves for cleaning, and applying cuticle oil daily all help maintain the product bond and reduce the risk of breakage.
            </p>
          </div>

          {/* Popular designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Popular Acrylic Nail Designs</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic nails are the most versatile nail enhancement for nail art because the hard surface accepts gel polish, regular polish, nail foil, chrome powder, and hand-painted designs with equal ease. Here are the most searched acrylic nail design categories.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Design</th>
                    <th className="text-left px-4 py-2 font-semibold">Monthly Searches</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {designRows.map(([design, volume, notes], i) => (
                    <tr key={design} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{design}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{volume}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              French tip acrylic nails pair especially well with the <Link href="/what-are/what-are-coffin-nails/" style={{ color: "#046BD2" }} className="hover:underline">coffin</Link> and <Link href="/what-are/what-are-almond-shaped-nails/" style={{ color: "#046BD2" }} className="hover:underline">almond</Link> shapes, where the taper adds elegance to the classic white tip. See the full <Link href="/what-are/what-are-french-tip-nails/" style={{ color: "#046BD2" }} className="hover:underline">french tip nails guide</Link> for design variations.
            </p>
          </div>

          {/* How acrylic nails are applied */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Acrylic Nails Are Applied</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Salon application of acrylic nails follows a consistent 8-step process. The preparation steps are just as important as the application steps because proper prep determines how well the acrylic bonds and how long it lasts.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed mt-4" style={{ color: "#707070" }}>
              {applicationSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              A full set appointment takes approximately 60 to 90 minutes at a salon. Fill appointments, where new acrylic is applied to the gap near the cuticle, take 30 to 60 minutes.
            </p>
          </div>

          {/* At-home acrylic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Do Acrylic Nails at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Doing acrylic nails at home is possible with a beginner kit and some practice. The results are not as refined as a professional salon set, but home application can be a good option for fills between salon visits or for building skill over time. Here is how to get started.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed mt-4" style={{ color: "#707070" }}>
              {atHomeSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <div
              className="mt-5 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>At-home tip</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                The most common mistake for beginners is picking up too much powder on the brush, which creates lumpy, uneven beads. Practice on practice nail wheels before applying to your own nails. Watch the bead consistency: it should be smooth and slightly shiny, not wet or crumbly.
              </p>
            </div>
          </div>

          {/* How long do they last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Acrylic Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A full set of acrylic nails lasts 6 to 8 weeks before the product needs to be replaced entirely. However, fills are required every 2 to 3 weeks as the natural nail grows and a gap forms near the cuticle. Without fills, the gap widens and creates a weak point that can cause the nail to lift or break.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              With a consistent fill schedule, many people keep the same base set of acrylic nails for several months before requesting a full removal and reapplication. The acrylic product itself does not degrade, but the nail art on top (gel polish, foil, chrome) may chip or dull over time.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              To remove acrylic nails safely at a salon or at home, the nails are soaked in acetone for 15 to 20 minutes. This dissolves the acrylic so it can be gently pushed off without damaging the natural nail. See the complete <Link href="/how-to/how-to-remove-acrylic-nails/" style={{ color: "#046BD2" }} className="hover:underline">how to remove acrylic nails guide</Link> for step-by-step removal instructions.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Acrylic Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic nail pricing varies by salon type, location, nail length, and design complexity. Here is a breakdown of typical costs across different scenarios.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Salon Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Service</th>
                    <th className="text-left px-4 py-2 font-semibold">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(([type, service, cost], i) => (
                    <tr key={`${type}-${service}`} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{service}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              { href: "/what-are/what-are-gel-nails/", label: "What Are Gel Nails?" },
              { href: "/what-are/what-are-dip-nails/", label: "What Are Dip Nails?" },
              { href: "/what-are/what-are-coffin-nails/", label: "What Are Coffin Nails?" },
              { href: "/what-are/what-are-almond-shaped-nails/", label: "What Are Almond Nails?" },
              { href: "/what-are/what-are-solar-nails/", label: "What Are Solar Nails?" },
              { href: "/what-are/what-are-nails-made-of/", label: "What Are Nails Made Of?" },
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
              className="text-sm font-semibold hover:underline"
              style={{ color: "#046BD2" }}
            >
              Browse all 50 nail guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
