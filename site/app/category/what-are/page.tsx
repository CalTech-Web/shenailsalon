import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Nail Guides | Nail Salon Reviews and Products",
  description: "44 articles on every nail type from acrylic and gel to polygel and Russian manicures. Each guide covers what the nail is made of, how long it lasts, and how it compares to the alternatives.",
};

const articles = [
  "What Are Acrylic Nails?",
  "What Are Gel Nails?",
  "What Are Dip Nails (SNS)?",
  "What Are Shellac Nails?",
  "What Are Gel-X Nails?",
  "What Are Press-On Nails?",
  "What Are Polygel Nails?",
  "What Are Builder Gel Nails?",
  "What Are BIAB Nails?",
  "What Are Solar Nails?",
  "What Are Coffin Nails?",
  "What Are Chrome Nails?",
  "What Are Ombre Nails?",
  "What Are Cat-Eye Nails?",
  "What Are Russian Nails?",
  "What Are Paper Nails?",
  "What Are Fake Nails?",
  "What Are Nail Wraps?",
  "What Are Nail Stickers?",
  "What Are Nail Tips?",
  "What Are Gel Polish Nails?",
  "What Are Soak-Off Nails?",
  "What Causes White Spots on Nails?",
  "What Are Keratin Nails?",
  "What Are ABS Plastic Nails?",
  "What Are Acrylic Resin Nails?",
  "What Are Almond-Shaped Nails?",
  "What Are Stiletto Nails?",
  "What Are Square Nails?",
  "What Are Oval Nails?",
  "What Are Ballerina Nails?",
  "What Are Duck Nails?",
  "What Are Flare Nails?",
  "What Are Glitter Nails?",
  "What Are Matte Nails?",
  "What Are Marble Nails?",
  "What Are Holographic Nails?",
  "What Are 3D Nails?",
  "What Are French Tip Nails?",
  "What Are Reverse French Nails?",
  "What Are Half-Moon Nails?",
  "What Are Negative Space Nails?",
  "What Are Nail Extensions?",
  "What Are Long Nails?",
];

export default function WhatArePage() {
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
            <span>What Are</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>💅</span>
            <span>44+ Guides</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E293B" }}>
            What Are Nail Guides
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#808285" }}>
            Acrylic nails use polymer powder. Gel nails cure under UV light. Dip powder skips the lamp entirely. These 44 guides explain how each nail type works, what it costs, how long it lasts, and what it does to your natural nail underneath.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {articles.map((title) => (
              <div
                key={title}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white cursor-pointer"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#046BD2" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#046BD2" }}>
                    Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
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
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#808285" }}>
              Every article covers what the nail type is made of, how it is applied, how long it holds up, and how it compares to the closest alternatives. Sources include Byrdie, Allure, Refinery29, and Salon Success Academy. There are 44 published guides in this category.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
