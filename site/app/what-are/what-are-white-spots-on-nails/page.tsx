import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Spots on Nails: Causes, Vitamin Deficiency & How to Get Rid of Them",
  description:
    "White spots on nails are usually caused by minor trauma, not vitamin deficiency. Learn what causes leukonychia, what it means, and how to get rid of white spots on fingernails.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-white-spots-on-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-white-spots-on-nails/",
    title: "White Spots on Nails: Causes, Vitamin Deficiency & How to Get Rid of Them",
    description:
      "White spots on nails are usually caused by minor trauma, not vitamin deficiency. Learn what causes leukonychia, what it means, and how to get rid of white spots on fingernails.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    {
      "@type": "ListItem",
      position: 3,
      name: "White Spots on Nails",
      item: "https://shenailsalon.com/what-are/what-are-white-spots-on-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "White Spots on Nails: Causes, Vitamin Deficiency & How to Get Rid of Them",
  description:
    "White spots on nails (leukonychia) are most commonly caused by minor trauma to the nail matrix, not vitamin deficiency. This guide covers every cause, what white spots mean, and how to get rid of them.",
  url: "https://shenailsalon.com/what-are/what-are-white-spots-on-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-white-spots-on-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes white spots on nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common cause of white spots on nails is minor trauma to the nail matrix, such as bumping, pressing, or squeezing the base of the nail. Other causes include allergic reactions to nail products, fungal nail infections, and in rarer cases, zinc deficiency or other systemic health conditions. The calcium deficiency explanation is a myth. Most white spots on healthy adults are from trauma alone.",
      },
    },
    {
      "@type": "Question",
      name: "Why do I have white spots on my nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White spots on your nails are almost always caused by minor trauma to the nail that happened weeks before the spot appeared. Because nails grow slowly (about 3 mm per month), the trauma often happened so long ago that you do not remember it. Spots that appeared after a manicure may be from an allergic reaction to nail polish or gel. Spots accompanied by thickened, crumbly nails may indicate a fungal infection.",
      },
    },
    {
      "@type": "Question",
      name: "Are white spots on nails a sign of vitamin deficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rarely. The idea that white spots mean you lack calcium or zinc is a widespread myth. Calcium deficiency does not cause white nail spots. Severe zinc deficiency can cause a type of white discoloration called true leukonychia, but this is uncommon in people eating a normal diet. For most people, white spots are from trauma, not nutrition.",
      },
    },
    {
      "@type": "Question",
      name: "How do you get rid of white spots on nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most white spots on nails go away on their own as the nail grows out, which takes 3 to 6 months for a fingernail and up to 12 months for a toenail. There is no treatment needed for trauma-caused spots. If spots are from a fungal infection, an antifungal nail treatment (topical or oral) is required. If spots are from an allergic reaction to nail products, stopping use of the product allows the new nail to grow in clear.",
      },
    },
    {
      "@type": "Question",
      name: "What do white spots on nails mean medically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White spots on nails are called leukonychia. True leukonychia, where the white is in the nail plate itself, is almost always from trauma or a minor nail matrix disruption. Apparent leukonychia, where the nail plate looks white but the discoloration disappears when you press on it, can indicate liver disease, kidney problems, or very low albumin levels. See a doctor if white or pale discoloration covers most of the nail, does not grow out, or is accompanied by other symptoms.",
      },
    },
    {
      "@type": "Question",
      name: "Do white spots on nails go away on their own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Trauma-caused white spots grow out with the nail and disappear completely. A fingernail takes 3 to 6 months to fully replace itself, so a spot near the base of the nail can take that long to reach the tip and be filed away. You do not need to treat trauma-caused spots. If a white spot does not grow out after 6 months, or if it is accompanied by thickening, brittleness, or crumbling, see a dermatologist to rule out a fungal infection.",
      },
    },
  ],
};

const causesRows = [
  ["Minor trauma (most common)", "Bump or squeeze to the nail base or cuticle area months before", "No treatment needed, grows out"],
  ["Allergic reaction", "Reaction to nail polish, gel, acrylic, or nail hardener ingredients", "Stop the product, grows out"],
  ["Fungal nail infection", "Often accompanied by thickening, yellowing, or crumbling", "Antifungal treatment required"],
  ["Zinc deficiency", "Rare, seen with severe nutritional deficiency", "Dietary correction or supplementation"],
  ["Systemic illness (rare)", "Can include kidney disease, liver disease, heart failure", "Treat underlying condition"],
  ["Arsenic or lead poisoning (rare)", "White bands across the nail (Mees' lines)", "Medical evaluation needed"],
];

const typesRows = [
  ["True leukonychia", "White color is in the nail plate itself", "Stays white when you press on the nail", "Trauma, fungal infection, rare systemic causes"],
  ["Apparent leukonychia", "Discoloration is below the nail plate in the nail bed", "Turns pink/normal when you press on the nail", "Liver disease, kidney disease, low albumin"],
  ["Partial leukonychia", "White spots or streaks covering part of the nail", "Most common type; usually from trauma", "Trauma to the nail matrix"],
  ["Total leukonychia", "Entire nail plate is white", "Rare; may be hereditary or from systemic illness", "Genetic conditions or severe illness"],
];

const growOutRows = [
  ["Fingernail (full regrowth)", "4 to 6 months"],
  ["Toenail (full regrowth)", "9 to 12 months"],
  ["Spot near the nail tip", "1 to 2 months to file away"],
  ["Spot near the nail base (cuticle)", "3 to 6 months to reach the tip"],
  ["Spot from fungal infection", "Does not grow out without antifungal treatment"],
];

export default function WhiteSpotsOnNailsPage() {
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
            <span>White Spots on Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            White Spots on Nails: Causes, What They Mean & How to Get Rid of Them
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            White spots on nails are called leukonychia. Despite what most people believe, they are almost never caused by vitamin or calcium deficiency. The most common cause is minor trauma to the nail that happened weeks before the spot appeared. This guide explains every cause, what white spots mean, and whether you need to do anything about them. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are white spots */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are White Spots on Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              White spots on nails, medically called leukonychia, are areas where the nail plate appears white or milky instead of the normal translucent pink. They are extremely common. Most people will notice them on their fingernails at some point in their lives.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The most important thing to understand is that these spots almost always come from a minor injury to the nail matrix, the area at the base of the nail where new nail cells are produced. When the matrix is disrupted, even slightly, the new nail cells can form with air pockets or structural irregularities, which show up as white spots as the nail grows.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Because fingernails grow at roughly 3 millimeters per month, an injury that happened 6 to 8 weeks ago might only now be showing up as a white spot in the middle of the nail. This delay is why people often cannot connect a white spot to a specific event.
            </p>
          </div>

          {/* Causes table */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Causes White Spots on Nails?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Here are the main causes of white spots on fingernails and toenails, from most to least common.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Cause</th>
                    <th className="text-left px-4 py-2 font-semibold">Details</th>
                    <th className="text-left px-4 py-2 font-semibold">What to Do</th>
                  </tr>
                </thead>
                <tbody>
                  {causesRows.map(([cause, details, action], i) => (
                    <tr key={cause} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{cause}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{details}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trauma section */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Why Minor Trauma Is the Most Common Cause</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The nail matrix sits just beneath the skin at the base of each nail, hidden under the cuticle. It is sensitive. Even light repetitive pressure, such as typing hard, playing an instrument, or pressing the nail against a hard surface, can disrupt it enough to create a white spot.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Common activities that cause trauma-related white spots without people realizing it:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Bumping the fingertip against a hard surface</li>
              <li>Pressing the cuticle area too firmly during a manicure</li>
              <li>Aggressive cuticle cutting or pushing</li>
              <li>Biting or picking at the nails or cuticles</li>
              <li>Wearing tight-fitting shoes (common cause for toenails)</li>
              <li>Repetitive pressure from typing, instruments, or sports</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              The spots show up 4 to 8 weeks after the injury, which is why the connection is so easy to miss.
            </p>
          </div>

          {/* Types of white spots */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of White Spots on Nails</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Not all white nail discoloration is the same. The type of white spot tells you where the problem is and how serious it may be.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">What It Means</th>
                    <th className="text-left px-4 py-2 font-semibold">Press Test</th>
                    <th className="text-left px-4 py-2 font-semibold">Common Causes</th>
                  </tr>
                </thead>
                <tbody>
                  {typesRows.map(([type, meaning, press, causes], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{meaning}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{press}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{causes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              You can do a simple press test at home: press firmly on the white area of your nail. If the white color disappears or turns pink, the discoloration is in the nail bed (apparent leukonychia), which can sometimes signal an underlying health condition. If the white stays white when you press, it is in the nail plate itself (true leukonychia), which is almost always from trauma or a minor cause.
            </p>
          </div>

          {/* Vitamin deficiency */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Are White Spots on Nails a Sign of Vitamin Deficiency?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              This is one of the most persistent myths in nail care. The idea that white spots mean you lack calcium or zinc is widespread but mostly incorrect.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <strong style={{ color: "#1E293B" }}>Calcium deficiency:</strong> There is no scientific evidence that calcium deficiency causes white spots on nails. Calcium does not contribute to nail plate formation in a way that would produce white spots when low.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <strong style={{ color: "#1E293B" }}>Zinc deficiency:</strong> Severe zinc deficiency can cause a type of nail discoloration called true leukonychia, but this is rare in people with a reasonably varied diet. If you eat meat, dairy, legumes, or nuts, you are likely getting adequate zinc. Zinc deficiency serious enough to affect the nails would also cause other symptoms, such as hair thinning, poor wound healing, and a weakened immune system.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For most healthy adults with isolated white spots on a few nails, a vitamin or mineral deficiency is not the cause. Minor trauma is far more likely.
            </p>
          </div>

          {/* Fungal infection */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>White Spots From a Fungal Nail Infection</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A type of fungal nail infection called white superficial onychomycosis causes white chalky patches on the surface of the nail, particularly on toenails. Unlike trauma-caused spots, fungal white patches tend to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Have a crumbly or powdery texture on the nail surface</li>
              <li>Cover a larger area of the nail or multiple nails</li>
              <li>Not grow out and disappear over time</li>
              <li>Spread to other nails or thicken the nail over time</li>
              <li>Be accompanied by yellowing or brittleness</li>
            </ul>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              If your white spots look chalky, spread, or have been present for more than six months without growing out, see a dermatologist. Fungal nail infections require antifungal treatment, either topical or oral, and do not resolve on their own.
            </p>
          </div>

          {/* How to get rid of */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Get Rid of White Spots on Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              What you do depends on the cause. For the most common type, which is trauma-caused spots, the answer is simple: wait. Here is a guide to timeframes:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Situation</th>
                    <th className="text-left px-4 py-2 font-semibold">How Long to Wait</th>
                  </tr>
                </thead>
                <tbody>
                  {growOutRows.map(([situation, time], i) => (
                    <tr key={situation} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{situation}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              While you wait, a few things can reduce the chance of new spots forming:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Apply cuticle oil daily to keep the nail matrix area supple and reduce trauma sensitivity</li>
              <li>Avoid cutting or aggressively pushing back cuticles</li>
              <li>Wear gloves during manual work or cleaning to protect the nail tips</li>
              <li>Choose a nail tech who is gentle around the cuticle area during manicures</li>
              <li>If you suspect an allergic reaction to a nail product, try switching to a different formula or brand</li>
            </ul>
          </div>

          {/* When to see a doctor */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>When to See a Doctor</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Most white spots do not require medical attention. See a dermatologist or your doctor if:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed mb-3" style={{ color: "#707070" }}>
              <li>White spots do not grow out after 6 months on fingernails or 12 months on toenails</li>
              <li>White patches are chalky, powdery, or crumbly</li>
              <li>Multiple nails are affected simultaneously</li>
              <li>The nail is also thickening, yellowing, separating from the nail bed, or has an odor</li>
              <li>The discoloration appears as white bands crossing the entire width of the nail (called Mees' lines, which can indicate heavy metal exposure)</li>
              <li>Large portions of multiple nails appear white or pale and the color disappears when you press on the nail</li>
            </ul>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The last point, known as apparent leukonychia affecting large areas of multiple nails, can sometimes indicate liver disease, kidney problems, or very low protein levels. It is uncommon and is almost always accompanied by other symptoms, but it is worth ruling out if the discoloration is widespread and does not behave like a simple trauma spot.
            </p>
          </div>

          {/* White spots on toenails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>White Spots on Toenails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              White spots on toenails follow the same rules as fingernails, but toenails grow more slowly, so spots take longer to grow out. The most common cause in toenails is the same minor trauma from ill-fitting shoes, stubbing the toe, or tight pressure during pedicures.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              One difference: white superficial onychomycosis, the fungal infection that causes white chalky patches, is more common on toenails than fingernails because feet spend more time in warm, moist environments. If toenail white spots are powdery, spreading, or accompanied by thickening, a fungal infection is more likely than trauma, and treatment is needed.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Do White Spots Mean Something Is Wrong?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Usually harmless if:</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Spots are small and isolated to 1 or 2 nails</li>
                  <li>You can connect them to a recent injury, manicure, or nail biting</li>
                  <li>The white stays white when you press (in the nail plate)</li>
                  <li>Nails are otherwise normal in texture and thickness</li>
                  <li>Spots are moving toward the nail tip over time</li>
                  <li>You have no other symptoms</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Worth checking out if:</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>Spots are on many nails at once with no trauma explanation</li>
                  <li>White areas are crumbly or powdery (possible fungus)</li>
                  <li>Discoloration disappears when you press (apparent leukonychia)</li>
                  <li>Nails are also thickening, yellowing, or separating</li>
                  <li>Spots have not moved after 6 months</li>
                  <li>White horizontal bands cross the full width of the nail</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About White Spots on Nails</h2>
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
                { title: "What Are Nail Shapes?", href: "/what-are/what-are-nail-shapes/" },
                { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
                { title: "How To Shape Your Nails", href: "/how-to/how-to-shape-nails/" },
                { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
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
