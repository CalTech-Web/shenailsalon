import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Gel-X Nails at Home: Step-by-Step Guide",
  description:
    "Learn how to apply gel-x nails at home with this complete step-by-step guide. Covers supplies, sizing, application steps, curing times, cost breakdown, and the most common beginner mistakes.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-gel-x-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-gel-x-nails/",
    title: "How To Apply Gel-X Nails at Home: Step-by-Step Guide",
    description:
      "Learn how to apply gel-x nails at home with this complete step-by-step guide. Covers supplies, sizing, application steps, curing times, cost breakdown, and the most common beginner mistakes.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How To Apply Gel-X Nails",
      item: "https://shenailsalon.com/how-to/how-to-apply-gel-x-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Gel-X Nails at Home: Step-by-Step Guide",
  description:
    "A complete guide on how to apply gel-x nails at home, including supplies, sizing, the full application workflow, curing times, cost breakdown, and common mistakes to avoid.",
  url: "https://shenailsalon.com/how-to/how-to-apply-gel-x-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-gel-x-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply gel-x nails at home step by step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply gel-x nails at home: (1) Push back cuticles and lightly buff the nail surface. (2) Apply nail dehydrator and let it dry. (3) Apply a thin layer of gel base coat to the natural nail. (4) Select the correct size soft gel tip for each nail. (5) Apply gel base coat to the inside of the tip. (6) Press the tip onto the natural nail and hold for 5 seconds. (7) Cure under a UV or LED lamp for 60 seconds. (8) Clip to the desired length and file into shape. (9) Buff the surface, apply gel top coat, and cure again. The key differences from acrylic are: no mixing, no odor, and you use a lamp at every step.",
      },
    },
    {
      "@type": "Question",
      name: "Do gel-x nails need a UV lamp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gel-x nails require a UV or LED lamp to cure. The gel base coat that bonds the tip to the natural nail will not harden without lamp exposure. A 36-watt LED lamp cures gel-x in 60 seconds per coat. A UV lamp takes 2 minutes. Most gel-x starter kits include a small LED lamp.",
      },
    },
    {
      "@type": "Question",
      name: "How long do gel-x nails last at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel-x nails typically last 3 to 4 weeks at home when applied correctly. The main factors are nail prep quality (dehydration and buffing), proper curing time under the lamp, and whether the free edge is sealed with top coat. Lifting usually starts at the cuticle area if the base coat touches the skin.",
      },
    },
    {
      "@type": "Question",
      name: "How do you size gel-x nail tips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel-x tips come in numbered sizes, usually 0 through 9, from widest to narrowest. Lay each tip over the natural nail and choose the size that covers the nail plate from sidewall to sidewall without overlapping the skin. It is better to go slightly larger than smaller; a tip that is too narrow will lift at the edges. Most sets include 12 sizes per finger to cover all nail widths.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply gel-x nails without a kit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need at minimum: soft gel nail tips, a gel base coat, a UV or LED lamp, and a gel top coat. The gel base coat used for gel-x must be compatible with the tip system you are using; the Aprés Gel-X system uses its own extend gel. You can mix brands, but a mismatch between base coat and tip material is a common cause of poor adhesion. Starter kits from Aprés Nail or KISS are the easiest way to ensure compatibility.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a gel-x nail kit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic gel-x starter kit costs $40 to $80 and typically includes nail tips in multiple sizes, an extend gel or base coat, a small LED lamp, and a top coat. Individual tip boxes cost $15 to $25. After the initial purchase, the per-set cost works out to roughly $5 to $10, compared to $60 to $100 for gel-x extensions at a salon.",
      },
    },
  ],
};

export default function HowToApplyGelXNailsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <span>How To Apply Gel-X Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            <span>UV or LED Lamp Required</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Apply Gel-X Nails at Home
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#707070" }}>
            Gel-x nails use a soft gel full-cover tip bonded to the natural nail with a gel base coat and cured under a lamp. No acrylic powder, no monomer, no mixing. The result is a lightweight extension that lasts 3 to 4 weeks. This guide covers sizing, the full application workflow, how long to cure, what things go wrong, and what it costs to do at home.
          </p>
          <p className="text-sm mt-3" style={{ color: "#9CA3AF" }}>By Nancy Davidson</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* What Are Gel-X Nails */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Gel-X Nails?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Gel-x nails are soft gel nail extensions developed by Aprés Nail. A pre-shaped, full-cover soft gel tip is applied over the natural nail using a gel base coat and cured under a UV or LED lamp. Unlike acrylic, there is no liquid monomer and no mixing required. The tips come pre-shaped in natural curves that fit the nail bed directly, which makes the application process significantly more beginner-friendly than sculpting with acrylic.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
            For a complete breakdown of what gel-x is made of and how it compares to acrylic and hard gel, see the{" "}
            <Link href="/what-are/what-are-gel-x-nails/" style={{ color: "#046BD2" }} className="hover:underline">
              gel-x nails guide
            </Link>
            .
          </p>
        </section>

        {/* Gel-X vs Gel Polish vs Acrylic */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Gel-X vs Gel Polish vs Acrylic</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Gel-x is one of three main ways to get extended nails. Understanding where it sits relative to gel polish and acrylic helps you decide if it is the right method for you.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Gel-X</th>
                  <th className="text-left px-4 py-3 font-semibold">Gel Polish</th>
                  <th className="text-left px-4 py-3 font-semibold">Acrylic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["UV/LED lamp needed", "Yes", "Yes", "No"],
                  ["Adds length", "Yes (full-cover tip)", "With extensions only", "Yes"],
                  ["Application method", "Press tip, cure", "Paint on, cure each coat", "Sculpt monomer + polymer"],
                  ["Odor", "Mild", "Mild", "Strong (monomer)"],
                  ["Flexibility", "High (soft gel)", "Moderate", "Low (rigid)"],
                  ["Wear time", "3 to 4 weeks", "2 to 3 weeks", "2 to 3 weeks (fill every 2 weeks)"],
                  ["Removal", "Acetone soak 15 to 20 min", "Acetone soak 10 to 15 min", "Acetone soak 20 to 30 min"],
                  ["Beginner-friendly", "Yes", "Yes", "No (steeper learning curve)"],
                ].map(([feature, gelx, gelpolish, acrylic], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{gelx}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{gelpolish}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{acrylic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Supplies */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Supplies You Need</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            The four essential products are gel nail tips, an extend gel or gel base coat, a UV or LED lamp, and a gel top coat. Everything else speeds up the process or improves the finish.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Supply</th>
                  <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nail dehydrator", "Removes oils from the nail plate", "Critical for adhesion; skipping it causes lifting"],
                  ["Nail primer (optional)", "Increases base coat grip on the natural nail", "Recommended for oily nail beds or stubborn lifters"],
                  ["Soft gel nail tips", "The full-cover extension tip", "Come in numbered sizes (0 to 9 or XS to XL); buy a set that includes all sizes"],
                  ["Extend gel or gel base coat", "Bonds the tip to the natural nail", "Must be compatible with your tip brand; Aprés Extend Gel is designed for Aprés Gel-X tips"],
                  ["UV or LED lamp", "Cures the gel base coat and top coat", "A 36-watt LED lamp cures in 60 seconds; UV lamps take 2 minutes"],
                  ["Gel top coat", "Seals the finished nail, adds gloss", "Apply after shaping for the final cured layer"],
                  ["Nail clippers (tip cutters)", "Trims tips to the desired length", "Regular nail clippers work; tip cutters leave a cleaner edge"],
                  ["Nail file (180 grit)", "Shapes the free edge after clipping", "Use after the tip is cured and clipped to length"],
                  ["Nail buffer", "Smooths the surface before top coat", "Light buffing removes any ridges from filing"],
                  ["Cuticle pusher", "Pushes back cuticles before application", "Keeps the base coat off the skin, reducing lifting"],
                  ["Lint-free wipes and gel cleanser", "Wipes the inhibition layer after curing", "Wipe after the top coat cure for a shiny, smooth finish"],
                ].map(([supply, purpose, notes], i) => (
                  <tr key={supply} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{supply}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{purpose}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Size Tips */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Size Gel-X Tips</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Sizing is the most important prep step. A tip that is too narrow will lift at the sidewalls within days. A tip that is too wide will cover the skin at the edges and also cause lifting. The goal is a tip that covers the nail plate from sidewall to sidewall without touching the surrounding skin.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Sizing Result</th>
                  <th className="text-left px-4 py-3 font-semibold">What to Do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tip fits nail plate edge to edge without overlapping skin", "Correct size. Proceed."],
                  ["Tip is slightly too wide", "File the sidewalls of the tip with a nail file until it fits flush."],
                  ["Tip is too narrow, leaves gaps at sidewalls", "Go one size larger; do not try to stretch the tip."],
                  ["Tip curves away from the nail bed in the center", "Try a different brand or curvature; apply a slightly thicker layer of extend gel to fill the gap."],
                ].map(([result, action], i) => (
                  <tr key={result} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{result}</td>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "#4B5563" }}>
            Size all ten nails before you start applying. Keep them in order so you are not searching for sizes mid-application while the gel base coat is open.
          </p>
        </section>

        {/* Step-by-Step Guide */}
        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>How To Apply Gel-X Nails: Step by Step</h2>
          <p className="text-sm mb-5" style={{ color: "#707070" }}>
            Size all tips before starting. Work on one nail at a time from sizing through curing so the base coat does not dry before the tip is placed.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Prep the nails",
                body: "Push back cuticles with a wooden or metal pusher. Lightly buff the nail surface with a fine-grit file to remove the natural shine. This roughens the surface so the base coat grips. Wipe each nail with dehydrator and let it dry completely. If you have oily nails or a history of lifting, apply a thin coat of nail primer over the dehydrator and let it dry before moving on.",
              },
              {
                step: 2,
                title: "Size all tips",
                body: "Lay each tip against the natural nail and select the size that covers the nail plate edge to edge without overlapping the skin. If a tip is slightly wide, file the sidewalls of the tip before applying. Set the sized tips in order across a surface so you can grab them in sequence during application.",
              },
              {
                step: 3,
                title: "Apply extend gel to the natural nail",
                body: "Brush a thin, even layer of extend gel or gel base coat onto the natural nail. Keep it about 1 mm away from the cuticle. Do not cure yet. The gel needs to be wet when the tip is pressed on so it bonds properly. Apply to one nail at a time, then immediately move to the next step.",
              },
              {
                step: 4,
                title: "Apply extend gel to the inside of the tip",
                body: "Brush a thin layer of extend gel onto the concave inner surface of the soft gel tip. This dual-sided application creates a stronger bond. For beginners, use a slightly thicker layer on the tip to fill any gap between the tip curvature and the nail bed.",
              },
              {
                step: 5,
                title: "Press the tip onto the nail",
                body: "Starting from the cuticle area, press the tip down onto the nail at a slight angle and roll it forward toward the free edge. Press firmly along the entire surface for 5 to 10 seconds to push out any air bubbles. The tip should sit flush against the natural nail plate with no gaps. If you see a bubble or gap, lift the tip now and reapply extend gel before it cures.",
              },
              {
                step: 6,
                title: "Cure under the lamp",
                body: "Place the nail under a UV or LED lamp and cure for 60 seconds with an LED lamp or 2 minutes with a UV lamp. The gel will harden and permanently bond the tip to the natural nail. Do not move the finger during curing. After curing, test the bond by pressing firmly on the tip. It should feel completely solid with no flex at the nail bed.",
              },
              {
                step: 7,
                title: "Repeat on all ten nails",
                body: "Apply extend gel, place the tip, and cure one nail at a time. Attempting to place multiple tips before curing causes them to shift. After all ten nails are cured, check the bonds on each one before moving to shaping.",
              },
              {
                step: 8,
                title: "Clip to desired length",
                body: "Use nail clippers or tip cutters to cut the tips to your preferred length. Clip straight across first, then file and shape the free edge with a 180-grit file into your chosen shape: square, round, oval, almond, coffin, or stiletto. File in one direction from the sidewall toward the center.",
              },
              {
                step: 9,
                title: "Buff the surface",
                body: "Lightly buff the entire surface of each tip with a nail buffer to remove any ridges from filing and smooth the cuticle edge area. Wipe away dust with a dry lint-free wipe. The surface should feel smooth and look matte before you apply the top coat.",
              },
              {
                step: 10,
                title: "Apply gel top coat and cure",
                body: "Apply a thin, even coat of gel top coat over all ten nails, sealing the free edge by running the brush along the tip. Cure under the lamp for 60 seconds. After curing, wipe the nails with a lint-free wipe dampened with gel cleanser to remove the sticky inhibition layer. The nails should now have a high-gloss finish. Cuticle oil applied to the surrounding skin completes the manicure.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex gap-4 p-5 rounded-xl border border-gray-100"
                style={{ background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "#046BD2" }}
                >
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Comparison */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Cost: DIY vs Salon</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Item</th>
                  <th className="text-left px-4 py-3 font-semibold">Cost</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Starter kit (tips, extend gel, lamp, top coat)", "$40 to $80", "Aprés Nail and KISS are the most widely available brands"],
                  ["Soft gel tip box (replacement set)", "$15 to $25", "One box usually covers 3 to 5 full sets"],
                  ["Extend gel (standalone)", "$12 to $20", "Needed when the kit bottle runs out before the tips do"],
                  ["LED lamp (standalone)", "$15 to $30", "A 36-watt lamp is sufficient; you do not need a salon-grade lamp"],
                  ["Per-set DIY cost (after initial purchase)", "$5 to $10", "Mostly the tips used per set; gel and top coat last much longer"],
                  ["Salon gel-x extensions", "$60 to $100", "Varies by city; nail art adds $15 to $40"],
                ].map(([item, cost, notes], i) => (
                  <tr key={item} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                    <td className="px-4 py-3" style={{ color: "#046BD2", fontWeight: 600 }}>{cost}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How Long They Last */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Gel-X Nails Last?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Gel-x nails last 3 to 4 weeks with proper prep and application. Lifting starts at the cuticle edge when the base coat touches the skin or when the nail plate was not dehydrated before application. Tip chipping at the free edge happens when the top coat was not sealed along the tip. Both issues are preventable.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Scenario</th>
                  <th className="text-left px-4 py-3 font-semibold">Expected Wear</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Proper prep, correct sizing, fully cured", "3 to 4 weeks"],
                  ["Nail dehydrator skipped", "Lifting within 1 to 2 weeks"],
                  ["Extend gel touched the cuticle skin", "Lifting at the base within days"],
                  ["Tip too narrow (gaps at sidewalls)", "Lifting at the edges within 1 week"],
                  ["Under-cured (lamp time cut short)", "Tip pops off within days"],
                  ["Free edge not sealed with top coat", "Tip chipping within 1 week"],
                  ["Hands in water frequently", "Shorten wear by about 1 week"],
                ].map(([scenario, wear], i) => (
                  <tr key={scenario} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{scenario}</td>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{wear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Common Mistakes (and How to Avoid Them)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Mistake</th>
                  <th className="text-left px-4 py-3 font-semibold">What Happens</th>
                  <th className="text-left px-4 py-3 font-semibold">How to Avoid It</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Skipping nail dehydrator",
                    "The extend gel cannot grip the natural oil on the nail plate and the tip lifts within days",
                    "Apply dehydrator to every nail and let it dry completely before any gel is applied",
                  ],
                  [
                    "Getting extend gel on the cuticle skin",
                    "The cured gel pulls against the skin as the nail grows, causing immediate lifting at the base",
                    "Leave a 1 mm gap between the extend gel and the cuticle; push cuticles back fully before starting",
                  ],
                  [
                    "Choosing a tip that is too narrow",
                    "The sidewall gaps cause the tip to flex and eventually pop off at the edges",
                    "Test the tip against the nail plate dry before applying gel; go larger if unsure",
                  ],
                  [
                    "Air bubbles under the tip",
                    "The bubble creates a weak spot that pops the tip loose under pressure",
                    "Press the tip from the cuticle area forward in a rolling motion; press firmly for 10 full seconds",
                  ],
                  [
                    "Under-curing the extend gel",
                    "The gel stays tacky and the tip is not truly bonded; it pops off within hours",
                    "Follow the lamp manufacturer's recommended cure time exactly; do not rush",
                  ],
                  [
                    "Not sealing the free edge with top coat",
                    "The tip chips or peels from the tip inward",
                    "Run the top coat brush along the very edge of the tip with each top coat coat",
                  ],
                ].map(([mistake, what, how], i) => (
                  <tr key={mistake} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{mistake}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{what}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1E293B" }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do gel-x nails need a UV lamp?",
                a: "Yes. The extend gel or base coat that bonds the tip to your natural nail requires a UV or LED lamp to cure and harden. A 36-watt LED lamp is the most common choice for at-home use and cures each coat in 60 seconds.",
              },
              {
                q: "How do you size gel-x tips?",
                a: "Lay each tip over the nail and find the size that covers the nail plate from sidewall to sidewall without touching the skin. If the tip is slightly too wide, file the edges of the tip itself. If it is too narrow, go up a size.",
              },
              {
                q: "Can you apply gel-x nails without a kit?",
                a: "You need at minimum soft gel tips, a compatible gel base coat or extend gel, a UV or LED lamp, and a gel top coat. Using mismatched brands can cause adhesion issues, so a complete kit from one brand is the easiest starting point.",
              },
              {
                q: "How long do gel-x nails last at home?",
                a: "With proper prep and application, gel-x nails last 3 to 4 weeks. The most common reasons they fail early are skipping the nail dehydrator, getting gel on the cuticle skin, or under-curing.",
              },
              {
                q: "How do you remove gel-x nails at home?",
                a: "File off the top coat layer to break the seal. Soak cotton balls in 100% pure acetone, place one on each nail, wrap in foil, and wait 15 to 20 minutes. The soft gel tip will soften and can be pushed off with a cuticle pusher. See the full removal guide for step-by-step instructions.",
              },
              {
                q: "How much does a gel-x kit cost?",
                a: "A starter kit costs $40 to $80 and includes tips, extend gel, a small LED lamp, and top coat. After the initial purchase, the per-set cost works out to $5 to $10, compared to $60 to $100 at a salon.",
              },
            ].map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 border border-gray-100"
                style={{
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#3A5FCC"}`,
                }}
              >
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="pt-4 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Related Nail Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "How To Remove Gel-X Nails", href: "/how-to/how-to-remove-gel-x-nails/" },
              { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
              { title: "How To Apply Gel Nails at Home", href: "/how-to/how-to-apply-gel-nails/" },
              { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
            ].map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: "#046BD2" }}></div>
                <span className="text-sm font-medium" style={{ color: "#1E293B" }}>{link.title}</span>
                <span className="ml-auto text-xs group-hover:translate-x-0.5 transition-transform" style={{ color: "#046BD2" }}>→</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
