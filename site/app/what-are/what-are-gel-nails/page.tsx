import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Gel Nails? Types, How Long They Last, Cost & vs Acrylic",
  description:
    "Gel nails use a gel formula cured under UV or LED light. Learn about every gel nail type, how long they last, what they cost, and how gel compares to acrylic and shellac.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-gel-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-gel-nails/",
    title: "What Are Gel Nails? Types, How Long They Last, Cost & vs Acrylic",
    description:
      "Gel nails use a gel formula cured under UV or LED light. Learn about every gel nail type, how long they last, what they cost, and how gel compares to acrylic and shellac.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are Gel Nails?", item: "https://shenailsalon.com/what-are/what-are-gel-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Gel Nails? Types, How Long They Last, Cost & vs Acrylic",
  description:
    "Gel nails use a gel formula that hardens under UV or LED light. This guide covers every type of gel nail, how they are applied, how long they last, what they cost, and how they compare to acrylic, shellac, and dip powder.",
  url: "https://shenailsalon.com/what-are/what-are-gel-nails/",
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
  dateModified: "2026-03-20",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-gel-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are gel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel nails are a type of nail enhancement or nail coating that uses a gel-based formula cured under a UV or LED lamp to harden. Unlike regular nail polish that air-dries, gel cures in 30 to 60 seconds per coat under a lamp, creating a durable, glossy, chip-resistant finish. Gel can be applied as a polish over your natural nail (gel polish or shellac) or used to build extensions that add length (soft gel tips, hard gel, builder gel, and gel-x). Most gel manicures last 2 to 4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "How long do gel nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel polish on natural nails lasts 2 to 3 weeks before lifting or chipping. Hard gel and builder gel overlays last 3 to 4 weeks. Gel-x and soft gel extensions last 3 to 5 weeks. The main factors affecting wear time are nail prep quality, how well the gel is sealed at the edges, and how much your hands are exposed to water and chemicals. Soaking hands frequently shortens gel wear time significantly.",
      },
    },
    {
      "@type": "Question",
      name: "How much do gel nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gel polish manicure at a nail salon typically costs $35 to $65. Gel-x or soft gel extensions cost $65 to $100 for a full set. Hard gel or builder gel overlays run $50 to $80. In California, prices are on the higher end of these ranges, with gel polish manicures averaging $45 to $70 in cities like Los Angeles and San Francisco. A basic gel manicure kit for home use costs $40 to $80 including gel polishes, a UV or LED lamp, and remover supplies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gel nails and acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel nails use a pre-mixed gel formula cured under UV or LED light. Acrylic nails use a liquid monomer mixed with a powder polymer that hardens in air without a lamp. Gel nails are more flexible, look more natural, have less odor during application, and are generally considered gentler on the natural nail. Acrylic nails are stronger, less expensive, easier for fill appointments, and hold up better for very long nail lengths. Both can add length and are removed by filing or soaking in acetone.",
      },
    },
    {
      "@type": "Question",
      name: "Are gel nails bad for your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel nails themselves are not harmful to natural nails when applied and removed correctly. The damage people commonly experience comes from improper removal, particularly peeling or picking gel off instead of soaking it off. UV exposure during curing is minimal but measurable. Wearing gel manicures back to back without giving nails a break can cause thinning and dehydration over time. Giving nails one to two weeks without product every few months helps maintain their natural strength.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gel nails and shellac nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac is a specific brand of hybrid nail polish made by CND that combines regular nail polish with gel. All shellac nails are a type of gel polish, but not all gel polishes are shellac. Both cure under a UV or LED lamp and last 2 to 4 weeks. The main practical difference is that shellac comes in a proprietary formula and is only available through licensed CND distributors, while gel polish is made by dozens of brands and used widely across nail salons. In terms of wear time and removal, they are nearly identical.",
      },
    },
  ],
};

const gelTypeRows = [
  ["Gel polish", "Colored gel applied like nail polish over the natural nail", "UV or LED lamp", "2 to 3 weeks", "No extension"],
  ["Shellac", "CND hybrid gel polish formula over natural nail", "UV or LED lamp", "2 to 4 weeks", "No extension"],
  ["Soft gel tips (gel-x)", "Pre-formed soft gel tips bonded over the full nail", "UV or LED lamp", "3 to 5 weeks", "Full extension"],
  ["Hard gel", "Dense gel sculpted or applied over the nail or a form", "UV or LED lamp", "3 to 4 weeks", "Short extension or overlay"],
  ["Builder gel (BIAB)", "Thick viscous gel used to strengthen or slightly extend", "UV or LED lamp", "4 to 6 weeks", "Slight extension or overlay"],
  ["Poly gel", "Hybrid of gel and acrylic; sculpted with a slip solution", "UV or LED lamp", "3 to 4 weeks", "Extension possible"],
];

const vsAcrylicRows = [
  ["Hardening method", "Cured under UV or LED lamp", "Hardens in air (no lamp needed)"],
  ["Flexibility", "More flexible, less likely to snap", "More rigid, stronger for very long lengths"],
  ["Odor during application", "Low odor", "Strong chemical odor from liquid monomer"],
  ["Natural nail impact", "Gentler when removed correctly", "Can thin nails if fills are overfiled"],
  ["Fill appointments", "Some gel types don't fill well", "Easy to fill every 2 to 3 weeks"],
  ["Cost", "$35 to $100 depending on type", "$45 to $80 for a full set"],
  ["Removal", "Soak in acetone or file off (hard gel)", "Soak in acetone or file off"],
  ["Look", "Glossy, natural, thin", "Can look thicker; more uniform finish"],
];

const vsShellacRows = [
  ["What it is", "A category of nail product cured under a lamp", "A specific CND brand of hybrid gel polish"],
  ["Formula", "Made by many brands", "Only made by CND"],
  ["Where to buy", "Widely available", "Through licensed CND distributors only"],
  ["Lamp required", "Yes", "Yes"],
  ["Wear time", "2 to 3 weeks (varies by brand)", "2 to 4 weeks"],
  ["Removal", "Soak in acetone or foil wrap", "Soak in acetone or foil wrap"],
  ["Adds length", "No (for gel polish)", "No"],
];

const applicationSteps = [
  ["1. Prep", "Nails are cleaned, cuticles pushed back, and the nail plate is lightly buffed to remove shine. The nail is wiped with a gel cleanser or dehydrator to ensure adhesion."],
  ["2. Base coat", "A gel base coat is applied in a thin layer and cured under a UV or LED lamp for 30 to 60 seconds. The base coat creates a bonding layer for the color gel."],
  ["3. First color coat", "The first layer of gel color is applied thinly and evenly, avoiding the cuticle and side walls by a fraction of a millimeter to prevent lifting."],
  ["4. Cure", "Each coat is cured under the lamp immediately after application. LED lamps cure in 30 to 60 seconds. UV lamps take 2 minutes."],
  ["5. Second color coat", "A second coat of color is applied and cured to build opacity and depth."],
  ["6. Top coat", "A gel top coat is applied over the full nail, sealing the color and adding shine or a matte finish depending on the product used."],
  ["7. Wipe", "The sticky inhibition layer left on the nail after the final cure is wiped away with a gel cleanser, leaving a smooth, high-gloss finish."],
  ["8. Cuticle oil", "Cuticle oil is applied to the surrounding skin to moisturize and give a finished look to the manicure."],
];

const wearRows = [
  ["Gel polish", "Natural nail overlay", "2 to 3 weeks", "$35 to $65 salon / $40 to $80 DIY kit"],
  ["Shellac", "Natural nail overlay", "2 to 4 weeks", "$40 to $70 salon"],
  ["Gel-X extensions", "Full soft gel tip extension", "3 to 5 weeks", "$65 to $100 salon"],
  ["Builder gel overlay", "Strengthening overlay or slight extension", "4 to 6 weeks", "$50 to $80 salon"],
  ["Hard gel extensions", "Sculpted extension over a form", "3 to 4 weeks", "$70 to $110 salon"],
  ["Polygel extensions", "Sculpted extension, acrylic-gel hybrid", "3 to 4 weeks", "$60 to $100 salon"],
];

export default function GelNailsPage() {
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
            <span>What Are Gel Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Gel Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Gel nails use a gel formula that hardens under UV or LED light, creating a glossy, chip-resistant finish that lasts 2 to 5 weeks. This guide covers every type of gel nail, how they are applied, how long they last, what they cost, and how gel compares to acrylic and shellac. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are gel nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Gel Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel nails are a category of nail enhancement that uses a gel-based formula cured under a UV or LED lamp. Unlike regular nail polish that air-dries over several minutes, gel hardens in 30 to 60 seconds under a lamp, creating a durable finish that resists chipping far longer than traditional lacquer.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The term gel nails covers a wide range of products. At the lightest end is gel polish, which works exactly like regular nail polish except it cures under a lamp instead of air-drying. At the heavier end is hard gel and builder gel, which are thick enough to sculpt nail extensions. In between are hybrid products like polygel and soft gel tips (gel-x).
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              I have been getting gel manicures for years, and the difference in wear time compared to regular polish is noticeable. My gel polish lasts two to three weeks with no chips, whereas regular lacquer chips on me within three to four days. The trade-off is that removal requires acetone and a bit more effort than just wiping off polish with remover.
            </p>
          </div>

          {/* Types of gel nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Not all gel nails are the same. The product type determines whether the gel adds length, how thick it builds, how it is removed, and how long it holds. Here is an overview of every main gel nail type:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">How It Works</th>
                    <th className="text-left px-4 py-2 font-semibold">Lamp</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear Time</th>
                    <th className="text-left px-4 py-2 font-semibold">Extension?</th>
                  </tr>
                </thead>
                <tbody>
                  {gelTypeRows.map(([type, how, lamp, wear, extension], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{lamp}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{extension}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How gel nails are applied */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Gel Nails Are Applied</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A standard gel polish manicure at a salon takes about 45 to 60 minutes. The process for gel-x or hard gel extensions takes longer, typically 75 to 90 minutes. Here is how a gel polish manicure is applied step by step:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Step</th>
                    <th className="text-left px-4 py-2 font-semibold">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationSteps.map(([step, description], i) => (
                    <tr key={step} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#1E293B" }}>{step}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              For gel extensions (gel-x, hard gel, or builder gel), the process includes additional steps to size, fit, and shape the extension before applying gel polish color on top. Extensions require filing the edges to the correct shape and length before the color and top coat steps.
            </p>
          </div>

          {/* How long do gel nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Gel Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel nail wear time varies by product type and how you care for your hands. Here is how long each type typically lasts:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Application</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear Time</th>
                    <th className="text-left px-4 py-2 font-semibold">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {wearRows.map(([type, app, wear, cost], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{app}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The biggest factors that shorten gel wear time are frequent hand washing without gloves, soaking hands in water (like washing dishes), and using harsh cleaning chemicals. Applying cuticle oil daily and wearing gloves while cleaning can extend a gel manicure by several days.
            </p>
          </div>

          {/* Gel vs Acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel Nails vs Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel and acrylic are the two most common nail enhancement types. They both add strength and can extend nail length, but they use very different chemistry and application methods:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Nails</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic Nails</th>
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
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              For most people getting a standard manicure length, gel is the better choice because it looks more natural and has less odor. For very long nail lengths (coffin, stiletto, or extra-long extensions), acrylic tends to hold up better because of its rigidity.
            </p>
          </div>

          {/* Gel vs Shellac */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel Nails vs Shellac</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Shellac is often confused with gel nails because both are cured under a lamp. Here is how they differ:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Polish</th>
                    <th className="text-left px-4 py-2 font-semibold">Shellac (CND)</th>
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
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              In everyday conversation, many people use shellac and gel interchangeably to mean any lamp-cured nail polish. At a nail salon, asking for a shellac manicure will usually get you a gel polish manicure regardless of whether the salon uses the CND brand specifically.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Gel Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Lasts 2 to 5 weeks with no chipping</li>
                  <li>Cures in 30 to 60 seconds, no waiting for nails to dry</li>
                  <li>Available in hundreds of colors and finishes</li>
                  <li>Looks more natural and flexible than acrylic</li>
                  <li>Low odor during application</li>
                  <li>Multiple product types to suit any nail goal</li>
                  <li>Doable at home with a starter kit</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>Requires a UV or LED lamp to cure</li>
                  <li>Peeling or picking causes nail damage</li>
                  <li>Removal takes more time and effort than regular polish</li>
                  <li>Repeated use can thin and dehydrate the natural nail</li>
                  <li>UV lamp exposure is a minor concern for some</li>
                  <li>More expensive per appointment than regular polish</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to remove gel nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel polish and soft gel products are removed by soaking in acetone. Hard gel and builder gel must be filed off because they do not dissolve in acetone. Here is how to remove gel polish at home:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Gently buff the top coat with a fine-grit nail file to break the seal. This allows acetone to penetrate the gel layers.</li>
              <li>Soak a cotton ball in 100% pure acetone and place it on the nail.</li>
              <li>Wrap the fingertip in a small square of aluminum foil to hold the cotton in place.</li>
              <li>Wait 10 to 15 minutes. The gel should start to lift and crumble at the edges.</li>
              <li>Slide the foil and cotton off the nail. Use an orangewood stick or cuticle pusher to gently push off any remaining gel.</li>
              <li>Do not force or peel the gel. If it resists, rewrap and soak for another 5 minutes.</li>
              <li>Apply cuticle oil and hand cream after removal to rehydrate the nail and surrounding skin.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Never peel or forcibly lift gel off the nail. Gel bonds to the top layer of the nail plate, and peeling it takes those nail cells with it, leaving the nail thin, rough, and damaged. For a full guide, see{" "}
              <Link href="/how-to/how-to-remove-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                How to Remove Gel Nails
              </Link>.
            </p>
          </div>

          {/* FAQ section */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Gel Nails</h2>
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
                { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
                { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
                { title: "How to Remove Gel Nails", href: "/how-to/how-to-remove-gel-nails/" },
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
