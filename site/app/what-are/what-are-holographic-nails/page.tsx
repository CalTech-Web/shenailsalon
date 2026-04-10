import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holographic Nails: What They Are, Types, Polish vs Powder and How Long They Last",
  description:
    "Holographic nails use prismatic particles to refract light into a shifting rainbow effect. Learn what holographic nails are, the difference between linear and scattered holo, holographic polish vs powder, how to apply them at home, and how long they last.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-holographic-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-holographic-nails/",
    title: "Holographic Nails: What They Are, Types, Polish vs Powder and How Long They Last",
    description:
      "Holographic nails use prismatic particles to refract light into a shifting rainbow effect. Learn what holographic nails are, the difference between linear and scattered holo, holographic polish vs powder, how to apply them at home, and how long they last.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Holographic Nails", item: "https://shenailsalon.com/what-are/what-are-holographic-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Holographic Nails: What They Are, Types, Polish vs Powder and How Long They Last",
  description:
    "A complete guide to holographic nails. Covers what holographic nails are, the difference between linear and scattered holographic formulas, holographic polish versus holographic powder, the best base colors, how to apply holographic nails at home, how long they last, and salon pricing.",
  url: "https://shenailsalon.com/what-are/what-are-holographic-nails/",
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
  dateModified: "2026-04-10",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-holographic-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are holographic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holographic nails are nails finished with a prismatic coating that refracts white light into a shifting rainbow spectrum. The effect comes from microscopic diffraction grating particles, either in a nail polish formula or a dry pigment powder, that split light into its component colors. The rainbow shifts and moves as the hand changes angle, making holographic nails appear to cycle through colors under light. The effect is most dramatic in direct sunlight, bright artificial lighting, or photography flash.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between linear and scattered holographic nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Linear holographic nail polish produces a defined, rainbow-bar effect where the colors appear in a distinct line or arc across the nail, similar to a diffraction grating pattern. Scattered holographic polish distributes the prismatic particles more evenly across the nail surface, creating an all-over sparkle with a less defined linear rainbow and more of a glittery shimmer. Linear holo formulas show the most striking rainbow effect in direct light. Scattered holo formulas look like a multi-color glitter in diffuse light and show a softer rainbow in direct light.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between holographic nails and chrome nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chrome nails use a fine metallic powder rubbed onto cured gel to produce a solid, mirror-like reflective finish in a single color, typically silver, gold, pink, or rose gold. Holographic nails use prismatic particles that refract light into a rainbow spectrum, so the nail appears to shift through multiple colors as the hand moves. Chrome nails look like a colored mirror. Holographic nails look like a rainbow that moves with the light. Both are applied over a gel base, but chrome gives a metallic shine and holographic gives a prismatic rainbow effect.",
      },
    },
    {
      "@type": "Question",
      name: "How do you apply holographic nail powder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holographic nail powder is applied over a cured gel base without wiping off the inhibition layer. Rub a small amount of the powder onto the sticky gel surface using a silicone eyeshadow tool or your fingertip in small circular motions. The powder adheres to the tacky gel and creates the holographic finish. Once the powder is buffed in evenly, apply a gel topcoat and cure to seal it. Do not wipe the topcoat before curing, as some formulas lift the powder. The holographic effect is most intense when the base gel color is black, dark navy, or deep burgundy.",
      },
    },
    {
      "@type": "Question",
      name: "How long do holographic nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holographic gel nails done at a salon last 2 to 3 weeks, the same as a standard gel manicure. The holographic powder or polish is sealed under a gel topcoat, so it does not fade or rub off during normal wear. Holographic nail polish without a gel topcoat lasts 5 to 7 days. Holographic powder applied at home over gel typically lasts 1 to 2 weeks, as a professional seal holds longer than a home application. Edge chipping at the tips is the most common durability issue across all holographic nail types.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do holographic nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The easiest at-home method is holographic nail polish, which is applied exactly like regular polish and requires no special tools. For a stronger effect, holographic nail powder kits are available for under $20 and require a gel base coat, UV or LED lamp, holographic pigment powder, and a gel topcoat. The key technique is applying the powder onto the uncured sticky layer of the gel base, buffing it in with a silicone tool, then sealing with a no-wipe gel topcoat and curing. This gives a significantly more intense holographic effect than polish alone.",
      },
    },
    {
      "@type": "Question",
      name: "How much do holographic nails cost at a salon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At a California nail salon, a gel manicure with a holographic finish typically costs $40 to $65 depending on the salon and complexity. A holographic powder finish added as an upgrade to a gel manicure is usually a $10 to $20 upcharge. Full holographic nail art with multiple colors or detailed designs costs more, often $55 to $85. Holographic accent nails, where just one or two nails get the holo finish, are usually available for a $5 to $10 add-on to a standard gel service.",
      },
    },
  ],
};

const holoTypesRows = [
  ["Linear holographic polish", "Prismatic particles that produce a defined rainbow arc across the nail", "Strong, distinct rainbow lines in direct light"],
  ["Scattered holographic polish", "Evenly dispersed prismatic particles for all-over sparkle", "Glittery rainbow shimmer, softer effect than linear"],
  ["Holographic glitter gel", "Gel formula with holographic glitter particles suspended in it", "Bold, multi-dimensional holo sparkle under gel"],
  ["Holographic pigment powder", "Dry diffractive powder rubbed onto tacky gel surface", "Intense mirror-like rainbow, applied like chrome powder"],
  ["Holographic chrome powder", "Chrome-style powder with diffractive finish (also called holo chrome)", "Smooth, mirror-rainbow hybrid effect"],
  ["Holographic foil transfer", "Pre-cut holographic foil pressed onto adhesive gel", "Geometric holographic patterns, no rubbing required"],
  ["Duochrome / color-shifting", "Pigment that shifts between two or more colors at different angles", "Related but distinct from holo; shifts colors, not rainbow spectrum"],
];

const baseColorRows = [
  ["Black", "Maximum contrast, makes rainbow shift most visible and vivid", "Most dramatic holographic effect"],
  ["Dark navy", "Deep blue base amplifies the rainbow refraction", "Strong effect, slightly softer than black"],
  ["Deep burgundy or wine", "Rich warm base adds warmth to the rainbow shift", "Bold and warm-toned holo result"],
  ["Silver or gray", "Neutral base blends with the silver tones in holographic particles", "Subtle, all-over shimmer effect"],
  ["Nude or sheer", "Light base creates a softer, wearable holo shimmer", "Everyday professional look, pastel holo effect"],
  ["White", "Bright base creates an icy, pastel rainbow effect", "Cool, light-toned holo, popular for bridal nails"],
];

const vsChromRows = [
  ["Finish", "Rainbow spectrum that shifts with light angle", "Solid metallic mirror in one color"],
  ["Effect", "Prismatic, multi-color refraction", "Reflective, mirror-like shine"],
  ["Application", "Polish or powder rubbed onto tacky gel", "Powder rubbed onto cured gel, same technique"],
  ["Best base color", "Dark colors (black, navy) for most impact", "Any color, most dramatic on dark bases"],
  ["Everyday wearability", "Statement look, eye-catching in any light", "More versatile, mirrors standard metallic nails"],
  ["Wear time (salon gel)", "2 to 3 weeks", "2 to 3 weeks"],
];

const applicationRows = [
  ["Holographic nail polish", "Apply 2 coats like regular polish; topcoat optional", "Beginner", "5 to 7 days (regular), 2 to 3 weeks (gel base)"],
  ["Holographic powder over gel", "Apply gel base, cure, rub powder onto tacky layer, seal with gel topcoat, cure", "Intermediate", "2 to 3 weeks (salon), 1 to 2 weeks (home)"],
  ["Holographic glitter gel", "Apply and cure under UV/LED lamp like standard gel polish", "Beginner", "2 to 3 weeks"],
  ["Holographic foil transfer", "Apply adhesive gel, press foil, peel, seal with topcoat", "Intermediate", "1 to 2 weeks"],
  ["Holographic dip powder", "Follow standard dip process using holographic dip formula", "Beginner/Intermediate", "3 to 4 weeks"],
];

const wearTimeRows = [
  ["Holographic gel nails (salon)", "2 to 3 weeks"],
  ["Holographic powder over gel (home)", "1 to 2 weeks"],
  ["Holographic gel polish (home)", "1 to 2 weeks"],
  ["Holographic nail polish (regular)", "5 to 7 days"],
  ["Holographic dip powder nails", "3 to 4 weeks"],
  ["Holographic foil transfer", "1 to 2 weeks before edge lift"],
];

const prosRows = [
  ["Unique visual effect", "No other nail finish produces the shifting rainbow refraction of true holographic"],
  ["Works on all nail types", "Holo polish and powder apply over gel, acrylic, dip, or regular polish"],
  ["Strong photography appeal", "Holographic nails photograph exceptionally well under any lighting"],
  ["Beginner-accessible", "Holographic nail polish requires no special tools or techniques"],
  ["Wide color range", "Holographic products are available in every base color from nude to black"],
  ["Layerable with nail art", "Holo powder can be applied over nail art, stamping, or gradient bases"],
];

const consRows = [
  ["Requires gel for best results", "Holographic powder needs a gel base to adhere; polish-only results are weaker"],
  ["UV/LED lamp needed for powder", "At-home holo powder application requires a nail lamp to cure the gel layers"],
  ["Powder can be uneven at home", "Patchy application is common for beginners; technique takes practice"],
  ["Very bold look", "Full holographic nails may not suit conservative workplaces or everyday wear"],
  ["Dusting during application", "Dry holographic pigment powders can drift beyond the nail if not applied carefully"],
];

export default function HolographicNailsPage() {
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
            <span>Holographic Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Holographic Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Holographic nails use prismatic particles to refract light into a shifting rainbow spectrum across the nail surface. The effect is produced by microscopic diffraction grating structures in the nail product that split white light into its component colors. This guide covers what holographic nails are, the different types of holographic finishes, the difference between linear and scattered holo, how holographic powder compares to holographic polish, the best base colors, how to apply them at home, how long they last, and what to expect at a salon. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are holographic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Holographic Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nails are nails finished with a coating that refracts white light into a full rainbow spectrum. The prismatic particles in holographic nail products act as diffraction gratings, splitting light into its component wavelengths and dispersing them at different angles. The result is a nail that appears to cycle through red, orange, yellow, green, blue, and violet as the hand moves in light. The rainbow shifts and intensifies under direct light sources such as sunlight, studio lighting, and camera flash.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The holographic effect is different from standard glitter nails. Regular glitter reflects light in a single color based on the color of the glitter particle. Holographic particles contain a diffractive structure that breaks white light into the full visible spectrum, regardless of the base color of the particle. A silver holographic particle does not just reflect silver. It produces a moving rainbow.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              I tried holographic nails for the first time using a holographic nail polish from ILNP, and the thing that surprised me most was how different they looked indoors versus in sunlight. Inside under regular room lighting, they looked like a very shiny, sparkly silver. But the moment I walked outside, the rainbow appeared across every nail and shifted as I moved my hand. It is one of those effects that genuinely photographs better than it looks in person, which is saying something because they look incredible in person.
            </p>
          </div>

          {/* Types of holographic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Holographic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nails come in several formats, from ready-to-apply polish to dry pigment powders and foil transfers. The type determines the application method, the intensity of the effect, and how long the finish lasts:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">What it is</th>
                    <th className="text-left px-4 py-2 font-semibold">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {holoTypesRows.map(([type, what, effect], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{what}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Linear vs scattered */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Linear vs Scattered Holographic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nail polish comes in two distinct formulas: linear holographic and scattered holographic. The difference is how the prismatic particles are oriented in the formula.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Linear holographic polish aligns the diffractive particles in a consistent direction, so when light hits the nail, it produces a defined rainbow bar or arc that sweeps across the nail. This is the most visually striking version of holographic nails. In direct sunlight, a linear holo nail shows a clear rainbow line that moves as the hand rotates. Brands known for strong linear holographic formulas include ILNP Ultra Holographic, Cirque Colors Holo, and KBShimmer Clearly On Top (as a topcoat).
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Scattered holographic polish distributes the prismatic particles randomly, creating an all-over sparkle rather than a defined rainbow bar. In direct light, scattered holo nails show a softer, multi-color shimmer rather than a distinct arc. In diffuse indoor light, they look similar to a very fine silver or color glitter. Scattered holographic is more versatile for everyday wear because it is less intense than linear, while still producing a clearly prismatic shimmer.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Many holographic nail polishes fall somewhere between fully linear and fully scattered. The product description or swatch photos usually indicate which formula type it is. If you want the classic rainbow-arc effect, look specifically for "linear holographic" in the product name.
            </p>
          </div>

          {/* Holographic nail powder */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Holographic Nail Powder</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nail powder is a dry diffractive pigment applied to the tacky inhibition layer of a cured gel nail. The technique is identical to{" "}
              <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                chrome nail powder
              </Link>
              , but instead of producing a solid metallic mirror finish, holographic powder produces a rainbow-shifting prismatic effect. A small amount of powder is rubbed onto the sticky gel surface using a silicone eyeshadow tool or a fingertip in small circular motions until the powder adheres evenly.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The key difference between holographic powder and chrome powder is the particle structure. Chrome powder is made of ultra-fine metallic particles that create a mirror-like reflective surface. Holographic powder contains diffractive particles with microscopic grooves that refract light into the full rainbow spectrum rather than reflecting it as a single metallic color. The application process is the same, but the results are visually distinct.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic powder produces the most intense effect over dark bases. Black gel, dark navy, and deep burgundy bases make the rainbow refraction visible from across a room. Over light or nude gel bases, the holographic effect is softer and more pastel. Holographic powder kits are widely available for $10 to $20 and include the pigment, a silicone tool, and sometimes a no-wipe topcoat.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Application tip</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Do not wipe the inhibition layer off the gel base before applying holographic powder. The tacky surface is what the powder adheres to. Cure the gel base, skip the wipe, apply the powder, buff it in, then seal immediately with a no-wipe gel topcoat and cure again. Wiping before sealing can lift the powder and destroy the effect.
              </p>
            </div>
          </div>

          {/* Best base colors */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Best Base Colors for Holographic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The base color underneath a holographic finish has a significant impact on how vivid the rainbow effect appears. Darker bases create more contrast with the rainbow refraction and produce the most dramatic holographic effect:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Base color</th>
                    <th className="text-left px-4 py-2 font-semibold">How it affects the holo</th>
                    <th className="text-left px-4 py-2 font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {baseColorRows.map(([base, how, result], i) => (
                    <tr key={base} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{base}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Holographic vs chrome */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Holographic Nails vs Chrome Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nails and{" "}
              <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                chrome nails
              </Link>{" "}
              are often confused because both use a powder applied to gel and both produce a high-shine reflective finish. The key difference is the type of reflection:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Comparison</th>
                    <th className="text-left px-4 py-2 font-semibold">Holographic nails</th>
                    <th className="text-left px-4 py-2 font-semibold">Chrome nails</th>
                  </tr>
                </thead>
                <tbody>
                  {vsChromRows.map(([comparison, holo, chrome], i) => (
                    <tr key={comparison} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{comparison}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{holo}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{chrome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Holographic nails and chrome nails can also be layered. Applying holographic powder over a chrome-finished gel base produces a finish that has both the metallic mirror quality of chrome and the prismatic rainbow of holographic, sometimes called holographic chrome.
            </p>
          </div>

          {/* How to apply */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Apply Holographic Nails at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nails can be achieved at home with a few different methods, ranging from beginner-friendly polish to intermediate powder techniques:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Method</th>
                    <th className="text-left px-4 py-2 font-semibold">How it works</th>
                    <th className="text-left px-4 py-2 font-semibold">Skill level</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear time</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationRows.map(([method, how, skill, wear], i) => (
                    <tr key={method} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{method}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{skill}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              For holographic powder over{" "}
              <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                gel nails
              </Link>
              , the most common beginner mistake is applying the powder too lightly. Work the powder in using firm circular motions until the entire nail surface feels coated and the rainbow effect is visible before sealing. Patchy application usually means not enough powder or too-light pressure during buffing.
            </p>
          </div>

          {/* How long do holographic nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Holographic Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nail wear time depends on the application method. Powder over gel lasts significantly longer than holographic polish alone:
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
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The holographic finish itself does not fade or lose its prismatic quality during the wear period, as long as it is properly sealed under a gel topcoat. What degrades the manicure is the same as any gel: chipping and lifting at the free edge after 2 weeks. The holographic effect on remaining nail surface stays intact until the manicure is removed.
            </p>
          </div>

          {/* Salon vs DIY */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Holographic Nails at a Salon vs at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              At a California nail salon, a gel manicure with a holographic finish typically costs $40 to $65. A holographic powder upgrade added to an existing gel service is usually a $10 to $20 upcharge. Holographic nail art with multiple colors, gradient bases, or detailed designs costs more, often $55 to $85. Holographic accent nails, where just one or two nails receive the holo powder treatment, are typically a $5 to $10 add-on.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              At home, a basic holographic nail powder kit with pigment, a silicone applicator tool, and instructions costs $10 to $20. A UV or LED nail lamp, if you do not already own one, costs an additional $20 to $50. The gel base coat and no-wipe topcoat add another $10 to $20 together. Total startup cost for at-home holographic powder nails is $40 to $90, with each subsequent manicure costing only the gel products used.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Holographic nail polish requires no special tools. A bottle of quality linear holographic nail polish costs $8 to $18 and produces multiple manicures. The finish is less intense than powder, but for everyday wearability, holographic nail polish is the simplest and most cost-effective way to try the look.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Holographic Nails</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg p-4 border" style={{ background: "#F0FDF4", borderColor: "#BBF7D0" }}>
                <p className="font-semibold mb-3 text-sm" style={{ color: "#15803D" }}>Pros</p>
                <ul className="space-y-2">
                  {prosRows.map(([title, desc]) => (
                    <li key={title}>
                      <p className="text-sm font-medium" style={{ color: "#1E293B" }}>{title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#707070" }}>{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg p-4 border" style={{ background: "#FFF7F7", borderColor: "#FECACA" }}>
                <p className="font-semibold mb-3 text-sm" style={{ color: "#B91C1C" }}>Cons</p>
                <ul className="space-y-2">
                  {consRows.map(([title, desc]) => (
                    <li key={title}>
                      <p className="text-sm font-medium" style={{ color: "#1E293B" }}>{title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#707070" }}>{desc}</p>
                    </li>
                  ))}
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

          {/* Related guides */}
          <div className="rounded-xl p-6 border" style={{ background: "#F8FBFF", borderColor: "rgba(4,107,210,0.15)" }}>
            <p className="font-semibold mb-4" style={{ color: "#1E293B" }}>Related Nail Guides</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  Chrome Nails: Colors, Application and How Long They Last
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-glitter-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  Glitter Nails: Types, Designs and How Long They Last
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">
                  Nail Art: Types, Designs and Ideas
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Gel Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-matte-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Matte Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-ombre-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Ombre Nails?
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
