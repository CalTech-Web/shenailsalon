import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Polygel Nails at Home: Step-by-Step Guide",
  description:
    "Learn how to apply polygel nails at home with this complete step-by-step guide. Covers supplies, slip solution, nail forms, shaping, curing, wear time, and the most common beginner mistakes.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-polygel-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-polygel-nails/",
    title: "How To Apply Polygel Nails at Home: Step-by-Step Guide",
    description:
      "Learn how to apply polygel nails at home with this complete step-by-step guide. Covers supplies, slip solution, nail forms, shaping, curing, wear time, and the most common beginner mistakes.",
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
      name: "How To Apply Polygel Nails",
      item: "https://shenailsalon.com/how-to/how-to-apply-polygel-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Polygel Nails at Home: Step-by-Step Guide",
  description:
    "A complete guide on how to apply polygel nails at home, including supplies, slip solution, nail forms, the full application workflow, curing times, wear time, and common beginner mistakes to avoid.",
  url: "https://shenailsalon.com/how-to/how-to-apply-polygel-nails/",
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
  dateModified: "2026-03-30",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-polygel-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply polygel nails step by step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply polygel nails at home: (1) Push back cuticles and buff the nail surface. (2) Apply nail dehydrator and let it dry. (3) Apply a thin base coat and cure under a UV or LED lamp. (4) Squeeze a small bead of polygel onto a nail form or directly onto the nail. (5) Dip your brush in slip solution and use it to spread and shape the polygel while it is still uncured. (6) Cure under the lamp for 60 seconds. (7) Remove the nail form if used. (8) File and shape the cured nail. (9) Buff the surface smooth. (10) Apply gel top coat and cure again. The key tool is slip solution, which prevents the polygel from sticking to the brush.",
      },
    },
    {
      "@type": "Question",
      name: "What is slip solution for polygel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slip solution is a liquid used to wet the brush so polygel does not stick to it during shaping. It is usually 70 to 90% isopropyl alcohol mixed with a small amount of gel monomer. Without slip solution, the polygel paste sticks to the brush and cannot be spread smoothly. Many kits include a small bottle; it can also be bought separately or made from 70% isopropyl alcohol as a substitute.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a UV lamp to apply polygel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Polygel only cures under a UV or LED lamp. Unlike acrylic, it does not harden in open air. The advantage is that it stays workable until you are ready to cure, giving you as much time as you need to shape the nail. A 36-watt LED lamp cures polygel in 60 seconds. A UV lamp takes 2 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply polygel without nail forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you are doing an overlay on natural nails rather than an extension, you apply polygel directly to the nail plate without a form. For extensions, you need either a nail form taped under the free edge to support the extended section, or pre-made dual nail forms that clip onto the fingertip. Forms give the extension its shape while the polygel is cured.",
      },
    },
    {
      "@type": "Question",
      name: "How long do polygel nails last when applied at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polygel nails last 3 to 5 weeks when applied correctly at home. Overlays on natural nails can last up to 5 weeks. Extensions with added length typically need a fill or refresh every 3 to 4 weeks as the natural nail grows out. The most common reasons for early failure are skipping the base coat, not using enough slip solution (which causes uneven application), or under-curing.",
      },
    },
    {
      "@type": "Question",
      name: "What supplies do you need to apply polygel nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The essential supplies are: polygel paste, slip solution, a gel base coat, a UV or LED lamp, a gel top coat, a small dual-ended brush (one flat side for spreading, one dotting side), nail dehydrator, and nail forms or dual forms if doing extensions. Optional but helpful: nail primer, a nail file, a buffer, and cuticle oil. Starter kits from Modelones, Morovan, and AIMEILI typically include all of these.",
      },
    },
    {
      "@type": "Question",
      name: "Is polygel easier to apply than acrylic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most beginners find polygel easier than acrylic. Polygel does not set in open air, so you can take your time shaping without rushing. There is no liquid monomer to measure, no strong chemical odor, and no mixing ratio to get right. The main skill to learn is using slip solution correctly so the polygel stays workable without becoming too wet and runny.",
      },
    },
  ],
};

export default function HowToApplyPolygelNailsPage() {
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
            <span>How To Apply Polygel Nails</span>
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
            How To Apply Polygel Nails at Home
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#707070" }}>
            Polygel is a hybrid nail enhancement that stays workable until you cure it under a lamp, which makes it one of the most beginner-friendly ways to do nail extensions at home. There is no liquid monomer, no strong odor, and no time pressure. The key supply is slip solution, which keeps the polygel from sticking to your brush while you shape it. This guide covers every step from prep through finishing, what goes wrong and why, and what it costs.
          </p>
          <p className="text-sm mt-3" style={{ color: "#9CA3AF" }}>By Nancy Davidson</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* What Makes Polygel Different */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Makes Polygel Different From Acrylic and Gel?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Polygel is a paste-form enhancement that combines the chemistry of gel (UV-cured oligomers) with the bulk and strength of acrylic powder fillers. Unlike acrylic, it contains no liquid monomer, so there is no odor and no reaction time to race against. Unlike gel polish, it is thick enough to sculpt into extensions. The critical practical difference is that polygel will not harden until you cure it, which means you can take as long as you need to shape each nail before committing to the cure.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
            For a full breakdown of the chemistry, comparisons with acrylic and builder gel, and cost data, see the{" "}
            <Link href="/what-are/what-are-polygel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
              what are polygel nails guide
            </Link>
            .
          </p>
        </section>

        {/* Polygel vs Acrylic vs Builder Gel for Application */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Polygel vs Acrylic vs Builder Gel: Application Comparison</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Understanding how polygel sits relative to acrylic and builder gel helps you choose the right method before buying supplies.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Polygel</th>
                  <th className="text-left px-4 py-3 font-semibold">Acrylic</th>
                  <th className="text-left px-4 py-3 font-semibold">Builder Gel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Curing method", "UV or LED lamp", "Air (no lamp)", "UV or LED lamp"],
                  ["Application form", "Paste from a tube", "Liquid + powder mixed", "Thick gel from a bottle"],
                  ["Odor", "None", "Strong (monomer)", "None"],
                  ["Working time", "Unlimited until cured", "3 to 5 minutes", "Unlimited until cured"],
                  ["Slip solution needed", "Yes", "No (uses liquid monomer)", "No (self-levels)"],
                  ["Nail forms needed for extensions", "Yes", "Yes", "Yes"],
                  ["Extensions possible", "Yes", "Yes", "Yes (with forms or tips)"],
                  ["Beginner difficulty", "Low", "High", "Low to moderate"],
                  ["Wear time", "3 to 5 weeks", "2 to 3 weeks (fill every 2)", "3 to 4 weeks"],
                ].map(([feature, poly, acrylic, builder], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{poly}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{acrylic}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{builder}</td>
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
            Polygel starter kits from Modelones, Morovan, or AIMEILI typically include the paste, slip solution, a dual-ended brush, nail forms, and a small LED lamp for $25 to $60. Buying a complete kit is easier for beginners than sourcing individual items and avoids compatibility issues between the paste and slip solution.
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
                  ["Nail dehydrator", "Removes natural oils from the nail plate for better adhesion", "Critical; skipping this causes lifting within days"],
                  ["Nail primer (optional)", "Improves base coat grip on oily or stubborn nail beds", "Recommended for first-time applications or oily nail types"],
                  ["Gel base coat", "Primes the natural nail and gives polygel something to grip", "Apply a thin layer and cure before the polygel goes on"],
                  ["Polygel paste (tube)", "The nail enhancement material you shape and cure", "Comes in clear, pink, and natural shades; buy by the tube or in a kit"],
                  ["Slip solution", "Keeps polygel from sticking to the brush while you shape it", "70% isopropyl alcohol works as a substitute in a pinch"],
                  ["Dual-ended brush or spatula", "Flat end spreads polygel; pointed end smooths edges", "The flat brush is used wet with slip solution throughout shaping"],
                  ["UV or LED lamp", "Cures and hardens the polygel permanently", "36-watt LED cures in 60 seconds; UV lamps take 2 minutes"],
                  ["Nail forms or dual forms", "Supports the extension while you shape and cure it", "Dual forms clip onto the fingertip and are removed after curing; standard forms tape under the free edge"],
                  ["Nail file (100 to 180 grit)", "Shapes the cured extension and smooths the surface", "Use 100 grit for length and shape, 180 grit to refine"],
                  ["Nail buffer", "Smooths the surface before top coat", "Removes file marks and ridges for a clean finish"],
                  ["Gel top coat", "Seals and protects the finished nail with a glossy layer", "Must be UV or LED cured; not a regular polish top coat"],
                  ["Cuticle oil", "Moisturizes skin after the set is complete", "Apply to surrounding skin after the final cure"],
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

        {/* Slip Solution Explained */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Understanding Slip Solution</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Slip solution is the one supply that confuses most beginners. Polygel paste is tacky by nature. Without a wet brush, it sticks to everything and cannot be spread or shaped. Slip solution solves this by coating the brush so the polygel glides instead of grabs. You dip the brush in slip solution before every stroke.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Situation</th>
                  <th className="text-left px-4 py-3 font-semibold">What Happens</th>
                  <th className="text-left px-4 py-3 font-semibold">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Brush is dry", "Polygel sticks to the brush and tears instead of spreading smoothly", "Dip the brush tip in slip solution before each stroke"],
                  ["Too much slip solution on the brush", "Polygel becomes runny, loses shape, and slides around before curing", "Blot the brush on the edge of the slip solution cap to remove excess"],
                  ["No slip solution available", "70% isopropyl alcohol works as a temporary substitute; 90%+ evaporates too fast", "Use sparingly and work quickly; buy proper slip solution before the next set"],
                  ["Polygel shrinks after curing", "Brush was too wet and thinned the paste excessively", "Use less slip solution and work in smaller strokes"],
                ].map(([situation, what, fix], i) => (
                  <tr key={situation} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{situation}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{what}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>How To Apply Polygel Nails: Step by Step</h2>
          <p className="text-sm mb-5" style={{ color: "#707070" }}>
            These steps cover a full extension using nail forms. If you are doing an overlay on natural nails, skip the nail form steps (steps 4 and 8) and apply the polygel directly to the natural nail plate.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Prep the nails",
                body: "Push back cuticles with a cuticle pusher. Lightly buff the entire nail surface with a file to remove the natural shine. The nail plate should look matte, not shiny, after buffing. Wipe each nail with a nail dehydrator and let it dry completely. Do not touch the nail surface after this step.",
              },
              {
                step: 2,
                title: "Apply base coat and cure",
                body: "Brush a thin, even layer of gel base coat onto each nail, keeping it about 1 mm away from the cuticle edge. Cure under a UV or LED lamp for 30 to 60 seconds. The base coat gives the polygel a surface to bond to. Without a cured base coat, the polygel will lift from the nail plate as it grows out.",
              },
              {
                step: 3,
                title: "Prepare your nail form",
                body: "For extensions, slide a dual nail form onto the fingertip so it fits snugly against the free edge of the natural nail without any gap. If using a standard nail form, fit it under the free edge and fold the sides around the finger so it is secure. The form is the mold for the extended portion of the nail.",
              },
              {
                step: 4,
                title: "Squeeze out a bead of polygel",
                body: "Squeeze a small bead of polygel paste directly onto the nail form or onto the nail surface. For a natural overlay with no extension, place the bead at the center of the nail. For an extension, place it at the edge of the natural nail so it can be spread onto the form. Start small. You can always add more paste but cannot easily remove it once it is spread.",
              },
              {
                step: 5,
                title: "Dip the brush in slip solution and spread the polygel",
                body: "Dip the flat side of the brush into the slip solution bottle and blot off any excess on the bottle rim. Use the wet brush to press and spread the polygel bead into a thin, even layer across the nail. Work from the cuticle area toward the free edge. Dip the brush in slip solution before every stroke. The goal is an even layer that tapers from slightly thicker at the stress point (around the middle of the nail) to thin at the cuticle and free edge.",
              },
              {
                step: 6,
                title: "Shape the extension on the form",
                body: "If doing an extension, continue spreading the polygel out onto the nail form to the length you want. Use the pointed end of the brush or a clean flat brush with slip solution to smooth the edges and refine the shape. You can take as long as you need. Polygel will not harden until you cure it. Pinch the sidewalls slightly for a more natural c-curve if needed.",
              },
              {
                step: 7,
                title: "Cure under the lamp",
                body: "Place the nail under the UV or LED lamp and cure for 60 seconds with an LED lamp or 2 minutes with a UV lamp. The polygel will harden completely. After curing, press on the nail. It should feel solid with no flex or softness. If any area feels soft, cure for another 30 seconds.",
              },
              {
                step: 8,
                title: "Remove the nail form",
                body: "Gently peel or lift the nail form away from the underside of the cured extension. Dual forms pop off easily. Standard forms peel away from the finger. The underside of the extension will be rough from the form surface, which will be filed smooth in the next step.",
              },
              {
                step: 9,
                title: "File and shape the nail",
                body: "Use a 100-grit file to shape the free edge to your preferred shape: square, round, oval, almond, coffin, or stiletto. File the surface of the nail with 180-grit to remove any bumps, ridges, or shiny spots from the form. Smooth the underside of the extension with a gentle file pass. Wipe away dust with a dry lint-free wipe.",
              },
              {
                step: 10,
                title: "Buff the surface",
                body: "Buff the entire nail surface with a nail buffer until it is completely smooth and matte. Pay attention to the cuticle edge area where the polygel meets the natural nail. This transition zone should feel flush with no ridge. A rough transition here will show through the top coat and can become a lifting point.",
              },
              {
                step: 11,
                title: "Apply gel top coat and cure",
                body: "Apply a thin, even layer of gel top coat to all nails, sealing the free edge by dragging the brush along the tip. Cure for 60 seconds. After curing, wipe each nail with a lint-free wipe dampened with gel cleanser to remove the sticky inhibition layer. Finish with cuticle oil on the surrounding skin.",
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

        {/* Wear Time */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>How Long Do Polygel Nails Last?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Polygel nails last 3 to 5 weeks depending on application quality and how the nails are used. The most common causes of early failure are skipping the dehydrator, not using enough slip solution (leading to uneven coverage with thin spots), and under-curing.
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
                  ["Proper prep, base coat, correct cure time", "3 to 5 weeks"],
                  ["Overlay on natural nails (no extension)", "Up to 5 weeks"],
                  ["Extension with nail forms, full cure", "3 to 4 weeks before fill needed"],
                  ["Dehydrator skipped", "Lifting starts within 1 to 2 weeks"],
                  ["Too much slip solution (thin spots in the polygel)", "Cracking or lifting at thin spots within 1 to 2 weeks"],
                  ["Under-cured (lamp time too short)", "Polygel stays soft, breaks or pops off within days"],
                  ["Frequent water exposure (dishwashing, swimming)", "Shortens wear by about 1 week"],
                  ["Base coat applied too close to cuticle skin", "Lifting at the cuticle edge within days"],
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
                  ["Polygel starter kit (paste, slip solution, lamp, forms, top coat)", "$25 to $60", "Modelones, Morovan, and AIMEILI are widely available on Amazon"],
                  ["Polygel paste tube (single color, replacement)", "$8 to $18", "One tube covers multiple full sets"],
                  ["Slip solution (standalone bottle)", "$5 to $12", "A single bottle lasts many sets; 70% isopropyl alcohol works as a substitute"],
                  ["LED lamp (standalone 36W)", "$15 to $30", "Not needed if kit already includes one"],
                  ["Per-set DIY cost (after initial purchase)", "$3 to $8", "Mostly the nail forms used; paste and slip solution last much longer per set"],
                  ["Salon polygel overlay (CA)", "$45 to $65", "Overlay on natural nails without extensions"],
                  ["Salon polygel extensions (CA)", "$65 to $90", "Full extension set; nail art adds $15 to $40"],
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
                    "Natural oils prevent the base coat from bonding and the polygel lifts from the nail plate within a week",
                    "Apply dehydrator to every nail and wait for it to dry fully before applying base coat",
                  ],
                  [
                    "Not using slip solution on the brush",
                    "Polygel sticks to the brush and cannot be spread evenly; the surface is lumpy and uneven after curing",
                    "Dip the brush tip in slip solution before every single stroke; never spread polygel with a dry brush",
                  ],
                  [
                    "Using too much slip solution",
                    "Polygel becomes too thin and runny, loses its shape, and may shrink or crack after curing",
                    "Blot the brush on the cap rim before each stroke to remove excess; the brush should be damp, not dripping",
                  ],
                  [
                    "Applying polygel too close to the cuticle",
                    "The cured polygel pulls against the skin as the nail grows, causing immediate lifting at the base",
                    "Leave a 1 mm gap between the polygel and the cuticle; push cuticles back fully before starting",
                  ],
                  [
                    "Under-curing",
                    "The polygel stays slightly soft and flexible; it will crack, chip, or snap off under normal use within days",
                    "Follow the lamp manufacturer's recommended cure time; do not rush; if unsure, add 30 seconds",
                  ],
                  [
                    "Applying too much polygel in one bead",
                    "The nail looks thick and unnatural and is hard to file down after curing without damaging the natural nail",
                    "Use small beads and build in thin layers; polygel is easier to add than to remove once cured",
                  ],
                  [
                    "Skipping the top coat",
                    "The cured polygel surface is porous and will yellow or stain quickly without a sealed top coat",
                    "Always finish with a UV or LED gel top coat; a regular polish top coat will not bond correctly",
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
                q: "What is slip solution and do you need it?",
                a: "Slip solution is a liquid, usually isopropyl alcohol with a small amount of gel monomer, that coats the brush so polygel slides instead of sticking. You need it for every stroke during shaping. Without it, polygel sticks to the brush and cannot be spread into an even layer. Most kits include a bottle; 70% isopropyl alcohol works as a substitute.",
              },
              {
                q: "Do you need a UV lamp to apply polygel?",
                a: "Yes. Polygel only cures under a UV or LED lamp. This is also the feature that makes it beginner-friendly: you can take as long as you need to shape the nail because the polygel will not harden until you put it under the lamp. A 36-watt LED lamp is the most common choice and cures each coat in 60 seconds.",
              },
              {
                q: "Can you apply polygel without nail forms?",
                a: "Yes, if you are doing an overlay on your natural nails rather than adding length. Apply the polygel paste directly to the nail plate after the base coat. For extensions, you need nail forms to support the paste while you shape the extended portion.",
              },
              {
                q: "Is polygel better for beginners than acrylic?",
                a: "Most beginners find polygel easier. There is no liquid monomer to measure, no mixing ratio, no strong odor, and no time pressure. The polygel stays workable until you cure it, so you can take your time on each nail. The main new skill is learning to use slip solution correctly.",
              },
              {
                q: "How do you remove polygel nails at home?",
                a: "File off the top coat layer to break the seal. Soak cotton balls in 100% pure acetone, place one on each nail, wrap in foil, and wait 15 to 20 minutes. The polygel will soften and can be gently pushed off with a cuticle pusher. Never force or peel the polygel; it will take layers of the natural nail with it.",
              },
              {
                q: "How long does it take to apply a full set of polygel nails?",
                a: "Expect 60 to 90 minutes for a first-time full extension set, including prep, application, curing, and filing. Overlays on natural nails are faster, usually 45 to 60 minutes. Application time decreases significantly with practice, and most people get a full set down to 30 to 45 minutes after a few tries.",
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
              { title: "What Are Polygel Nails?", href: "/what-are/what-are-polygel-nails/" },
              { title: "How To Apply Builder Gel", href: "/how-to/how-to-apply-builder-gel/" },
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
