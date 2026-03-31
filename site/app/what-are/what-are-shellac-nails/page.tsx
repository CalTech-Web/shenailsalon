import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Shellac Nails? How Long They Last, Cost & Removal",
  description:
    "Shellac nails are a hybrid gel-polish by CND that lasts 2 to 4 weeks without chipping. Learn how a shellac manicure works, how much it costs, and how to remove it.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-shellac-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-shellac-nails/",
    title: "What Are Shellac Nails? How Long They Last, Cost & Removal",
    description:
      "Shellac nails are a hybrid gel-polish by CND that lasts 2 to 4 weeks without chipping. Learn how a shellac manicure works, how much it costs, and how to remove it.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are Shellac Nails?", item: "https://shenailsalon.com/what-are/what-are-shellac-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Shellac Nails? How Long They Last, Cost & Removal",
  description:
    "Shellac nails are a hybrid gel-polish by CND that lasts 2 to 4 weeks without chipping. This guide covers how shellac works, how much it costs, and how to remove it.",
  url: "https://shenailsalon.com/what-are/what-are-shellac-nails/",
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
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-shellac-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are shellac nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac nails are a hybrid nail polish system by CND (Creative Nail Design) that combines the flexibility of regular nail polish with the durability of gel polish. Each coat is cured under a UV or LED lamp, and the finished manicure lasts 2 to 4 weeks without chipping or peeling. Shellac does not add length or thickness to the nail.",
      },
    },
    {
      "@type": "Question",
      name: "What is a shellac manicure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shellac manicure is a salon service using CND Shellac polish. The nail technician applies a base coat, two color coats, and a top coat, curing each layer under a UV or LED lamp for 30 to 60 seconds. The entire service takes 45 to 60 minutes and produces a high-gloss finish that lasts 2 to 4 weeks. Removal requires soaking in acetone for 10 to 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How long do shellac nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac nails typically last 2 to 4 weeks without chipping. Most people find they last around 2 to 3 weeks before the grown-out base becomes noticeable. How long shellac lasts depends on nail prep, the quality of application, and how much stress the nails are exposed to (frequent hand washing, cleaning, or manual work shortens wear).",
      },
    },
    {
      "@type": "Question",
      name: "How much do shellac nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shellac manicure at a nail salon typically costs between $30 and $60 in the United States, compared to $15 to $25 for a regular polish manicure. The higher price reflects the lamp cure time, product cost, and longer application process. In California, shellac manicures typically run $35 to $55 depending on the city and salon.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove shellac nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To remove shellac nails at home: (1) Lightly buff the surface of each nail with a fine-grit file to break the seal. (2) Soak a cotton ball in 100% acetone and place it on the nail. (3) Wrap each finger in foil to hold the cotton in place. (4) Wait 10 to 15 minutes. (5) Slide the foil and cotton off, and the shellac should come away with it. Use a cuticle pusher to gently remove any remaining product. Avoid peeling shellac off, as this can remove layers of the natural nail plate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between shellac and gel nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shellac is a specific brand of hybrid polish by CND that is thinner and more flexible than standard gel polish. Gel nails refer to any UV-cured gel polish and include hard gel extensions that add length. Shellac only works on natural nails and cannot extend them. Gel extensions use builder gel or acrylic to sculpt a longer nail shape. Shellac lasts 2 to 4 weeks; gel extensions last 3 to 5 weeks.",
      },
    },
  ],
};

const vsGelRows = [
  ["Adds nail length", "No", "Yes (with gel extension)"],
  ["Cure method", "UV or LED lamp", "UV or LED lamp"],
  ["Wear time", "2 to 4 weeks", "3 to 5 weeks"],
  ["Removal", "Acetone soak (10 to 15 min)", "Acetone soak or file off"],
  ["Thickness", "Thin, flexible", "Thicker, more rigid"],
  ["Cost (salon)", "$30 to $60", "$45 to $80"],
  ["Nail damage", "Low", "Low to moderate"],
];

const vsPolishRows = [
  ["Cure method", "UV or LED lamp", "Air dry"],
  ["Wear time", "2 to 4 weeks", "5 to 7 days"],
  ["Chip resistance", "Very high", "Low to moderate"],
  ["Finish", "High-gloss", "Variable"],
  ["Removal", "Acetone soak", "Regular nail polish remover"],
  ["At-home application", "Requires UV lamp", "No equipment needed"],
  ["Cost (salon)", "$30 to $60", "$15 to $25"],
];

export default function ShelacNailsPage() {
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
            <span>What Are Shellac Nails?</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Shellac Nails?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Shellac nails are a hybrid gel-polish system by CND (Creative Nail Design) that cures under a UV or LED lamp and lasts 2 to 4 weeks without chipping. This guide explains how shellac works, how long it lasts, how much it costs, and how it compares to gel nails. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* What are shellac nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Shellac Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Shellac is a brand name for a patented hybrid nail polish made by CND. It sits between a standard nail polish and a hard gel: it applies as thinly as regular polish but cures under a UV or LED lamp the way gel does. The result is a chip-resistant, high-gloss finish that stays intact for 2 to 4 weeks.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              I love how shellac feels on my nails. It never gets thick or heavy, which is the main thing that puts me off gel extensions. The color range is also huge. CND offers over 100 shades, and the finish always looks salon-fresh for the first two weeks.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              One thing to know: shellac does not add any length or thickness. If you have short nails, shellac will not make them longer. For that, you would need gel extensions, acrylics, or gel-x. Shellac is a polish overlay on your natural nail only.
            </p>
          </div>

          {/* What is a shellac manicure */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Is a Shellac Manicure?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A shellac manicure is a salon service where a nail technician applies the CND Shellac system to your natural nails. The process takes 45 to 60 minutes and follows these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Nails are filed, shaped, and cuticles are pushed back.</li>
              <li>A dehydrating prep solution is applied to remove oils from the nail plate.</li>
              <li>A thin base coat is applied and cured under a UV or LED lamp for 30 to 60 seconds.</li>
              <li>Two coats of color are applied, each cured separately.</li>
              <li>A top coat is applied and cured.</li>
              <li>Nail cleanser is wiped over the nails to remove the tacky inhibition layer.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Once the top coat is cured, the nails are completely dry and hard. There is no wait time, which is one of the reasons shellac manicures are so popular.
            </p>
          </div>

          {/* How long do shellac nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Shellac Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Shellac nails last 2 to 4 weeks in most cases. The first two weeks are typically flawless. After that, you will start to see a gap at the base of the nail as it grows out. The polish itself rarely chips, but the grown-out base becomes more visible after three weeks.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Shellac will last longer if you avoid prolonged soaking in water, use gloves for cleaning, and apply a drop of cuticle oil daily. Hands that are frequently in water, such as those of nurses or swimmers, tend to see shorter wear of around 1 to 2 weeks.
            </p>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Much Do Shellac Nails Cost?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A shellac manicure at a nail salon costs between $30 and $60 in the United States. The variation depends on the salon, location, and whether you are getting a basic color or nail art.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              In California, shellac manicures typically run $35 to $55. This is about $15 to $25 more than a standard polish manicure. The extra cost covers the lamp cure time, the product itself, and the slightly longer application. Considering shellac lasts 3 to 4 times longer than regular polish, the cost per week works out lower.
            </p>
          </div>

          {/* Shellac vs Gel */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Shellac vs Gel Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              People often use "shellac" and "gel" interchangeably, but they are not the same thing. Shellac is a specific brand of thin, flexible hybrid polish. Gel refers to a broader category of UV-cured products, including thicker hard gels used to build nail extensions.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Shellac</th>
                    <th className="text-left px-4 py-2 font-semibold">Gel Nails</th>
                  </tr>
                </thead>
                <tbody>
                  {vsGelRows.map(([feature, shellac, gel], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shellac}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{gel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Shellac vs Regular Polish */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Shellac vs Regular Nail Polish</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The biggest difference between shellac and regular nail polish is wear time. Regular polish chips within a few days for most people, especially at the tips. Shellac lasts 2 to 4 weeks because each layer is hardened by the UV lamp rather than dried by air evaporation.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Shellac</th>
                    <th className="text-left px-4 py-2 font-semibold">Regular Polish</th>
                  </tr>
                </thead>
                <tbody>
                  {vsPolishRows.map(([feature, shellac, polish], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shellac}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{polish}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Pros and Cons of Shellac Nails</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#166534" }}>Pros</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#166534" }}>
                  <li>Lasts 2 to 4 weeks without chipping</li>
                  <li>Nails are dry and hard immediately after curing</li>
                  <li>Thin and flexible, feels close to natural nail</li>
                  <li>Low nail damage compared to acrylics</li>
                  <li>High-gloss finish throughout the wear period</li>
                  <li>100+ color options from CND</li>
                </ul>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: "#FFF7F7", borderColor: "#FCA5A5" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "#991B1B" }}>Cons</h3>
                <ul className="space-y-1 text-sm" style={{ color: "#991B1B" }}>
                  <li>Cannot add nail length or thickness</li>
                  <li>Requires UV or LED lamp for at-home application</li>
                  <li>Must be removed with acetone, not regular remover</li>
                  <li>More expensive than regular polish</li>
                  <li>Repeated acetone exposure can dry nails over time</li>
                  <li>Requires a professional for best results</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to remove */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Remove Shellac Nails at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Shellac must be removed with acetone. You cannot peel it off without damaging the natural nail plate. Here is how to remove it safely at home:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li>Lightly buff the surface of each nail with a 180-grit file to break the top coat seal.</li>
              <li>Soak a cotton ball in 100% acetone (not acetone-free remover).</li>
              <li>Place the soaked cotton ball on the nail and wrap the finger in aluminum foil.</li>
              <li>Wait 10 to 15 minutes.</li>
              <li>Press down on the foil as you slide it off. The shellac should come away with the cotton.</li>
              <li>Use a wooden cuticle pusher to gently remove any remaining product.</li>
              <li>Apply cuticle oil or hand cream to rehydrate nails and skin.</li>
            </ol>
            <p className="leading-relaxed mt-3" style={{ color: "#707070" }}>
              Never peel or force shellac off. Doing so removes layers of the natural nail along with the product, which causes thin, weak nails over time.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Shellac Nails</h2>
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
                { title: "How To Apply Shellac Nails at Home", href: "/how-to/how-to-apply-shellac/" },
                { title: "How To Remove Shellac Nails at Home", href: "/how-to/how-to-remove-shellac-nails/" },
                { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
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
                Browse all 49 What Are guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
