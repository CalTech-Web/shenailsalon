import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Art: Designs, Ideas & Techniques for Every Skill Level",
  description:
    "Nail art is any decorative technique applied to fingernails beyond a single solid color. Discover the best nail art designs, easy nail art ideas for beginners, simple nail art at home, and inspiration for every occasion.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-nail-art/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-nail-art/",
    title: "Nail Art: Designs, Ideas & Techniques for Every Skill Level",
    description:
      "Nail art is any decorative technique applied to fingernails beyond a single solid color. Discover the best nail art designs, easy nail art ideas for beginners, simple nail art at home, and inspiration for every occasion.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Nail Art", item: "https://shenailsalon.com/what-are/what-are-nail-art/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nail Art: Designs, Ideas & Techniques for Every Skill Level",
  description:
    "A complete guide to nail art. Covers what nail art is, the most popular nail art designs and ideas, easy nail art techniques for beginners, simple nail art designs you can do at home, the tools you need, and nail art inspiration by occasion and season.",
  url: "https://shenailsalon.com/what-are/what-are-nail-art/",
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
  dateModified: "2026-03-23",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-nail-art/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is nail art?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail art is any decorative technique applied to fingernails or toenails beyond a single solid color. It includes designs created with nail polish, gel, acrylic, foils, stamps, stickers, hand-painted art, and 3D embellishments. Nail art ranges from simple two-color designs a beginner can do at home to highly detailed hand-painted scenes done by trained nail technicians.",
      },
    },
    {
      "@type": "Question",
      name: "What are the easiest nail art designs for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest nail art designs for beginners include French tips, negative space designs, color blocking, simple dots (done with a toothpick or dotting tool), diagonal or half-moon designs using tape, and nail stickers or wraps. These require minimal tools and can be done with standard nail polish. Stamping plates are another beginner-friendly option because they transfer a pre-made design onto the nail with one press.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you need for nail art?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic nail art tools include a thin nail art brush (liner or striper), a dotting tool, nail art tape, nail polish in multiple colors, and a topcoat. More advanced nail art uses stamping plates and scrapers, nail foils, nail stickers, gel polish with a UV or LED lamp, nail art pens, and an acrylic or gel extension system. You do not need all of these tools to start. A liner brush and two nail polish colors are enough to create dozens of simple designs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most popular nail art design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "French tips are consistently the most searched nail art design, followed by ombre nails, floral nail art, and geometric designs. Trend-driven designs like glazed donut nails (a sheer, pearlescent finish), aura nails (soft blended color halos), and chrome nails cycle in and out of popularity each season. Among seasonal designs, Christmas nail art and fall nail art see the highest search spikes in their respective seasons.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do nail art at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most nail art techniques can be done at home with standard nail polish and basic tools. Simple designs like French tips, dots, stripes, color blocking, and stamped designs are especially easy to replicate at home. Gel nail art requires a UV or LED lamp but is still manageable at home once you have the equipment. More complex nail art, such as 3D embellishments, hand-painted nail art, or gel sculptures, is harder to achieve at home without professional training.",
      },
    },
    {
      "@type": "Question",
      name: "How long does nail art last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail art done over regular nail polish typically lasts 5 to 7 days before chipping. Nail art sealed over a gel base coat and finished with a gel topcoat lasts 2 to 3 weeks. Nail art on acrylic or gel extensions can last 3 to 4 weeks. The longevity depends on the base system used, not the design itself. Applying a fresh layer of topcoat every 2 to 3 days extends the life of any nail art regardless of the base.",
      },
    },
    {
      "@type": "Question",
      name: "What are nail art pens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail art pens are nail polish pens with a fine-tip nib that function like a felt-tip marker for nails. They allow you to draw lines, details, and designs directly onto the nail without needing a separate brush. They are popular for simple nail art at home because they are easier to control than a brush for most people. Nail art pens work on top of a dry base color and should be sealed with a topcoat to prevent smearing.",
      },
    },
  ],
};

const nailArtTypeRows = [
  ["French tip", "White or colored tip on a nude or sheer base", "Beginner", "All lengths", "Classic, always in style"],
  ["Ombre / gradient", "Two or more colors blended into each other", "Beginner to intermediate", "All lengths", "Trendy, works with any color combo"],
  ["Floral nail art", "Hand-painted or stamped flowers and petals", "Intermediate", "Medium to long", "Popular for spring and summer"],
  ["Geometric nail art", "Lines, triangles, negative space shapes", "Beginner (tape) to intermediate (freehand)", "All lengths", "Modern, editorial look"],
  ["Marble nails", "Swirled veining pattern resembling marble stone", "Intermediate", "Medium to long", "Elegant, sophisticated"],
  ["Chrome nails", "Mirror-finish powder applied over gel", "Beginner (powder application)", "All lengths", "High-impact, trending"],
  ["Cat eye nails", "Magnetic streak from iron-oxide gel", "Intermediate", "All lengths", "Dimensional, jewel-like"],
  ["Stamping nail art", "Pre-made design transferred with a stamp plate", "Beginner", "All lengths", "Fast, repeatable designs"],
  ["Nail stickers / wraps", "Adhesive designs applied to the nail surface", "Beginner", "All lengths", "No skill required, many designs"],
  ["3D nail art", "Raised embellishments: gems, charms, acrylic flowers", "Advanced", "Medium to long", "High drama, salon-grade"],
  ["Glazed donut nails", "Sheer, pearlescent chrome finish", "Beginner (chrome powder)", "All lengths", "Hailey Bieber trend, minimalist"],
  ["Aura nails", "Soft blended color halos or gradients", "Intermediate", "All lengths", "Dreamy, artistic look"],
];

const beginnerDesigns = [
  {
    title: "French Tip",
    description:
      "Apply a nude or sheer pink base color and let it dry fully. Use nail tip guides or a thin brush to paint a white or colored smile line at the free edge of each nail. Seal with a clear topcoat. This is the most recreated nail art design in the world and is achievable on a first attempt.",
  },
  {
    title: "Simple Dots",
    description:
      "Apply a base color and let it dry. Dip a toothpick, bobby pin, or dotting tool into a contrasting nail polish and place dots on the nail surface. Dots can be arranged in a cluster at the cuticle, a diagonal line, or scattered randomly. Seal with topcoat. This is one of the simplest nail art designs to do at home.",
  },
  {
    title: "Color Blocking",
    description:
      "Apply a base color. Once dry, use tape to mask off a section of the nail and paint a second color over the exposed area. Remove the tape immediately while the polish is still wet. The clean tape edge creates a sharp geometric shape. This works best with contrasting colors or white and one bold color.",
  },
  {
    title: "Half-Moon Design",
    description:
      "Place a circular paper reinforcement sticker (or use binder hole punch reinforcements) at the base of the nail over a dry base color, leaving the lower arc of the nail exposed. Paint a second color over the whole nail. Remove the sticker while wet to reveal a clean half-moon at the base. A classic simple nail art design that takes about 10 minutes per hand.",
  },
  {
    title: "Diagonal Stripe",
    description:
      "Apply a base color. Once dry, place a diagonal strip of tape across the nail. Paint a second color over the tape, covering the exposed triangle of nail. Remove the tape while wet. The result is a clean diagonal split between two colors. Using a metallic or glitter polish for the second color gives the most impact with minimal effort.",
  },
  {
    title: "Nail Stickers",
    description:
      "Apply a base coat and a base color. Once fully dry, peel a nail sticker from its backing and press it onto the nail, smoothing out any air bubbles from the center outward. Trim excess sticker at the free edge with a nail file. Seal with a topcoat. Nail stickers require no artistic skill and produce salon-quality designs immediately.",
  },
];

const toolRows = [
  ["Liner / striper brush", "Drawing fine lines, stems, lettering", "Essential for any hand-painted nail art"],
  ["Dotting tool", "Dots, petals, swirls", "Two sizes (large and small) covers most uses"],
  ["Nail art tape / striping tape", "Clean geometric edges, straight lines", "Removes cleanly without smearing dried polish"],
  ["Stamping plate + scraper", "Transferring pre-engraved designs", "Faster than hand-painting for complex patterns"],
  ["Nail foil transfer", "Metallic or holographic textures", "Applied over gel before curing for long-lasting results"],
  ["Nail art pen", "Drawing and detailing directly on the nail", "Easier than a brush for most beginners"],
  ["Detail brush (round)", "Painting flowers, petals, fine shapes", "Round tip holds more polish than a liner"],
  ["UV / LED lamp", "Curing gel nail art", "Required for any gel-based nail art system"],
];

const inspoByOccasion = [
  {
    occasion: "Everyday / work",
    ideas: "Neutral French tips, glazed donut nails, simple ombre in nude tones, negative space designs, single accent nail with minimal geometric detail.",
  },
  {
    occasion: "Wedding / formal events",
    ideas: "Classic white French tips, soft pink ombre, lace-inspired stamping, delicate floral hand-painted art, rose gold chrome, pearl or crystal embellishments on one accent nail.",
  },
  {
    occasion: "Summer",
    ideas: "Bright color blocking, tropical floral nail art, pastel ombre, fruit-themed nail stickers, negative space daisy designs, coral and white French tips.",
  },
  {
    occasion: "Fall / autumn",
    ideas: "Deep burgundy or terracotta base with gold foil accents, leaf nail art stamps, burnt orange ombre, tortoiseshell swirl, cat eye nails in amber or dark red.",
  },
  {
    occasion: "Winter / Christmas",
    ideas: "Red and gold plaid or tartan nail art, snowflake stamping on white or navy, glazed donut nails in silver or iridescent, deep green with gold chrome powder, candy cane striping.",
  },
  {
    occasion: "Holiday parties",
    ideas: "Glitter ombre, holographic chrome nails, 3D rhinestone accents, metallic foil designs, black and gold geometric art, bold two-tone color blocking.",
  },
];

export default function NailArtPage() {
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
            <span>Nail Art</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Nail Art
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Nail art is any decorative design applied to the nails beyond a plain solid color. It ranges from simple two-minute designs anyone can do at home to intricate hand-painted scenes done by professional nail technicians. This guide covers the most popular nail art designs and ideas, the easiest nail art techniques for beginners, the tools you need, and inspiration sorted by occasion and season. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What is nail art */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is Nail Art?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail art is the practice of decorating or painting fingernails or toenails as a form of creative expression. The term covers everything from a simple French tip to highly detailed hand-painted designs, textured 3D embellishments, chrome powder finishes, and stamped patterns. Any treatment that goes beyond a single coat of solid nail polish qualifies as nail art.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail art has been practiced in various forms for thousands of years. Ancient Egyptians tinted their nails with henna. Chinese court records from the Ming Dynasty describe painted nails as a symbol of social status. Modern nail art as we know it, using nail polish, gel, and acrylics, became mainstream in the United States in the 1980s and has grown exponentially through social media beginning in the 2010s.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Today, nail art is one of the most searched beauty topics on the internet. Searches for nail art designs, nail art ideas, and easy nail art are consistently among the top beauty queries each month in the United States. The industry includes professional nail technicians, nail art brands, and a large community of people who do their own nails at home.
            </p>
          </div>

          {/* Types of nail art */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Nail Art</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail art techniques span a wide range of skill levels and tools. The table below covers the most popular types, how they are created, and what makes each distinct.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">How it looks</th>
                    <th className="text-left px-4 py-2 font-semibold">Skill level</th>
                    <th className="text-left px-4 py-2 font-semibold">Best nail length</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {nailArtTypeRows.map(([type, look, skill, length, notes], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{look}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{skill}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{length}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Easy nail art for beginners */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Easy Nail Art Designs for Beginners</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The easiest nail art designs require minimal tools and use techniques that are forgiving of small mistakes. The six designs below can all be done at home with standard nail polish, a steady hand, and basic supplies you probably already own.
            </p>
            <div className="space-y-5 mt-4">
              {beginnerDesigns.map((design, i) => (
                <div key={design.title} className="rounded-lg border p-4" style={{ borderColor: "#E2EAF4", background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#046BD2" }}>{i + 1}. {design.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{design.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simple nail art designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Simple Nail Art Designs</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Simple nail art means designs that are fast, require few tools, and look polished without extensive practice. The most effective simple nail art designs share a few characteristics: they use negative space (leaving parts of the nail bare or with the base color showing), they use two or three colors at most, and they rely on clean edges rather than detailed painting.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Some of the best simple nail art designs include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li><span className="font-medium" style={{ color: "#1E293B" }}>Minimalist line art:</span> Use a thin striper brush or nail art pen to draw one or two curved or diagonal lines across a neutral base. Clean and modern with no complex technique required.</li>
              <li><span className="font-medium" style={{ color: "#1E293B" }}>Two-tone tips:</span> Paint the top third of the nail in a contrasting color to a clean edge. Works in any color combination, including the classic red-and-nude or white-and-pink French variation.</li>
              <li><span className="font-medium" style={{ color: "#1E293B" }}>Swipe designs:</span> Load a brush with a contrasting color and drag it across the nail in one stroke at a slight angle. The brush texture creates an intentional streaky effect that looks artistic.</li>
              <li><span className="font-medium" style={{ color: "#1E293B" }}>Glitter accent nail:</span> Paint 9 nails in a solid color and apply glitter polish or glitter gel to one accent nail (typically the ring finger). This is probably the simplest nail art idea that consistently looks intentional and well-designed.</li>
              <li><span className="font-medium" style={{ color: "#1E293B" }}>Foil flake art:</span> Apply a gel base and while it is sticky (before curing), press small pieces of nail foil onto the surface. Cure, then seal with topcoat. The result is a textured metallic design that looks complex but takes under a minute per nail.</li>
              <li><span className="font-medium" style={{ color: "#1E293B" }}>Single flower:</span> Using a dotting tool, create five dots in a circle on the nail to form a simple flower shape. Add a contrasting dot in the center. This looks hand-painted but requires no freehand skill.</li>
            </ul>
          </div>

          {/* Nail art tools */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Art Tools and Supplies</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              You do not need every nail art tool to get started. A liner brush and a dotting tool cover the majority of simple to intermediate nail art designs. As your technique develops, adding stamping plates, foils, and a UV lamp opens up more advanced options.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Tool</th>
                    <th className="text-left px-4 py-2 font-semibold">Used for</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {toolRows.map(([tool, use, notes], i) => (
                    <tr key={tool} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{tool}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{use}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Nail art pens vs brushes</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Nail art pens are easier for most beginners because the fine nib handles like a regular pen. Brushes offer more control over line thickness and are preferred for flowing, organic designs like florals. For simple nail art at home, a nail art pen is the fastest way to add detail without a learning curve.
              </p>
            </div>
          </div>

          {/* Nail art inspiration by occasion */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Nail Art Ideas by Occasion</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The best nail art for any occasion balances the level of detail with the context. A work manicure needs to look polished but not distracting. A wedding manicure should be elegant and last through the event. A holiday party is the right time for maximum impact.
            </p>
            <div className="space-y-4 mt-4">
              {inspoByOccasion.map((item, i) => (
                <div key={item.occasion} className="rounded-lg border p-4" style={{ borderColor: "#E2EAF4", background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                  <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{item.occasion}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.ideas}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nail art at home */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Do Nail Art at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Doing nail art at home is entirely achievable at any skill level if you start with the right techniques. The biggest mistakes beginners make are applying polish too thickly (which smears designs), not letting each layer dry fully before adding the next, and trying to correct wet polish with a brush (which drags instead of refining).
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The steps below apply to any nail art design done at home over standard nail polish:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Prep your nails: push back cuticles, lightly buff the surface, wipe with a nail cleanser or isopropyl alcohol to remove oils. Oils under the base coat cause peeling.</li>
              <li>Apply a base coat. Let it dry completely. A base coat protects the natural nail and gives the color a surface to grip.</li>
              <li>Apply your base nail color in thin, even coats. Let each coat dry before adding the next. Two thin coats give better results than one thick coat.</li>
              <li>Once the base color is completely dry, add your nail art. Work quickly with nail art details but do not rush the drying time between layers.</li>
              <li>Fix any mistakes by dipping a small brush in acetone (nail polish remover) and using it to clean up the edges of your design before it dries. A thin acetone brush is more precise than a cotton swab for corrections.</li>
              <li>Apply a topcoat over the entire design. This seals and protects the nail art and adds shine. Reapply topcoat every 2 to 3 days to extend the life of the design.</li>
            </ol>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>The most common reason nail art smears</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Nail art designs smear when the base color has not fully dried before art is applied over it. Polish may feel dry to the touch in 5 to 10 minutes but is not fully set for at least 30 to 60 minutes. Adding art over partially dry polish causes the base color to move. When in doubt, wait longer than you think you need to.
              </p>
            </div>
          </div>

          {/* How long does nail art last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Does Nail Art Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The durability of nail art depends primarily on the base system used, not the design itself. Nail art over regular nail polish typically lasts 5 to 7 days before chipping. Nail art over a gel system lasts 2 to 3 weeks. Nail art on gel extensions or acrylic nails can last 3 to 4 weeks before the extension needs a fill.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Certain types of nail art are more vulnerable to wear than others. Raised 3D designs (rhinestones, charms) catch on fabric and can lift at the edges. Nail foils can peel if not properly sealed. Nail stickers on regular polish without a topcoat tend to lift at the edges within a few days. Proper sealing with topcoat and re-applying topcoat every few days resolves most premature wear issues.
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
              { href: "/what-are/what-are-nail-stickers/", label: "What Are Nail Stickers?" },
              { href: "/what-are/what-are-chrome-nails/", label: "What Are Chrome Nails?" },
              { href: "/what-are/what-are-ombre-nails/", label: "What Are Ombre Nails?" },
              { href: "/what-are/what-are-cat-eye-nails/", label: "What Are Cat Eye Nails?" },
              { href: "/what-are/what-are-french-tip-nails/", label: "What Are French Tip Nails?" },
              { href: "/what-are/what-are-nail-shapes/", label: "All Nail Shapes Explained" },
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
