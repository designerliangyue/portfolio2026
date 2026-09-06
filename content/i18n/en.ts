export const en = {
  name: "Liang Yue",
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact"
  },
  home: {
    heroLabel: "Senior Product Designer · Remote-first",
    heroTitle: [
      "Designing reliable",
      "products at the edge",
      "of culture & technology."
    ],
    heroSerif: ["culture", "technology"],
    lede:
      "I'm Liang Yue, a Senior Product Designer with 10 years of experience turning complex problems into clear, usable, and shippable product experiences. I work across the full product process — from research and product definition to interaction design, design systems, delivery, and iteration.",
    based: "Based",
    basedValue: "Remote-first",
    focus: "Focus",
    focusValue: "Systems · AI · Fintech",
    languages: "Languages",
    languagesValue: "EN · ZH",
    status: "Status",
    statusValue: "Open to opportunities",
    heroStats: [
      { value: "10+", label: "Years across SEA, fintech & AI" },
      { value: "7", label: "Countries with shipped work" },
      { value: "3", label: "Selected case studies" }
    ],
    workLabel: "Selected Work — three case studies",
    workTitle: ["Strategic foresight.", "Cross-cultural scale.", "Enterprise depth."],
    workSerif: ["Cross-cultural scale."],
    workLede:
      "Three projects show how I work at different scales: defining and launching an AI sales product, redesigning a regional insurance platform through remote research across four markets, and translating private-cloud operations into an enterprise system.",
    aboutLabel: "About",
    aboutTitle: [
      "A results-focused designer who merges reliability with",
      "innovation",
      "— grounded in",
      "user research",
      ", sharpened by",
      "real-world constraints",
      "."
    ],
    aboutLede:
      "I work from ambiguity to delivery: establish the evidence boundary, align product and engineering around the decision, then build the flows and systems needed to ship.",
    aboutLink: "Read full background →"
  },
  about: {
    back: "← Back home",
    label: "About",
    title: ["Liang Yue.", "A senior designer", "built across borders."],
    titleSerif: "A senior designer",
    tagline:
      "I define complex product problems, make the evidence and trade-offs visible, and carry the experience through delivery with remote product and engineering teams.",
    background: "Background",
    backgroundParagraphs: [
      "Over the past 10 years, I have designed across insurtech, banking, cloud computing, and enterprise SaaS. The common thread is complexity: multiple users, regulated workflows, regional variation, or technical systems that have to become understandable without becoming simplistic.",
      "I work end to end. I frame the product question, separate direct research from indirect evidence, map the operating model, and turn the decision into flows, prototypes, interface systems, and production-ready handoff. The AI Sales Co-Pilot shows that process from an ambiguous opportunity to three launched WhatsApp workflows.",
      "Remote collaboration is part of the practice, not a location preference. I make assumptions, ownership, open questions, and interaction logic visible so product, engineering, and operations can make decisions asynchronously and challenge them early.",
      "My first degree was in Landscape Architecture. It trained me to think in systems, movement, and long-lived environments—an approach I now apply to digital products used repeatedly, under real operational constraints."
    ],
    languages: "Languages",
    languagesValue: "English (working) · Chinese (native)",
    openTo: "Open to",
    openToValue: "Fully remote · Hybrid",
    focusAreas: "Focus areas",
    focusAreasValue: "AI experience · Fintech · Design systems",
    timeline: "Career, in four chapters",
    timelineItems: [
      {
        period: "2021 — 2026",
        role: "Senior Product Designer · Igloo Insurance",
        note: "Led end-to-end product design for insurance sales platforms across Southeast Asia — spanning regional research, AI-assisted selling, multi-role SaaS, design systems, and delivery with remote product and engineering teams."
      },
      {
        period: "2019 — 2021",
        role: "UI/UX Designer · China Merchants Bank",
        note: "Translated private-cloud operations into a unified enterprise console, including information architecture, operator workflows, interactive tables, progressive onboarding, and a shared light/dark component system."
      },
      {
        period: "2017 — 2019",
        role: "UI/UX Designer · JINGWEI Technology",
        note: "Delivered end-to-end product consulting for manufacturing clients, from ambiguous business requirements and MVP scope to flows, prototypes, interface systems, and production specifications."
      },
      {
        period: "2016 — 2017",
        role: "Graphic & UI Designer · UnitedStack",
        note: "Designed web and mobile product interfaces alongside visual identity systems, maintaining consistency across product and brand touchpoints."
      }
    ],
    education: "Education",
    educationItems: [
      {
        degree: "Bachelor of Landscape Architecture",
        school: "Beijing Forestry University",
        detail: "Beijing, China · Graduated June 2016"
      }
    ],
    skills: "Skills",
    skillItems: [
      "Product discovery & evidence synthesis",
      "AI and conversational product design",
      "Complex workflows & information architecture",
      "Prototyping & production handoff",
      "Design systems & component libraries",
      "Remote cross-functional collaboration"
    ]
  },
  footer: {
    connect: "Let's connect",
    title: "Designing what's next, together.",
    lede:
      "I'm exploring Senior Product Designer opportunities with a preference for fully remote work. I bring 10 years of cross-cultural product experience across insurtech, banking, and AI-enhanced interfaces.",
    aboutLink: "Read full background →",
    copyright: (year: number) => `© ${year} Liang Yue. Designed and built in Figma + Next.js.`,
    updated: (date: string) => `Last updated ${date}`
  },
  projectCard: {
    role: "Role",
    period: "Period",
    market: "Market",
    readCase: "Read case →"
  },
  caseStudy: {
    allWork: "← All work",
    period: "Period",
    role: "Role",
    market: "Market",
    status: "Status",
    team: "Team",
    scope: "My scope",
    constraints: "Constraints",
    quickNav: "Case map",
    evidence: "Delivery & evidence",
    overview: "Overview",
    problem: "The problem",
    approach: "My approach",
    impact: "Impact & signals",
    impactTitle: "The numbers that matter — verified signals that support product judgment.",
    impactNote:
      "This section prioritizes validated research, delivery, and feedback signals instead of using unverified metrics to imply impact.",
    crossCultural: "Cross-cultural design decisions",
    outcome: "Outcome",
    nextCase: "Next case",
    endOfWork: "End of selected work",
    backToWork: "← Back to all work"
  },
  marquee: [
    "Insurtech",
    "AI Experience",
    "Enterprise Banking",
    "Cross-Cultural Research",
    "Design Systems",
    "SEA Product Strategy",
    "Senior Product Design"
  ]
} as const;

export type Dictionary = {
  name: string;
  nav: { work: string; about: string; contact: string };
  home: {
    heroLabel: string;
    heroTitle: readonly string[];
    heroSerif: readonly string[];
    lede: string;
    based: string;
    basedValue: string;
    focus: string;
    focusValue: string;
    languages: string;
    languagesValue: string;
    status: string;
    statusValue: string;
    heroStats: readonly { value: string; label: string }[];
    workLabel: string;
    workTitle: readonly string[];
    workSerif: readonly string[];
    workLede: string;
    aboutLabel: string;
    aboutTitle: readonly string[];
    aboutLede: string;
    aboutLink: string;
  };
  about: {
    back: string;
    label: string;
    title: readonly string[];
    titleSerif: string;
    tagline: string;
    background: string;
    backgroundParagraphs: readonly string[];
    languages: string;
    languagesValue: string;
    openTo: string;
    openToValue: string;
    focusAreas: string;
    focusAreasValue: string;
    timeline: string;
    timelineItems: readonly { period: string; role: string; note: string }[];
    education: string;
    educationItems: readonly { degree: string; school: string; detail: string }[];
    skills: string;
    skillItems: readonly string[];
  };
  footer: {
    connect: string;
    title: string;
    lede: string;
    aboutLink: string;
    copyright: (year: number) => string;
    updated: (date: string) => string;
  };
  projectCard: { role: string; period: string; market: string; readCase: string };
  caseStudy: {
    allWork: string;
    period: string;
    role: string;
    market: string;
    status: string;
    team: string;
    scope: string;
    constraints: string;
    quickNav: string;
    evidence: string;
    overview: string;
    problem: string;
    approach: string;
    impact: string;
    impactTitle: string;
    impactNote: string;
    crossCultural: string;
    outcome: string;
    nextCase: string;
    endOfWork: string;
    backToWork: string;
  };
  marquee: readonly string[];
};
