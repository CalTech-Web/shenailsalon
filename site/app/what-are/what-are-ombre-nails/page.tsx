import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Ombre Nails? How They're Done, Cost & How Long They Last",
  description:
    "Ombre nails blend two or more colors from light to dark across the nail. Learn how they're done, which products work best, how long they last, and how much they cost at a salon.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-ombre-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-ombre-nails/",
    title: "What Are Ombre Nails? How They're Done, Cost & How Long They Last",
    description:
      "Ombre nails blend two or more colors from light to dark across the nail. Learn how they're done, which products work best, how long they last, and how much they cost at a salon.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are Ombre Nails?", item: "https://shenailsalon.com/what-are/what-are-ombre-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Ombre Nails? How They're Done, Cost & How Long They Last",
  description:
    "Ombre nails blend two or more colors seamlessly across the nail plate using a sponge or brush technique. This guide covers every ombre style, how each is done, how long it lasts, what it costs, and how ombre compares to other nail techniques.",
  url: "https://shenailsalon.com/what-are/what-are-ombre-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-ombre-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are ombre nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ombre nails are a nail design where two or more colors blend seamlessly into each other across the nail, fading from light to dark or from one hue to another. The word ombre comes from the French word meaning shaded. On nails, the effect is created by layering colors with a sponge (for regular polish or gel), by brushing (for acrylic or polygel), or by using a special dual-tipped brush. The most common style fades from white or nude at the tip to a deeper color at the base, but ombre can also go from one color family to another, such as pink to purple or blue to teal.",
      },
    },
    {
      "@type": "Question",
      name: "How long do ombre nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ombre nails last 2 to 3 weeks with regular nail polish, 3 to 4 weeks with gel polish, and 6 to 8 weeks with acrylic or hard gel extensions. The ombre design itself does not affect wear time compared to a solid color. The limiting factor is the product type. Gel ombre is the most popular salon choice because it gives a smooth blend and lasts the longest among polish options. Acrylic ombre (often called a fade or baby boomer design) is built into the acrylic itself and lasts as long as the acrylic set.",
      },
    },
    {
      "@type": "Question",
      name: "How much do ombre nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ombre nails cost $45 to $90 at most nail salons in the United States. A basic two-color gel ombre on natural nails typically runs $55 to $75. Ombre with acrylic extensions costs $80 to $120 depending on length and complexity. In California, prices range from $55 to $100 for a gel ombre and $85 to $130 for an acrylic ombre set. The cost is higher than a solid color because the blending technique takes more time and skill than a standard single-color application.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ombre nails and gradient nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ombre nails and gradient nails are the same thing. Both terms describe a color transition from one shade to another across the nail. In the nail industry, ombre and gradient are used interchangeably. Some nail techs use gradient to describe a more subtle transition within a single color family (like light pink to deep pink), while ombre sometimes refers to a more dramatic color shift (like white to bold red), but there is no strict technical distinction between the two terms.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do ombre nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ombre nails can be done at home using regular nail polish and a makeup sponge. Paint two or three colors onto the sponge in overlapping stripes, then press and dab the sponge onto the nail, blotting back and forth to build the blend. Seal with a fast-dry top coat. The sponge method works well for regular polish and some gel polishes. For gel ombre at home, a dual-ended gel brush or a fan brush can also achieve a smooth blend before curing. The at-home result will not be as polished as a salon technique, but with practice it is very achievable.",
      },
    },
    {
      "@type": "Question",
      name: "What is a baby boomer ombre nail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A baby boomer is a specific style of ombre nail that fades from a soft pink or nude at the base of the nail to white at the tip, resembling a French manicure but with a blended transition instead of a sharp line. Baby boomer nails are almost always done in acrylic or builder gel, where the pink and white products are blended directly at the smile line during application. The result is a timeless, natural-looking nail that is more casual than a classic French tip but more polished than a plain nude nail. Baby boomer is one of the most searched ombre styles.",
      },
    },
  ],
};

const styleRows = [
  ["Classic ombre", "Light color at base fades to darker color at tip", "Gel polish or regular polish", "Most common, simple to learn"],
  ["Reverse ombre", "Dark color at base fades to light at tip", "Gel polish or acrylic", "Bold, editorial look"],
  ["Baby boomer", "Nude or pink base fades to white tip", "Acrylic or builder gel", "Soft French manicure alternative"],
  ["Glitter ombre", "Glitter gel applied heavily at one end, fades out", "Gel polish with glitter gel", "Party nails, holiday looks"],
  ["Chrome ombre", "Chrome powder applied more at tip than base", "Gel with chrome powder", "Metallic gradient, mirror finish"],
  ["Holographic ombre", "Holographic powder fades from tip to base", "Gel with holo powder", "Rainbow shimmer effect in sunlight"],
  ["Two-color diagonal ombre", "Colors blend at an angle across the nail", "Gel polish or regular polish", "Modern, geometric feel"],
];

const wearRows = [
  ["Regular polish ombre", "Sponge technique with regular lacquer", "2 to 3 weeks", "$15 to $35 DIY / $35 to $55 salon"],
  ["Gel ombre", "Sponge or dual-brush technique with gel polish", "3 to 4 weeks", "$45 to $75 salon"],
  ["Acrylic ombre", "Two-color acrylic blend at the smile line", "6 to 8 weeks (fill every 3 to 4)", "$70 to $120 salon"],
  ["Builder gel ombre", "Two-color builder gel blended during application", "6 to 8 weeks", "$65 to $110 salon"],
  ["Gel-X ombre", "Pre-made or custom ombre on gel-x tips", "4 to 5 weeks", "$70 to $110 salon"],
  ["Press-on ombre", "Pre-designed ombre press-on nails", "1 to 2 weeks", "$10 to $30 DIY kit"],
];

const vsOtherRows = [
  ["Color transition", "Yes, blended gradient", "No, single solid color", "No, sharp defined line between colors"],
  ["Skill level to apply", "Moderate to advanced", "Beginner", "Intermediate"],
  ["Time to apply", "Longer (blending takes time)", "Shortest", "Similar to ombre"],
  ["Design style", "Gradient, soft, modern", "Classic, minimal", "Crisp, bold edge"],
  ["Products used", "Gel, acrylic, regular polish", "Any nail product", "Typically gel or acrylic"],
  ["Customization options", "Unlimited color combinations", "Limited to one color choice", "Limited, usually white or colored tip"],
];

const salonSteps = [
  ["1. Prep and shape", "Nails are filed, cuticles pushed back, and the nail plate is buffed and dehydrated."],
  ["2. Base coat", "A gel base coat is applied and cured under an LED lamp."],
  ["3. Base color application", "The lighter base color (often a nude, white, or pastel) is applied to the entire nail and cured."],
  ["4. Second color on sponge", "The technician places a stripe of the darker color on a small nail sponge, overlapping where the first color ends."],
  ["5. Sponge blending", "The sponge is dabbed repeatedly onto the nail to build the gradient. Multiple applications are needed to achieve a smooth fade."],
  ["6. Clean up", "Any color that landed on the skin is cleaned with a brush dipped in gel cleanser or acetone."],
  ["7. Cure and repeat", "Each layer is cured under the LED lamp before the next is applied. Most gel ombre sets require 3 to 5 sponge passes."],
  ["8. Top coat", "A gel top coat is applied over the full nail to seal the design and add shine or matte finish."],
];

export default function OmbreNailsPage() {
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
            <span>What Are Ombre Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Ombre Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Ombre nails blend two or more colors seamlessly from light to dark across the nail. This guide covers every style, how they are done at a salon and at home, how long they last, and what they cost. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are ombre nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Ombre Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Ombre nails are a nail design where two or more colors transition seamlessly into each other across the nail plate. The word ombre comes from the French word for shaded, and the effect mimics the color-fading technique popularized in hair coloring. On nails, the look ranges from a subtle nude-to-white fade (called a baby boomer) to bold two-tone gradients in contrasting colors like blue and purple, or coral and gold.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I have had ombre nails done at a salon several times, and the results always get more compliments than a solid color. The gradient catches the light differently as you move your hand, which makes the nails look more dimensional even on a short, natural length. My personal favorite is a white-to-blush pink fade in builder gel, which lasts almost six weeks without chipping.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Ombre is not a nail product. It is a design technique that can be applied using regular nail polish, gel polish, acrylic, builder gel, or gel-x extensions. The method used to create the gradient depends on the product type and the technician's preference, but the sponge technique is the most common for gel and regular polish.
            </p>
          </div>

          {/* Ombre nail styles */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Ombre Nail Styles</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Ombre is one of the most versatile nail designs because the color combinations and gradient directions are unlimited. Here are the most popular styles:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Style</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Best Product</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {styleRows.map(([style, description, product, notes], i) => (
                    <tr key={style} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{style}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{description}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{product}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How ombre nails are done at a salon */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Ombre Nails Are Done at a Salon</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Most nail salons create ombre using gel polish and a sponge technique. The appointment takes about 75 to 90 minutes for a gel ombre with a clean two-color gradient. Here is the step-by-step process:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Step</th>
                    <th className="text-left px-4 py-2 font-semibold">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  {salonSteps.map(([step, description], i) => (
                    <tr key={step} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#1E293B" }}>{step}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              For acrylic or builder gel ombre (baby boomer style), the process is different. The technician works both colors wet, blending them directly at the transition zone with a clean brush before the product hardens. This technique requires more precision and experience than the sponge gel method.
            </p>
          </div>

          {/* How to do ombre nails at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Do Ombre Nails at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The easiest way to do ombre nails at home is with two regular nail polish colors and a makeup sponge. Here is what you need and how to do it:
            </p>
            <p className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Supplies:</p>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed mb-4" style={{ color: "#707070" }}>
              <li>Two nail polish colors (one light, one dark, or two complementary hues)</li>
              <li>A small makeup sponge (wedge sponges work best)</li>
              <li>Base coat and top coat</li>
              <li>Nail polish remover and a small brush for cleanup</li>
              <li>Liquid latex or tape around the nail to protect skin (optional but helpful)</li>
            </ul>
            <p className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>Steps:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Apply base coat and let it dry completely.</li>
              <li>Apply the lighter color as a base layer over the full nail and let it dry.</li>
              <li>Paint the lighter color on the bottom half of the sponge and the darker color on the top half, overlapping slightly in the middle.</li>
              <li>Press and dab the sponge onto your nail, focusing the darker color at the tip. Use a gentle tapping motion rather than dragging.</li>
              <li>Repeat the sponge press 3 to 5 times, reapplying color to the sponge each time, until the gradient looks smooth.</li>
              <li>Clean up any color on the skin with a small brush dipped in nail polish remover.</li>
              <li>Apply two thin coats of top coat to seal the design and add shine.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The key to a smooth at-home ombre is patience. Dabbing gently many times produces a better result than pressing hard once. If the colors look patchy after drying, add another sponge pass before the top coat.
            </p>
          </div>

          {/* How long do ombre nails last by product */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Ombre Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Ombre nail wear time depends entirely on the product used, not the design itself. Here is how long each product type holds up:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Product Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Application Method</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear Time</th>
                    <th className="text-left px-4 py-2 font-semibold">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {wearRows.map(([product, method, wear, cost], i) => (
                    <tr key={product} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{product}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{method}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ombre vs solid vs French */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Ombre Nails vs Solid Color vs French Tips</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Ombre, solid color, and French tip nails are three of the most popular nail looks. Here is how they compare:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Ombre</th>
                    <th className="text-left px-4 py-2 font-semibold">Solid Color</th>
                    <th className="text-left px-4 py-2 font-semibold">French Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {vsOtherRows.map(([feature, ombre, solid, french], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{ombre}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{solid}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{french}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Ombre Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Works on any nail length and shape</li>
                  <li>Unlimited color combinations for any occasion</li>
                  <li>Hides grow-out better than solid colors or French tips</li>
                  <li>Looks more dimensional and interesting than a plain color</li>
                  <li>Can be done with regular polish, gel, acrylic, or builder gel</li>
                  <li>Doable at home with basic supplies and practice</li>
                  <li>Baby boomer style flatters all skin tones</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>Takes longer to apply than a solid color manicure</li>
                  <li>Costs more at a salon due to extra technique time</li>
                  <li>Requires more skill and patience to achieve a smooth blend</li>
                  <li>Sponge method can leave a textured finish if not sealed well</li>
                  <li>Some color combinations can look muddy if not chosen carefully</li>
                  <li>Touch-ups are harder to match than a solid color</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How much do ombre nails cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Ombre Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Ombre nails cost more than a standard solid color manicure because the blending technique takes additional time and skill. Here is a general price breakdown:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><strong style={{ color: "#1E293B" }}>Regular polish ombre (salon):</strong> $35 to $55. The sponge technique with regular lacquer is the most affordable salon ombre option.</li>
              <li><strong style={{ color: "#1E293B" }}>Gel ombre (salon):</strong> $50 to $80. Most popular salon choice. Prices vary by city and salon tier.</li>
              <li><strong style={{ color: "#1E293B" }}>Acrylic ombre or baby boomer (salon):</strong> $80 to $120 for a full set. Fills cost $50 to $70 every 3 to 4 weeks.</li>
              <li><strong style={{ color: "#1E293B" }}>Builder gel ombre (salon):</strong> $70 to $110. Less common than acrylic but growing in popularity.</li>
              <li><strong style={{ color: "#1E293B" }}>DIY at home:</strong> $10 to $30 for polish and supplies. Press-on ombre kits run $10 to $25.</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              In California, gel ombre at a mid-tier salon typically runs $60 to $85. In Los Angeles and San Francisco, the same service at a higher-end salon can reach $90 to $110, especially if nail art or intricate color work is involved.
            </p>
          </div>

          {/* FAQ section */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Ombre Nails</h2>
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
                { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
                { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
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
                href="/category/what-are"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: "#046BD2" }}
              >
                Browse all 49 What Are guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
