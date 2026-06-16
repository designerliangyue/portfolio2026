export const whyWeAreDoingThis = {
  title: "Why Are We Doing This?",
  sections: [
    {
      heading: "The Market Reality: Chat-First Economy",
      body:
        "In Southeast Asia, WhatsApp is the dominant operating system for business. However, current Insurtech workflows create friction: Agents acquire leads on WhatsApp but are forced to switch to a separate Mobile App to generate quotes. This \"context switching\" slows down sales velocity."
    },
    {
      heading: "The Opportunity",
      bodyBeforeLink: "We aim to implement ",
      link: {
        label: "WhatsApp Flow",
        href: "https://developers.facebook.com/docs/whatsapp/flows/"
      },
      bodyAfterLink:
        " together with unstructured conversational AI (NLP/LLM) to embed the entire Quote-to-Issue journey in chat — structured UI where precision matters, free text where flexibility matters."
    }
  ]
} as const;

export const interactionModes = {
  intro:
    "End-to-end sales in WhatsApp is a hybrid: neither pure chatbot nor pure forms alone.",
  modes: [
    {
      id: "unstructured",
      title: "Mode 1 · Unstructured (NLP / LLM)",
      primaryInterface: "Free-text conversational AI",
      bestFor: "Consulting, script generation, Quoting",
      example: "“Buy car insurance for a 2020 Toyota Corolla”"
    },
    {
      id: "structured",
      title: "Mode 2 · Structured (UI elements)",
      primaryInterface: "Native UI — WhatsApp Flows & Lists",
      bestFor: "Data entry, follow-up, database lookups",
      example: "[Choose plan] → list popup"
    }
  ]
} as const;

export const marketValidation = {
  title: "Market Validation",
  sections: [
    {
      heading: "Competitor — Lifepal",
      body:
        "Sells on WhatsApp but still relies on text-led Chat 1.0."
    },
    {
      heading: "Meta WhatsApp Flows",
      bodyBeforeLink: "Meta lists ",
      link: {
        label: "Insurance Quote",
        href: "https://developers.facebook.com/docs/whatsapp/flows/"
      },
      bodyAfterLink:
        " as a supported industry — native “Get a Quote” templates match the form logic we need."
    }
  ],
  benchmarksHeading: "Industry benchmarks",
  benchmarksIntro: "WhatsApp Flow is mature outside insurance — patterns we can reuse.",
  benchmarks: [
    {
      name: "Redbus",
      takeaway: "Origin → destination → date maps to car model → year → coverage."
    },
    {
      name: "JioMart",
      takeaway: "Full catalog and payment loop inside WhatsApp."
    },
    {
      name: "HDFC Bank",
      takeaway: "Sensitive financial data handled in-chat."
    }
  ]
} as const;
