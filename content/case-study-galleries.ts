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
  | { type: "single"; id: string; caption?: string; titleStyle?: boolean }
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
      { type: "single", id: "branding", caption: "Aligned UI with the new branding of Ignite.", titleStyle: true },
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
          { kind: "image", id: "usage-tracking", caption: "Usage data tracking" },
          { kind: "image", id: "usability-study", caption: "Usability study" }
        ]
      },
      { type: "single", id: "grow-module", caption: "Grow professional by learning online" },
      {
        type: "single",
        id: "recruitment-module",
        caption: "Enabling users to invite and recruit downlines with the appealing tool"
      },
      { type: "single", id: "contest-module", caption: "Encourage user to participate in online campaign" },
      {
        type: "single",
        id: "iteration-module-4",
        caption: "Created a continuous cycle of improvement, low cost but efficient"
      }
    ]
  },
  "ai-copilot": {
    Research: [],
    Product: [
      {
        type: "video",
        src: "/images/ai-copilot/performance-inquiry.mp4",
        caption: "In-chat performance inquiry",
        badge: "Live demo · test phase"
      },
      {
        type: "video",
        src: "/images/ai-copilot/marketing-assets.mp4",
        caption: "Marketing assets generation",
        badge: "Live demo · test phase"
      },
      {
        type: "video",
        src: "/images/ai-copilot/conversational-quoting.mp4",
        caption: "Conversational quoting flow",
        badge: "Live demo · test phase"
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
