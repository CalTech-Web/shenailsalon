import Link from "next/link";

const whatAreArticles = [
  { title: "What Are Acrylic Nails?", href: "#" },
  { title: "What Are Gel Nails?", href: "#" },
  { title: "What Are Dip Nails?", href: "#" },
  { title: "What Are Press-On Nails?", href: "#" },
  { title: "What Are Gel-X Nails?", href: "#" },
  { title: "What Are Polygel Nails?", href: "#" },
];

const howToArticles = [
  { title: "How To Apply Acrylic Nails at Home", href: "#" },
  { title: "How To Remove Gel Nails Safely", href: "#" },
  { title: "How To Apply Press-On Nails", href: "#" },
  { title: "How To Shape Your Nails", href: "#" },
  { title: "How To Make Nails Grow Faster", href: "#" },
  { title: "How To Stop Biting Your Nails", href: "#" },
];

const californiaArticles = [
  { title: "Best Nail Salons in Los Angeles", href: "#" },
  { title: "Best Nail Salons in San Francisco", href: "#" },
  { title: "Best Nail Salons in San Diego", href: "#" },
  { title: "Best Nail Salons in Sacramento", href: "#" },
  { title: "Best Nail Salons in Irvine", href: "#" },
  { title: "Best Nail Salons in Pasadena", href: "#" },
];

const faqs = [
  {
    q: "What kinds of nail articles does the site cover?",
    a: 'The site covers two main content types: educational "What Are" explainers about nail types and composition, and practical "How To" guides for applying, shaping, and removing nails. There are also California nail salon review pages for major cities.',
  },
  {
    q: "Does shenailsalon.com offer nail services?",
    a: "No. Despite its domain name, shenailsalon.com is an informational blog and nail salon directory. It is not a physical salon and does not book appointments or sell products directly.",
  },
  {
    q: "Who writes the content?",
    a: "All content on the site is attributed to Nancy Davidson. She writes in a conversational, first-person voice to make nail education accessible to everyone.",
  },
  {
    q: "Which cities in California does the directory cover?",
    a: "The directory covers 50+ California cities including Los Angeles, San Francisco, San Diego, Sacramento, Fresno, Long Beach, Oakland, Anaheim, Riverside, and many others.",
  },
  {
    q: "When was the site launched?",
    a: "The domain shenailsalon.com was registered on November 12, 2024. The first content was published in November 2024.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 55%, #ffffff 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>💅</span>
            <span>California&apos;s Go-To Nail Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Nail Salon Reviews and Products
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#808285" }}>
            Your go-to resource for nail salon reviews, nail care how-to guides, and product information across California.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/category/what-are"
              className="px-8 py-3 rounded-full text-white font-semibold text-sm transition-shadow"
              style={{ background: "#046BD2", boxShadow: "0 4px 14px rgba(4,107,210,0.35)" }}
            >
              Browse Nail Guides
            </Link>
            <Link
              href="/category/california"
              className="px-8 py-3 rounded-full font-semibold text-sm border-2 hover:bg-blue-50 transition-colors"
              style={{ color: "#046BD2", borderColor: "#046BD2" }}
            >
              Find California Salons
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "129", label: "Published Articles" },
            { value: "44+", label: "What Are Guides" },
            { value: "35+", label: "How-To Guides" },
            { value: "50+", label: "California Cities" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold" style={{ color: "#046BD2" }}>{stat.value}</p>
              <p className="text-sm mt-1" style={{ color: "#808285" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Are section */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#1E293B" }}>What Are Guides</h2>
            <Link href="/category/what-are" className="text-sm hover:underline" style={{ color: "#046BD2" }}>
              View all
            </Link>
          </div>
          <p className="mb-6" style={{ color: "#808285" }}>
            Learn about every nail type, what it is made of, how it differs from other options, and whether it is right for you.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whatAreArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition"
              >
                <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{a.title}</p>
                <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How To section */}
      <section className="py-14 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#1E293B" }}>How-To Guides</h2>
            <Link href="/category/how-to" className="text-sm hover:underline" style={{ color: "#046BD2" }}>
              View all
            </Link>
          </div>
          <p className="mb-6" style={{ color: "#808285" }}>
            Step-by-step tutorials for applying, shaping, and removing nails at home. Written for beginners and enthusiasts alike.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {howToArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="block p-4 rounded border border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm transition"
              >
                <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{a.title}</p>
                <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* California section */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#1E293B" }}>California Nail Salon Directory</h2>
            <Link href="/category/california" className="text-sm hover:underline" style={{ color: "#046BD2" }}>
              View all
            </Link>
          </div>
          <p className="mb-6" style={{ color: "#808285" }}>
            Curated nail salon reviews for 50+ cities across California. Find the best nail salon near you.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {californiaArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="block p-4 rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition"
              >
                <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{a.title}</p>
                <p className="text-xs mt-1" style={{ color: "#046BD2" }}>Read more</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#1E293B" }}>
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Search", desc: "Find an article via Google on any nail topic you are curious about." },
              { step: "2", title: "Read", desc: "Learn from structured guides with tables, step-by-step lists, and comparisons." },
              { step: "3", title: "Explore", desc: "Follow internal links to discover related nail topics and techniques." },
              { step: "4", title: "Find a Salon", desc: "Browse California city pages to find local nail salon recommendations." },
              { step: "5", title: "Go Further", desc: "Explore cited sources like Byrdie, Allure, and wikiHow for even more depth." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3"
                  style={{ background: "#046BD2" }}
                >
                  {item.step}
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{item.title}</h3>
                <p className="text-xs" style={{ color: "#808285" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>
            Why Nail Salon Reviews and Products?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Dual-Purpose Resource",
                desc: "Combines educational nail guides with a California nail salon directory in one place.",
              },
              {
                title: "Single Author Voice",
                desc: "All 129 articles are written by Nancy Davidson in a first-person, conversational style that feels personal and relatable.",
              },
              {
                title: "Structured, Easy to Skim",
                desc: "Every article includes comparison tables, step-by-step lists, and FAQ sections so you get the information you need fast.",
              },
              {
                title: "Source-Backed Content",
                desc: "Content cites reputable beauty sources including Byrdie, Allure, Refinery29, wikiHow, and Salon Success Academy.",
              },
              {
                title: "California Geographic Focus",
                desc: "50+ city-specific salon review pages tailored for California readers looking for local recommendations.",
              },
              {
                title: "Free, No Sign-Up Required",
                desc: "No paywalls, no login, no email required. All content is freely accessible to everyone.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div
                  className="w-1.5 rounded mt-1 flex-shrink-0"
                  style={{ background: "#046BD2", minWidth: "6px", minHeight: "40px" }}
                ></div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "#808285" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#1E293B" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded p-5 border border-gray-200">
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{faq.q}</h3>
                <p className="text-sm" style={{ color: "#808285" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
