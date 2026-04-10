import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glitter Nails: What They Are, Types, Designs and How Long They Last",
  description:
    "Glitter nails use glitter particles suspended in polish, gel, or loose powder to add sparkle to any manicure. Learn what glitter nails are, the different types, the most popular glitter nail designs, how to apply them at home, and how long they last.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-glitter-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-glitter-nails/",
    title: "Glitter Nails: What They Are, Types, Designs and How Long They Last",
    description:
      "Glitter nails use glitter particles suspended in polish, gel, or loose powder to add sparkle to any manicure. Learn what glitter nails are, the different types, the most popular glitter nail designs, how to apply them at home, and how long they last.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "Glitter Nails", item: "https://shenailsalon.com/what-are/what-are-glitter-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Glitter Nails: What They Are, Types, Designs and How Long They Last",
  description:
    "A complete guide to glitter nails. Covers what glitter nails are, the different types (fine glitter, chunky glitter, holographic glitter, gel glitter), the most popular glitter nail designs, how to apply them at home or at a salon, and how long they last by nail type.",
  url: "https://shenailsalon.com/what-are/what-are-glitter-nails/",
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
  dateModified: "2026-04-10",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-glitter-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are glitter nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glitter nails are nails decorated with glitter particles to create a sparkly, reflective effect. The glitter can be suspended in nail polish or gel, mixed into dip powder, applied as loose glitter over wet polish or adhesive, or deposited via glitter foil transfer. Glitter nail effects range from subtle shimmer using fine micro-glitter to bold, full-coverage sparkle using chunky hex glitter or holographic glitter particles.",
      },
    },
    {
      "@type": "Question",
      name: "What are the different types of glitter nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main types of glitter nails are: fine shimmer nails (micro-glitter mixed into polish or gel for a subtle all-over sparkle), chunky glitter nails (large hex or square glitter particles that create a bold, multidimensional effect), holographic glitter nails (prismatic glitter that reflects rainbow light), glitter ombre nails (glitter applied heavily at the tips and faded toward the cuticle), glitter tip nails (glitter applied only to the free edge as an alternative to French tips), and encapsulated glitter nails (loose glitter sealed between gel layers for a smooth, gel-like surface with glitter inside).",
      },
    },
    {
      "@type": "Question",
      name: "How long do glitter nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glitter gel nails last 2 to 3 weeks, the same as standard gel. Glitter acrylic or dip nails last 3 to 4 weeks. Glitter regular nail polish lasts 5 to 7 days. Encapsulated glitter gel nails last 2 to 3 weeks and have the advantage of smooth surface wear since the glitter is sealed inside the gel. Loose glitter applied over polish tends to lift or shed faster than glitter suspended in a product.",
      },
    },
    {
      "@type": "Question",
      name: "How do you do glitter nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest method is to apply a glitter nail polish or glitter gel polish directly like a regular manicure. For a more intense glitter effect, apply a base coat, then while it is still tacky, dip or pat loose cosmetic glitter onto the nail surface and seal with a clear topcoat. For glitter ombre, pat glitter or glitter polish only at the tips and blend inward while wet. For encapsulated glitter, apply a gel base, cure it, apply loose glitter, cure again, then apply a thick clear gel to seal the glitter smooth, and cure to finish.",
      },
    },
    {
      "@type": "Question",
      name: "What are glitter tip nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glitter tip nails are nails where glitter is applied only to the free edge of the nail, roughly where a French tip line would be. The base of the nail is typically a solid color or sheer nude, and the tip is fully covered in glitter for a sparkling French tip effect. This style is popular at weddings, proms, and holiday events. The glitter tips can be applied with glitter gel, loose glitter patted into gel or adhesive, or with a pre-glittered press-on tip.",
      },
    },
    {
      "@type": "Question",
      name: "What is holographic glitter nail polish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holographic glitter nail polish contains prismatic glitter particles that refract light into a full rainbow spectrum, creating a shifting, multi-color sparkle effect as the nail moves. Standard glitter reflects light in a single color (silver, gold, or a chosen shade). Holographic glitter produces rainbow light dispersion. The effect is most visible in bright natural or artificial light. Popular holographic glitter polishes include ILNP Ultra Holographic and Cirque Colors Holo formulas.",
      },
    },
    {
      "@type": "Question",
      name: "How much do glitter nails cost at a salon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At a California nail salon, a gel manicure with a glitter polish finish typically costs $35 to $55 depending on the salon and location. Encapsulated glitter nails or hand-placed chunky glitter designs may cost $45 to $70 because they require more time and skill. An accent nail with a glitter design added to a standard gel manicure is usually a $5 to $10 upcharge. Full-set acrylic nails with glitter designs typically range from $50 to $85 in California.",
      },
    },
  ],
};

const glitterTypesRows = [
  ["Fine shimmer / micro-glitter", "Tiny metallic particles mixed into polish or gel", "Subtle all-over sparkle, works for everyday wear"],
  ["Chunky hex glitter", "Large flat hexagonal glitter pieces in polish or gel", "Bold, multidimensional sparkle, festive looks"],
  ["Holographic glitter", "Prismatic particles that refract rainbow light", "Rainbow light dispersion with every movement"],
  ["Loose glitter (encapsulated)", "Loose cosmetic glitter sealed between gel layers", "Smooth surface, custom glitter colors, long-lasting"],
  ["Glitter ombre", "Glitter faded from tips to cuticle over a base color", "Gradient sparkle, elegant and modern"],
  ["Glitter tips", "Glitter applied only to the free edge (tip area)", "Sparkling alternative to classic French tips"],
  ["Glitter dust / ultra-fine powder", "Extremely fine metallic powder applied like pigment", "Chrome-like shimmer rather than distinct sparkle"],
  ["Glitter dip powder", "Glitter particles mixed into dip powder base", "Durable full-coverage sparkle, no lamp needed"],
];

const glitterDesignRows = [
  ["Full glitter nails", "All nails fully covered in glitter gel or encapsulated glitter", "Festive events, holiday nails"],
  ["Glitter accent nail", "One nail in glitter, rest in solid color", "Everyday sparkle, easiest DIY option"],
  ["Glitter tips (French style)", "Glitter only at the free edge on a nude or sheer base", "Weddings, prom, formal events"],
  ["Glitter ombre", "Heavy glitter at tips fading to a solid color at the cuticle", "Events, editorial looks, special occasions"],
  ["Chunky glitter on gel base", "Chunky glitter pressed into gel, sealed with clear gel", "Bold statement, NYE, holiday parties"],
  ["Holographic glitter nails", "Full coverage of holo glitter or holo polish", "Maximalist, festival, editorial"],
  ["Glitter gradient (two colors)", "Two different glitter shades blended at the center", "Creative, color-story manicures"],
  ["Glitter outline / liner", "Fine glitter applied as a thin border around the nail edge", "Subtle sparkle detail, nail art enhancement"],
];

const applicationMethodRows = [
  ["Glitter nail polish", "Apply like regular polish; 2 coats + topcoat", "Beginner", "5 to 7 days (regular), 2 to 3 weeks (gel)"],
  ["Glitter gel polish", "Apply and cure under UV/LED lamp each layer", "Beginner", "2 to 3 weeks"],
  ["Loose glitter over tacky base", "Pat loose glitter onto a tacky base coat; seal with topcoat", "Intermediate", "5 to 10 days"],
  ["Encapsulated glitter (gel)", "Apply gel base, add loose glitter, seal with clear gel, cure", "Intermediate", "2 to 3 weeks"],
  ["Glitter dip powder", "Follow standard dip process using glitter dip base", "Beginner/Intermediate", "3 to 4 weeks"],
  ["Glitter foil transfer", "Press foil onto tacky gel; glitter transfers to nail", "Intermediate", "1 to 2 weeks"],
];

const wearTimeRows = [
  ["Glitter gel manicure (salon)", "2 to 3 weeks"],
  ["Glitter gel at home", "1 to 2 weeks"],
  ["Encapsulated glitter gel", "2 to 3 weeks (smooth surface, less edge lift)"],
  ["Glitter dip powder nails", "3 to 4 weeks"],
  ["Glitter acrylic nails", "2 to 3 weeks (until fill)"],
  ["Glitter regular nail polish", "5 to 7 days"],
  ["Loose glitter over polish", "3 to 5 days before shedding or topcoat lift"],
];

const prosRows = [
  ["Works on any nail type", "Glitter can be applied over gel, acrylic, dip, or regular polish"],
  ["Huge variety of effects", "From subtle shimmer to bold chunky sparkle to holographic rainbow"],
  ["Easy entry point", "Glitter nail polish is beginner-friendly and available everywhere"],
  ["Hides imperfections", "Dense glitter covers uneven color or minor chips underneath"],
  ["Event versatility", "Works for everyday wear, weddings, holidays, and festivals"],
  ["Accent nail friendly", "A single glitter accent nail requires minimal time and product"],
];

const consRows = [
  ["Removal can be difficult", "Dense glitter polish requires longer soak time to remove"],
  ["Loose glitter messy to apply", "Glitter goes everywhere during application if not contained"],
  ["Chunky glitter can catch fabric", "Large glitter pieces may snag on clothing or hair"],
  ["Faster fading on tips", "Glitter on the nail edge chips faster than the nail body"],
  ["Not always office-appropriate", "Full-coverage chunky glitter may not suit conservative workplaces"],
];

export default function GlitterNailsPage() {
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
            <Link href="/category/what-are" style={{ color: "#046BD2" }} className="hover:underline">What Are</Link>
            <span className="mx-2">/</span>
            <span>Glitter Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            Glitter Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Glitter nails use glitter particles to add sparkle and shine to any manicure. The glitter can be built into the polish or gel formula, applied as loose glitter over a tacky base, or sealed inside a gel layer for a smooth encapsulated effect. This guide covers what glitter nails are, every type of glitter nail finish, the most popular designs, how to apply them at home, how long they last, and what to expect at a salon. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are glitter nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Glitter Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Glitter nails are nails decorated with glitter particles that reflect and scatter light to create a sparkling effect. The glitter can be part of the nail polish or gel formula, patted on as loose cosmetic glitter, applied through glitter dip powder, or transferred using glitter foil. The result ranges from a delicate, all-over shimmer using fine micro-glitter to a bold, statement look using chunky hex glitter pieces.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Glitter nails are one of the most flexible nail design categories. They work over gel, acrylic, dip powder, and regular nail polish. They can cover the entire nail or just the tip. They can be the only design element or layered with other nail art techniques. A single glitter accent nail on an otherwise solid manicure is one of the most popular and easiest ways to add dimension to any look.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              I have been doing some version of glitter nails for years, and the thing I always come back to is that they photograph so well. Even a simple glitter topcoat over a plain nail polish completely changes how the nails look in photos. It is an easy way to make a basic manicure feel finished and special without spending extra time on complicated nail art.
            </p>
          </div>

          {/* Types of glitter nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of Glitter Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Not all glitter nails look the same. The type of glitter particle, the density of application, and the base color all determine the final effect. Here is a breakdown of the main types:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">What it is</th>
                    <th className="text-left px-4 py-2 font-semibold">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {glitterTypesRows.map(([type, what, effect], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{what}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chunky glitter nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Chunky Glitter Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Chunky glitter nails use large glitter particles, typically flat hexagonal or square pieces between 1 and 3 mm in size, that sit on top of or within the nail product. Because the pieces are large, they catch light at different angles and create a three-dimensional sparkle that looks very different from the even shimmer of fine-glitter polishes.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The most common application method for chunky glitter is to press the glitter pieces directly into a tacky gel base coat, then seal them with a thick clear gel or builder gel to create a smooth surface. This encapsulation technique prevents the glitter pieces from catching on fabric or lifting at the edges, which is the main problem with chunky glitter applied over regular polish.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Chunky glitter nails are particularly popular for New Year's Eve, holiday parties, and prom. Silver and gold chunky glitter are the most classic options. Holographic chunky glitter, which produces rainbow reflections instead of a single color, has become increasingly popular as a more distinctive alternative to plain metallic glitter.
            </p>
          </div>

          {/* Glitter nail designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Glitter Nail Designs and Ideas</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Glitter nails span a wide range from understated to maximalist. Here are the most popular glitter nail design approaches:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Design</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {glitterDesignRows.map(([design, desc, bestFor], i) => (
                    <tr key={design} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{design}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{desc}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Glitter tip nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Glitter Tip Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Glitter tip nails place the glitter only at the free edge of the nail, creating a sparkling alternative to a classic French tip. The base is typically a sheer nude, soft pink, or solid color, and the glitter tip starts approximately where a traditional French white tip would begin. The effect is more festive and eye-catching than a plain French manicure, while still being elegant enough for formal events.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              To do glitter tips at home with gel, apply and cure a nude or sheer base gel, then apply a glitter gel or pat loose glitter only onto the free edge of each nail. Seal with a clear gel and cure to finish. The French tip line does not need to be perfectly straight for glitter tips since the scattered glitter creates a softer, more organic edge than painted white tips.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Glitter tips are a popular wedding nail choice for brides who want some sparkle without a full glitter manicure. They are also a popular prom and homecoming nail style because they read formal without being as heavy as full glitter coverage.
            </p>
          </div>

          {/* Glitter ombre nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Glitter Ombre Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Glitter ombre nails fade glitter from heavy coverage at the nail tips to little or no glitter at the cuticle, creating a gradient sparkle effect. The base is usually a solid gel or polish color that matches or contrasts with the glitter shade. Gold glitter faded over a nude base is the most classic version. Silver glitter over a deep burgundy or navy gel base creates a more dramatic winter look.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              To apply glitter ombre at home, pat or brush glitter heaviest at the nail tip, then use a dry sponge to dab a diluted glitter layer inward and blend. A second layer at the tip builds intensity. A clear topcoat seals the glitter and smooths the surface. The blended edge of a glitter ombre looks more finished when the gradient transition zone is about one-third to one-half of the nail length.
            </p>
          </div>

          {/* Holographic glitter nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Holographic Glitter Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic glitter nails use prismatic glitter particles that refract white light into a full rainbow spectrum. Unlike regular silver or gold glitter, which reflects a single color, holographic glitter produces a shifting rainbow effect as the nail moves in light. The effect is most dramatic in strong directional light, such as sunlight, stage lighting, or photography flash.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Holographic nail products include dedicated holographic nail polishes (where holo particles are pre-mixed into a formula), holographic glitter powders that are brushed or rubbed onto a sticky gel surface, and holographic chunky glitter for a bolder look. Holo powder applied over black or dark navy gel creates one of the most striking glitter nail effects available, since the dark base makes the rainbow sparkle more visible.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Holographic nails sit at the intersection of glitter nails and{" "}
              <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                chrome nails
              </Link>
              . Chrome powder gives a solid metallic mirror finish, while holographic powder gives a rainbow sparkle finish. Both are applied to a cured gel surface using a silicone rubbing tool, and both require a gel topcoat to seal and protect the finish.
            </p>
          </div>

          {/* How to apply glitter nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How to Apply Glitter Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              There are several ways to apply glitter nails at home, ranging from a simple glitter polish to more involved encapsulation techniques:
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Method</th>
                    <th className="text-left px-4 py-2 font-semibold">How it works</th>
                    <th className="text-left px-4 py-2 font-semibold">Skill level</th>
                    <th className="text-left px-4 py-2 font-semibold">Wear time</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationMethodRows.map(([method, how, skill, wear], i) => (
                    <tr key={method} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{method}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{skill}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{wear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Tip for encapsulated glitter</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                When encapsulating loose glitter in gel, apply the glitter over a gel layer that is still sticky (inhibition layer intact, not wiped), then gently press the glitter flat with a clean silicone tool or the back of a spoon before sealing. This reduces the surface texture of the finished nail and makes the topcoat sealing step easier.
              </p>
            </div>
          </div>

          {/* How long do glitter nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do Glitter Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The wear time of glitter nails depends on which nail product the glitter is applied with, not the glitter itself. Encapsulated glitter gel nails often last as long as standard gel because the glitter is sealed inside the product and does not create edge-lifting points. Loose glitter applied over regular polish tends to lift or shed faster because the glitter particles prevent the topcoat from forming a tight seal with the polish layer beneath.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Nail type</th>
                    <th className="text-left px-4 py-2 font-semibold">Expected wear time</th>
                  </tr>
                </thead>
                <tbody>
                  {wearTimeRows.map(([type, time], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Salon vs DIY */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Glitter Nails at a Salon vs At Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              A glitter gel manicure at a California nail salon typically costs $35 to $55 for a standard gel manicure with a glitter gel polish finish. Encapsulated chunky glitter designs or full-coverage hand-placed glitter nails can cost $50 to $75 because they require more time and a higher volume of product. An accent nail upgrade (one glitter nail on an otherwise solid manicure) is usually a $5 to $10 add-on.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              At home, a glitter gel polish kit including a UV/LED lamp, gel base coat, glitter gel color, and gel topcoat runs $40 to $80 upfront, but each manicure after that costs only $2 to $5 in product. For regular nail polish glitter, cost per manicure is under $2. Loose glitter for encapsulation is extremely inexpensive (a set of cosmetic glitter colors costs $8 to $15) but the technique requires practice.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The main advantage of a salon for glitter nails is the encapsulation technique: placing and sealing chunky or loose glitter professionally results in a smoother, more durable finish than most home applications. For simple glitter polish or glitter gel polish, DIY results are very close to salon quality.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Glitter Nails: Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border p-4" style={{ borderColor: "rgba(4,107,210,0.2)", background: "#F8FBFF" }}>
                <p className="font-semibold mb-3" style={{ color: "#046BD2" }}>Pros</p>
                <ul className="space-y-2">
                  {prosRows.map(([title, desc]) => (
                    <li key={title} className="text-sm" style={{ color: "#707070" }}>
                      <span className="font-medium" style={{ color: "#1E293B" }}>{title}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4" style={{ borderColor: "rgba(100,100,100,0.2)", background: "#FAFAFA" }}>
                <p className="font-semibold mb-3" style={{ color: "#334155" }}>Cons</p>
                <ul className="space-y-2">
                  {consRows.map(([title, desc]) => (
                    <li key={title} className="text-sm" style={{ color: "#707070" }}>
                      <span className="font-medium" style={{ color: "#1E293B" }}>{title}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Glitter Nails: Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-b pb-5" style={{ borderColor: "#e2e8f0" }}>
                  <p className="font-semibold mb-2" style={{ color: "#1E293B" }}>{item.name}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related guides */}
          <div className="rounded-xl p-6 border" style={{ background: "#F8FBFF", borderColor: "rgba(4,107,210,0.15)" }}>
            <p className="font-semibold mb-4" style={{ color: "#1E293B" }}>Related Nail Guides</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">
                  Nail Art: Types, Designs and Ideas
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  Chrome Nails: Colors, Application and How Long They Last
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-ombre-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Ombre Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Gel Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-matte-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Matte Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-nail-shapes/" style={{ color: "#046BD2" }} className="hover:underline">
                  Nail Shapes: Every Shape Explained and Compared
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
