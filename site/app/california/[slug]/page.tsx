import Link from "next/link";
import type { Metadata } from "next";

function slugToCity(slug: string): string {
  return slug
    .replace(/^nail-salon-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = slugToCity(slug);
  return {
    title: `Best Nail Salons in ${city} | Nail Salon Reviews and Products`,
    description: `Nail salon reviews and recommendations in ${city}, California. Curated by Nancy Davidson.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = slugToCity(slug);

  return (
    <>
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#707070" }}>
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/category/california" style={{ color: "#046BD2" }} className="hover:underline">California Salons</Link>
            <span className="mx-2">/</span>
            <span>{city}</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>California City Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Best Nail Salons in {city}
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Nail salon reviews and recommendations in {city}, California. Each listing includes service details and general pricing. Researched and written by Nancy Davidson.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p style={{ color: "#707070" }}>
            Full salon listings coming soon. In the meantime, explore all California cities in the directory.
          </p>
          <div className="mt-8">
            <Link
              href="/category/california"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: "#046BD2" }}
            >
              Back to California Salons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
