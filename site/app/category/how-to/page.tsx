import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail How-To Guides | Nail Salon Reviews and Products",
  description: "Step-by-step nail tutorials for applying, removing, shaping, and caring for your nails at home. 35+ DIY guides by Nancy Davidson.",
};

const applicationGuides = [
  "How To Apply Acrylic Nails at Home",
  "How To Apply Gel Nails at Home",
  "How To Apply Dip Powder Nails",
  "How To Apply Press-On Nails",
  "How To Apply Polygel Nails",
  "How To Apply Builder Gel",
  "How To Apply Gel-X Nails",
  "How To Apply Nail Wraps",
  "How To Apply Shellac",
  "How To Apply Paper Nails",
];

const removalGuides = [
  "How To Remove Acrylic Nails",
  "How To Remove Gel Nails",
  "How To Remove Dip Powder Nails",
  "How To Remove Gel-X Nails",
  "How To Remove Press-On Nails",
  "How To Remove Glue-On Nails",
  "How To Remove Fake Nails",
  "How To Remove Nail Wraps",
];

const careGuides = [
  "How To Shape Your Nails",
  "How To Paint Your Nails",
  "How To Strengthen Your Nails",
  "How To Make Your Nails Grow Faster",
  "How To Stop Biting Your Nails",
  "How To Fix a Broken Nail",
  "How To Keep Nails Healthy",
  "How To File Nails Correctly",
  "How To Push Back Cuticles",
];

const subsections = [
  { title: "Application Guides", guides: applicationGuides, color: "#046BD2" },
  { title: "Removal Guides", guides: removalGuides, color: "#4169E1" },
  { title: "Nail Care and Maintenance", guides: careGuides, color: "#045CB4" },
];

export default function HowToPage() {
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
            <span>How To</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>🛠️</span>
            <span>35+ Tutorials</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E293B" }}>
            Nail How-To Guides
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#808285" }}>
            Applying nails at home is doable. Removing them without damage is harder. These 35 guides cover both, along with shaping, care, and the supplies you actually need before you start.
          </p>
        </div>
      </section>

      {/* Subsections */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {subsections.map((sub) => (
            <div key={sub.title}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-5 w-1 rounded-full" style={{ background: sub.color }}></div>
                <h2 className="text-xl font-bold" style={{ color: "#1E293B" }}>{sub.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {sub.guides.map((title) => (
                  <div
                    key={title}
                    className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white cursor-pointer"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                  >
                    <div className="h-1 w-full" style={{ background: sub.color }}></div>
                    <div className="p-4">
                      <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{title}</p>
                      <p className="text-xs mt-2 flex items-center gap-1" style={{ color: sub.color }}>
                        Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="p-6 rounded-xl border"
            style={{ background: "#F0F5FA", borderColor: "rgba(4,107,210,0.15)" }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#808285" }}>
              Each guide includes a supply list, an estimated cost, numbered steps, and a section on what tends to go wrong. Nancy Davidson wrote all 35 of them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
