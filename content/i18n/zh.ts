import type { Dictionary } from "./en";

export const zh: Dictionary = {
  name: "岳靓 · 产品设计作品集",
  nav: {
    work: "作品",
    about: "关于",
    contact: "联系"
  },
  home: {
    heroLabel: "高级产品设计师 · 远程优先",
    heroTitle: [
      "在文化与技术的",
      "交界处，",
      "设计可靠的产品。"
    ],
    heroSerif: ["文化", "技术"],
    lede:
      "我是岳靓。过去十年，我为东南亚用户构建产品，主导企业金融科技设计体系，近期则为保险从业者塑造 AI 体验。本网站精选三个案例，面向高级产品设计师岗位。",
    based: "所在地",
    basedValue: "远程优先",
    focus: "方向",
    focusValue: "产品 · AI · 金融科技",
    languages: "语言",
    languagesValue: "中 · 英",
    status: "状态",
    statusValue: "开放新机会",
    workLabel: "精选作品 — 三个案例",
    workTitle: ["跨文化规模。", "战略前瞻。", "企业级深度。"],
    workSerif: ["战略前瞻。"],
    workLede:
      "三个项目，一条贯穿主线：一个需要我先定义产品、再着手设计的 AI 副驾驶——根植于四年的东南亚跨文化研究，并在中国大型银行之一中以企业级深度得到验证。",
    aboutLabel: "关于",
    aboutTitle: [
      "一位以结果为导向的设计师——在可靠性与",
      "创新",
      "之间取得平衡，扎根于",
      "用户研究",
      "，并在",
      "真实约束",
      "中不断打磨。"
    ],
    aboutLede:
      "我的工作处于跨文化研究、企业复杂性与 AI 开辟的新设计空间交汇处。我重视证据、工艺，以及人们真正能长期使用的交付物。",
    aboutLink: "阅读完整背景 →"
  },
  about: {
    back: "← 返回首页",
    label: "关于",
    title: ["岳靓。", "一位", "跨越边界成长的高级设计师。"],
    titleSerif: "跨越边界成长的高级设计师",
    tagline: "在可靠性与创新之间取得平衡——以数据与真实可用性为根基的结果导向设计师。",
    background: "背景",
    backgroundParagraphs: [
      "我的起点是风景园林——在那里我学会了设计能激发连接、凝聚人的空间。今天，我将同样的热情带入数字产品设计，打造直观、有参与感且有意义的产品体验。过去 10 年，我横跨保险科技、云计算、银行与服务行业，为真实用户解决真实问题。",
      "对我而言，设计不只是像素与原型——更是理解人，并通过以用户为中心的方案讲述他们的故事。",
      "在 AI 时代，我相信设计在确保技术保持以人为本、合乎伦理且可访问方面至关重要。我参与 AI 增强界面设计，用数据构建直观、包容、赋能用户的体验。",
      "我正在寻找高级产品设计师机会，更倾向全远程协作——希望加入一个让证据、工艺与关怀同席共议的团队。"
    ],
    languages: "语言",
    languagesValue: "英语（工作）· 中文（母语）",
    openTo: "接受",
    openToValue: "全远程 · 混合办公",
    focusAreas: "专注领域",
    focusAreasValue: "AI 体验 · 金融科技 · 设计体系",
    resume: "获取我的简历",
    resumeLink: "打开在线简历 →",
    resumeHref: "/resume",
    timeline: "职业经历 · 四个章节",
    timelineItems: [
      {
        period: "2021 — 至今",
        role: "高级产品设计师 · Igloo Insurance",
        note: "AI 销售副驾驶、运营分析与覆盖东南亚的区域设计体系。"
      },
      {
        period: "2019 — 2021",
        role: "UI/UX 设计师 · 招商银行",
        note: "内部私有云平台——企业信息架构与符合 WCAG 的深色模式。"
      },
      {
        period: "2017 — 2019",
        role: "UI/UX 设计师 · JINGWEI Technology",
        note: "面向制造业的端到端产品咨询——从 MVP 范围到生产规范。"
      },
      {
        period: "2016 — 2017",
        role: "平面与 UI 设计师 · UnitedStack",
        note: "横跨 Web 与移动产品线的 UI 与视觉识别体系。"
      }
    ],
    education: "教育",
    educationItems: [
      {
        degree: "风景园林学士",
        school: "北京林业大学",
        detail: "北京 · 2016 年 6 月毕业"
      }
    ],
    skills: "技能",
    skillItems: [
      "用户研究与行为分析",
      "AI 增强设计解决方案",
      "数据驱动设计与 A/B 测试",
      "线框与原型",
      "设计体系与组件库",
      "协作工具：Figma · Notion · Jira · Cursor"
    ]
  },
  resume: {
    back: "← 返回",
    print: "存为 PDF",
    summaryHeading: "概述",
    coreSkills: "核心技能",
    experience: "工作经历",
    education: "教育",
    contact: "联系方式",
    availability: "远程优先 · 接受外派",
    focus: "方向"
  },
  footer: {
    connect: "联系我",
    title: "一起设计下一步",
    lede:
      "我正在寻找高级产品设计师机会，更倾向全远程工作。拥有 10 年跨文化产品经验，深耕保险科技、银行与 AI 增强界面设计。",
    aboutLink: "阅读完整背景 →",
    copyright: (year: number) => `© ${year} 岳靓。使用 Figma + Next.js 设计与构建。`,
    updated: (date: string) => `精选作品 — 更新于 ${date}`
  },
  projectCard: {
    role: "角色",
    period: "周期",
    market: "市场",
    readCase: "阅读案例 →"
  },
  caseStudy: {
    allWork: "← 全部作品",
    period: "周期",
    role: "角色",
    market: "市场",
    overview: "概览",
    problem: "问题",
    approach: "我的方法",
    impact: "影响与信号",
    impactTitle: "真正重要的数字——有则写实，无则坦诚。",
    impactNote:
      "占位数值（如 +__%）标记待填入的已验证上线数据——刻意保留，以体现对证据而非虚荣指标的关注。",
    crossCultural: "跨文化设计决策",
    outcome: "成果",
    nextCase: "下一个案例",
    endOfWork: "精选作品结束",
    backToWork: "← 返回全部作品"
  },
  marquee: [
    "保险科技",
    "AI 体验",
    "企业银行",
    "跨文化研究",
    "设计体系",
    "东南亚移动优先",
    "高级产品设计"
  ]
};
