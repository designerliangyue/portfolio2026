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
      "我是岳靓，一名拥有十年经验的高级产品设计师。我关注如何把复杂问题转化为清晰、易用且能够落地的产品体验，并负责从研究与产品定义，到交互设计、设计系统、交付与持续迭代的完整过程。",
    based: "所在地",
    basedValue: "成都· 接受调动",
    focus: "方向",
    focusValue: "系统架构 · AI · 金融科技",
    languages: "语言",
    languagesValue: "中 · 英",
    status: "状态",
    statusValue: "考虑新机会",
    heroStats: [
      { value: "10+", label: "年深耕东南亚、金融科技与 AI" },
      { value: "7", label: "个国家有上线作品" },
      { value: "3", label: "个精选案例" }
    ],
    workLabel: "精选作品 — 三个案例",
    workTitle: ["战略前瞻。", "跨文化规模。", "企业级深度。"],
    workSerif: ["跨文化规模。"],
    workLede:
      "三个项目展示了我在不同尺度下的工作方式：定义并上线 AI 销售产品，以本地语言研究重构区域保险平台，以及把私有云运维任务转译成企业级产品系统。",
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
      "我从模糊问题推进到交付：先明确证据边界与取舍，再让产品、工程围绕同一判断达成一致，最终形成可以上线的流程与系统。",
    aboutLink: "阅读完整背景 →"
  },
  about: {
    back: "← 返回首页",
    label: "关于",
    title: ["岳靓。", "一位", "跨越边界成长的高级设计师。"],
    titleSerif: "跨越边界成长的高级设计师",
    tagline: "我定义复杂产品问题，让证据与取舍清晰可见，并与远程产品、工程团队一起把体验推进到交付。",
    background: "背景",
    backgroundParagraphs: [
      "过去十年，我的工作横跨保险科技、银行、云计算与企业 SaaS。它们有一条共同主线：多角色、监管流程、区域差异或技术系统带来的复杂性，需要被转化为清晰但不过度简化的产品体验。",
      "我的职责覆盖完整过程：定义产品问题，区分直接研究与间接证据，梳理业务模型，再将判断转化为流程、原型、界面系统和可用于生产的交付。AI 销售副驾驶案例呈现了从模糊机会到三项 WhatsApp 流程上线的过程。",
      "远程协作不只是地点偏好，也是我的工作方法。我会把假设、责任、开放问题与交互逻辑显性化，让产品、工程与运营能够异步决策，并尽早提出挑战。",
      "我的第一专业是风景园林，它训练了我从系统、动线与长期环境理解设计。今天，我把同样的方法用于需要反复使用、并承受真实运营约束的数字产品。"
    ],
    languages: "语言",
    languagesValue: "英语（工作）· 中文（母语）",
    openTo: "协作方式",
    openToValue: "灵活协作 · 可沟通",
    focusAreas: "专注领域",
    focusAreasValue: "AI 体验 · 金融科技 · 设计系统",
    proof: "代表性证据",
    timeline: "职业经历 · 四个章节",
    timelineItems: [
      {
        period: "2021 — 2026",
        role: "高级产品设计师 · 雅信安",
        note: "AI 销售副驾驶、运营分析与覆盖东南亚的区域设计系统。"
      },
      {
        period: "2019 — 2021",
        role: "UI/UX 设计师 · 招商银行",
        note: "内部私有云平台——企业信息架构与符合 WCAG 的深色模式。"
      },
      {
        period: "2017 — 2019",
        role: "UI/UX 设计师 · 精为科技",
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
      "产品探索与证据整合",
      "AI 与对话式产品设计",
      "复杂流程与信息架构",
      "原型与生产交付",
      "设计系统与组件库",
      "远程跨职能协作"
    ]
  },
  footer: {
    connect: "联系我",
    title: "一起创造更好的产品体验",
    lede:
      "我正在寻找高级产品设计师机会，协作方式可以灵活沟通。拥有 10 年跨文化产品经验，深耕保险科技、银行与 AI 增强界面设计。",
    aboutLink: "阅读完整背景 →",
    copyright: (year: number) => `© ${year} 岳靓。使用 Figma + Next.js 设计与构建。`,
    updated: (date: string) => `更新于 ${date}`
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
    status: "状态",
    team: "团队",
    scope: "我的范围",
    constraints: "关键约束",
    quickNav: "案例导航",
    evidence: "交付与证据",
    overview: "概览",
    problem: "问题",
    approach: "我的方法",
    impact: "成果与反馈",
    impactTitle: "真正重要的数据——只展示经过验证、能支撑判断的结果。",
    impactNote:
      "这里优先呈现已验证的调研、访谈与交付信号，避免用未经证实的指标制造结果感。",
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
    "设计系统",
    "东南亚产品策略",
    "高级产品设计"
  ]
};
