import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Nail Salon Directory | Nail Salon Reviews and Products",
  description: "Curated nail salon reviews for 50+ cities across California. Find the best nail salon near you with detailed reviews, service descriptions, and pricing.",
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
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6" style={{ color: "#808285" }}>
        <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span>California Salons</span>
      </nav>

      <h1 className="text-3xl font-bold mb-3" style={{ color: "#1E293B" }}>
        California Nail Salon Directory
      </h1>
      <p className="mb-10 text-lg" style={{ color: "#808285" }}>
        Curated nail salon reviews for 50+ cities across California. Each city page highlights multiple salons with service descriptions and pricing information, written by Nancy Davidson.
      </p>

      {/* City grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cities.map((city) => (
          <div
            key={city}
            className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition cursor-pointer"
          >
            <p className="font-medium text-sm" style={{ color: "#1E293B" }}>Best Nail Salons in {city}</p>
            <p className="text-xs mt-1" style={{ color: "#046BD2" }}>View salons</p>
          </div>
        ))}
      </div>

      {/* About section */}
      <section className="mt-14 p-6 rounded border border-gray-200" style={{ background: "#F0F5FA" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About the California Directory</h2>
        <p className="text-sm" style={{ color: "#808285" }}>
          The California nail salon directory covers 50 published city pages. Each page includes curated recommendations with salon descriptions, services offered, and general pricing ranges. Content is regularly updated by Nancy Davidson to help California readers find the best nail salons near them.
        </p>
      </section>
    </div>
  );
}
