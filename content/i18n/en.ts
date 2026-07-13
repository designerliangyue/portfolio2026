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
    focusValue: "Systems · AI · Fintech",
    languages: "Languages",
    languagesValue: "EN · ZH",
    status: "Status",
    statusValue: "Open to opportunities",
    workLabel: "Selected Work — three case studies",
    workTitle: ["Strategic foresight.", "Cross-cultural scale.", "Enterprise depth."],
    workSerif: ["Cross-cultural scale."],
    workLede:
      "Three projects, one through-line: an AI Co-Pilot that required me to define the product before designing it — grounded in four years of cross-cultural design across Southeast Asia, and proven at enterprise depth inside one of China's largest banks.",
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
    timeline: "Career, in four chapters",
    timelineItems: [
      {
        period: "2021 — Present",
        role: "Senior Product Designer · Igloo Insurance",
        note: "AI sales co-pilots, operational analytics, and a regional design system across Southeast Asia."
      },
      {
        period: "2019 — 2021",
        role: "UI/UX Designer · China Merchants Bank",
        note: "Internal private-cloud platform — enterprise IA and a WCAG-grade dark mode."
      },
      {
        period: "2017 — 2019",
        role: "UI/UX Designer · JINGWEI Technology",
        note: "End-to-end product consulting for manufacturing — MVP scope through production specs."
      },
      {
        period: "2016 — 2017",
        role: "Graphic & UI Designer · UnitedStack",
        note: "UI and visual identity systems across web and mobile product lines."
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
      "Collaboration tools: Figma · Notion · Jira · Cursor"
    ]
  },
  resume: {
    back: "← Back",
    print: "Save as PDF",
    summaryHeading: "Summary",
    coreSkills: "Core skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    availability: "Remote-first · Open to relocation",
    focus: "Focus"
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
    print: string;
    summaryHeading: string;
    coreSkills: string;
    experience: string;
    education: string;
    contact: string;
    availability: string;
    focus: string;
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
