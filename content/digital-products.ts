import type { Locale } from "@/lib/i18n/types";

export type DPProject = { title: string; blurb: string; images: string[] };
export type DPCategory = { label: string; projects: DPProject[] };

export type DPContent = {
  back: string;
  badge: string;
  title: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  intro: string;
  categories: DPCategory[];
  closingLabel: string;
  closingText: string;
  backToWork: string;
};

const IMG = "/images/digital-products";

const en: DPContent = {
  back: "← All work",
  badge: "Mobile · Dashboards · Web · 2015–2019",
  title: "Digital Products Before 2020",
  subtitle: "An early-career body of work — mobile apps, enterprise dashboards, and websites.",
  meta: [
    { label: "Period", value: "2015 — 2019" },
    { label: "Role", value: "UI / UX Designer" },
    { label: "Scope", value: "Mobile · Web · Enterprise" }
  ],
  intro:
    "Before specializing in insurtech and AI, I shipped across a wide range of product types — from consumer mobile apps to dense enterprise supervision systems. A selection is grouped below by surface.",
  categories: [
    {
      label: "Mobile Apps",
      projects: [
        {
          title: "Mini-Program in WeChat",
          blurb:
            "A mini-program providing services to apartment tenants while promoting the brand's value.",
          images: [`${IMG}/wechat-1.webp`, `${IMG}/wechat-2.webp`, `${IMG}/wechat-3.webp`, `${IMG}/wechat-4.webp`]
        },
        {
          title: "Gaming App for Ecological Equipment",
          blurb:
            "Tracks and syncs the status of intelligent vegetable-planting equipment. Aimed at teenagers and children, with a gamification-oriented style.",
          images: [`${IMG}/gaming-1.webp`, `${IMG}/gaming-2.webp`]
        },
        {
          title: "Community App for Pet Owners",
          blurb:
            "A pet community app (2015) where users share and interact through photos and videos.",
          images: [`${IMG}/pet-1.webp`, `${IMG}/pet-2.webp`]
        }
      ]
    },
    {
      label: "Dashboards",
      projects: [
        {
          title: "Engineering Supervision Platform",
          blurb:
            "Used by a construction unit in Sichuan, China — real-time monitoring of engineering projects plus personnel labor-system management.",
          images: [`${IMG}/engineering-1.webp`, `${IMG}/engineering-2.webp`, `${IMG}/engineering-3.webp`, `${IMG}/engineering-4.webp`]
        },
        {
          title: "Enterprise Supervision System",
          blurb:
            "A comprehensive business-management platform for an industrial company in Zhejiang, China — HR, R&D management, laboratory systems, and more.",
          images: [`${IMG}/enterprise-1.webp`, `${IMG}/enterprise-2.webp`]
        }
      ]
    },
    {
      label: "Websites",
      projects: [
        {
          title: "Enterprise Internal Web",
          blurb:
            "Interactive social-networking sites for the internal employees of China Petroleum.",
          images: [`${IMG}/internal-web-1.webp`, `${IMG}/internal-web-2.webp`]
        },
        {
          title: "Official Website",
          blurb: "The official website of a construction company in Beijing, China.",
          images: [`${IMG}/official-web-1.webp`, `${IMG}/official-web-2.webp`]
        }
      ]
    }
  ],
  closingLabel: "In short",
  closingText:
    "A broad foundation across consumer and enterprise surfaces — the range that later sharpened into focused, research-led product design.",
  backToWork: "← Back to all work"
};

const zh: DPContent = {
  back: "← 全部作品",
  badge: "移动 · 后台 · Web · 2015–2019",
  title: "2020 年前的数字产品",
  subtitle: "职业早期的作品集——移动应用、企业后台与网站。",
  meta: [
    { label: "周期", value: "2015 — 2019" },
    { label: "角色", value: "UI / UX 设计师" },
    { label: "范围", value: "移动 · Web · 企业" }
  ],
  intro:
    "在专注保险科技与 AI 之前，我横跨了广泛的产品类型——从面向消费者的移动应用到密集的企业监管系统。以下按界面类型分组精选。",
  categories: [
    {
      label: "移动应用",
      projects: [
        {
          title: "微信小程序",
          blurb: "为公寓租户提供各类服务，同时传递品牌价值的小程序。",
          images: [`${IMG}/wechat-1.webp`, `${IMG}/wechat-2.webp`, `${IMG}/wechat-3.webp`, `${IMG}/wechat-4.webp`]
        },
        {
          title: "生态设备游戏化 App",
          blurb:
            "追踪并同步智能种菜设备的状态。面向青少年与儿童，采用游戏化的设计风格。",
          images: [`${IMG}/gaming-1.webp`, `${IMG}/gaming-2.webp`]
        },
        {
          title: "宠物主人社区 App",
          blurb: "2015 年发布的宠物社区 App，用户通过照片和视频分享互动。",
          images: [`${IMG}/pet-1.webp`, `${IMG}/pet-2.webp`]
        }
      ]
    },
    {
      label: "数据后台",
      projects: [
        {
          title: "工程监管平台",
          blurb:
            "由中国四川的施工单位使用——工程项目实时监控，以及人员劳务系统管理。",
          images: [`${IMG}/engineering-1.webp`, `${IMG}/engineering-2.webp`, `${IMG}/engineering-3.webp`, `${IMG}/engineering-4.webp`]
        },
        {
          title: "企业监管系统",
          blurb:
            "为中国浙江某工业企业打造的综合业务管理平台——涵盖 HR、研发管理、实验室系统等。",
          images: [`${IMG}/enterprise-1.webp`, `${IMG}/enterprise-2.webp`]
        }
      ]
    },
    {
      label: "网站",
      projects: [
        {
          title: "企业内部网站",
          blurb: "为中国石油内部员工打造的互动式社交网站。",
          images: [`${IMG}/internal-web-1.webp`, `${IMG}/internal-web-2.webp`]
        },
        {
          title: "官方网站",
          blurb: "中国北京某建筑公司的官方网站。",
          images: [`${IMG}/official-web-1.webp`, `${IMG}/official-web-2.webp`]
        }
      ]
    }
  ],
  closingLabel: "一句话总结",
  closingText:
    "横跨消费级与企业级界面的广阔基础——正是这份广度，后来收敛为专注、以研究为主导的产品设计。",
  backToWork: "← 返回全部作品"
};

export function getDigitalProducts(locale: Locale): DPContent {
  return locale === "zh" ? zh : en;
}
