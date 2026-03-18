import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Nail Guides | Nail Salon Reviews and Products",
  description: "Educational explainers on every nail type including acrylic, gel, dip, shellac, press-on, polygel, and more. Learn what each nail type is and how it compares.",
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
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6" style={{ color: "#808285" }}>
        <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span>What Are</span>
      </nav>

      <h1 className="text-3xl font-bold mb-3" style={{ color: "#1E293B" }}>
        What Are Nail Guides
      </h1>
      <p className="mb-10 text-lg" style={{ color: "#808285" }}>
        44+ educational explainers covering every nail type, what they are made of, how they compare to other options, and whether each type is right for you. Written by Nancy Davidson since late 2024.
      </p>

      {/* Article grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((title) => (
          <div
            key={title}
            className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition cursor-pointer"
          >
            <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{title}</p>
            <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
          </div>
        ))}
      </div>

      {/* About section */}
      <section className="mt-14 p-6 rounded border border-gray-200" style={{ background: "#F0F5FA" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#1E293B" }}>About These Guides</h2>
        <p className="text-sm" style={{ color: "#808285" }}>
          Every article in this category is written in a structured format that explains the nail type, its composition, the application process, how long it lasts, and how it compares to similar options. Content cites reputable beauty sources including Byrdie, Allure, Refinery29, and Salon Success Academy.
        </p>
      </section>
    </div>
  );
}
