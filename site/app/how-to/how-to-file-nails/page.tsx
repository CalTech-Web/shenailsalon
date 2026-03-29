import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To File Nails: The Right Way to File Without Splitting",
  description:
    "Learn how to file nails correctly at home. Covers the right direction, best grit for natural nails, how to avoid splitting, and step-by-step technique for every nail type.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-file-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-file-nails/",
    title: "How To File Nails: The Right Way to File Without Splitting",
    description:
      "Learn how to file nails correctly at home. Covers the right direction, best grit for natural nails, how to avoid splitting, and step-by-step technique for every nail type.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How To File Nails",
      item: "https://shenailsalon.com/how-to/how-to-file-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To File Nails: The Right Way to File Without Splitting",
  description:
    "A complete guide on how to file nails correctly, covering direction, grit selection, file types, step-by-step technique, and how to file natural, acrylic, and gel nails.",
  url: "https://shenailsalon.com/how-to/how-to-file-nails/",
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
  dateModified: "2026-03-29",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-file-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which direction should you file your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always file in one direction, from the outer edge toward the center of the nail tip. Never saw back and forth. Sawing creates friction in both directions and causes micro-tears in the nail edge that lead to splits and peeling. One-directional strokes keep the nail edge smooth and intact.",
      },
    },
    {
      "@type": "Question",
      name: "Should you file nails wet or dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "File nails dry. Wet nails are temporarily softer because water absorbs into the keratin layers and makes them more pliable. Filing wet nails tears the edge rather than cutting it cleanly, which leads to fraying and splitting. Wait until your nails are completely dry after washing or showering.",
      },
    },
    {
      "@type": "Question",
      name: "What grit nail file should I use for natural nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a 180 to 240 grit file for natural nails. This range removes material efficiently without causing shredding or splits. Coarser grits (80 to 150) are designed for acrylic extensions and are too aggressive for natural nails. Finer grits (320 and above) are for buffing the surface, not shaping the edge.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file my nails without them splitting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To prevent splits when filing: (1) File dry nails only. (2) File in one direction from the outer edge toward the center. (3) Use a 180 to 240 grit file for natural nails. (4) Finish with a fine buffer to smooth the edge. (5) Keep nails moisturized with cuticle oil so the keratin stays flexible rather than brittle.",
      },
    },
    {
      "@type": "Question",
      name: "Can you file acrylic nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can file acrylic nails at home to adjust shape and smooth edges. Use a coarser file (100 to 150 grit) for shaping acrylics, since the material is harder than natural nails. Avoid filing so aggressively that you break through the acrylic layer into the natural nail beneath. One-directional filing still applies.",
      },
    },
    {
      "@type": "Question",
      name: "How often should you file your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "File natural nails as needed when the shape grows out or a rough edge appears, typically every one to two weeks. There is no fixed schedule. Filing too frequently thins the nail edge over time. For acrylics and gel extensions, file only to maintain shape between fills, not as a regular routine.",
      },
    },
  ],
};

const fileTypes = [
  {
    type: "Emery board",
    grit: "100 to 240",
    best: "Natural nails",
    notes:
      "The most widely available type. Inexpensive and easy to find. Disposable after a few uses as the grit wears down. Works well for standard shaping.",
  },
  {
    type: "Glass (crystal) file",
    grit: "240 to 400",
    best: "Natural nails",
    notes:
      "Seals the nail edge as it files rather than fraying it. Lasts for years with proper care. Rinse and air dry after use. The best choice for thin or brittle natural nails.",
  },
  {
    type: "Metal file",
    grit: "Varies (rough)",
    best: "Avoid for natural nails",
    notes:
      "Very aggressive. Designed for thick toenails or artificial extensions. Causes shredding and damage on natural fingernails.",
  },
  {
    type: "Acrylic file",
    grit: "80 to 150",
    best: "Acrylic extensions",
    notes:
      "Coarse enough to shape hardened acrylic product. Too aggressive for natural nails. Use only on artificial enhancements.",
  },
  {
    type: "Buffer block",
    grit: "180 to 1000+",
    best: "Finishing and smoothing",
    notes:
      "Multi-sided blocks with progressively finer grits. Used after shaping to smooth ridges on the nail surface and create shine. Not designed for edge shaping.",
  },
];

const steps = [
  {
    num: 1,
    title: "Start with dry, clean nails",
    body: "Make sure nails are completely dry before filing. Even a brief soak from washing hands softens keratin temporarily. Filing wet nails shreds the edge instead of smoothing it. If you just washed your hands, wait five minutes.",
  },
  {
    num: 2,
    title: "Clip off excess length first",
    body: "If you need to remove significant length, clip first with nail clippers. Filing off a lot of length takes much longer than clipping and creates more heat and friction. Clip to within 1 to 2 mm of your desired length, then refine the shape with the file.",
  },
  {
    num: 3,
    title: "Choose your grit",
    body: "For natural nails, use a 180 to 240 grit file. For acrylics, use 100 to 150 grit. For gel, use 180 grit. Using too coarse a grit on natural nails is one of the most common causes of edge splitting.",
  },
  {
    num: 4,
    title: "Hold the file at a slight angle under the free edge",
    body: "Tilt the file slightly under the free edge of the nail rather than holding it flat against the tip. This angle helps bevel the edge slightly, which makes the edge stronger and smoother. Flat filing can leave a blunt edge that chips more easily.",
  },
  {
    num: 5,
    title: "File in one direction only",
    body: "Move the file from the outer corner of the nail toward the center in one smooth stroke. Lift the file completely, return it to the outer edge, and repeat. Never drag it back in the opposite direction. File one side of the nail until you are satisfied with the shape, then do the other side the same way.",
  },
  {
    num: 6,
    title: "Check symmetry from above",
    body: "Hold your hand flat and look straight down at the nail from above every few strokes. This is the clearest view of whether both sides are even. Rotate your hand to check the profile too. Fix any imbalance now rather than after all nails are done.",
  },
  {
    num: 7,
    title: "Shape the tip",
    body: "For a square shape, file the tip straight across until it is flat and perpendicular to the sides. For round or oval, use light arcing strokes to blend the sides into a smooth curve at the tip. For almond, angle both sides toward a soft central point.",
  },
  {
    num: 8,
    title: "Smooth the edge with a fine buffer",
    body: "After shaping, run a fine-grit buffer (320 grit or finer) lightly along the filed edge. This removes micro-burrs the shaping file leaves behind. A rough edge is where splits start. Smoothing takes 10 seconds per nail and makes a noticeable difference in how long the shape lasts.",
  },
  {
    num: 9,
    title: "Apply cuticle oil and repeat on all nails",
    body: "Cuticle oil keeps the keratin flexible, which makes nails less likely to split after filing. Apply a small amount to each nail and the surrounding skin after you finish all ten nails. Compare both hands side by side to confirm consistency before applying polish.",
  },
];

const nailTypeGuide = [
  {
    type: "Natural nails",
    grit: "180 to 240",
    direction: "One direction only",
    tips: "File dry. Use a glass file for thin or brittle nails. Smooth with a buffer after shaping. Avoid metal files entirely.",
  },
  {
    type: "Gel nails",
    grit: "180 to 240",
    direction: "One direction only",
    tips: "Light pressure only. Filing gel too aggressively can break through the gel layer. Use filing only to refine shape between fills, not to remove the product.",
  },
  {
    type: "Acrylic nails",
    grit: "100 to 150 (shaping), 180 to 240 (finishing)",
    direction: "One direction only",
    tips: "Acrylic is harder than natural nails and requires a coarser grit to shape efficiently. Do not file so deep that you expose the natural nail beneath the acrylic.",
  },
  {
    type: "Press-on nails",
    grit: "240",
    direction: "One direction only",
    tips: "File the tip and sides only. Avoid filing near the base where press-ons attach. Use a finer grit since press-ons are thinner than acrylics.",
  },
];

const mistakes = [
  {
    mistake: "Sawing back and forth",
    fix: "File in one direction from outer edge to center. Lift the file completely between each stroke.",
  },
  {
    mistake: "Filing wet nails",
    fix: "Wait until nails are fully dry. Even recently washed hands can be wet enough to cause fraying.",
  },
  {
    mistake: "Using too coarse a grit on natural nails",
    fix: "Use 180 to 240 grit for natural nails. Save 80 to 150 grit for acrylics and extensions.",
  },
  {
    mistake: "Skipping the buffer after shaping",
    fix: "Always finish with a fine buffer to seal the edge. This removes micro-burrs that lead to splits.",
  },
  {
    mistake: "Filing too aggressively",
    fix: "Use light, controlled strokes. Hard pressure removes too much material at once and makes it harder to get an even shape.",
  },
  {
    mistake: "Filing only one side",
    fix: "File both sides evenly and check symmetry from above regularly. Uneven filing usually comes from working one side more without checking.",
  },
];

export default function HowToFileNailsPage() {
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
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/category/how-to" style={{ color: "#046BD2" }} className="hover:underline">
              How To
            </Link>
            <span className="mx-2">/</span>
            <span>How To File Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To File Nails Correctly
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A complete guide to filing nails at home: the right direction, the best grit for every nail type, a
            step-by-step technique, and the most common mistakes that cause splitting and fraying. Written by Nancy
            Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* The one rule */}
          <div
            className="rounded-xl p-5 border"
            style={{ background: "#EBF4FF", borderColor: "rgba(4,107,210,0.25)" }}
          >
            <h2 className="text-lg font-bold mb-2" style={{ color: "#046BD2" }}>
              The most important rule
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
              File in <strong>one direction only</strong>, from the outer edge toward the center of the nail tip.
              Never saw back and forth. This single rule prevents the majority of nail splits, fraying, and edge
              peeling that come from filing.
            </p>
          </div>

          {/* File types */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>
              Types of Nail Files
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Not all nail files are the same. The type and grit you choose matters as much as your technique.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">File Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Grit</th>
                    <th className="text-left px-4 py-2 font-semibold">Best For</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {fileTypes.map(({ type, grit, best, notes }, i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{grit}</td>
                      <td className="px-4 py-2" style={{ color: "#1E293B" }}>{best}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step by step */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>
              How To File Nails: Step by Step
            </h2>
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
                    <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filing direction deep dive */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>
              Why Filing Direction Matters
            </h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nails are made of keratin, a fibrous protein arranged in overlapping layers. When you file in one
              direction, the file smoothly trims the outermost keratin layers at the edge. When you saw back and forth,
              the friction from both directions creates micro-tears in those layers. Those micro-tears are invisible at
              first, but within days they become visible splits and peeling at the nail edge.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              One-directional filing takes slightly longer per nail, but the edge it creates lasts days longer than a
              sawed edge. Use short, light strokes. You have more control with shorter strokes, which results in a more
              symmetrical shape. Long, aggressive strokes remove too much material at once and make it harder to correct
              unevenness.
            </p>
          </div>

          {/* Filing by nail type */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>
              How To File Different Nail Types
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The technique is the same for all nail types, but the grit and pressure differ. Using the wrong grit is
              the most common mistake when switching between natural nails and enhancements.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Nail Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Grit</th>
                    <th className="text-left px-4 py-2 font-semibold">Direction</th>
                    <th className="text-left px-4 py-2 font-semibold">Key Tips</th>
                  </tr>
                </thead>
                <tbody>
                  {nailTypeGuide.map(({ type, grit, direction, tips }, i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{grit}</td>
                      <td className="px-4 py-2" style={{ color: "#1E293B" }}>{direction}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{tips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Wet vs dry */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>
              Wet vs. Dry: When to File
            </h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail keratin is hygroscopic, meaning it absorbs water. After a soak, shower, or even washing your hands,
              nails temporarily absorb moisture and become softer and more pliable. Softer nails do not hold up well
              under a file. The file bends and tears the softened keratin at the edge instead of trimming it cleanly.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Wait until your nails are fully dry and firm before filing. In practice this means waiting at least five
              minutes after washing your hands, and at least 20 to 30 minutes after a shower or bath. The nails will
              feel harder and less flexible when they are dry, which is when they are safest to file.
            </p>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>
              Common Nail Filing Mistakes
            </h2>
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
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>
              Frequently Asked Questions About Filing Nails
            </h2>
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
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related articles */}
          <div className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>
              Related Nail Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "How To Shape Nails", href: "/how-to/how-to-shape-nails/" },
                { title: "How To Keep Nails Healthy", href: "/how-to/how-to-keep-nails-healthy/" },
                { title: "How To Fix a Broken Nail", href: "/how-to/how-to-fix-a-broken-nail/" },
                { title: "How To Strengthen Nails", href: "/how-to/how-to-strengthen-nails/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg p-3 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
                >
                  <p className="font-medium text-sm" style={{ color: "#1E293B" }}>
                    {link.title}
                  </p>
                  <span
                    className="ml-auto text-xs group-hover:translate-x-0.5 transition-transform"
                    style={{ color: "#046BD2" }}
                  >
                    →
                  </span>
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
