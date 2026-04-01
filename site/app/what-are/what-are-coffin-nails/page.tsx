import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffin Nails: Shape Guide, Short vs Long, Designs & French Tip",
  description:
    "Coffin nails taper to a flat, squared-off tip, combining the drama of stiletto with the durability of a wider edge. Learn what coffin nails are, short vs long options, french tip designs, colors, and how they compare to almond.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-coffin-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-coffin-nails/",
    title: "Coffin Nails: Shape Guide, Short vs Long, Designs & French Tip",
    description:
      "Coffin nails taper to a flat, squared-off tip, combining the drama of stiletto with the durability of a wider edge. Learn what coffin nails are, short vs long options, french tip designs, colors, and how they compare to almond.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Coffin Nails", item: "https://shenailsalon.com/what-are/what-are-coffin-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Coffin Nails: Shape Guide, Short vs Long, Designs & French Tip",
  description:
    "A complete guide to coffin nails. Covers what coffin nails are, how they differ from almond and stiletto, short vs long options, french tip coffin designs, colors, acrylic application, and maintenance.",
  url: "https://shenailsalon.com/what-are/what-are-coffin-nails/",
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
  dateModified: "2026-03-22",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-coffin-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are coffin nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffin nails are a nail shape where the sides taper inward like stiletto nails but end in a flat, squared-off tip rather than a sharp point. The silhouette resembles a coffin or casket from the side, which gives the shape its name. They are also called ballerina nails because the flat tip resembles the toe of a ballet pointe shoe. Coffin nails require significant length and are almost always done in acrylic or hard gel extensions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between coffin nails and ballerina nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffin nails and ballerina nails are exactly the same shape. The two names refer to the same tapered, flat-tipped silhouette. Coffin is the more common name in North America; ballerina is used more frequently in Europe and by nail technicians referencing the resemblance to a pointe shoe. There is no structural difference between them.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between coffin nails and almond nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both coffin and almond nails taper from the sides, but they finish differently at the tip. Coffin nails end in a flat, squared-off tip. Almond nails end in a soft rounded point. Coffin nails have a bolder, more geometric look; almond nails are more elegant and slightly less fragile at the tip. Coffin nails generally require more length than almond nails to achieve the shape clearly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do short coffin nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Short coffin nails use 4 to 6 mm of free edge past the fingertip. At this length the taper is subtle but the flat tip is still visible, giving the look a cleaner finish than square without the extreme length of traditional coffin nails. Short coffin nails are easier to maintain and are a practical option for people who want the shape without very long nails. Acrylic or gel extensions are still commonly used to add structure even at shorter lengths.",
      },
    },
    {
      "@type": "Question",
      name: "How long do coffin nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coffin nails done in acrylic typically last 2 to 3 weeks before a fill is needed as the natural nail grows. The full set (acrylic applied to a natural nail or tip) lasts until you decide to remove it, which is typically 6 to 8 weeks with regular fills. Hard gel coffin nails have a similar maintenance schedule. The flat tip is more durable than stiletto because it has a wider surface area, but coffin nails are still more prone to breaking than square or oval shapes.",
      },
    },
    {
      "@type": "Question",
      name: "How much do coffin nails cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full set of coffin acrylic nails at a salon typically costs $40 to $80 depending on length, nail art, and location. In California, prices range from $50 to $100 for a full set at mid-range salons. Fill appointments to maintain the shape cost $25 to $50 every 2 to 3 weeks. Adding nail art, ombre effects, or chrome powder increases the total by $10 to $30.",
      },
    },
  ],
};

const vsAlmondRows = [
  ["Tip shape", "Flat, squared-off", "Soft, rounded point"],
  ["Look", "Bold, geometric, fashion-forward", "Elegant, classic, feminine"],
  ["Minimum length needed", "Long (6 to 8 mm free edge)", "Medium (3 to 5 mm free edge)"],
  ["Fragility", "Moderate (tip is wider than stiletto)", "Moderate (tip is narrower than coffin)"],
  ["Best for", "Nail art, bold designs, long nails", "Most finger types, everyday wear"],
  ["Salon popularity", "Very high", "Very high"],
];

const vsStilettoCoffinRows = [
  ["Tip shape", "Flat, squared-off", "Extremely sharp point", "Soft, rounded point"],
  ["Length required", "Long to extra long", "Long to extra long", "Medium to long"],
  ["Fragility", "Moderate", "Very high", "Moderate"],
  ["Best look", "Bold, geometric", "Dramatic, edgy", "Elegant, feminine"],
  ["Nail art surface", "Large flat canvas", "Small sharp tip", "Narrow curved tip"],
];

const colorRows = [
  ["Black coffin nails", "3,300/mo", "High contrast, dramatic, gothic or edgy aesthetic"],
  ["Pink coffin nails", "3,000/mo", "Feminine, versatile, works in nude pink through hot pink"],
  ["White coffin nails", "1,700/mo", "Clean, modern, popular with French tip variations"],
  ["Red coffin nails", "1,500/mo", "Classic, bold, especially popular in dark burgundy"],
  ["Nude coffin nails", "Broad cluster", "Skin-tone match, makes nails look naturally longer"],
  ["Chrome coffin nails", "Part of chrome cluster", "Mirror finish, especially striking on the flat tip surface"],
];

const frenchTipSteps = [
  "Apply a sheer nude or blush base coat over the entire nail and cure under a UV or LED lamp.",
  "Place a curved nail guide (nail tape or form sticker) just below the free edge where the white tip will begin.",
  "Apply white gel polish or acrylic paint over the free edge in one or two thin coats. The flat coffin tip creates a clean straight line across the top.",
  "Remove the guide while the polish is still slightly tacky for the sharpest edge.",
  "Cure under the lamp, then apply a top coat over the entire nail for a unified glossy finish.",
  "For a thicker, more three-dimensional French tip, use white acrylic applied with a brush over the free edge before the top coat.",
];

const maintenanceTips = [
  "Book fills every 2 to 3 weeks to rebalance the product as the natural nail grows.",
  "Avoid using your nails as tools. The tapered sides of coffin nails are more prone to stress cracks than square shapes.",
  "Apply cuticle oil daily to the nail bed and surrounding skin to keep the nail plate flexible.",
  "If a coffin nail breaks at the tip, have a nail technician repair the break with acrylic rather than trying to file it into a shorter shape yourself, which can compromise the taper.",
  "Use gloves for cleaning, gardening, and tasks involving prolonged water exposure. Water weakens the bond between the product and natural nail.",
];

export default function CoffinNailsPage() {
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
            <span>Coffin Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Coffin Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Coffin nails, also called ballerina nails, are a nail shape where the sides taper inward and the tip ends in a flat, squared-off edge. The silhouette resembles a coffin from above, which is where the name comes from. This guide covers what coffin nails are, short vs long options, french tip designs, popular colors, acrylic application, and how the shape compares to almond and stiletto. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are coffin nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Coffin Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Coffin nails are a nail shape where the sides of the nail taper inward toward the tip, like a stiletto nail, but instead of coming to a point, the tip is cut straight across to create a flat, squared-off end. The combination of tapered sides and a flat tip gives the nail a silhouette that looks like a coffin or casket from above.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The shape is also called ballerina nails because the flat tip resembles the squared-off toe box of a ballet pointe shoe. Both names refer to exactly the same shape. In North America, coffin is the more commonly used term. In Europe, ballerina is more widely used.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Coffin nails became mainstream around 2012 to 2014, largely through celebrity adoption on social media. They quickly became one of the most requested shapes at nail salons worldwide and remain consistently popular alongside almond and oval as the top three requested shapes.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Because of the length required to show the full taper and flat tip clearly, coffin nails are almost always done in acrylic or hard gel extensions. Natural nails rarely grow long enough or strong enough to hold the shape without breaking. The flat tip has more surface area than a stiletto point, which makes coffin nails more durable than stiletto, but still more fragile than square or oval shapes.
            </p>
          </div>

          {/* Coffin vs Almond */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Coffin vs Almond Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Coffin and almond are the two most popular tapered nail shapes, and they are frequently compared because both narrow from the sides. The critical difference is how the tip finishes. Coffin ends flat and square. Almond ends in a soft, rounded point.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              This difference in tip shape produces two very different aesthetics. Coffin nails look geometric and bold, with a strong horizontal line across the top of the nail. Almond nails look more elegant and organic, with a curved tip that flows naturally from the taper. Almond also requires less length than coffin to look intentional.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Coffin</th>
                    <th className="text-left px-4 py-2 font-semibold">Almond</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAlmondRows.map(([feature, coffin, almond], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{coffin}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{almond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Coffin vs Stiletto vs Almond */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Coffin vs Stiletto vs Almond</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              These three shapes are all tapered but differ significantly in tip shape, fragility, and the type of look they produce. Coffin sits in the middle: more dramatic than almond, more durable than stiletto.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Feature</th>
                    <th className="text-left px-4 py-2 font-semibold">Coffin</th>
                    <th className="text-left px-4 py-2 font-semibold">Stiletto</th>
                    <th className="text-left px-4 py-2 font-semibold">Almond</th>
                  </tr>
                </thead>
                <tbody>
                  {vsStilettoCoffinRows.map(([feature, coffin, stiletto, almond], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{feature}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{coffin}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{stiletto}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{almond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Short coffin nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Short Coffin Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Short coffin nails use 4 to 6 mm of free edge past the fingertip. At this length, the taper from the sides is visible and the flat tip reads clearly, but the overall nail stays at a practical, manageable length. Short coffin nails are the most wearable version of the shape for everyday life.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Short coffin nails are popular because they give the geometric coffin silhouette without the maintenance burden of longer lengths. They work at the office, during physical activity, and in professional settings where very long nails are not practical. The shape still elongates the fingers noticeably compared to square nails at the same length.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Short coffin tip</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                For short coffin nails, nail technicians often use a nail tip or form to add a small amount of length before applying acrylic, even if the goal is a short final result. The tip gives enough free edge to file the taper and cut the flat top cleanly.
              </p>
            </div>
          </div>

          {/* Medium and long coffin */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Medium and Long Coffin Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Medium coffin nails extend roughly 7 to 10 mm past the fingertip. At this length the taper is dramatic and the flat tip is unmistakable. This is the most photographed and most imitated version of the shape in nail art content.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Long coffin nails extend 11 mm or more past the fingertip, sometimes reaching 15 to 20 mm for fashion and nail art purposes. At extreme lengths, the taper becomes very aggressive and the flat tip acts almost like a small platform. Long coffin nails are almost always done in acrylic because acrylic provides the rigidity needed to maintain the shape at that length without cracking or bending.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Both medium and long coffin nails require regular fills every 2 to 3 weeks. At longer lengths, the nail is more prone to stress cracks near the sidewalls because the tapered section is narrower and more vulnerable to lateral force.
            </p>
          </div>

          {/* Coffin acrylic nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Coffin Acrylic Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Coffin acrylic nails are the most common way to achieve the shape. A nail technician applies acrylic over the natural nail or a nail tip, builds up the product for strength and length, then files the sides to taper inward and cuts the tip straight across to create the coffin flat top.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The cost of coffin acrylic nails at a salon typically runs $40 to $80 for a full set, depending on length, location, and whether nail art is included. In California, mid-range salons charge $50 to $100 for a full coffin acrylic set. Fill appointments cost $25 to $50 every 2 to 3 weeks.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Hard gel is an alternative to acrylic for coffin nails. Gel is applied in layers and cured under a UV or LED lamp. It has a lighter feel than acrylic and produces less odor during application. Gel coffin nails cost similarly to acrylic and require the same fill schedule. The key difference is that hard gel must be filed off for removal, whereas acrylic can be soaked off with acetone.
            </p>
          </div>

          {/* Coffin french tip nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Coffin French Tip Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Coffin french tip nails are one of the most searched nail designs. The flat tip of the coffin shape creates a natural canvas for a clean white french tip line, and the taper gives the finished look a more elegant, elongated appearance than a french tip on square nails.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The french tip on coffin nails is typically done with a nude or sheer base, which makes the nail look naturally pink before the white tip, and a crisp white stripe applied across the flat tip. Variations include a thick white tip (called a mega french or chunky french tip), a thin natural-looking white edge, or a colored tip in black, pink, or colored gel for a modern french.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed mt-4" style={{ color: "#707070" }}>
              {frenchTipSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p className="leading-relaxed mt-4" style={{ color: "#707070" }}>
              Medium coffin french tip nails are currently one of the most searched nail looks online, combining the structural drama of the coffin shape with the classic appeal of the french tip. Black coffin french tip nails and white coffin french tip nails are the most popular color variations.
            </p>
          </div>

          {/* Coffin nail colors */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Popular Coffin Nail Colors</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The flat tip of coffin nails works well with almost any color because it provides a clean, straight line at the end of the nail. Here are the most popular coffin nail color choices and what makes each one work on this shape.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Color</th>
                    <th className="text-left px-4 py-2 font-semibold">Monthly Searches</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {colorRows.map(([color, volume, notes], i) => (
                    <tr key={color} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{color}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{volume}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Maintenance */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Maintain Coffin Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Coffin nails require consistent maintenance to keep the shape sharp and the product bonded to the natural nail. The tapered sides and the length that most coffin nails require make them more vulnerable to breakage than shorter or rounder shapes. These habits reduce the risk of damage.
            </p>
            <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed" style={{ color: "#707070" }}>
              {maintenanceTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
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
              { href: "/what-are/what-are-nail-shapes/", label: "All Nail Shapes Explained" },
              { href: "/what-are/what-are-almond-shaped-nails/", label: "What Are Almond Nails?" },
              { href: "/what-are/what-are-stiletto-nails/", label: "What Are Stiletto Nails?" },
              { href: "/what-are/what-are-french-tip-nails/", label: "What Are French Tip Nails?" },
              { href: "/what-are/what-are-acrylic-nails/", label: "What Are Acrylic Nails?" },
              { href: "/what-are/what-are-gel-nails/", label: "What Are Gel Nails?" },
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
              Browse all 50 nail guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
