import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Shellac Nails at Home: Step-by-Step Guide",
  description:
    "Learn how to apply shellac nails at home with this complete step-by-step guide. Covers supplies, prep, application steps, curing times, how long it lasts, cost breakdown, and common mistakes to avoid.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-shellac/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-shellac/",
    title: "How To Apply Shellac Nails at Home: Step-by-Step Guide",
    description:
      "Learn how to apply shellac nails at home with this complete step-by-step guide. Covers supplies, prep, application steps, curing times, how long it lasts, cost breakdown, and common mistakes to avoid.",
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
      name: "How To Apply Shellac Nails",
      item: "https://shenailsalon.com/how-to/how-to-apply-shellac/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Shellac Nails at Home: Step-by-Step Guide",
  description:
    "A complete guide on how to apply shellac nails at home, including supplies, nail prep, the full application workflow, curing times, how long shellac lasts, cost breakdown, and the most common beginner mistakes.",
  url: "https://shenailsalon.com/how-to/how-to-apply-shellac/",
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
  dateModified: "2026-03-31",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-shellac/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply shellac nails at home step by step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply shellac at home: (1) Push back cuticles and lightly buff the nail surface to remove shine. (2) Wipe each nail with nail dehydrator or cleanser. (3) Apply a thin base coat and cure under a UV or LED lamp for 10 seconds. (4) Apply the first thin coat of shellac color, keeping it 1 mm from the cuticle, and cure for 1 to 2 minutes. (5) Apply a second thin coat of color and cure again. (6) Apply top coat, run the brush over the free edge to seal it, and cure for 2 minutes. (7) Wipe with a lint-free wipe and isopropyl alcohol to remove the inhibition layer. The finished nails are ready to use immediately with no dry time required.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a UV lamp to apply shellac nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shellac is a gel-hybrid polish that requires a UV or LED lamp to cure and harden. CND, the maker of Shellac, recommends a UV lamp for their specific product. Most LED lamps also work with shellac-style gel polishes. Without a lamp, the product will not dry or harden and will stay tacky.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between shellac nails and gel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac is a brand name from CND for a gel-hybrid polish that is thinner than traditional gel and easier to remove with acetone. Regular gel polish (from brands like OPI, Gelish, or Sally Hansen) works the same way but is not branded as Shellac. The key difference is that Shellac is CND's proprietary formula. In everyday conversation, shellac and gel polish are used interchangeably and the application method is identical.",
      },
    },
    {
      "@type": "Question",
      name: "How long does shellac last on nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac lasts 2 to 3 weeks with proper prep and application. Unlike regular nail polish, shellac does not chip or peel, but it grows out with the natural nail, leaving a gap at the cuticle after 2 to 3 weeks. How long it lasts depends mostly on nail prep: dehydrating the nail and applying a thin base coat are the two most important steps.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a shellac manicure cost at home vs a salon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shellac or gel polish starter kit costs $20 to $50 at home, and each application costs $2 to $5 in product once you have the lamp and base/top coat. At a salon, a shellac manicure typically costs $35 to $60 in California, depending on the city and salon. The home kit pays for itself after 2 to 3 applications.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply shellac nails without buffing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buffing the nail lightly before applying shellac is recommended because it removes the natural shine from the nail plate and creates a slightly rough surface that the base coat bonds to more effectively. Skipping the buff step does not always cause immediate failure, but it is one of the more common reasons shellac lifts within the first week, especially on oily nail beds.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove shellac nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To remove shellac, lightly buff the top coat surface to break the seal, soak cotton balls in pure acetone, place one on each nail, wrap each finger in foil, and wait 10 to 15 minutes. The shellac will soften and slide off with gentle pressure from a cuticle pusher or orange stick. Do not peel or pull, as this removes layers of the natural nail plate along with the shellac.",
      },
    },
  ],
};

export default function HowToApplyShellacPage() {
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
            <span>How To Apply Shellac Nails</span>
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
            How To Apply Shellac Nails at Home
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#707070" }}>
            Shellac is CND's gel-hybrid nail polish that cures under a UV or LED lamp instead of air-drying. It gives you the shine and chip-resistance of a gel manicure with a thinner formula that is easier to remove than traditional hard gel. I love shellac for its no-wait cure time and the fact that I can use my hands the second I step away from the lamp. This guide covers everything you need: supplies, nail prep, the full application process, how long it lasts, cost at home versus a salon, and the mistakes that cause early lifting.
          </p>
          <p className="text-sm mt-3" style={{ color: "#9CA3AF" }}>By Nancy Davidson</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* What Is Shellac */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Shellac?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Shellac is a registered trademark of CND (Creative Nail Design) for a gel-hybrid polish that combines the easy application of traditional nail polish with the durability and chip-resistance of gel. It is not the same as traditional shellac lacquer (which is made from a resin secreted by lac bugs). CND Shellac is a synthetic UV-cured formula sold in hundreds of colors.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
            In everyday use, "shellac nails" has become a general term for any gel polish manicure, whether it is an actual CND Shellac product or another brand. The application method is identical across brands. For a full breakdown of what shellac nails are and how they compare to other nail types, see the{" "}
            <Link href="/what-are/what-are-shellac-nails/" style={{ color: "#046BD2" }} className="hover:underline">
              shellac nails guide
            </Link>
            .
          </p>
        </section>

        {/* Shellac vs Gel Polish vs Regular Polish */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Shellac vs Gel Polish vs Regular Polish</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Shellac sits between regular nail polish and traditional hard gel. It cures under a lamp like gel but applies as thinly as regular polish and removes in about half the time of hard gel.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Shellac / Gel Polish</th>
                  <th className="text-left px-4 py-3 font-semibold">Regular Nail Polish</th>
                  <th className="text-left px-4 py-3 font-semibold">Hard Gel</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["UV/LED lamp needed", "Yes", "No (air-dry)", "Yes"],
                  ["Dry time after application", "Instant (lamp cures in seconds)", "10 to 30 minutes", "Instant (lamp)"],
                  ["Chip resistance", "High (2 to 3 weeks)", "Low (3 to 7 days)", "High (3 to 4 weeks)"],
                  ["Thickness", "Thin (like regular polish)", "Thin", "Thick (builds strength)"],
                  ["Adds strength to nail", "Minimal", "None", "Yes"],
                  ["Adds length", "No", "No", "Yes (with nail forms)"],
                  ["Removal time", "10 to 15 min acetone soak", "2 to 5 min acetone", "20 to 30 min acetone or file off"],
                  ["Beginner-friendly", "Yes", "Yes", "Moderate"],
                  ["Best for", "Chip-free color for 2 to 3 weeks", "Temporary color, frequent changes", "Strengthening or extending nails"],
                ].map(([feature, shellac, regular, hard], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{shellac}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{regular}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{hard}</td>
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
            A gel polish or shellac starter kit covers most of what you need. The lamp is the biggest upfront cost but lasts for hundreds of applications.
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
                  ["Nail dehydrator or cleanser", "Removes surface oils and moisture before application", "Critical step — oily nail plates are the leading cause of early lifting"],
                  ["Gel base coat", "Creates a bonding layer between the natural nail and the color", "CND Shellac base coat is formulated for their color line; generic gel base coats work with most gel polish brands"],
                  ["Shellac or gel polish color", "The color layer", "CND Shellac, OPI Infinite Shine, Gelish, Sally Hansen Miracle Gel are all gel-hybrid polishes with similar application methods"],
                  ["Gel top coat", "Seals color, adds high-gloss shine, and protects against chipping", "Apply over the free edge to prevent tip chipping"],
                  ["UV or LED lamp", "Cures each layer of polish into a hard, durable film", "CND recommends UV for Shellac; LED lamps also work for most gel polishes — check your product specs"],
                  ["Nail buffer (fine grit)", "Lightly removes shine from the nail surface before base coat", "Buffing improves base coat adhesion; use a fine grit to avoid thinning the natural nail"],
                  ["Cuticle pusher", "Clears the nail plate edge before application", "Clean cuticle edges prevent gel from lifting at the base"],
                  ["Lint-free wipes", "Removes the sticky inhibition layer after curing the top coat", "Lint-free prevents fibers from embedding in the top coat"],
                  ["Isopropyl alcohol (90% or higher)", "Used with lint-free wipes to remove the inhibition layer", "Do not use hand sanitizer — too many additives"],
                  ["Acetone (100% pure)", "Used for removal after 2 to 3 weeks", "Lower concentrations slow the removal process significantly"],
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

        {/* Step-by-Step Application */}
        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>How To Apply Shellac Nails: Step by Step</h2>
          <p className="text-sm mb-5" style={{ color: "#707070" }}>
            Follow these steps in order. The most common mistakes happen during prep, not application, so do not rush the first three steps.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Shape and push back cuticles",
                body: "File the free edge to your preferred shape using a nail file. Push back the cuticles with a wooden or metal cuticle pusher. The nail plate needs to be clear of cuticle skin all the way to the edges. Any cuticle skin under the base coat will lift the shellac off the nail within days. If there is any dry cuticle tissue sitting on the nail plate, push it off or clip it with cuticle nippers.",
              },
              {
                step: 2,
                title: "Buff the nail surface lightly",
                body: "Use a fine-grit nail buffer to remove the natural shine from each nail. You are not trying to thin the nail — one or two light passes across the entire surface is enough. The buffed surface gives the base coat something to grip instead of sitting on top of a smooth, oily plate.",
              },
              {
                step: 3,
                title: "Clean with nail dehydrator or cleanser",
                body: "Apply nail dehydrator or nail cleanser to each nail using a lint-free wipe or cotton pad. This step removes any remaining surface oils left behind after buffing. Let the dehydrator evaporate fully before moving on. If you skip this step, the base coat may not bond to the nail plate and the entire application will lift.",
              },
              {
                step: 4,
                title: "Apply base coat and cure",
                body: "Apply a thin layer of gel base coat to each nail, keeping it 1 mm from the cuticle and sidewalls. A thin coat means the brush just barely covers the nail — if you can see visible brush strokes or the coat pools near the cuticle, it is too thick. Cure under the lamp according to your base coat instructions. CND Shellac base coat cures for 10 seconds in an LED lamp or 10 seconds in a UV lamp. Do not wipe the base coat after curing — the tacky surface helps the color adhere.",
              },
              {
                step: 5,
                title: "Apply the first color coat and cure",
                body: "Apply a thin coat of shellac or gel polish color starting from the center of the nail and spreading toward the cuticle edge (stop 1 mm from the skin), then sidewalls, then across the free edge. Thin coats are the key: shellac is designed to build in two thin coats rather than one heavy coat. A heavy coat will not cure evenly and can wrinkle during curing. Cure under the lamp per your product's instructions. Gelish and most gel polishes cure in 30 to 60 seconds under LED.",
              },
              {
                step: 6,
                title: "Apply the second color coat and cure",
                body: "Apply a second thin coat of color following the same technique. The second coat builds opacity and depth of color. If the color is still translucent after two coats, apply a third thin coat and cure again. Some lighter shades naturally need three coats for full coverage. Cure after each coat.",
              },
              {
                step: 7,
                title: "Apply top coat and seal the free edge",
                body: "Apply a thin, even layer of gel top coat. After covering the nail surface, run the brush across the very tip of the free edge to seal it. This one step is the main reason some shellac applications chip at the tip and others do not. Cure under the lamp for the full recommended time — top coats typically need a longer cure than color coats.",
              },
              {
                step: 8,
                title: "Remove the inhibition layer",
                body: "After the top coat cures, the surface will feel slightly sticky. This is the inhibition layer, a thin film of uncured material that forms on the surface of any UV/LED-cured product. Wipe each nail firmly with a lint-free wipe dampened with isopropyl alcohol. After wiping, the nail should feel completely smooth and non-tacky with a high-gloss finish. Your hands are ready to use immediately — no dry time required.",
              },
              {
                step: 9,
                title: "Apply cuticle oil",
                body: "Apply cuticle oil around the skin at the base of each nail. This is not a cosmetic step — cuticle oil keeps the skin around the nail hydrated and prevents the dry skin from lifting or peeling, which can pull at the edge of the shellac and cause early lifting. Apply daily between manicures to extend wear.",
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

        {/* How Long Does Shellac Last */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Does Shellac Last?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Shellac lasts 2 to 3 weeks before the natural nail growth creates a visible gap at the cuticle. Unlike regular nail polish, properly applied shellac does not chip or peel during that time. How long it lasts is almost entirely determined by prep quality, not application skill.
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
                  ["Proper prep, two thin coats, sealed free edge", "2 to 3 weeks with no chips"],
                  ["Dehydrator skipped, oily nail bed", "Lifting or peeling within 3 to 7 days"],
                  ["Cuticle skin not fully pushed back", "Lifting at the cuticle edge within a few days"],
                  ["Color coat applied too thick", "Wrinkling during cure, reduced wear time"],
                  ["Free edge not sealed with top coat", "Tip chipping within 1 to 2 weeks"],
                  ["Hands in water frequently (dishes, swimming)", "Reduces wear by about 3 to 5 days"],
                  ["Daily cuticle oil applied", "Can extend wear by 3 to 5 days by keeping surrounding skin healthy"],
                  ["Under-cured (lamp time shortened)", "Surface stays tacky or color smears; may peel within a week"],
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

        {/* Cost */}
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
                  ["Gel polish starter kit (color, base, top coat, lamp)", "$20 to $50", "Kits from Modelones, Beetles, and Gelish include a small LED lamp and several colors"],
                  ["CND Shellac professional set (color, base, top)", "$30 to $60", "CND Shellac is sold individually or in sets; requires a separate UV or LED lamp purchase"],
                  ["LED lamp (standalone, 36-watt)", "$15 to $35", "Works with most gel polish brands; check your specific product for recommended lamp type"],
                  ["Individual gel polish color", "$8 to $18", "Per bottle; one bottle lasts 20 to 40 applications depending on coat thickness"],
                  ["Per-set DIY cost (after initial kit purchase)", "$2 to $5", "Primarily the color polish used; base, top, and lamp are reused across many sets"],
                  ["Salon shellac manicure (California)", "$35 to $60", "Varies by city and salon; includes removal of previous color"],
                  ["Salon shellac removal only", "$10 to $20", "Some salons charge separately for soaking off the previous set"],
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
                    "Natural oils prevent the base coat from bonding. The entire application lifts as a single sheet within a week",
                    "Always wipe with nail dehydrator or cleanser immediately before the base coat, and let it dry fully",
                  ],
                  [
                    "Applying coats too thick",
                    "Thick gel polish coats cure unevenly — the surface hardens but the bottom stays soft. The color can wrinkle or peel",
                    "Apply thin coats: you should still be able to see slight translucency in the first coat. Two thin coats build better than one thick coat",
                  ],
                  [
                    "Touching the cuticle or sidewall skin with gel",
                    "Gel that cures against the skin creates a lifting point that pulls the polish off the nail as the skin moves",
                    "Keep all gel layers 1 mm from the cuticle and sidewalls; if gel floods the skin, clean it off with a thin brush or orange stick before curing",
                  ],
                  [
                    "Not sealing the free edge with top coat",
                    "The exposed tip chips away from the edge inward, shortening wear by a week or more",
                    "Run the top coat brush across the very tip of the nail on every top coat application",
                  ],
                  [
                    "Peeling or picking off shellac",
                    "Peeling shellac pulls off the top layers of the natural nail plate with it, leaving the nail thin, weak, and rough",
                    "Always remove shellac by soaking in acetone — never peel or pick it off, even if it is already lifting",
                  ],
                  [
                    "Not wiping the inhibition layer after the top coat",
                    "The top coat surface stays sticky or tacky, attracts lint, and does not feel properly smooth",
                    "Wipe firmly with a lint-free wipe and isopropyl alcohol after the final top coat cure",
                  ],
                  [
                    "Cutting lamp cure time short",
                    "Under-cured shellac stays soft, smudges, and lifts faster than fully cured product",
                    "Follow the lamp time listed on your specific product. Do not remove your hand early, even if the surface looks dry",
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
                q: "Do you need a UV lamp to apply shellac nails?",
                a: "Yes. Shellac is a gel-hybrid polish that requires a UV or LED lamp to cure and harden. Without a lamp, it stays tacky and will not dry. CND recommends a UV lamp for their Shellac line; most LED lamps also work for gel polish brands.",
              },
              {
                q: "What is the difference between shellac and gel nails?",
                a: "Shellac is a brand name from CND for a thin gel-hybrid polish. Regular gel polish from other brands works the same way. Both cure under a UV or LED lamp, last 2 to 3 weeks, and remove with acetone. Hard gel is different: it is thicker, builds strength or length, and takes 20 to 30 minutes to remove.",
              },
              {
                q: "How long does shellac last on nails?",
                a: "Shellac lasts 2 to 3 weeks before visible regrowth at the cuticle. It does not chip or peel during that time with proper prep and application. The main factors that shorten wear are skipping nail dehydrator, getting gel on the cuticle skin, and not sealing the free edge.",
              },
              {
                q: "Can you apply shellac without buffing the nail?",
                a: "Buffing is recommended but not mandatory. Lightly buffing the nail surface removes the natural shine and helps the base coat bond. On oily nail beds, skipping this step is one of the more common reasons shellac lifts within the first week.",
              },
              {
                q: "How do you remove shellac at home?",
                a: "Lightly buff the top coat surface, soak cotton balls in pure acetone, place one on each nail, wrap in foil, and wait 10 to 15 minutes. The shellac softens and slides off. Never peel or pull — peeling removes layers of the natural nail plate along with the shellac.",
              },
              {
                q: "How much does a shellac manicure cost at home?",
                a: "A gel polish starter kit costs $20 to $50 upfront. After that, each application costs $2 to $5 in product. A salon shellac manicure in California typically costs $35 to $60. The home kit pays for itself after 2 to 3 applications.",
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
              { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
              { title: "How To Remove Shellac Nails at Home", href: "/how-to/how-to-remove-shellac-nails/" },
              { title: "How To Apply Gel Nails at Home", href: "/how-to/how-to-apply-gel-nails/" },
              { title: "How To Keep Nails Healthy", href: "/how-to/how-to-keep-nails-healthy/" },
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
