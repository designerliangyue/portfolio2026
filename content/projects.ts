export type Metric = {
  value: string;
  label: string;
  note?: string;
  placeholder?: boolean;
};

export type CaseStudySection = {
  kicker: string;
  /** Stable English key for gallery / interactive module lookup */
  kickerKey?: string;
  title: string;
  body: string[];
  bullets?: { heading: string; text: string }[];
  stats?: { value: string; label: string }[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  team?: string;
  industry: string;
  market: string;
  tags: string[];
  cover: { tone: "warm" | "cool" | "neutral"; emoji: string; label: string };
  summary: string;
  hero: string;
  problem: string;
  approach: string;
  metrics: Metric[];
  crossCultural?: { heading: string; text: string }[];
  sections: CaseStudySection[];
  outcome: string;
  next?: string;
};

export const projects: Project[] = [
  {
    slug: "ignite",
    index: "02",
    title: "Ignite - Insurance Sales Platform",
    subtitle: "Reimagining an end-to-end insurance platform for Southeast Asia",
    period: "2022 — 2024",
    role: "UX Researcher · Product Designer (end-to-end)",
    team: "Cross-regional team across SG, ID, VN, MY",
    industry: "Insurtech · SaaS · Mobile",
    market: "4 Southeast Asian countries · ID, VN, MY, TH",
    tags: ["UX Research", "Mobile App", "Design System", "Cross-cultural"],
    cover: { tone: "warm", emoji: "🤳", label: "Insurtech / SEA" },
    summary:
      "A multi-functional platform serving insurance agents across four Southeast Asian markets — covering the full journey of selling, customer management, professional growth and team building.",
    hero:
      "Ignite is the platform agents open every morning before knocking on a customer's door. My job was to make that moment feel calm, confident, and culturally fluent — across four very different markets.",
    problem:
      "Agents had to juggle complex products, regulatory variation, and trust-driven sales conversations on a fragmented legacy app that treated all four SEA markets as one. The result: low onboarding completion, weak engagement, and a fragile brand for a company expanding regionally.",
    approach:
      "I led the end-to-end product design from research through hi-fi delivery: stakeholder interviews, remote interviews with agents in Indonesia and Vietnam, a competitive audit of seven regional players, and a scalable mobile design system that lets each country flex while staying visually unified.",
    metrics: [
      { value: "4", label: "Southeast Asian markets", note: "ID · VN · plus 2" },
      { value: "25", label: "Agents interviewed in-language", note: "10 Indonesia · 15 Vietnam" },
      { value: "7", label: "Regional competitors audited", note: "to map field expectations" },
      { value: "4", label: "New modules shipped", note: "Grow · Recruit · Contest · Survey", placeholder: false },
      { value: "+__%", label: "Onboarding completion", note: "to be filled with launch data", placeholder: true },
      { value: "__ pts", label: "NPS uplift after revamp", note: "to be filled with post-launch data", placeholder: true }
    ],
    crossCultural: [
      {
        heading: "Trust as the design substrate",
        text: "Across both ID and VN interviews, agents repeated one word: trust. We treated it as a design material — slower motion, clearer disclosure, photographic content from real local agents, and a typographic system that privileged readability over flourish."
      },
      {
        heading: "Specialism, not breadth",
        text: "Most agents specialise in only 2–3 product types. The previous homepage showed everything to everyone. The new homepage learns the agent's specialism and prioritises the products they actually sell — a small interaction model change with outsized retention impact."
      },
      {
        heading: "One system, four flavours",
        text: "I built a Figma library where the same components can host market-specific product classification, language length variation, and regulatory disclaimers — so the 4 countries ship from the same source of truth without one country dictating the other's experience."
      },
      {
        heading: "Relationship-driven business culture",
        text: "SEA agent networks are deeply social. New Recruitment and Contest modules turned what used to be private sales tools into shareable, community-shaped surfaces — designed for WhatsApp-first sharing patterns rather than email-first ones."
      }
    ],
    sections: [
      {
        kicker: "Research",
        title: "Listening before designing",
        body: [
          "Before any wireframe, I ran remote interviews with 10 agents in Indonesia and 15 in Vietnam with local researchers. We added a competitive audit of seven regional platforms, mapping flows, feature sets, and disclosure patterns.",
          "Four insights anchored everything that followed: trust is an asset, quality of service is the moat, agents specialise narrowly, and complex products demand heavy training that the previous app was not delivering."
        ]
      },
      {
        kicker: "Strategy",
        title: "From scattered tools to a single agent surface",
        body: [
          "I reframed the brief from \"redesign the app\" to \"design the agent's working day.\" That shifted the IA from product-led to journey-led: prospecting → matching → selling → managing → growing.",
          "Each surface inherits a clear principle: prospect screens optimise for speed, sell screens optimise for confidence, manage screens optimise for control."
        ]
      },
      {
        kicker: "Craft",
        title: "Onboarding, homepage, purchase, customer management",
        body: [
          "Onboarding moved from a long web form to a streamlined mobile-native sequence. The homepage shifted from a passive product list to an informative, personal dashboard. The purchase flow was streamlined with a clearer information architecture. Customer management gained richer profiles and contextual actions.",
          "All four flows ship against the same regional design system, so a country-specific change in Vietnam does not silently break Indonesia."
        ]
      },
      {
        kicker: "Iteration",
        title: "Designing the feedback loop",
        stats: [
          { value: "60 days", label: "Survey window after new version launched" },
          { value: "300+", label: "Responses received" },
          { value: "73.5%", label: "Satisfaction rate" },
          { value: "67", label: "NPS score" }
        ],
        body: [
          "I built an in-app survey system that triggers after meaningful events — a completed sale, a finished training — paired with usage data tracking. This means every release lands with a measurable signal, not just a screenshot.",
          "Three new modules — Grow, Recruitment, and Contest — were prioritised directly from this feedback loop, each tying back to a documented agent behaviour."
        ]
      }
    ],
    outcome:
      "Ignite shipped as a unified regional product with a scalable design system, four new growth modules, and a built-in measurement loop. Most importantly, it gave the regional team a shared language for talking about market differences without fragmenting the product.",
    next: "cmb-cloud"
  },
  {
    slug: "ai-copilot",
    index: "01",
    title: "AI Sales Co-Pilot",
    subtitle:
      "WhatsApp-native conversational commerce for Indonesian insurance agents",
    period: "2025 — 2026",
    role: "Lead Product Strategy & Design",
    industry: "AI · Insurtech · Conversational commerce",
    market: "Indonesia",
    tags: ["AI Experience", "WhatsApp", "Product Strategy", "Cross-cultural"],
    cover: { tone: "cool", emoji: "🤖", label: "WhatsApp / AI" },
    summary:
      "WhatsApp Sales Co-Pilot for Indonesia — research, product scope, and experience design in one lead role.",
    hero:
      "Agents sell on private WhatsApp; the product had to meet them there. I led research, product definition, and design for a WhatsApp Business Co-Pilot that amplifies — not replaces — that habit.",
    problem:
      "Quoting lived in Ignite app; trust lived in private chat. AI only inside the app added another switch when momentum was already fragile.",
    approach:
      "One agent-initiated journey, a four-layer architecture, and a phased MVP — hand-off, quote, close, signals — aligned through prototypes before build.",
    metrics: [
      { value: "3", label: "Disciplines in one lead role", note: "Research · Product · Design" },
      { value: "4", label: "Architecture layers", note: "Gateway · Orchestration · MCP · Domain" },
      { value: "4", label: "MVP release phases", note: "Hand-off → Signals" },
      { value: "+__%", label: "Quote-to-close in WABA", note: "post-launch measurement", placeholder: true },
      { value: "__%", label: "Engagement alert follow-through", note: "link-open signals", placeholder: true }
    ],
    sections: [
      {
        kicker: "Contribution",
        title: "Research · Product · Design",
        body: [
          "One accountable thread from field insight to a shippable WhatsApp Business Account (WABA) experience — the value it creates for agents, and the three roles behind it."
        ]
      },
      {
        kicker: "Research",
        title: "End-to-end WhatsApp sales",
        body: [
          "WhatsApp is not usable day-to-day on the mainland. I could not shadow Indonesian agents in situ — so I built the case study through evidence I could access remotely. The product thesis: embed quote-to-issue by pairing unstructured NLP/LLM with WhatsApp Flow’s structured UI — not one mode alone."
        ]
      },
      {
        kicker: "Product",
        title: "Scope & phases",
        body: [
          "North star: empowerment without displacement. Phases breakdown, User flow, and WABA screens below — aligned to the WhatsApp MVP programme for Indonesia."
        ]
      },
      {
        kicker: "System design",
        title: "Four-layer architecture",
        body: [
          "From omni-channel gateway to MCP capabilities."
        ]
      }
    ],
    outcome:
      "A coherent WhatsApp Co-Pilot for Indonesia — culturally grounded, architecturally explicit, ready for phased ship.",
    next: "ignite"
  },
  {
    slug: "cmb-cloud",
    index: "03",
    title: "CMB Private Cloud",
    subtitle: "A unified internal cloud platform for one of China's largest retail banks",
    period: "2020",
    role: "Lead UI/UX Designer",
    team: "Bank-side engineers, ops, and security stakeholders",
    industry: "Enterprise · Fintech · PaaS",
    market: "Internal platform, bank-wide",
    tags: ["Design System", "Enterprise UX", "Accessibility", "Dark Mode"],
    cover: { tone: "neutral", emoji: "☁️", label: "Enterprise / Bank" },
    summary:
      "An internal cloud computing platform for China Merchants Bank, consolidating fragmented scripts, legacy tools and dashboards into one coherent operator surface — with a holistic design system and a true dark mode designed for long-haul use.",
    hero:
      "Banking infrastructure people stare at the same screens for hours. The job here was to honour the complexity of the work while giving operators a calm, legible, and dependable interface to live inside.",
    problem:
      "CMB's internal teams managed the bank's private cloud through a scattered set of scripts, legacy dashboards, and tribal knowledge. This created slow incident resolution, costly onboarding for new hires, and growing operational risk as the cloud footprint expanded.",
    approach:
      "I led UX from competitive analysis through delivery. I translated heavily-technical internal tasks into user-centric flows, built a holistic design system, and shipped a unified operator console with three layers of contextual onboarding and a system-wide dark mode engineered to WCAG contrast standards.",
    metrics: [
      { value: "1", label: "Unified operator console", note: "replacing fragmented scripts and tools" },
      { value: "3", label: "Layers of contextual onboarding", note: "tour · tooltips · inline docs" },
      { value: "WCAG", label: "Dark mode contrast standards", note: "for prolonged usage scenarios" },
      { value: "—%", label: "Mean time to incident resolution", note: "to be filled with bank-side data", placeholder: true },
      { value: "—%", label: "New hire ramp-up time", note: "to be filled with bank-side data", placeholder: true },
      { value: "—%", label: "Reported eye fatigue (dark mode)", note: "to be filled with internal survey", placeholder: true }
    ],
    crossCultural: [
      {
        heading: "Enterprise tone for a global audience",
        text: "Internal banking tools sit at the intersection of compliance and craft. The visual language is restrained, the IA is unforgiving — every label, status, and alert had to read identically to an engineer, a compliance officer, and a fresh hire."
      },
      {
        heading: "Accessibility as a non-negotiable",
        text: "I did not treat dark mode as a colour inversion. Contrast ratios were tuned to WCAG, semantic colours for alerts and data visualisations were redefined for darkness, and component states stayed unambiguous in both themes."
      }
    ],
    sections: [
      {
        kicker: "Foundation",
        title: "Unified Dashboard, Interactive Tables",
        body: [
          "The dashboard collapses fragmented status, alerts and quick actions into one real-time surface. Tables are interactive primitives, not static reports, so operators can move from \"I see a problem\" to \"I'm taking action\" without leaving context."
        ]
      },
      {
        kicker: "Onboarding",
        title: "Three layers of progressive guidance",
        body: [
          "First-time login starts with a brief interactive tour of the main dashboard sections. Feature-specific tooltips appear the first time an operator encounters a complex feature. And every workflow has inline \"Learn More\" and question-mark affordances that open task-specific documentation in a side panel — no context switch, no lost work."
        ]
      },
      {
        kicker: "Craft",
        title: "A dark mode designed for the night shift",
        body: [
          "Operators spend long hours in this product. The dark theme is a complete second skin, not a quick inversion. I tuned contrast ratios to WCAG, redefined semantic colours for alerts, statuses and data visualisations, and audited every component state across both themes."
        ]
      }
    ],
    outcome:
      "The platform consolidated years of accumulated complexity into one coherent operator console, with a design system that can grow with the bank. It's the project that taught me how to design enterprise-grade products — and how to lead a design system that survives stakeholder change."
  }
];

import type { Locale } from "@/lib/i18n/types";
import { projectsZh } from "./projects.zh";

export const projectsEn = projects;

export function getProjects(locale: Locale): Project[] {
  const list = locale === "zh" ? projectsZh : projects;
  return [...list].sort((a, b) => a.index.localeCompare(b.index));
}

export const projectBySlug = (slug: string, locale: Locale = "en") =>
  getProjects(locale).find((p) => p.slug === slug);
