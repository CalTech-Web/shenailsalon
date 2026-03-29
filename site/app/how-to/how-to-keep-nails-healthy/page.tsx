import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Keep Nails Healthy: 10 Tips, Signs and Daily Routine",
  description:
    "Learn how to keep nails healthy with 10 proven tips, signs of healthy vs unhealthy nails, the best vitamins for nail health, and a daily care routine. Written by Nancy Davidson.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-keep-nails-healthy/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-keep-nails-healthy/",
    title: "How To Keep Nails Healthy: 10 Tips, Signs and Daily Routine",
    description:
      "Learn how to keep nails healthy with 10 proven tips, signs of healthy vs unhealthy nails, the best vitamins for nail health, and a daily care routine. Written by Nancy Davidson.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    { "@type": "ListItem", position: 3, name: "How To Keep Nails Healthy", item: "https://shenailsalon.com/how-to/how-to-keep-nails-healthy/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Keep Nails Healthy: 10 Tips, Signs and Daily Routine",
  description:
    "A complete guide to healthy nails covering what healthy nails look like, 10 tips to maintain nail health, the best vitamins and nutrients for nails, what damages nails most, and a daily nail care routine.",
  url: "https://shenailsalon.com/how-to/how-to-keep-nails-healthy/",
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
  dateModified: "2026-03-28",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-keep-nails-healthy/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you keep your nails healthy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To keep nails healthy, moisturize your cuticles daily with cuticle oil, file in one direction only, avoid using nails as tools, wear gloves when doing dishes or cleaning, and take breaks from nail enhancements every 4 to 8 weeks. Eating enough protein and biotin supports the keratin your nails are made of. Keeping nails trimmed to a manageable length reduces the risk of breaks that can damage the nail bed.",
      },
    },
    {
      "@type": "Question",
      name: "What are the signs of healthy nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Healthy nails are pale pink or nude in color, smooth and flat without ridges or pitting, firm to the touch without being brittle, and free of white spots, yellowing, or unusual discoloration. The cuticles are intact and unbroken, and the nails grow at a consistent rate of about 3 millimeters per month. Nails that are thin, peeling in layers, or deeply grooved often indicate dehydration, nutritional deficiency, or damage from enhancements.",
      },
    },
    {
      "@type": "Question",
      name: "What vitamins are best for nail health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biotin (vitamin B7) is the most researched vitamin for nail health and is found in eggs, almonds, salmon, and sunflower seeds. Protein is essential because nails are made of keratin, a protein. Zinc, found in meat, shellfish, and legumes, supports nail plate formation. Iron deficiency can cause spoon-shaped nails. Vitamin E, found in nuts and seeds, improves circulation to the nail matrix. Most healthy adults get enough from food, but a deficiency in any of these can cause brittle, slow-growing, or oddly shaped nails.",
      },
    },
    {
      "@type": "Question",
      name: "How do you keep nails healthy after acrylics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After removing acrylics, nails are often thin, dry, and more fragile than normal because the filing and acetone exposure during the process strip moisture and thin the nail plate. To recover: apply cuticle oil twice daily, use a strengthening base coat for the first 2 to 4 weeks, keep nails short while they regrow, avoid acetone-based polish removers, wear gloves during chores, and eat enough protein and biotin. Most nails return to full health within 6 to 8 weeks as the nail plate grows out.",
      },
    },
    {
      "@type": "Question",
      name: "What damages nails the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest sources of nail damage are: peeling off gel or acrylic nails (which rips layers of the nail plate off), prolonged exposure to water (which softens and weakens the nail), filing back and forth in a sawing motion (which causes splitting at the free edge), and acetone overuse without moisturizing afterward. Using nails to open cans or pry objects causes physical breaks. Cutting cuticles too aggressively can damage the nail matrix and cause irregular nail growth.",
      },
    },
    {
      "@type": "Question",
      name: "How often should you take a break from nail enhancements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most nail technicians recommend taking a 2 to 4 week break from acrylic, hard gel, and dip powder nails every 3 to 4 months. Gel polish is gentler and can usually be worn continuously as long as it is soaked off properly rather than peeled. During a break, apply cuticle oil daily and use a nail strengthener or base coat. If your nails are visibly thin, peeling, or painful, take a longer break of 4 to 6 weeks to allow the nail plate to grow out fully.",
      },
    },
  ],
};

export default function HowToKeepNailsHealthyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <span>How To Keep Nails Healthy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Keep Nails Healthy
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#707070" }}>
            Healthy nails grow consistently, resist breaking, and stay smooth and pale pink without ridges or yellowing. Most nail problems come from the same handful of habits: filing the wrong way, skipping cuticle care, and peeling off enhancements instead of soaking them. This guide covers what healthy nails actually look like, 10 habits that keep them that way, and what to do when they need to recover.
          </p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Signs of healthy nails */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>What Healthy Nails Look Like</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#707070" }}>
              Before working on nail health, it helps to know what you are aiming for. Healthy nails have a specific set of characteristics that are easy to check at home.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-3 font-semibold">Feature</th>
                    <th className="text-left px-4 py-3 font-semibold">Healthy</th>
                    <th className="text-left px-4 py-3 font-semibold">Unhealthy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Color", "Pale pink or nude with a white free edge", "Yellow, white spots, brown, dark streaks, or gray"],
                    ["Surface", "Smooth and flat", "Ridges, pitting, grooves, or bumps"],
                    ["Texture", "Firm with slight flexibility", "Brittle and snapping, or soft and bending easily"],
                    ["Layers", "Single solid plate", "Peeling or flaking in thin layers"],
                    ["Growth rate", "About 3 mm per month", "Very slow growth or no visible growth"],
                    ["Cuticles", "Intact, soft, and unbroken", "Torn, dry, cut too short, or inflamed"],
                    ["Nail bed", "Firmly attached to nail plate", "Lifting or separated from the nail plate"],
                  ].map(([feature, healthy, unhealthy], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FAFC" : "#fff" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{healthy}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{unhealthy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 tips */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>10 Tips To Keep Nails Healthy</h2>
            <p className="mb-6 leading-relaxed" style={{ color: "#707070" }}>
              These ten habits cover the full range of nail health, from daily moisture to how you handle enhancements and diet.
            </p>
            <div className="space-y-5">
              {[
                {
                  num: "1",
                  title: "Apply cuticle oil daily",
                  body: "Cuticle oil moisturizes the nail plate and the skin around it. Dry cuticles tear easily, exposing the nail matrix to bacteria and disrupting healthy nail growth. Apply a drop of cuticle oil or jojoba oil to each cuticle every night before bed. This single habit makes more difference than any other product.",
                },
                {
                  num: "2",
                  title: "File in one direction only",
                  body: "Filing back and forth creates micro-tears at the free edge that cause splitting and peeling. File from the outer corner toward the center using light strokes. Use a fine-grit file (180 to 220 grit) on natural nails. Never file wet nails since water softens the nail plate and makes it more prone to damage.",
                },
                {
                  num: "3",
                  title: "Wear gloves for dishes and cleaning",
                  body: "Prolonged water exposure is one of the main causes of weak, peeling nails. Water softens the nail plate, which then expands and contracts as it dries, stressing the nail over time. Rubber gloves for dishes and cleaning prevent this. Even a few minutes of soaking affects nail integrity.",
                },
                {
                  num: "4",
                  title: "Never peel off gel or acrylic nails",
                  body: "Peeling off gel, acrylic, or dip powder nails removes the top layers of your natural nail with them. This thins the nail plate and can cause months of recovery time. Always soak off with acetone using the foil-wrap method, or go to a salon for professional removal.",
                },
                {
                  num: "5",
                  title: "Keep nails trimmed to a manageable length",
                  body: "Longer nails are more likely to snag, bend, and break. A break that extends below the free edge can damage the nail bed. Keeping nails at a length where they do not flex under normal use reduces breakage and keeps the nail plate intact.",
                },
                {
                  num: "6",
                  title: "Do not use nails as tools",
                  body: "Opening cans, peeling stickers, prying lids, and scraping surfaces all stress the nail and can cause sudden breaks or force the nail to lift from the nail bed. Use the pad of your finger or an actual tool for these tasks.",
                },
                {
                  num: "7",
                  title: "Always use a base coat",
                  body: "Nail polish, especially dark colors, can stain the nail plate yellow over time. A base coat creates a barrier between the polish and the nail. It also improves adhesion and reduces chipping. Strengthening base coats with hydrolyzed keratin or calcium add an extra layer of protection.",
                },
                {
                  num: "8",
                  title: "Take breaks from enhancements",
                  body: "Acrylic, hard gel, and dip nails all require filing and acetone exposure during removal, which thins the nail over time. Taking a 2 to 4 week break every 3 to 4 months lets the nail plate grow out and recover. During breaks, use a nail hardener or strengthening base coat.",
                },
                {
                  num: "9",
                  title: "Eat enough protein and biotin",
                  body: "Nails are made of keratin, a protein. A diet low in protein produces slower-growing, weaker nails. Biotin (vitamin B7) supports keratin production and is found in eggs, salmon, almonds, and sunflower seeds. Most people do not need supplements if they eat a balanced diet, but deficiencies in biotin, zinc, or iron directly affect nail health.",
                },
                {
                  num: "10",
                  title: "Moisturize hands after washing",
                  body: "Hand soap strips natural oils from the skin and nails. Applying a hand cream or cuticle oil after washing replaces that moisture. This is especially important in winter when cold, dry air increases nail brittleness. Look for creams with shea butter, glycerin, or urea.",
                },
              ].map((tip) => (
                <div
                  key={tip.num}
                  className="rounded-xl border border-gray-100 p-5"
                  style={{ background: "#F8FAFC", borderLeft: "3px solid #046BD2" }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "#046BD2" }}
                    >
                      {tip.num}
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{tip.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{tip.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What damages nails */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>What Damages Nails Most</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#707070" }}>
              Understanding what harms nails is just as useful as knowing what helps them. These six factors account for the majority of nail damage.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-3 font-semibold">Cause</th>
                    <th className="text-left px-4 py-3 font-semibold">How it damages nails</th>
                    <th className="text-left px-4 py-3 font-semibold">How to prevent it</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Peeling off enhancements", "Removes top layers of the nail plate, leaving thin, rough, tender nails", "Always soak off with acetone using the foil-wrap method"],
                    ["Prolonged water exposure", "Softens the nail and causes repeated expansion and contraction that weakens it over time", "Wear rubber gloves for dishes and cleaning"],
                    ["Filing back and forth", "Creates micro-tears at the free edge that cause splitting and peeling", "File in one direction from the sides toward the center only"],
                    ["Acetone without moisturizing", "Strips oils from the nail plate and surrounding skin, causing brittleness", "Apply cuticle oil immediately after acetone use"],
                    ["Using nails as tools", "Causes sudden physical breaks and can force the nail to lift from the nail bed", "Use the pad of your finger or actual tools instead"],
                    ["Cutting cuticles", "Breaks the protective seal at the base of the nail, allowing bacteria and fungi in", "Push cuticles back gently with a wooden stick instead of cutting"],
                  ].map(([cause, damage, prevention], i) => (
                    <tr key={cause} style={{ background: i % 2 === 0 ? "#F8FAFC" : "#fff" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{cause}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{damage}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{prevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Vitamins and nutrients */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Best Vitamins and Nutrients for Nail Health</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#707070" }}>
              Nail health starts from within. These five nutrients have the most direct impact on how nails grow, how strong they are, and how fast they recover from damage.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-3 font-semibold">Nutrient</th>
                    <th className="text-left px-4 py-3 font-semibold">Why nails need it</th>
                    <th className="text-left px-4 py-3 font-semibold">Best food sources</th>
                    <th className="text-left px-4 py-3 font-semibold">Deficiency signs</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Biotin (B7)", "Supports keratin production and nail plate structure", "Eggs, almonds, salmon, sunflower seeds, sweet potato", "Brittle, splitting nails; slow growth"],
                    ["Protein", "Nails are made of keratin, a structural protein", "Meat, fish, eggs, legumes, dairy, tofu", "Thin, soft, slow-growing nails"],
                    ["Zinc", "Involved in cell division and nail matrix function", "Beef, shellfish, pumpkin seeds, legumes, nuts", "White spots, slow growth, brittle nails"],
                    ["Iron", "Carries oxygen to the nail matrix for healthy growth", "Red meat, spinach, lentils, fortified cereals", "Spoon-shaped nails, pale nail beds, ridges"],
                    ["Vitamin E", "Antioxidant that supports circulation to the nail matrix", "Almonds, sunflower seeds, avocado, olive oil", "Yellowing, slow growth, dry cuticles"],
                  ].map(([nutrient, why, sources, signs], i) => (
                    <tr key={nutrient} style={{ background: i % 2 === 0 ? "#F8FAFC" : "#fff" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{nutrient}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{why}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{sources}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{signs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              Most healthy adults get enough of these nutrients from food. Biotin supplements are widely marketed for nails, but they only help if you are actually deficient. If your nails are dramatically thin or slow-growing, a blood test to check for deficiencies is more useful than buying a supplement on a guess.
            </p>
          </section>

          {/* Daily routine */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Daily Nail Care Routine</h2>
            <p className="mb-5 leading-relaxed" style={{ color: "#707070" }}>
              A consistent routine is more effective than any single product or treatment. This routine takes under five minutes and covers the basics.
            </p>
            <div className="space-y-3">
              {[
                { step: "Morning", action: "Apply a drop of cuticle oil to each cuticle and massage it in. Do this before putting on any hand cream or sunscreen." },
                { step: "After washing hands", action: "Apply a hand cream or moisturizer after every hand wash, especially after using dish soap or hand sanitizer. Focus on the cuticles and the back of the hand." },
                { step: "Before bed", action: "Apply cuticle oil again. This is the most important application because your hands are still for hours while you sleep, allowing the oil to absorb fully." },
                { step: "Weekly", action: "File and shape nails as needed. Check for any lifting, cracking, or discoloration. Push cuticles back gently with a wooden cuticle stick after a shower when the skin is soft." },
                { step: "Monthly", action: "Assess your nail length and condition. If nails are thin or damaged, trim them shorter and take a break from enhancements if you are using them." },
              ].map(({ step, action }) => (
                <div key={step} className="flex gap-4 p-4 rounded-xl border border-gray-100" style={{ background: "#F8FAFC" }}>
                  <span
                    className="flex-shrink-0 text-xs font-bold px-2 py-1 rounded-md h-fit"
                    style={{ background: "rgba(4,107,210,0.1)", color: "#046BD2" }}
                  >
                    {step}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{action}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery after enhancements */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>How To Recover Nail Health After Enhancements</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#707070" }}>
              Acrylic, gel, and dip powder nails can leave natural nails thin and dry after removal. Recovery takes time because you are waiting for the damaged portion of the nail plate to grow out. Here is what to expect and do at each stage.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-3 font-semibold">Stage</th>
                    <th className="text-left px-4 py-3 font-semibold">What you will notice</th>
                    <th className="text-left px-4 py-3 font-semibold">What to do</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Days 1 to 7", "Nails feel thin, fragile, and slightly rough; may be sensitive to pressure", "Apply cuticle oil twice daily; use a strengthening base coat; keep nails short"],
                    ["Weeks 1 to 2", "Surface may still be rough from filing; some peeling is possible", "Buff lightly with a 220-grit buffer to smooth; avoid acetone; keep moisturizing"],
                    ["Weeks 2 to 4", "New nail growth becomes visible at the base; old damage starts to grow out", "Continue cuticle oil and strengthener; nails are still fragile at the tips"],
                    ["Weeks 4 to 6", "Most of the thin or damaged nail has grown out; nails start to feel firmer", "Begin filing to preferred shape; can return to enhancements if desired"],
                    ["Weeks 6 to 8", "Nail plate is largely recovered; normal texture and firmness restored", "Full recovery; resume normal nail routine including enhancements if wanted"],
                  ].map(([stage, notice, action], i) => (
                    <tr key={stage} style={{ background: i % 2 === 0 ? "#F8FAFC" : "#fff" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{stage}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{notice}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Common mistakes */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>Common Nail Health Mistakes</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-3 font-semibold">Mistake</th>
                    <th className="text-left px-4 py-3 font-semibold">Why it matters</th>
                    <th className="text-left px-4 py-3 font-semibold">What to do instead</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Cutting cuticles", "Removing the cuticle breaks the protective seal, allowing bacteria and fungi to reach the nail matrix", "Push cuticles back with a wooden stick after a warm shower; never cut them"],
                    ["Skipping base coat", "Polish stains the nail plate yellow over time and chips faster without adhesion from a base coat", "Apply a base coat before every polish application"],
                    ["Soaking nails before manicure", "Salons sometimes soak nails in water before polish, which causes the nail to expand; polish chips faster once it dries and contracts", "Prep with a dry nail surface; use dehydrator if going gel"],
                    ["Filing wet nails", "Wet nails are significantly softer and more prone to splitting and tearing at the free edge", "Always file dry nails; trim first if the nail is too long to file dry"],
                    ["Relying on gelatin or biotin when not deficient", "Biotin only helps if you have a deficiency; most people get enough from food", "Focus on overall diet: protein, zinc, iron, and vitamin E"],
                    ["Ignoring white spots", "White spots are usually from minor trauma, but persistent spots can indicate fungal infection or systemic issues", "Check the pattern; spots that grow out are trauma; spots that spread need evaluation"],
                  ].map(([mistake, why, instead], i) => (
                    <tr key={mistake} style={{ background: i % 2 === 0 ? "#F8FAFC" : "#fff" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "#1E293B" }}>{mistake}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{why}</td>
                      <td className="px-4 py-3" style={{ color: "#707070" }}>{instead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Nail Health Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div
                  key={faq.name}
                  className="rounded-xl border border-gray-100 p-5"
                  style={{ background: "#F8FAFC", borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#3A5FCC"}` }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: "#1E293B" }}>{faq.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related guides */}
          <section className="rounded-xl border border-gray-200 p-6" style={{ background: "#F0F5FA" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Related Nail Care Guides</h2>
            <ul className="space-y-2">
              {[
                { title: "How To Strengthen Nails", href: "/how-to/how-to-strengthen-nails/" },
                { title: "How To Make Nails Grow Faster", href: "/how-to/how-to-make-nails-grow-faster/" },
                { title: "How To Push Back Cuticles", href: "/how-to/how-to-push-back-cuticles/" },
                { title: "What Causes White Spots on Nails?", href: "/what-are/what-are-white-spots-on-nails/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#046BD2" }}
                  >
                    {link.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </article>
    </>
  );
}
