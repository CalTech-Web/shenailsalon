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

export default function HowToPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6" style={{ color: "#808285" }}>
        <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span>How To</span>
      </nav>

      <h1 className="text-3xl font-bold mb-3" style={{ color: "#1E293B" }}>
        Nail How-To Guides
      </h1>
      <p className="mb-10 text-lg" style={{ color: "#808285" }}>
        35+ step-by-step tutorials covering nail application, removal, shaping, and care. Written for DIY nail enthusiasts who want to do their nails at home or make more informed salon choices.
      </p>

      {/* Application */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Application Guides</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {applicationGuides.map((title) => (
            <div
              key={title}
              className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition cursor-pointer"
            >
              <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{title}</p>
              <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
            </div>
          ))}
        </div>
      </section>

      {/* Removal */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Removal Guides</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {removalGuides.map((title) => (
            <div
              key={title}
              className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition cursor-pointer"
            >
              <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{title}</p>
              <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Nail Care and Maintenance</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {careGuides.map((title) => (
            <div
              key={title}
              className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition cursor-pointer"
            >
              <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{title}</p>
              <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="p-6 rounded border border-gray-200" style={{ background: "#F0F5FA" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
        <p className="text-sm" style={{ color: "#808285" }}>
          Each how-to guide includes a full supply list, cost estimate, step-by-step instructions, and tips for common mistakes. Guides are written by Nancy Davidson and are framed for readers who want to do their nails at home.
        </p>
      </section>
    </div>
  );
}
