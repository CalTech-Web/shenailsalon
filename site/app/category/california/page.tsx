import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Nail Salon Directory | Nail Salon Reviews and Products",
  description: "Nancy Davidson reviewed nail salons in 50+ California cities. Each city page lists multiple salons with service descriptions and general pricing, from Los Angeles to Salinas.",
};

const cities = [
  "Los Angeles",
  "San Francisco",
  "San Diego",
  "San Jose",
  "Sacramento",
  "Fresno",
  "Long Beach",
  "Oakland",
  "Anaheim",
  "Santa Ana",
  "Riverside",
  "Stockton",
  "Irvine",
  "Chula Vista",
  "Corona",
  "Santa Clarita",
  "Fontana",
  "Moreno Valley",
  "Rancho Cucamonga",
  "Ontario",
  "Santa Rosa",
  "Bakersfield",
  "Modesto",
  "Fremont",
  "Huntington Beach",
  "Glendale",
  "Palmdale",
  "Salinas",
  "Hayward",
  "Oxnard",
  "Visalia",
  "Simi Valley",
  "Torrance",
  "Sunnyvale",
  "San Bernardino",
  "Escondido",
  "Orange",
  "Roseville",
  "Fullerton",
  "Santa Clara",
  "Pasadena",
  "Concord",
  "Thousand Oaks",
  "Victorville",
  "Pomona",
  "Lancaster",
  "Garden Grove",
  "Elk Grove",
  "Oceanside",
  "Corona",
];

export default function CaliforniaPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#808285" }}>
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
          <p className="text-lg max-w-2xl" style={{ color: "#808285" }}>
            Finding a good nail salon in California mostly comes down to knowing where to look. Nancy Davidson has reviewed salons across 50 cities, from Los Angeles to Salinas, each with service and pricing details.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white cursor-pointer"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#045CB4" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>Best Nail Salons in {city}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#045CB4" }}>
                    View salons <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
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
            <p className="text-sm leading-relaxed" style={{ color: "#808285" }}>
              50 published city pages across California. Each one lists multiple salons with a description of services offered and general price ranges. Nancy Davidson researched and wrote all of them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
