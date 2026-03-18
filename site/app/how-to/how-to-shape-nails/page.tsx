import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Shape Nails: Step-by-Step Guide for Every Shape",
  description:
    "Learn how to shape your nails at home with this step-by-step guide. Covers square, round, oval, almond, coffin, and stiletto shapes with tools, techniques, and tips.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-shape-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-shape-nails/",
    title: "How To Shape Nails: Step-by-Step Guide for Every Shape",
    description:
      "Learn how to shape your nails at home with this step-by-step guide. Covers square, round, oval, almond, coffin, and stiletto shapes with tools, techniques, and tips.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    { "@type": "ListItem", position: 3, name: "How To Shape Nails", item: "https://shenailsalon.com/how-to/how-to-shape-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Shape Nails: Step-by-Step Guide for Every Shape",
  description:
    "A complete guide on how to shape your nails at home, covering every nail shape, the right tools, and filing techniques to avoid splits and breakage.",
  url: "https://shenailsalon.com/how-to/how-to-shape-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-shape-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you shape your nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To shape your nails at home: (1) Trim to roughly the length you want using nail clippers. (2) Use a 180 to 240 grit file to refine the shape, always filing in one direction from the outer edge toward the center. (3) Smooth any rough edges with a fine-grit buffer. Filing in one direction prevents splitting and fraying the nail edge.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shape is easiest to maintain at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Square and round are the easiest shapes to maintain at home. Square nails have a flat tip you file straight across, and round nails simply follow the natural curve of the fingertip. Both shapes are forgiving if your filing is slightly uneven. Almond and coffin shapes require more precision because the tapered sides need to be symmetrical.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best nail file grit for shaping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a 180 to 240 grit file for shaping natural nails. Coarser grits (80 to 150) remove material faster but are too harsh for natural nails and can cause splitting. Finer grits (320 and above) are for finishing and buffing, not shaping. Emery boards work for natural nails but glass files last longer and give a smoother result.",
      },
    },
    {
      "@type": "Question",
      name: "Should you file nails wet or dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "File nails dry. Wet nails are softer and more prone to tearing and splitting when filed. Even a brief soak makes nails temporarily weaker. Wait until nails are completely dry after washing hands or showering before filing.",
      },
    },
    {
      "@type": "Question",
      name: "How do you file nails without them splitting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "File in one direction only, from the outer edge toward the center, using light, smooth strokes. Never saw back and forth. Use a fine-grit file (180 to 240) on natural nails. Sawing back and forth creates micro-tears in the nail edge that lead to splitting and peeling.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shapes are there?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main nail shapes are: square (flat tip, straight sides), round (flat base, curved tip), oval (tapered sides, rounded tip), squoval (square with softened corners), almond (tapered sides, pointed oval tip), coffin or ballerina (tapered sides, flat tip), and stiletto (sharply tapered to a point). Square, round, and squoval work best for shorter nails. Almond, coffin, and stiletto require more length.",
      },
    },
  ],
};

const tools = [
  { item: "Nail clippers", note: "For trimming length before filing; use a straight-edge clipper for square shapes" },
  { item: "180 to 240 grit nail file", note: "The standard grit for shaping natural nails without causing splits" },
  { item: "Glass nail file", note: "Optional but gives a smoother edge than emery boards and lasts much longer" },
  { item: "Nail buffer (fine grit, 800+)", note: "For smoothing and finishing the shaped edge after filing" },
  { item: "Cuticle pusher", note: "Useful for keeping the nail base clean and the shape visible while filing" },
];

const shapes = [
  {
    name: "Square",
    best: "Short to medium length nails",
    how: "File the tip straight across so it is flat and perpendicular to the sides. Then file the sides straight and parallel. The result should be a 90-degree corner at each side of the tip.",
    note: "The most durable shape because the tip is flat. Strong for shorter nails and works well for people who type a lot.",
  },
  {
    name: "Round",
    best: "Short nails, natural look",
    how: "File the sides at a slight inward angle following the natural curve of the fingertip. The tip should mirror the curved line of the cuticle.",
    note: "The easiest shape to file. Forgiving if slightly asymmetrical. Good for people new to shaping their own nails.",
  },
  {
    name: "Squoval",
    best: "Short to medium length nails",
    how: "File the tip straight across like a square, then slightly round off the corners with a few light strokes. The tip stays mostly flat but without sharp corners.",
    note: "The most popular shape because it combines the strength of square with the softer look of round.",
  },
  {
    name: "Oval",
    best: "Medium to long nails",
    how: "File both sides toward the center at a gentle angle, then round off the tip smoothly. The nail should taper slightly toward the tip but end in a rounded point.",
    note: "Elegant and elongating. Requires some length to look intentional rather than uneven.",
  },
  {
    name: "Almond",
    best: "Medium to long nails",
    how: "File both sides toward the center at a steeper angle than oval. The tip narrows to a soft point, like the shape of an almond. The tip should not be truly sharp.",
    note: "Looks dramatic and lengthening. Requires more length to achieve. More fragile than square or round.",
  },
  {
    name: "Coffin / Ballerina",
    best: "Long nails (usually acrylic or gel)",
    how: "File both sides steeply toward the center to create a tapered shape, then file the tip flat across to create a squared-off end. The sides taper but the tip is flat, like a coffin.",
    note: "Requires significant length. Almost always done on acrylic or gel extensions because natural nails rarely have enough length.",
  },
  {
    name: "Stiletto",
    best: "Long nails (usually acrylic or gel)",
    how: "File both sides steeply toward a sharp center point. The filing angle is steep and the tip comes to a true point.",
    note: "The most fragile shape. Almost always done on acrylics. Natural nails will break at this length and shape.",
  },
];

const steps = [
  {
    num: 1,
    title: "Start with dry nails",
    body: "File nails when they are completely dry. Wet or recently soaked nails are softer and split more easily under a file. If you just washed your hands, wait a few minutes.",
  },
  {
    num: 2,
    title: "Trim to rough length",
    body: "Use nail clippers to trim off most of the excess length if needed. Clip straight across for square shapes. For rounded shapes, clip in two or three cuts that follow the natural curve. Leave yourself extra length to refine with the file, since you can always file more off but cannot put length back.",
  },
  {
    num: 3,
    title: "Choose your shape",
    body: "Decide which shape you want before you start filing. Square and squoval are the most forgiving. Round is the easiest to file. Oval and almond require more symmetry and length. Coffin and stiletto require significant length and are usually done on extensions.",
  },
  {
    num: 4,
    title: "File in one direction",
    body: "Hold the file at a slight angle under the free edge of the nail. Move the file from the outer corner toward the center in one smooth stroke. Lift the file, return to the outer edge, and repeat. Never saw back and forth. Sawing creates micro-tears in the nail edge that cause peeling and splitting over time.",
  },
  {
    num: 5,
    title: "File both sides evenly",
    body: "File the left side, then the right side, checking that the shape is symmetrical after every few strokes. Hold your hand out flat and look straight down at the nail to check the shape from above. Rotate your hand to check the profile. Uneven shaping usually comes from filing one side more than the other without stopping to check.",
  },
  {
    num: 6,
    title: "Shape the tip",
    body: "For square shapes, file the tip straight across until flat. For round and oval, blend the sides into the tip curve with smooth arcing strokes. For almond, file toward a gentle center point. Check that the left and right sides are mirrored by looking at the nail straight on.",
  },
  {
    num: 7,
    title: "Smooth the edge",
    body: "Switch to a fine-grit buffer and run it lightly along the filed edge to remove any roughness or micro-burrs. This step prevents the nail edge from catching on fabric and reduces the chance of a split starting at the filed edge.",
  },
  {
    num: 8,
    title: "Repeat on all nails and check consistency",
    body: "Shape all ten nails, then hold your hands side by side with fingers spread to compare. Check that both hands are symmetric. Look for any nails that are slightly longer, shorter, or shaped differently. Make any final corrections now before polishing.",
  },
];

const mistakes = [
  { mistake: "Filing back and forth", fix: "File in one direction only, from outer edge toward center, to prevent splitting." },
  { mistake: "Filing wet nails", fix: "Wait until nails are fully dry. Wet nails are soft and tear easily under a file." },
  { mistake: "Using too coarse a grit", fix: "Use 180 to 240 grit for natural nails. Coarser grits (80 to 150) are for acrylics, not natural nails." },
  { mistake: "Not checking symmetry", fix: "Stop and look at the nail from directly above every few strokes. Comparing left and right prevents uneven shapes." },
  { mistake: "Skipping the buffer", fix: "A rough edge after filing is where splits start. Always finish with a fine buffer to seal the edge." },
  { mistake: "Trying coffin or stiletto on natural nails", fix: "These shapes require length and thickness that most natural nails cannot sustain. Use them on extensions." },
];

export default function HowToShapeNailsPage() {
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
            <span>How To Shape Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Shape Your Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A complete guide to shaping nails at home, covering every nail shape, the right tools and grits, step-by-step technique, and the most common mistakes that cause splitting. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Tools */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Tools You Need</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              You do not need much. A decent nail file is more important than the brand. The grit matters more than anything else.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Tool</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map(({ item, note }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nail shapes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Shapes: What They Look Like and How to File Them</h2>
            <p className="leading-relaxed mb-5" style={{ color: "#707070" }}>
              The shape you choose depends on your nail length, how active your hands are, and your preference for how dramatic the look is. Shorter nails have fewer options. Longer nails give you more choices.
            </p>
            <div className="space-y-5">
              {shapes.map((shape) => (
                <div
                  key={shape.name}
                  className="rounded-xl border border-gray-100 p-5"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)", borderLeft: "3px solid #046BD2" }}
                >
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1E293B" }}>{shape.name}</h3>
                  <p className="text-xs mb-2 font-medium" style={{ color: "#046BD2" }}>Best for: {shape.best}</p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "#707070" }}><span className="font-semibold" style={{ color: "#334155" }}>How to file: </span>{shape.how}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#707070" }}>{shape.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>How To Shape Your Nails: Step by Step</h2>
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

          {/* Filing direction section */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Why Filing Direction Matters</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Filing back and forth, also called sawing, is the most common shaping mistake. When you saw, the file creates friction in both directions on the nail edge. This generates micro-tears in the keratin layers that eventually turn into visible splits and peeling.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Filing in one direction, from the outer edge toward the center, keeps the nail edge smooth. It takes a little longer but the result lasts much longer without breakage. Use short, light strokes rather than long, hard ones. You have more control with shorter strokes, and control matters more than speed.
            </p>
          </div>

          {/* What grit to use */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Which Nail File Grit to Use</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Grit Range</th>
                    <th className="text-left px-4 py-2 font-semibold">Use</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grit: "80 to 150", use: "Acrylic and gel extensions", notes: "Too coarse for natural nails. Will cause shredding and splitting on natural nail edges." },
                    { grit: "180 to 240", use: "Natural nail shaping", notes: "The standard grit. Removes material efficiently without damaging natural nails." },
                    { grit: "240 to 320", use: "Light shaping, finishing", notes: "Good for minor adjustments and smoothing after shaping." },
                    { grit: "320 to 600", use: "Buffing and smoothing", notes: "Not for shaping. Used to smooth ridges on the nail surface before polish." },
                    { grit: "800+", use: "Finishing and shine buffing", notes: "Creates a natural shine on the nail surface without polish." },
                  ].map(({ grit, use, notes }, i) => (
                    <tr key={grit} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{grit}</td>
                      <td className="px-4 py-2" style={{ color: "#1E293B" }}>{use}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Common Nail Shaping Mistakes</h2>
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

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Shaping Nails</h2>
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
                { title: "How To Paint Your Nails", href: "/how-to/how-to-paint-nails/" },
                { title: "How To File Nails Correctly", href: "/how-to/how-to-file-nails/" },
                { title: "How To Fix a Broken Nail", href: "/how-to/how-to-fix-a-broken-nail/" },
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
