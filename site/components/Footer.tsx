import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-sm" style={{ color: "#808285" }}>
          Copyright 2026 Nail Salon Reviews and Products. All Rights Reserved.
        </p>
        <div className="mt-3 flex justify-center gap-6 text-sm">
          <Link href="/category/what-are" style={{ color: "#046BD2" }} className="hover:underline">
            What Are
          </Link>
          <Link href="/category/how-to" style={{ color: "#046BD2" }} className="hover:underline">
            How To
          </Link>
          <Link href="/category/california" style={{ color: "#046BD2" }} className="hover:underline">
            California Salons
          </Link>
        </div>
      </div>
    </footer>
  );
}
