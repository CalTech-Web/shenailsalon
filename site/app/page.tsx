import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Salon Reviews and Products | Nail Guides and California Salon Directory",
  description: "Nancy Davidson has written 129 articles on nail types, application, removal, and care, plus salon reviews across 50 California cities. No paywall.",
};

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
    a: 'Nail explainers, step-by-step tutorials, and California salon reviews. The explainers break down what each nail type is made of and how it behaves. The how-to guides cover application and removal in numbered steps. The California section lists salons across 50 cities with pricing.',
  },
  {
    q: "Does shenailsalon.com offer nail services?",
    a: "No, despite the name. The site is an informational blog and California salon directory. There is no booking, no product store, and no physical location.",
  },
  {
    q: "Who writes the content?",
    a: "Nancy Davidson writes every article on this site. She started publishing in November 2024 and has written 129 articles since then. No other writers are listed.",
  },
  {
    q: "Which cities in California does the directory cover?",
    a: "More than 50 cities, ranging from Los Angeles, San Francisco, and San Diego down to Modesto, Visalia, Simi Valley, and Oxnard. If your city is missing, the nearest major city page is likely a useful starting point.",
  },
  {
    q: "When was the site launched?",
    a: "The domain was registered November 12, 2024. Nancy Davidson published her first articles the same month and has been adding content steadily since.",
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
            Nancy Davidson has been writing about nails since 2024. Free guides on every nail type, plus curated salon reviews across 50 California cities. No sign-up required.
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
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "129", label: "Published Articles", icon: "📝" },
            { value: "44+", label: "What Are Guides", icon: "💅" },
            { value: "35+", label: "How-To Guides", icon: "🛠️" },
            { value: "50+", label: "California Cities", icon: "📍" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-xl py-5 px-3"
              style={{ background: "linear-gradient(135deg, rgba(4,107,210,0.05) 0%, rgba(65,105,225,0.05) 100%)", border: "1px solid rgba(4,107,210,0.1)" }}
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <p className="text-3xl font-bold" style={{ color: "#046BD2" }}>{stat.value}</p>
              <p className="text-xs mt-1 font-medium" style={{ color: "#808285" }}>{stat.label}</p>
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
            Acrylic, gel, dip, polygel, gel-x, builder gel. Same category, very different chemistry. These 44 guides cover what each type is made of, how long it holds, and what it costs to maintain.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whatAreArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#046BD2" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{a.title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#046BD2" }}>
                    Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
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
            Supplies, costs, numbered steps, and common mistakes. Whether you are applying dip at home or trying to remove gel without a drill, these guides cover what most tutorials skip.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {howToArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#4169E1" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{a.title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#4169E1" }}>
                    Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
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
            50 California cities reviewed, with multiple salon recommendations per page. From Los Angeles to Salinas, if you need a local nail salon, start here.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {californiaArticles.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group block rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <div className="h-1 w-full" style={{ background: "#045CB4" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{a.title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#045CB4" }}>
                    Read more <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                  </p>
                </div>
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
          <div className="relative grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {/* Connector line visible on desktop */}
            <div
              className="hidden md:block absolute top-5 h-0.5 pointer-events-none"
              style={{ left: "10%", right: "10%", background: "linear-gradient(90deg, #046BD2 0%, #4169E1 100%)", opacity: 0.2 }}
            ></div>
            {[
              { step: "1", title: "Search", desc: "Most readers land here from Google. Search any nail question and one of 129 articles is likely to come up." },
              { step: "2", title: "Read", desc: "Each article has a comparison table, step-by-step section, and FAQ. Skim or read the whole thing." },
              { step: "3", title: "Explore", desc: "Articles link to related guides. Come in looking for dip powder, leave knowing more about gel-x too." },
              { step: "4", title: "Find a Salon", desc: "When you want someone else to do the work, the California city pages list local salons with service and pricing details." },
              { step: "5", title: "Go Further", desc: "Each article cites its sources. Byrdie, Allure, wikiHow, Salon Success Academy. Read the originals if you want to go deeper." },
            ].map((item) => (
              <div key={item.step} className="text-center relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3"
                  style={{ background: "#046BD2", boxShadow: "0 0 0 4px rgba(4,107,210,0.15)" }}
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
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#1E293B" }}>
            Why Nail Salon Reviews and Products?
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#808285" }}>
            129 articles. 50 California cities. No paywall, no sign-up.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: "📚",
                title: "Dual-Purpose Resource",
                desc: "Most nail sites are either how-to blogs or salon finders. This one covers both. Learn what builder gel is and find a salon in Torrance on the same site.",
                color: "#046BD2",
                bg: "rgba(4,107,210,0.07)",
              },
              {
                icon: "✍️",
                title: "Single Author Voice",
                desc: "Nancy Davidson wrote every article on this site, all 129 of them. One voice, one perspective. You know what you are getting before you click.",
                color: "#4169E1",
                bg: "rgba(65,105,225,0.07)",
              },
              {
                icon: "📋",
                title: "Structured, Easy to Skim",
                desc: "Every article has a comparison table, a step-by-step section, and a FAQ. If you just need one quick answer you can skip the intro entirely.",
                color: "#046BD2",
                bg: "rgba(4,107,210,0.07)",
              },
              {
                icon: "🔗",
                title: "Source-Backed Content",
                desc: "Claims are backed by sources you can check, including Byrdie, Allure, Refinery29, and Salon Success Academy. If something is disputed in the beauty world, the articles say so.",
                color: "#4169E1",
                bg: "rgba(65,105,225,0.07)",
              },
              {
                icon: "📍",
                title: "California Geographic Focus",
                desc: "The salon directory covers 50 California cities, from San Francisco and Los Angeles down to Simi Valley and Visalia.",
                color: "#046BD2",
                bg: "rgba(4,107,210,0.07)",
              },
              {
                icon: "🔓",
                title: "Free, No Sign-Up Required",
                desc: "No paywall. No pop-up asking for your email. No subscription. Read any article without creating an account.",
                color: "#4169E1",
                bg: "rgba(65,105,225,0.07)",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4"
                  style={{ background: item.bg }}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#808285" }}>{item.desc}</p>
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
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)", borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#4169E1"}` }}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#808285" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
