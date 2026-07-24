import type { Locale } from "@/lib/i18n/types";

export type ResumeExperience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  location: string;
  period: string;
  focus: string;
};

export type ResumeContent = {
  title: string;
  summary: string;
  coreSkills: { group: string; items: string }[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
};

export const resumeEn: ResumeContent = {
  title: "Senior Product Designer · Interaction & Narrative Experience Architect",
  summary:
    "Senior Product Designer with 10 years of experience specialized in architecting complex enterprise systems, AI-enhanced interfaces, and data-intensive platforms. Blending a rigorous foundational background in Landscape Architecture with digital product design to craft highly contextual, emotionally resonant, and seamless multi-dimensional user journeys. Expert in data-driven design, interaction scalability, and cross-cultural product localized optimization.",
  coreSkills: [
    {
      group: "Product Strategy & Design",
      items:
        "Enterprise Information Architecture, Scalable Design Systems, AI Workflow Modeling, User Journey Mapping, Data Visualization."
    },
    {
      group: "Research & Evaluation",
      items:
        "Cross-Cultural Product Localization, Cognitive Walkthroughs, User Behavior Analytics, Competitive Matrixing."
    },
    {
      group: "Design Execution & Handoff",
      items:
        "Figma (Advanced Components, Auto-layout & Library Governance), Interactive Prototyping, Production-ready Specification Design, Cross-functional Developer Collaboration."
    }
  ],
  experience: [
    {
      role: "Senior Product Designer",
      company: "Axinan Ltd. (Igloo Insurance)",
      location: "Chengdu, China",
      period: "Apr 2021 — Present",
      bullets: [
        "Led the end-to-end redesign of Ignite, Igloo's insurance sales platform, serving agent networks across Southeast Asian markets — from lead acquisition and quoting through policy issuance.",
        "Designed the AI Sales Co-Pilot: embedded the quote-to-issue journey inside WhatsApp, blending structured UI (WhatsApp Flows) with conversational AI — intelligent customer profiles, real-time talking-point suggestions, and automated form filling with the agent in control",
        "Designed the Employee Benefits Platform, a three-stakeholder SaaS (insurers, HR admins, employees), with each surface tuned to how that role actually works.",
        "Ran targeted user research and usability benchmarking across multi-cultural contexts, translating behavioral insights into high-efficiency task flows."
      ]
    },
    {
      role: "UI/UX Designer",
      company: "China Merchants Bank",
      location: "Chengdu, China",
      period: "Dec 2019 — Apr 2021",
      bullets: [
        "Designed enterprise products including the CMB Private Cloud console, translating complex internal requirements into clear, structured interfaces.",
        "Upheld usability and accessibility (WCAG) standards; mapped comprehensive user flows and prototypes to turn ambiguous requirements into actionable designs.",
        "Built and governed a centralized design system from the ground up, with reusable components that shortened design-to-development cycles."
      ]
    },
    {
      role: "UI/UX Designer",
      company: "JINGWEI Technology",
      location: "Chengdu, China",
      period: "Dec 2017 — Dec 2019",
      bullets: [
        "Delivered end-to-end product design consulting for traditional manufacturing industries, defining initial MVP scope, interactive prototyping, and brand identity systems.",
        "Established user-centered methodologies for clients, transforming vague business hypotheses into tangible wireframes, high-fidelity layouts, and functional spec documentation."
      ]
    },
    {
      role: "Graphic and UI Designer",
      company: "UnitedStack",
      location: "Beijing, China",
      period: "Sep 2016 — Oct 2017",
      bullets: [
        "Designed intuitive user interfaces and established consistent visual identity systems for both web and mobile product lines.",
        "Designed diverse digital touchpoints and corporate branding assets, collaborating with marketing teams to maintain visual consistency."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Landscape Architecture",
      school: "Beijing Forestry University",
      location: "Beijing, China",
      period: "Sep 2012 — Jun 2016",
      focus:
        "Spatial Dynamics, Complex Environmental Systems, Micro-scale Architecture, Narrative Spatial Journeys."
    }
  ]
};

export const resumeZh: ResumeContent = {
  title: "高级产品设计师 · 交互与叙事体验架构师",
  summary:
    "拥有 10 年经验的高级产品设计师，专长于复杂企业系统、AI 增强界面与数据密集型平台的架构设计。将风景园林的扎实基础与数字产品设计相融合，打造高度情境化、富有情感共鸣且无缝衔接的多维用户旅程。精通数据驱动设计、交互可扩展性与跨文化产品本地化优化。",
  coreSkills: [
    {
      group: "产品策略与设计",
      items: "企业信息架构、可扩展设计体系、AI 工作流建模、用户旅程地图、数据可视化。"
    },
    {
      group: "研究与评估",
      items: "跨文化产品本地化、认知走查、用户行为分析、竞品矩阵分析。"
    },
    {
      group: "设计执行与交付",
      items:
        "Figma（高级组件、自动布局与组件库治理）、交互原型、可交付生产规范设计、跨职能开发协作。"
    }
  ],
  experience: [
    {
      role: "高级产品设计师",
      company: "成都雅信安科技服务有限公司",
      location: "中国 · 成都",
      period: "2021 年 4 月 — 至今",
      bullets: [
        "主导 Ignite 保险销售平台的端到端体验重构，服务东南亚市场的代理人网络，从获客、报价到出单的完整旅程。",
        "设计 AI 销售副驾驶：将报价-出单全流程嵌入 WhatsApp，融合结构化 UI 与对话式 AI。",
        "主导员工福利平台：面向保险方、HR 与员工三类角色的 SaaS 平台，按各角色真实工作方式定制界面。",
      ]
    },
    {
      role: "UI/UX 设计师",
      company: "招银网络科技有限公司",
      location: "中国 · 成都",
      period: "2019 年 12 月 — 2021 年 4 月",
      bullets: [
        "负责招商银行私有云控制台等企业级产品设计，将复杂内部需求转化为清晰、结构化的界面。",
        "专注于产品可用性与无障碍（WCAG）标准，确保数字银行布局清晰直观。",
        "从零搭建并治理集中式设计体系，以可复用组件优化设计-开发交付周期。"
      ]
    },
    {
      role: "UI/UX 设计师",
      company: "成都精为科技有限公司",
      location: "中国 · 成都",
      period: "2017 年 12 月 — 2019 年 12 月",
      bullets: [
        "为传统制造行业提供端到端产品设计咨询，定义初期 MVP 范围、交互原型与品牌识别体系。",
        "为客户建立以用户为中心的方法论，将模糊的商业假设转化为可触达的线框、高保真布局与功能规范文档。"
      ]
    },
    {
      role: "平面与 UI 设计师",
      company: "UNITEDSTACK(北京) 科技有限公司",
      location: "中国 · 北京",
      period: "2016 年 9 月 — 2017 年 10 月",
      bullets: [
        "为 Web 与移动产品线设计直观的用户界面，并建立一致的视觉识别体系。",
        "设计多样的数字触点与企业品牌资产，与市场团队协作以保持视觉一致性。"
      ]
    }
  ],
  education: [
    {
      degree: "风景园林学士",
      school: "北京林业大学",
      location: "中国 · 北京",
      period: "2012 年 9 月 — 2016 年 6 月",
      focus: "空间动力学、复杂环境系统、微尺度建筑、叙事性空间旅程。"
    }
  ]
};

export function getResume(locale: Locale): ResumeContent {
  return locale === "zh" ? resumeZh : resumeEn;
}
