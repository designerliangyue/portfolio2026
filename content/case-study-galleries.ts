import type { ProjectSlug } from "./images";

export type GalleryGridCell =
  | { kind: "image"; id: string; caption?: string }
  | {
      kind: "placeholder";
      assetId: string;
      label: string;
      hint?: string;
      aspect?: "16/9" | "21/9" | "4/3" | "3/2";
    }
  | { kind: "reserved"; aspect?: "16/9" | "21/9" | "4/3" | "3/2" };

export type GalleryBlock =
  | { type: "single"; id: string; caption?: string }
  | {
      type: "compare";
      oldId: string;
      newId: string;
      oldLabel?: string;
      newLabel?: string;
    }
  | { type: "grid"; ids?: string[]; cells?: GalleryGridCell[]; columns?: 2 | 3 }
  | {
      type: "placeholder";
      assetId: string;
      label: string;
      hint?: string;
      aspect?: "16/9" | "21/9" | "4/3" | "3/2";
    }
  | {
      type: "video";
      src: string;
      caption?: string;
      badge?: string;
      poster?: string;
    };

/** Gallery blocks keyed by section `kicker` (must match projects.ts). */
export const sectionGalleries: Record<ProjectSlug, Record<string, GalleryBlock[]>> = {
  ignite: {
    Research: [
      { type: "single", id: "journey", caption: "Redesign journey map" },
      { type: "single", id: "competitive-audit", caption: "Competitive audit — 7 regional platforms" },
      { type: "single", id: "problem-statement", caption: "Problem statement synthesis" },
      { type: "single", id: "lofi-prototype", caption: "Lo-fi interactive prototype" }
    ],
    Craft: [
      {
        type: "compare",
        oldId: "onboarding-old",
        newId: "onboarding-new",
        oldLabel: "Onboarding — before",
        newLabel: "Onboarding — after"
      },
      {
        type: "compare",
        oldId: "homepage-old",
        newId: "homepage-new",
        oldLabel: "Homepage — before",
        newLabel: "Homepage — after"
      },
      {
        type: "compare",
        oldId: "purchase-old",
        newId: "purchase-new",
        oldLabel: "Purchase flow — before",
        newLabel: "Purchase flow — after"
      },
      {
        type: "compare",
        oldId: "customer-old",
        newId: "customer-new",
        oldLabel: "Customer management — before",
        newLabel: "Customer management — after"
      },
      { type: "single", id: "design-system", caption: "Regional design system" }
    ],
    Iteration: [
      {
        type: "grid",
        columns: 2,
        cells: [
          { kind: "image", id: "grow-module" },
          { kind: "image", id: "recruitment-module" },
          { kind: "image", id: "contest-module" },
          { kind: "image", id: "iteration-module-4" }
        ]
      },
      { type: "single", id: "in-app-survey", caption: "In-app survey & feedback loop" },
      { type: "single", id: "usage-tracking", caption: "Usage data tracking" }
    ]
  },
  "ai-copilot": {
    Research: [],
    Product: [
      {
        type: "video",
        src: "/images/ai-copilot/waba-demo.mp4",
        caption: "WABA — conversational quoting & closing flow",
        badge: "Live demo · test phase"
      },
      {
        type: "grid",
        ids: ["strategy-partner", "comparative-advisor", "automated-scribe", "customer-profile"],
        columns: 2
      }
    ]
  },
  "cmb-cloud": {
    Foundation: [
      {
        type: "single",
        id: "dashboard",
        caption: "Interactive Tables and Unified Dashboard"
      }
    ],
    Onboarding: [
      {
        type: "single",
        id: "onboarding-tour",
        caption: "First-Time Login"
      },
      {
        type: "single",
        id: "onboarding-tooltips",
        caption: "Feature-Specific Tooltips"
      },
      {
        type: "single",
        id: "inline-docs",
        caption: "Inline Help Documentation"
      }
    ],
    Craft: [
      {
        type: "single",
        id: "dark-mode",
        caption: "System-Wide Dark Mode for Prolonged Usage"
      },
      {
        type: "single",
        id: "design-system",
        caption: "Redefining semantic colors for alerts, statuses, and data visualizations"
      }
    ]
  }
};

export function galleryForSection(slug: ProjectSlug, kicker: string): GalleryBlock[] {
  return sectionGalleries[slug]?.[kicker] ?? [];
}
