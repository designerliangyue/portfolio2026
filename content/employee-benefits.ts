import type { Locale } from "@/lib/i18n/types";

export type EBPanel = { title: string; points: string[]; image: string };

export type EBContent = {
  back: string;
  badge: string;
  title: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  coverImage: string;
  overviewLabel: string;
  overview: string;
  overviewImage: string;
  roleLabel: string;
  roleItems: string[];
  respLabel: string;
  respItems: string[];
  usersLabel: string;
  usersTitle: string;
  usersIntro: string;
  pillarsImage: string;
  solutionsLabel: string;
  solutionsTitle: string;
  featureTitle: string;
  featureNote: string;
  featureImage: string;
  panels: EBPanel[];
  closingLabel: string;
  closingText: string;
  backToWork: string;
};

const IMG = "/images/employee-benefits";

const en: EBContent = {
  back: "← All work",
  badge: "Enterprise SaaS · Insurtech · Web",
  title: "Employee Benefits Platform",
  subtitle: "One benefits system, three stakeholders, three purpose-built surfaces.",
  meta: [
    { label: "Period", value: "2022" },
    { label: "Role", value: "UX Researcher · Product Designer" },
    { label: "Scope", value: "Web SaaS · Multi-stakeholder" }
  ],
  coverImage: `${IMG}/cover.webp`,
  overviewLabel: "Overview",
  overview:
    "The Employee Benefits Management System is a digital platform that streamlines the administration and utilization of employee insurance benefits. It serves three key stakeholders — insurance providers, HR administrators, and employees — giving each a seamless, transparent, and efficient way to manage health and wellness benefits.",
  overviewImage: `${IMG}/overview.webp`,
  roleLabel: "My role",
  roleItems: ["UX Researcher", "Product Designer"],
  respLabel: "Responsibilities",
  respItems: [
    "Conducted user interviews with all three stakeholder groups to identify pain points.",
    "Created user flows and wireframes to balance simplicity for employees with advanced functionality for HR and insurers.",
    "Prototyped and tested interactive components."
  ],
  usersLabel: "Understand the users",
  usersTitle: "Three audiences, one shared benefit journey",
  usersIntro:
    "With personas as a guide, I translated the needs of insurers, HR admins, and employees into three core experience pillars — each surface optimized for how that group actually works.",
  pillarsImage: `${IMG}/pillars.webp`,
  solutionsLabel: "Design solutions",
  solutionsTitle: "From a shared feature map to three tailored surfaces",
  featureTitle: "Feature list",
  featureNote:
    "A structural feature list helped the team understand the end-to-end flow and align before moving into design.",
  featureImage: `${IMG}/feature-list.webp`,
  panels: [
    {
      title: "Insurer (Broker) Panel",
      points: [
        "Prioritize high-density data with quick actionability",
        "Reduce manual entry errors"
      ],
      image: `${IMG}/insurer.webp`
    },
    {
      title: "HR EB Panel",
      points: [
        "Minimize cognitive load for multitasking admins",
        "Streamline family enrollment"
      ],
      image: `${IMG}/hr.webp`
    },
    {
      title: "Employee Portal",
      points: ["Mobile-first, gesture-friendly", "Provide instant claim status"],
      image: `${IMG}/employee.webp`
    }
  ],
  closingLabel: "In short",
  closingText:
    "A single benefits system that respects three very different working contexts — dense actionability for insurers, low-friction administration for HR, and a calm mobile-first experience for employees.",
  backToWork: "← Back to all work"
};

const zh: EBContent = {
  back: "← 全部作品",
  badge: "企业 SaaS · 保险科技 · Web",
  title: "员工福利平台",
  subtitle: "一套福利系统，三类角色，三个专属界面。",
  meta: [
    { label: "周期", value: "2022" },
    { label: "角色", value: "用户研究 · 产品设计" },
    { label: "范围", value: "Web SaaS · 多方角色" }
  ],
  coverImage: `${IMG}/cover.webp`,
  overviewLabel: "概览",
  overview:
    "员工福利管理系统是一套帮助管理和使用员工保险福利的数字平台。它服务三类关键角色——保险方、HR 管理员与员工——为每一方提供顺畅、透明、高效的健康与福利管理方式。",
  overviewImage: `${IMG}/overview.webp`,
  roleLabel: "我的角色",
  roleItems: ["用户研究", "产品设计"],
  respLabel: "职责",
  respItems: [
    "对三类角色分别进行用户访谈，识别各自的痛点。",
    "绘制用户流程与线框，在员工端的简洁与 HR／保险端的高级功能之间取得平衡。",
    "制作可交互原型并进行测试。"
  ],
  usersLabel: "理解用户",
  usersTitle: "三类受众，一条共同的福利旅程",
  usersIntro:
    "以用户画像为指引，我将保险方、HR 管理员与员工的需求提炼为三大核心体验支柱——每个界面都针对该角色真实的工作方式进行优化。",
  pillarsImage: `${IMG}/pillars.webp`,
  solutionsLabel: "设计方案",
  solutionsTitle: "从共享的功能地图，到三个量身定制的界面",
  featureTitle: "功能清单",
  featureNote: "结构化的功能清单帮助团队理解端到端的流程，并在进入设计前达成共识。",
  featureImage: `${IMG}/feature-list.webp`,
  panels: [
    {
      title: "保险方（经纪）面板",
      points: ["高密度数据，快速可操作", "减少手动录入错误"],
      image: `${IMG}/insurer.webp`
    },
    {
      title: "HR 福利面板",
      points: ["降低多任务管理员的认知负荷", "简化家属参保流程"],
      image: `${IMG}/hr.webp`
    },
    {
      title: "员工端",
      points: ["移动优先，手势友好", "即时查看理赔状态"],
      image: `${IMG}/employee.webp`
    }
  ],
  closingLabel: "一句话总结",
  closingText:
    "一套尊重三种截然不同工作情境的福利系统——为保险方提供密集可操作的数据，为 HR 提供低摩擦的管理，为员工提供从容的移动优先体验。",
  backToWork: "← 返回全部作品"
};

export function getEmployeeBenefits(locale: Locale): EBContent {
  return locale === "zh" ? zh : en;
}
