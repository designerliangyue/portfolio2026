export type FlowStep = {
  id: string;
  label: string;
  channel: "WABA" | "Private WhatsApp" | "Ignite" | "Customer";
  summary: string;
  detail: string;
};

export type UserFlow = {
  id: "uc1" | "uc2";
  title: string;
  subtitle: string;
  trigger: string;
  steps: FlowStep[];
};

export type ArchitectureLayer = {
  id: string;
  layer: string;
  title: string;
  summary: string;
  responsibilities: string[];
  connectsTo?: string;
};

export type ContributionRole = {
  id: string;
  title: string;
  scope: string;
  outputs: string[];
};

export const contributionRoles: ContributionRole[] = [
  {
    id: "research",
    title: "Research lead",
    scope:
      "Led discovery for embedding quote-to-issue in WhatsApp while based in mainland China — where the product is restricted — using remote validation, Meta documentation, competitor analysis, and a self-serve WABA sandbox.",
    outputs: [
      "Case study: market framing, validation",
      "Alicloud sandbox for live Flow testing",
      "Multi-client isolation hypothesis for B2B2C"
    ]
  },
  {
    id: "product",
    title: "Product strategist",
    scope:
      "Owned the product narrative end-to-end: scope, phased roadmap, success signals, and trade-offs between Meta messaging rules and agent trust.",
    outputs: [
      "Agent-initiated journey & acceptance criteria",
      "Four-phase MVP sequencing with engineering"
    ]
  },
  {
    id: "design",
    title: "Experience designer",
    scope:
      "Translated strategy into conversational UX, WhatsApp Flows, templates, and prototypes the team could ship against.",
    outputs: [
      "Interaction model & WABA prototypes",
      "Brand voice for rapid sales chat"
    ]
  }
];

export const agentInitiatedFlow: UserFlow = {
    id: "uc1",
    title: "Agent-initiated acquisition",
    subtitle: "Lead → private chat → quote → close → engagement signal",
    trigger: "Agent starts from a lead or returning customer",
    steps: [
      {
        id: "uc1-1",
        label: "Generate asset",
        channel: "WABA",
        summary: "Agent requests a poster or quote package in WABA.",
        detail:
          "Co-Pilot produces marketing or quote collateral aligned to UC1. Agent reviews before anything leaves the business account."
      },
      {
        id: "uc1-2",
        label: "Forward to private chat",
        channel: "Private WhatsApp",
        summary: "Deep link drops the customer into the agent's personal thread.",
        detail:
          "The relationship stays on the agent's number. WABA supplies tooling; the agent remains the visible owner of the conversation."
      },
      {
        id: "uc1-3",
        label: "Quote in conversation",
        channel: "WABA",
        summary: "Natural-language motor quoting, optional vehicle photo recognition.",
        detail:
          "Customer can continue in WABA or via forwarded H5. Sum insured and product options surface without opening Ignite mid-sale."
      },
      {
        id: "uc1-4",
        label: "Close with agent gatekeeping",
        channel: "WABA",
        summary: "Application Flow, access code, payment link, policy PDF — each forwarded deliberately.",
        detail:
          "Agent edits AI-assisted fields, confirms payment package, and only then shares links into private chat."
      },
      {
        id: "uc1-5",
        label: "Signal on engagement",
        channel: "WABA",
        summary: "Opens and dwell time on quote H5 ping the agent in real time.",
        detail:
          "Passive link sharing becomes actionable — e.g. alert when a customer is actively viewing an offer."
      }
    ]
};

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "layer-1",
    layer: "01",
    title: "Omni-channel gateway",
    summary: "Normalise inbound traffic from WhatsApp, Line, Zalo into one schema the AI engine can reason over.",
    responsibilities: [
      "Channel adapters & session normalisation",
      "Unified message schema for downstream orchestration",
      "Extensible gateway for future regional channels"
    ],
    connectsTo: "layer-2"
  },
  {
    id: "layer-2",
    layer: "02",
    title: "Hybrid orchestration",
    summary: "Lightweight intent model routes to fast paths or dynamic plans; runtime executes skills, tools, and memory.",
    responsibilities: [
      "Intent classification (fast track vs planned execution)",
      "Skill repository & tool cache for insurance tasks",
      "Dual-model setup: nimble intent + capable runtime"
    ],
    connectsTo: "layer-3"
  },
  {
    id: "layer-3",
    layer: "03",
    title: "MCP service mesh",
    summary: "Smart routing across ignite and whitelabel backends through a unified protocol surface.",
    responsibilities: [
      "Protocol normalisation for enterprise MCP servers",
      "Service discovery & capability routing",
      "Merge legacy app APIs with new AI primitives"
    ],
    connectsTo: "layer-4"
  },
  {
    id: "layer-4",
    layer: "04",
    title: "Domain MCP servers",
    summary: "Pluggable insurance capabilities — quoting, policy, payment, performance — composed per conversation.",
    responsibilities: [
      "Quote & underwriting adapters",
      "Payment gateway & document generation",
      "Agent performance & wallet inquiry services"
    ]
  }
];

export const mvpPhases = [
  {
    phase: "I",
    title: "Content & hand-off",
    text: "Posters, renewal quotes, and deep links into private chat."
  },
  {
    phase: "II",
    title: "Conversational quoting",
    text: "Natural-language capture, multimodal vehicle recognition, in-chat product options."
  },
  {
    phase: "III",
    title: "Agent-assisted closing",
    text: "WhatsApp Flows, secured application links, payment packages."
  },
  {
    phase: "IV",
    title: "Signals & performance",
    text: "Engagement telemetry, payment alerts, in-chat GWP and downline commission."
  }
];
