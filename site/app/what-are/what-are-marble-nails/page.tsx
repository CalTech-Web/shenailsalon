import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marble Nails: What They Are, Designs, Colors and How to Get Them",
  description:
    "Marble nails mimic the veined look of natural stone using nail polish, gel, or nail wraps. Learn what marble nails are, the most popular marble nail designs, white and black marble nails, how long they last, and how to get them at home or at a salon.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-marble-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-marble-nails/",
    title: "Marble Nails: What They Are, Designs, Colors and How to Get Them",
    description:
      "Marble nails mimic the veined look of natural stone using nail polish, gel, or nail wraps. Learn what marble nails are, the most popular marble nail designs, white and black marble nails, how long they last, and how to get them at home or at a salon.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Marble Nails", item: "https://shenailsalon.com/what-are/what-are-marble-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marble Nails: What They Are, Designs, Colors and How to Get Them",
  description:
    "A complete guide to marble nails. Covers what marble nails are, the main techniques for creating them, the most popular marble nail designs and colors, how long marble nails last, and whether to get them at a salon or DIY at home.",
  url: "https://shenailsalon.com/what-are/what-are-marble-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-marble-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are marble nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marble nails are a nail art style that mimics the natural veining and swirling patterns of marble stone. The look is typically created on a light or neutral base color using thin, irregular veining lines drawn with a fine brush or nail art pen. Marble nails can also be created using water marbling, nail foil transfers, or pre-printed nail wraps. The result is a sophisticated, stone-like pattern on each nail.",
      },
    },
    {
      "@type": "Question",
      name: "How do you do marble nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common technique for marble nails uses a fine nail art brush or a toothpick to paint thin, irregular veining lines over a cured gel or dried polish base coat. The brush is loaded with a thin layer of paint and dragged across the nail in natural-looking, branching lines that taper and fade at the ends. A second, thinner vein color is often added to give depth. Water marbling is another method where drops of nail polish are swirled on the surface of water, then the nail is dipped through the pattern. Nail wraps and foil transfers offer a no-skill alternative with consistent results.",
      },
    },
    {
      "@type": "Question",
      name: "How long do marble nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marble gel nails at a salon typically last 2 to 3 weeks, the same as any gel manicure. Marble acrylic nails last 2 to 3 weeks until a fill is needed. Marble designs done on regular nail polish last 5 to 7 days before chipping. Marble nail wraps last 7 to 14 days depending on the adhesive and how much water exposure they receive.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular marble nail designs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White marble nails with black or grey veining on a white base are the most popular marble nail design. Black marble nails reverse the pattern with white or gold veining on a black base. Rose gold marble nails combine a nude or blush base with pink and gold metallic veining. Blue marble nails use a white or pale grey base with deep navy or teal veining. Grey marble nails have a cool, contemporary look that works well for shorter nail lengths. Green marble and terracotta marble designs are trending seasonal variations.",
      },
    },
    {
      "@type": "Question",
      name: "Are marble nails hard to do at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gel brush technique for marble nails requires practice and a steady hand. Most beginners find the brush technique difficult to control on the first attempt because the veins need to look random and organic, not stiff or geometric. Nail wraps and foil transfers are much easier for DIY marble nails and produce salon-quality results with no skill required. Water marbling is fun but messy and harder to control than it looks. For a first attempt at marble nails at home, nail wraps are the lowest-risk option.",
      },
    },
    {
      "@type": "Question",
      name: "How much do marble nails cost at a salon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marble nails are a nail art add-on at most salons and typically cost $15 to $35 on top of the base manicure price. A gel manicure with marble nail art in California typically runs $55 to $90 total. Pricing varies based on complexity: full marble on all ten nails costs more than marble on two accent nails. Acrylic nails with marble designs may cost $75 to $120 or more for a full set.",
      },
    },
    {
      "@type": "Question",
      name: "What nail shapes look best with marble nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marble nails look best on medium to long nails where there is enough surface area to show the veining pattern clearly. Almond and coffin shapes are the most popular for marble nails because the tapered or flat wide tip gives the veins room to branch naturally. Oval shapes work well for a softer marble look. Short square nails can carry marble designs but may look better with a simplified, less detailed vein pattern. Very short or round nails tend to make the marble pattern look cramped.",
      },
    },
  ],
};

const designRows = [
  ["White marble", "White or cream base with grey and black veining", "Classic, elegant, most popular", "Almond, coffin, oval"],
  ["Black marble", "Black base with white, gold, or silver veining", "Bold, editorial, dramatic", "Coffin, stiletto, square"],
  ["Rose gold marble", "Nude or blush base with pink and rose gold metallic veining", "Romantic, feminine, trending", "Almond, coffin, oval"],
  ["Blue marble", "White or light grey base with navy or teal veining", "Striking, distinctive", "Coffin, almond"],
  ["Grey marble", "Light grey base with dark grey or charcoal veining", "Modern, understated", "Any shape"],
  ["Green marble", "White or sage base with forest green and gold veining", "Earthy, seasonal", "Almond, square, coffin"],
  ["Gold marble", "White or nude base with gold metallic veining", "Luxurious, special occasion", "Coffin, almond, stiletto"],
  ["Terracotta marble", "Warm orange-brown base with rust and cream veining", "Earthy, trending for fall", "Square, oval, coffin"],
];

const techniqueRows = [
  ["Gel brush technique", "Fine nail art brush loaded with thinned gel paint dragged across cured base to create veins", "Intermediate to advanced", "Most natural-looking, durable"],
  ["Nail art pen", "Fine-tip nail art pen used to draw veining lines over dried polish or cured gel", "Beginner friendly", "Good control, less blending"],
  ["Water marbling", "Polish drops swirled on water surface; nail dipped through the pattern", "Beginner to intermediate", "Unpredictable, very messy, fun"],
  ["Nail wraps / decals", "Pre-printed adhesive film or polish strips applied to the nail", "Beginner (no skill needed)", "Consistent results, faster fading"],
  ["Foil transfer", "Metallic foil pressed onto sticky gel layer before curing to create veined metallic effect", "Intermediate", "High impact, less detail"],
];

const wearTimeRows = [
  ["Marble gel manicure (salon)", "2 to 3 weeks"],
  ["Marble gel at home", "1 to 2 weeks"],
  ["Marble on acrylic nails", "2 to 3 weeks (until fill)"],
  ["Marble on dip powder", "3 to 4 weeks"],
  ["Marble on regular nail polish", "5 to 7 days"],
  ["Marble nail wraps", "7 to 14 days"],
];

const prosRows = [
  ["Sophisticated aesthetic", "Stone veining reads as high-end and artistic without requiring elaborate tools"],
  ["Versatile color options", "Works in white, black, pink, blue, green, gold, and countless combinations"],
  ["DIY accessible", "Nail wraps and art pens make marble achievable at home without salon skill"],
  ["Works on all nail types", "Compatible with gel, acrylic, dip, and regular polish"],
  ["Timeless trend", "Marble has been a consistent nail trend since 2015 and shows no sign of fading"],
  ["Pairs with accent nails", "Two marble accent nails alongside solid-color nails is an easy, elegant look"],
];

const consRows = [
  ["Brush technique takes practice", "Freehand marble veining looks clumsy without experience"],
  ["Water marbling is messy", "Requires prep, cleanup, and produces inconsistent results"],
  ["More expensive at salons", "Nail art upcharge of $15 to $35 applies at most salons"],
  ["Detail is lost on short nails", "Very short nails do not show complex veining patterns well"],
  ["Wraps fade faster than gel art", "Nail wrap marble designs fade around the edges before gel art does"],
];

export default function MarbleNailsPage() {
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
            <span>Marble Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Marble Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Marble nails are a nail art style that replicates the swirling veins and natural patterns of polished marble stone. The look can be achieved with a fine nail art brush, water marbling, nail wraps, or foil transfers, and works in dozens of color combinations from classic white and grey to rose gold, navy blue, and black. This guide covers what marble nails are, every major technique for getting them, the most popular designs, how long they last, and what to expect at a salon. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are marble nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Marble Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Marble nails are a nail art style designed to mimic the appearance of natural marble stone. The characteristic look is a smooth, pale base color, typically white, cream, or grey, crossed by thin, branching veins in a contrasting color. Real marble gets its veining from minerals deposited in thin seams through the stone over millions of years. On nails, those veins are recreated by hand using a fine brush, a nail art pen, or specialty products like water marbling kits, foil transfers, or pre-printed nail wraps.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Marble nail art became widely popular in the mid-2010s, largely through social media, and has remained a consistent staple of nail trends ever since. The appeal is straightforward: the pattern reads as sophisticated and elegant without being tied to a specific season or occasion. Marble nails look at home at a formal event, a professional setting, or a casual brunch, which is part of why the trend has had such longevity compared to more seasonal nail art styles.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The technique and difficulty varies widely. Skilled nail technicians can paint incredibly detailed marble patterns free-hand with a very fine brush and thinned gel paint. Beginners at home can get a convincing marble look using nail wraps or a simple nail art pen technique that does not require years of practice. The same design aesthetic is accessible at multiple skill levels, which also contributes to how broadly the style has spread.
            </p>
          </div>

          {/* Popular marble nail designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Popular Marble Nail Designs</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Marble nails come in far more color combinations than the classic white-and-grey. The base color and vein color together define the personality of the design, and the same veining technique applied in different palettes produces very different aesthetics.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Design</th>
                    <th className="text-left px-4 py-2 font-semibold">Color combination</th>
                    <th className="text-left px-4 py-2 font-semibold">Aesthetic</th>
                    <th className="text-left px-4 py-2 font-semibold">Best shape</th>
                  </tr>
                </thead>
                <tbody>
                  {designRows.map(([design, colors, aesthetic, shape], i) => (
                    <tr key={design} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{design}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{colors}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{aesthetic}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shape}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* White marble nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>White Marble Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              White marble nails are the most searched and most popular marble nail design. The classic version uses a pure white or off-white base with thin grey and black veining. The veins start thick near the edges of the nail and taper into hairline cracks toward the center, just as natural Calacatta or Carrara marble does. A second, slightly lighter vein layer in grey adds depth and makes the pattern look more three-dimensional.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              White marble nails pair especially well with almond and coffin shapes because the longer nail gives the veining room to spread naturally. On very short nails, it is better to simplify the vein pattern to one or two main lines and leave most of the nail clean. Adding a glossy top coat over white marble art makes the surface look like polished stone. A matte top coat gives the design a more subtle, unpolished marble aesthetic.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              White marble is also the base design that most other marble color variations build on. Rose gold marble, for example, replaces the grey veins with pink and metallic rose gold, while keeping the same white base and branching vein structure that makes white marble instantly recognizable.
            </p>
          </div>

          {/* Black marble nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Black Marble Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Black marble nails invert the classic design. The base is deep black or very dark charcoal, and the veining is white, silver, or gold. The result is dramatic and editorial in a way that white marble is not. Black marble nails are popular with coffin, stiletto, and square shapes where the angular form complements the stark contrast of the veining.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Gold veining on a black marble base is particularly sought after for formal events because the metallic accent catches light in a way that silver or white veining does not. A common variation uses white veining for the main structural lines and gold veining added over the top for accent detail, creating a layered effect that is close to how natural black marble with gold mineral deposits actually looks.
            </p>
          </div>

          {/* How marble nails are made */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Marble Nails Are Made</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              There are several distinct techniques for creating marble nails. Each produces a different quality of result and requires a different skill level.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Technique</th>
                    <th className="text-left px-4 py-2 font-semibold">How it works</th>
                    <th className="text-left px-4 py-2 font-semibold">Skill level</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {techniqueRows.map(([technique, how, skill, notes], i) => (
                    <tr key={technique} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{technique}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{skill}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="mt-5 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Tip: thinning the paint for gel brush technique</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                For the gel brush technique, the vein color needs to be thin enough to taper naturally as the brush runs out of product. Using a small amount of gel paint thinned very slightly on a palette, then loading only the tip of the brush, gives the most realistic tapered vein edges. The brush should almost run dry before you lift it off the nail, which creates the natural thinning effect of real marble veins.
              </p>
            </div>
          </div>

          {/* How long do marble nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Marble Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The durability of marble nails depends on the base nail type, not the marble art itself. Marble painted with gel nail art paint and sealed with a gel top coat lasts as long as any gel manicure. Marble nail wraps fade and lift sooner because adhesive film does not bond to the nail as durably as gel.
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

          {/* Salon vs DIY */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Marble Nails at the Salon vs at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Getting marble nails at a nail salon produces the most detailed and longest-lasting results. A skilled technician uses very fine nail art brushes and gel nail art paints to hand-paint the veining over a cured gel base, then seals everything with a gel top coat and cures it under a UV or LED lamp. The sealed gel art layer protects the design and gives it the same 2 to 3 week lifespan as a standard gel manicure. Most nail salons charge a nail art upcharge of $15 to $35 on top of the base manicure price, or $55 to $90 total in California for a gel manicure with full marble art on all ten nails.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              DIY marble nails at home are very achievable with the right approach. The easiest option is nail wraps, which are pre-printed adhesive strips that apply directly to the nail and require no drawing skill. The result looks convincing and takes about 20 minutes for a full set. Nail art pens are another accessible DIY option: a fine-tip nail art pen loaded with black or grey polish lets you draw vein lines directly onto a dried base color, and the tip gives more control than a loose brush.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Water marbling is technically a DIY technique but is significantly messier and more unpredictable than it appears in tutorial videos. Every nail comes out different because the swirl pattern is random, which is part of the charm, but achieving a clean result requires protecting the surrounding skin with liquid latex barrier, working quickly before the polish on the water surface dries, and doing one nail at a time. For a first attempt at marble nails at home, nail wraps or a nail art pen are more reliable starting points.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Marble Nails: Pros and Cons</h2>
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
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Marble Nails: Frequently Asked Questions</h2>
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
                <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">
                  Nail Art: Types, Designs and Ideas
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-nail-designs/" style={{ color: "#046BD2" }} className="hover:underline">
                  Gel Nail Designs: Ideas for Every Shape and Season
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Chrome Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-ombre-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Ombre Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-nail-wraps/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Nail Wraps?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Gel Nails?
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
