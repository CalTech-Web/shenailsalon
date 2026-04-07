import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Nail Tips? Types, Uses, and How They Work",
  description:
    "Nail tips are pre-shaped extensions glued to the natural nail before acrylic or gel is applied on top. This guide covers plastic vs soft gel tips, nail tips vs nail forms, how they work, and whether they damage nails.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-nail-tips/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-nail-tips/",
    title: "What Are Nail Tips? Types, Uses, and How They Work",
    description:
      "Nail tips are pre-shaped extensions glued to the natural nail before acrylic or gel is applied on top. This guide covers plastic vs soft gel tips, nail tips vs nail forms, how they work, and whether they damage nails.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Nail Tips", item: "https://shenailsalon.com/what-are/what-are-nail-tips/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Nail Tips? Types, Uses, and How They Work",
  description:
    "A complete guide to nail tips. Covers plastic and soft gel types, nail tips vs nail forms, how nail tips are applied, how long they last, cost, and whether they damage the natural nail.",
  url: "https://shenailsalon.com/what-are/what-are-nail-tips/",
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
  dateModified: "2026-04-07",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-nail-tips/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are nail tips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail tips are pre-shaped plastic or soft gel extensions that are glued or bonded to the free edge of the natural nail to add length before an extension product (acrylic, hard gel, builder gel, or polygel) is applied on top. The tip creates the foundation shape and desired length, and the acrylic or gel fills in the gap and encapsulates the tip to create one unified nail surface.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between nail tips and nail forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail tips are pre-shaped solid extensions glued to the nail before acrylic or gel is applied on top. Nail forms are flexible paper or foil guides slid under the free edge of the natural nail so that acrylic or gel can be sculpted over the form and extended past the fingertip without any pre-made structure. Nail forms are removed after the product hardens. Tips stay on permanently under the acrylic or gel. For beginners, tips are significantly easier to work with because the shape is already there.",
      },
    },
    {
      "@type": "Question",
      name: "What are soft gel nail tips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soft gel nail tips are full-cover extensions pre-formed from a flexible, UV-curable gel material rather than rigid ABS plastic. They are bonded to the natural nail with a structure gel base coat and cured under an LED lamp. Unlike plastic tips, soft gel tips do not require acrylic or hard gel on top. They are the final extension, not just a length scaffold. Gel-X nails are the most widely sold soft gel nail tip system. Soft gel tips are more flexible than plastic tips, feel lighter on the nail, and soak off in acetone without filing.",
      },
    },
    {
      "@type": "Question",
      name: "Do nail tips damage your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail tips applied and removed correctly do not cause significant nail damage. The glue used to bond plastic tips is the same cyanoacrylate used in press-on nails, which soaks off in acetone during standard removal. The most common source of damage from nail tips is improper removal: forcing or peeling the tip off before the adhesive is fully dissolved tears the upper layers of the natural nail plate. Proper acetone removal prevents this. The natural nail underneath the extension is also protected from everyday mechanical stress during wear.",
      },
    },
    {
      "@type": "Question",
      name: "Can you use nail tips without acrylic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plastic nail tips are designed to be used as a scaffold under acrylic or gel, not as a standalone extension. Without an overlay, a plastic tip glued to the natural nail would be thin, fragile, and prone to snapping. However, soft gel full-cover tips (such as gel-x) are designed to work without acrylic. They are a complete extension in themselves and are cured under an LED lamp to become the finished nail.",
      },
    },
    {
      "@type": "Question",
      name: "How long do nail tips last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail tips last as long as the acrylic or gel applied over them. With proper care, a set built using nail tips typically lasts 2 to 3 weeks before a fill is needed (for acrylic) or 3 to 4 weeks for hard gel or builder gel. Soft gel full-cover tips (gel-x) last 3 to 5 weeks before the growth gap at the base becomes large enough to require a fill or replacement set. Tip longevity is most affected by nail prep quality, adhesive application, and daily water exposure.",
      },
    },
    {
      "@type": "Question",
      name: "What are nail tips made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most traditional nail tips are made from ABS (acrylonitrile butadiene styrene) plastic, the same rigid thermoplastic used in LEGO bricks and many consumer electronics housings. ABS is lightweight, rigid, and easy to file and shape. Soft gel nail tips are made from a photopolymer gel that remains flexible and semisoft until cured under a UV or LED lamp, then firms to a flexible solid. Both materials are safe for cosmetic use when applied and removed correctly.",
      },
    },
  ],
};

const tipsVsFormsRows = [
  ["Structure", "Pre-shaped solid extension glued to nail", "Removable paper or foil guide placed under free edge"],
  ["Skill level", "Easier, beginner-friendly", "Harder, requires more experience to fit correctly"],
  ["Shape", "Fixed by tip style (square, almond, etc.)", "Fully customizable during sculpting"],
  ["Result", "Tip remains under acrylic or gel", "Form is removed; sculpted nail is freestanding"],
  ["Best material", "Acrylic, hard gel, builder gel", "Acrylic, hard gel (any sculpted product)"],
  ["Nail length", "Limited to tip length options", "Any length possible"],
  ["Application time", "Faster overall", "Slower, more technical"],
  ["Cost", "Low (tips cost $3 to $12 per 500 pack)", "Low (forms cost $5 to $15 per 100 pack)"],
];

const tipTypesRows = [
  ["Standard plastic (ABS)", "Rigid, clear or natural, half-well design", "Most common; used under acrylic and hard gel"],
  ["Full-cover plastic", "Rigid, covers entire nail plate", "Used as-is for press-on nails or under gel polish"],
  ["French tip", "Rigid, white free edge with clear nail bed", "Creates pre-made French manicure look under acrylic"],
  ["Stiletto / almond pre-shaped", "Rigid, tapered to a point or oval", "Saves shaping time for specific nail shapes"],
  ["Soft gel full-cover (gel-x)", "Flexible, fully pre-shaped, cured under LED lamp", "Complete extension without acrylic; modern alternative"],
  ["Hard gel pre-formed tip", "Semi-flexible, pre-shaped, bonded with base gel", "Gel-based alternative to gel-x from various brands"],
];

const wearRows = [
  ["Plastic tip under acrylic (fill every 2 to 3 weeks)", "2 to 3 weeks per set"],
  ["Plastic tip under builder gel or hard gel", "3 to 4 weeks per set"],
  ["Soft gel full-cover tip (gel-x style)", "3 to 5 weeks per set"],
  ["Tip applied with proper nail prep and primer", "Full expected wear time"],
  ["Tip applied without dehydrator or primer", "Lifting often begins within 7 to 10 days"],
  ["Frequent water exposure or chemical contact", "1 to 2 weeks shorter than expected"],
];

export default function NailTipsPage() {
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
            <span>Nail Tips</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Nail Tips?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Nail tips are pre-shaped extensions glued or bonded to the free edge of the natural nail to add length before acrylic or gel is applied on top. They come in plastic and soft gel versions, each suited to different extension methods. This guide covers the main types, how nail tips differ from nail forms, how long they last, and whether they damage your nails. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are nail tips */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Nail Tips?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail tips are pre-formed nail length extensions that attach to the free edge of the natural nail using nail glue or a gel bonding agent. They act as a scaffold: once the tip is glued on and trimmed to the desired length, acrylic, hard gel, builder gel, or polygel is applied over the tip and the natural nail to create one unified surface.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The most common nail tip is a plastic (ABS) half-well tip. Half-well refers to the recessed section at the base of the tip that overlaps with the natural nail and is filled with nail glue. Once bonded, the seam between the tip and the natural nail is filed smooth before any extension product is applied.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              A newer category, soft gel full-cover tips (most commonly sold as gel-x), skips the acrylic step entirely. These tips are made from soft gel and bonded to the nail with a structure gel, then cured under an LED lamp. The cured soft gel tip is the finished extension, without any acrylic or hard gel overlay.
            </p>
          </div>

          {/* Nancy anecdote */}
          <div className="p-5 rounded-xl border-l-4" style={{ background: "#F0F5FA", borderColor: "#046BD2" }}>
            <p className="text-sm leading-relaxed italic" style={{ color: "#334155" }}>
              "The first time I tried acrylic nails at home, I skipped the nail tip step and tried to sculpt the length freehand over a nail form. It was a disaster. My technician friend laughed and told me to just use tips until I had the muscle memory down. She was right. Tips took the guesswork out of the shape and let me focus on getting my bead consistency right. Once I had that down, the forms felt much less intimidating."
            </p>
            <p className="text-xs mt-3 font-medium" style={{ color: "#046BD2" }}>Nancy Davidson, Author</p>
          </div>

          {/* Types of nail tips */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Nail Tips</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Nail tips come in several styles, each suited to different extension methods and skill levels. The table below covers the main types available at beauty supply stores and online.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Material and form</th>
                    <th className="text-left px-4 py-2 font-semibold">Best used for</th>
                  </tr>
                </thead>
                <tbody>
                  {tipTypesRows.map(([type, material, use], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{material}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nail tips vs nail forms */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Tips vs Nail Forms</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Nail tips and nail forms are two different ways to add length before applying acrylic or gel. Tips are solid pre-shaped extensions that stay under the product. Forms are flexible paper or foil guides that are fitted under the free edge, used to sculpt the extension over thin air, then removed after the product cures. Both methods produce the same end result but require different skills.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Nail tips</th>
                    <th className="text-left px-4 py-2 font-semibold">Nail forms</th>
                  </tr>
                </thead>
                <tbody>
                  {tipsVsFormsRows.map(([feature, tips, forms], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{tips}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{forms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              For home DIY users, nail tips are the recommended starting point. The shape is already there, so the learning curve focuses entirely on bead placement and product consistency rather than also learning to fit and position a form correctly.
            </p>
          </div>

          {/* How nail tips work */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Nail Tips Work</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Applying a plastic nail tip follows the same basic process whether you are doing acrylic, hard gel, or builder gel afterward:
            </p>
            <ol className="space-y-3 ml-4 list-decimal text-sm" style={{ color: "#707070" }}>
              <li><strong style={{ color: "#1E293B" }}>Select the right size:</strong> Match the tip width to the natural nail from side wall to side wall. A tip that is too wide will lift at the edges; one that is too narrow will leave gaps that fill with debris.</li>
              <li><strong style={{ color: "#1E293B" }}>Apply nail glue to the well:</strong> Place one small drop of cyanoacrylate nail glue in the recessed well of the tip. Too much glue creates a bubble; too little causes the tip to lift early.</li>
              <li><strong style={{ color: "#1E293B" }}>Press and rock flat:</strong> Position the tip at a 45-degree angle against the free edge, then rock it flat against the nail plate. Hold for 10 seconds to allow the glue to set.</li>
              <li><strong style={{ color: "#1E293B" }}>Trim to length:</strong> Use nail tip cutters (not scissors, which can crack the tip) to cut to your desired length. Leave room for filing.</li>
              <li><strong style={{ color: "#1E293B" }}>File the seam:</strong> File the junction between the tip and the natural nail using a 100 to 180 grit file until the transition is completely smooth and invisible. This step is critical; an unfiled seam will show as a visible ridge in the finished nail.</li>
              <li><strong style={{ color: "#1E293B" }}>Apply extension product:</strong> Apply acrylic, hard gel, or builder gel over the tip and natural nail as usual.</li>
            </ol>
          </div>

          {/* Soft gel nail tips */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Soft Gel Nail Tips (Gel-X)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Soft gel full-cover tips, most commonly associated with the{" "}
              <Link href="/what-are/what-are-gel-x-nails/" style={{ color: "#046BD2" }} className="hover:underline">Gel-X system by Aprés Nail</Link>,
              are a fundamentally different type of nail tip. Rather than acting as a scaffold under acrylic, the soft gel tip is the complete extension. Each tip is a pre-shaped, full-cover nail cap made from a photopolymer gel that is flexible at room temperature and firms when cured under an LED lamp.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Application: the natural nail is prepped and a thin layer of structure gel (extend gel) is applied to the nail plate. The soft gel tip is placed over the nail, pressed flat, and cured under the lamp. There is no acrylic powder, no monomer liquid, and no strong chemical smell.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Soft gel tips are removed by filing the surface layer to break the seal, then soaking in acetone for 10 to 15 minutes until the tip softens and can be gently pushed off. They are more flexible than acrylic sets, feel lighter on the nail, and are beginner-friendly because no sculpting or bead work is required.
            </p>
          </div>

          {/* How long nail tips last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Nail Tips Last?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Nail tip longevity depends on the extension product applied over the tip and how well the nail was prepped before application.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Scenario</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected wear</th>
                  </tr>
                </thead>
                <tbody>
                  {wearRows.map(([scenario, wear], i) => (
                    <tr key={scenario} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{scenario}</td>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{wear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Are nail tips bad for your nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Are Nail Tips Bad for Your Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail tips do not inherently damage the natural nail when applied and removed correctly. The glue that bonds plastic tips is a cyanoacrylate adhesive, the same type used in press-on nails. It dissolves during standard acetone removal as part of the overall extension removal process. The natural nail plate under the extension is protected from everyday mechanical wear during the time the extension is on.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The two main sources of damage associated with nail tips are:
            </p>
            <ul className="space-y-2 ml-4 list-disc text-sm" style={{ color: "#707070" }}>
              <li><strong style={{ color: "#1E293B" }}>Forced removal:</strong> Peeling or prying off a nail tip before the glue has fully dissolved in acetone pulls the upper layers of the natural nail plate with it. This is the most common cause of nail damage from extensions of any kind.</li>
              <li><strong style={{ color: "#1E293B" }}>Over-filing during seam blending:</strong> Filing through the tip seam too aggressively can thin the natural nail plate at the point of contact. A 180 grit file used with a light touch is sufficient to smooth the seam without damaging the natural nail underneath.</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              With proper application and acetone removal, the natural nail after a set is typically in the same or better condition than before, since it was shielded from breakage during wear.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Tips: Pros and Cons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-lg border" style={{ background: "#F0FFF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-3 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#707070" }}>
                  <li>Much easier for beginners than nail forms</li>
                  <li>Create a consistent, defined free edge shape immediately</li>
                  <li>Available in dozens of shapes and sizes</li>
                  <li>Inexpensive (500 tips for $5 to $15)</li>
                  <li>Work with acrylic, hard gel, builder gel, and polygel</li>
                  <li>Soft gel tips require no sculpting at all</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-3 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-2 text-sm" style={{ color: "#707070" }}>
                  <li>Length limited to tip sizes available</li>
                  <li>Seam must be filed smooth to avoid a visible ridge</li>
                  <li>Plastic tips can crack if cut with scissors instead of tip cutters</li>
                  <li>Incorrect sizing leads to edge lifting</li>
                  <li>Peeling off without acetone damages the natural nail</li>
                  <li>Adds one extra step compared to sculpting with forms</li>
                </ul>
              </div>
            </div>
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
              { href: "/how-to/how-to-apply-acrylic-nails/", label: "How To Apply Acrylic Nails" },
              { href: "/what-are/what-are-nail-extensions/", label: "What Are Nail Extensions?" },
              { href: "/what-are/what-are-gel-x-nails/", label: "What Are Gel-X Nails?" },
              { href: "/what-are/what-are-acrylic-nails/", label: "What Are Acrylic Nails?" },
              { href: "/what-are/what-are-fake-nails/", label: "What Are Fake Nails?" },
              { href: "/how-to/how-to-remove-acrylic-nails/", label: "How To Remove Acrylic Nails" },
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
