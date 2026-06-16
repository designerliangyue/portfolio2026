export type ArchitectureLayerData = {
  id: string;
  layer: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights?: string[];
  routing?: {
    label: string;
    fastTrack: string;
    dynamicPlanning: string;
  };
  ecosystem?: { name: string; description: string }[];
  channels?: string[];
};

export const architectureDesign = {
  title: "Architecture design",
  intro:
    "Four layers from channel ingress to insurance capabilities — abstracting WhatsApp, Line, and Zalo into one AI engine, then routing through MCP to domain services.",
  flowLabel: "Request flows down · capabilities resolve up",
  layers: [
    {
      id: "layer-1",
      layer: "01",
      title: "Omni-channel integration",
      subtitle: "Business layer",
      summary:
        "Unified gateway for global IM platforms. Abstracts each channel’s technical nuances and exposes a standardised schema to the AI engine.",
      channels: ["WhatsApp", "Line", "Zalo"],
      highlights: [
        "Channel adapters per platform",
        "Normalised inbound message schema",
        "Extensible for future regional channels"
      ]
    },
    {
      id: "layer-2",
      layer: "02",
      title: "Hybrid orchestration & runtime",
      subtitle: "Agent layer",
      summary:
        "Dual-model strategy balancing speed and reasoning depth — lightweight intent classification routes to fast templates or dynamic skill execution.",
      routing: {
        label: "Intent recognition (lightweight LLM)",
        fastTrack: "Routine queries → optimised templates",
        dynamicPlanning: "Complex requests → skills, tools & MCP servers"
      },
      ecosystem: [
        {
          name: "Dynamic skill repository",
          description: "Operators update business logic in real time — no redeploy."
        },
        {
          name: "Intelligent memory",
          description: "Session, history, and user persona context."
        },
        {
          name: "Tool cache",
          description: "Frequent tool outputs cached — lower latency & token cost."
        },
        {
          name: "Business adapters",
          description: "Code-defined insurance workflows for accuracy over pure inference."
        }
      ],
      highlights: [
        "Agnostic runtime loads domain skills on the fly",
        "Becomes a domain expert per conversation context"
      ]
    },
    {
      id: "layer-3",
      layer: "03",
      title: "Smart MCP routing",
      subtitle: "Protocol layer",
      summary:
        "MCP service mesh with a unified interface to heterogeneous backends — resolves protocol differences and routes by load and compatibility.",
      highlights: [
        "Merges ignite & whitelabel surfaces",
        "Optimal server selection per request",
        "Protocol normalisation for enterprise MCP"
      ]
    },
    {
      id: "layer-4",
      layer: "04",
      title: "MCP server",
      subtitle: "Capability layer",
      summary:
        "Plug-and-play business-line capabilities — external databases, APIs, and proprietary enterprise tools composed per conversation.",
      highlights: [
        "Quote & underwriting adapters",
        "Payment gateway & document generation",
        "Agent performance & wallet inquiry"
      ]
    }
  ] satisfies ArchitectureLayerData[]
} as const;
