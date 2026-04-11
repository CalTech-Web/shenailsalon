import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are French Tip Nails? Designs, Types, Cost & How to Get Them",
  description:
    "French tip nails feature a natural pink base with a white tip painted along the free edge. Learn about french tip styles, how long they last, what they cost, and how to do them at home.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-french-tip-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-french-tip-nails/",
    title: "What Are French Tip Nails? Designs, Types, Cost & How to Get Them",
    description:
      "French tip nails feature a natural pink base with a white tip painted along the free edge. Learn about french tip styles, how long they last, what they cost, and how to do them at home.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are French Tip Nails?", item: "https://shenailsalon.com/what-are/what-are-french-tip-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are French Tip Nails? Designs, Types, Cost & How to Get Them",
  description:
    "French tip nails feature a sheer or light pink base with a white band painted across the free edge of the nail. This guide covers the types of french tips, how they are applied, how long they last, what they cost, and how to do them at home.",
  url: "https://shenailsalon.com/what-are/what-are-french-tip-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-french-tip-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are french tip nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "French tip nails are a classic nail style featuring a sheer or light pink base coat with a white or off-white stripe painted along the free edge of the nail tip. The look was popularized in the late 1970s and is designed to mimic a clean, natural nail with a defined white edge. French tips can be applied on natural nails, gel, acrylic, or press-on extensions.",
      },
    },
    {
      "@type": "Question",
      name: "How long do french tip nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "French tip nails last 2 to 3 weeks when done with gel polish, and 1 to 2 weeks when done with regular nail polish. Acrylic french tips last 2 to 3 weeks per fill. The white tip is particularly prone to chipping and yellowing compared to colored nail polish, so using a quality top coat and reapplying it every 2 to 3 days significantly extends wear time.",
      },
    },
    {
      "@type": "Question",
      name: "How much do french tip nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A french tip manicure at a nail salon costs between $30 and $65 in the United States. A gel french tip manicure costs $40 to $70, while acrylic french tip extensions with a white tip cost $50 to $90 for a full set. In California, expect to pay $35 to $65 for a standard gel french tip. Elaborate designs like colored tips, nail art, or reverse french tips cost more.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a french tip and a french manicure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A french manicure refers specifically to the classic salon service: a sheer pink or nude base with a white painted tip on the natural nail. A french tip is a broader term that includes any nail featuring a contrasting stripe at the free edge, including colored tips, reverse french (smile line at the cuticle), glitter tips, chrome tips, and ombre french gradients. The terms are often used interchangeably.",
      },
    },
    {
      "@type": "Question",
      name: "How do you do french tip nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To do french tip nails at home: (1) Apply a base coat and let it dry. (2) Apply one to two coats of a sheer pink or nude polish as the base. (3) Use french tip guides (nail stickers shaped like a smile line) or tape to mask the lower portion of the nail. (4) Paint white nail polish across the free edge. (5) Remove the guides while the white is still slightly wet. (6) Clean up any jagged edges with a thin brush dipped in acetone. (7) Apply a sheer top coat over the entire nail to seal the tip and add shine.",
      },
    },
    {
      "@type": "Question",
      name: "What types of french tip nails are popular right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular french tip styles include: classic white french tips on almond or oval nails, black french tips (also called edge nails), colored french tips in pastel, nude, or bold shades, reverse french nails (stripe at the cuticle instead of the tip), ombre french tips (where the white fades into the base), chrome or metallic french tips for a reflective finish, and double french tips with two contrasting stripes. Short square and short almond shapes are the most requested base shapes for french tips in 2025.",
      },
    },
  ],
};

const vsOtherStylesRows = [
  ["Classic french tip", "Sheer pink/nude base + white free edge", "Timeless, professional, works on any length"],
  ["Black french tip", "Nude/clear base + black stripe at tip", "Bold, editorial, popular on coffin and stiletto"],
  ["Colored french tip", "Any base + contrasting color tip", "Versatile, seasonal, easy to customize"],
  ["Reverse french", "Base color + stripe at cuticle (smile line)", "Trendy, modern, unique take on the classic"],
  ["Ombre french", "Gradient from nude to white at the free edge", "Soft, blended, no hard line between base and tip"],
  ["Chrome french tip", "Nude base + metallic chrome stripe at tip", "High-shine, editorial, requires chrome powder"],
  ["Glitter french tip", "Sheer base + glitter along the free edge", "Festive, party-ready, easy to DIY"],
];

const atSalonSteps = [
  "Shape and file the natural nail or extension to the desired length.",
  "Gently push back cuticles and lightly buff the nail surface.",
  "Apply a nail dehydrator and base coat.",
  "Apply one to two coats of a sheer pink or nude polish across the entire nail.",
  "Place french tip guides (peel-and-stick smile-line stickers) just below the free edge.",
  "Apply one to two coats of white polish to the exposed tip beyond the guide.",
  "Remove the guides while the white is still slightly tacky to avoid a jagged edge.",
  "Apply a sheer or glossy top coat over the entire nail to seal the tip and add shine.",
  "If using gel polish, cure each layer under an LED lamp for 30 to 60 seconds.",
];

export default function FrenchTipNailsPage() {
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
            <span>What Are French Tip Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are French Tip Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            French tip nails feature a sheer pink or nude base with a white stripe painted along the free edge. It is one of the most timeless nail styles in the world, available in dozens of modern variations. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are french tip nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are French Tip Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              French tip nails are a nail style defined by a sheer or light pink base coat and a white or off-white stripe painted along the free edge of the nail. The contrast between the rosy base and the clean white tip mimics the look of a naturally healthy nail, which is exactly why the style has never gone out of fashion since it was popularized in the late 1970s by Hollywood makeup artist Jeff Pink.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I think french tips are popular for the same reason a classic white shirt is popular: they go with everything and look polished without trying too hard. They work on natural nails, gel overlays, acrylics, gel-x extensions, and press-ons. The base length and shape do not matter much either. French tips look just as good on short square nails as they do on long coffin or almond shapes.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Today, the french tip has expanded well beyond the original white-on-pink. You will find black french tips, colored tips, chrome tips, ombre gradients, reverse french (where the stripe sits at the cuticle instead of the tip), and double stripes. The core structure, a base with a contrasting edge, is the same across all of them.
            </p>
          </div>

          {/* Types */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of French Tip Nails</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The classic white-on-pink french tip is just one variation. Here is a breakdown of the most popular french tip styles and what makes each one distinct.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Style</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {vsOtherStylesRows.map(([style, desc, best], i) => (
                    <tr key={style} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{style}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{desc}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How are they done at a salon */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Are French Tip Nails Done at a Salon?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A gel french tip manicure at a nail salon takes about 45 to 60 minutes for a natural nail set. Here is the standard process:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              {atSalonSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The most important step for a clean result is the guide placement. A wobbly or uneven guide produces a jagged smile line. Experienced nail techs often freehand the white tip with a thin liner brush for the most precise edge instead of using guides.
            </p>
          </div>

          {/* How to do at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Do French Tip Nails at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              French tips are one of the more achievable nail art styles for home use. The tools you need are minimal: a sheer pink or nude polish, a white nail polish, french tip guides (or tape), a thin detail brush, and acetone for cleanup.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Here is a step-by-step guide for doing french tips at home with regular nail polish:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>File and shape your nails to the desired length. Oval, square, and almond all work well for french tips.</li>
              <li>Apply a base coat to all nails and let it dry completely.</li>
              <li>Apply one to two thin coats of a sheer pink, nude, or natural-looking polish. Let each coat dry before the next.</li>
              <li>Place french tip guide stickers just below the free edge of each nail, following the natural smile line. Press firmly at the edges so polish does not bleed underneath.</li>
              <li>Apply one coat of white nail polish to the exposed free edge beyond the guide. Keep the brush strokes going from side to center to maintain even coverage.</li>
              <li>Apply a second coat of white while the first is still slightly tacky. This prevents streaking and gives better opacity.</li>
              <li>Peel the guides off while the white is still a little wet, not fully dry. Removing guides after the polish fully dries causes jagged edges.</li>
              <li>Use a thin brush or toothpick dipped in acetone to clean up any uneven edges along the smile line.</li>
              <li>Apply a glossy top coat over the entire nail, slightly overlapping onto the white tip to seal the edge and prevent chipping.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The most common mistake with DIY french tips is letting the white polish dry too much before removing the guide. If you wait too long, the polish tears instead of pulling cleanly. If your smile line still looks uneven after removing the guide, a small detail brush dipped in acetone is the fastest way to sharpen it up.
            </p>
          </div>

          {/* How long do they last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do French Tip Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The wear time for french tip nails depends on the product used for the base and tip:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Product</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear time</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Regular nail polish", "5 to 10 days", "White tips chip faster than colored polish; use a quality top coat"],
                    ["Gel polish", "2 to 3 weeks", "Most durable option for natural nails; cured under LED lamp"],
                    ["Acrylic french tip", "2 to 3 weeks per fill", "Hard white acrylic tip applied over the free edge; very durable"],
                    ["Gel-x with gel tip", "3 to 4 weeks", "Pre-made gel extension with white smile line baked in; no painting needed"],
                    ["Press-on french tips", "5 to 14 days", "Varies by adhesive; glue-on press-ons last longest"],
                  ].map(([product, wear, notes], i) => (
                    <tr key={product} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{product}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              The white tip on french nails is slightly more prone to showing chips than a solid colored nail because any small chip or crack at the very tip is immediately visible against the white. Reapplying a thin layer of top coat every two to three days significantly extends the life of any french tip, regardless of the product used.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do French Tip Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A french tip manicure at a nail salon is one of the more affordable salon services because the design itself is simple and fast to execute. Here is what to expect in terms of pricing:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Regular nail polish french tip:</span> $25 to $45 for a full manicure including tip painting.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Gel polish french tip:</span> $40 to $70, depending on the salon and your location.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Acrylic full set with french tip:</span> $50 to $90 for a full set. A fill costs $35 to $55.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Gel-x extensions with white tip:</span> $70 to $120 for a full set.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Nail art add-ons (chrome, colored tip, reverse french):</span> Add $10 to $30 depending on the complexity.</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              In California, gel french tip prices typically range from $45 to $70 in most cities. Salons in Beverly Hills, West Hollywood, and downtown San Francisco charge at the higher end of the range. Doing french tips at home with a gel lamp kit costs $5 to $15 per manicure once you have the initial equipment.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of French Tip Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Works on every nail shape and length</li>
                  <li>Timeless style that never looks dated</li>
                  <li>Looks clean and professional for any setting</li>
                  <li>Easy to DIY at home with guides or tape</li>
                  <li>Dozens of modern variations to choose from</li>
                  <li>Affordable at most salons</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>White tips show chips and cracks more visibly than color</li>
                  <li>Requires a steady hand for a clean smile line</li>
                  <li>White polish can yellow over time without UV-protective top coat</li>
                  <li>Some consider the classic style outdated (though modern variations solve this)</li>
                  <li>Harder to touch up at home than a solid color</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About French Tip Nails</h2>
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
                { title: "What Are Reverse French Nails?", href: "/what-are/what-are-reverse-french-nails/" },
                { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
                { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
                { title: "How to Paint Your Nails", href: "/how-to/how-to-paint-nails/" },
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
