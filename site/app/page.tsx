import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Guides and California Salon Directory | shenailsalon.com",
  description: "Nancy Davidson has written 129 articles on nail types, application, removal, and care, plus salon reviews across 50 California cities. No paywall.",
  alternates: { canonical: "https://shenailsalon.com" },
  openGraph: {
    url: "https://shenailsalon.com",
    title: "Nail Guides and California Salon Directory | shenailsalon.com",
    description: "129 free nail guides and California salon reviews by Nancy Davidson. Acrylic, gel, dip, how-to tutorials, and salons in 50+ cities.",
  },
};

const whatAreArticles = [
  { title: "What Are Gel-X Nails?", href: "/what-are/what-are-gel-x-nails/" },
  { title: "What Are Gel Nails?", href: "/what-are/what-are-gel-nails/" },
  { title: "What Are Dip Nails?", href: "/what-are/what-are-dip-nails/" },
  { title: "What Are Builder Gel Nails?", href: "/what-are/what-are-builder-gel-nails/" },
  { title: "What Are Shellac Nails?", href: "/what-are/what-are-shellac-nails/" },
  { title: "What Are Acrylic Nails?", href: "/what-are/what-are-acrylic-nails/" },
];

const howToArticles = [
  { title: "How To Remove Acrylic Nails", href: "/how-to/how-to-remove-acrylic-nails/" },
  { title: "How To Remove Gel-X Nails", href: "/how-to/how-to-remove-gel-x-nails/" },
  { title: "How To Remove Dip Nails", href: "/how-to/how-to-remove-dip-nails/" },
  { title: "How To Remove Gel Nails", href: "/how-to/how-to-remove-gel-nails/" },
  { title: "How To Shape Your Nails", href: "/how-to/how-to-shape-nails/" },
  { title: "How To Paint Your Nails", href: "/how-to/how-to-paint-nails/" },
];

const californiaArticles = [
  { title: "Best Nail Salons in Los Angeles", href: "/california/nail-salon-los-angeles/" },
  { title: "Best Nail Salons in San Francisco", href: "/california/nail-salon-san-francisco/" },
  { title: "Best Nail Salons in San Diego", href: "/california/nail-salon-san-diego/" },
  { title: "Best Nail Salons in Sacramento", href: "/california/nail-salon-sacramento/" },
  { title: "Best Nail Salons in Irvine", href: "/california/nail-salon-irvine/" },
  { title: "Best Nail Salons in Pasadena", href: "/california/nail-salon-pasadena/" },
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nail Salon Reviews and Products",
  url: "https://shenailsalon.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://shenailsalon.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            <span>California&apos;s Go-To Nail Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Nail Salon Reviews and Products
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#707070" }}>
            Nancy Davidson has been writing about nails since 2024. Free guides on every nail type, plus curated salon reviews across 50 California cities. No sign-up required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/category/what-are"
              className="px-8 py-3 rounded-full text-white font-semibold text-sm transition-shadow"
              style={{ background: "#045CB4", boxShadow: "0 4px 14px rgba(4,92,180,0.35)" }}
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
            {
              value: "129", label: "Published Articles",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            },
            {
              value: "44+", label: "What Are Guides",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            },
            {
              value: "35+", label: "How-To Guides",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
            },
            {
              value: "50+", label: "California Cities",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-xl py-5 px-3"
              style={{ background: "linear-gradient(135deg, rgba(4,107,210,0.05) 0%, rgba(65,105,225,0.05) 100%)", border: "1px solid rgba(4,107,210,0.1)" }}
            >
              <div className="flex justify-center mb-1" style={{ color: "#046BD2" }}>{stat.icon}</div>
              <p className="text-3xl font-bold" style={{ color: "#046BD2" }}>{stat.value}</p>
              <p className="text-xs mt-1 font-medium" style={{ color: "#707070" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Are section */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: "#1E293B" }}>What Are Guides</h2>
            <Link href="/category/what-are" className="text-sm font-medium hover:underline" style={{ color: "#046BD2" }}>
              View all
            </Link>
          </div>
          <p className="mb-6" style={{ color: "#707070" }}>
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
            <Link href="/category/how-to" className="text-sm font-medium hover:underline" style={{ color: "#046BD2" }}>
              View all
            </Link>
          </div>
          <p className="mb-6" style={{ color: "#707070" }}>
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
                <div className="h-1 w-full" style={{ background: "#3A5FCC" }}></div>
                <div className="p-4">
                  <p className="font-medium text-sm leading-snug" style={{ color: "#1E293B" }}>{a.title}</p>
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#3A5FCC" }}>
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
            <Link href="/category/california" className="text-sm font-medium hover:underline" style={{ color: "#046BD2" }}>
              View all
            </Link>
          </div>
          <p className="mb-6" style={{ color: "#707070" }}>
            50 California cities, each with multiple salon picks, service descriptions, and general pricing. Pick your city.
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
              style={{ left: "10%", right: "10%", background: "linear-gradient(90deg, #046BD2 0%, #3A5FCC 100%)", opacity: 0.2 }}
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
                <p className="text-xs" style={{ color: "#707070" }}>{item.desc}</p>
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
          <p className="text-center text-sm mb-10" style={{ color: "#707070" }}>
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
                color: "#3A5FCC",
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
                color: "#3A5FCC",
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
                color: "#3A5FCC",
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
                <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.desc}</p>
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
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)", borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#3A5FCC"}` }}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
