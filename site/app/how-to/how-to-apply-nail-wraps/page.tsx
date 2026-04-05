import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Apply Nail Wraps: Step-by-Step Guide for Film and Gel Wraps",
  description:
    "Learn how to apply nail wraps at home, covering both nail polish film wraps and semi-cured gel nail wraps. Includes prep, sizing, curing, and tips for long-lasting wear. By Nancy Davidson.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-apply-nail-wraps/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-apply-nail-wraps/",
    title: "How To Apply Nail Wraps: Step-by-Step Guide for Film and Gel Wraps",
    description:
      "Learn how to apply nail wraps at home, covering both nail polish film wraps and semi-cured gel nail wraps. Includes prep, sizing, curing, and tips for long-lasting wear. By Nancy Davidson.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "How To", item: "https://shenailsalon.com/category/how-to" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How To Apply Nail Wraps",
      item: "https://shenailsalon.com/how-to/how-to-apply-nail-wraps/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Apply Nail Wraps: Step-by-Step Guide for Film and Gel Wraps",
  description:
    "A complete guide on how to apply nail wraps at home, covering nail polish film wraps and semi-cured gel nail wraps, with prep steps, sizing, curing instructions, and tips to make them last.",
  url: "https://shenailsalon.com/how-to/how-to-apply-nail-wraps/",
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
  dateModified: "2026-04-05",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-apply-nail-wraps/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you apply nail wraps at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To apply nail wraps at home: clean your nails with rubbing alcohol to remove oils, push back cuticles, select the right size wrap for each nail, peel the wrap from its backing, press it onto the nail starting at the cuticle, smooth out any bubbles, fold the excess over the tip of your finger, then file off the overhang using a nail file in a downward stroke. For gel nail wraps, cure under a UV or LED lamp for the time specified on the packaging. The prep step, cleaning nails with alcohol, is the most important part for long-lasting wear.",
      },
    },
    {
      "@type": "Question",
      name: "Do nail wraps need a UV lamp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the type. Nail polish film wraps (such as Sally Hansen Salon Effects and Incoco strips) do not need a UV or LED lamp at all. They are pre-dried nail polish that you press onto the nail and file to fit. Semi-cured gel nail wraps (such as Dashing Diva and most gel strip brands) are partially cured at the factory and require a UV or LED lamp to finish curing and set the gel. Most gel wrap brands require 60 to 90 seconds of curing per hand under an LED lamp.",
      },
    },
    {
      "@type": "Question",
      name: "How long do nail wraps last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail polish film wraps typically last 7 to 10 days with normal wear. Semi-cured gel nail wraps last 2 to 3 weeks when properly cured and sealed with a gel top coat. Wear time is shorter if you do a lot of handwashing, swimming, or heavy manual tasks. Applying a top coat over any type of nail wrap and sealing the free edge extends wear significantly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you apply nail wraps without base coat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nail polish film wraps do not require a base coat; they apply directly to clean, dry nails. Semi-cured gel nail wraps also apply directly without a base coat. Adding a base coat can actually reduce adhesion because it creates a slippery surface. The key prep step is cleaning nails with rubbing alcohol to remove oils, not applying a base coat.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove wrinkles from nail wraps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To smooth out wrinkles or air bubbles after applying a nail wrap, use your thumb or a cuticle pusher to press the wrap flat from the center outward toward the edges. Work out any bubbles before they set. If the wrap has already set and has a crease, warming it slightly with your body heat (pressing your thumb firmly on the area for 10 seconds) can make it more pliable. For gel wraps, smooth before curing, as the gel sets firm once under the lamp.",
      },
    },
    {
      "@type": "Question",
      name: "How do you cut nail wraps to fit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most nail wrap kits include multiple sizes for each nail position. Choose the size that covers your nail from edge to edge without touching the skin on the sides. For nails that fall between sizes, it is better to go slightly smaller and leave a tiny gap at the edges than to have the wrap touch the skin, which causes faster lifting. You can trim a wrap with small scissors if needed, but filing the edge after applying is the most effective way to get a clean fit.",
      },
    },
    {
      "@type": "Question",
      name: "Can you put a top coat over nail wraps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it is recommended. Applying a top coat over nail polish film wraps adds gloss and significantly extends wear time by sealing the edges. For gel nail wraps, apply a gel top coat after curing the wrap and cure the top coat under the lamp as well. Run the brush along the free edge of the nail when applying top coat to seal the tip, which is where chipping and lifting usually start.",
      },
    },
  ],
};

const filmSupplies = [
  { item: "Nail polish film wrap kit", note: "Kits include multiple sizes per strip; check that sizes match your nail widths before starting" },
  { item: "Rubbing alcohol or nail prep wipe", note: "Essential for removing oils from the nail surface before applying; do not skip this step" },
  { item: "Nail file (180 grit)", note: "For filing off the excess wrap at the free edge; a standard emery board works fine" },
  { item: "Cuticle pusher or orange stick", note: "For pushing back cuticles and smoothing wraps during application" },
  { item: "Scissors (optional)", note: "For trimming wraps that are too wide before applying; small nail scissors give more control" },
  { item: "Top coat (optional)", note: "Extends wear time significantly; apply over the wrap after sizing to seal the edges" },
];

const gelSupplies = [
  { item: "Semi-cured gel nail wrap kit", note: "Includes multiple sizes and typically a nail prep wipe; check the packaging for what is included" },
  { item: "UV or LED nail lamp", note: "Required to finish curing the gel. LED lamps (36 watt or higher) cure in 60 to 90 seconds. UV lamps take longer." },
  { item: "Rubbing alcohol or nail prep wipe", note: "For cleaning the nail surface before applying; removes oils that prevent adhesion" },
  { item: "Nail file (180 grit)", note: "For filing off the excess wrap at the free edge after pressing onto the nail" },
  { item: "Cuticle pusher or orange stick", note: "For smoothing the gel wrap and pushing back cuticles" },
  { item: "Gel top coat (optional)", note: "Highly recommended for gel wraps; seals and hardens the surface for 2 to 3 week wear" },
];

const filmSteps = [
  {
    num: 1,
    title: "Prep your nails",
    body: "Push back your cuticles with a cuticle pusher. Do not cut them. Lightly buff each nail with a buffer block to remove the shine and create a slight texture. Then wipe each nail thoroughly with a rubbing alcohol pad to remove oils. Let the alcohol dry completely before touching the wraps.",
  },
  {
    num: 2,
    title: "Select the right size",
    body: "Lay the strip sheet flat and hold each strip up to the corresponding nail before peeling. The strip should cover the nail from edge to edge without overlapping onto the skin on the sides. If a strip is slightly too wide, you can trim it with scissors or file the edges after applying. It is better to use a strip that is slightly too narrow than one that touches the skin, since skin contact causes the edges to lift quickly.",
  },
  {
    num: 3,
    title: "Peel and position the strip",
    body: "Use the tweezers or the pull tab to peel the strip from its backing. Hold the strip at the cuticle end and align it with the base of your nail. The cuticle edge should sit just above (not touching) the cuticle line, leaving a tiny gap of about a millimeter. This gap prevents the strip from lifting at the base.",
  },
  {
    num: 4,
    title: "Press from cuticle to tip",
    body: "Starting at the cuticle end, press the strip down firmly and smooth it toward the tip. Use your thumb or a cuticle pusher to press out any air bubbles as you go. Work toward the edges too, pressing the sides down flat. Take your time here since air bubbles that set under the strip cause lifting later.",
  },
  {
    num: 5,
    title: "Fold and file off the excess",
    body: "Once the strip is flat, fold the excess that hangs over the tip of your nail underneath the nail. Then, using a 180-grit nail file, file the excess off with a downward stroke away from you. File in one direction. Do not saw back and forth, as this can cause the strip to peel up from the tip. Two or three firm downward strokes are enough to break the excess off cleanly.",
  },
  {
    num: 6,
    title: "Apply top coat",
    body: "Apply a thin layer of clear top coat over the entire strip and run the brush along the free edge to seal the tip. This step is optional but extends wear from 7 days to 10 to 14 days. Let the top coat dry fully before doing anything with your hands.",
  },
];

const gelSteps = [
  {
    num: 1,
    title: "Prep your nails",
    body: "Push back cuticles and buff the surface of each nail lightly to remove shine. Wipe each nail with the included nail prep wipe or rubbing alcohol. Let dry completely. The prep step is especially important for gel wraps because the gel will not adhere well to oily nails even after curing.",
  },
  {
    num: 2,
    title: "Select the right size",
    body: "Match each gel strip to the corresponding nail before peeling anything. Gel strips are slightly more forgiving than film strips but the same rule applies: choose the size that fits edge to edge without touching skin. Check all 10 fingers before you start applying.",
  },
  {
    num: 3,
    title: "Peel and apply at the cuticle",
    body: "Peel the gel strip from its backing using the tab. Leave a small gap between the strip and the cuticle line. Press down firmly from the cuticle toward the tip, smoothing out any bubbles as you go. Gel strips are slightly thicker than film strips and more pliable, which makes smoothing easier.",
  },
  {
    num: 4,
    title: "Fold and file off the excess",
    body: "Fold the overhanging gel over the free edge and file off the excess with downward strokes. Gel strips file cleanly with a standard nail file. Do not use a back-and-forth motion. After filing, press the free edge down firmly to seal it.",
  },
  {
    num: 5,
    title: "Cure under UV or LED lamp",
    body: "Place your hand under the lamp and cure for the time specified on the packaging. Most LED lamps require 60 to 90 seconds per hand. Do not skip or shorten the curing step. The gel strip is partially cured from the factory; the lamp finishes the cure and hardens it to a durable finish. If you do not cure the gel wrap, it will feel tacky and lift within hours.",
  },
  {
    num: 6,
    title: "Apply and cure gel top coat",
    body: "Apply a thin layer of gel top coat over each nail, sealing the free edge. Cure again under the lamp for 60 seconds. The top coat dramatically increases wear time and adds a high-gloss finish. If your kit includes a top coat, use it. If not, any gel top coat compatible with LED lamps works.",
  },
  {
    num: 7,
    title: "Wipe the sticky layer (if needed)",
    body: "Some gel top coats leave a tacky inhibition layer after curing. If your top coat feels tacky, wipe each nail with a lint-free wipe soaked in rubbing alcohol or the cleanser included in your kit. Not all gel top coats require this step; check the instructions on your specific product.",
  },
];

const wearTimeTable = [
  { type: "Film wrap (no top coat)", wear: "5 to 7 days" },
  { type: "Film wrap (with top coat)", wear: "7 to 14 days" },
  { type: "Gel wrap (cured, no top coat)", wear: "1 to 2 weeks" },
  { type: "Gel wrap (cured, with gel top coat)", wear: "2 to 3 weeks" },
  { type: "Gel wrap (not properly cured)", wear: "1 to 3 days (tacky, lifting)" },
  { type: "Any wrap with water exposure", wear: "3 to 5 days shorter than above" },
];

const tips = [
  {
    tip: "Leave a small gap at the cuticle",
    reason: "Placing the wrap directly on or under the cuticle line causes it to lift at the base within days. A 0.5 to 1 mm gap keeps the edge free from skin movement.",
  },
  {
    tip: "Seal the free edge with top coat",
    reason: "The tip of the nail is where chipping and peeling start. Running top coat along the edge of the nail creates a barrier that adds several days to wear time.",
  },
  {
    tip: "Avoid getting nails wet for 1 to 2 hours after applying",
    reason: "Both film and gel wraps need time to fully adhere after application. Water before the adhesive has set is the most common cause of early lifting.",
  },
  {
    tip: "Do not peel dry wraps",
    reason: "Dry peeling tears the natural nail surface. Always soak in warm water or use oil to loosen a wrap before removing it. This applies especially to gel wraps that have set hard.",
  },
  {
    tip: "Use your thumbnail or a cuticle pusher, not your fingernails, to smooth the wrap",
    reason: "Using other fingernails to press down the wrap risks contaminating the surface with oils and puts uneven pressure on the strip, causing bumps.",
  },
  {
    tip: "Warm the wrap briefly in your hands before applying",
    reason: "Film and gel strips become more pliable when slightly warm. Holding the strip between your palms for 10 seconds before peeling makes it easier to smooth onto curved nail surfaces without creasing.",
  },
];

const mistakes = [
  {
    mistake: "Not cleaning nails with alcohol first",
    fix: "Natural nail oils prevent the wrap adhesive from bonding. Always wipe with rubbing alcohol and let it dry completely before applying any wrap.",
  },
  {
    mistake: "Letting the wrap touch or go under the cuticle",
    fix: "Leave a 0.5 to 1 mm gap between the wrap edge and the cuticle line. Contact with skin causes lifting from the base within days.",
  },
  {
    mistake: "Skipping the lamp for gel wraps",
    fix: "Semi-cured gel wraps are sticky and undurable without curing. Always cure under a UV or LED lamp for the full time specified on the packaging. Uncured gel wraps feel tacky and lift quickly.",
  },
  {
    mistake: "Sawing the file back and forth to remove the excess",
    fix: "Use downward strokes away from you to break the excess wrap off cleanly. Sawing back and forth pulls the wrap up from the tip, which is where lifting begins.",
  },
  {
    mistake: "Using the wrong size",
    fix: "A wrap that touches the skin on the sides will lift from those edges immediately. Size each wrap before peeling it and trim or file slightly wide wraps before applying.",
  },
  {
    mistake: "Not applying top coat",
    fix: "Top coat seals the edges and extends wear time significantly. For film wraps, use a regular top coat. For gel wraps, use a gel top coat and cure it under the lamp.",
  },
];

export default function HowToApplyNailWrapsPage() {
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
            <span>How To Apply Nail Wraps</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Apply Nail Wraps
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            A step-by-step guide on how to apply nail wraps at home, covering both nail polish film wraps and semi-cured gel nail wraps, with sizing tips, curing instructions, and advice on making them last. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Intro */}
          <div>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              I tried nail wraps for the first time when I wanted a plaid pattern I absolutely could not paint freehand. Film wraps were a game-changer. Once I figured out that the prep step matters more than anything else, mine started lasting nearly two weeks. The process is different depending on whether you are using nail polish film wraps (like Sally Hansen Salon Effects) or semi-cured gel nail wraps (like Dashing Diva), so I have written up both methods below.
            </p>
          </div>

          {/* Two types intro */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Film Wraps vs Gel Wraps: Which Method Are You Using?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The two types of nail wraps have different application methods. The main difference is the curing step.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">Material</th>
                    <th className="text-left px-4 py-2 font-semibold">UV/LED Lamp Needed?</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear Time</th>
                    <th className="text-left px-4 py-2 font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Film wrap",
                      material: "Dry nail polish film",
                      lamp: "No",
                      wear: "7 to 14 days",
                      examples: "Sally Hansen Salon Effects, Incoco",
                    },
                    {
                      type: "Semi-cured gel wrap",
                      material: "Partially cured gel",
                      lamp: "Yes (LED or UV)",
                      wear: "2 to 3 weeks",
                      examples: "Dashing Diva, Gelish Gel Strips, most Korean gel strip brands",
                    },
                  ].map(({ type, material, lamp, wear, examples }, i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{material}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{lamp}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm" style={{ color: "#707070" }}>
              Not sure which type you have?{" "}
              <Link href="/what-are/what-are-nail-wraps/" style={{ color: "#046BD2" }} className="hover:underline">
                See our guide on what nail wraps are
              </Link>{" "}
              for a full breakdown of wrap types and how they differ.
            </p>
          </div>

          {/* Film wrap section */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How To Apply Nail Polish Film Wraps</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Film wraps are the simplest nail wrap type. No lamp required, no curing time. The only tools you need are a nail file, rubbing alcohol, and the strips themselves.
            </p>

            <h3 className="text-lg font-semibold mb-3" style={{ color: "#1E293B" }}>What You Need</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Supply</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {filmSupplies.map(({ item, note }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-3" style={{ color: "#1E293B" }}>Step-by-Step Instructions</h3>
            <div className="space-y-6">
              {filmSteps.map(({ num, title, body }) => (
                <div key={num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gel wrap section */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How To Apply Semi-Cured Gel Nail Wraps</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Gel nail wraps follow the same basic steps as film wraps but add a curing step under a UV or LED lamp. The lamp finishes the curing process that began at the factory and is what gives gel wraps their longer wear time. Do not skip the curing step.
            </p>

            <h3 className="text-lg font-semibold mb-3" style={{ color: "#1E293B" }}>What You Need</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Supply</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {gelSupplies.map(({ item, note }, i) => (
                    <tr key={item} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{item}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-3" style={{ color: "#1E293B" }}>Step-by-Step Instructions</h3>
            <p
              className="text-sm mb-4 px-3 py-2 rounded-lg border-l-4"
              style={{ color: "#707070", background: "#F0F5FA", borderColor: "#046BD2" }}
            >
              Steps 1 through 4 are the same as film wraps. The curing step in step 5 is what makes gel wraps different from film wraps.
            </p>
            <div className="space-y-6">
              {gelSteps.map(({ num, title, body }) => (
                <div key={num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {num}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#1E293B" }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wear time */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Nail Wraps Last?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Wear time depends on the wrap type, whether you apply top coat, and how much water contact your nails get. Here are realistic expectations.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Situation</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected Wear Time</th>
                  </tr>
                </thead>
                <tbody>
                  {wearTimeTable.map(({ type, wear }, i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Tips for Making Nail Wraps Last Longer</h2>
            <div className="space-y-4">
              {tips.map(({ tip, reason }) => (
                <div key={tip} className="rounded-lg p-4 border border-gray-100" style={{ background: "#F8FBFF" }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#1E293B" }}>{tip}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Common Nail Wrap Mistakes (and How To Fix Them)</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Mistake</th>
                    <th className="text-left px-4 py-2 font-semibold">How To Fix It</th>
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
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions About Applying Nail Wraps</h2>
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
                { title: "What Are Nail Wraps?", href: "/what-are/what-are-nail-wraps/" },
                { title: "How To Remove Nail Wraps", href: "/how-to/how-to-remove-nail-wraps/" },
                { title: "What Are Nail Stickers?", href: "/what-are/what-are-nail-stickers/" },
                { title: "How To Apply Press On Nails", href: "/how-to/how-to-apply-press-on-nails/" },
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
