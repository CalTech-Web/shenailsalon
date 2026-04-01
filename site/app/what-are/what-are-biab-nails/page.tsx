import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are BIAB Nails? Builder In A Bottle Explained",
  description:
    "BIAB nails (Builder In A Bottle) are a thick gel overlay that strengthens and protects natural nails without adding length. Learn what BIAB stands for, how long it lasts, what it costs, and how it compares to acrylic and gel polish.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-biab-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-biab-nails/",
    title: "What Are BIAB Nails? Builder In A Bottle Explained",
    description:
      "BIAB nails (Builder In A Bottle) are a thick gel overlay that strengthens and protects natural nails without adding length. Learn what BIAB stands for, how long it lasts, what it costs, and how it compares to acrylic and gel polish.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Are BIAB Nails?",
      item: "https://shenailsalon.com/what-are/what-are-biab-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are BIAB Nails? Builder In A Bottle Explained",
  description:
    "BIAB nails (Builder In A Bottle) are a thick gel overlay applied over the natural nail, cured under a UV or LED lamp, and filed smooth. This guide covers what BIAB stands for, how it works, how long it lasts, cost, removal, and how it compares to other nail types.",
  url: "https://shenailsalon.com/what-are/what-are-biab-nails/",
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
  dateModified: "2026-04-01",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-biab-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are BIAB nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIAB nails are a nail overlay using a thick UV or LED-cured gel applied directly over the natural nail to add strength and protection. BIAB stands for Builder In A Bottle, a product format popularized by The Gel Bottle Inc. The gel is applied over the natural nail, cured under a lamp, and filed smooth to create a hard, glossy overlay that lasts 3 to 5 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What does BIAB stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIAB stands for Builder In A Bottle. It refers to a type of builder gel that comes in a brush-on bottle format rather than a pot, making it easier to apply evenly. The term was trademarked by The Gel Bottle Inc., a UK-based nail brand, but it is now used broadly to describe any brush-on builder gel overlay product.",
      },
    },
    {
      "@type": "Question",
      name: "Are BIAB nails the same as builder gel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BIAB and builder gel are the same type of product. BIAB is simply a brand name format (brush-on bottle) for builder gel. All BIAB products are builder gels, but not all builder gels are sold in BIAB bottle format. Some builder gels come in pots and are applied with a separate brush. The formula, curing method, and wear time are the same regardless of packaging.",
      },
    },
    {
      "@type": "Question",
      name: "How long do BIAB nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIAB nails last 3 to 5 weeks on average. Used as a strengthening overlay over natural nails (the most common application), BIAB can last up to 4 to 5 weeks before the grown-out base becomes noticeable. Wear time depends on nail prep quality, application technique, and how hard you are on your hands. Most people book a maintenance appointment every 3 to 4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do BIAB nails strengthen natural nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BIAB nails are most commonly used as a strengthening overlay over the natural nail. The cured gel forms a hard shell over the nail plate that protects it from breaking during daily activities. People with weak, brittle, or peeling nails often switch to BIAB overlays to allow their natural nails to grow longer underneath the protective layer.",
      },
    },
    {
      "@type": "Question",
      name: "Can BIAB nails be done at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many BIAB brands sell starter kits for at-home use that include the gel, base coat, top coat, and a small LED lamp. The main challenges are applying an even layer without flooding the cuticle and filing the cured gel smooth. With practice, at-home BIAB results are comparable to a salon finish. Beginner kits from The Gel Bottle Inc. and similar brands typically cost $50 to $80.",
      },
    },
    {
      "@type": "Question",
      name: "How are BIAB nails removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIAB nails are removed by filing off the bulk of the gel with a coarse file (100 to 150 grit), then soaking the remaining thin layer in 100% acetone for 20 to 30 minutes. The softened gel is then pushed off gently with a cuticle pusher. Some techs remove BIAB entirely by filing without acetone, which is faster but requires careful technique to avoid over-filing the natural nail.",
      },
    },
  ],
};

const vsBiabRows = [
  ["Full name", "Builder In A Bottle", "Builder gel (generic)", "Gel polish"],
  ["Format", "Brush-on bottle", "Pot or bottle", "Bottle"],
  ["Thickness", "Thick, structural", "Thick, structural", "Thin, polish-like"],
  ["Adds nail strength", "Yes", "Yes", "Minimal"],
  ["Adds nail length", "Yes (with forms)", "Yes (with forms)", "No"],
  ["Curing method", "UV or LED lamp", "UV or LED lamp", "UV or LED lamp"],
  ["Wear time", "3 to 5 weeks", "3 to 5 weeks", "2 to 3 weeks"],
  ["Removal", "File + acetone soak", "File + acetone soak", "Acetone soak (10 to 15 min)"],
  ["At-home use", "Easy (built-in brush)", "Moderate", "Easy"],
];

const vsAcrylicRows = [
  ["Application", "Brush-on gel, cure under lamp", "Monomer liquid + acrylic powder, air-dry"],
  ["Odor", "None to minimal", "Strong chemical smell"],
  ["Flexibility", "Slight flex after curing", "Rigid and hard"],
  ["Strengthens natural nail", "Yes, as overlay", "Yes, as overlay"],
  ["Adds length", "Yes, with nail forms", "Yes, with forms or tips"],
  ["Wear time", "3 to 5 weeks", "2 to 3 weeks before fill"],
  ["Removal", "File + acetone soak (20 to 30 min)", "Acetone soak (30 to 45 min)"],
  ["Damage risk", "Low to moderate", "Moderate (filing required)"],
  ["At-home use", "Yes, with starter kit", "More difficult at home"],
  ["Cost (salon)", "$45 to $80 overlay", "$40 to $80 full set"],
];

const wearTimeRows = [
  ["Proper prep with dehydrator and primer", "4 to 5 weeks"],
  ["Overlay on natural nail (no extension)", "4 to 5 weeks"],
  ["Extension with nail forms", "3 to 4 weeks"],
  ["Prep skipped (no dehydrator)", "1 to 2 weeks (lifting likely)"],
  ["Gel flooded onto cuticle or sidewalls", "Less than 2 weeks (peeling)"],
  ["Applied too thick in one coat", "Chips or cracks within days"],
  ["Frequent hand washing or water exposure", "3 weeks"],
  ["Daily cuticle oil applied after curing", "Up to 5 weeks (oil reduces brittleness)"],
];

const applicationSteps = [
  { step: "Shape and prep nails", detail: "Push back cuticles with a wooden stick or cuticle pusher. File the free edge to your desired shape. Lightly buff the surface of each nail to remove shine." },
  { step: "Cleanse with dehydrator", detail: "Apply a nail dehydrator to each nail and let it dry completely. This removes oils and moisture that cause lifting. Do not skip this step." },
  { step: "Apply nail primer (optional)", detail: "Acid-free bond or nail primer improves adhesion on problem nails. Let it dry according to the product instructions before proceeding." },
  { step: "Apply base coat and cure", detail: "Apply a thin gel base coat to each nail, staying away from the cuticle and sidewalls. Cure under the LED lamp for 30 to 60 seconds." },
  { step: "Apply BIAB gel bead", detail: "Dispense a small bead of BIAB gel from the brush-on bottle onto the center of the nail. Push the bead gently toward the cuticle without flooding the skin. Build the apex (the highest point just past the center of the nail)." },
  { step: "Cure", detail: "Cure the BIAB layer under a UV or LED lamp for 60 to 90 seconds. Wipe off the inhibition layer with a lint-free pad and isopropyl alcohol." },
  { step: "File and shape", detail: "Use a 180-grit nail file to smooth the surface and shape the free edge. A buffer can refine the finish. Brush away all dust before the next step." },
  { step: "Apply top coat and cure", detail: "Apply a gel top coat and cure. Wipe off the inhibition layer to reveal the high-gloss finish. Finish with cuticle oil." },
];

const prosRows = [
  "Strengthens and protects natural nails from breaking",
  "Lasts 3 to 5 weeks without chipping",
  "No harsh chemical fumes during application",
  "Slight flexibility reduces cracking compared to acrylic",
  "Brush-on bottle makes at-home application manageable",
  "Transparent and tinted shades available",
  "Can be used as an overlay or to add nail length",
  "Suitable for weak, brittle, and peeling nails",
];

const consRows = [
  "Requires UV or LED lamp to cure",
  "Filing and smoothing step adds skill requirement",
  "Removal takes longer than gel polish (20 to 45 min)",
  "Incorrect prep leads to early lifting or peeling",
  "More expensive per set than regular gel polish",
  "Thicker product needs more filing practice to smooth evenly",
];

export default function BiabNailsPage() {
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
            <span>What Are BIAB Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are BIAB Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            BIAB stands for Builder In A Bottle. It is a thick, UV or LED-cured gel overlay applied directly over the natural nail to add strength, protection, and a glossy finish without extensions. BIAB nails last 3 to 5 weeks and are one of the most popular treatments for people with weak or brittle natural nails. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What does BIAB stand for */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Does BIAB Stand For?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB stands for Builder In A Bottle. The name describes both what the product does (it builds structure onto the nail) and how it is packaged (in a bottle with a built-in brush, rather than a separate pot and brush). The term was trademarked by The Gel Bottle Inc., a UK-based professional nail brand, but it is now widely used to describe any brush-on builder gel overlay product across the industry.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              When I first heard about BIAB, I assumed it was just another gel polish with a fancy name. It is not. The formula is much thicker than gel polish and cures into a hard, structural layer. I switched to BIAB overlays two years ago and my nails stopped breaking almost immediately.
            </p>
          </div>

          {/* How BIAB works */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How BIAB Nails Work</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB is a thick, viscous gel that is brushed over the natural nail in one or two thin layers. Once applied, the gel is placed under a UV or LED lamp where it undergoes photopolymerization, a chemical reaction that hardens the gel into a rigid, glossy layer. After curing, the surface is filed smooth and finished with a gel top coat.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The result is a protective shell over the natural nail plate. The shell is hard enough to prevent everyday breakage, flexible enough to move slightly with the nail rather than snap under pressure, and thin enough that it does not look fake or bulky.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              BIAB is most commonly used as an overlay, meaning it is applied directly over the natural nail without extending the free edge. It can also be built over nail forms to add a small amount of length, though extensions are more often done with traditional builder gel pots or hard gel for greater control.
            </p>
          </div>

          {/* BIAB vs Builder Gel vs Gel Polish */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>BIAB vs Builder Gel vs Gel Polish</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB and builder gel are functionally the same product. The distinction is in the format: BIAB comes in a brush-on bottle, while traditional builder gel comes in a pot that requires a separate brush. Gel polish is a completely different product, thinner and designed only to add color, not structure.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">BIAB</th>
                    <th className="text-left px-4 py-2 font-semibold">Builder Gel (pot)</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Polish</th>
                  </tr>
                </thead>
                <tbody>
                  {vsBiabRows.map(([feature, biab, builder, polish], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{biab}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{builder}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{polish}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BIAB vs Acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>BIAB vs Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB and acrylic nails are both used to strengthen and extend nails, but they use entirely different chemistry. BIAB cures under a lamp with no harsh fumes. Acrylics are formed by mixing a liquid monomer with a powder polymer in open air, which produces a strong chemical smell. Both can be used as overlays or extensions.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">BIAB</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAcrylicRows.map(([feature, biab, acrylic], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{biab}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How long does BIAB last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do BIAB Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB nails last 3 to 5 weeks. Used as a nail overlay (the most common method), most people get 4 weeks of wear before the grown-out gel base near the cuticle becomes noticeable. The single biggest factor in how long BIAB lasts is nail prep. Skipping the dehydrator or applying gel that touches the cuticle skin will cause the overlay to lift in days rather than weeks.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Condition</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected Wear Time</th>
                  </tr>
                </thead>
                <tbody>
                  {wearTimeRows.map(([condition, time], i) => (
                    <tr key={condition} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{condition}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do BIAB Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A BIAB manicure at a nail salon costs between $45 and $80 in the United States. In California, the average price for a BIAB overlay is $50 to $75. If BIAB is applied over extensions or includes nail art, prices are higher.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For at-home application, BIAB starter kits cost $50 to $80 and include the gel, base coat, top coat, and a small LED lamp. Individual BIAB gel bottles cost $15 to $30 each. Once you have the lamp, the per-set cost drops to $5 to $12. Popular at-home BIAB brands include The Gel Bottle Inc., Aprés Nail, and Light Elegance.
            </p>
          </div>

          {/* Application steps */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How BIAB Nails Are Applied (8 Steps)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A BIAB overlay takes 45 to 60 minutes for a full set. Here is the full application process:
            </p>
            <div className="space-y-3">
              {applicationSteps.map((item, i) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 rounded-lg border border-gray-100"
                  style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{item.step}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#707070" }}>
              For a detailed step-by-step guide with supply lists and common mistakes, see the{" "}
              <Link href="/how-to/how-to-apply-builder-gel/" style={{ color: "#046BD2" }} className="hover:underline">
                how to apply builder gel nails
              </Link>{" "}
              guide.
            </p>
          </div>

          {/* How to remove */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove BIAB Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              BIAB removal takes longer than removing regular gel polish because the product is thicker and more structural. There are two methods used in salons and at home.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-100" style={{ background: "#F8FBFF" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Method 1: File and acetone soak (most common)</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                  File down the bulk of the BIAB gel with a coarse 100-grit file until only a thin layer remains. Soak cotton balls in 100% acetone, place one on each nail, and wrap with foil. Wait 20 to 30 minutes. The remaining gel will soften and can be pushed off gently with a cuticle pusher. Finish with cuticle oil.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100" style={{ background: "#F8FBFF" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Method 2: Full file-off (no acetone)</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                  Some nail technicians file the BIAB off entirely using an e-file (electric nail drill) or a coarse hand file. This is faster but requires skill. Filing too aggressively removes layers of the natural nail plate. This method is best left to experienced nail technicians.
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              Never force or peel BIAB off the nail. Peeling removes the top layer of the natural nail plate, causing lasting thinning and sensitivity.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of BIAB Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  {prosRows.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  {consRows.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About BIAB Nails</h2>
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
                { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
                { title: "How to Apply Builder Gel Nails", href: "/how-to/how-to-apply-builder-gel/" },
                { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
                { title: "What Are Polygel Nails?", href: "/what-are/what-are-polygel-nails/" },
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
                Browse all What Are guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
