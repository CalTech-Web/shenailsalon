import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Nails: What They Are, Types, Designs and How to Get Them",
  description:
    "3D nails add raised, sculptural elements to the nail surface using gel, acrylic, or decorative charms. Learn what 3D nails are, the different types, popular designs, how long they last, and how to get them at a salon or at home.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-3d-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-3d-nails/",
    title: "3D Nails: What They Are, Types, Designs and How to Get Them",
    description:
      "3D nails add raised, sculptural elements to the nail surface using gel, acrylic, or decorative charms. Learn what 3D nails are, the different types, popular designs, how long they last, and how to get them at a salon or at home.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "3D Nails", item: "https://shenailsalon.com/what-are/what-are-3d-nails/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "3D Nails: What They Are, Types, Designs and How to Get Them",
  description:
    "A complete guide to 3D nails. Covers what 3D nails are, every major type from nail charms to sculpted gel flowers, the most popular designs, how long 3D nails last, California salon pricing, and DIY options for home.",
  url: "https://shenailsalon.com/what-are/what-are-3d-nails/",
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
  dateModified: "2026-04-11",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-3d-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are 3D nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D nails are nails with raised, three-dimensional elements added to the surface. These elements sit above the flat nail plate and create visible texture and dimension. The most common 3D nail techniques are sculpted gel or acrylic art (flowers, bows, swirls built up by hand), nail charms (small rhinestones, gems, or shaped decorations pressed into gel before curing), and encapsulated objects (glitter, dried flowers, or charms sealed inside a clear gel or acrylic layer). 3D nail art is a category of nail art, not a specific nail enhancement type.",
      },
    },
    {
      "@type": "Question",
      name: "How are 3D nails made?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D nails are made using one of several techniques depending on the type of element. Gel sculpting uses thick builder gel or nail art gel applied with a small brush, shaped into a raised form while still uncured, then hardened under a UV or LED lamp. Acrylic sculpting uses a monomer-and-polymer mixture built up in layers and shaped before it hardens. Nail charms are pressed into a small dot of uncured gel on the nail surface, which then acts as an adhesive when cured under a lamp. Encapsulation involves placing an object on a layer of gel or acrylic before covering it with a clear layer and curing or hardening.",
      },
    },
    {
      "@type": "Question",
      name: "How long do 3D nails last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel-sculpted 3D nail art on a salon gel manicure typically lasts 2 to 3 weeks before the base manicure needs to be removed or refilled. Nail charms embedded in gel can last the full length of the gel manicure but may snag on fabric and pull off earlier. Flat encapsulated 3D elements (dried flowers, glitter) are the most durable because they are fully sealed inside the gel. Acrylic sculpted 3D art can last 3 to 4 weeks with a fill. Elements added with nail glue rather than gel are the least durable and may lift within a week.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular 3D nail designs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular 3D nail designs include sculpted gel flowers (soft pastel petals built up over a gel base, commonly done in white, pink, and lavender), rhinestone or crystal arrangements (clustered gems placed in patterns or scattered across the nail), bow nail art (small 3D bows sculpted in gel or acrylic, popular on coffin and almond shapes), cherry and fruit charms (popular in Y2K and kawaii-inspired styles), and encapsulated dried flowers (pressed botanicals sealed under clear gel for a pressed-flower aesthetic). Butterfly charms and pearl accents are also widely requested at salons.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do 3D nails at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, some types of 3D nails are achievable at home. Nail charms and rhinestones are the easiest DIY option. They require only a small dot of nail glue or a sticky gel base coat, the charm placed on top, and a clear top coat to seal. Encapsulated objects like dried flowers or glitter can be done at home if you have a gel lamp and basic gel products. Sculpted gel or acrylic 3D art is the most difficult type and requires practice with nail art brushes and gel consistency. Pre-made 3D nail stickers and decals are a no-skill alternative that works with any base.",
      },
    },
    {
      "@type": "Question",
      name: "How much do 3D nails cost at a salon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3D nail art is priced as an add-on to a base manicure at most salons. In California, a gel manicure with 3D nail art typically costs $60 to $110 depending on the complexity of the design and how many nails have 3D elements. Simple rhinestone or charm placement on two accent nails adds $10 to $20 to the base manicure price. Elaborate sculpted gel flower designs on all ten nails can add $40 to $60 or more. Some salons charge per nail for 3D art rather than a flat add-on fee.",
      },
    },
    {
      "@type": "Question",
      name: "Do 3D nails snag on things?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raised 3D elements that extend significantly above the nail surface can snag on fabric, hair, and soft materials. Large nail charms, tall sculpted gel elements, and anything with sharp edges or protruding points are the most likely to catch. Low-profile elements like flat rhinestones, small pearls, and thin encapsulated dried flowers are much less likely to snag. Encapsulated designs, where the 3D object is sealed inside a smooth gel layer, have almost no snagging risk. If snagging is a concern, flat or lightly raised 3D elements are a better choice than tall sculptural designs.",
      },
    },
  ],
};

const typeRows = [
  ["Gel sculpted art", "Nail art gel or builder gel built up and shaped by hand into raised forms (flowers, bows, swirls, ribbons)", "Intermediate to advanced", "Most design flexibility, very durable"],
  ["Acrylic sculpted art", "Acrylic powder and monomer built up into three-dimensional shapes before hardening", "Advanced", "Very durable, can be very detailed"],
  ["Nail charms", "Pre-made decorative elements (rhinestones, pearls, shaped gems) pressed into uncured gel", "Beginner friendly", "Quick to apply, can snag on fabric"],
  ["Encapsulated objects", "Dried flowers, glitter, foil, or charms sealed inside a clear gel or acrylic layer", "Beginner to intermediate", "Very smooth finish, minimal snagging risk"],
  ["3D nail stickers / decals", "Pre-made raised adhesive elements applied over finished polish or gel", "Beginner (no skill needed)", "Least durable, good for occasional wear"],
  ["Crystal and rhinestone clusters", "Clusters of flat-back crystals arranged in geometric or scattered patterns in gel", "Beginner to intermediate", "Very popular, versatile, can be dense or minimal"],
  ["Stamping relief", "Nail stamping plates used to create embossed or raised repeat patterns on gel or polish", "Intermediate", "Uniform patterns, lower profile than sculpted art"],
];

const designRows = [
  ["Sculpted gel flowers", "Soft pastel petals built up over gel base; white, pink, lavender", "Spring, weddings, editorial", "Almond, coffin, oval"],
  ["Rhinestone clusters", "Crystal gems arranged in dense clusters or scattered patterns", "Glamour, formal events, everyday", "Any shape"],
  ["3D bow nails", "Small ribbon bows sculpted in gel or acrylic, or placed as pre-made charms", "Y2K, kawaii, feminine", "Coffin, almond, square"],
  ["Encapsulated dried flowers", "Pressed botanicals sealed under clear gel for a botanical aesthetic", "Spring, editorial, cottagecore", "Oval, almond, squoval"],
  ["Pearl accents", "Round pearl beads embedded in gel along the cuticle line or in clusters", "Minimalist, bridal, elegant", "Oval, almond, short square"],
  ["Butterfly charms", "Iridescent or resin butterfly shapes placed as accent-nail focal points", "Summer, festival, editorial", "Coffin, almond, stiletto"],
  ["Cherry and fruit charms", "Small polymer clay or resin fruit shapes, popular in dopamine and kawaii styles", "Playful, seasonal, editorial", "Coffin, almond, square"],
  ["Crystal half-moon", "Rhinestones lined along the cuticle area in a crescent formation", "Minimalist glamour, versatile", "Any shape"],
];

const wearTimeRows = [
  ["Sculpted gel art on salon gel manicure", "2 to 3 weeks"],
  ["Sculpted acrylic 3D art", "3 to 4 weeks (until fill)"],
  ["Encapsulated objects in gel (salon)", "2 to 3 weeks"],
  ["Nail charms in gel (salon)", "1 to 3 weeks (depends on placement and activity)"],
  ["3D nail stickers over regular polish", "3 to 7 days"],
  ["Nail charms with nail glue only", "3 to 7 days"],
];

const prosRows = [
  ["Maximum visual impact", "3D elements catch light and draw attention in a way flat nail art cannot"],
  ["Highly customizable", "Works across every nail type, shape, color palette, and style from minimalist to maximalist"],
  ["Accessible entry points", "Nail charms and rhinestones are beginner-friendly and require no artistic skill"],
  ["Long-lasting when done in gel", "Sculpted gel art and encapsulated designs last as long as a standard gel manicure"],
  ["Wide range of aesthetics", "Covers everything from elegant dried-flower designs to Y2K rhinestone clusters"],
  ["Strong social media appeal", "3D nail art photographs exceptionally well and performs well in nail content feeds"],
];

const consRows = [
  ["Sculpted art requires skill", "Gel and acrylic sculpting take significant practice to execute cleanly"],
  ["Higher salon cost", "3D nail art adds $20 to $60 or more on top of the base manicure price"],
  ["Snagging risk", "Raised elements can catch on fabric, hair, and textiles, especially tall designs"],
  ["More fragile than flat art", "Protruding elements are more prone to breaking or being knocked off"],
  ["Not practical for all lifestyles", "Very raised designs are impractical for typing, manual work, or active lifestyles"],
];

export default function ThreeDNailsPage() {
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
            <span>3D Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            3D Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            3D nails are nails with raised, sculptural elements applied on top of or built directly onto the nail surface. The designs range from clusters of rhinestones and pressed dried flowers sealed under clear gel to hand-sculpted acrylic bows and gel flower petals that stand above the nail in full three dimensions. I got my first set of 3D nail charms expecting them to look bulky, and was surprised at how wearable even the more dimensional designs turned out to be. This guide covers what 3D nails are, every major type, the most popular designs, how long they last, and what they cost at a salon in California. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* What are 3D nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are 3D Nails?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              3D nails are any nail style where decorative elements extend visibly above the flat surface of the nail. The term covers a broad range of techniques and materials, from tiny flat-back rhinestones embedded in gel to elaborate sculpted gel flowers with layered petals that rise several millimeters off the nail. What all 3D nail styles share is dimension: the design has physical height, not just color or painted pattern.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              3D nail art is a subcategory of <Link href="/what-are/what-are-nail-art/" style={{ color: "#046BD2" }} className="hover:underline">nail art</Link> rather than a standalone nail enhancement type. The raised elements are applied on top of an existing nail, whether that is natural nails with a gel top coat, <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">gel nails</Link>, <Link href="/what-are/what-are-acrylic-nails/" style={{ color: "#046BD2" }} className="hover:underline">acrylic nails</Link>, or <Link href="/what-are/what-are-press-on-nails/" style={{ color: "#046BD2" }} className="hover:underline">press-on nails</Link>. The 3D design is the finish layer, not the structural foundation.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The popularity of 3D nail art has grown significantly since the mid-2010s, largely driven by social media platforms where dimensional designs photograph dramatically better than flat nail art. Designs that catch overhead light, cast small shadows, or show visible depth in a photograph perform noticeably better in feeds, which has accelerated both salon demand and home experimentation with nail charms and encapsulated botanicals.
            </p>
          </div>

          {/* Types of 3D nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Types of 3D Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              3D nail art encompasses several distinct techniques, each with a different look, skill requirement, and durability profile.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Type</th>
                    <th className="text-left px-4 py-2 font-semibold">How it works</th>
                    <th className="text-left px-4 py-2 font-semibold">Skill level</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {typeRows.map(([type, how, skill, notes], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{how}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{skill}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nail charms section */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>3D Nail Charms</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Nail charms are pre-made decorative elements placed onto the nail surface and secured with gel or nail glue. They are the most accessible entry point into 3D nail art because they require no sculpting skill: you select the charm, place it, and secure it. The range of charms available is enormous, from flat-back rhinestones and faceted crystals to shaped resin pieces like butterflies, bows, cherries, stars, and even tiny miniature objects.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              For the most durable result, charms should be set in a small dot of thick nail art gel, which is then cured under a UV or LED lamp. The cured gel grips the base of the charm far more securely than nail glue, which tends to loosen with water exposure over days rather than weeks. For extra security on large or heavy charms, some technicians also apply a thin ring of gel around the base of the charm and cure it as a secondary anchor.
            </p>
            <div
              className="mt-4 p-4 rounded-lg border"
              style={{ background: "rgba(4,107,210,0.05)", borderColor: "rgba(4,107,210,0.2)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#046BD2" }}>Tip: setting charms with gel</p>
              <p className="text-sm" style={{ color: "#707070" }}>
                Apply a small dot of builder gel or thick nail art gel where the charm will sit. Press the charm firmly into the gel before curing. The gel should spread slightly under the base of the charm without overflowing. Cure for the full recommended time, then check for movement before applying a final gel top coat. Running the top coat up to but not over the top face of the charm gives the best adhesion without dulling the finish of rhinestones or metallic charms.
              </p>
            </div>
          </div>

          {/* Sculpted gel and acrylic 3D art */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Sculpted Gel and Acrylic 3D Nail Art</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Sculpted 3D nail art uses gel or acrylic material built up by hand into three-dimensional shapes directly on the nail. This is the most technically demanding type of 3D nail art and the most open-ended in terms of design. A skilled nail artist can sculpt gel into realistic flower petals with visible texture and depth, ribbon bows with folded edges, leaves, swans, or abstract sculptural forms. The results at the high end of this technique look more like miniature ceramics than nail art.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Gel sculpting uses a thick, paste-like nail art gel applied with a small domed or tapered brush. The gel holds its shape before curing, which gives the artist time to build up layers and refine the form. Each layer is cured separately before the next is added. Acrylic sculpting uses the traditional bead-and-brush method, where the technician picks up a bead of acrylic product and places and shapes it quickly before it hardens. Acrylic is less forgiving than gel because the working time is shorter and the material cannot be re-wetted once it starts to set.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Sculpted gel flowers are the most popular request for this type of 3D nail art. The petals are built up from the base outward, with each petal cured separately before the next is added to prevent collapse. Pigment is either mixed into the gel before application or painted onto cured petals with gel nail art paint. The final result can be a single statement flower on an accent nail, or a full set of matching floral 3D nail art on all fingers.
            </p>
          </div>

          {/* Encapsulated 3D nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Encapsulated 3D Nails</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Encapsulated nails are a unique category where the 3D element is sealed inside a clear gel or acrylic layer rather than sitting on top of it. The object, whether a dried flower, a piece of foil, a charm, or glitter, is placed on a sticky uncured layer of gel, then covered with a clear gel top layer that is cured smooth. The result looks like the object is floating inside the nail, preserved under glass.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Encapsulated dried flowers have been one of the most popular 3D nail trends in recent years. Real pressed botanicals, typically small wildflowers, lavender sprigs, baby&apos;s breath, or delicate ferns, are dried and flattened before being placed in gel. The clear encapsulation layer magnifies the flower slightly and makes the color appear more vivid. Because the flower is completely sealed, the design is more durable and has no snagging risk compared to surface-mounted charms.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Glitter and foil encapsulation are lower-profile versions of the same technique and are often used as background texture rather than focal design elements. A layer of <Link href="/what-are/what-are-glitter-nails/" style={{ color: "#046BD2" }} className="hover:underline">glitter</Link> or metallic foil pressed onto a sticky gel base, then sealed under a clear coat, produces a dimensional shimmer effect with no raised surface.
            </p>
          </div>

          {/* Popular 3D nail designs */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Popular 3D Nail Designs</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              3D nail designs span a wide aesthetic range, from minimalist pearl accents to maximalist full-coverage rhinestone sets. The designs below represent the most consistently requested styles at salons.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Design</th>
                    <th className="text-left px-4 py-2 font-semibold">Description</th>
                    <th className="text-left px-4 py-2 font-semibold">Style / occasion</th>
                    <th className="text-left px-4 py-2 font-semibold">Best nail shape</th>
                  </tr>
                </thead>
                <tbody>
                  {designRows.map(([design, desc, occasion, shape], i) => (
                    <tr key={design} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{design}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{desc}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{occasion}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{shape}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How long do 3D nails last */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How Long Do 3D Nails Last?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The durability of 3D nails depends on both the underlying nail type and the attachment method for the 3D elements. The base manicure determines the overall lifespan, while the attachment method determines whether the 3D elements survive for the full duration. Encapsulated designs are the most durable because the elements are completely protected. Surface-mounted charms and sculpted art are more vulnerable to knocks and fabric catching.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">3D nail type</th>
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
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>3D Nails at the Salon vs at Home</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Getting 3D nails at a nail salon delivers the most complex and durable results, especially for sculpted gel art and intricate rhinestone designs that require precision placement and professional-grade gel products. Most nail salons in California charge 3D nail art as an add-on to the base manicure price. A gel manicure with rhinestone or charm placement on two accent nails typically adds $10 to $20 to the base cost. Full-set sculpted gel flower art can add $40 to $60 or more, bringing total California salon pricing to $60 to $110 for a gel manicure with detailed 3D nail art. Some salons charge per nail for very elaborate designs.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              DIY 3D nails at home are realistic for most types except sculpted gel and acrylic art. Nail charm kits with a variety of rhinestones, pearls, and shaped pieces are widely available online for $10 to $25 and include enough material for multiple full sets. A gel lamp is needed for the most durable charm application, but nail glue works as a no-lamp alternative for occasional wear. Dried flower encapsulation kits are also available for home use and require basic familiarity with gel application.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Pre-made 3D nail stickers and decals are the lowest-barrier entry point for 3D nail art at home. They apply directly over dried nail polish or gel with no additional adhesive and take minutes to apply. Wear time is shorter than gel-set art, typically 3 to 7 days, but they are a practical option for events or short-term wear without a salon visit.
            </p>
          </div>

          {/* Pros and cons */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>3D Nails: Pros and Cons</h2>
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
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>3D Nails: Frequently Asked Questions</h2>
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
                <Link href="/what-are/what-are-gel-nail-designs/" style={{ color: "#046BD2" }} className="hover:underline">
                  Gel Nail Designs: Ideas for Every Shape and Season
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-glitter-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Glitter Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-marble-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Marble Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-chrome-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Chrome Nails?
                </Link>
              </li>
              <li>
                <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">
                  What Are Gel Nails?
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
