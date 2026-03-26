import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oval Nails: Shape Guide, Short vs Long, Designs & How to File",
  description:
    "Oval nails curve gently along the sides to a soft rounded tip, making them one of the most flattering shapes on any finger length. Learn what oval nails are, how they compare to almond and round, and the best designs.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-oval-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-oval-nails/",
    title: "Oval Nails: Shape Guide, Short vs Long, Designs & How to File",
    description:
      "Oval nails curve gently along the sides to a soft rounded tip, making them one of the most flattering shapes on any finger length. Learn what oval nails are, how they compare to almond and round, and the best designs.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Oval Nails", item: "https://shenailsalon.com/what-are/what-are-oval-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Oval Nails: Shape Guide, Short vs Long, Designs & How to File",
  description:
    "A complete guide to oval nails. Covers what oval nails are, how they differ from almond and round shapes, short vs long oval nail options, popular designs including french tip and nude, and step-by-step filing instructions.",
  url: "https://shenailsalon.com/what-are/what-are-oval-nails/",
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
  dateModified: "2026-03-26",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-oval-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are oval nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oval nails are a nail shape where the sides curve gently inward following the natural contour of the fingertip, ending in a soft, fully rounded tip shaped like the top of an egg. The oval shape is one of the most classic and universally flattering nail shapes because it mirrors the natural curve of the fingertip. It works on short, medium, and long lengths and suits any nail width.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between oval and almond nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oval nails have a fully rounded tip that follows the natural curve of the finger, with gentle tapering along the sides. Almond nails taper more aggressively from both sides toward a narrower, slightly pointed tip, resembling the outline of an almond seed. Oval requires less length and is more beginner-friendly; almond creates a more dramatic elongating effect but needs at least 3 to 4 mm of free edge to achieve the shape clearly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between oval and round nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Round nails follow the curve of the fingertip closely with very little or no free edge extending past the finger. Oval nails use the same rounded tip but allow more free edge to extend past the fingertip, creating a more elongated appearance. In practice, a short oval and a round nail can look nearly identical, but oval implies slightly more length and a more deliberate shaping of the sides toward the curved tip.",
      },
    },
    {
      "@type": "Question",
      name: "Are oval nails good for short nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Oval is one of the best shapes for short nails. Even with minimal free edge, the curved tip and gently tapered sides create a neat, polished look that elongates wide or short nail beds visually. The shape works at any length from barely past the fingertip to a full medium length. It is also more practical than almond or stiletto for people who prefer short, functional nails.",
      },
    },
    {
      "@type": "Question",
      name: "What oval nail designs are most popular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular oval nail designs are nude and blush solids, French tips, ombre gradients, and soft pastel shades. The rounded tip of oval nails makes French tips look natural and classic rather than fashion-forward. Nude shades in beige, pink, and taupe are the most requested in salons because they make fingers look longer and complement any outfit. Chrome finishes and simple nail art also work well on the oval shape.",
      },
    },
    {
      "@type": "Question",
      name: "How do you file oval nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To file oval nails, hold a medium-grit file (180 to 220 grit) at a slight angle and file from the outer edge toward the center of the nail tip in one direction. File both sides evenly to create a symmetrical curve. Do not saw back and forth, which splits the nail edge. Once the general oval outline is formed, use a fine-grit file or buffer to smooth the curve into a clean, rounded tip. Check both hands side by side to confirm the shape matches across all fingers.",
      },
    },
  ],
};

const vsAlmondRows = [
  ["Tip shape", "Fully rounded, egg-shaped", "Tapered to a soft point"],
  ["Minimum length needed", "Short to medium (1 to 3 mm free edge)", "Medium (3 to 5 mm free edge)"],
  ["Finger-elongating effect", "Moderate to high", "High"],
  ["Fragility", "Low to moderate", "Moderate"],
  ["Best for", "Short nails, wide nail beds, everyday wear", "Most finger types, dramatic looks"],
  ["Difficulty to file", "Easy to moderate", "Moderate"],
  ["Salon popularity", "High", "Very high"],
];

const vsRoundRows = [
  ["Free edge length", "Short to medium (1 to 4 mm)", "Minimal (0 to 2 mm)"],
  ["Tip shape", "Rounded, elongated egg", "Follows the curve of the fingertip closely"],
  ["Elongating effect", "Moderate to high", "Low"],
  ["Nail length required", "Short to medium", "Very short"],
  ["Best for", "Everyday wear, flattering on most fingers", "Very active hands, lowest maintenance"],
];

const designIdeas = [
  {
    name: "Nude and Blush Oval Nails",
    description:
      "Nude shades in beige, blush, and light pink are the most requested designs for oval nails at salons. The combination of the rounded shape and a skin-matching tone creates a clean, elongating look that works in any setting. Sheer nudes with a slight pink tint are especially flattering on wider nail beds.",
  },
  {
    name: "French Tip Oval Nails",
    description:
      "A classic white French tip on an oval shape looks natural and polished rather than fashion-forward. The curved tip softens the white line compared to a square French tip, making it feel more organic. Colored French tips in soft pink, nude, or champagne also work well on the oval shape.",
  },
  {
    name: "Ombre Oval Nails",
    description:
      "Gradient designs from a lighter base to a deeper tip suit oval nails because the rounded tip anchors the color transition cleanly. Baby pink to white (baby boomer) and nude to dusty rose are two of the most popular combinations. The ombre effect also adds a subtle lengthening illusion.",
  },
  {
    name: "Chrome Oval Nails",
    description:
      "Chrome powder rubbed over cured gel creates a mirror finish that looks especially sleek on the curved oval tip. Silver, rose gold, and holographic chrome are the most requested finishes. The oval shape allows the chrome to catch light evenly across the rounded tip.",
  },
  {
    name: "Short Oval Nails with Solid Color",
    description:
      "Bold solid colors on short oval nails make a statement without requiring length. Deep red, burgundy, navy, and forest green all photograph well against the rounded shape. Short oval nails in a single rich color are one of the easiest nail looks to maintain at home.",
  },
  {
    name: "White Oval Nails",
    description:
      "Solid white oval nails have become one of the most searched nail looks because the combination reads as both minimal and striking. White polish on an oval shape has a clean, modern aesthetic that works year-round and with any clothing. Milky white and bright opaque white are both popular finishes.",
  },
];

const filingSteps = [
  "Start with nails that have at least 1 to 2 mm of free edge past the fingertip. For shorter nails, file gently along the sides first before working on the tip.",
  "Hold a medium-grit file (180 to 220 grit for natural nails, 150 grit for acrylics) at a slight upward angle to the free edge.",
  "File from the outer edge toward the center in one direction, following the natural curve of the fingertip. Do not saw back and forth.",
  "Repeat on the other side, filing from the outer edge toward the same central point. Keep the angle consistent on both sides to create a symmetrical curve.",
  "Once both sides are shaped, gently round the very tip with a few light strokes to smooth any flat edges into the curved oval outline.",
  "Check both hands side by side. The curve should look the same on every finger. Adjust any asymmetrical nails.",
  "Finish with a fine-grit buffer to smooth the edge, then apply a base coat to protect the nail plate.",
];

const colorRows = [
  ["Nude / beige", "Makes fingers look longer, wearable everywhere", "Very high"],
  ["Blush / soft pink", "Feminine, classic, pairs with every skin tone", "Very high"],
  ["White", "Clean and modern, year-round appeal", "High"],
  ["Red", "Bold and polished, suits oval better than square", "High"],
  ["Pastel (mint, lavender, peach)", "Seasonal and fresh, especially popular spring and summer", "High"],
  ["Burgundy / plum", "Rich and warm, best for fall and winter", "Moderate to high"],
  ["Chrome (silver, rose gold)", "Eye-catching, high-fashion look on the curved tip", "Moderate"],
  ["Sheer / glazed", "Barely-there look that enhances the natural nail", "High"],
];

export default function OvalNailsPage() {
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
            <span>Oval Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Oval Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Oval nails curve gently along the sides to a soft, fully rounded tip. The shape mirrors the natural contour of the fingertip, which is why it flatters almost every finger type and works at any length from short to long. This guide covers what oval nails are, how they compare to almond and round shapes, the most popular designs, and how to file them at home. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are oval nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Oval Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval nails are a classic nail shape where the sides curve gently inward and the tip ends in a smooth, fully rounded point shaped like the top half of an oval or egg. Unlike square nails, which end in a flat edge, or stiletto nails, which taper to a sharp point, oval nails follow the natural arc of the fingertip and simply extend it outward.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The oval shape is one of the most universally flattering nail shapes because it adds visible length to the finger without requiring dramatic nail length. The curved sides break up the width of the nail bed, making shorter or wider fingers appear slimmer and longer. This is why oval is consistently one of the top-requested shapes at salons alongside coffin and almond.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Oval works on natural nails with just 1 to 2 mm of free edge past the fingertip, which makes it one of the most accessible shapes for people who prefer shorter, functional nails. At longer lengths, the oval shape becomes more dramatic and elegant without the fragility of stiletto or almond.
            </p>
          </div>

          {/* Oval vs almond */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Oval vs Almond Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval and almond are the two most commonly confused nail shapes. Both taper along the sides and both elongate the fingers, but they differ in how much they taper and how the tip finishes.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval nails curve gently to a fully rounded tip, like the wide end of an egg. Almond nails pull in more aggressively from the sides, narrowing to a soft pointed tip that resembles an almond seed. If you want the more natural, understated look, oval is the choice. If you want a more elongating, slightly dramatic shape, almond gives that effect.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Oval</th>
                    <th className="text-left px-4 py-2 font-semibold">Almond</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAlmondRows.map(([feature, oval, almond], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{oval}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{almond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Oval vs round */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Oval vs Round Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Round and oval nails are closely related and often confused, especially at shorter lengths. The key difference is the amount of free edge extending past the fingertip and the visual elongation each shape creates.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Round nails essentially follow the natural curve of the fingertip with minimal or no free edge extending past it. The tip is shaped to mimic the contour of the finger end. Oval nails use the same rounded tip concept but allow more free edge, which creates a noticeably longer nail silhouette. A short oval can look similar to round, but a medium oval has clear visual length that a round shape does not.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Oval</th>
                    <th className="text-left px-4 py-2 font-semibold">Round</th>
                  </tr>
                </thead>
                <tbody>
                  {vsRoundRows.map(([feature, oval, round], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{oval}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{round}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Short oval nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Short Oval Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Short oval nails use 1 to 3 mm of free edge past the fingertip. At this length, the rounded tip is subtle but gives a cleaner, more refined look than a flat square edge. Short oval nails are one of the easiest nail shapes to maintain because there is less free edge to catch on surfaces and the shape grows out naturally without looking untidy.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              This is the most practical version of the oval shape for people who type frequently, work with their hands, or do not want to maintain longer nails. Short oval nails still elongate the finger visually and suit any nail art or polish color.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Best shape for short natural nails</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Oval is one of the few shapes that looks intentional and polished at very short lengths. Even with barely any free edge, the rounded tip gives a finished look that square or coffin shapes cannot achieve at the same length.
              </p>
            </div>
          </div>

          {/* Long oval nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Long Oval Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Long oval nails extend 8 mm or more past the fingertip. At this length, the oval shape creates a dramatically elongated silhouette that is elegant and feminine without the fragility of stiletto or almond. The rounded tip distributes stress more evenly than a tapered point, making long oval nails more durable than long almond or stiletto nails at the same length.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Natural nails at this length are prone to breaking unless the nails are naturally strong and thick. Most people use acrylic or hard gel extensions to achieve long oval nails reliably. Gel-x soft gel tips can also be shaped into an oval at medium lengths without filing.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Long oval nails at a salon cost $40 to $80 for a full acrylic set, depending on location and nail art. Fills every 2 to 3 weeks run $25 to $50 to maintain the shape and rebalance the growth.
            </p>
          </div>

          {/* Oval nail designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Oval Nail Designs and Ideas</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The oval shape is one of the most versatile canvases for nail design because the rounded tip works with classic and modern styles equally well. Here are the most popular oval nail design ideas.
            </p>
            <div className="space-y-4 mt-4">
              {designIdeas.map((idea) => (
                <div
                  key={idea.name}
                  className="p-4 rounded-lg border"
                  style={{ background: "#F8FBFF", borderColor: "#E2EAF4" }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: "#1E293B" }}>{idea.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{idea.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best colors for oval nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Best Colors for Oval Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval nails work with virtually every polish color, but certain shades emphasize the shape's strengths: elongating wide nail beds and creating a polished, classic look.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Color</th>
                    <th className="text-left px-4 py-2 font-semibold">Why it works on oval</th>
                    <th className="text-left px-4 py-2 font-semibold">Popularity</th>
                  </tr>
                </thead>
                <tbody>
                  {colorRows.map(([color, why, popularity], i) => (
                    <tr key={color} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{color}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{why}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{popularity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to file */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to File Oval Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval nails are one of the easier shapes to file because you are following the natural curve of the nail rather than creating an angular shape. A medium-grit file (180 to 220 grit) works well for natural nails. For acrylics, use a 150 grit file to remove material, then finish with a fine file.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              {filingSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              Always file in one direction, not back and forth. Sawing creates micro-tears along the nail edge that lead to peeling and splitting over time. One-directional strokes produce a smoother, stronger edge that holds polish better.
            </p>
          </div>

          {/* Oval nail acrylic */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Oval Acrylic and Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval acrylic nails are a popular salon service for anyone who wants more length or strength than natural nails can provide. Acrylic is applied to the natural nail or over a nail tip, then filed into the oval shape before a top coat is applied. The finished nail has the rounded oval outline with the added durability of the acrylic structure.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Oval gel nails, including gel-x soft gel extensions, can also be shaped into an oval. Soft gel tips from brands like Aprés Nail come pre-shaped and can be trimmed and filed into an oval at medium lengths. Hard gel extensions offer more customization for longer oval shapes.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The cost of oval acrylic nails at a salon ranges from $35 to $70 for a full set, with fills running $20 to $45 every 2 to 3 weeks. Oval gel-x sets run $50 to $90 at most salons.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-b pb-5" style={{ borderColor: "#E2EAF4" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#1E293B" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related content */}
      <section className="py-10 px-4" style={{ background: "#F8FBFF" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1E293B" }}>Related Nail Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/what-are/what-are-nail-shapes/", label: "All Nail Shapes Explained" },
              { href: "/what-are/what-are-almond-shaped-nails/", label: "What Are Almond Nails?" },
              { href: "/what-are/what-are-coffin-nails/", label: "What Are Coffin Nails?" },
              { href: "/what-are/what-are-square-nails/", label: "What Are Square Nails?" },
              { href: "/what-are/what-are-french-tip-nails/", label: "French Tip Nails" },
              { href: "/how-to/how-to-shape-nails/", label: "How To Shape Nails" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 transition-colors"
                style={{ background: "#fff", borderColor: "#E2EAF4" }}
              >
                <span className="text-sm font-medium" style={{ color: "#046BD2" }}>{label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/category/what-are"
              className="text-sm font-semibold hover:underline"
              style={{ color: "#046BD2" }}
            >
              Browse all nail guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
