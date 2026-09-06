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
  stats?: { value: string; label: string; note?: string }[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  status: string;
  team?: string;
  scope: string;
  constraints: string;
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
  evidence: string[];
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
    status: "Live product · Ongoing releases",
    team: "Remote cross-functional team",
    scope: "Research synthesis, product flows, interaction design, UI system, and delivery",
    constraints: "Four markets, local regulation and language variation, remote research",
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
      { value: "4", label: "New modules shipped", note: "Grow · Recruit · Contest · Survey", placeholder: false }
    ],
    crossCultural: [
      {
        heading: "Trust as the design substrate",
        text: "Across both ID and VN interviews, agents repeated one word: trust. We treated it as a design material — slower motion, clearer disclosure, photographic content from real local agents, and a typographic system that privileged readability over flourish."
      },
      {
        heading: "Specialism, not breadth",
        text: "Most agents specialise in only 2–3 product types. The previous homepage showed everything to everyone. The new homepage prioritises the products relevant to each agent’s specialism, reducing the effort needed to find what they sell most often."
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
          "Before any wireframe, I ran remote interviews with 10 agents in Indonesia and 15 in Vietnam with local researchers. We added a competitive audit of seven regional platforms, mapping flows, feature sets, and UX patterns.",
          "Four insights anchored everything that followed: trust is an asset, quality of service is the moat, agents specialise narrowly, and complex products demand heavy training that the previous app was not delivering."
        ]
      },
      {
        kicker: "Strategy",
        title: "From scattered tools to a single agent surface",
        body: [
          "The interviews showed that agents did not experience their work as a catalogue of insurance products. They moved through a day of prospecting, matching, selling, managing customers, and growing their teams. I therefore reframed the brief from \"redesign the app\" to \"design the agent’s working day.\"",
          "That decision shifted the information architecture from product-led to journey-led. It meant giving up a single catalogue-first homepage, but it let each surface optimise for its real task: speed in prospecting, confidence in selling, and control in customer management."
        ]
      },
      {
        kicker: "Craft",
        title: "Onboarding, homepage, purchase, customer management",
        body: [
          "The before-and-after screens below show where the strategy changed the product: a shorter mobile-native onboarding sequence, a homepage prioritising each agent’s specialism, a clearer purchase structure, and customer profiles with actions in context.",
          "All four flows shipped against one regional design system. Market-level variants handle language, product classification, and regulatory content without turning each country into a separate product."
        ]
      },
      {
        kicker: "Iteration",
        title: "Designing the feedback loop",
        stats: [
          { value: "60 days", label: "Post-launch survey window" },
          { value: "300+", label: "In-app survey responses" },
          { value: "73.5%", label: "Reported satisfaction" },
          { value: "67", label: "NPS score" }
        ],
        body: [
          "I built an in-app survey system that triggers after meaningful events — a completed sale, a finished training — paired with usage data tracking. This means every release lands with a measurable signal, not just a screenshot.",
          "Three new modules — Grow, Recruitment, and Contest — were prioritised directly from this feedback loop, each tying back to a documented agent behaviour."
        ]
      }
    ],
    outcome:
      "This redesign went beyond a visual refresh. It reframed Ignite as a regional product around the agent’s full working journey—from prospecting and selling to customer management, learning, and team growth—giving four markets a shared experience framework without erasing local needs. A scalable design system reduced fragmentation across market-specific releases, while behavioural data and in-app research created a repeatable way to validate problems, assess value, and set priorities. The result was not only a more complete product, but a shared operating language for deciding what the regional platform should do next.",
    evidence: [
      "Four product modules shipped on the shared regional design system: Grow, Recruitment, Contest, and Survey.",
      "A 60-day in-app survey collected 300+ responses, with 73.5% reported satisfaction and an NPS score of 67.",
      "These are product-feedback signals, not revenue impact or outcomes attributed to design alone."
    ],
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
    status: "Launched · Three production flows",
    team: "Product, engineering, and insurance operations partners",
    scope: "Research direction, product definition, conversational UX, system model, and production prototypes",
    constraints: "Remote access to Indonesian agents, Meta messaging rules, and high-stakes insurance steps",
    industry: "AI · Insurtech · Conversational commerce",
    market: "Indonesia",
    tags: ["AI Experience", "WhatsApp", "Product Strategy", "Cross-cultural"],
    cover: { tone: "cool", emoji: "🤖", label: "WhatsApp / AI" },
    summary:
      "WhatsApp Sales Co-Pilot for Indonesia — research, product scope, and experience design in one lead role.",
    hero:
      "Agents sell on private WhatsApp; the product had to meet them there. I led research, product definition, and design for a WhatsApp AI Co-Pilot that amplifies — not replaces — their existing workflow.",
    problem:
      "Quoting lived in the Ignite app; trust lived in private chat. AI only inside the app added another switch when momentum was already fragile.",
    approach:
      "I defined one agent-initiated journey and a phased release — hand-off, quote, close, and signals — then translated it into conversational flows, a four-layer system model, and production prototypes with the delivery team.",
    metrics: [
      { value: "3", label: "Core production flows delivered", note: "Performance · Marketing assets · Quoting" },
      { value: "4", label: "System layers aligned", note: "Gateway · Orchestration · MCP · Domain" },
      { value: "4", label: "Release phases defined", note: "Hand-off → Signals" }
    ],
    sections: [
      {
        kicker: "Contribution",
        title: "Research · Product · Design",
        body: []
      },
      {
        kicker: "Research",
        title: "End-to-end WhatsApp sales",
        body: [
          "WhatsApp is not usable day-to-day on the mainland, so I could not shadow Indonesian agents in situ. I combined Meta documentation, benchmark services, a live WABA environment, and the existing agent workflow to test one question: which parts of quote-to-issue benefit from conversation, and which require structure?",
          "The answer was a hybrid model. Free text supports flexible requests; WhatsApp Flows handle precise data capture; explicit agent confirmation protects high-stakes steps. The diagrams below show the evidence and interaction split behind that decision."
        ]
      },
      {
        kicker: "Product",
        title: "Scope & phases",
        body: [
          "The product principle was empowerment without displacement: WABA provides tools, while the agent remains the visible owner of the customer relationship. That ruled out a fully autonomous bot and shaped the hand-off points in the flow below.",
          "I divided delivery into four phases so the team could launch useful agent tasks first, then extend toward quoting, assisted closing, and engagement signals. The three product demos show the launched performance, marketing-asset, and quoting flows."
        ]
      },
      {
        kicker: "System design",
        title: "Four-layer architecture",
        body: [
          "I translated the multi-channel entry points, AI orchestration, and insurance capabilities into four layers the team could reason about as one coherent agent experience."
        ]
      }
    ],
    outcome:
      "The WhatsApp AI Co-Pilot launched with production flows for performance inquiry, marketing-asset generation, and conversational quoting. The work turned a broad AI opportunity into an agent-led product model, a quote-to-issue journey, and a phased system the team can extend without displacing the agent-customer relationship.",
    evidence: [
      "Launched production flows: performance inquiry, marketing-asset generation, and conversational quoting.",
      "Delivery evidence includes conversation scripts, WhatsApp Flows, a quote-to-issue journey, system architecture, and production prototypes.",
      "Research was remote and indirect: Meta documentation, benchmark services, a live WABA environment, existing workflows, and partner input—not direct in-market agent interviews."
    ],
    next: "ignite"
  },
  {
    slug: "cmb-cloud",
    index: "03",
    title: "CMB Private Cloud",
    subtitle: "A unified internal cloud platform for one of China's largest retail banks",
    period: "2020",
    role: "Lead UI/UX Designer",
    status: "Delivered · Internal enterprise platform",
    team: "Bank-side engineers, ops, and security stakeholders",
    scope: "Enterprise IA, operator workflows, interaction design, visual system, and handoff",
    constraints: "Dense technical data, long sessions, security requirements, and legacy workflows",
    industry: "Enterprise · Fintech · PaaS",
    market: "Internal private-cloud platform",
    tags: ["Design System", "Enterprise UX", "Accessibility", "Dark Mode"],
    cover: { tone: "neutral", emoji: "☁️", label: "Enterprise / Bank" },
    summary:
      "An internal cloud computing platform for China Merchants Bank, consolidating fragmented scripts, legacy tools and dashboards into one coherent operator surface — with a holistic design system and a true dark mode designed for long-haul use.",
    hero:
      "Banking infrastructure people stare at the same screens for hours. The job here was to honour the complexity of the work while giving operators a calm, legible, and dependable interface to live inside.",
    problem:
      "CMB's internal teams managed the bank's private cloud through a scattered set of scripts, legacy dashboards, and undocumented operational knowledge. The fragmented workflow made system state harder to understand, increased the learning burden for new hires, and introduced risk as the cloud footprint expanded.",
    approach:
      "I led UX from competitive analysis through delivery. I translated highly technical internal tasks into operator workflows, built a shared design system, and delivered a unified console with three layers of contextual onboarding and a system-wide dark mode checked against WCAG contrast criteria.",
    metrics: [
      { value: "1", label: "Unified operator console", note: "replacing fragmented scripts and tools" },
      { value: "3", label: "Layers of contextual onboarding", note: "tour · tooltips · inline docs" },
      { value: "WCAG", label: "Contrast criteria checked", note: "across light and dark component states" }
    ],
    crossCultural: [
      {
        heading: "Enterprise tone for internal bank users",
        text: "Internal banking tools sit at the intersection of compliance, operations, and engineering. The visual language is restrained, the IA is unforgiving — every label, status, and alert had to read clearly for engineers, operators, security stakeholders, and new hires."
      },
      {
        heading: "Accessibility as a non-negotiable",
        text: "I did not treat dark mode as a colour inversion. I checked contrast against WCAG criteria, redefined semantic colours for alerts and data visualisations, and reviewed component states across both themes."
      }
    ],
    sections: [
      {
        kicker: "Foundation",
        title: "Unified Dashboard, Interactive Tables",
        body: [
          "Operators previously moved between scripts, legacy dashboards, and undocumented knowledge to understand system state. The unified dashboard brings status, alerts, and related actions into one surface while preserving the information density required for operations.",
          "Tables were designed as working interfaces rather than static reports: an operator can identify an issue, inspect its context, and begin the relevant action without navigating to a separate tool."
        ]
      },
      {
        kicker: "Workflow",
        title: "From detecting a problem to acting in context",
        body: [
          "I used one recurring operator task to organise the console: detect an abnormal state, understand its scope, inspect the affected resource, and begin the relevant action without losing context.",
          "The dashboard establishes severity and system state; the interactive table preserves filters and exposes the affected resource; the detail layer keeps history, dependencies, and the next action together. This sequence became the information-architecture spine rather than treating each screen as a separate feature."
        ],
        bullets: [
          { heading: "Detect", text: "Prioritised status and alerts make abnormal conditions visible." },
          { heading: "Understand", text: "Context, dependencies, and history clarify the affected scope." },
          { heading: "Act", text: "Related actions begin from the same working context instead of another tool." }
        ]
      },
      {
        kicker: "Onboarding",
        title: "Three layers of progressive guidance",
        body: [
          "New and occasional users needed help, but permanent instructions would slow experienced operators and compete with dense operational data. I separated guidance into three layers based on when it is needed.",
          "A short tour explains the overall dashboard, contextual tooltips introduce complex features on first use, and inline documentation supports task-specific questions without sending the operator away from the current workflow."
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
      "I delivered a coherent private-cloud console spanning the information architecture, operator workflows, interactive table patterns, progressive onboarding, and a shared light/dark component system. Together, these artifacts gave product and engineering one consistent foundation for extending complex operational workflows.",
    evidence: [
      "One unified console connected system status, alerts, context, and related actions.",
      "Three guidance layers were specified for new, occasional, and experienced operators.",
      "Light and dark component states, semantic status colours, and contrast checks were documented for engineering handoff."
    ]
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
