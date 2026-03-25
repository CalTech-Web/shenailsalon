import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Gel Nails at Home: Step-by-Step Guide for Beginners",
  description:
    "Learn how to apply gel nails at home with this step-by-step guide. Covers supplies, UV vs LED lamp differences, gel polish vs gel extension methods, curing times, and common beginner mistakes.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-gel-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-gel-nails/",
    title: "How To Apply Gel Nails at Home: Step-by-Step Guide for Beginners",
    description:
      "Learn how to apply gel nails at home with this step-by-step guide. Covers supplies, UV vs LED lamp differences, gel polish vs gel extension methods, curing times, and common beginner mistakes.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    { "@type": "ListItem", position: 3, name: "How To Apply Gel Nails", item: "https://shenailsalon.com/how-to/how-to-apply-gel-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Gel Nails at Home: Step-by-Step Guide for Beginners",
  description:
    "A complete guide on how to apply gel nails at home, including supplies, UV vs LED lamp comparison, gel polish manicure steps, gel extension method, curing times, cost breakdown, and common mistakes to avoid.",
  url: "https://shenailsalon.com/how-to/how-to-apply-gel-nails/",
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
  dateModified: "2026-03-25",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-gel-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply gel nails at home step by step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply gel nails at home: (1) Push back cuticles and lightly buff the nail surface. (2) Wipe each nail with a lint-free pad soaked in rubbing alcohol or nail cleanser to remove oil. (3) Apply a thin coat of gel base coat and cure under a UV or LED lamp for 30 to 60 seconds. (4) Apply the first thin coat of gel color and cure for 30 to 60 seconds. (5) Apply a second thin coat of gel color and cure again. (6) Apply a gel top coat and cure for 60 seconds. (7) Wipe the inhibition layer off with a lint-free pad soaked in cleanser. Thin coats are critical — thick gel coats trap air and cure unevenly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply gel nails at home without a UV light?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional gel polish requires a UV or LED lamp to cure. There are two alternatives that do not need a lamp: gel nail polish that air-dries like regular polish (sold as 'gel effect' or 'no-lamp gel'), and LED gel polish strips that come pre-cured. However, these products do not have the same durability or glossiness as lamp-cured gel. Most home gel kits include a small LED lamp for under $20, making the no-lamp workaround unnecessary for most people.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to cure gel nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LED lamps cure gel polish in 30 to 60 seconds per layer. UV lamps take 2 to 3 minutes per layer. A full gel manicure with base coat, two color coats, and top coat takes 3 to 5 minutes of total cure time under LED, or 8 to 12 minutes under UV. Gel nail extensions with tip application and gel overlay take longer — around 15 to 25 minutes total for all layers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between gel nail polish and gel nail extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel nail polish is applied over the natural nail like regular polish and cures under a UV or LED lamp. It adds color and shine without changing the length. Gel nail extensions use a pre-shaped soft gel tip (like Gel-X) or hard gel sculpted over a form to add length before the gel overlay is applied. Extensions require more supplies and skill but create longer nails. Gel polish is easier for beginners.",
      },
    },
    {
      "@type": "Question",
      name: "How do gel nails stay on at home without lifting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common cause of gel lifting is oil on the nail surface before application. Wipe each nail with 99% isopropyl alcohol or a nail cleanser immediately before applying base coat. Also make sure your base coat goes close to the cuticle without touching it, and cap the free edge of each nail with base coat, color, and top coat (running the brush across the nail tip). Thin coats cure more evenly and stick better than thick ones.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a gel nail kit cost for home use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A beginner gel nail kit for home use costs $25 to $60. This typically includes a UV or LED lamp, a base coat, one or two gel polish colors, a top coat, and basic prep tools. Ongoing supply costs are low — a single bottle of gel polish covers 20 to 30 manicures. Gel manicures at a salon cost $35 to $60, so a home kit pays for itself after two or three uses.",
      },
    },
  ],
};

const supplies = [
  { item: "UV or LED nail lamp", note: "LED lamps cure in 30 to 60 seconds per layer; UV lamps take 2 to 3 minutes but are less expensive" },
  { item: "Gel base coat", note: "Bonds the gel to the natural nail and prevents staining; never skip this step" },
  { item: "Gel nail polish (color)", note: "Use the same brand for base, color, and top coat when possible — different brands can have compatibility issues" },
  { item: "Gel top coat", note: "Seals the color, adds shine, and protects against chipping; some top coats are no-wipe, others leave an inhibition layer" },
  { item: "Nail cleanser or 99% isopropyl alcohol", note: "For wiping the inhibition layer off the cured top coat and degreasing nails before application" },
  { item: "Lint-free nail wipes", note: "Regular cotton pads leave fibers on the nail; lint-free wipes prevent this" },
  { item: "Fine nail buffer (180 grit)", note: "For lightly buffing the nail surface before application to improve gel adhesion" },
  { item: "Cuticle pusher", note: "For pushing back cuticles before application; keeps the gel line clean near the cuticle area" },
  { item: "Nail file (180 to 240 grit)", note: "For shaping natural nails before application" },
];

const gelVsExtensionRows = [
  { feature: "Purpose", polish: "Adds color and shine to natural nails", extensions: "Adds length and structure in addition to color" },
  { feature: "Skill level", polish: "Beginner-friendly", extensions: "Intermediate to advanced" },
  { feature: "Length added", polish: "None", extensions: "Yes, using soft gel tips or nail forms" },
  { feature: "Supplies needed", polish: "Lamp, base, color, top coat", extensions: "Lamp, gel tips or forms, gel adhesive, builder gel, files" },
  { feature: "Wear time", polish: "2 to 3 weeks", extensions: "3 to 4 weeks" },
  { feature: "Removal", polish: "Acetone soak (10 to 15 minutes)", extensions: "Filing down + acetone soak (20 to 30 minutes)" },
  { feature: "Best for", polish: "Beginners, short nails, natural nail care", extensions: "Adding length, replacing acrylics, special occasions" },
];

const uvVsLedRows = [
  { feature: "Cure time per layer", uv: "2 to 3 minutes", led: "30 to 60 seconds" },
  { feature: "Lamp cost", uv: "$10 to $30", led: "$15 to $60" },
  { feature: "Bulb replacement", uv: "Every 6 to 12 months", led: "LEDs last 50,000+ hours, rarely need replacement" },
  { feature: "Heat spikes", uv: "Less common", led: "Possible with thick coats or low-quality lamps" },
  { feature: "Compatibility", uv: "Works with all gel polish", led: "Works with all LED-compatible gel (most modern brands)" },
  { feature: "Best for", uv: "Budget home setups", led: "Speed and convenience" },
];

const steps = [
  {
    num: 1,
    title: "Prepare your nails",
    body: "File your natural nails to your preferred shape and length. Push back the cuticles gently with a cuticle pusher — do not cut them. Lightly buff the surface of each nail with a fine buffer (180 grit) to remove shine. You are not thinning the nail, just scuffing the surface so the gel base coat can grip it. Wipe away all dust with a dry lint-free wipe.",
  },
  {
    num: 2,
    title: "Degrease the nail surface",
    body: "Soak a lint-free wipe in 99% isopropyl alcohol or a nail cleanser and wipe each nail thoroughly. This step removes oil from the surface. Oil is the number one cause of gel lifting. Do not touch the nails with your fingers after this step. Let the alcohol evaporate for 20 to 30 seconds before moving on.",
  },
  {
    num: 3,
    title: "Apply gel base coat",
    body: "Apply a thin, even coat of gel base coat to each nail. Work close to the cuticle without touching it, and run the brush along the free edge (the nail tip) to cap it. Capping the edge seals the gel and prevents tip chipping. Cure under your lamp for 30 to 60 seconds (LED) or 2 minutes (UV). The base coat will remain slightly tacky after curing — this is normal.",
  },
  {
    num: 4,
    title: "Apply the first coat of gel color",
    body: "Apply a thin first coat of gel color. Thin is key — gel polish that is applied too thick traps air bubbles, cures unevenly, and lifts from the edges. If your gel polish is thick and gloopy, warm the bottle briefly in your hands before applying. Cure for 30 to 60 seconds (LED) or 2 minutes (UV).",
  },
  {
    num: 5,
    title: "Apply the second coat of gel color",
    body: "Apply a second thin coat of gel color over the first. Two thin coats always outperform one thick coat for color saturation and adhesion. Make sure the second coat covers the free edge too. Cure for 30 to 60 seconds (LED) or 2 minutes (UV). If your color is sheer and needs more coverage, apply a third thin coat and cure again.",
  },
  {
    num: 6,
    title: "Apply gel top coat",
    body: "Apply a thin coat of gel top coat to seal everything in. Run the brush across the free edge to cap the color and prevent tip wear. Cure for 60 seconds (LED) or 2 minutes (UV). If your top coat has an inhibition layer (the tacky film left after curing), wipe each nail with a lint-free wipe soaked in nail cleanser or alcohol to remove it. No-wipe top coats skip this step.",
  },
  {
    num: 7,
    title: "Hydrate and finish",
    body: "Apply cuticle oil around each nail and massage it in. Gel manicures can be drying over time, and cuticle oil applied immediately after helps keep the surrounding skin soft. Your gel manicure is fully cured and ready to use immediately — no drying time needed.",
  },
];

const costRows = [
  { item: "Beginner gel nail kit (lamp + base, color, top coat)", cost: "$25 to $60", notes: "One-time purchase covering 20 to 30+ manicures" },
  { item: "LED lamp (standalone)", cost: "$15 to $40", notes: "Good LED lamps under $25 work just as well for home use" },
  { item: "Single gel polish bottle", cost: "$5 to $20", notes: "Professional-grade gel (OPI, Gelish) lasts 20 to 30 uses per bottle" },
  { item: "Materials per DIY manicure", cost: "$1 to $3", notes: "After starter supplies are purchased" },
  { item: "Gel manicure at salon (polish only)", cost: "$35 to $55", notes: "Prices vary by city; California salons average $40 to $60" },
  { item: "Gel nail extensions at salon", cost: "$55 to $100+", notes: "Soft gel tips or hard gel extensions are priced higher than gel polish" },
];

const mistakes = [
  { mistake: "Applying thick coats", fix: "Thick gel traps air and cures unevenly, causing bubbles and lifting. Apply thin coats and build coverage with a second or third layer instead." },
  { mistake: "Skipping the degreasing step", fix: "Any oil left on the nail surface breaks the bond between the gel base coat and the nail. Always wipe with alcohol or cleanser immediately before base coat." },
  { mistake: "Flooding the cuticle area", fix: "Gel that touches the cuticle will lift within days. Keep gel about 1 mm away from the cuticle and sidewalls. Use a thin brush and apply with the tip, not the full belly of the brush." },
  { mistake: "Not capping the free edge", fix: "Running the brush across the nail tip seals the edge and prevents the gel from peeling from the tip. Do this with base coat, each color coat, and top coat." },
  { mistake: "Under-curing", fix: "If your lamp is old, underpowered, or positioned incorrectly, gel will not fully cure. Cure each layer for the full recommended time and make sure all fingers are inside the lamp's LED zone." },
  { mistake: "Peeling instead of soaking", fix: "Picking or peeling gel polish removes layers of the natural nail with it. Always remove gel by soaking in acetone or using acetone-soaked cotton wrapped in foil." },
];

export default function HowToApplyGelNailsPage() {
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
            <Link href="/category/how-to" style={{ color: "#046BD2" }} className="hover:underline">How To</Link>
            <span className="mx-2">/</span>
            <span>How To Apply Gel Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Apply Gel Nails at Home
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A step-by-step guide on how to apply gel nails at home, covering the supplies you need, the difference between gel polish and gel extensions, how to get a clean cure, and the mistakes that cause lifting and peeling. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Intro */}
          <div>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Gel nails at home are more accessible than most people expect. The core supplies cost under $60, and a single kit lasts dozens of manicures. The main skill to develop is keeping your coats thin. Thick gel does not cure evenly, which causes lifting within a few days. Once you understand the prep and cure steps, a full at-home gel manicure takes about 30 to 45 minutes.
            </p>
          </div>

          {/* Gel polish vs gel extensions */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Gel Polish vs Gel Extensions: Which Method Should You Use?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Before buying supplies, decide which type of gel nails you want. Gel polish is applied over your natural nail, like regular polish, and adds color and shine without changing length. Gel extensions use a soft gel tip or hard gel sculpted over a form to add length before the color is applied. For beginners, gel polish is the right starting point.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Polish</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Extensions</th>
                  </tr>
                </thead>
                <tbody>
                  {gelVsExtensionRows.map(({ feature, polish, extensions }, i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{polish}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{extensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Supplies */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What You Need to Apply Gel Nails at Home</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The essential purchase is a UV or LED lamp. Without it, gel polish will not cure. Most beginner kits include a small LED lamp, a base coat, one gel color, and a top coat for $25 to $50. The lamp is the one item worth spending a little more on — a reliable 36-watt LED lamp for $20 to $30 is all you need for home use.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Supply</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {supplies.map(({ item, note }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* UV vs LED */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>UV Lamp vs LED Lamp: Which Is Better for Home Use?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              LED lamps are the better choice for home use. They cure gel in 30 to 60 seconds per layer rather than 2 to 3 minutes, and the bulbs last effectively forever. UV lamps are cheaper upfront and work with all gel brands, but the slower cure time adds up quickly over a full manicure.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">UV Lamp</th>
                    <th className="text-left px-4 py-2 font-semibold">LED Lamp</th>
                  </tr>
                </thead>
                <tbody>
                  {uvVsLedRows.map(({ feature, uv, led }, i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{uv}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{led}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>How To Apply Gel Nail Polish at Home: Step by Step</h2>
            <p className="leading-relaxed mb-6" style={{ color: "#707070" }}>
              These steps cover the gel polish method — applying gel color over your natural nails without adding length. This is the easiest and most beginner-friendly approach. Follow each step in order.
            </p>
            <div className="space-y-6">
              {steps.map(({ num, title, body }) => (
                <div key={num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gel extensions at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How To Apply Gel Nail Extensions at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel extensions require a few extra steps before the gel polish application above. The most common at-home method uses soft gel full-cover tips (like Aprés Gel-X or similar brands), which come pre-shaped and sized to match your natural nail.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              To apply soft gel extensions: prep and degrease your nails as in steps 1 and 2 above. Apply a thin layer of gel base coat and cure for 30 seconds. While the base coat is still tacky, fit a soft gel tip over each nail, press it flat from the cuticle end down, and cure for 30 to 60 seconds. Once all tips are cured and secure, file the length and shape to your preference. From there, continue with the gel color application steps as normal.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Hard gel extensions are sculpted over nail forms rather than applied as pre-made tips. This method is more customizable but harder to learn. Most home users start with soft gel tips and move to forms once they are comfortable with the basic gel application process.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Does a DIY Gel Nail Kit Cost vs Salon?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The cost of a home gel kit is recovered quickly. A salon gel manicure costs $35 to $55 each visit. A home kit costs $25 to $60 upfront and covers 20 to 30 manicures at about $1 to $3 each in materials. Most home gel kits pay for themselves after two uses.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Item</th>
                    <th className="text-left px-4 py-2 font-semibold">Cost</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(({ item, cost, notes }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2 font-medium" style={{ color: "#046BD2" }}>{cost}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Common Mistakes When Applying Gel Nails at Home</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Most at-home gel problems are caused by thick coats, skipped prep steps, or lifting from the cuticle area. Here are the six most common issues and what to do differently.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Mistake</th>
                    <th className="text-left px-4 py-2 font-semibold">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakes.map(({ mistake, fix }, i) => (
                    <tr key={mistake} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{mistake}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How long do they last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do DIY Gel Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A well-applied at-home gel manicure lasts 2 to 3 weeks before chipping or lifting. The same wear time you would get at a salon. The variable is prep: nails that are properly degreased before base coat, with edges capped at each layer, consistently last longer than rushed applications.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Gel nail extensions last 3 to 4 weeks before needing a fill or removal, though they will grow out visibly after two weeks as the natural nail grows. If your DIY gel is lifting before 10 days, the most likely cause is oil left on the nail surface during prep or gel flooding into the cuticle area.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Applying Gel Nails</h2>
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
                { title: "How To Remove Gel Nails", href: "/how-to/how-to-remove-gel-nails/" },
                { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
                { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
                { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
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
                href="/category/how-to"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: "#046BD2" }}
              >
                Browse all How-To guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
