import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Nail Salons in California | 50+ City Reviews",
  description: "Nail salon reviews across 50+ California cities. Los Angeles, San Francisco, San Diego, Sacramento, and more. Each city page lists multiple salons with services and pricing.",
  alternates: { canonical: "https://shenailsalon.com/category/california" },
  openGraph: {
    url: "https://shenailsalon.com/category/california",
    title: "Best Nail Salons in California | 50+ City Reviews",
    description: "Nail salon reviews across 50+ California cities. Los Angeles, San Francisco, San Diego, Sacramento, and more. Each city page lists multiple salons with services and pricing.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shenailsalon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "California Nail Salon Directory",
      item: "https://shenailsalon.com/category/california",
    },
  ],
};

const cities = [
  { city: "Los Angeles", href: "/california/nail-salon-los-angeles/" },
  { city: "San Francisco", href: "/california/nail-salon-san-francisco/" },
  { city: "San Diego", href: "/california/nail-salon-san-diego/" },
  { city: "San Jose", href: "/california/nail-salon-san-jose/" },
  { city: "Sacramento", href: "/california/nail-salon-sacramento/" },
  { city: "Fresno", href: "/california/nail-salon-fresno/" },
  { city: "Long Beach", href: "/california/nail-salon-long-beach/" },
  { city: "Oakland", href: "/california/nail-salon-oakland/" },
  { city: "Anaheim", href: "/california/nail-salon-anaheim/" },
  { city: "Santa Ana", href: "/california/nail-salon-santa-ana/" },
  { city: "Riverside", href: "/california/nail-salon-riverside/" },
  { city: "Stockton", href: "/california/nail-salon-stockton/" },
  { city: "Irvine", href: "/california/nail-salon-irvine/" },
  { city: "Chula Vista", href: "/california/nail-salon-chula-vista/" },
  { city: "Corona", href: "/california/nail-salon-corona/" },
  { city: "Santa Clarita", href: "/california/nail-salon-santa-clarita/" },
  { city: "Fontana", href: "/california/nail-salon-fontana/" },
  { city: "Moreno Valley", href: "/california/nail-salon-moreno-valley/" },
  { city: "Rancho Cucamonga", href: "/california/nail-salon-rancho-cucamonga/" },
  { city: "Ontario", href: "/california/nail-salon-ontario/" },
  { city: "Santa Rosa", href: "/california/nail-salon-santa-rosa/" },
  { city: "Bakersfield", href: "/california/nail-salon-bakersfield/" },
  { city: "Modesto", href: "/california/nail-salon-modesto/" },
  { city: "Fremont", href: "/california/nail-salon-fremont/" },
  { city: "Huntington Beach", href: "/california/nail-salon-huntington-beach/" },
  { city: "Glendale", href: "/california/nail-salon-glendale/" },
  { city: "Palmdale", href: "/california/nail-salon-palmdale/" },
  { city: "Salinas", href: "/california/nail-salon-salinas/" },
  { city: "Hayward", href: "/california/nail-salon-hayward/" },
  { city: "Oxnard", href: "/california/nail-salon-oxnard/" },
  { city: "Visalia", href: "/california/nail-salon-visalia/" },
  { city: "Simi Valley", href: "/california/nail-salon-simi-valley/" },
  { city: "Torrance", href: "/california/nail-salon-torrance/" },
  { city: "Sunnyvale", href: "/california/nail-salon-sunnyvale/" },
  { city: "San Bernardino", href: "/california/nail-salon-san-bernardino/" },
  { city: "Escondido", href: "/california/nail-salon-escondido/" },
  { city: "Orange", href: "/california/nail-salon-orange/" },
  { city: "Roseville", href: "/california/nail-salon-roseville/" },
  { city: "Fullerton", href: "/california/nail-salon-fullerton/" },
  { city: "Santa Clara", href: "/california/nail-salon-santa-clara/" },
  { city: "Pasadena", href: "/california/nail-salon-pasadena/" },
  { city: "Concord", href: "/california/nail-salon-concord/" },
  { city: "Thousand Oaks", href: "/california/nail-salon-thousand-oaks/" },
  { city: "Victorville", href: "/california/nail-salon-victorville/" },
  { city: "Pomona", href: "/california/nail-salon-pomona/" },
  { city: "Lancaster", href: "/california/nail-salon-lancaster/" },
  { city: "Garden Grove", href: "/california/nail-salon-garden-grove/" },
  { city: "Elk Grove", href: "/california/nail-salon-elk-grove/" },
  { city: "Oceanside", href: "/california/nail-salon-oceanside/" },
  { city: "Santa Barbara", href: "/california/nail-salon-santa-barbara/" },
];

const faqs = [
  {
    q: "How do I find a good nail salon in California?",
    a: "Look for salons that display a current state board license. Read recent Google reviews, paying attention to comments about cleanliness and technique. Ask whether the salon uses new files and buffers per client or sanitizes between uses. This site covers 50 California cities with specific salon picks for each.",
  },
  {
    q: "How much does a gel manicure cost in California?",
    a: "Gel manicure prices in California typically range from $35 to $65 depending on the city and salon. Cities like Los Angeles, San Francisco, and Irvine tend to be on the higher end. Gel extensions and nail art add cost; a basic gel set with no art stays on the lower end of that range.",
  },
  {
    q: "Which California cities have the best nail salons?",
    a: "Los Angeles, San Francisco, Irvine, and Pasadena consistently have a wide selection of higher-end salons. Huntington Beach, San Diego, and Santa Barbara also have strong options. This directory covers 50 cities with individual salon picks for each.",
  },
  {
    q: "What nail services do California salons typically offer?",
    a: "Most California nail salons offer basic manicures and pedicures, gel polish, acrylic nail sets, dip powder, and gel extensions. Higher-end salons may offer gel-x, builder gel overlays, and Russian manicures. Prices vary significantly between budget salons and spa-style locations.",
  },
  {
    q: "Are nail salons in California required to be licensed?",
    a: "Yes. California nail technicians are licensed by the California Board of Barbering and Cosmetology. Salons must display their establishment license and individual technician licenses. You can verify a license at the California Department of Consumer Affairs website.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Nail Salons in California by City",
  url: "https://shenailsalon.com/category/california",
  numberOfItems: cities.length,
  itemListElement: cities.map((entry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `Best Nail Salons in ${entry.city}`,
    url: `https://shenailsalon.com${entry.href}`,
  })),
};

export default function CaliforniaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero banner */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#707070" }}>
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>California Salons</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>📍</span>
            <span>50+ California Cities</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E293B" }}>
            California Nail Salon Directory
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#707070" }}>
            Finding a good nail salon in California mostly comes down to knowing where to look. Nancy Davidson has reviewed salons across 50 cities, from Los Angeles to Salinas, each with service and pricing details.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((entry) => (
              <Link
                key={entry.city}
                href={entry.href}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#045CB4" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>Best Nail Salons in {entry.city}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#045CB4" }}>
                    View salons <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-12 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#1E293B" }}>
            California Nail Salon Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 border border-gray-100"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)", borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#4169E1"}` }}
              >
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "#F0F5FA", borderColor: "rgba(4,107,210,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About the California Directory</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
              50 city pages across California. Each one names specific salons, describes what they offer, and includes a general price range. Nancy Davidson researched and wrote all of them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
