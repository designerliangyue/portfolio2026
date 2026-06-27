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
      "I'm Liang Yue. Over the last 10 years I've built products for users across Southeast Asia, led design systems for enterprise fintech, and most recently shaped AI experiences for insurance professionals. This site is a curated selection of three case studies built for Senior Product Design roles.",
    based: "Based",
    basedValue: "Remote-first",
    focus: "Focus",
    focusValue: "Product · AI · Fintech",
    languages: "Languages",
    languagesValue: "EN · ZH",
    status: "Status",
    statusValue: "Open to opportunities",
    workLabel: "Selected Work — three case studies",
    workTitle: ["Cross-cultural scale.", "Strategic foresight.", "Enterprise depth."],
    workSerif: ["Strategic foresight."],
    workLede:
      "Three projects, one through-line: an AI Co-Pilot that required me to define the product before designing it — grounded in four years of cross-cultural research across Southeast Asia, and proven at enterprise depth inside one of China's largest banks.",
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
      "My work sits at the intersection of cross-cultural research, enterprise complexity, and the new design space opened up by AI. I care about evidence, craft, and shipping things that people can actually live inside.",
    aboutLink: "Read full background →"
  },
  about: {
    back: "← Back home",
    label: "About",
    title: ["Liang Yue.", "A senior designer", "built across borders."],
    titleSerif: "A senior designer",
    tagline:
      "Merging reliability with innovation — a results-focused designer grounded in data and real-world usability.",
    background: "Background",
    backgroundParagraphs: [
      "My journey began in Landscape Architecture, where I learned to design spaces that inspire and connect people. Today, I bring that same passion to digital design, crafting experiences that are intuitive, engaging, and meaningful. Over the past 10 years, I've worked across insurtech, cloud computing, banking, and service industries, creating products that solve real problems for real users.",
      "For me, design is more than pixels and prototypes — it's about understanding people and telling their stories through thoughtful, user-centered solutions.",
      "In the age of AI, I believe design plays a critical role in ensuring technology remains human-centered, ethical, and accessible. I've worked on AI-enhanced interfaces, leveraging data to create intuitive and inclusive experiences that empower users.",
      "I'm exploring Senior Product Designer opportunities with a strong preference for fully remote collaboration — and I'm looking for a team where evidence, craft, and care all sit at the same table."
    ],
    languages: "Languages",
    languagesValue: "English (working) · Chinese (native)",
    openTo: "Open to",
    openToValue: "Fully remote · Hybrid",
    focusAreas: "Focus areas",
    focusAreasValue: "AI experience · Fintech · Design systems",
    resume: "Get my resume",
    resumeLink: "Open online resume →",
    resumeHref: "/resume",
    timeline: "Career, in five chapters",
    timelineItems: [
      {
        period: "2025 — present",
        role: "Lead Product Designer · AI Co-Pilot",
        note: "Shaping a new interaction primitive for insurance agents — conversational shell, deterministic UI, human-in-the-loop."
      },
      {
        period: "2022 — 2024",
        role: "Product Designer · Ignite (SEA Insurtech)",
        note: "End-to-end revamp across four Southeast Asian markets — stakeholder and user interviews, regional design system, continuous iteration."
      },
      {
        period: "2022",
        role: "Product Designer · Employee Benefits Platform",
        note: "Three-stakeholder SaaS — insurer, HR, employee — balanced in one cohesive product."
      },
      {
        period: "2020",
        role: "Lead UI/UX Designer · CMB Private Cloud",
        note: "Internal cloud platform for China Merchants Bank — holistic design system, WCAG-grade dark mode."
      },
      {
        period: "Before 2020",
        role: "Earlier work · Mobile, Web, Visual",
        note: "Mobile apps for IoT/edutainment, watercolor and graphic design — the craft foundation underneath everything else."
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
      "User research & behavior analysis",
      "AI-enhanced design solutions",
      "Data-driven design & A/B testing",
      "Wireframing & prototyping",
      "Design systems & component libraries",
      "Figma · Notion · Jira · Cursor"
    ]
  },
  resume: {
    back: "← Back to site",
    role: "Senior Product Designer",
    summary:
      "Results-focused senior product designer with 10 years across insurtech, banking, and AI-enhanced interfaces — grounded in cross-cultural research and enterprise-grade craft.",
    print: "Print / Save as PDF",
    contact: "Contact",
    location: "Remote-first · Open to opportunities",
    experience: "Experience",
    education: "Education",
    skills: "Skills"
  },
  footer: {
    connect: "Let's connect",
    title: "Designing what's next, together.",
    lede:
      "I'm exploring Senior Product Designer opportunities with a preference for fully remote work. I bring 10 years of cross-cultural product experience across insurtech, banking, and AI-enhanced interfaces.",
    aboutLink: "Read full background →",
    copyright: (year: number) => `© ${year} Liang Yue. Designed and built in Figma + Next.js.`,
    updated: (date: string) => `Selected work — last updated ${date}`
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
    overview: "Overview",
    problem: "The problem",
    approach: "My approach",
    impact: "Impact & signals",
    impactTitle: "The numbers that matter — concrete where available, honest where not.",
    impactNote:
      "Placeholder values (e.g. +__%) mark KPIs to be filled with verified launch data — kept visible to signal evidence orientation rather than vanity metrics.",
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
    "Mobile-First SEA",
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
    resume: string;
    resumeLink: string;
    resumeHref: string;
    timeline: string;
    timelineItems: readonly { period: string; role: string; note: string }[];
    education: string;
    educationItems: readonly { degree: string; school: string; detail: string }[];
    skills: string;
    skillItems: readonly string[];
  };
  resume: {
    back: string;
    role: string;
    summary: string;
    print: string;
    contact: string;
    location: string;
    experience: string;
    education: string;
    skills: string;
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
