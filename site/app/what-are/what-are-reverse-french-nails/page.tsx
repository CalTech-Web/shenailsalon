import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverse French Nails: What They Are, Designs, How to Do Them & Cost",
  description:
    "Reverse french nails place the contrast stripe at the cuticle instead of the tip. Learn what reverse french nails are, popular designs, how to do them at home, how long they last, and what they cost at a salon.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-reverse-french-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-reverse-french-nails/",
    title: "Reverse French Nails: What They Are, Designs, How to Do Them & Cost",
    description:
      "Reverse french nails place the contrast stripe at the cuticle instead of the tip. Learn what reverse french nails are, popular designs, how to do them at home, how long they last, and what they cost at a salon.",
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
      name: "What Are Reverse French Nails?",
      item: "https://shenailsalon.com/what-are/what-are-reverse-french-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reverse French Nails: What They Are, Designs, How to Do Them & Cost",
  description:
    "A comprehensive guide to reverse french nails. Covers what they are, how they differ from a classic french manicure, popular design variations (black, colored, geometric, double stripe), how to do them at home, wear time by product type, California salon pricing, and a pros and cons comparison.",
  url: "https://shenailsalon.com/what-are/what-are-reverse-french-nails/",
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
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-reverse-french-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are reverse french nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reverse french nails are a nail style where a contrasting stripe is painted at the base of the nail near the cuticle rather than at the free edge tip. The stripe follows the curved shape of the half-moon (lunula) at the base of the nail. The style inverts the classic french manicure structure: instead of a sheer base with a white tip, the base can be any color and the contrasting accent sits at the cuticle end.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between reverse french nails and a regular french manicure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A classic french manicure places a white or light stripe along the free edge at the tip of the nail. A reverse french manicure places the contrasting stripe at the opposite end, near the cuticle, following the curve of the half-moon at the base of the nail. Reverse french nails also tend to use bolder color combinations (black and nude, deep red and white, pastel and clear) compared to the traditional white-on-pink french tip.",
      },
    },
    {
      "@type": "Question",
      name: "What colors are used for reverse french nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular reverse french nail color combinations are: black stripe on a nude or sheer base (the most searched variation), white stripe on a black or dark base, contrasting pastel stripe on a clear or light base, red stripe on a nude base, and metallic or chrome stripe on any solid color base. The stripe color and the base color are deliberately contrasting rather than complementary, which gives the style its graphic, editorial quality.",
      },
    },
    {
      "@type": "Question",
      name: "How do you do reverse french nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To do reverse french nails at home: (1) Apply a base coat and one to two coats of your chosen base color. Let it dry completely. (2) Place a curved nail art guide sticker or small strip of tape just above the base of the nail, following the half-moon curve of the cuticle. (3) Apply one to two coats of the contrasting stripe color below the guide. (4) Remove the guide while the stripe color is still slightly wet to avoid a jagged edge. (5) Clean up any uneven edges with a thin brush dipped in acetone. (6) Apply a glossy or matte top coat to seal the design. The same technique works with gel polish, but cure each layer under an LED lamp.",
      },
    },
    {
      "@type": "Question",
      name: "How long do reverse french nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reverse french nails last 2 to 3 weeks with gel polish, 5 to 10 days with regular nail polish, and 3 to 4 weeks on gel-x or acrylic extensions. The cuticle stripe placement has one practical advantage over a tip stripe: the base of the nail is less exposed to impact and washing than the free edge, so the painted stripe tends to wear slightly better than a traditional french tip.",
      },
    },
    {
      "@type": "Question",
      name: "How much do reverse french nails cost at a salon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A reverse french manicure at a nail salon costs $45 to $75 for a gel set in most US cities. In California, expect to pay $50 to $80 for gel reverse french nails, with salons in Los Angeles and San Francisco charging at the higher end. The style takes slightly longer than a standard gel manicure because the cuticle stripe requires precise placement and cleanup, so a $10 to $20 nail art upcharge over the base gel price is common.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shapes look best with reverse french nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almond, oval, and coffin nail shapes pair best with reverse french nails because their length gives the cuticle stripe a clear visual separation from the main nail body. The curved base of almond and oval shapes also naturally echoes the half-moon curve of the stripe. Short square nails work well with a very thin, precise stripe. Stiletto nails create a dramatic reverse french look because the long, tapered shape exaggerates the contrast between the base stripe and the nail body.",
      },
    },
  ],
};

const vsClassicRows = [
  ["Stripe position", "Free edge (tip)", "Base (cuticle area)"],
  ["Base color", "Sheer pink or nude", "Any color, often bold or dark"],
  ["Stripe color", "White or off-white", "Any contrasting color"],
  ["Aesthetic", "Classic, timeless, professional", "Modern, editorial, graphic"],
  ["Difficulty at home", "Moderate (tip guides)", "Moderate (cuticle guides)"],
  ["Salon upcharge", "Standard french tip pricing", "$10 to $20 nail art add-on"],
];

const designRows = [
  ["Black stripe on nude base", "Thin black line at the cuticle on a beige or skin-toned base", "Coffin, almond, oval", "Minimalist, editorial"],
  ["White on black", "White or silver cuticle stripe on a full black nail", "Stiletto, coffin, square", "High contrast, gothic-inspired"],
  ["Red stripe on nude", "Classic red half-moon on a sheer or ivory base", "Oval, almond, squoval", "Retro, vintage-influenced"],
  ["Pastel on clear", "Lavender, mint, or baby pink stripe on a bare or clear base", "Short square, round, oval", "Soft, spring/summer"],
  ["Chrome or metallic stripe", "Gold, silver, or rose gold foil or chrome at the cuticle", "Almond, coffin, stiletto", "High-shine, statement"],
  ["Geometric reverse french", "Straight line, angled line, or multi-color blocked stripe", "Square, coffin, ballerina", "Contemporary nail art"],
  ["Double reverse french", "Two thin parallel stripes at the cuticle in contrasting colors", "Almond, coffin, oval", "Maximalist, eye-catching"],
  ["Negative space reverse french", "A clear unpainted arc separates the cuticle area from the body of the nail", "Any length, any shape", "Minimal, architectural"],
];

const wearRows = [
  ["Gel polish (salon)", "2 to 3 weeks", "Most durable; cuticle stripe wears better than a tip stripe"],
  ["Gel polish (at home)", "1 to 2 weeks", "Shorter wear due to prep and seal quality"],
  ["Regular nail polish", "5 to 10 days", "Cuticle flex area can cause earlier peeling"],
  ["Gel-x extensions", "3 to 4 weeks", "Long wear; stripe sits away from daily impact"],
  ["Acrylic with gel top", "2 to 3 weeks per fill", "Hard base protects the stripe; fill needed as nail grows"],
  ["Press-on with art", "5 to 14 days", "Varies by adhesive; glue-on lasts longer than sticky tab"],
];

const diySteps = [
  "File and shape your nails to your preferred length and shape. Almond and oval shapes work especially well for reverse french.",
  "Apply a base coat to all nails and let it dry completely.",
  "Apply one to two thin coats of your chosen base color. Let each coat dry before the next.",
  "Place a curved nail art guide sticker just above the natural half-moon curve at the base of the nail. If you do not have nail art guides, a thin strip of tape curved by pressing and releasing it against your finger first also works.",
  "Apply one to two coats of the contrasting stripe color below the guide at the cuticle. Keep strokes light and thin to avoid buildup.",
  "Peel the guide off while the stripe color is still slightly wet. Removing it after the polish fully dries causes the paint to tear and leave a jagged edge.",
  "Use a thin brush or toothpick dipped in acetone to clean up any bleeding along the edge of the stripe.",
  "Apply a top coat over the entire nail, pressing slightly into the cuticle stripe edge to seal it and prevent chipping.",
];

export default function ReverseFrenchNailsPage() {
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
            <span>What Are Reverse French Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Reverse French Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Reverse french nails flip the classic french manicure: instead of a white stripe at the tip, a contrasting color is painted at the base of the nail near the cuticle. It is one of the most requested modern nail art styles in salons today. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are reverse french nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Reverse French Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Reverse french nails are a nail style where a contrasting stripe is applied at the base of the nail, near the cuticle, instead of at the free edge where a traditional french tip sits. The stripe follows the curved natural shape of the half-moon (the lunula), which is the pale arc visible at the base of most nails. The result looks like a classic french manicure turned upside down, which is exactly where the name comes from.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I first tried reverse french nails as a way to make my short nails look more interesting without adding length. What surprised me was how much more graphic and intentional the style looks compared to a regular french tip. Because the stripe is at the base rather than the tip, the eye is drawn upward along the nail body rather than outward, which actually makes the nail look slightly longer than it is.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The style has been in nail salons since at least the early 2010s, but it had a major resurgence around 2022 and has remained one of the most consistent nail art requests since then. The most searched variation is a thin black stripe on a nude or sheer base, but colored, metallic, and geometric reverse french designs have all built their own followings on social media.
            </p>
          </div>

          {/* Reverse french vs classic french */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Reverse French vs Classic French Manicure</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The core difference between a reverse french and a{" "}
              <Link href="/what-are/what-are-french-tip-nails/" style={{ color: "#046BD2" }} className="hover:underline">classic french manicure</Link>{" "}
              is stripe placement. Everything else, the two-tone structure, the use of guides to get a clean line, the choice of base product, follows the same logic.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Classic French</th>
                    <th className="text-left px-4 py-2 font-semibold">Reverse French</th>
                  </tr>
                </thead>
                <tbody>
                  {vsClassicRows.map(([feature, classic, reverse], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{classic}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{reverse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Popular Reverse French Nail Designs</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Reverse french nails work with almost any color combination. The designs below are the most requested variations across nail salons and social media.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Design</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Best shape</th>
                    <th className="text-left px-4 py-2 font-semibold">Aesthetic</th>
                  </tr>
                </thead>
                <tbody>
                  {designRows.map(([design, desc, shape, aesthetic], i) => (
                    <tr key={design} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{design}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{desc}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shape}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{aesthetic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Black reverse french nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Black Reverse French Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The black reverse french is by far the most searched variation of the style. A thin black stripe at the cuticle on a nude, beige, or milky white base creates a clean graphic contrast that photographs extremely well and pairs with almost any outfit. It is bold enough to be a statement nail without the commitment of an all-black manicure.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The key to a clean black reverse french is stripe thickness. A stripe that is too thick looks heavy and dominates the nail. Most nail technicians use a nail art liner brush or a thin art gel in black to draw the half-moon line freehand, then clean up the edges before curing. At home, a gel liner pen gives you more control than trying to use a regular nail art brush on a tacky gel base.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Black reverse french nails work on every nail shape but look particularly sharp on{" "}
              <Link href="/what-are/what-are-almond-shaped-nails/" style={{ color: "#046BD2" }} className="hover:underline">almond nails</Link>{" "}
              and{" "}
              <Link href="/what-are/what-are-coffin-nails/" style={{ color: "#046BD2" }} className="hover:underline">coffin nails</Link>{" "}
              where the length gives the stripe enough visual separation from the free edge.
            </p>
          </div>

          {/* Colored reverse french nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Colored Reverse French Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Once you move past black and white, the color combinations for reverse french nails are nearly endless. A few combinations that consistently appear in nail inspo posts and salon requests:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Red on nude:</span> A thin red half-moon stripe on a sheer or ivory base has a retro 1920s to 1940s look. This variation is sometimes called the "half-moon manicure" in vintage beauty references.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Navy on white:</span> A deep navy stripe on a crisp white base reads as nautical and clean, popular in spring and early summer.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Lilac on clear:</span> A soft purple or lavender stripe on a bare or clear base is one of the most popular soft-girl versions of the style.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Burnt orange on camel:</span> A fall favorite; the warm tones complement each other while still providing contrast.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Metallic gold on black:</span> A gold chrome or foil half-moon on a full black nail is a high-impact evening look.</li>
            </ul>
          </div>

          {/* How to do at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Do Reverse French Nails at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Reverse french nails are achievable at home with regular polish or a gel lamp kit. The technique is the same as a regular french tip, just repositioned. Here is the step-by-step process:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              {diySteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <div
              className="mt-4 rounded-xl p-4 border"
              style={{ background: "#EBF4FF", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Tip for a clean half-moon curve</p>
              <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                If nail art guides are not available, press a small piece of tape against the back of your hand a few times to reduce its stickiness before placing it on the nail. This prevents the tape from lifting your base color when you remove it. The curve forms naturally when you arch the tape slightly before placing it.
              </p>
            </div>
          </div>

          {/* Wear time */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Reverse French Nails Last?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Wear time for reverse french nails is comparable to any standard two-color{" "}
              <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">nail art</Link>{" "}
              design. The cuticle placement has a slight advantage over a tip stripe because the base of the nail is less exposed to impact from daily tasks than the free edge.
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
                  {wearRows.map(([product, wear, notes], i) => (
                    <tr key={product} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{product}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What nail shapes work best */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Nail Shapes Work Best?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Reverse french nails work on any shape, but longer nails give the stripe more visual separation and make the design easier to execute cleanly. Here is how different shapes affect the look:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Almond and oval:</span> The most popular choice. The tapered sides naturally frame the half-moon curve, and the length creates a clear canvas between the stripe and the tip.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Coffin and ballerina:</span> The flat tip and straight sides make the cuticle stripe stand out dramatically. Works especially well with geometric reverse french variations.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Stiletto:</span> The extreme taper creates a very graphic look, with the stripe appearing to float at the wide base while the nail narrows to a point.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Short square and squoval:</span> The style works but requires a thinner stripe. On short nails, a thick half-moon stripe can look crowded. A very thin arc in a neutral color keeps it elegant.</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              See our complete guide to{" "}
              <Link href="/what-are/what-are-nail-shapes/" style={{ color: "#046BD2" }} className="hover:underline">nail shapes</Link>{" "}
              for help choosing the right shape for your finger type.
            </p>
          </div>

          {/* Salon vs DIY cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Salon vs DIY Cost</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Reverse french nails are available at most nail salons that offer gel or{" "}
              <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">nail art</Link>{" "}
              services. Because the style requires a precise half-moon line and color transition, it typically carries a small nail art upcharge over the base gel price.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Gel reverse french (California salons):</span> $50 to $80 for a full gel set with reverse french design. Salons in Los Angeles, San Francisco, and San Diego charge toward the higher end.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Nail art upcharge:</span> $10 to $20 over the base gel manicure price is standard for the reverse french line. More complex geometric or double-stripe versions may add $20 to $35.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>Gel-x extensions with reverse french:</span> $80 to $130 depending on the salon and the complexity of the color work.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>DIY with gel polish and lamp:</span> $8 to $15 per manicure once you own a starter gel kit (gel polishes, LED lamp, base and top coat, nail art guides). Starter kits run $40 to $80 initially.</li>
              <li><span className="font-semibold" style={{ color: "#1E293B" }}>DIY with regular polish:</span> $3 to $8 per manicure using standard nail polish, guides, and top coat you likely already own.</li>
            </ul>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Reverse French Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Modern alternative to the classic french with the same clean structure</li>
                  <li>Works on every nail length, including short nails</li>
                  <li>Cuticle stripe is less exposed to chipping than a tip stripe</li>
                  <li>Endless color combinations for any season or occasion</li>
                  <li>Achievable at home with nail guides or tape</li>
                  <li>Looks high-end with minimal color and design effort</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>Requires precise guide placement at the cuticle, which is harder to see clearly than the tip</li>
                  <li>Natural nail growth exposes the stripe gradually (same issue as any cuticle-area design)</li>
                  <li>Nail art upcharge at salons adds $10 to $20 to the base price</li>
                  <li>Very thin stripes are difficult to execute cleanly with regular nail polish brushes</li>
                  <li>Less universally recognized than the classic french, so some salons may not be familiar with the term</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Reverse French Nails</h2>
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
                { title: "What Are French Tip Nails?", href: "/what-are/what-are-french-tip-nails/" },
                { title: "What Are Nail Art Nails?", href: "/what-are/what-are-nail-art/" },
                { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
                { title: "What Are Nail Shapes?", href: "/what-are/what-are-nail-shapes/" },
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
