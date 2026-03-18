"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "What Are", href: "/category/what-are" },
  { label: "How To", href: "/category/how-to" },
  { label: "California Salons", href: "/category/california" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top gradient accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: "linear-gradient(90deg, #046BD2 0%, #3A5FCC 50%, #045CB4 100%)" }}
      />
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: "#046BD2" }}>
          Nail Salon Reviews and Products
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
              style={{ color: "#046BD2" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/category/california"
            className="text-sm font-semibold px-4 py-1.5 rounded-full text-white transition-shadow hover:shadow-md ml-2"
            style={{ background: "#046BD2" }}
          >
            📍 CA Salons
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {nav.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:underline"
              style={{ color: "#046BD2" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/category/california"
            className="text-sm font-semibold w-fit px-4 py-1.5 rounded-full text-white"
            style={{ background: "#046BD2" }}
            onClick={() => setOpen(false)}
          >
            📍 CA Salons
          </Link>
        </nav>
      )}
    </header>
  );
}
