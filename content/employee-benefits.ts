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
  evidenceLabel: string;
  evidenceTitle: string;
  evidenceItems: string[];
  journeyLabel: string;
  journeyTitle: string;
  journeySteps: { role: string; action: string; handoff: string }[];
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
    { label: "Scope", value: "Web SaaS · Multi-stakeholder" },
    { label: "Status", value: "Condensed case · Product design" }
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
    "Synthesised stakeholder needs across insurers, HR administrators, and employees.",
    "Created user flows and wireframes to balance simplicity for employees with advanced functionality for HR and insurers.",
    "Created interactive prototypes for the core components and cross-role journey."
  ],
  evidenceLabel: "Design artifacts",
  evidenceTitle: "From stakeholder model to interactive prototype",
  evidenceItems: [
    "Stakeholder models connected the needs of insurers, HR administrators, and employees across one benefit journey.",
    "A shared feature map and role-specific flows aligned the three product surfaces before detailed design.",
    "Wireframes and interactive prototypes translated the structure into reviewable end-to-end experiences."
  ],
  journeyLabel: "Cross-role journey",
  journeyTitle: "One benefit journey, with ownership passed between three surfaces",
  journeySteps: [
    { role: "Insurer / broker", action: "Configure plans, eligibility, and service rules", handoff: "Publishes the benefit structure HR can administer" },
    { role: "HR administrator", action: "Manage employee and family enrolment", handoff: "Makes the correct coverage available to each employee" },
    { role: "Employee", action: "Use benefits and follow claim status", handoff: "Creates service and claim information visible to the responsible teams" }
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
    "The design connected three working contexts through one benefits journey: insurers configured and monitored the service, HR managed enrolment and families, and employees accessed benefits and claim status. The aligned product structure and interactive prototype gave the three surfaces one coherent experience foundation.",
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
    { label: "范围", value: "Web SaaS · 多方角色" },
    { label: "状态", value: "精简案例 · 产品设计" }
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
    "整合保险方、HR 管理员与员工三类角色的需求。",
    "绘制用户流程与线框，在员工端的简洁与 HR／保险端的高级功能之间取得平衡。",
    "为核心组件与跨角色旅程制作可交互原型。"
  ],
  evidenceLabel: "设计产出",
  evidenceTitle: "从角色模型到可交互原型",
  evidenceItems: [
    "角色模型把保险方、HR 管理员与员工的需求连接到同一条福利旅程中。",
    "共享功能地图与分角色流程在详细设计前对齐了三个产品界面的结构。",
    "线框与可交互原型将产品结构转化为可以评审的端到端体验。"
  ],
  journeyLabel: "跨角色旅程",
  journeyTitle: "一条福利旅程，在三个界面之间传递责任",
  journeySteps: [
    { role: "保险方／经纪", action: "配置计划、资格与服务规则", handoff: "发布可由 HR 管理的福利结构" },
    { role: "HR 管理员", action: "管理员工与家属参保", handoff: "让每位员工获得正确的保障范围" },
    { role: "员工", action: "使用福利并跟进理赔状态", handoff: "形成可供责任团队处理的服务与理赔信息" }
  ],
  usersLabel: "理解用户",
  usersTitle: "三类用户，一套完整的福利体验",
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
      points: ["高密度数据与高效操作", "减少手动录入错误"],
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
    "设计通过一条福利旅程连接三种工作场景：保险方配置并监控服务，HR 管理参保与家属，员工使用福利并查看理赔状态。完成对齐的产品结构与可交互原型，为三个产品界面建立了一致的体验基础。",
  backToWork: "← 返回全部作品"
};

export function getEmployeeBenefits(locale: Locale): EBContent {
  return locale === "zh" ? zh : en;
}
