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
      title?: string;
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
    }
  | { type: "label"; text: string; textZh?: string };

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
        title: "Onboarding",
        oldId: "onboarding-old",
        newId: "onboarding-new",
        oldLabel: "Before — long sign-up form",
        newLabel: "After — streamlined onboarding"
      },
      {
        type: "compare",
        title: "Homepage",
        oldId: "homepage-old",
        newId: "homepage-new",
        oldLabel: "Before — displays insurance products only",
        newLabel: "After — informative and intuitive"
      },
      {
        type: "compare",
        title: "Purchase flow",
        oldId: "purchase-old",
        newId: "purchase-new",
        oldLabel: "Before — repeated information, confusing navigation",
        newLabel: "After — clearer information architecture"
      },
      {
        type: "compare",
        title: "Customer management",
        oldId: "customer-old",
        newId: "customer-new",
        oldLabel: "Before — plain list of basic contact info",
        newLabel: "After — rich customer data for smarter management"
      },
      { type: "single", id: "design-system", caption: "Regional design system", titleStyle: true }
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
      { type: "label", text: "Live demos · test phase", textZh: "测试阶段的录屏" },
      {
        type: "video",
        src: "/images/ai-copilot/performance-inquiry.mp4",
        poster: "/images/ai-copilot/performance-inquiry-poster.jpg",
        caption: "In-chat performance inquiry"
      },
      {
        type: "video",
        src: "/images/ai-copilot/marketing-assets.mp4",
        poster: "/images/ai-copilot/marketing-assets-poster.jpg",
        caption: "Marketing assets generation"
      },
      {
        type: "video",
        src: "/images/ai-copilot/conversational-quoting.mp4",
        poster: "/images/ai-copilot/conversational-quoting-poster.jpg",
        caption: "Conversational quoting flow"
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
