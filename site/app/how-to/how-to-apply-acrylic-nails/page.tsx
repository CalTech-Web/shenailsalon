import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Acrylic Nails at Home: Step-by-Step Guide for Beginners",
  description:
    "Learn how to apply acrylic nails at home with this step-by-step guide. Covers supplies, nail tip vs. nail form differences, how to mix the perfect bead, shaping, and common beginner mistakes.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-acrylic-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-acrylic-nails/",
    title: "How To Apply Acrylic Nails at Home: Step-by-Step Guide for Beginners",
    description:
      "Learn how to apply acrylic nails at home with this step-by-step guide. Covers supplies, nail tip vs. nail form differences, how to mix the perfect bead, shaping, and common beginner mistakes.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    { "@type": "ListItem", position: 3, name: "How To Apply Acrylic Nails", item: "https://shenailsalon.com/how-to/how-to-apply-acrylic-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Acrylic Nails at Home: Step-by-Step Guide for Beginners",
  description:
    "A complete guide on how to apply acrylic nails at home, including supplies, nail tip vs. nail form comparison, 12-step application guide, cost breakdown, and common beginner mistakes to avoid.",
  url: "https://shenailsalon.com/how-to/how-to-apply-acrylic-nails/",
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
  dateModified: "2026-03-25",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-acrylic-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply acrylic nails at home step by step?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply acrylic nails at home: (1) Push back and trim your cuticles. (2) File and buff the nail surface to remove shine. (3) Wipe each nail with a dehydrator, then apply nail primer. (4) Glue on a nail tip and blend the seam with a file. (5) Dip your brush into the monomer liquid, then into the acrylic powder to pick up a medium-wet bead. (6) Place the bead near the free edge and pat it into shape, working in three zones: tip, middle, and cuticle. (7) Let the acrylic self-level briefly, then shape it with light brush strokes while it is still workable. (8) Allow to cure fully (2 to 3 minutes). (9) File and shape the set acrylic nail with a 100 to 180 grit file. (10) Buff smooth with a fine buffer. (11) Wipe with a lint-free wipe and apply a gel or regular topcoat.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to apply acrylic nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applying a full set of acrylic nails at home takes 1.5 to 3 hours for beginners. Prep and tip application takes 20 to 30 minutes. Applying acrylic to all ten nails takes 30 to 60 minutes. Filing, buffing, and finishing takes another 20 to 40 minutes. Experienced home users complete a full set in about 60 to 90 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply acrylic nails without nail tips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Without nail tips, you apply acrylic directly over your natural nail as an overlay, or use nail forms to sculpt a free edge extension from scratch. An overlay adds strength and thickness without extra length. Sculpting with nail forms gives you any length you want but is harder to learn than using pre-shaped tips.",
      },
    },
    {
      "@type": "Question",
      name: "What is the correct consistency of an acrylic nail bead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The correct acrylic bead consistency is often called a 'medium-wet' or 'medium' ratio. The bead should hold a dome shape when you place it on the nail but still self-level and flatten slightly within about 30 seconds. A bead that stays stiff and does not move is too dry (and will be chalky and prone to lifting). A bead that spreads out flat immediately is too wet (and will flood the cuticle area and lift quickly). Practice picking up beads of the same size each time to develop consistency.",
      },
    },
    {
      "@type": "Question",
      name: "Is it hard to apply acrylic nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applying acrylic nails at home has a learning curve. The two hardest skills to develop are consistent bead ratios (getting the liquid-to-powder mix right) and keeping acrylic off the cuticle area (which causes lifting). Most beginners produce decent results after 3 to 5 practice sets. Starting with nail tips rather than nail forms and using a step-by-step guide reduces the learning time significantly.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a DIY acrylic nail kit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A beginner acrylic nail kit at home costs $30 to $70 for the initial setup, which includes monomer liquid, acrylic powder, nail tips, tip glue, primer, a brush, a file set, and a buffer. Ongoing supply costs per set are about $3 to $8 in materials. A full set at a salon typically costs $45 to $85, so the kit pays for itself after two to three uses.",
      },
    },
  ],
};

const supplies = [
  { item: "Acrylic monomer liquid", note: "The liquid component that activates the powder and triggers the hardening reaction; store in a sealed bottle away from light" },
  { item: "Acrylic polymer powder", note: "The powder that mixes with monomer to form the acrylic paste; available in clear, pink, and white for different looks" },
  { item: "Nail tips", note: "Pre-shaped plastic extensions glued to the natural nail to add length; easier for beginners than nail forms" },
  { item: "Nail tip glue", note: "Cyanoacrylate adhesive for bonding tips to natural nails; a small drop holds firmly in seconds" },
  { item: "Nail dehydrator", note: "Removes oil and moisture from the nail surface before primer; improves acrylic adhesion" },
  { item: "Acid-free nail primer", note: "Creates a bonding layer between the natural nail and acrylic; key to preventing lifting" },
  { item: "Kolinsky acrylic brush (size 8)", note: "Natural-hair brush that holds the bead well and self-levels acrylic smoothly; nylon brushes work but harder to control" },
  { item: "Coarse nail file (100 to 150 grit)", note: "For buffing the natural nail surface and shaping the set acrylic" },
  { item: "Fine nail buffer (180 to 240 grit)", note: "For smoothing the finished acrylic surface before topcoat" },
  { item: "Cuticle pusher", note: "For pushing back cuticles gently before prep; clean cuticle area prevents lifting" },
  { item: "Nail clippers and scissors", note: "For trimming natural nails short and cutting nail tips to size" },
  { item: "Gel or regular topcoat", note: "Seals and protects the finished acrylic; gel topcoat with UV lamp gives a longer-lasting shine" },
];

const steps = [
  {
    num: 1,
    title: "Trim and prepare your natural nails",
    body: "Cut your natural nails short and file them straight across. Remove any old polish with a non-acetone remover (save the acetone for later). Short natural nails give the nail tip a stable base and reduce the chance of the tip lifting or snapping.",
  },
  {
    num: 2,
    title: "Push back and clean the cuticles",
    body: "Use a cuticle pusher or orange stick to gently push back the cuticle on each nail. Do not cut the cuticle itself, just move it back so you have a clear, clean nail plate to work with. Any acrylic that touches the cuticle will lift within days.",
  },
  {
    num: 3,
    title: "Buff the nail surface",
    body: "Use a fine file (180 grit) to lightly buff the shine off each natural nail. You are not trying to thin the nail, just scuff the surface so the dehydrator and primer have something to grip. One or two light passes over each nail is enough. Wipe away dust with a dry lint-free wipe.",
  },
  {
    num: 4,
    title: "Apply dehydrator, then primer",
    body: "Apply nail dehydrator to all ten nails and let it dry for 30 seconds. It dries quickly and leaves a matte, oil-free surface. Then apply a thin coat of nail primer to each nail and let it go tacky (about 60 seconds). Do not touch the primed nails. Primer is the most important adhesion step and skipping it leads to early lifting.",
  },
  {
    num: 5,
    title: "Select and glue on nail tips",
    body: "Select a nail tip that matches the width of each natural nail. The tip should cover the free edge from side wall to side wall without any overhang. Apply a small drop of tip glue to the well of the tip, press it firmly onto the natural nail at a 45-degree angle, then rock it flat. Hold for 10 seconds. Trim tips to your desired length with a nail cutter.",
  },
  {
    num: 6,
    title: "Blend the nail tip seam",
    body: "There will be a visible ridge where the tip meets the natural nail. Use a coarse file (100 to 150 grit) to file this seam smooth. File at a low angle from the tip toward the cuticle end until the transition is invisible and the surface feels even. Wipe away all dust before applying acrylic.",
  },
  {
    num: 7,
    title: "Pick up your first acrylic bead",
    body: "Dip your brush into the monomer to wet it, then wipe the excess against the inside of the bottle rim so the brush is damp but not dripping. Touch the tip of the brush to the surface of the acrylic powder and pick up a round bead about the size of a small pea. A correct medium-wet bead holds its dome shape but starts to flatten slightly after 15 to 20 seconds. Too dry: stays stiff and rough. Too wet: spreads flat immediately.",
  },
  {
    num: 8,
    title: "Apply acrylic to zone 1 (the free edge)",
    body: "Place the bead near the tip of the nail (the free edge zone). Pat it gently with the belly of the brush to flatten and spread it over the tip and the first third of the nail. Work quickly while the acrylic is still workable, using light patting strokes rather than dragging. Dragging smears the acrylic unevenly.",
  },
  {
    num: 9,
    title: "Apply acrylic to zone 2 (the middle)",
    body: "Pick up a second bead and place it in the middle of the nail plate. Pat and blend it to cover the center third of the nail. This zone should be the thickest point of the acrylic nail (the apex), which gives the nail its structural arch and strength. The apex sits just above where the natural nail ends and the tip begins.",
  },
  {
    num: 10,
    title: "Apply acrylic to zone 3 (near the cuticle)",
    body: "Pick up a smaller, slightly drier bead for the cuticle zone. Place it close to, but not touching, the cuticle. Pat it thin and smooth. This area should be the thinnest part of the nail. Acrylic touching the cuticle will create a pocket that lifts. Leave a hairline gap between the acrylic and the skin.",
  },
  {
    num: 11,
    title: "Let the acrylic cure, then file and shape",
    body: "Allow the acrylic to harden fully before filing. It is ready when you can tap it and hear a solid click, not a soft thud. Use a coarse file to shape the nail to your preferred shape (square, almond, coffin, etc.), then switch to a finer file to smooth all surfaces. Finally, use a buffer to bring the nail to a matte-smooth finish before topcoat.",
  },
  {
    num: 12,
    title: "Apply topcoat and finish",
    body: "Wipe each nail with a lint-free wipe and apply a thin coat of gel or regular topcoat. Cap the free edge (run topcoat across the tip of each nail) to seal the acrylic and prevent chipping. If using a gel topcoat, cure under a UV or LED lamp for 30 to 60 seconds. Apply cuticle oil around each nail to finish.",
  },
];

const tipVsForm = [
  { feature: "Skill level", tips: "Easier for beginners", forms: "Requires more practice" },
  { feature: "Free edge", tips: "Pre-shaped in fixed curves", forms: "Fully customizable length and shape" },
  { feature: "Seam", tips: "Visible seam that must be blended", forms: "No seam — all acrylic" },
  { feature: "Flexibility", tips: "Limited to available tip sizes and shapes", forms: "Any length, any shape" },
  { feature: "Removal", tips: "Tips stay under acrylic (removed with acetone)", forms: "Forms peel off after acrylic sets" },
  { feature: "Cost", tips: "$5 to $15 per 500 tips", forms: "$5 to $20 per 500 forms" },
  { feature: "Best for", tips: "Adding consistent length quickly", forms: "Sculpting competition or custom extensions" },
];

const costRows = [
  { item: "Starter kit (monomer, powder, tips, brush, primer, file set)", cost: "$30 to $60", notes: "One-time purchase; covers 8 to 15 full sets" },
  { item: "Kolinsky acrylic brush (size 8 to 10)", cost: "$15 to $35", notes: "Higher quality = easier bead control; lasts years with cleaning" },
  { item: "Professional monomer (16 oz)", cost: "$10 to $20", notes: "MMA-free formula recommended; covers 20 to 30 full sets" },
  { item: "Materials per full set (DIY)", cost: "$3 to $8", notes: "Once starter supplies are purchased" },
  { item: "Full acrylic set at salon (basic)", cost: "$45 to $65", notes: "Prices vary by city; California salons average $55 to $75" },
  { item: "Full acrylic set at salon (custom/nail art)", cost: "$70 to $120+", notes: "Intricate designs, long lengths, or luxury salons" },
];

const mistakes = [
  { mistake: "Acrylic touching the cuticle", fix: "Leave a hairline gap between the acrylic and the cuticle. Any contact creates a pocket where water and bacteria enter, causing lifting and infection." },
  { mistake: "Bead too wet (flooding)", fix: "Wipe more excess monomer off your brush before picking up the bead. A wet bead spreads uncontrollably and floods into cuticles." },
  { mistake: "Bead too dry (lumpy texture)", fix: "Add a touch more monomer to the brush before picking up the bead. Dry beads set too fast to work with and produce rough, chalky results." },
  { mistake: "Skipping primer or dehydrator", fix: "Both steps are critical for adhesion. Skipping them leads to lifting within a few days, especially on oily nail beds." },
  { mistake: "Filing too hard across the natural nail", fix: "Buffing removes shine, but you should not file aggressively through the natural nail. One to two light passes is enough." },
  { mistake: "Not capping the free edge with topcoat", fix: "Run topcoat across the edge of each nail tip to seal it. Unsealed tips chip and peel much faster." },
];

export default function HowToApplyAcrylicNailsPage() {
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
            <span>How To Apply Acrylic Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Apply Acrylic Nails at Home
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A complete step-by-step guide on how to apply acrylic nails at home, including supplies, the difference between nail tips and nail forms, how to get the right bead consistency, and the beginner mistakes that cause lifting. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Intro */}
          <div>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Applying acrylic nails at home takes practice, but it is genuinely learnable. Most beginners produce a good set after three to five attempts. The two hardest parts are getting the bead consistency right (not too wet, not too dry) and keeping the acrylic off the cuticle area. This guide covers both, plus the prep and finishing steps that determine how long the set lasts.
            </p>
          </div>

          {/* Supplies */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What You Need to Apply Acrylic Nails</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The most important supply decision is your brush. A kolinsky brush (natural sable hair) holds the bead better and gives you more control than a nylon brush. For beginners, a size 8 is a good starting point. Most complete starter kits include everything below for $30 to $60.
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

          {/* Nail tips vs nail forms */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Tips vs Nail Forms: Which Should You Use?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Nail tips are pre-shaped plastic extensions you glue onto the natural nail before applying acrylic. Nail forms are foil or paper guides you fit under the free edge to sculpt acrylic length from scratch. For beginners, nail tips are much easier to work with because the shape is already there. Nail forms require more judgment and take longer to learn.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Nail Tips</th>
                    <th className="text-left px-4 py-2 font-semibold">Nail Forms</th>
                  </tr>
                </thead>
                <tbody>
                  {tipVsForm.map(({ feature, tips, forms }, i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{tips}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{forms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>How To Apply Acrylic Nails: Step by Step</h2>
            <p className="leading-relaxed mb-6" style={{ color: "#707070" }}>
              These steps use the nail tips method, which is the standard approach for beginners. Follow each step in order and allow each product to dry fully before moving to the next.
            </p>
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

          {/* Applying without tips (overlay) */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How To Apply Acrylic Nails Without Nail Tips</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              If you want to strengthen your natural nails without adding length, you can apply acrylic as an overlay directly over your natural nail. Skip steps 5 and 6 in the guide above (tip selection and seam blending) and apply acrylic directly over the prepped natural nail in the same three-zone method.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              An acrylic overlay follows the same prep and application process but stops at the natural free edge. The result is a thicker, stronger natural nail that resists breaking. This is a popular option for people who want the durability of acrylics without the extra length.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              To add length without pre-made tips, use nail forms instead. Fit the form under your free edge to act as a scaffold, sculpt the acrylic extension over it, let it cure, then peel the form away. The result is fully sculpted acrylic with no plastic tip underneath.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Does It Cost To Apply Acrylic Nails at Home vs Salon?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The main cost of DIY acrylics is the starter kit. Once purchased, ongoing supply costs per set are very low. Most kits pay for themselves after two to three uses compared to salon prices.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Item</th>
                    <th className="text-left px-4 py-2 font-semibold">Cost</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(({ item, cost, notes }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2 font-medium" style={{ color: "#046BD2" }}>{cost}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Common Mistakes When Applying Acrylic Nails</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Most beginner problems fall into two categories: lifting (the acrylic separates from the natural nail) and poor bead control. Here are the six most common issues and exactly how to fix them.
            </p>
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

          {/* Ventilation note */}
          <div
            className="rounded-xl p-5 border"
            style={{ background: "#F0F5FA", borderColor: "rgba(4,107,210,0.2)", borderLeft: "4px solid #046BD2" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: "#1E293B" }}>Work in a well-ventilated area</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
              Acrylic monomer has a strong odor and releases fumes during application. Always apply acrylic nails in a room with an open window or active ventilation. Do not apply in an enclosed space. A small desk fan pointed away from you (to carry fumes away from your face rather than toward it) is a simple solution most home users find effective.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Applying Acrylic Nails</h2>
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
                { title: "How To Remove Acrylic Nails", href: "/how-to/how-to-remove-acrylic-nails/" },
                { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
                { title: "What Are Nail Shapes?", href: "/what-are/what-are-nail-shapes/" },
                { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
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
