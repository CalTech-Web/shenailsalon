import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Shapes: Every Shape Explained, Compared & How to Choose",
  description:
    "A complete guide to every nail shape, from square and oval to coffin, stiletto, and almond. Learn which shape suits your finger type, how long each lasts, and how to file each shape at home.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-nail-shapes/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-nail-shapes/",
    title: "Nail Shapes: Every Shape Explained, Compared & How to Choose",
    description:
      "A complete guide to every nail shape, from square and oval to coffin, stiletto, and almond. Learn which shape suits your finger type, how long each lasts, and how to file each shape at home.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Nail Shapes", item: "https://shenailsalon.com/what-are/what-are-nail-shapes/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nail Shapes: Every Shape Explained, Compared & How to Choose",
  description:
    "A complete guide to every nail shape. Covers square, round, oval, almond, coffin, stiletto, squoval, and more. Includes comparison tables, finger type recommendations, and filing instructions.",
  url: "https://shenailsalon.com/what-are/what-are-nail-shapes/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-nail-shapes/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What nail shape is most popular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular nail shapes are almond, coffin, and oval. Almond nails are consistently the top-requested shape at nail salons because they elongate the fingers, look feminine, and work well at medium and long lengths. Coffin (also called ballerina) nails became widely popular in the 2010s and remain a favorite for longer nail extensions. Square is the most practical choice for short nails and remains popular for its clean, modern look.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shape makes fingers look longer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oval, almond, and stiletto shapes all make fingers look longer because the tapered sides draw the eye vertically. Oval is the most flattering for short and wide nail beds. Almond adds even more visual length because the tip tapers more dramatically. Stiletto creates the most elongating effect but requires longer nail length to achieve. Round nails also help short fingers look longer, especially when kept at medium length. Avoid square or squoval shapes if your goal is to elongate your fingers, as the straight sides emphasize width.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shape is the strongest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Round and oval nail shapes are the strongest because they have no sharp corners or points that can catch on surfaces and snap. Square nails are moderately strong but the corners are the first place a nail breaks. Coffin and stiletto shapes are the most fragile because the tapered narrow tip has very little surface area to absorb impact. For people who do a lot of manual work or have brittle nails, round or short oval shapes hold up the longest.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shape is best for short nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Round, oval, and squoval shapes work best for short nails. Round softens the appearance of wide nail beds and is easy to maintain. Oval elongates even very short nails by tapering the sides. Squoval (a square-oval hybrid) is a practical middle ground that looks neat and tidy at short lengths. Coffin and almond shapes require at least medium length to look proportional. Stiletto is not achievable on short natural nails.",
      },
    },
    {
      "@type": "Question",
      name: "What is a squoval nail shape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A squoval nail is a hybrid shape that combines square and oval. The sides are filed straight like a square nail, but the corners are rounded off instead of kept sharp. The result is a shape that has the clean, flat top of a square nail but without the sharp corners that tend to catch and break. Squoval is one of the most practical everyday nail shapes because it looks polished, is easy to file at home, and works well at short, medium, and medium-long lengths.",
      },
    },
    {
      "@type": "Question",
      name: "How do you choose the right nail shape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose your nail shape based on three factors: nail length, nail bed width, and lifestyle. For short nails, choose round, oval, or squoval. For medium nails, almond, coffin, and oval all work well. For long nails, stiletto and coffin are achievable. For wide nail beds, almond and oval are the most flattering. For narrow nail beds, square and squoval look proportional. For active lifestyles with hands-on work, round and oval are the most durable. If you want length extension via acrylic or gel, coffin and almond are the most commonly requested at nail salons.",
      },
    },
  ],
};

const shapesTable = [
  ["Square", "Straight sides, flat top with sharp 90-degree corners", "Short to medium", "Any", "Modern, clean, retro"],
  ["Round", "Straight sides that curve gently into a rounded tip", "Short to medium", "Wide nail beds", "Classic, low-maintenance"],
  ["Oval", "Tapered sides with a smooth egg-shaped tip", "Short to long", "Wide or standard", "Feminine, elongating"],
  ["Almond", "Slender tapered sides meeting a soft point, like an almond", "Medium to long", "Most finger types", "Elegant, most popular"],
  ["Coffin / Ballerina", "Tapered sides with a flat, squared-off tip", "Long", "Longer fingers", "Dramatic, high fashion"],
  ["Stiletto / Pointed", "Sharply tapered to a narrow point", "Long (usually extensions)", "Longer fingers", "Bold, edgy, high risk"],
  ["Squoval", "Straight sides with gently rounded corners", "Short to medium-long", "Most finger types", "Practical, versatile"],
  ["Flare / Duck", "Wider at the tip than the base, fan-shaped", "Medium to long", "Wide nail beds", "Retro, statement"],
  ["Lipstick / Arabesque", "One side angled diagonally for an asymmetric slant", "Medium to long", "Adventurous wearers", "Artistic, editorial"],
  ["Edge / Arrowhead", "Angular geometric shape, like a V or pointed diamond", "Medium to long", "Nail art enthusiasts", "Geometric, avant-garde"],
];

const fingerTypeTable = [
  ["Short, wide fingers", "Oval or almond", "Tapered sides create the illusion of length and narrow the nail bed visually"],
  ["Long, slim fingers", "Square or coffin", "Flat tops balance the length and add width; most shapes work well"],
  ["Short, slim fingers", "Round or squoval", "These shapes are proportional and look natural on short lengths"],
  ["Average fingers", "Any shape", "Most shapes are flattering; choose based on lifestyle and preference"],
  ["Wide nail beds", "Almond, oval, or stiletto", "Narrowing shapes minimize the appearance of nail bed width"],
  ["Narrow nail beds", "Square, round, or squoval", "Straight or gently curved shapes keep the nail looking proportional"],
];

const filingSteps: Record<string, string[]> = {
  Square: [
    "File the sides straight using the nail file held perpendicular to the nail edge.",
    "File the tip flat by holding the nail file parallel to the fingertip.",
    "Check that both corners are even and at 90-degree angles.",
    "Smooth sharp corners very slightly with one swipe of the file if desired for a softened square.",
  ],
  Round: [
    "File both sides straight to create parallel edges.",
    "File the tip from each corner toward the center in smooth arcing strokes.",
    "Check that the tip follows a smooth curve matching the shape of your fingertip.",
    "Buff lightly to remove any roughness.",
  ],
  Oval: [
    "File both sides at a slight inward angle to narrow the nail.",
    "File the tip in long, sweeping strokes from the sides toward the center.",
    "The tip should end in a smooth, elongated curve, not a point.",
    "Check both sides are symmetrical before buffing.",
  ],
  Almond: [
    "File both sides inward more aggressively than for oval, creating a narrower silhouette.",
    "File the tip so it tapers to a soft, slightly pointed tip, not sharp like a stiletto.",
    "Check from the front that the sides are even and the taper is balanced.",
    "Buff any rough edges with a fine-grit file or buffer block.",
  ],
  Coffin: [
    "Requires medium to long nail length or extensions.",
    "File both sides inward at a consistent angle so they taper toward the tip.",
    "File the tip flat and squared off, parallel to the base of the nail.",
    "Check that the tapered sides are symmetrical and the flat tip is even across all nails.",
  ],
  Squoval: [
    "File the sides straight using the nail file perpendicular to the edge.",
    "File the tip flat like a square.",
    "Round each corner with two or three light diagonal strokes of the file.",
    "The corners should be smooth but not so rounded that the shape becomes oval.",
  ],
};

const strengthTable = [
  ["Round", "Strongest", "No corners or points to catch on surfaces; ideal for natural nails"],
  ["Oval", "Very strong", "Tapered sides reduce corner breakage; durable at most lengths"],
  ["Squoval", "Strong", "Slightly rounded corners prevent the corner snapping common to square nails"],
  ["Square", "Moderate", "Corners are the weak point; break most often on the sides"],
  ["Almond", "Moderate", "The narrow tip is more vulnerable to breakage than oval"],
  ["Coffin", "Low to moderate", "Narrow flat tip is fragile; works best with acrylics or gel extensions"],
  ["Stiletto", "Lowest", "Sharp tip breaks easily; almost always done on extensions for durability"],
];

export default function NailShapesPage() {
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
            <span>Nail Shapes</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Nail Shapes: Every Shape Explained
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            There are 10 main nail shapes, from the classic square and round to the dramatic stiletto and coffin. Each shape looks different, suits different finger types, and holds up differently depending on how you use your hands. This guide covers every shape, how to choose the right one, and how to file each shape at home. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* All shapes overview */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>All Nail Shapes at a Glance</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail shape refers to the outline of the nail when viewed from the front, not the length. You can have long almond nails or short almond nails, but the shape describes how the sides and tip are filed. Here are the 10 main nail shapes:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Shape</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Best Length</th>
                    <th className="text-left px-4 py-2 font-semibold">Best For</th>
                    <th className="text-left px-4 py-2 font-semibold">Look</th>
                  </tr>
                </thead>
                <tbody>
                  {shapesTable.map(([shape, desc, length, best, look], i) => (
                    <tr key={shape} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{shape}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{desc}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{length}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{best}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{look}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* The most popular shapes explained */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>The Most Popular Nail Shapes Explained</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Square Nails</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Square nails have straight sides and a flat top with sharp 90-degree corners. This is one of the oldest and most recognizable nail shapes, popular in the 1990s and early 2000s and still widely used today. Square nails look especially clean and polished on shorter lengths. They work best on narrow to average nail beds, and the straight edges can make wide nail beds appear even wider. The corners are the main weak point, as they tend to catch on fabrics and break before the rest of the nail.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Round Nails</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Round nails follow the natural curve of the fingertip. The sides are filed straight and then curve into a smooth, semicircular tip. This is the most natural-looking nail shape and the most practical for everyday life. Round nails are the strongest shape because there are no corners to snag and break. They are the go-to choice for people who work with their hands, play instruments, or type frequently. Round nails are especially flattering on wide, short nail beds because the curved tip mimics the natural nail edge and balances the width.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Oval Nails</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Oval nails are the elongated version of round nails. The sides are tapered inward slightly, and the tip curves into a smooth, egg-shaped point. Oval nails are one of the most universally flattering shapes because the tapering creates the illusion of a longer, slimmer finger. I find oval nails look polished and feminine at virtually any length, which is why they remain consistently popular. They are slightly less durable than round nails because the sides taper, but they are still much more resistant to breakage than almond or stiletto shapes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Almond Nails</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Almond nails are the most popular nail shape requested at nail salons. Named after the almond nut, this shape has slender tapered sides that meet at a soft, slightly pointed tip. Almond nails require at least medium length to look proportional, and they are more flattering at longer lengths. The shape is elegant and feminine, elongating the finger more dramatically than oval. Almond nails are moderately fragile because the narrow sides and pointed tip have less structural strength than oval or round shapes. They are best suited to gel or acrylic overlays for durability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Coffin Nails (Ballerina)</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Coffin nails, also called ballerina nails, have tapered sides like almond nails but end in a flat, squared-off tip instead of a point. The shape resembles a ballet slipper or a coffin, depending on your perspective. Coffin nails became one of the most requested shapes in the 2010s, popularized by celebrities and nail artists. They require longer nail length or extensions to achieve and are typically done with acrylic or gel-x for structure. The flat tip is more durable than a stiletto point but still requires more maintenance than oval or round.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Stiletto Nails (Pointed)</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Stiletto nails taper to a sharp, narrow point. This is the most dramatic nail shape available and requires long length, making it almost exclusively done on nail extensions. Stiletto nails are visually striking but fragile, the tip has very little surface area and breaks easily. Most people who wear stiletto nails do so with acrylics, which provide enough rigidity to keep the point intact. The shape is popular for special occasions and editorial nail art but is not practical for everyday wear.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1E293B" }}>Squoval Nails</h3>
                <p className="leading-relaxed" style={{ color: "#707070" }}>
                  Squoval is a combination of square and oval. The sides are filed straight like a square nail, but the corners are gently rounded off instead of left sharp. The result is a clean, flat-topped nail that lacks the fragile corners of a full square shape. Squoval is one of the most practical everyday shapes because it looks neat and professional at short and medium lengths, requires minimal upkeep, and rarely catches on fabric or hair. It is also one of the easiest shapes to maintain at home because it is forgiving to file.
                </p>
              </div>
            </div>
          </div>

          {/* Nail shape by finger type */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Best Nail Shape for Your Finger Type</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Your finger length and nail bed width should influence your shape choice. Here is a guide to which shapes suit each finger type best:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Finger Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Best Shape</th>
                    <th className="text-left px-4 py-2 font-semibold">Why It Works</th>
                  </tr>
                </thead>
                <tbody>
                  {fingerTypeTable.map(([type, shape, reason], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#046BD2", fontWeight: 500 }}>{shape}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              These are guidelines, not rules. Personal style matters more than finger type for most people. If you love coffin nails, wear coffin nails, regardless of your finger shape.
            </p>
          </div>

          {/* Strength by shape */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Which Nail Shape Is Strongest?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Shape affects how easily a nail breaks. Corners and narrow tips are the most common break points. Here is how each shape ranks for durability:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Shape</th>
                    <th className="text-left px-4 py-2 font-semibold">Durability</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {strengthTable.map(([shape, durability, notes], i) => (
                    <tr key={shape} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{shape}</td>
                      <td className="px-4 py-2 font-medium" style={{ color: "#046BD2" }}>{durability}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to file */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to File the Most Common Nail Shapes</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Filing technique is the key to achieving a clean shape at home. Use a fine-grit file (180 to 240 grit) for natural nails, and always file in one direction to prevent splitting. Here is how to file each of the six most popular shapes:
            </p>
            <div className="space-y-5">
              {Object.entries(filingSteps).map(([shape, steps]) => (
                <div key={shape} className="rounded-xl p-5 border border-gray-100" style={{ background: "#F8FBFF" }}>
                  <h3 className="font-semibold text-sm mb-3" style={{ color: "#1E293B" }}>How to File {shape} Nails</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm leading-relaxed" style={{ color: "#707070" }}>
                    {steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              For a full step-by-step guide to filing and shaping, see{" "}
              <Link href="/how-to/how-to-shape-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                How to Shape Nails
              </Link>.
            </p>
          </div>

          {/* Pros and cons by shape */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Choosing the Right Shape for Your Lifestyle</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Best for Active Lifestyles</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Round: strongest, no snag points</li>
                  <li>Oval: durable and feminine</li>
                  <li>Squoval: practical, low-maintenance</li>
                  <li>Short square: clean and break-resistant at short length</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#EFF6FF", borderColor: "#93C5FD" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#1E40AF" }}>Best for Style and Drama</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#1E40AF" }}>
                  <li>Coffin: fashion-forward, works at long lengths</li>
                  <li>Almond: the most popular salon shape</li>
                  <li>Stiletto: bold, works best with extensions</li>
                  <li>Flare or lipstick: artistic and statement-making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nail shape and nail extensions */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Shapes and Nail Extensions</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Some shapes are only achievable with nail extensions because they require more length than most natural nails can grow without breaking. Here is which shapes work on natural nails and which typically require extensions:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Shape</th>
                    <th className="text-left px-4 py-2 font-semibold">Natural Nails?</th>
                    <th className="text-left px-4 py-2 font-semibold">Extensions Needed?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Square", "Yes, at any length", "No"],
                    ["Round", "Yes, at any length", "No"],
                    ["Oval", "Yes, at any length", "No"],
                    ["Squoval", "Yes, at any length", "No"],
                    ["Almond", "Yes, at medium length or longer", "Often helpful for structure"],
                    ["Coffin", "Only if nails grow long naturally", "Usually yes, for length and structure"],
                    ["Stiletto", "Rarely possible", "Almost always yes"],
                    ["Flare / Duck", "Yes, if nails are wide enough", "Sometimes for extra length"],
                  ].map(([shape, nat, ext], i) => (
                    <tr key={shape} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{shape}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{nat}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{ext}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              If you want a shape that requires length you don't have naturally, gel-x, acrylic, or builder gel overlays all allow the nail to be sculpted into the desired shape at a nail salon.
            </p>
          </div>

          {/* FAQ section */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Nail Shapes</h2>
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
                { title: "How to Shape Nails", href: "/how-to/how-to-shape-nails/" },
                { title: "What Are Almond-Shaped Nails?", href: "/what-are/what-are-almond-shaped-nails/" },
                { title: "What Are Coffin Nails?", href: "/what-are/what-are-coffin-nails/" },
                { title: "What Are Ballerina Nails?", href: "/what-are/what-are-ballerina-nails/" },
                { title: "What Are Stiletto Nails?", href: "/what-are/what-are-stiletto-nails/" },
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
                Browse all 50 What Are guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
