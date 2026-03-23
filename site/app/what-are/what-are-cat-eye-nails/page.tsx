import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Eye Nails: What They Are, Colors, Designs & How to Do Them",
  description:
    "Cat eye nails use a magnetic gel that creates a shifting, light-catching streak resembling a cat's eye. Learn what cat eye nails are, the best colors (pink, black, red), popular designs, and how to do them step by step.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-cat-eye-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-cat-eye-nails/",
    title: "Cat Eye Nails: What They Are, Colors, Designs & How to Do Them",
    description:
      "Cat eye nails use a magnetic gel that creates a shifting, light-catching streak resembling a cat's eye. Learn what cat eye nails are, the best colors (pink, black, red), popular designs, and how to do them step by step.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Cat Eye Nails", item: "https://shenailsalon.com/what-are/what-are-cat-eye-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cat Eye Nails: What They Are, Colors, Designs & How to Do Them",
  description:
    "A complete guide to cat eye nails. Covers what cat eye nails are, how the magnetic gel creates the shifting streak effect, the most popular colors (pink, black, red, green, blue), popular cat eye nail designs, cat eye nail polish vs gel, and a step-by-step application guide.",
  url: "https://shenailsalon.com/what-are/what-are-cat-eye-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-cat-eye-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are cat eye nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cat eye nails are a nail art style that uses a special magnetic gel polish. The gel contains tiny iron-oxide particles. When a magnet is held over the wet gel before curing, the particles align into a linear stripe or oval shape that catches the light at different angles, creating an effect that looks similar to the vertical slit pupil of a cat's eye. The result is a deep, dimensional shimmer that shifts as the nail moves.",
      },
    },
    {
      "@type": "Question",
      name: "How do you do cat eye nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cat eye nails are done by applying a cat eye magnetic gel polish over a cured base coat, then immediately holding a cat eye magnet 1 to 2 millimeters above the wet gel for 5 to 10 seconds before curing under a UV or LED lamp. The magnet pulls the iron-oxide particles in the gel into a defined streak or pattern. You must work one nail at a time because the gel must still be wet when the magnet is applied. Once cured, the pattern is permanent and sealed with a topcoat.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most popular cat eye nail color?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black cat eye nails and red cat eye nails are the most searched cat eye nail colors, alongside pink cat eye nails. Black cat eye gel creates a dramatic, deep finish with a silver or gold streak depending on the powder formulation. Red cat eye nails produce a rich, jewel-like effect. Pink cat eye nails are popular for a softer, more romantic look. Green cat eye nails and blue cat eye nails are rising in popularity, particularly in emerald and cobalt shades.",
      },
    },
    {
      "@type": "Question",
      name: "What is cat eye nail polish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cat eye nail polish refers to magnetic gel polish formulated with iron-oxide particles that respond to a magnet. It is not regular nail polish. Most cat eye nail polishes are UV or LED-cured gel formulas. They come in dozens of colors including red, black, green, pink, blue, and holographic multi-chrome options. A dedicated cat eye magnet tool is required to create the streak effect. Without the magnet, cat eye gel polish cures to a flat, shimmer-free color.",
      },
    },
    {
      "@type": "Question",
      name: "How long do cat eye nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cat eye nails done with a gel formula last 2 to 3 weeks, the same as a standard gel manicure. The magnetic streak pattern is locked into the gel when it cures and does not fade or shift during that time. The finish wears the same way as any gel manicure, with chipping or lifting at the free edge typically starting around 2 weeks depending on nail length and daily activities. Cat eye nail polish applied without a gel base (using a regular topcoat) lasts significantly less, usually 5 to 7 days.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do cat eye nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cat eye nail kits for home use include magnetic gel polish and a cat eye magnet tool. You also need a UV or LED nail lamp, a base coat, and a topcoat. The most important technique is to work one nail at a time and apply the magnet immediately after brushing on the gel while it is still completely wet. If the gel has started to set, the magnet will not move the particles and no streak will form. Practice on a few nails to get comfortable with the timing before doing a full set.",
      },
    },
  ],
};

const colorRows = [
  ["Black cat eye", "Deep black with silver, gold, or red streak", "Bold, dramatic, most popular color overall"],
  ["Red cat eye", "Rich red with shifting gold or copper line", "Elegant, statement-making, popular for events"],
  ["Pink cat eye", "Soft to deep pink with linear shimmer", "Romantic, feminine, versatile for everyday wear"],
  ["Green cat eye", "Emerald or forest green with shifting streak", "Jewel-toned, nature-inspired, trending"],
  ["Blue cat eye", "Cobalt, navy, or sky blue with bright line", "Cool-toned, eye-catching, popular in summer"],
  ["White cat eye", "Clean white with subtle silver shimmer", "Minimalist, modern, works on short and long nails"],
  ["Purple cat eye", "Deep violet with shifting lilac or silver line", "Mysterious, rich, popular for autumn and winter"],
  ["Multi-chrome cat eye", "Shifts between multiple colors in the light", "Most dramatic effect, rainbow or holographic streak"],
];

const catEyeVsRegularRows = [
  ["Base formula", "Magnetic gel with iron-oxide particles", "Standard gel polish"],
  ["Effect", "Shifting streak or oval pattern in the color", "Flat solid color or shimmer throughout"],
  ["Tool required", "Cat eye magnet (specific shape for streak type)", "No extra tool"],
  ["Application technique", "Work one nail at a time, magnet before cure", "Apply and cure all nails together"],
  ["Durability", "2 to 3 weeks", "2 to 3 weeks"],
  ["Finish depth", "Deep, dimensional, moves with the nail", "Flat, uniform color"],
  ["Cost at salon", "$45 to $75", "$30 to $55"],
  ["DIY difficulty", "Moderate (timing sensitive)", "Easy"],
];

const applicationSteps = [
  "Prep your nails by pushing back cuticles, lightly buffing the nail surface, and wiping with a dehydrating nail cleanser or alcohol.",
  "Apply a gel base coat to all nails and cure under a UV or LED lamp for the time specified by the manufacturer.",
  "Apply the cat eye magnetic gel polish to one nail only. Do not cure yet. Work one nail at a time because the gel must be fully wet for the magnet to work.",
  "Hold the cat eye magnet 1 to 2 millimeters above the wet gel without touching the nail. Hold it still for 5 to 10 seconds. Watch the streak or oval pattern form as the magnet pulls the iron-oxide particles into alignment.",
  "While keeping the magnet in place over the nail, slide the nail under your lamp and cure it. Some magnetic gels allow you to cure after removing the magnet. Check the instructions for your specific formula.",
  "Repeat steps 3 to 5 for each nail, working one nail at a time.",
  "Apply a second coat of cat eye gel to all nails if you want a deeper, more intense color. Repeat the magnet step on each nail before curing each coat.",
  "Apply a no-wipe gel topcoat to all nails and cure fully. The topcoat seals the magnetic pattern and adds shine without affecting the streak.",
];

const designRows = [
  ["Classic single stripe", "One centered streak from base to tip", "Most recognizable, works on any color"],
  ["Double stripe", "Two parallel streaks using a dual magnet", "More intricate, popular on longer nails"],
  ["Oval / lens effect", "Oval or pupil-shaped flash in the center", "Looks most like an actual cat eye"],
  ["Diagonal streak", "Off-center stripe at an angle", "Modern, asymmetric look"],
  ["Multi-chrome cat eye", "Color-shifting pattern that changes hue in light", "Most dramatic, often green-to-purple or red-to-gold"],
  ["Aurora cat eye", "Holographic, multi-color shifting streak", "Newest trend, popular on short and medium nails"],
  ["Half-moon cat eye", "Streak in the lower half of the nail only", "Soft, subtle variation for everyday wear"],
];

export default function CatEyeNailsPage() {
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
            <span>Cat Eye Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Cat Eye Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Cat eye nails use a special magnetic gel polish to create a deep, shifting streak that resembles the vertical pupil of a cat's eye. The effect comes from iron-oxide particles inside the gel that align when a magnet is held over the wet polish before curing. This guide covers what cat eye nails are, how they work, the most popular colors, popular designs, and how to do them at home or in a salon. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are cat eye nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Cat Eye Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye nails are a nail art style produced using a magnetic gel polish that contains tiny iron-oxide particles. When a cat eye magnet is held close to the wet gel before it cures under a UV or LED lamp, the magnetic field pulls the iron-oxide particles into a defined line or oval shape. Once the gel cures, the particles are permanently set in that alignment, creating a narrow streak that catches the light differently from the rest of the nail.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The result is a dimensional, shifting effect that looks like the vertical slit pupil of a cat's eye, which is where the name comes from. As the nail moves in light, the streak appears to glow from within or shift position. The effect is subtle in low light and very striking in direct light or sunlight.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Cat eye nails originated in nail salons in East Asia and spread globally through social media around 2018 to 2019. They remain one of the most consistently trending nail looks in the United States because the effect is dramatic but the application uses the same gel polish system most salons already have. The only additional tool required is the cat eye magnet.
            </p>
          </div>

          {/* How cat eye nails work */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Cat Eye Nails Work</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The science behind cat eye nails is straightforward. The gel formula contains suspended iron-oxide particles, the same type of magnetic particles used in certain pigments and inks. While the gel is wet and uncured, these particles can move freely through the formula.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              When a magnet is brought near the surface, the particles migrate toward or away from the magnetic field depending on their polarity, gathering into a concentrated line or oval. That concentrated line of particles reflects light at a different angle than the surrounding gel, creating the bright streak effect.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Different magnet shapes produce different patterns. A straight bar magnet creates a single streak across the nail. A dual magnet creates two parallel lines. Some magnets have an oval or lens shape that produces the classic pupil-like oval in the center of the nail. Aurora or multi-chrome cat eye formulas use different particle types that create color-shifting effects rather than a single streak.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Key technique: timing is everything</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                The gel must be completely wet when the magnet is applied. If the gel has started to set, even slightly, the particles will not move and no streak will form. Work one nail at a time and apply the magnet immediately after brushing on the gel.
              </p>
            </div>
          </div>

          {/* Cat eye nail colors */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Cat Eye Nail Colors</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye magnetic gel is available in a wide range of colors. The streak effect is most visible in deeper, richer colors where the contrast between the aligned particles and the surrounding gel is highest. Very light or white cat eye formulas produce a subtler shimmer rather than a defined streak.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Color</th>
                    <th className="text-left px-4 py-2 font-semibold">Appearance</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {colorRows.map(([color, appearance, notes], i) => (
                    <tr key={color} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{color}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{appearance}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pink cat eye nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pink Cat Eye Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Pink cat eye nails are one of the most popular cat eye color choices because the streak effect reads as soft and romantic rather than dramatic. Light pink cat eye formulas create a pearl-like shimmer that is appropriate for everyday wear, while deeper rose or hot pink cat eye polishes produce a more defined, glowing streak.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Pink cat eye works on any nail shape and length. It is a popular choice for bridal nails and special occasions because the shifting shimmer photographs well and reads as polished without being bold. Coffin and almond nail shapes are particularly popular pairings for pink cat eye because the curved tip amplifies the streak effect.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For the most visible streak on a pink cat eye, choose a mid-tone or deep pink formula rather than a very pale blush. Very light formulas can produce a subtle aurora effect that is beautiful but less defined than the classic cat eye streak.
            </p>
          </div>

          {/* Black cat eye nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Black Cat Eye Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Black cat eye nails are the most dramatic version of the look. The deep black base makes the streak extremely visible, usually appearing as a bright silver, gold, or red-orange line depending on the specific formula. The high contrast between the dark background and the aligned particles creates a sharp, luminous line that looks almost three-dimensional.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Black cat eye gel with a gold or copper streak is a popular combination for autumn and winter. Black with a silver streak is a year-round classic. Some black cat eye formulas are specifically designed to produce a color-shifting streak that changes from gold to red to green as the nail tilts, called a multi-chrome or galaxy cat eye.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Black cat eye nails pair well with stiletto, coffin, and almond shapes where the long tapered nail gives more surface area for the streak to travel across. On short or square nails, the streak effect is more compact but still striking.
            </p>
          </div>

          {/* Cat eye nail designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Cat Eye Nail Designs</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye gel can be used to create several distinct design variations depending on the magnet shape and technique. The most common designs use a simple bar magnet for a centered streak, but more complex patterns are possible with specialty magnets or layering techniques.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Design</th>
                    <th className="text-left px-4 py-2 font-semibold">How it looks</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {designRows.map(([design, look, notes], i) => (
                    <tr key={design} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{design}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{look}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              For mixed sets, many people choose a classic single streak on most nails and an accent nail with a multi-chrome or aurora cat eye formula. Mixing cat eye colors across a set, for example red on one hand and black on the other, or alternating colors across the fingers, is a popular way to make the effect more personal.
            </p>
          </div>

          {/* Cat eye nail polish */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Cat Eye Nail Polish</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The term cat eye nail polish refers to the magnetic gel polish formula itself. It is not a standard nail polish. Cat eye nail polish is a UV or LED-cured gel that has iron-oxide magnetic particles suspended in the formula. Without these particles, a regular gel polish cannot produce the streak effect even if a magnet is used.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye gel polish is sold at professional beauty supply stores and widely available online. Popular brands include Born Pretty, Beetles, Modelones, and salon-grade brands like Entity, OPI (magnetic line), and CND. The price range for a single bottle is $8 to $25 at the consumer level and $20 to $45 for professional-grade formulas.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The cat eye magnet is always sold separately from the polish, or included as part of a starter kit. A single magnet can be used with any brand of cat eye gel as long as the magnet has enough strength. Weaker magnets may not produce a sharp streak, so this is worth checking in reviews before buying a kit.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Cat eye polish vs regular gel polish</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Regular gel polish cures to a flat color. Cat eye gel cures to the same flat color if no magnet is used, looking identical to standard gel. The magnetic effect only appears when the magnet is applied while the gel is still wet. This means cat eye gel doubles as a regular shimmer gel if you skip the magnet step.
              </p>
            </div>
          </div>

          {/* How to do cat eye nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Do Cat Eye Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye nails require a UV or LED nail lamp, a cat eye magnetic gel polish, a cat eye magnet, a gel base coat, and a gel topcoat. The critical technique is applying the magnet to each nail individually, immediately after the gel is brushed on, before moving to the next nail.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed mt-4" style={{ color: "#707070" }}>
              {applicationSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Cat eye vs regular gel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Cat Eye Nails vs Regular Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye nails are a variation of a gel manicure, not a separate nail system. The structure (base coat, color coat, topcoat, cured under lamp) is identical. The only difference is the magnetic gel formula and the magnet step.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Cat Eye Nails</th>
                    <th className="text-left px-4 py-2 font-semibold">Regular Gel Nails</th>
                  </tr>
                </thead>
                <tbody>
                  {catEyeVsRegularRows.map(([feature, catEye, regular], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{catEye}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How long do cat eye nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Cat Eye Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Cat eye nails done with a gel formula last 2 to 3 weeks, the same as any gel manicure. The magnetic streak pattern is locked into the gel at the moment of curing and does not shift, fade, or disappear during the wear period. What degrades is the gel itself, through chipping at the tips and potential lifting at the cuticle edge.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Applying cuticle oil daily and wearing gloves when using cleaning products will extend the wear. Avoiding using nails as tools and keeping nails at a manageable length reduces chipping at the free edge.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              To remove cat eye nails, use the standard gel removal process: lightly buff the topcoat surface with a 180-grit file, soak cotton pads in 100% acetone, wrap each nail in foil for 10 to 15 minutes, then gently push off the softened gel with a cuticle pusher.
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
              { href: "/what-are/what-are-gel-nails/", label: "What Are Gel Nails?" },
              { href: "/what-are/what-are-chrome-nails/", label: "What Are Chrome Nails?" },
              { href: "/what-are/what-are-ombre-nails/", label: "What Are Ombre Nails?" },
              { href: "/what-are/what-are-gel-x-nails/", label: "What Are Gel-X Nails?" },
              { href: "/what-are/what-are-nail-shapes/", label: "All Nail Shapes Explained" },
              { href: "/what-are/what-are-french-tip-nails/", label: "What Are French Tip Nails?" },
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
