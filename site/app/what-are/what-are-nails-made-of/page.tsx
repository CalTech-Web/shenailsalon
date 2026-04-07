import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Nails Made Of? Natural and Artificial Nail Composition",
  description:
    "Natural fingernails are made of a protein called keratin. Artificial nails are made of ABS plastic, acrylic resin, or soft gel depending on the type. This guide covers the full composition of both natural nails and every major artificial nail product.",
  alternates: { canonical: "https://shenailsalon.com/what-are/what-are-nails-made-of/" },
  openGraph: {
    url: "https://shenailsalon.com/what-are/what-are-nails-made-of/",
    title: "What Are Nails Made Of? Natural and Artificial Nail Composition",
    description:
      "Natural fingernails are made of a protein called keratin. Artificial nails are made of ABS plastic, acrylic resin, or soft gel depending on the type. This guide covers the full composition of both natural nails and every major artificial nail product.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shenailsalon.com" },
    { "@type": "ListItem", position: 2, name: "What Are", item: "https://shenailsalon.com/category/what-are" },
    { "@type": "ListItem", position: 3, name: "What Are Nails Made Of", item: "https://shenailsalon.com/what-are/what-are-nails-made-of/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Nails Made Of? Natural and Artificial Nail Composition",
  description:
    "A complete guide to nail composition. Covers what natural fingernails and toenails are made of (keratin, nail anatomy layers), plus the composition of every major artificial nail type: acrylic, gel, dip, press-on, and gel-x.",
  url: "https://shenailsalon.com/what-are/what-are-nails-made-of/",
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
  dateModified: "2026-04-07",
  mainEntityOfPage: "https://shenailsalon.com/what-are/what-are-nails-made-of/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are nails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Natural fingernails and toenails are made of a tough, fibrous protein called keratin, the same protein that makes up human hair and the outer layer of skin. The nail plate, which is the visible hard surface, is formed by tightly packed layers of dead keratin cells produced by the nail matrix beneath the skin at the base of the nail. Artificial nails are made of different materials depending on the type: acrylic nails use a monomer and polymer powder system, gel nails use a photopolymer resin cured by UV or LED light, press-on nails and nail tips are made from ABS plastic, and dip powder nails use acrylic resin activated by cyanoacrylate adhesive.",
      },
    },
    {
      "@type": "Question",
      name: "What are fingernails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fingernails are made of keratin, a hard structural protein. The nail plate (the hard part you can see and paint) is built from flattened, interlocking layers of dead keratin cells that are produced continuously by the nail matrix, which is located in the skin fold at the base of the nail under the lunula (the pale white half-moon shape). Keratin in fingernails is arranged in three layers: a dorsal layer, an intermediate layer (the thickest), and a ventral layer. The high sulfur content of the cysteine amino acids within keratin is what gives nails their hardness compared to skin.",
      },
    },
    {
      "@type": "Question",
      name: "What are toenails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toenails are made of the same material as fingernails: keratin protein. Toenails grow more slowly than fingernails (roughly 1.5 mm per month vs 3 to 4 mm per month for fingernails) and are generally thicker, particularly on the big toe. The extra thickness comes from a greater number of keratin cell layers in the intermediate layer of the nail plate. Toenail keratin has the same three-layer structure as fingernail keratin, and both share the same composition of hard alpha-keratin protein with high sulfur crosslinks.",
      },
    },
    {
      "@type": "Question",
      name: "What are acrylic nails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acrylic nails are made from a two-part system: a liquid monomer (typically ethyl methacrylate, or EMA) and a powder polymer (polymethyl methacrylate, or PMMA). When the liquid and powder are combined on the nail, a chemical reaction called free-radical polymerization occurs: the monomer molecules link together into long polymer chains, encasing the powder particles and hardening into the solid acrylic nail. The result is a thermoset plastic that is extremely hard and durable. Acrylic nails are removed by soaking in acetone, which breaks down the polymer network.",
      },
    },
    {
      "@type": "Question",
      name: "What are gel nails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gel nails are made from photopolymer resins, which are oligomer-based compounds that harden (cure) when exposed to UV or LED light. Gel nail products typically contain urethane acrylate or methacrylate oligomers mixed with photoinitiator compounds. When the lamp activates the photoinitiators, they trigger cross-linking of the oligomer chains, forming a solid, flexible-to-rigid gel network. Hard gel nails cannot be soaked off in acetone and must be filed off. Soft gel products (including gel polish and soft gel tips) can be removed by soaking in acetone.",
      },
    },
    {
      "@type": "Question",
      name: "What are press-on nails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Press-on nails are made from ABS plastic (acrylonitrile butadiene styrene), a lightweight, rigid thermoplastic commonly used in consumer products. ABS plastic can be injection-molded into precise nail shapes and is easy to file, paint, and decorate. The adhesive used to bond press-on nails to the natural nail is either a double-sided adhesive tab or cyanoacrylate nail glue, the same type used in nail tips. ABS plastic dissolves slowly in acetone but press-on nails are typically removed by soaking in warm water or acetone to loosen the adhesive tab or glue rather than to dissolve the nail itself.",
      },
    },
    {
      "@type": "Question",
      name: "What are dip nails made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dip powder nails are made from a finely milled acrylic resin powder (polymethyl methacrylate, PMMA) that is activated by a cyanoacrylate-based base coat rather than by a liquid monomer. Each layer of base coat is applied to the nail and the finger is dipped into the powder, which bonds to the wet base coat on contact. Multiple layers are built up and sealed with a top coat. The chemistry is similar to acrylic nails but the application method and curing mechanism differ: no liquid monomer is required, and no UV or LED lamp is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Is keratin the same thing in nails and hair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both nails and hair are made of alpha-keratin, the same class of structural protein. However, nail keratin has a higher sulfur content through disulfide bonds between cysteine amino acids, which creates a harder, denser structure than hair keratin. Hair keratin forms a softer, more flexible filament structure optimized for flexibility and tensile strength. Nail keratin forms a flat, plate-like structure optimized for hardness and rigidity.",
      },
    },
  ],
};

const naturalNailLayers = [
  ["Nail plate", "The visible hard surface of the nail; made of three tightly packed layers of dead keratin cells", "Alpha-keratin protein with high cysteine sulfur content"],
  ["Nail matrix", "Hidden beneath the skin at the nail base; produces the keratin cells that form the nail plate", "Living epithelial cells; the only living component that creates nail growth"],
  ["Nail bed", "The skin directly beneath the nail plate; the nail plate slides over this as it grows", "Dermis and epidermis layers, rich in capillaries (which give nails their pinkish color)"],
  ["Lunula", "The pale white half-moon at the nail base; the visible edge of the nail matrix", "The transition zone between the matrix and the fully keratinized nail plate"],
  ["Cuticle (eponychium)", "The thin layer of skin that seals the gap between the nail plate and the nail fold", "Epidermis cells that prevent bacteria and debris from entering under the nail"],
  ["Hyponychium", "The skin under the free edge of the nail at the fingertip", "Epidermis cells forming a waterproof seal between the nail plate and fingertip skin"],
];

const artificialNailComposition = [
  ["Acrylic nails", "EMA liquid monomer + PMMA powder polymer", "Hard, rigid thermoset plastic via free-radical polymerization", "Acetone soak (30 to 60 minutes)"],
  ["Hard gel nails", "Urethane acrylate or methacrylate oligomers + photoinitiators", "Cross-linked polymer network cured by UV or LED light", "File off only (acetone-resistant)"],
  ["Soft gel / gel polish", "Methacrylate oligomers + photoinitiators (lower molecular weight)", "Lighter cross-linked network; remains partially soluble in acetone", "Acetone soak (10 to 15 minutes)"],
  ["Soft gel tips (gel-x)", "Same photopolymer as soft gel, pre-formed into full-cover tip shape", "Flexible cured gel; bonds with structure gel base coat", "File surface, then acetone soak (10 to 15 minutes)"],
  ["Press-on nails", "ABS plastic (acrylonitrile butadiene styrene)", "Injection-molded thermoplastic; rigid and lightweight", "Warm water or acetone soaks adhesive tab; nail itself is removed whole"],
  ["Nail tips (plastic)", "ABS plastic", "Same as press-on nails; used as a scaffold under acrylic or gel overlay", "Dissolved with the acrylic or gel during acetone removal"],
  ["Dip powder nails", "PMMA acrylic resin powder + cyanoacrylate base coat", "Acrylic-like hardness without liquid monomer or UV lamp", "Acetone soak (15 to 20 minutes)"],
  ["Builder gel (BIAB)", "Urethane acrylate oligomers (thicker viscosity than standard gel)", "Flexible, self-leveling gel cured under LED lamp", "File thin, then acetone soak (15 to 20 minutes)"],
];

const keratinFacts = [
  ["Protein type", "Alpha-keratin (the same class as hair; different from beta-keratin found in reptile scales and bird feathers)"],
  ["Primary amino acid", "Cysteine (contributes the sulfur disulfide bonds that create nail hardness)"],
  ["Nail plate thickness", "0.25 to 0.6 mm for fingernails; toenails are slightly thicker, especially the big toe"],
  ["Growth rate (fingernails)", "3 to 4 mm per month on average; middle finger grows fastest, thumb slowest"],
  ["Growth rate (toenails)", "Approximately 1.5 mm per month; roughly half the speed of fingernails"],
  ["Water content", "7 to 12% by weight (dried nails become brittle; well-hydrated nails are more flexible)"],
  ["Color source", "Translucent keratin plate over a pink nail bed (capillary blood shows through); the lunula appears white due to the thicker, less translucent matrix region"],
];

export default function NailsMadeOfPage() {
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
            <span>What Are Nails Made Of</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>Nail Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            What Are Nails Made Of?
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Natural fingernails and toenails are made of keratin, the same tough structural protein that forms human hair. Artificial nails are made of entirely different materials depending on the type: acrylic uses a monomer and polymer system, gel uses a light-cured resin, press-on nails and nail tips use ABS plastic, and dip nails use acrylic resin powder bonded with cyanoacrylate glue. This guide covers the full composition of both natural nails and every major artificial nail product. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12" style={{ color: "#334155" }}>

          {/* Natural nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Natural Nails Made Of?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Natural fingernails and toenails are made of keratin, a tough fibrous protein produced by specialized cells in the nail matrix. Keratin is the same class of protein that forms human hair and the outer layer of skin, but nail keratin is denser and harder because it contains more disulfide bonds between cysteine amino acids. These sulfur crosslinks lock the keratin chains tightly together, creating the rigid structure of the nail plate.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The nail plate, the hard surface you see and paint, is made up of three layers of tightly packed dead keratin cells: a thin dorsal layer on the top surface, a thick intermediate layer in the middle that provides most of the nail's strength, and a thin ventral layer on the underside. The cells in all three layers are fully keratinized, meaning the living components have been replaced entirely by keratin protein.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              The nail plate itself is translucent. The familiar pink color of healthy nails comes from the capillary-rich nail bed visible through the plate. The white half-moon shape at the base (the lunula) appears lighter because that region of the nail matrix is thicker and less translucent than the rest of the plate.
            </p>
          </div>

          {/* Nancy anecdote */}
          <div className="p-5 rounded-xl border-l-4" style={{ background: "#F0F5FA", borderColor: "#046BD2" }}>
            <p className="text-sm leading-relaxed italic" style={{ color: "#334155" }}>
              "I used to think nails were basically just hardened skin. Then I started doing my own acrylics and started reading about the chemistry, and I was surprised to learn that the pink color I see on my nail is actually blood vessels showing through a translucent protein plate. Once you know that, you start treating your cuticles and nail bed completely differently, because that is where all the actual nail growth is happening."
            </p>
            <p className="text-xs mt-3 font-medium" style={{ color: "#046BD2" }}>Nancy Davidson, Author</p>
          </div>

          {/* Nail anatomy table */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Natural Nail Anatomy</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              The nail unit has several distinct components beyond the visible nail plate. Understanding each part helps explain why certain nail products bond to the nail the way they do, and why prep (dehydrating and priming the nail plate) matters so much for adhesion.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Component</th>
                    <th className="text-left px-4 py-2 font-semibold">What it is</th>
                    <th className="text-left px-4 py-2 font-semibold">Composition</th>
                  </tr>
                </thead>
                <tbody>
                  {naturalNailLayers.map(([component, description, composition], i) => (
                    <tr key={component} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{component}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{description}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{composition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Keratin facts */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Keratin: Key Facts</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Keratin is one of the most studied structural proteins in biology. These numbers and characteristics apply to normal, healthy adult fingernails and toenails.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Property</th>
                    <th className="text-left px-4 py-2 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {keratinFacts.map(([property, detail], i) => (
                    <tr key={property} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{property}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fingernails vs toenails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Are Fingernails and Toenails Made of the Same Thing?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Yes. Fingernails and toenails are both made of alpha-keratin protein and share the same three-layer plate structure. The main differences between them are growth rate, thickness, and shape, not composition.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Toenails grow at roughly half the speed of fingernails (about 1.5 mm per month versus 3 to 4 mm per month). Toenails are also thicker on average, particularly the big toenail, which has a greater number of keratin layers in the intermediate plate layer. This extra thickness is thought to be an adaptation to the greater mechanical stress toenails endure from footwear and walking.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Because toenail keratin is the same protein as fingernail keratin, the same nail conditions (fungal infection, trauma, nutritional deficiency) can affect both equally. The difference in thickness just means toenails take longer to respond visibly and longer to grow out after treatment.
            </p>
          </div>

          {/* Artificial nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Artificial Nails Made Of?</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Artificial nail products use synthetic chemistry that has no direct connection to the keratin of natural nails. Each product category has its own material system and its own removal chemistry. The table below covers the composition of every major artificial nail type.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Nail type</th>
                    <th className="text-left px-4 py-2 font-semibold">Key materials</th>
                    <th className="text-left px-4 py-2 font-semibold">How it hardens</th>
                    <th className="text-left px-4 py-2 font-semibold">Removal</th>
                  </tr>
                </thead>
                <tbody>
                  {artificialNailComposition.map(([type, materials, hardening, removal], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{type}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{materials}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{hardening}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{removal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Acrylic deep dive */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Acrylic Nails Made Of?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <Link href="/what-are/what-are-acrylic-nails/" style={{ color: "#046BD2" }} className="hover:underline">Acrylic nails</Link> are made from a two-component system: a liquid monomer and a powder polymer. The liquid is typically ethyl methacrylate (EMA), which replaced the older and more sensitizing methyl methacrylate (MMA) as the professional standard. The powder is polymethyl methacrylate (PMMA), a clear to white acrylic polymer.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              When a technician picks up a bead of the mixed liquid and powder on the brush, the monomer is actively polymerizing: the EMA molecules are linking together into long PMMA chains around the powder particles. As the chains grow, they interlock and the bead transitions from a soft, workable consistency to a rigid thermoset plastic within 1 to 2 minutes. This is the same class of chemistry used in dental composite fillings and many industrial adhesives.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Acetone breaks down the PMMA polymer network by penetrating between the polymer chains and causing the acrylic to swell and soften until it can be gently pushed off the nail.
            </p>
          </div>

          {/* Gel deep dive */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Gel Nails Made Of?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <Link href="/what-are/what-are-gel-nails/" style={{ color: "#046BD2" }} className="hover:underline">Gel nails</Link> are made from photopolymer resins: oligomers (short pre-polymer chains) mixed with photoinitiator compounds. The oligomers are most commonly urethane acrylates or urethane methacrylates, which are chosen for their combination of flexibility and adhesion. When the gel is exposed to UV or LED light at the correct wavelength, the photoinitiators absorb the light energy and produce free radicals that trigger rapid cross-linking of the oligomer chains. This turns the viscous gel into a solid polymer network in seconds.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              Hard gels (including builder gels) create dense, tightly cross-linked networks that are resistant to acetone. They must be filed off mechanically. Soft gels (gel polish and soft gel tips) use lower-molecular-weight oligomers with looser cross-linking, which makes the cured material partially soluble in acetone.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              <Link href="/what-are/what-are-gel-x-nails/" style={{ color: "#046BD2" }} className="hover:underline">Gel-X soft gel tips</Link> are pre-formed from the same photopolymer resin used in soft gel products but are already shaped into a full nail cap before application. They bond to the natural nail with a structure gel base coat and cure under an LED lamp.
            </p>
          </div>

          {/* Press-ons and ABS */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Press-On Nails Made Of?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <Link href="/what-are/what-are-press-on-nails/" style={{ color: "#046BD2" }} className="hover:underline">Press-on nails</Link> are made from ABS plastic (acrylonitrile butadiene styrene), a lightweight, rigid thermoplastic. ABS is one of the most widely used engineering plastics in the world, used in everything from LEGO bricks to automotive interior panels. In nail applications, ABS is injection-molded into precise nail shapes and sizes, then painted, decorated, or left natural for the consumer to paint themselves.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              ABS is chosen for press-on nails because it is lightweight, can be sanded and filed, holds paint well, and is flexible enough to mimic the slight give of natural nails under bending force. Plastic nail tips used under acrylic and gel are also made from ABS. The adhesive used to bond press-ons is either double-sided adhesive tabs (polyethylene foam with acrylic adhesive) or cyanoacrylate (super glue-type) nail glue.
            </p>
          </div>

          {/* Dip powder */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Are Dip Powder Nails Made Of?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              <Link href="/what-are/what-are-dip-nails/" style={{ color: "#046BD2" }} className="hover:underline">Dip powder nails</Link> are made from a finely milled acrylic resin powder, primarily PMMA, similar in chemistry to acrylic nail powder. However, instead of being activated by a liquid EMA monomer, dip powder is activated by a cyanoacrylate-based base coat (essentially a nail glue) applied before each dip. The cyanoacrylate adhesive penetrates the PMMA powder layer and polymerizes, locking the particles together in a hard film.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              Because no liquid monomer is involved, dip nails produce no monomer fumes during application and require no UV or LED lamp. The finished product is chemically similar to acrylic nails in composition and is removed by soaking in acetone for 15 to 20 minutes.
            </p>
          </div>

          {/* Does nail composition matter for health */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Does Nail Composition Matter for Nail Health?</h2>
            <p className="leading-relaxed mb-3" style={{ color: "#707070" }}>
              The composition of an artificial nail product determines how it bonds to the natural nail, how it is removed, and what risks are associated with improper use. Hard products like acrylic must be soaked off slowly; forcing removal tears the upper keratin layers off the natural nail plate. Soft gel products are gentler on removal but still require the soaking step. Filing through any artificial product too aggressively can thin the natural keratin plate underneath.
            </p>
            <p className="leading-relaxed" style={{ color: "#707070" }}>
              For natural nails, keratin health depends primarily on hydration (dry keratin becomes brittle and prone to splitting), protein nutrition, and avoiding mechanical damage. Nail strengtheners typically work by adding cross-linking agents (often formaldehyde in older products, calcium-based compounds in newer ones) that increase the density of the keratin network.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="border-b pb-5" style={{ borderColor: "#E2EAF4" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#1E293B" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related content */}
      <section className="py-10 px-4" style={{ background: "#F8FBFF" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1E293B" }}>Related Nail Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/what-are/what-are-acrylic-nails/", label: "What Are Acrylic Nails?" },
              { href: "/what-are/what-are-gel-nails/", label: "What Are Gel Nails?" },
              { href: "/what-are/what-are-dip-nails/", label: "What Are Dip Nails?" },
              { href: "/what-are/what-are-press-on-nails/", label: "What Are Press-On Nails?" },
              { href: "/what-are/what-are-gel-x-nails/", label: "What Are Gel-X Nails?" },
              { href: "/how-to/how-to-keep-nails-healthy/", label: "How To Keep Nails Healthy" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 transition-colors"
                style={{ background: "#fff", borderColor: "#E2EAF4" }}
              >
                <span className="text-sm font-medium" style={{ color: "#046BD2" }}>{label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/category/what-are"
              className="text-sm font-semibold hover:underline"
              style={{ color: "#046BD2" }}
            >
              Browse all nail guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
