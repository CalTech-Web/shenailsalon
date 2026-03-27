import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Fix a Broken Nail: 5 Methods That Work",
  description:
    "Learn how to fix a broken nail at home with nail glue, the tea bag method, gel overlay, and more. Step-by-step repair guide for every type of break. Written by Nancy Davidson.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-fix-a-broken-nail/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-fix-a-broken-nail/",
    title: "How To Fix a Broken Nail: 5 Methods That Work",
    description:
      "Learn how to fix a broken nail at home with nail glue, the tea bag method, gel overlay, and more. Step-by-step repair guide for every type of break. Written by Nancy Davidson.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    { "@type": "ListItem", position: 3, name: "How To Fix a Broken Nail", item: "https://shenailsalon.com/how-to/how-to-fix-a-broken-nail/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Fix a Broken Nail: 5 Methods That Work",
  description:
    "A complete guide on how to fix a broken nail at home, covering nail glue repair, the tea bag method, gel overlay, filing down, and when to cut the nail short. Includes supplies, step-by-step instructions, and aftercare.",
  url: "https://shenailsalon.com/how-to/how-to-fix-a-broken-nail/",
  author: {
    "@type": "Person",
    name: "Nancy Davidson",
    url: "https://shenailsalon.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Nail Salon Reviews and Products",
    url: "https://shenailsalon.com",
  },
  datePublished: "2024-11-01",
  dateModified: "2026-03-27",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-fix-a-broken-nail/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you fix a broken nail at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way to fix a broken nail at home depends on how it broke. For a clean break where the piece is still attached, apply a drop of nail glue, press the pieces together, hold for 30 seconds, and let it cure for 2 minutes. For a partial break or crack, the tea bag method provides stronger reinforcement: apply a base coat, lay a small piece of tea bag paper over the crack, seal it with another base coat, let it dry, then buff smooth and apply nail polish. For a fully broken-off nail, file the nail short and smooth, then grow it back or use a press-on for coverage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix a broken nail without nail glue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can fix a broken nail without nail glue using the tea bag method. Cut a small piece from an unused tea bag (or coffee filter), apply a base coat to the nail, lay the tea bag piece over the break, seal with another coat of base coat, let it dry completely, buff lightly until smooth, and finish with nail polish. This method works because the fiber mesh in the tea bag paper reinforces the nail like a fiberglass patch. Gel top coat or clear gel polish also works as a sealant instead of base coat.",
      },
    },
    {
      "@type": "Question",
      name: "How do you fix a nail that broke halfway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a nail that broke halfway but is still partially attached, avoid pulling or biting the broken piece off. First, trim off any jagged or lifted portion of the break with nail scissors to prevent further tearing. Then apply a small drop of nail glue to the remaining crack and hold firmly for 30 to 60 seconds. Once dry, reinforce with the tea bag method: lay a small piece of tea bag fiber over the repaired crack, seal with two coats of base coat, let it dry fully, and buff smooth. This repair typically lasts 1 to 2 weeks with normal care.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a broken nail take to grow back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fingernails grow about 3 to 4 millimeters per month on average. If you cut a broken nail down short, it typically takes 2 to 3 months to grow back to a medium length and up to 6 months to reach a long length. Growth rate varies by age, diet, and health. Keeping nails moisturized, eating protein and biotin-rich foods, and avoiding habits like nail biting all support faster growth. You can use press-on nails as a temporary cover while waiting for the nail to grow back.",
      },
    },
    {
      "@type": "Question",
      name: "How do you fix a broken acrylic nail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To fix a broken acrylic nail, first assess the damage. If the acrylic broke above the natural nail and the natural nail is intact, apply a small amount of nail glue to the break, press the pieces together, and hold for 30 to 60 seconds. File any rough edges smooth. If the break goes below the natural nail or the natural nail is also cracked, remove the acrylic set completely rather than trying to repair in place, and let the natural nail heal. A salon can also re-fill or replace just the broken nail extension.",
      },
    },
    {
      "@type": "Question",
      name: "Should you cut a broken nail or fix it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whether to cut or fix a broken nail depends on where the break is. If the break is at or below the quick (the pink part of your nail), fixing it is not an option because cutting it shorter is necessary to prevent pain and further tearing. If the break is above the quick in the free edge, you can repair it with nail glue and the tea bag method if you want to keep the length. If the break is deep, jagged, or keeps re-breaking, cutting the nail short and letting it regrow is often the more practical choice. When in doubt, file the nail short and straight, moisturize daily, and let it regrow.",
      },
    },
  ],
};

const breakTypes = [
  {
    type: "Clean break (tip snapped off)",
    cause: "Impact, catching nail on object",
    still_attached: "No",
    best_fix: "Nail glue reattach or file short",
    time: "5 min",
  },
  {
    type: "Partial break (crack or split, still attached)",
    cause: "Bending stress, dry nails",
    still_attached: "Yes",
    best_fix: "Nail glue + tea bag reinforcement",
    time: "15 to 20 min",
  },
  {
    type: "Vertical split (crack runs lengthwise)",
    cause: "Dry nails, repeated bending",
    still_attached: "Yes",
    best_fix: "Tea bag patch + gel overlay",
    time: "20 to 30 min",
  },
  {
    type: "Break below the free edge (near quick)",
    cause: "Serious impact, very short nails",
    still_attached: "Partially or no",
    best_fix: "Trim, do not repair",
    time: "5 min",
  },
  {
    type: "Broken acrylic extension",
    cause: "Impact, lifting, improper fill",
    still_attached: "Varies",
    best_fix: "Nail glue or salon re-fill",
    time: "10 to 30 min",
  },
];

const supplies = [
  { item: "Nail glue (cyanoacrylate)", note: "For reattaching a clean break or gluing a crack closed; do not use super glue" },
  { item: "Unused tea bag (or coffee filter)", note: "The fiber paper creates a reinforcing patch over the break site" },
  { item: "Base coat or clear nail polish", note: "Used to seal the tea bag patch to the nail surface" },
  { item: "Nail scissors or clippers", note: "To trim any jagged or lifted edges before repairing" },
  { item: "Fine-grit nail file (180 to 240 grit)", note: "To smooth the repair and blend edges" },
  { item: "Nail buffer (240 grit)", note: "To smooth the tea bag patch surface before top coat" },
  { item: "Cuticle oil", note: "To moisturize the nail and surrounding skin after repair" },
  { item: "Nail polish or gel top coat (optional)", note: "To finish and protect the repair" },
];

const nailGlueSteps = [
  {
    num: 1,
    title: "Assess the break before doing anything",
    body: "Check whether the broken piece is still attached. If it snapped off completely, you can try to reattach it if you still have the piece. If it is partially attached, avoid pulling it further. If the break is at or below the quick (where you see pink nail), trimming the nail short is safer than repairing it.",
  },
  {
    num: 2,
    title: "Clean the nail surface",
    body: "Wipe the nail and the broken piece with a lint-free wipe or alcohol wipe to remove any oil or moisture. Nail glue bonds best to a clean, dry surface. Do not apply hand lotion before this step.",
  },
  {
    num: 3,
    title: "Trim any jagged edges",
    body: "If the break has rough or lifted edges, carefully trim them with small nail scissors or nail clippers to create a cleaner break line. This prevents the jagged edge from snagging and tearing further before the glue cures.",
  },
  {
    num: 4,
    title: "Apply one small drop of nail glue to the break",
    body: "Apply the smallest drop of nail glue possible directly to the crack or to the underside of the broken piece. Too much glue creates a thick, uneven repair. Less is more. Do not apply glue to your skin.",
  },
  {
    num: 5,
    title: "Press the pieces together firmly and hold",
    body: "Hold the broken pieces together with firm, even pressure for at least 30 to 60 seconds. Nail glue sets quickly, so keep still. If glue gets on your skin, do not pull it away. Let it dry and it will loosen on its own.",
  },
  {
    num: 6,
    title: "Let the glue cure for 2 minutes before using your hand",
    body: "Nail glue reaches its full strength in about 2 minutes. Avoid submerging in water, applying lotion, or using the repaired nail for at least 2 minutes. Full cure takes about 24 hours.",
  },
  {
    num: 7,
    title: "File any excess and apply nail polish to protect",
    body: "Once cured, gently file any ridges or rough edges flush with the nail surface. Apply a coat of clear base coat or nail polish over the entire nail to seal the repair and add a layer of protection.",
  },
];

const teaBagSteps = [
  {
    num: 1,
    title: "Cut a small patch from an unused tea bag",
    body: "Empty an unused tea bag or snip a small piece from a flat tea bag or coffee filter. The patch should be slightly larger than the crack or break site. The fibrous mesh material is what gives the repair its strength.",
  },
  {
    num: 2,
    title: "Apply a coat of clear base coat to the nail",
    body: "Apply a thin coat of clear nail polish or base coat over the entire nail, including directly over the crack. While it is still wet, lay the tea bag patch over the break area and press it down gently with a cuticle pusher or the brush from the base coat bottle.",
  },
  {
    num: 3,
    title: "Apply a second coat of base coat over the patch",
    body: "While the first coat is still tacky, apply a second coat of base coat directly over the tea bag patch to seal it to the nail. Make sure the edges of the patch are fully covered and flat against the nail surface.",
  },
  {
    num: 4,
    title: "Let it dry completely",
    body: "Let the patch dry for at least 3 to 5 minutes. Do not use the nail during this time. The base coat needs to fully dry for the tea bag fiber to harden into a reinforcing layer.",
  },
  {
    num: 5,
    title: "Buff the patch smooth",
    body: "Once completely dry, gently buff over the patch area with a fine-grit buffer (240 grit) to smooth the texture. The tea bag material creates a slightly bumpy surface that buffing will blend with the rest of the nail.",
  },
  {
    num: 6,
    title: "Apply nail polish or gel top coat to finish",
    body: "Apply your chosen nail polish or a gel top coat over the entire nail to hide the patch and seal everything in place. The finished nail should look and feel smooth. The repair typically holds for 1 to 2 weeks.",
  },
];

const methodComparison = [
  {
    method: "Nail glue",
    best_for: "Clean break, tip snapped off",
    hold: "3 to 7 days",
    difficulty: "Easy",
    supplies_needed: "Nail glue",
    notes: "Fast and easy. Best for a single clean break. Less structural than tea bag.",
  },
  {
    method: "Tea bag patch",
    best_for: "Cracks, partial breaks, splits",
    hold: "1 to 2 weeks",
    difficulty: "Easy",
    supplies_needed: "Tea bag, base coat, buffer",
    notes: "Stronger structural repair. Works without nail glue. Can be painted over.",
  },
  {
    method: "Nail glue + tea bag",
    best_for: "Deep cracks or breaks near quick",
    hold: "1 to 3 weeks",
    difficulty: "Easy to moderate",
    supplies_needed: "Nail glue, tea bag, base coat",
    notes: "Best combined method. Glue closes the break, tea bag reinforces the surface.",
  },
  {
    method: "Gel overlay",
    best_for: "Weak or thin nails, recurring breaks",
    hold: "2 to 4 weeks",
    difficulty: "Moderate",
    supplies_needed: "Gel polish, UV/LED lamp",
    notes: "Best long-term fix. Adds a hard coating over the entire nail.",
  },
  {
    method: "File short and grow back",
    best_for: "Break at or below quick, severe damage",
    hold: "N/A",
    difficulty: "Easy",
    supplies_needed: "Nail file, clippers",
    notes: "Safest option when the natural nail is compromised. No repair possible.",
  },
];

const mistakes = [
  { mistake: "Pulling the broken piece off", fix: "Pulling a partially attached break can rip the nail plate layer. Trim the jagged edge with scissors instead." },
  { mistake: "Using super glue instead of nail glue", fix: "Super glue can bond skin to the nail or cause irritation. Use cyanoacrylate nail glue made for nails." },
  { mistake: "Using too much glue", fix: "A single small drop is enough. Excess glue creates a lumpy repair and takes much longer to dry evenly." },
  { mistake: "Applying the patch to a wet or oily nail", fix: "Wipe the nail with a dry cloth or alcohol wipe before applying glue or base coat. Oil prevents adhesion." },
  { mistake: "Filing the repaired nail aggressively", fix: "File gently and in one direction only. Filing too hard over the repair can break it again before it fully hardens." },
  { mistake: "Ignoring a break below the quick", fix: "A break that reaches the quick (where the nail attaches to skin) needs to be trimmed short and left to heal, not repaired with glue." },
];

export default function HowToFixABrokenNailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0F5FA 60%, #ffffff 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm mb-5" style={{ color: "#707070" }}>
            <Link href="/" style={{ color: "#046BD2" }} className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/category/how-to" style={{ color: "#046BD2" }} className="hover:underline">How To</Link>
            <span className="mx-2">/</span>
            <span>How To Fix a Broken Nail</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Fix a Broken Nail
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A step-by-step guide on how to fix a broken nail at home, covering five methods including nail glue, the tea bag patch, gel overlay, and when to cut it short. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Intro */}
          <div>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              A broken nail is one of those problems that seems minor until it catches on something and tears further. The good news is that most breaks are fixable at home in under 20 minutes, and you probably have what you need already. The right approach depends on where the nail broke and whether the piece is still attached. Here is how to handle every scenario.
            </p>
          </div>

          {/* Break types */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Broken Nails and What To Do</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Not all breaks are the same. A tip that snapped off cleanly is a different situation from a vertical split running toward the quick. Identifying the break type first saves you from using the wrong method.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Break Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Common Cause</th>
                    <th className="text-left px-4 py-2 font-semibold">Still Attached?</th>
                    <th className="text-left px-4 py-2 font-semibold">Best Fix</th>
                    <th className="text-left px-4 py-2 font-semibold">Time Needed</th>
                  </tr>
                </thead>
                <tbody>
                  {breakTypes.map(({ type, cause, still_attached, best_fix, time }, i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{cause}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{still_attached}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{best_fix}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Supplies */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What You Need</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              You do not need a special kit. Most of these items are common household or nail care supplies. For the fastest repair, nail glue alone handles most breaks. The tea bag method adds strength if you want the repair to last longer.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Supply</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {supplies.map(({ item, note }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Method 1: Nail glue */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>Method 1: Nail Glue (Fastest Fix for Clean Breaks)</h2>
            <p className="text-sm mb-4 px-3 py-2 rounded-lg border-l-4" style={{ color: "#707070", background: "#F0F5FA", borderColor: "#046BD2" }}>
              Best for: a tip that snapped off cleanly with the piece still intact, or a crack that has not started to lift. Not suitable for breaks at or below the quick.
            </p>
            <div className="space-y-6">
              {nailGlueSteps.map(({ num, title, body }) => (
                <div key={num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Method 2: Tea bag */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>Method 2: The Tea Bag Patch (Strongest DIY Repair)</h2>
            <p className="text-sm mb-4 px-3 py-2 rounded-lg border-l-4" style={{ color: "#707070", background: "#F0F5FA", borderColor: "#046BD2" }}>
              Best for: cracks, splits, and partial breaks where the nail is still attached. This is the most durable DIY repair and does not require nail glue. For deep breaks, use nail glue first to close the crack, then apply the tea bag patch on top.
            </p>
            <div className="space-y-6">
              {teaBagSteps.map(({ num, title, body }) => (
                <div key={num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Method 3: Gel overlay */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>Method 3: Gel Overlay (Best for Recurring Breaks)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              If your nails break repeatedly, a gel overlay is a better long-term solution than repeated glue repairs. A thin coat of gel polish or gel top coat over all ten nails adds a hard, flexible shell that protects the natural nail from bending and snapping.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>1.</span> Apply a thin coat of gel base coat to all nails, including the repaired nail.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>2.</span> Cure under a UV or LED lamp according to the product instructions (usually 30 to 60 seconds).</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>3.</span> Apply a coat of gel color or a second coat of clear gel and cure again.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>4.</span> Apply a gel top coat and cure to seal everything in place.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>5.</span> Wipe the inhibition layer with a lint-free wipe moistened with isopropyl alcohol.</li>
            </ul>
            <p className="text-sm mt-3" style={{ color: "#707070" }}>
              A gel overlay lasts 2 to 4 weeks and keeps all nails protected while the broken one grows back. Builder gel is an even stronger option for very weak or thin nails.
            </p>
          </div>

          {/* Method 4: Press-on cover */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>Method 4: Press-On Nail (Instant Visual Fix)</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              If you need a quick cosmetic fix and do not want to deal with repairs, a press-on nail placed over the broken nail is the fastest option. Size the press-on to match the natural nail, apply adhesive tab or a drop of nail glue, and press firmly for 30 seconds. The press-on covers the break completely and lasts 1 to 2 weeks depending on adhesive type. This works best when the natural nail has been filed smooth first.
            </p>
          </div>

          {/* Method 5: Cut it short */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#1E293B" }}>Method 5: Cut It Short and Let It Grow Back</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              When the break is at or below the quick, painful to the touch, or the nail keeps re-breaking after repair, the right move is to trim the nail short and let it heal naturally. File the nail straight across just above the break line, then shape the edge smooth. Apply cuticle oil daily to support regrowth. Fingernails grow about 3 to 4 millimeters per month, so a short nail reaches medium length in about 2 to 3 months.
            </p>
          </div>

          {/* Methods comparison */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Broken Nail Repair Methods Compared</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Method</th>
                    <th className="text-left px-4 py-2 font-semibold">Best For</th>
                    <th className="text-left px-4 py-2 font-semibold">Hold Time</th>
                    <th className="text-left px-4 py-2 font-semibold">Difficulty</th>
                    <th className="text-left px-4 py-2 font-semibold">Supplies</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {methodComparison.map(({ method, best_for, hold, difficulty, supplies_needed, notes }, i) => (
                    <tr key={method} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{method}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{best_for}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{hold}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{difficulty}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{supplies_needed}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to prevent broken nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How To Prevent Nails From Breaking</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nails break most often when they are dry, thin, or exposed to repeated bending stress. These habits help prevent breaks before they happen.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#707070" }}>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Apply cuticle oil daily. Dry nails snap more easily. Cuticle oil keeps the nail plate flexible and hydrated.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Wear gloves when washing dishes or cleaning. Prolonged water exposure causes nails to swell and contract, which weakens them over time.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Keep nails at a manageable length. Very long nails create more leverage for breaks, especially if you use your hands heavily throughout the day.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> File in one direction. Back-and-forth sawing motions create micro-fractures at the nail edge that become breaking points.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Use a nail strengthener or hardener. A good strengthening base coat adds a protective layer and helps thin nails resist bending.</li>
              <li className="flex items-start gap-2"><span style={{ color: "#046BD2" }}>•</span> Eat enough protein and biotin. Nails are made of keratin, a protein. Deficiency in protein or biotin (vitamin B7) can cause thin, brittle nails that break more often.</li>
            </ul>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Common Mistakes When Fixing a Broken Nail</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Mistake</th>
                    <th className="text-left px-4 py-2 font-semibold">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  {mistakes.map(({ mistake, fix }, i) => (
                    <tr key={mistake} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{mistake}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Fixing a Broken Nail</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                  style={{
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    borderLeft: `3px solid ${i % 2 === 0 ? "#046BD2" : "#3A5FCC"}`,
                  }}
                >
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#1E293B" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related articles */}
          <div className="pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#1E293B" }}>Related Nail Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
                { title: "How To Make Your Nails Grow Faster", href: "/how-to/how-to-make-nails-grow-faster/" },
                { title: "How To Shape Your Nails", href: "/how-to/how-to-shape-nails/" },
                { title: "What Are Press On Nails?", href: "/what-are/what-are-press-on-nails/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg p-3 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
                >
                  <p className="font-medium text-sm" style={{ color: "#1E293B" }}>{link.title}</p>
                  <span className="ml-auto text-xs group-hover:translate-x-0.5 transition-transform" style={{ color: "#046BD2" }}>→</span>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/category/how-to"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: "#046BD2" }}
              >
                Browse all How-To guides →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
