import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Paint Your Nails Perfectly: Step-by-Step Guide",
  description:
    "Learn how to paint your nails perfectly at home with this step-by-step guide. Covers supplies, prep, base coat, color, top coat, and how to fix common mistakes.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-paint-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-paint-nails/",
    title: "How To Paint Your Nails Perfectly: Step-by-Step Guide",
    description:
      "Learn how to paint your nails perfectly at home with this step-by-step guide. Covers supplies, prep, base coat, color, top coat, and how to fix common mistakes.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    { "@type": "ListItem", position: 3, name: "How To Paint Your Nails", item: "https://shenailsalon.com/how-to/how-to-paint-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Paint Your Nails Perfectly: Step-by-Step Guide",
  description:
    "A complete step-by-step guide on how to paint your nails at home, including supplies, nail prep, base coat, color coats, top coat, and how to fix common mistakes.",
  url: "https://shenailsalon.com/how-to/how-to-paint-nails/",
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
  dateModified: "2026-03-18",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-paint-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you paint your nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To paint your nails at home: (1) Remove any old polish. (2) File and shape your nails. (3) Push back cuticles. (4) Wash hands and dry completely. (5) Apply a thin base coat and let it dry. (6) Apply two thin coats of color, letting each coat dry before the next. (7) Apply a top coat to seal and add shine. Use thin coats throughout to prevent bubbling and smudging.",
      },
    },
    {
      "@type": "Question",
      name: "How do you paint your nails perfectly without getting polish on skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To paint nails without getting polish on skin: start the brush stroke slightly away from the cuticle, not pressed against it. Apply polish in three strokes: one down the center, then one on each side. Work slowly and use thin coats. If you do get polish on skin, wait until it is fully dry, then use a thin brush dipped in acetone to clean the edge. You can also apply petroleum jelly around the cuticle before painting to make cleanup easier.",
      },
    },
    {
      "@type": "Question",
      name: "How long does nail polish take to dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular nail polish takes 1 to 2 minutes to become touch-dry between coats, and 1 to 2 hours to fully cure. Fast-dry formulas and top coats can reduce full-cure time to 30 to 60 minutes. To speed drying, apply thin coats, use a quick-dry top coat, or dip nails briefly in ice water after the top coat. Avoid applying thick coats, which trap solvents and extend drying time.",
      },
    },
    {
      "@type": "Question",
      name: "How do you stop nail polish from chipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To prevent nail polish from chipping: (1) Always use a base coat. (2) Apply thin coats of color. (3) Seal the free edge (the tip of the nail) with each coat. (4) Apply a top coat and reapply every 2 to 3 days. (5) Wear gloves when doing dishes or cleaning. (6) Avoid using your nails as tools. A good base coat and capping the tip are the two most effective steps.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a base coat when painting nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A base coat does three things: it helps nail polish stick so it lasts longer, it prevents pigmented polishes from staining the natural nail, and it fills in surface ridges so color applies more evenly. Skipping the base coat is the most common reason nail polish chips within the first day or two. A single thin coat is all you need.",
      },
    },
    {
      "@type": "Question",
      name: "How many coats of nail polish should you apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply one coat of base coat, two coats of color, and one coat of top coat. Two thin color coats give better coverage and chip resistance than one thick coat. Some sheer or light polishes may need a third color coat for full opacity. Always let each coat dry before applying the next.",
      },
    },
  ],
};

const supplies = [
  { item: "Nail polish remover", note: "Acetone or non-acetone, for removing old polish and cleanup" },
  { item: "Cotton balls or pads", note: "For removing old polish" },
  { item: "Nail file (180 to 240 grit)", note: "For shaping and smoothing the free edge" },
  { item: "Cuticle pusher or orange stick", note: "For pushing back cuticles" },
  { item: "Base coat", note: "Strengthens adhesion and protects nails from staining" },
  { item: "Nail polish (your color)", note: "Any brand; quality varies but technique matters more" },
  { item: "Top coat", note: "Quick-dry formulas cut drying time significantly" },
  { item: "Thin cleanup brush", note: "A thin nail art brush dipped in acetone for edge cleanup" },
];

const steps = [
  {
    num: 1,
    title: "Remove old polish",
    body: "Soak a cotton ball or pad in nail polish remover and press it on each nail for a few seconds before wiping away. For glitter polish, use the foil wrap method: hold a soaked cotton ball on the nail for 30 seconds, then pull it off. Make sure nails are completely clean before moving on.",
  },
  {
    num: 2,
    title: "Shape your nails",
    body: "Use a 180 to 240 grit nail file to shape the free edge. File in one direction (not back and forth) to avoid splitting the nail. Choose a shape: square, round, oval, or squoval. Keep the length even across all fingers.",
  },
  {
    num: 3,
    title: "Push back cuticles",
    body: "After a shower or after soaking fingertips in warm water for a minute, gently push back the cuticle with an orange stick or cuticle pusher. Do not cut cuticles unless you are experienced. Cutting creates a risk of infection and often causes faster cuticle regrowth.",
  },
  {
    num: 4,
    title: "Clean and dry nails",
    body: "Wash your hands and dry them completely. Any moisture or oil on the nail plate will cause polish to lift. Wipe each nail with a cotton ball soaked in regular nail polish remover (even if there was no old polish to remove) to strip away any skin oils. This step makes a big difference in how long the polish lasts.",
  },
  {
    num: 5,
    title: "Apply base coat",
    body: "Apply one thin coat of base coat to each nail. Start just above the cuticle, press the brush lightly so it splays out slightly, then drag it toward the tip in one smooth stroke. Repeat down each side of the nail. Cap the free edge by running the brush across the tip. Let the base coat dry for 60 to 90 seconds.",
  },
  {
    num: 6,
    title: "Apply first coat of color",
    body: "Wipe one side of the nail polish brush on the inside of the bottle neck to remove excess polish. Start slightly above the cuticle (not pressed against it) and stroke toward the tip. Use three strokes: one down the center, one down the left side, one down the right side. Apply thin. Thin coats dry faster and chip less than thick coats. Cap the tip. Let dry for at least 2 minutes.",
  },
  {
    num: 7,
    title: "Apply second coat of color",
    body: "Repeat the same three-stroke technique for the second coat. The second coat builds opacity and coverage. Do not try to fix streaks from the first coat with the second coat by going over the same area repeatedly, as this can lift the first coat. Let the second coat dry for 2 to 3 minutes.",
  },
  {
    num: 8,
    title: "Apply top coat",
    body: "Apply a thin coat of top coat using the same three-stroke method, and cap the free edge. Top coat adds shine, protects the color, and significantly extends wear. Quick-dry top coats also help lock in the color coats beneath. Let dry for at least 2 minutes before doing anything with your hands.",
  },
  {
    num: 9,
    title: "Clean up edges",
    body: "Dip a thin nail art brush or an orange stick wrapped in cotton into acetone nail polish remover. Use it to clean up any polish that got on the skin around the cuticle or sides of the nail. Work slowly and carefully for a salon-clean finish.",
  },
];

const mistakes = [
  { mistake: "Thick coats", fix: "Use thin coats. Thick coats bubble, smudge, and take much longer to dry." },
  { mistake: "Skipping base coat", fix: "Base coat is the single biggest factor in how long your polish lasts." },
  { mistake: "Painting over oily or damp nails", fix: "Wipe nails with remover before starting, even for bare nails." },
  { mistake: "Not capping the free edge", fix: "Sealing the tip with each coat prevents tip peeling and chipping." },
  { mistake: "Using nails before polish is fully cured", fix: "Wait at least 1 to 2 hours before heavy use, even with quick-dry top coat." },
  { mistake: "Shaking the polish bottle", fix: "Roll the bottle between your palms instead. Shaking introduces air bubbles into the formula." },
];

export default function HowToPaintNailsPage() {
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
            <span>How To Paint Your Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Paint Your Nails Perfectly
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A complete step-by-step guide on how to paint your nails at home, covering supplies, nail prep, base coat, two coats of color, top coat, and how to clean up edges. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Supplies */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What You Need</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Most of these supplies cost under $10 each. You likely already have several. The base coat and top coat are the most important purchases if you do not have them.
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

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>How To Paint Your Nails: Step by Step</h2>
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

          {/* Tips for painting neatly */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Tips for Painting Nails Without Getting Polish on Skin</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              This is the part most people find hardest. The trick is to start the brush stroke slightly away from the cuticle, not pressed right up against it. Leave a tiny gap, and the polish will flow forward slightly as it settles.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Apply petroleum jelly or cuticle oil around the edges before painting. Polish will not stick to it and peels off cleanly once dry.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Use a thin nail art brush dipped in acetone to clean up any mistakes after the polish dries completely. Do not try to wipe wet polish.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Paint your non-dominant hand first while your dominant hand is still steady and fresh.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Rest your painting hand on a flat surface to keep it steady. Do not try to paint freehand in the air.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Use thin coats. Thin polish flows into gaps and self-levels better than thick blobs.</li>
            </ul>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Common Nail Painting Mistakes and How to Fix Them</h2>
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

          {/* How long polish lasts */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Does Nail Polish Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Regular nail polish lasts 5 to 7 days for most people with normal activity. If you wash dishes frequently or do manual work, expect 3 to 5 days. The biggest factors are whether you used a base coat, whether you capped the tip with each coat, and whether you reapply top coat every 2 to 3 days.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              If you want a longer-lasting option without gel equipment, look for long-wear formulas like Sally Hansen Miracle Gel or OPI Infinite Shine. These are regular polish formulas engineered to last up to 2 weeks.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Painting Nails</h2>
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
                { title: "How To Shape Nails", href: "/how-to/how-to-shape-nails/" },
                { title: "How To Remove Acrylic Nails", href: "/how-to/how-to-remove-acrylic-nails/" },
                { title: "How To Remove Shellac Nails", href: "/how-to/how-to-remove-shellac-nails/" },
                { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
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
