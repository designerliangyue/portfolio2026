import type { Locale } from "@/lib/i18n/types";

export type MoreWorkItem = {
  slug: string;
  title: string;
  meta: string;
  blurb: string;
  tags: string[];
  image: string;
  href: string;
};

export type MoreWorkContent = {
  label: string;
  title: string;
  lede: string;
  cta: string;
  items: MoreWorkItem[];
};

const EB_HREF = "/work/employee-benefits";
const DP_HREF = "/work/digital-products";

const en: MoreWorkContent = {
  label: "More work",
  title: "Further projects, in brief",
  lede: "Selected earlier work shown at a glance — fuller write-ups available on request.",
  cta: "View case",
  items: [
    {
      slug: "employee-benefits",
      title: "Employee Benefits Platform",
      meta: "2022 · UX Research · Product Design",
      blurb:
        "A SaaS platform for administering employee insurance benefits across three stakeholders — insurers, HR admins, and employees — each given a purpose-built surface tuned to how they actually work.",
      tags: ["UX Research", "Enterprise SaaS", "Multi-stakeholder", "Web"],
      image: "/images/employee-benefits/cover.webp",
      href: EB_HREF
    },
    {
      slug: "digital-products",
      title: "Digital Products Before 2020",
      meta: "2015 — 2019 · UI / UX Designer",
      blurb:
        "An early-career body of work across mobile apps, enterprise dashboards, and websites — the breadth that later sharpened into focused, research-led product design.",
      tags: ["Mobile", "Dashboards", "Web", "Enterprise"],
      image: "/images/digital-products/engineering-1.webp",
      href: DP_HREF
    }
  ]
};

const zh: MoreWorkContent = {
  label: "更多作品",
  title: "其他项目一览",
  lede: "精选早期作品概览——更完整的记录可应邀提供。",
  cta: "查看案例",
  items: [
    {
      slug: "employee-benefits",
      title: "员工福利平台",
      meta: "2022 · 用户研究 · 产品设计",
      blurb:
        "一套管理员工保险福利的 SaaS 平台，服务保险方、HR 管理员与员工三类角色，并按各自真实的工作方式为每一方打造专属界面。",
      tags: ["用户研究", "企业 SaaS", "多方角色", "Web"],
      image: "/images/employee-benefits/cover.webp",
      href: EB_HREF
    },
    {
      slug: "digital-products",
      title: "2020 年前的数字产品",
      meta: "2015 — 2019 · UI / UX 设计师",
      blurb:
        "职业早期横跨移动应用、企业后台与网站的作品——正是这份广度，后来收敛为专注、以研究为主导的产品设计。",
      tags: ["移动", "数据后台", "Web", "企业"],
      image: "/images/digital-products/engineering-1.webp",
      href: DP_HREF
    }
  ]
};

export function getMoreWork(locale: Locale): MoreWorkContent {
  return locale === "zh" ? zh : en;
}
