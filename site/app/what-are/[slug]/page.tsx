import Link from "next/link";
import type { Metadata } from "next";

function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug);
  return {
    title: `${title} | Nail Salon Reviews and Products`,
    description: `Learn about ${title.toLowerCase()} in this guide by Nancy Davidson.`,
  };
}

export default async function WhatAreArticlePage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

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
            <Link href="/category/what-are" style={{ color: "#046BD2" }} className="hover:underline">What Are</Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            {title}
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            This guide covers everything you need to know about {title.toLowerCase()}, including what they are made of, how long they last, and how they compare to other nail types. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm max-w-none">
          <p style={{ color: "#707070" }}>
            Full article content coming soon. In the meantime, explore related guides in the What Are category.
          </p>
          <div className="mt-8">
            <Link
              href="/category/what-are"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: "#046BD2" }}
            >
              Back to What Are Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
