import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Builder Gel Nails at Home: Step-by-Step Guide",
  description:
    "Learn how to apply builder gel (BIAB) nails at home with this complete step-by-step guide. Covers supplies, overlay vs extension methods, application steps, curing times, cost breakdown, and common beginner mistakes.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-builder-gel/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-builder-gel/",
    title: "How To Apply Builder Gel Nails at Home: Step-by-Step Guide",
    description:
      "Learn how to apply builder gel (BIAB) nails at home with this complete step-by-step guide. Covers supplies, overlay vs extension methods, application steps, curing times, cost breakdown, and common beginner mistakes.",
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
      name: "How To Apply Builder Gel",
      item: "https://shenailsalon.com/how-to/how-to-apply-builder-gel/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Builder Gel Nails at Home: Step-by-Step Guide",
  description:
    "A complete guide on how to apply builder gel (BIAB) nails at home, including supplies, overlay vs extension methods, the full application workflow, curing times, cost breakdown, and common mistakes to avoid.",
  url: "https://shenailsalon.com/how-to/how-to-apply-builder-gel/",
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
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-builder-gel/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply builder gel nails at home step by step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply builder gel at home: (1) Push back cuticles and lightly buff the nail surface. (2) Apply nail dehydrator and let it dry. (3) Apply a thin base coat and cure under a UV or LED lamp. (4) Apply a thin layer of builder gel in a bead at the center of the nail, then spread toward the edges, keeping it 1 mm from the cuticle. (5) Shape the gel into a slight arch (apex) for strength. (6) Cure under the lamp. (7) Apply a second layer if more thickness or strength is needed, then cure again. (8) File and buff the surface to smooth any ridges. (9) Apply top coat and cure. For extensions, apply with nail forms before step 4 to build length beyond the natural nail.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between builder gel and BIAB nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIAB stands for Builder In A Bottle, a product name trademarked by The Gel Bottle Inc. Builder gel and BIAB refer to the same type of product: a thick, viscous gel used to strengthen or extend nails. BIAB is just the brand name. Other brands sell the same product under names like builder gel, hard gel, or building gel. The application method is identical regardless of which brand you use.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply builder gel on natural nails without extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Applying builder gel as an overlay directly over the natural nail is its most common use. The gel adds a layer of strength and thickness that protects the nail from breaking without adding length. This is the method most people mean when they ask about BIAB nails. You follow the same steps as an extension application but skip the nail forms, building the gel only over the existing natural nail.",
      },
    },
    {
      "@type": "Question",
      name: "Do builder gel nails need a UV lamp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Builder gel requires a UV or LED lamp to cure and harden. It will not air-dry or self-set. A 36-watt LED lamp is the most practical option for home use and cures builder gel in 60 to 90 seconds per coat. UV lamps work but take 2 to 3 minutes per coat. Some thicker builder gels may need a second pass under the lamp to cure fully.",
      },
    },
    {
      "@type": "Question",
      name: "How long do builder gel nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Builder gel nails last 3 to 4 weeks as an overlay or extension with proper prep and application. The gel grows out with the natural nail rather than lifting suddenly like acrylics. Some people wear builder gel overlays for 4 to 6 weeks by backfilling the regrowth area at the 3-week mark instead of soaking off and reapplying completely.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a builder gel kit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic builder gel kit costs $30 to $60 and typically includes one or two shades of builder gel, a base coat, a top coat, and sometimes a small LED lamp. The Gel Bottle BIAB starter sets cost around $50 to $70. Individual builder gel pots cost $15 to $25. The per-set cost at home works out to $5 to $15, compared to $50 to $80 at a salon for a BIAB manicure.",
      },
    },
  ],
};

export default function HowToApplyBuilderGelPage() {
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
            <span>How To Apply Builder Gel</span>
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
            How To Apply Builder Gel Nails at Home
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#707070" }}>
            Builder gel, also sold as BIAB (Builder In A Bottle), is a thick gel that cures under a UV or LED lamp to form a hard, protective layer over the natural nail. You can use it as an overlay to strengthen the nail without adding length, or build it over nail forms to create extensions. This guide covers the supplies you need, the overlay method, the extension method, how long it lasts, and the most common mistakes beginners make.
          </p>
          <p className="text-sm mt-3" style={{ color: "#9CA3AF" }}>By Nancy Davidson</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* What Is Builder Gel */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Builder Gel?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Builder gel is a thick, viscous gel that cures under a UV or LED lamp into a semi-rigid layer. It sits between gel polish (thin and flexible) and hard acrylic (rigid) in terms of structure. Builder gel is strong enough to protect weak or brittle nails and flexible enough not to crack with everyday hand movement.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
            BIAB is a brand name for builder gel from The Gel Bottle Inc. Other brands sell the same product under their own names. The application method is the same regardless of brand. For a full breakdown of what builder gel is made of and how it compares to acrylic and polygel, see the{" "}
            <Link href="/what-are/what-are-builder-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
              builder gel nails guide
            </Link>
            .
          </p>
        </section>

        {/* Builder Gel vs Gel Polish vs Acrylic */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Builder Gel vs Gel Polish vs Acrylic</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Builder gel fills the gap between thin gel polish and rigid acrylic. It is thicker and stronger than gel polish but easier to apply and less odorous than acrylic.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold">Builder Gel</th>
                  <th className="text-left px-4 py-3 font-semibold">Gel Polish</th>
                  <th className="text-left px-4 py-3 font-semibold">Acrylic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["UV/LED lamp needed", "Yes", "Yes", "No"],
                  ["Adds strength to natural nail", "Yes (primary use)", "Minimal", "Yes"],
                  ["Adds length", "Yes (with nail forms)", "With extensions only", "Yes"],
                  ["Odor", "Mild", "Mild", "Strong (monomer)"],
                  ["Thickness", "Thick, self-leveling", "Thin", "Thick, requires shaping"],
                  ["Removal", "File off or acetone soak 20 to 30 min", "Acetone soak 10 to 15 min", "Acetone soak 20 to 30 min"],
                  ["Beginner-friendly", "Moderate", "Yes", "No"],
                  ["Best for", "Strengthening nails, natural-looking enhancement", "Color and shine", "Long extensions, nail art"],
                ].map(([feature, builder, gel, acrylic], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{builder}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{gel}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{acrylic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Overlay vs Extensions */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Overlay vs Extensions: Which Method Are You Doing?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Builder gel can be applied two ways. Choose before you start because the prep and setup differ.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#046BD2", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Method</th>
                  <th className="text-left px-4 py-3 font-semibold">What It Does</th>
                  <th className="text-left px-4 py-3 font-semibold">Extra Supplies Needed</th>
                  <th className="text-left px-4 py-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Overlay", "Applies builder gel directly over the natural nail plate with no extension beyond the tip", "None (same kit)", "Strengthening weak or brittle natural nails, adding structure without length"],
                  ["Extensions with nail forms", "Attaches a nail form under the free edge and builds gel out over the form to create length", "Nail forms ($5 to $10 for a pack)", "Adding length without nail tips, creating a seamless extension"],
                  ["Extensions with nail tips", "Glues a plastic tip to the free edge for length, then applies builder gel over both the tip and natural nail", "Nail tips and tip glue ($8 to $15)", "Beginners adding length, quicker setup than nail forms"],
                ].map(([method, what, extra, best], i) => (
                  <tr key={method} style={{ background: i % 2 === 0 ? "#F9FAFB" : "#fff" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{method}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{what}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{extra}</td>
                    <td className="px-4 py-3" style={{ color: "#4B5563" }}>{best}</td>
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
            The essentials are builder gel, a UV or LED lamp, a base coat, a top coat, and prep products. Everything else is for shaping and finishing.
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
                  ["Nail dehydrator", "Removes oil and moisture from the nail plate", "Skipping this is the most common cause of lifting"],
                  ["Nail primer (optional)", "Improves gel adhesion on oily nail beds", "Recommended if you have a history of gel lifting"],
                  ["Builder gel", "The main product — strengthens and builds the nail", "Choose a shade (clear, nude, or milky pink are most common) or a bottle with a brush built in"],
                  ["Gel base coat", "Creates a bonding layer between the nail and builder gel", "Some builder gels are self-adhesive and skip this step; check your product"],
                  ["UV or LED lamp", "Cures and hardens each layer of gel", "A 36-watt LED lamp works for most builder gels in 60 to 90 seconds"],
                  ["Gel top coat", "Seals and protects the finished surface", "Apply after shaping and buffing for a glossy finish"],
                  ["Nail file (180 grit)", "Shapes the free edge and removes bulk after curing", "Use coarser grit (100 to 150) to thin down thick applications"],
                  ["Nail buffer", "Smooths ridges before top coat", "A 4-way buffer is useful: file, buff, smooth, shine"],
                  ["Cuticle pusher", "Clears the nail plate edge before application", "Pushes back cuticle skin so gel does not touch it"],
                  ["Lint-free wipes and cleanser", "Removes the inhibition layer after curing", "Wipe after each cured layer for better gel-on-gel adhesion"],
                  ["Nail forms (extensions only)", "Template under the free edge to build length over", "Single-use adhesive paper forms; size and fit before gel goes on"],
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

        {/* Step-by-Step: Overlay */}
        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>How To Apply Builder Gel as an Overlay: Step by Step</h2>
          <p className="text-sm mb-5" style={{ color: "#707070" }}>
            An overlay applies builder gel over the natural nail without adding length. This is the most common BIAB application and the best starting point for beginners.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Prep the nails",
                body: "Push back cuticles with a wooden or metal cuticle pusher and remove any cuticle tissue from the nail plate. Use a fine-grit buffer to lightly remove the shine from the nail surface. Wipe each nail with a lint-free wipe and nail dehydrator. Let the dehydrator dry completely. If you have oily nails, apply a thin layer of acid-free nail primer over the dry dehydrator and let it air-dry for 30 seconds.",
              },
              {
                step: 2,
                title: "Apply base coat and cure",
                body: "Apply a thin layer of gel base coat to each nail, keeping it 1 mm away from the cuticle and sidewalls. Cure under the UV or LED lamp for the time specified by your brand, typically 30 to 60 seconds. Do not wipe the inhibition layer after the base coat; the tacky surface helps the builder gel bond.",
              },
              {
                step: 3,
                title: "Apply the first layer of builder gel",
                body: "Scoop a small bead of builder gel onto the nail. For most nails, a bead about the size of a grain of rice is enough. Place it in the center of the nail, then use the brush to spread it toward the cuticle edge first (stopping 1 mm from the skin), then toward the sidewalls, and finally across the free edge. Use gentle, sweeping strokes. The gel is self-leveling, so it will settle slightly on its own. Aim for a thin, even layer about 0.5 mm thick.",
              },
              {
                step: 4,
                title: "Build the apex",
                body: "The apex is a slight arch in the builder gel at the center of the nail plate, thickest at the stress point and tapering toward the cuticle and the free edge. A well-built apex is what gives the nail its strength. If your builder gel is thick enough, you can guide a little extra product to the center zone with the brush. Do not make it visibly humped, just slightly fuller in the middle zone.",
              },
              {
                step: 5,
                title: "Cure the first layer",
                body: "Cure under the lamp according to your product instructions. Most builder gels cure in 60 to 90 seconds with a 36-watt LED lamp or 2 to 3 minutes with a UV lamp. After curing, use a lint-free wipe dampened with gel cleanser to remove the inhibition (sticky) layer from the surface. This is important before applying a second coat; gel does not bond well to an uncleaned inhibition layer.",
              },
              {
                step: 6,
                title: "Apply a second layer if needed",
                body: "If you want more thickness for nail strengthening or if you have ridges in the natural nail, apply a second thin layer of builder gel and cure again. For a standard BIAB overlay, two thin layers are the ideal. Three or more layers is typically only needed for extensions or heavily damaged nails. More layers also mean more filing later.",
              },
              {
                step: 7,
                title: "File and shape",
                body: "After the final layer is cured and the inhibition layer is removed, file the free edge to your chosen shape using a 180-grit file. If the surface has ridges or uneven spots, lightly file the top surface with a coarser grit to remove the bumps. Use a nail buffer in sequence (coarse, fine, smooth) to refine the surface. The finished surface should feel completely smooth.",
              },
              {
                step: 8,
                title: "Apply top coat and cure",
                body: "Wipe the nails clean of dust with a dry lint-free wipe. Apply a thin, even coat of gel top coat, running the brush along the free edge to seal it. Cure under the lamp. After curing, wipe with a lint-free wipe and gel cleanser to remove the inhibition layer. Apply cuticle oil to the skin around the nails. The finished nails should have a high-gloss, smooth surface.",
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

        {/* Extensions with Nail Forms */}
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Applying Builder Gel Extensions with Nail Forms</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            If you want to add length, apply nail forms before step 3 above. A nail form is a sticky paper template that fits under the free edge of the natural nail and acts as a scaffold for the builder gel to extend over.
          </p>
          <div className="space-y-3">
            {[
              { step: 1, desc: "Size the nail form to the nail width. Pinch the form at the sides to create a slight arch that matches the natural nail curvature." },
              { step: 2, desc: "Slide the form under the free edge of the natural nail so it sits flush with no gap between the nail and the form. Secure the adhesive tabs around the finger." },
              { step: 3, desc: "Apply builder gel over the natural nail and extend it out over the form to the desired length. Build the apex (thickest point) at the natural stress line, not over the form portion." },
              { step: 4, desc: "Cure under the lamp with the form in place." },
              { step: 5, desc: "Remove the form by gently bending it downward and peeling it away. The cured extension stays rigid." },
              { step: 6, desc: "File the free edge extension into shape. The extension will be rough from the form. Use a coarse file to shape, then progress to finer grits and a buffer." },
              { step: 7, desc: "Continue with step 5 onward from the overlay guide above: a second layer if needed, filing, top coat, and curing." },
            ].map(({ step, desc }) => (
              <div key={step} className="flex gap-3 items-start">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ background: "#3A5FCC" }}
                >
                  {step}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{desc}</p>
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
                  ["Starter kit (builder gel, base, top coat, lamp)", "$30 to $60", "The Gel Bottle and Modelones are popular brands; kits vary in shade options"],
                  ["Builder gel pot (individual, standalone)", "$15 to $25", "Lasts 15 to 20 full sets depending on thickness applied"],
                  ["LED lamp (standalone)", "$15 to $30", "36-watt is sufficient for home use"],
                  ["Nail forms (pack of 500)", "$5 to $10", "Needed for extensions only"],
                  ["Per-set DIY cost (after initial purchase)", "$5 to $15", "Mostly gel used per set; base, top, and lamp are reused"],
                  ["Salon BIAB manicure (overlay)", "$45 to $70", "Varies by city; California salons typically $55 to $80"],
                  ["Salon BIAB extensions", "$70 to $100", "Extensions add $20 to $30 over overlay pricing at most salons"],
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
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Does Builder Gel Last?</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>
            Builder gel grows out with the nail rather than suddenly lifting. This means you typically see a visible regrowth line at 3 to 4 weeks rather than a pop-off or chip. Some people get fills (backfilling the regrowth) instead of fully removing and reapplying, extending the wear to 6 weeks or longer.
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
                  ["Proper prep, two layers, fully cured", "3 to 4 weeks before visible regrowth"],
                  ["With backfill at 3 weeks", "4 to 6 weeks total"],
                  ["Nail dehydrator skipped", "Lifting within 1 to 2 weeks"],
                  ["Builder gel applied onto cuticle skin", "Lifting at the base within a few days"],
                  ["Under-cured (lamp time cut short)", "Surface stays soft or gel lifts within days"],
                  ["Hands in water frequently", "Shorten wear by about 1 week"],
                  ["Applied over damaged or peeling natural nails", "Shorter wear; surface unevenness causes lifting"],
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
                    "Natural oils on the nail plate prevent the base coat and builder gel from bonding, causing the entire application to lift as a sheet",
                    "Apply dehydrator to every nail after buffing and let it dry fully before the base coat",
                  ],
                  [
                    "Getting gel on the cuticle skin",
                    "The cured gel adheres to the skin and creates a lever point that lifts the gel off the nail as the skin moves",
                    "Keep all gel layers 1 mm from the cuticle; push cuticles back fully before starting",
                  ],
                  [
                    "Applying builder gel too thick in one layer",
                    "Thick layers do not cure evenly; the surface hardens but the bottom layer stays soft, causing the gel to peel",
                    "Apply two thin layers instead of one thick one; thin layers cure completely and bond better",
                  ],
                  [
                    "Not removing the inhibition layer between coats",
                    "The sticky surface that remains after curing contains uncured monomers that prevent proper bonding of the next layer",
                    "Wipe each cured layer with a lint-free wipe and gel cleanser before applying the next layer",
                  ],
                  [
                    "Flooding the sidewalls",
                    "Gel that reaches the sidewall skin will cure against it and create a lifting edge within days",
                    "Keep gel at least 0.5 mm from both sidewalls; use a thin brush to clean up any overflow before curing",
                  ],
                  [
                    "Not sealing the free edge with top coat",
                    "The exposed tip of the nail chips and peels from the edge inward",
                    "Run the top coat brush along the very tip of the free edge with every top coat application",
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
                q: "What is the difference between builder gel and BIAB nails?",
                a: "BIAB (Builder In A Bottle) is a brand name from The Gel Bottle Inc. Builder gel and BIAB are the same type of product: a thick gel that cures under a UV or LED lamp to strengthen or extend nails. The application method is identical regardless of brand.",
              },
              {
                q: "Can you apply builder gel on natural nails without extensions?",
                a: "Yes. Applying builder gel as an overlay directly over the natural nail is the most common use. The gel adds strength and protection without adding length. This is what most people mean when they talk about BIAB nails.",
              },
              {
                q: "Do builder gel nails need a UV lamp?",
                a: "Yes. Builder gel requires a UV or LED lamp to cure. A 36-watt LED lamp is the most practical option for home use and cures most builder gels in 60 to 90 seconds per coat.",
              },
              {
                q: "How long does builder gel last?",
                a: "Builder gel overlays and extensions last 3 to 4 weeks before the regrowth becomes visible. With a backfill at 3 weeks, some people extend wear to 6 weeks without fully removing and reapplying.",
              },
              {
                q: "How do you remove builder gel nails?",
                a: "File off the top coat layer and buff the surface to break the seal. Soak cotton balls in 100% pure acetone, place on each nail, wrap in foil, and wait 20 to 30 minutes. The softened gel can be pushed off with a cuticle pusher. Some thicker builder gels respond better to filing off with a coarse nail file before acetone soaking.",
              },
              {
                q: "How much does a builder gel kit cost?",
                a: "A starter kit costs $30 to $60 and typically includes builder gel, a base coat, a top coat, and sometimes a small LED lamp. After the initial purchase, the per-set cost works out to $5 to $15, compared to $45 to $80 at a salon.",
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
              { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
              { title: "How To Apply Gel Nails at Home", href: "/how-to/how-to-apply-gel-nails/" },
              { title: "How To Apply Gel-X Nails at Home", href: "/how-to/how-to-apply-gel-x-nails/" },
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
