import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matte Nails: What They Are, How to Get Them, Colors & How Long They Last",
  description:
    "Matte nails have a flat, non-reflective finish instead of a glossy shine. Learn what matte nails are, how a matte top coat works, the best matte nail colors, how long they last, and matte vs glossy compared.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-matte-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-matte-nails/",
    title: "Matte Nails: What They Are, How to Get Them, Colors & How Long They Last",
    description:
      "Matte nails have a flat, non-reflective finish instead of a glossy shine. Learn what matte nails are, how a matte top coat works, the best matte nail colors, how long they last, and matte vs glossy compared.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Matte Nails", item: "https://shenailsalon.com/what-are/what-are-matte-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Matte Nails: What They Are, How to Get Them, Colors & How Long They Last",
  description:
    "A complete guide to matte nails. Covers what matte nails are, how a matte top coat creates a non-reflective finish, the most popular matte nail colors (black, pink, nude, red), matte vs glossy nail differences, how long matte nails last, and how to maintain them.",
  url: "https://shenailsalon.com/what-are/what-are-matte-nails/",
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
  dateModified: "2026-04-09",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-matte-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are matte nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matte nails are nails finished with a flat, non-reflective surface instead of the shiny gloss typical of regular nail polish or gel. The matte effect is achieved by applying a matte top coat over any nail color. The top coat contains silica or other light-scattering particles that diffuse light in multiple directions, eliminating the mirror-like sheen. Matte nails look velvety, soft, and modern.",
      },
    },
    {
      "@type": "Question",
      name: "How do you get matte nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The simplest way to get matte nails is to apply a matte top coat over any cured gel or dried nail polish color. Matte top coats are widely available from brands like OPI, Essie, Sally Hansen, and Gelish. For gel matte nails, use a matte gel top coat and cure it under a UV or LED lamp. At a nail salon, ask the technician for a matte finish when booking a gel, acrylic, or dip appointment. Most salons offer matte as a standard finish option.",
      },
    },
    {
      "@type": "Question",
      name: "How long do matte nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matte gel nails typically last 2 to 3 weeks before chipping or lifting, the same as glossy gel. Matte regular nail polish lasts 5 to 7 days. The matte finish itself can wear slightly faster than gloss because the top coat does not have the same sealing hardness as a gloss topcoat, and everyday contact with oils and water gradually restores a slight sheen to the surface. Applying cuticle oil only at the cuticles (not the nail plate) helps preserve the matte appearance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between matte and glossy nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matte nails have a flat, light-scattering surface with no shine. Glossy nails have a reflective, mirror-like topcoat that amplifies light. Matte nails look softer and more understated. Glossy nails look more vibrant and saturated because the reflective surface intensifies the color. Both can be applied over gel, acrylic, dip, or regular polish. Matte finishes show fingerprints and oil more visibly than glossy nails.",
      },
    },
    {
      "@type": "Question",
      name: "Can you make gel nails matte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any gel manicure can be finished with a matte gel top coat instead of a glossy one. The matte gel top coat is cured under a UV or LED lamp just like a regular gel topcoat. Some matte gel top coats are no-wipe, and some leave a sticky inhibition layer that must be wiped off with isopropyl alcohol to reveal the matte finish. You can also convert a glossy gel manicure to matte at home by buffing the surface with a high-grit nail buffer (180 to 220 grit), though this is less even than a dedicated matte topcoat.",
      },
    },
    {
      "@type": "Question",
      name: "What nail colors look best with a matte finish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matte black nails are the most iconic matte look. Nude, taupe, and beige shades look exceptionally sophisticated in matte. Deep colors like burgundy, navy, forest green, and charcoal are popular in matte for a rich, velvety effect. Matte pink nails range from baby pink (soft and feminine) to dusty rose (vintage, editorial). Matte white nails create a minimalist aesthetic. Bright colors like red, coral, and orange tend to look more muted in matte, which some prefer for a more understated effect.",
      },
    },
    {
      "@type": "Question",
      name: "How do you keep matte nails from getting shiny?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matte nails gradually pick up a slight sheen from contact with skin oils, water, and everyday friction. To maintain the matte look, avoid touching the nail surface unnecessarily, apply cuticle oil only at the cuticle edge (not on the nail plate), and avoid petroleum-based hand creams on the nails. If the finish becomes too shiny after a week, a thin additional coat of matte top coat can refresh the look without removing the manicure.",
      },
    },
  ],
};

const matteVsGlossyRows = [
  ["Finish", "Flat, non-reflective, velvety", "Shiny, mirror-like, reflective"],
  ["Color saturation", "Colors appear softer, slightly muted", "Colors appear more vibrant and saturated"],
  ["Fingerprint visibility", "Shows oils and fingerprints more easily", "Fingerprints less visible"],
  ["Maintenance", "May need touch-up top coat after 1 to 2 weeks", "Glossy topcoat more self-sealing"],
  ["Application", "Matte top coat over any color", "Standard gloss topcoat over any color"],
  ["Drying time (regular polish)", "Similar, slightly faster", "Standard drying time"],
  ["Durability", "Comparable for gel; slightly shorter for regular polish", "Slightly longer-lasting topcoat"],
  ["Best for", "Understated, editorial, minimalist looks", "Classic, vibrant, high-shine looks"],
];

const colorRows = [
  ["Matte black", "Bold, edgy, most iconic matte look", "Any shape, especially coffin and stiletto"],
  ["Matte nude / taupe", "Sophisticated, office-friendly, minimalist", "Oval, almond, square"],
  ["Matte pink", "Feminine to editorial depending on shade", "Any shape, especially almond and coffin"],
  ["Matte burgundy / wine", "Rich, velvety, autumn-winter staple", "Square, coffin, stiletto"],
  ["Matte navy / dark blue", "Deep, moody, formal", "Square, coffin"],
  ["Matte white", "Minimalist, modern, clean", "Square, coffin, oval"],
  ["Matte red", "More understated than glossy red, still bold", "Any shape"],
  ["Matte forest green", "Earthy, trending, distinctive", "Square, almond"],
];

const wearTimeRows = [
  ["Matte gel manicure (salon)", "2 to 3 weeks"],
  ["Matte gel at home", "1 to 2 weeks"],
  ["Matte dip powder", "3 to 4 weeks"],
  ["Matte acrylic nails", "2 to 3 weeks (until fill)"],
  ["Matte regular nail polish", "5 to 7 days"],
  ["Matte press-on nails", "5 to 14 days depending on adhesive"],
];

const prosRows = [
  ["Modern aesthetic", "Matte finish looks editorial and on-trend"],
  ["Softer color appearance", "Muted tones read more elegant on many skin tones"],
  ["Easy to achieve", "A single matte top coat converts any manicure"],
  ["Hides imperfections", "Flat finish hides minor bubbles or texture in the polish layer"],
  ["Reversible", "A gloss topcoat can convert matte nails back to shiny"],
  ["Works on all nail types", "Compatible with gel, acrylic, dip, and regular polish"],
];

const consRows = [
  ["Shows oils faster", "Skin oils and fingerprints are more visible on matte"],
  ["Slightly shorter wear", "Matte topcoats are not quite as durable as gloss"],
  ["Gradual sheen", "Daily friction gradually restores some shine"],
  ["Less color vibrancy", "Bright and neon shades look more muted in matte"],
  ["Cuticle oil on nails restores gloss", "Need to apply oil at cuticle only, not on nail plate"],
];

const applicationSteps = [
  "Apply a base coat and let it dry fully (or cure under a lamp for gel).",
  "Apply 1 to 2 coats of your chosen nail color, drying or curing each layer.",
  "Do not apply a standard gloss topcoat. Apply a matte top coat instead.",
  "For regular polish: apply the matte top coat in thin, even strokes and let dry completely.",
  "For gel: apply the matte gel top coat in thin, even strokes and cure under a UV or LED lamp for the time specified on the product.",
  "If the matte gel topcoat leaves a sticky inhibition layer, wipe it off with isopropyl alcohol using a lint-free wipe to reveal the matte finish.",
  "Apply cuticle oil at the edges of the cuticle only. Avoid getting oil on the nail plate, as it restores a slight sheen.",
];

export default function MatteNailsPage() {
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
            <span>Matte Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Matte Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Matte nails have a flat, velvety finish with no shine. Instead of the reflective gloss of standard nail polish or gel, matte nails scatter light in every direction to create a soft, non-reflective surface. This guide covers what matte nails are, how to get them, the best colors, how long they last, and how matte compares to glossy. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are matte nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Matte Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Matte nails are nails finished with a flat, non-reflective surface. Unlike the shiny, mirror-like finish of standard glossy nail polish or gel, matte nails have a velvety appearance that does not reflect light. The effect is created by applying a matte top coat over any nail color. Matte top coats contain fine particles, typically silica, that scatter incoming light in multiple directions instead of reflecting it in a single direction. The result is a smooth but completely non-shiny finish.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Matte is a finish, not a nail type. It can be applied over gel, acrylic, dip powder, or regular nail polish. Any color can be made matte, from black and nude to bright red or pastel pink. The matte finish changes how the color reads: deep shades appear richer and more velvety, while brights appear more muted and understated.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Matte nails have been a consistent trend since they gained popularity in the early 2010s and have never really gone out of style. Matte black nails remain one of the most searched nail looks year-round. Matte nude and matte pink are perennial favorites, and seasonal trends regularly bring matte back to the top of social media nail content.
            </p>
          </div>

          {/* Matte vs glossy */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Matte vs Glossy Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The main difference between matte and glossy nails is how they interact with light. Glossy nails reflect light in a single direction, creating a bright, mirror-like shine. Matte nails diffuse light in multiple directions, eliminating the shine entirely. Both finishes work over the same nail types and colors.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Matte</th>
                    <th className="text-left px-4 py-2 font-semibold">Glossy</th>
                  </tr>
                </thead>
                <tbody>
                  {matteVsGlossyRows.map(([feature, matte, glossy], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{matte}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{glossy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              One practical difference: matte nails show fingerprints and skin oils more visibly than glossy nails. This is because the flat surface provides no visual noise to hide smudges. Wiping the nail surface gently with a dry cloth removes fingerprints without affecting the finish.
            </p>
          </div>

          {/* How to get matte nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Get Matte Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The standard method for matte nails is to apply a matte top coat as the final step of any manicure. This replaces the standard gloss topcoat and works over regular nail polish, gel, acrylic, and dip. Matte top coats are widely available from brands like OPI, Essie, Sally Hansen, Orly, and Gelish.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed mt-4" style={{ color: "#707070" }}>
              {applicationSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>DIY matte without a matte top coat</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                If you do not have a matte top coat, you can lightly buff a dried glossy manicure with a 220-grit nail buffer to dull the shine. The result is less even and smooth than a proper matte top coat, and the buffed finish may chip faster, but it works in a pinch for regular nail polish.
              </p>
            </div>
          </div>

          {/* Matte nail colors */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Best Matte Nail Colors</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Almost any nail color looks good in matte, but certain shades are particularly suited to the velvety finish. Deep, rich colors gain a luxurious quality in matte. Neutrals look sophisticated. Bright colors take on a more editorial, less commercial feel.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Color</th>
                    <th className="text-left px-4 py-2 font-semibold">Effect in matte</th>
                    <th className="text-left px-4 py-2 font-semibold">Best nail shape</th>
                  </tr>
                </thead>
                <tbody>
                  {colorRows.map(([color, effect, shape], i) => (
                    <tr key={color} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{color}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{effect}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shape}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Matte black nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Matte Black Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Matte black nails are the most iconic matte nail look. The combination of black and the flat finish reads as edgy, modern, and high fashion without the aggressive shine that glossy black can have. Matte black works on every nail shape, but is especially popular on coffin, stiletto, and square shapes where the angular or tapered form contrasts with the soft, velvety surface.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Matte black is also a popular base for nail art because the flat surface holds designs, foil, and glitter accents more visibly than a shiny base. A single accent nail in chrome or glitter against a matte black background is one of the most effective mixed-finish combinations in nail design.
            </p>
          </div>

          {/* Matte pink nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Matte Pink Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Matte pink nails range from pale baby pink to deep dusty rose, and each shade has a distinct personality. Baby pink in matte looks soft and feminine, similar to the velvet quality of a pressed powder. Dusty rose in matte has a vintage, editorial feel that is popular in runway and editorial nail photography. Hot pink in matte reads more understated than glossy hot pink but still makes a strong statement.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Matte pink is particularly popular for wedding nails when a bride wants something softer than glossy but more interesting than a standard sheer. Pale dusty pink in matte is an increasingly common alternative to classic French tips.
            </p>
          </div>

          {/* Matte gel nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Matte Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Matte gel nails use a matte gel top coat cured under a UV or LED lamp. They are the most durable version of the matte finish, lasting the same 2 to 3 weeks as a standard gel manicure. Most nail salons offer matte gel as a standard finish option at no additional charge, or for a small upcharge of $3 to $5.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              One practical note: some matte gel top coats leave a sticky inhibition layer after curing, which must be wiped away with isopropyl alcohol on a lint-free wipe to reveal the matte finish. If this step is skipped, the surface looks sticky and tacky rather than matte. Always check the product instructions.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Matte gel nails gradually develop a slight sheen over 2 to 3 weeks as skin oils and everyday friction work into the surface. This is normal and does not indicate a product failure. Applying a thin additional coat of matte top coat at the 1-week mark can refresh the finish.
            </p>
          </div>

          {/* How long do matte nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Matte Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Wear time for matte nails depends on the base nail type rather than the matte finish itself. The matte top coat does not meaningfully shorten the lifespan of the underlying nail type. The main aging effect specific to matte nails is a gradual return of some shine as the surface picks up oils, not chipping or peeling (which is determined by the base layer).
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Nail type</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected wear time</th>
                  </tr>
                </thead>
                <tbody>
                  {wearTimeRows.map(([type, time], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Matte Nails: Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border p-4" style={{ borderColor: "rgba(4,107,210,0.2)", background: "#F8FBFF" }}>
                <p className="font-semibold mb-3" style={{ color: "#046BD2" }}>Pros</p>
                <ul className="space-y-2">
                  {prosRows.map(([title, desc]) => (
                    <li key={title} className="text-sm" style={{ color: "#707070" }}>
                      <span className="font-medium" style={{ color: "#1E293B" }}>{title}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" style={{ borderColor: "rgba(100,100,100,0.2)", background: "#FAFAFA" }}>
                <p className="font-semibold mb-3" style={{ color: "#334155" }}>Cons</p>
                <ul className="space-y-2">
                  {consRows.map(([title, desc]) => (
                    <li key={title} className="text-sm" style={{ color: "#707070" }}>
                      <span className="font-medium" style={{ color: "#1E293B" }}>{title}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Matte Nails: Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-b pb-5" style={{ borderColor: "#e2e8f0" }}>
                  <p className="font-semibold mb-2" style={{ color: "#1E293B" }}>{item.name}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related guides */}
          <div className="rounded-xl p-6 border" style={{ background: "#F8FBFF", borderColor: "rgba(4,107,210,0.15)" }}>
            <p className="font-semibold mb-4" style={{ color: "#1E293B" }}>Related Nail Guides</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  Chrome Nails: Colors, Application and How Long They Last
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Gel Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-acrylic-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Acrylic Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-polish-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Is Gel Polish?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">
                  Nail Art: Types, Designs and Ideas
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-nail-shapes/" style={{ color: "#046BD2" }} className="hover:underline">
                  Nail Shapes: Every Shape Explained and Compared
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
