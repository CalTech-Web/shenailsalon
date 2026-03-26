import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Nail Extensions? Types, Cost, and How Long They Last",
  description:
    "Nail extensions add length and strength to the natural nail using acrylic, gel, gel-x, hard gel, or polygel. This guide covers every extension type, how they compare, what they cost, and how long they last.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-nail-extensions/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-nail-extensions/",
    title: "What Are Nail Extensions? Types, Cost, and How Long They Last",
    description:
      "Nail extensions add length and strength to the natural nail using acrylic, gel, gel-x, hard gel, or polygel. This guide covers every extension type, how they compare, what they cost, and how long they last.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Nail Extensions", item: "https://shenailsalon.com/what-are/what-are-nail-extensions/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Nail Extensions? Types, Cost, and How Long They Last",
  description:
    "A complete guide to nail extensions. Covers the main types (acrylic, gel, gel-x, hard gel, polygel, press-on), how they are applied, how long they last, cost by type, pros and cons, and removal.",
  url: "https://shenailsalon.com/what-are/what-are-nail-extensions/",
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
  dateModified: "2026-03-26",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-nail-extensions/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are nail extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail extensions are artificial additions applied to the natural nail to add length, shape, or strength beyond what the natural nail can provide. The most common types are acrylic extensions (liquid monomer and powder polymer), gel extensions (UV-cured hard or builder gel), gel-x extensions (soft gel full-cover tips cured under a lamp), and polygel extensions (a hybrid acrylic-gel formula). Each type uses a different material and application method, but all add measurable length over the natural nail edge.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between acrylic and gel nail extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acrylic nail extensions are made by combining a liquid monomer with a powder polymer that air-dries into a hard shell. Gel nail extensions are made from a UV- or LED-cured gel formula that stays soft and flexible until cured under a lamp. Gel extensions are generally lighter, more flexible, and less porous than acrylic, and they do not require the same strong chemical odors during application. Acrylic is typically more affordable and easier to repair, while gel is considered gentler on the natural nail.",
      },
    },
    {
      "@type": "Question",
      name: "How long do nail extensions last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most nail extensions last 2 to 4 weeks before needing a fill or full replacement. Acrylic extensions typically last 2 to 3 weeks before the growth gap at the base becomes visible and needs filling. Gel-x extensions last 3 to 4 weeks. Hard gel and builder gel overlays last 3 to 4 weeks. Proper prep, avoiding water exposure in the first few hours, and not using nails as tools all extend wear significantly.",
      },
    },
    {
      "@type": "Question",
      name: "Are nail extensions bad for your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail extensions themselves do not inherently damage the natural nail, but improper removal is the main source of nail damage. Peeling or forcibly lifting extensions tears the top layers of the natural nail plate. Proper removal using acetone soaking (for acrylic, gel-x, and polygel) or e-file removal (for hard gel) prevents damage. The natural nail underneath an extension is typically protected from everyday wear, meaning extensions can actually reduce breakage during wear, as long as they are applied and removed correctly.",
      },
    },
    {
      "@type": "Question",
      name: "What are gel nail extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel nail extensions are added nail length built using a UV- or LED-cured gel formula applied either as a sculpted extension over a nail form, or as a pre-shaped soft gel tip bonded to the natural nail. Hard gel extensions are sculpted by hand using nail forms and a brush, producing a very durable, non-acetone-soluble extension. Gel-x extensions use pre-formed soft gel tips that are bonded to the nail using extend gel and cured under a lamp. Both types produce a lighter, more flexible extension than acrylic.",
      },
    },
    {
      "@type": "Question",
      name: "How much do nail extensions cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full set of acrylic nail extensions at a salon typically costs $35 to $70 depending on location and nail art. Gel-x extensions run $50 to $90. Hard gel extensions cost $60 to $100. Polygel extensions cost $55 to $90. At-home extension kits range from $25 to $70 for a gel-x starter kit or press-on set, making DIY the most affordable option for occasional use. Fill appointments, needed every 2 to 3 weeks, cost $20 to $50 for acrylics and $30 to $60 for gel.",
      },
    },
  ],
};

const typesRows = [
  ["Acrylic", "Liquid monomer + powder polymer, air-dries", "2 to 3 weeks", "$35 to $70 full set", "Strong odor, highly durable, customizable length"],
  ["Hard gel", "UV-cured thick gel, filed off for removal", "3 to 4 weeks", "$60 to $100 full set", "Very strong, cannot soak off, requires e-file removal"],
  ["Builder gel (BIAB)", "UV-cured gel applied over natural nail or form", "3 to 4 weeks", "$50 to $85 full set", "Adds strength, flexible, used for overlays and short extensions"],
  ["Gel-X", "Pre-formed soft gel tip bonded with extend gel", "3 to 4 weeks", "$50 to $90 full set", "No filing required to apply, beginner-friendly, soaks off in acetone"],
  ["Polygel", "Hybrid acrylic-gel paste, shaped then UV-cured", "3 to 4 weeks", "$55 to $90 full set", "Lightweight, odorless, more control than liquid acrylic"],
  ["Press-on", "Pre-made plastic or soft gel tips with adhesive", "3 days to 2 weeks", "$5 to $30 per set", "No salon needed, reusable, no commitment"],
];

const wearRows = [
  ["Proper prep and application", "2 to 4 weeks"],
  ["Skip dehydrator or primer", "7 to 10 days (early lifting)"],
  ["Frequent water exposure (dishes, swimming)", "1 to 2 weeks less than expected"],
  ["Using nails as tools (opening cans, scraping)", "Increased risk of breaking before 2 weeks"],
  ["Fills every 2 to 3 weeks (acrylics)", "Can maintain indefinitely with regular maintenance"],
  ["No fill past 4 weeks", "Risk of lifting, moisture trapping, and fungal issues"],
];

const costRows = [
  ["Acrylic full set", "$35 to $70"],
  ["Acrylic fill (every 2 to 3 weeks)", "$20 to $45"],
  ["Gel-X full set", "$50 to $90"],
  ["Hard gel full set", "$60 to $100"],
  ["Polygel full set", "$55 to $90"],
  ["At-home gel-x kit (one-time)", "$25 to $70"],
  ["At-home press-on set", "$5 to $30 per use"],
];

const acrylicVsGelRows = [
  ["Material", "Liquid monomer + powder polymer", "UV-cured gel (hard, builder, or soft gel tip)"],
  ["Odor during application", "Strong chemical odor", "Low to none"],
  ["Flexibility", "Rigid", "Flexible to semi-rigid"],
  ["Removal", "Acetone soak 20 to 30 min", "Acetone (gel-x, builder) or e-file (hard gel)"],
  ["Durability", "Very high", "High to very high"],
  ["Weight", "Moderate", "Lighter"],
  ["Repair", "Easy to patch with new acrylic", "Requires re-application of tip or gel"],
  ["Best for", "Length, strength, affordability", "Flexibility, lighter feel, gentler removal"],
];

const removalRows = [
  ["Acrylic", "File off top coat, soak in acetone 20 to 30 min, gently push off softened acrylic"],
  ["Hard gel", "Cannot dissolve in acetone — must be filed down with an e-file until almost flat, then buff off the remaining thin layer"],
  ["Builder gel (BIAB)", "File off surface layer, soak in acetone 10 to 15 min, gently push off"],
  ["Gel-X", "File off shine layer, soak in acetone 10 to 15 min, gently push off soft gel tip"],
  ["Polygel", "File off top coat, soak in acetone 15 to 20 min, push off with cuticle pusher"],
  ["Press-on", "Soak in warm water 10 min (adhesive tabs) or acetone (nail glue), gently lift from sides"],
];

export default function NailExtensionsPage() {
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
            <span>Nail Extensions</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Nail Extensions?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Nail extensions add length beyond the natural nail tip using acrylic, gel, gel-x, polygel, or pre-formed press-on tips. Each type uses a different material, requires different removal, and suits different lifestyles. This guide covers all major extension types, how they compare, what they cost, and how long they last. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are nail extensions */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Nail Extensions?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail extensions are artificial nail additions that extend the length of the natural nail beyond the free edge. They are applied at a salon or at home using sculpted materials (acrylic, hard gel, polygel, or builder gel) that are shaped and hardened directly onto the nail, or using pre-formed tips (gel-x or press-on) that are bonded on top.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Extensions are different from nail polish or gel polish, which sit entirely within the surface of the natural nail. Extensions physically extend the nail past the fingertip. They can add anywhere from a few millimeters of length to several centimeters depending on the material and application method.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The term nail extension covers every method that adds length: acrylic nail extensions, gel nail extensions (including hard gel and gel-x), polygel extensions, and press-on nail extensions. Each has a distinct application process, removal method, and durability profile.
            </p>
          </div>

          {/* Types comparison table */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The six main nail extension types each use different materials and require different skills and tools. The table below compares them side by side.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">How it works</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear time</th>
                    <th className="text-left px-4 py-2 font-semibold">Salon cost</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {typesRows.map(([type, how, wear, cost, notes], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cost}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Acrylic extensions */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Acrylic Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic nail extensions are the most widely available extension type at salons worldwide. They are created by mixing a liquid monomer with a powder polymer to form a paste that is shaped onto the nail using a brush, then allowed to air-dry into a hard shell. Acrylics can be applied over nail tips for a defined free edge or sculpted directly onto the nail using nail forms.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic extensions are known for their durability and range of customization. They can be built to any length and shaped into any nail style, from short square to long coffin or almond. The material is also relatively easy to repair: a broken acrylic nail can be patched with fresh acrylic in most cases.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The main drawback of acrylics is the strong odor of the liquid monomer during application and the potential for nail damage if removed by force instead of proper acetone soaking. Acrylic fill appointments every 2 to 3 weeks are necessary to fill the gap created by nail growth.
            </p>
          </div>

          {/* Gel nail extensions */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel nail extensions use UV- or LED-cured gel formulas rather than air-drying acrylic chemistry. There are three main types of gel extensions: hard gel, builder gel (BIAB), and gel-x soft gel tips.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Hard gel extensions are sculpted by hand over nail forms using a thick, brush-applied gel that cures under a lamp. Once cured, hard gel is extremely rigid and cannot be dissolved in acetone. It must be filed off with an e-file. Hard gel is the most durable gel extension option and can be built to any length.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Builder gel (also called BIAB, builder in a bottle, or soft gel) is a slightly softer gel used to build overlays and short-to-medium extensions. Unlike hard gel, builder gel can be soaked off in acetone after filing the surface layer, making removal easier.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Gel-x extensions use pre-formed soft gel full-cover tips that are bonded to the natural nail with an extend gel and cured under a lamp. Gel-x is the most beginner-friendly extension method because the tips are already shaped — no sculpting required. They soak off in acetone in 10 to 15 minutes.
            </p>
          </div>

          {/* Acrylic vs gel comparison table */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Acrylic vs Gel Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Acrylic and gel are the two most common extension categories. The choice between them usually comes down to odor tolerance, desired flexibility, and removal preference.
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
                  {acrylicVsGelRows.map(([feature, acrylic, gel], i) => (
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

          {/* Polygel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Polygel Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel is a hybrid nail extension material that combines the structure of acrylic with the workability of gel. It comes in a tube as a thick paste that does not self-level or drip. The technician uses a brush dipped in slip solution to shape the polygel, then cures it under a UV or LED lamp.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The main advantages of polygel are that it is odorless compared to acrylic, lighter than acrylic extensions, and gives the technician more time to shape before curing because it only hardens under the lamp. Polygel extensions last 3 to 4 weeks and soak off in acetone after filing the surface.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Polygel is a newer material and is not as widely available at salons as acrylic or gel-x. At-home polygel kits are available for around $30 to $60 and include slip solution, forms, and a dual-form method for easier shaping.
            </p>
          </div>

          {/* How long they last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Nail Extensions Last</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Most nail extensions last 2 to 4 weeks before needing a fill or full replacement. The actual wear time depends heavily on how well the nail was prepared, how careful you are with your hands, and the extension material.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Scenario</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected wear time</th>
                  </tr>
                </thead>
                <tbody>
                  {wearRows.map(([scenario, wear], i) => (
                    <tr key={scenario} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{scenario}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Extension Cost</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail extension costs vary by type, salon location, and nail art. California salons are generally on the higher end of the national range. The table below shows typical US salon prices for a full set and, where applicable, fill prices.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Service</th>
                    <th className="text-left px-4 py-2 font-semibold">Typical price range</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(([service, price], i) => (
                    <tr key={service} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{service}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              Simple solid-color extensions are at the low end of each range. Nail art, ombre, chrome, or intricate designs add $10 to $40 to the service price depending on complexity.
            </p>
          </div>

          {/* How to apply */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Nail Extensions Are Applied</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Every nail extension type follows the same basic sequence: nail prep, extension application, shaping, and finishing. The details of each step vary by extension type.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><strong style={{ color: "#1E293B" }}>Prep:</strong> Push back or remove cuticles, buff the nail surface, and apply a dehydrator followed by a primer or base coat. Proper prep is the most important factor in how long extensions last.</li>
              <li><strong style={{ color: "#1E293B" }}>Apply extension material:</strong> Sculpt acrylic, gel, or polygel over a nail tip or nail form, or bond a pre-formed soft gel tip (gel-x) directly to the nail plate.</li>
              <li><strong style={{ color: "#1E293B" }}>Shape:</strong> File and shape the extension to the desired nail shape, length, and contour while the material is in its green or pre-cured state (for sculpted materials) or after curing (for gel types).</li>
              <li><strong style={{ color: "#1E293B" }}>Cure (gel types only):</strong> Cure under a UV or LED lamp according to the product specifications. Acrylic air-dries and does not require a lamp.</li>
              <li><strong style={{ color: "#1E293B" }}>Refine and buff:</strong> File away any rough edges, buff the surface smooth, and remove the inhibition layer (for gel) with a lint-free wipe and cleanser.</li>
              <li><strong style={{ color: "#1E293B" }}>Apply polish or gel color:</strong> Apply a base coat, color coat or design, and top coat. Cure under the lamp if using gel polish.</li>
            </ol>
          </div>

          {/* Removal */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Proper removal is the most important factor in avoiding nail damage after wearing extensions. Never peel, force, or rip extensions off the nail plate, as this removes layers of the natural nail with them. Each extension type has a specific removal method.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Extension type</th>
                    <th className="text-left px-4 py-2 font-semibold">How to remove</th>
                  </tr>
                </thead>
                <tbody>
                  {removalRows.map(([type, method], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Nail Extensions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-lg border" style={{ background: "#F0FFF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-3 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#707070" }}>
                  <li>Add length that natural nails cannot achieve</li>
                  <li>Protect the natural nail from breakage during wear</li>
                  <li>Available in every nail shape from short square to long stiletto</li>
                  <li>Hold nail art, chrome, and ombre designs better than natural nails</li>
                  <li>Last 2 to 4 weeks between appointments</li>
                  <li>Can be filled and maintained rather than fully replaced each time</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-3 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#707070" }}>
                  <li>Can damage the natural nail if removed incorrectly</li>
                  <li>Require salon visits every 2 to 3 weeks for fills</li>
                  <li>More expensive than regular polish over time</li>
                  <li>Acrylic has a strong chemical odor during application</li>
                  <li>Natural nail may be thinner and more brittle after long-term wear</li>
                  <li>Greater risk of infection if water is trapped under lifted extensions</li>
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
              { href: "/what-are/what-are-acrylic-nails/", label: "What Are Acrylic Nails?" },
              { href: "/what-are/what-are-gel-nails/", label: "What Are Gel Nails?" },
              { href: "/what-are/what-are-gel-x-nails/", label: "What Are Gel-X Nails?" },
              { href: "/what-are/what-are-builder-gel-nails/", label: "What Are Builder Gel Nails?" },
              { href: "/how-to/how-to-apply-acrylic-nails/", label: "How To Apply Acrylic Nails" },
              { href: "/how-to/how-to-apply-gel-x-nails/", label: "How To Apply Gel-X Nails" },
              { href: "/how-to/how-to-remove-acrylic-nails/", label: "How To Remove Acrylic Nails" },
              { href: "/what-are/what-are-nail-shapes/", label: "All Nail Shapes Explained" },
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
              Browse all nail guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
