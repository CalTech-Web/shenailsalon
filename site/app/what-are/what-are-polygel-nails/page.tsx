import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Polygel Nails? How They Work, Cost & Pros and Cons",
  description:
    "Polygel nails are a hybrid nail enhancement that combines the flexibility of gel with the strength of acrylic. Learn what polygel is made of, how long it lasts, what it costs, and how it compares to acrylic and builder gel.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-polygel-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-polygel-nails/",
    title: "What Are Polygel Nails? How They Work, Cost & Pros and Cons",
    description:
      "Polygel nails are a hybrid nail enhancement that combines the flexibility of gel with the strength of acrylic. Learn what polygel is made of, how long it lasts, what it costs, and how it compares to acrylic and builder gel.",
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
      name: "What Are Polygel Nails?",
      item: "https://shenailsalon.com/what-are/what-are-polygel-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Polygel Nails? How They Work, Cost & Pros and Cons",
  description:
    "Polygel nails are a hybrid nail enhancement that combines the flexibility of gel with the strength of acrylic. This guide covers what polygel is made of, how long polygel nails last, what they cost, and how polygel compares to acrylic and builder gel.",
  url: "https://shenailsalon.com/what-are/what-are-polygel-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-polygel-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are polygel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polygel nails are a hybrid nail enhancement that combines ingredients from both gel and acrylic systems. Polygel comes as a soft, putty-like paste in a tube. It is applied with a brush dipped in slip solution, shaped directly on the nail or over a nail form, and then cured under a UV or LED lamp. Polygel is lighter than acrylic, more flexible than hard gel, and produces no strong odor during application.",
      },
    },
    {
      "@type": "Question",
      name: "What is polygel made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polygel is made from a blend of oligomers (the same UV-cured base found in gel polish) and acrylic powder fillers. Unlike traditional acrylic nails, polygel contains no liquid monomer, which eliminates the harsh chemical smell. The paste texture comes from the high filler content in the oligomer base. Polygel cures only under a UV or LED lamp, not in open air.",
      },
    },
    {
      "@type": "Question",
      name: "How long do polygel nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polygel nails last 3 to 5 weeks. Most people fill or refresh polygel every 3 to 4 weeks as the natural nail grows out. Polygel overlays on natural nails without extensions can last up to 5 weeks before the grown-out base becomes noticeable. Wear time depends on nail prep, application quality, and daily hand use.",
      },
    },
    {
      "@type": "Question",
      name: "How much do polygel nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A polygel set at a nail salon costs between $55 and $95 in the United States. In California, polygel extensions typically run $65 to $90. At-home polygel starter kits cost $25 to $60 and include the polygel paste, slip solution, nail forms or tips, a UV or LED lamp, and basic tools.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between polygel and acrylic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polygel and acrylic both add strength and length to nails, but they differ in application and feel. Acrylic is formed by mixing a liquid monomer with a powder polymer that hardens in air and produces a strong chemical odor. Polygel comes as a pre-mixed paste in a tube, requires no liquid monomer, has no strong odor, and cures only under a UV or LED lamp. Polygel is lighter and more flexible than acrylic and is generally considered more beginner-friendly.",
      },
    },
    {
      "@type": "Question",
      name: "Is polygel better than builder gel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polygel and builder gel are similar products but serve slightly different use cases. Builder gel (including BIAB) is better for thin strengthening overlays because it is self-leveling and easy to apply in thin coats. Polygel is better for building nail extensions and sculpting because it is thicker, holds its shape during application, and does not run or slide. Both cure under a UV or LED lamp and last a similar amount of time.",
      },
    },
  ],
};

const vsAcrylicRows = [
  ["Application form", "Pre-mixed paste in a tube", "Liquid monomer + polymer powder"],
  ["Odor during application", "None to minimal", "Strong chemical smell"],
  ["Curing method", "UV or LED lamp required", "Air-cures without a lamp"],
  ["Flexibility after curing", "Slight flex, moves with nail", "Rigid and hard"],
  ["Weight on nail", "Lightweight", "Heavier"],
  ["Beginner difficulty", "Moderate, forgiving paste", "Harder, precise mix ratio needed"],
  ["Wear time", "3 to 5 weeks", "2 to 3 weeks before fill"],
  ["Repairability", "Can patch with more polygel", "Easy to fill and repair"],
  ["Cost (salon)", "$55 to $95", "$40 to $80"],
];

const vsBuilderGelRows = [
  ["Texture", "Thick paste, holds shape", "Thick gel, self-leveling"],
  ["Application method", "Brush and slip solution", "Brush-on bottle or pot"],
  ["Best for", "Extensions and sculpting", "Overlays and thin coats"],
  ["Curing method", "UV or LED lamp", "UV or LED lamp"],
  ["Wear time", "3 to 5 weeks", "3 to 5 weeks"],
  ["Odor", "None", "None"],
  ["Removal", "File off or acetone soak", "File off or acetone soak"],
  ["Cost (salon)", "$55 to $95", "$45 to $80"],
];

const applicationSteps = [
  { step: "Prep nails", detail: "Push back cuticles, lightly buff the nail plate, and cleanse with a nail dehydrator to remove surface oils." },
  { step: "Apply primer or base coat", detail: "Apply a thin layer of nail primer or polygel-compatible base coat and cure if required." },
  { step: "Squeeze out polygel", detail: "Squeeze a small amount of polygel paste directly onto the nail or nail form." },
  { step: "Dip brush in slip solution", detail: "Dip a small flat brush in slip solution (70% isopropyl alcohol works) to prevent the gel from sticking to the brush." },
  { step: "Shape the polygel", detail: "Use the wet brush to smooth and shape the polygel. Work quickly, the paste stays workable until cured. Build the apex just past center for strength." },
  { step: "Cure under lamp", detail: "Cure under a UV or LED lamp for 60 to 90 seconds per the product instructions." },
  { step: "File and shape", detail: "File the surface smooth with a 180-grit file. Shape the free edge. Remove dust with a nail brush." },
  { step: "Apply top coat and cure", detail: "Apply a gel top coat, cure under the lamp, and wipe off the inhibition layer for a high-gloss finish." },
];

const prosRows = [
  "No strong odor, unlike acrylic",
  "Lightweight on the nail",
  "Stays workable until you cure it, so there is no rush",
  "Works for both overlays and extensions",
  "Flexible, reduces snapping compared to hard acrylic",
  "Beginner-friendly tube format",
  "Lasts 3 to 5 weeks",
];

const consRows = [
  "Requires a UV or LED lamp to cure",
  "Slip solution must be used correctly or polygel sticks to everything",
  "Filing step adds time and skill",
  "Harder to repair than acrylic if it breaks",
  "Removal takes 30 to 45 minutes with acetone",
  "More expensive per set than regular gel polish",
];

const wearTimeRows = [
  ["Proper prep, thin base, good seal", "4 to 5 weeks"],
  ["Skipped dehydrator", "1 to 2 weeks (lifting at cuticle)"],
  ["Too much polygel applied", "2 to 3 weeks (cracking at apex)"],
  ["Hands in water frequently", "2 to 3 weeks"],
  ["Extension with long free edge", "3 to 4 weeks"],
  ["Overlay on natural nails", "4 to 5 weeks"],
];

const costRows = [
  ["Starter kit (gel, lamp, tools, forms)", "$25 to $60"],
  ["Single polygel tube (replacement)", "$8 to $18"],
  ["Slip solution (bottle)", "$5 to $12"],
  ["LED lamp (standalone)", "$15 to $40"],
  ["Per-set DIY cost (after kit)", "$3 to $6"],
  ["Salon polygel extensions (California)", "$65 to $90"],
  ["Salon polygel overlay (California)", "$50 to $70"],
];

export default function PolygelNailsPage() {
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
            <span>What Are Polygel Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Polygel Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Polygel nails are a hybrid nail enhancement that combines gel flexibility with acrylic strength. The product comes as a soft paste in a tube, is shaped on the nail with a brush and slip solution, and cures under a UV or LED lamp. Polygel lasts 3 to 5 weeks, produces no strong odor, and works for both nail overlays and extensions. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What is polygel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Polygel?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel is a hybrid nail enhancement product that sits between gel and acrylic in texture and performance. It comes as a soft, putty-like paste in a tube, not as a liquid monomer or runny gel. You apply it to the nail using a small flat brush dipped in slip solution, shape it while it is still workable, and then cure it under a UV or LED lamp.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The first time I used polygel, I was surprised by how forgiving it is. Unlike acrylic, there is no pressure to work at a specific pace before the product sets. Polygel stays soft and shapeable until you put it under the lamp, which makes corrections easy. The finished result is lightweight, smooth, and glossy.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Polygel was popularized by Aprés Nail and has since been produced by dozens of brands including Modelones, Beetles, Morovan, and Gelish. All polygel products work the same way: tube paste, slip solution, lamp cure.
            </p>
          </div>

          {/* What is polygel made of */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Polygel Made Of?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel is made from UV-reactive oligomers (the same base used in gel polish) combined with acrylic powder fillers. The blend of gel chemistry and acrylic powder is what gives polygel its thick paste consistency, which holds its shape during application without running or sagging.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Unlike traditional acrylic nails, polygel contains no liquid monomer. This is why it has no strong chemical odor during application. The product only cures under UV or LED light, not in open air, so it stays workable on the nail for as long as you need without beginning to harden.
            </p>
          </div>

          {/* How long */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Polygel Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel nails last 3 to 5 weeks. Most people fill or refresh their polygel every 3 to 4 weeks as the natural nail grows and the product at the base grows out. A polygel overlay directly on natural nails (without extensions) can last closer to 5 weeks because there is no extended free edge to lift or snap.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Scenario</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected Wear</th>
                  </tr>
                </thead>
                <tbody>
                  {wearTimeRows.map(([scenario, wear], i) => (
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
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Polygel Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A polygel set at a nail salon costs between $55 and $95 in the United States. In California, polygel extensions typically run $65 to $90, and overlays run $50 to $70. At-home polygel kits are significantly cheaper over time.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Item</th>
                    <th className="text-left px-4 py-2 font-semibold">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(([item, cost], i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How polygel is applied */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Polygel Is Applied (8 Steps)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel application takes 60 to 90 minutes for a full set. Here is how the process works:
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
            <p className="mt-4 text-sm" style={{ color: "#707070" }}>
              For a full step-by-step walkthrough, see the{" "}
              <Link href="/how-to/how-to-apply-polygel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                how to apply polygel nails guide
              </Link>.
            </p>
          </div>

          {/* Polygel vs acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Polygel vs Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel and acrylic are both used to strengthen and extend nails, but they differ significantly in application, smell, and feel. Polygel is widely considered more beginner-friendly because the paste does not set until cured under a lamp, giving you more time to shape.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Polygel</th>
                    <th className="text-left px-4 py-2 font-semibold">Acrylic</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAcrylicRows.map(([feature, poly, acrylic], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{poly}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{acrylic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Polygel vs builder gel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Polygel vs Builder Gel</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel and builder gel are closely related products that are often confused. The key difference is texture and intended use. Builder gel is self-leveling and best for thin overlays. Polygel is a thicker paste that holds its shape, making it better for sculpting extensions.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Polygel</th>
                    <th className="text-left px-4 py-2 font-semibold">Builder Gel</th>
                  </tr>
                </thead>
                <tbody>
                  {vsBuilderGelRows.map(([feature, poly, builder], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{poly}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{builder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Polygel Nails</h2>
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

          {/* How to remove */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Polygel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Polygel removal takes longer than gel polish removal. There are two methods:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-100" style={{ background: "#F8FBFF" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Method 1: File off (faster)</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                  Use a 100 to 150-grit file to remove most of the polygel. Switch to a 180-grit file as you approach the natural nail. Stop when you feel the file going through a softer surface, which is the natural nail plate. Finish with a buffer to smooth any remaining thin layer. This method takes 15 to 20 minutes but requires a steady hand to avoid over-filing.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100" style={{ background: "#F8FBFF" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Method 2: Acetone soak (gentler)</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                  Lightly file the surface to break the top coat seal. Soak cotton balls in 100% acetone, place one on each nail, and wrap with foil. Wait 30 to 45 minutes. Polygel softens more slowly than regular gel polish. Use a cuticle pusher to scrape off the softened product. Repeat soaking if needed. Always finish with cuticle oil to rehydrate the nail and skin.
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              Never peel or force polygel off the nail. Doing so removes layers of the natural nail plate and causes thinning, sensitivity, and damage that can take months to grow out.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Polygel Nails</h2>
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
                { title: "How to Apply Polygel Nails", href: "/how-to/how-to-apply-polygel-nails/" },
                { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
                { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
                { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
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
