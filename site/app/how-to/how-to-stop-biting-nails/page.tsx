import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Stop Biting Your Nails: 10 Methods That Work",
  description:
    "Learn how to stop biting your nails with proven methods covering habit replacement, bitter nail polish, physical barriers, and when to seek help. Includes a recovery timeline and FAQ.",
  alternates: { canonical: "https://shenailsalon.com/how-to/how-to-stop-biting-nails/" },
  openGraph: {
    url: "https://shenailsalon.com/how-to/how-to-stop-biting-nails/",
    title: "How To Stop Biting Your Nails: 10 Methods That Work",
    description:
      "Learn how to stop biting your nails with proven methods covering habit replacement, bitter nail polish, physical barriers, and when to seek help. Includes a recovery timeline and FAQ.",
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
      name: "How To Stop Biting Your Nails",
      item: "https://shenailsalon.com/how-to/how-to-stop-biting-nails/",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How To Stop Biting Your Nails: 10 Methods That Work",
  description:
    "A complete guide on how to stop nail biting, covering triggers, proven habit-breaking methods, product options, and nail recovery after biting.",
  url: "https://shenailsalon.com/how-to/how-to-stop-biting-nails/",
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
  dateModified: "2026-03-24",
  mainEntityOfPage: "https://shenailsalon.com/how-to/how-to-stop-biting-nails/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you stop biting your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective ways to stop biting nails are: apply bitter-tasting nail polish to make the habit uncomfortable, keep nails trimmed very short so there is nothing to bite, wear press-on nails or nail extensions (they look too good to ruin), identify your main triggers (anxiety, boredom, stress) and replace the biting with another behavior like squeezing a stress ball, and apply cuticle oil or hand cream regularly to create a different sensory routine. Most people need to combine two to three methods. The first two to four weeks are the hardest.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to stop biting your nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It takes most people three to four weeks of consistent effort before the urge to bite significantly decreases. Research on habit formation suggests 21 to 66 days to break or replace a habit. The first week is the hardest because biting is often unconscious. By week two, most people start catching themselves before biting. By week four, the new routine becomes more automatic than the old one. Nails visibly recover in four to eight weeks after stopping.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best nail biting deterrent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bitter nail polish (also called anti-nail biting polish or nail biting deterrent) is the most widely used product. Popular options include Mavala Stop, Orly No Bite, and Bite No More. These are clear coats with a bitter, unpleasant taste that creates an immediate negative feedback whenever a finger touches the mouth. They are most effective when used alongside habit-awareness techniques. On their own, they are less reliable for people who bite unconsciously without noticing the taste.",
      },
    },
    {
      "@type": "Question",
      name: "Why do people bite their nails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail biting (clinically called onychophagia) is most commonly triggered by stress, anxiety, boredom, or concentration. It becomes a habit because it temporarily reduces tension and provides sensory stimulation. Some research suggests nail biting has a genetic component and runs in families. For a smaller group, it is a body-focused repetitive behavior (BFRB) linked to OCD or anxiety disorders, where the urge is harder to control through willpower alone and benefits from cognitive behavioral therapy.",
      },
    },
    {
      "@type": "Question",
      name: "How do you stop biting nails when anxious?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When anxiety is the main trigger, focus on replacing the physical sensation rather than eliminating it. Keep a textured object nearby (a stress ball, fidget ring, or rough fabric) to redirect hand-to-mouth impulses. Practice diaphragmatic breathing as an anxiety response. Apply bitter nail polish so there is a sensory consequence when anxiety causes unconscious biting. If anxiety-driven nail biting is severe or compulsive, habit reversal training with a therapist or anxiety medication may be more effective than self-help strategies alone.",
      },
    },
    {
      "@type": "Question",
      name: "How do you grow nails back after biting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After stopping nail biting, apply cuticle oil to the nail base twice daily to stimulate the nail matrix and support regrowth. Keep the short nails filed smooth to remove snags that tempt biting. Apply a strengthening base coat to protect new growth. Eat protein and biotin-rich foods to support keratin production. Nails typically become noticeably longer in two to four weeks, and most bitten nails fully recover in four to six months. Press-on nails are a popular option during the recovery period because they cover the short nails and make biting physically harder.",
      },
    },
  ],
};

const triggers = [
  { trigger: "Stress and anxiety", detail: "The most common trigger. Biting temporarily reduces nervous tension and provides a physical outlet for emotional distress. The relief is brief but reinforces the habit loop." },
  { trigger: "Boredom or inactivity", detail: "Hands with nothing to do seek stimulation. Nail biting fills idle moments, especially during passive activities like watching TV, riding in a car, or sitting in meetings." },
  { trigger: "Concentration and focus", detail: "Many people bite without realizing it while problem-solving or working. Focused mental effort redirects conscious awareness away from the hands." },
  { trigger: "Habit and automation", detail: "After enough repetition, nail biting becomes automatic, triggered by any of the above situations without a deliberate decision. The brain has linked context (stress, boredom) to the behavior." },
  { trigger: "Perfectionism over nail imperfections", detail: "A small snag, hangnail, or uneven edge can trigger a biting episode that goes far further than intended. This is a common escalation pattern." },
  { trigger: "Body-focused repetitive behavior (BFRB)", detail: "In some people, nail biting is part of a broader set of compulsive grooming behaviors like skin picking or hair pulling, related to OCD or anxiety disorders. This form is harder to break without professional support." },
];

const methods = [
  {
    num: 1,
    title: "Apply bitter nail polish",
    body: "Bitter nail polish is a clear coat formulated with a safe but intensely unpleasant-tasting compound, usually denatonium benzoate, which is one of the most bitter substances known. Apply it every one to two days on all ten nails. When fingers go toward the mouth, the taste creates an immediate, involuntary negative response. Popular options include Mavala Stop, Orly No Bite, and Barielle No Bite. Apply it when nails are completely dry. It works best as a reinforcement for awareness, not as the only strategy.",
    tag: "Most commonly used product",
    tagColor: "#046BD2",
  },
  {
    num: 2,
    title: "Keep nails trimmed very short",
    body: "Nail biters often bite because there is something to bite. A nail that extends even slightly past the fingertip is an invitation. File nails completely flush with the fingertip, eliminating any free edge. Check and file every two to three days in the early weeks. When there is nothing to grab, the habit has no starting point. This is the simplest mechanical barrier and is effective on its own for habit biters who are not driven by strong anxiety.",
    tag: "Simplest mechanical fix",
    tagColor: "#3A5FCC",
  },
  {
    num: 3,
    title: "Wear press-on nails or extensions",
    body: "Press-on nails and gel extensions act as a double barrier: they are hard to bite through, and they look good enough that most people do not want to ruin them. The psychological investment in having nice nails provides motivation that willpower alone does not. Start with press-on nails ($5 to $20 at most drugstores) to test this approach before committing to a salon set. Many former nail biters report that getting a professional manicure or set of extensions was the turning point, because they did not want to destroy what they had paid for.",
    tag: "High success rate",
    tagColor: "#045CB4",
  },
  {
    num: 4,
    title: "Identify and track your triggers",
    body: "Nail biting is most often triggered by a specific set of situations: a particular TV show, a stressful commute, a work deadline, a difficult phone call. Keep a small tally for one week, marking each time you bite and what you were doing. Most people find that 80 percent of their biting happens in two or three contexts. Once you know your triggers, you can prepare a different response for those specific moments rather than trying to maintain constant vigilance throughout the day.",
    tag: "Foundation of habit change",
    tagColor: "#046BD2",
  },
  {
    num: 5,
    title: "Replace the behavior with a substitute",
    body: "Habit replacement is more effective than suppression. Instead of telling yourself not to bite, train yourself to do something else in response to the same trigger. Keep a stress ball, fidget cube, smooth stone, or textured ring at your most common biting locations. When you feel the urge, immediately redirect to the substitute. Consistent repetition over three to four weeks re-associates the trigger with the new behavior. The substitute does not need to be elaborate, just physical and immediate.",
    tag: "Most research-supported method",
    tagColor: "#3A5FCC",
  },
  {
    num: 6,
    title: "Apply cuticle oil and hand cream frequently",
    body: "Cuticle oil and hand cream serve two purposes in stopping nail biting: they make fingers taste and feel unappealing in the mouth, and they create a different physical routine around hands. Apply cuticle oil every morning and evening and carry a small hand cream for midday use. The sensory reward of soft, moisturized hands also provides a healthier outlet than biting. This method works well as part of a broader routine, and it benefits nail health in the process.",
    tag: "Dual-purpose habit",
    tagColor: "#045CB4",
  },
  {
    num: 7,
    title: "Use physical barriers during high-risk times",
    body: "If you bite during specific activities, use a physical barrier during those times only. Bandages or fingertip covers on the most-bitten fingers create a tactile reminder each time a finger approaches the mouth. Some people wear thin gloves during long TV sessions or commutes. This approach is especially useful for unconscious biters who do not realize they are biting until they notice the damage. The barrier does not need to cover all fingers, just the ones you bite most.",
    tag: "Works for unconscious biters",
    tagColor: "#046BD2",
  },
  {
    num: 8,
    title: "Address hangnails and rough edges immediately",
    body: "Many biting episodes start with a legitimate imperfection: a hangnail, a snag, a rough edge. Rather than letting it sit and become a biting opportunity, deal with it properly using nail scissors or a file. Carry a small nail file and cuticle scissors in your bag or at your desk. Cutting a hangnail properly with scissors instead of your teeth is a healthier version of the same impulse, and it removes the trigger before it escalates.",
    tag: "Prevents escalation",
    tagColor: "#3A5FCC",
  },
  {
    num: 9,
    title: "Set a two-week no-bite challenge",
    body: "A defined, short-term commitment is more achievable than an open-ended goal to never bite again. Commit to two weeks with no biting, using any combination of methods above. Mark a calendar. Take a photo of your nails at the start and end. By the end of two weeks, nails are usually visibly longer, which provides concrete motivation to continue. Many people find that the hardest part is the first five days, after which the new routine starts to feel more natural than the old one.",
    tag: "Provides a concrete goal",
    tagColor: "#045CB4",
  },
  {
    num: 10,
    title: "Seek professional support if biting is compulsive",
    body: "If nail biting is severe, causes bleeding, damages the nail matrix, or is linked to anxiety you cannot otherwise control, it may be a body-focused repetitive behavior (BFRB) that benefits from professional support. Habit reversal training (HRT), a form of cognitive behavioral therapy, has strong evidence for treating BFRBs including nail biting, skin picking, and hair pulling. The TLC Foundation for Body-Focused Repetitive Behaviors is a good starting resource. For anxiety-driven biting, treatment of the underlying anxiety often resolves the biting at the same time.",
    tag: "For severe or compulsive biting",
    tagColor: "#046BD2",
  },
];

const effects = [
  { effect: "Nail damage and deformity", detail: "Chronic biting damages the nail matrix, causing nails to grow in ridged, short, or misshapen. Severe long-term biting can permanently alter nail shape." },
  { effect: "Skin and cuticle infection", detail: "Biting breaks the skin barrier around the nail (the cuticle), allowing bacteria and fungi from the mouth to enter. Paronychia, a painful nail infection, is directly associated with nail biting." },
  { effect: "Dental damage", detail: "Repeatedly biting hard nail material chips teeth over time and can cause uneven wear, particularly on front teeth. Nail biting is associated with bruxism (teeth grinding) in some individuals." },
  { effect: "Oral bacteria transfer", detail: "The hands carry more germs than almost any other body surface. Frequent hand-to-mouth contact from nail biting is a documented pathway for transmitting colds, flu, and other infections." },
  { effect: "Nail fungal infection (onychomycosis)", detail: "Damaged nail edges from biting create entry points for fungal infections. Toenails are most commonly affected by fungus, but bitten fingernails are also at elevated risk." },
];

const recoveryTimeline = [
  { period: "Days 1 to 7", result: "The urge to bite is strongest in the first week. Focus on breaking the unconscious habit by using bitter polish and keeping nails trimmed. Nails will not look different yet." },
  { period: "Week 2", result: "Most people start catching themselves before biting rather than after. Some visible growth begins at the free edge. The habit feels more effortful, which is a sign the automatic loop is breaking." },
  { period: "Weeks 3 to 4", result: "Visible nail growth of 2 to 4 mm beyond the biting point. If you were biting to the quick, nails now have a small free edge. Cuticles start recovering when the trauma stops." },
  { period: "Weeks 6 to 8", result: "Nails are noticeably longer and cuticle skin has healed. The habit feels significantly weaker. Most people describe this as the first time nails look like a non-biter's nails." },
  { period: "Months 3 to 6", result: "Full nail plate has grown out from matrix to tip. Any growth irregularities from past biting damage have largely grown out. Nails are at their natural healthy length and shape." },
];

export default function HowToStopBitingNailsPage() {
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
            <span>How To Stop Biting Your Nails</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(4,107,210,0.07)", color: "#046BD2", borderColor: "rgba(4,107,210,0.2)" }}
          >
            <span>How-To Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E293B" }}>
            How To Stop Biting Your Nails
          </h1>
          <p className="text-lg" style={{ color: "#707070" }}>
            Nail biting is one of the most common habits, affecting about 20 to 30 percent of people. The hard part is that it usually happens without thinking. This guide covers what actually works, from bitter polish to habit replacement to when it is time to get professional help. Written by Nancy Davidson.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10" style={{ color: "#334155" }}>

          {/* Why people bite their nails */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>Why People Bite Their Nails</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Nail biting (clinically called onychophagia) typically starts in childhood and is reinforced by repeated exposure to the same emotional triggers. The habit provides momentary tension relief, which makes it self-reinforcing. Understanding your specific triggers is the first step to replacing the behavior.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Trigger</th>
                    <th className="text-left px-4 py-2 font-semibold">Why It Drives Biting</th>
                  </tr>
                </thead>
                <tbody>
                  {triggers.map(({ trigger, detail }, i) => (
                    <tr key={trigger} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{trigger}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Effects */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What Nail Biting Does to Your Nails and Health</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Beyond aesthetics, regular nail biting has real consequences for nail health and general hygiene that are worth knowing before committing to stopping.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "#046BD2", color: "#fff" }}>
                    <th className="text-left px-4 py-2 font-semibold">Effect</th>
                    <th className="text-left px-4 py-2 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {effects.map(({ effect, detail }, i) => (
                    <tr key={effect} style={{ background: i % 2 === 0 ? "#F8FBFF" : "#fff" }}>
                      <td className="px-4 py-2 font-medium" style={{ color: "#1E293B" }}>{effect}</td>
                      <td className="px-4 py-2" style={{ color: "#707070" }}>{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 10 methods */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E293B" }}>10 Ways To Stop Biting Your Nails</h2>
            <div className="space-y-6">
              {methods.map(({ num, title, body, tag, tagColor }) => (
                <div key={num} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "#046BD2" }}
                  >
                    {num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold" style={{ color: "#1E293B" }}>{title}</h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${tagColor}15`, color: tagColor }}
                      >
                        {tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How long it takes */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>What To Expect Week by Week</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Breaking a habit takes consistent effort over several weeks. Here is a realistic picture of what changes at each stage when you apply these methods.
            </p>
            <div className="space-y-4">
              {recoveryTimeline.map(({ period, result }) => (
                <div
                  key={period}
                  className="rounded-xl border border-gray-100 p-4"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)", borderLeft: "3px solid #046BD2" }}
                >
                  <p className="text-xs font-bold mb-1" style={{ color: "#046BD2" }}>{period}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nail recovery after biting */}
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E293B" }}>How To Recover Nails After Biting</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#707070" }}>
              Once you stop biting, the nails themselves need support to recover properly. The nail matrix resumes producing healthy cells almost immediately, but the existing damage takes time to grow out.
            </p>
            <div className="space-y-3">
              {[
                { step: "Apply cuticle oil twice daily", desc: "The cuticle was likely damaged from biting. Daily cuticle oil moisturizes and seals the base of the nail, reducing the risk of hangnails that might trigger further biting." },
                { step: "Use a strengthening base coat", desc: "A keratin or protein-enriched base coat protects new nail growth as it emerges. Apply it even if you are not wearing color polish." },
                { step: "File smooth, do not cut", desc: "Clippers create micro-cracks in short nails. Use a 180 to 240 grit file and gentle one-direction strokes until nails are long enough to clip comfortably." },
                { step: "Eat protein and biotin", desc: "Nail recovery depends on keratin production, which requires dietary protein and biotin (vitamin B7). Eggs, almonds, salmon, and Greek yogurt are good sources." },
                { step: "Consider press-ons during recovery", desc: "Press-on nails cover the short, uneven appearance of post-biting nails and make biting harder physically. They are a practical option for the first four to six weeks of recovery." },
              ].map(({ step, desc }, i) => (
                <div key={step} className="flex gap-3 items-start">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ background: "#046BD2" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1E293B" }}>{step}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E293B" }}>Frequently Asked Questions</h2>
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
                { title: "How To Make Your Nails Grow Faster", href: "/how-to/how-to-make-nails-grow-faster/" },
                { title: "How To Strengthen Your Nails", href: "/how-to/how-to-strengthen-nails/" },
                { title: "How To Apply Press-On Nails", href: "/how-to/how-to-apply-press-on-nails/" },
                { title: "What Causes White Spots on Nails?", href: "/what-are/what-are-white-spots-on-nails/" },
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
