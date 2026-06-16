export type FlowStepType = "system" | "agent" | "customer" | "decision" | "end";

export const productScope = {
  title: "Phases breakdown",
  phases: [
    {
      phase: "I",
      title: "Content & hand-off",
      summary: "Marketing assets and deep links into the agent’s private WhatsApp thread.",
      deliverables: ["Posters & digital business cards", "One-click deep links"]
    },
    {
      phase: "II",
      title: "Conversational quoting",
      summary: "Quote inside WABA without opening Ignite mid-sale.",
      deliverables: ["Natural-language motor capture", "Multimodal vehicle recognition"]
    },
    {
      phase: "III",
      title: "Agent-assisted closing",
      summary: "High-stakes steps stay gated by the agent.",
      deliverables: ["Secured application links", "Payment package forward to private chat"]
    },
    {
      phase: "IV",
      title: "Signals & performance",
      summary: "Turn passive links into moments to act.",
      deliverables: ["H5 engagement → agent alerts", "In-chat performance inquiry"]
    }
  ],
  flow: {
    title: "User flow — lead to policy issued",
    sections: [
      {
        label: "Lead acquisition",
        steps: [
          {
            type: "agent",
            text: "Agent chats with WABA for help driving leads and sales"
          },
          { type: "system", text: "WABA: Generate marketing material" },
          { type: "decision", text: "QR scan or link click" }
        ]
      },
      {
        label: "Advisor gate",
        steps: [{ type: "agent", text: "Consultation via Agent-Customer Private WhatsApp Chat" }]
      },
      {
        label: "Quote & fulfilment",
        steps: [
          { type: "customer", text: "Agent interact with WABA to get quote" },
          { type: "system", text: "WABA: Digital quote + Secured Application Links" },
          { type: "agent", text: "Agent forwards link to customer" },
          { type: "system", text: "WABA: Customer clicks → sync behaviour & notify agent" },
          { type: "system", text: "WABA: Update form filling status" },
          { type: "decision", text: "Purchase: self-serve or agent-assisted" },
          { type: "system", text: "WABA: Sync status & issue policy" },
          { type: "end", text: "Policy issued" }
        ]
      }
    ]
  }
} as const;
