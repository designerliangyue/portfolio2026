# 作品集网站 · 发布与日常维护指南

项目本地路径：**`/Users/yueliang/portfolio`**

这是一份 Next.js 14 静态站点，推荐用 **Vercel** 发布（免费、自动 HTTPS、改代码 push 后自动更新）。

---

## 一、本地保存与备份

### 项目就在你的 Mac 上

```
/Users/liangy/Documents/portfolio/
├── app/                 # 页面结构（一般不用改）
├── components/          # UI 组件
├── content/             # ★ 文案与案例数据（最常改）
│   ├── projects.ts      # 英文案例正文
│   ├── projects.zh.ts   # 中文案例正文
│   ├── resume.ts        # 在线简历正文（中英都在这）
│   ├── ai-copilot-interactive.ts  # AI 案例「贡献」模块文案
│   ├── i18n/en.ts       # 英文 UI 文案（首页、About、Footer、简历按钮）
│   ├── i18n/zh.ts       # 中文 UI 文案
│   ├── i18n/gallery-captions.ts   # 中文图片 caption / 对比标题
│   ├── images.json      # 图片文件名注册表
│   └── case-study-galleries.ts    # 每个 section 的图片布局、对比标题、视频
├── public/images/       # ★ 所有图片、视频、AI 案例示意图(SVG)
└── scripts/             # Notion 同步脚本（可选）
```

> 你现在主要**直接在 GitHub 网页上改**（仓库 `designerliangyue/portfolio2026` → 找到文件 → 铅笔图标 ✏️ 编辑 → Commit changes），保存后 Vercel 会自动重新部署，约 1–2 分钟上线。本地预览（下文）需要装 Node，可选。

### 建议备份方式（三选一或组合）

1. **Git + GitHub（推荐）**  
   每次改完 `git commit` + `git push`，历史版本可回滚，且 Vercel 可自动部署。

2. **Time Machine / iCloud**  
   把整个 `portfolio` 文件夹纳入备份。

3. **手动拷贝**  
   定期复制 `~/portfolio` 到 U 盘或网盘。

---

## 二、本地预览（改内容前必做）

在终端执行：

```bash
cd ~/portfolio
npm install          # 首次或 package.json 变更后
npm run dev
```

浏览器打开：**http://localhost:3000**

- 切语言：右上角 **EN / 中文**
- 改文件后保存，页面会自动刷新

生产环境预览（发布前检查）：

```bash
npm run build
npm start
```

打开 http://localhost:3000 检查与线上一致。

---

## 三、发布到互联网（Vercel · 推荐）

### 第一次发布

**前提：** 有 [GitHub](https://github.com) 账号和 [Vercel](https://vercel.com) 账号（可用 GitHub 登录）。

#### 步骤 A：把代码推到 GitHub

```bash
cd ~/portfolio
git init                                    # 若尚未初始化
git add .
git commit -m "Initial portfolio site"

# 在 GitHub 网页新建空仓库，例如 liang-portfolio，不要勾选 README
git branch -M main
git remote add origin git@github.com:你的用户名/liang-portfolio.git
git push -u origin main
```

#### 步骤 B：在 Vercel 导入项目

1. 打开 https://vercel.com/new  
2. **Import Git Repository** → 选择 `liang-portfolio`  
3. Framework Preset 会自动识别为 **Next.js**，无需改配置  
4. 点击 **Deploy**  
5. 约 1–2 分钟后得到网址，形如：`https://liang-portfolio.vercel.app`

#### 步骤 C：绑定自定义域名（可选）

Vercel 项目 → **Settings → Domains** → 添加例如 `liangyue.design`  
按提示在域名 DNS 添加 CNAME 记录。

---

### 以后每次更新网站

```bash
cd ~/portfolio
# 1. 改文案 / 换图片（见第四节）
# 2. 本地预览
npm run dev

# 3. 确认无误后提交并推送
git add .
git commit -m "Update copy and images for Ignite case"
git push
```

**Vercel 会自动重新构建并上线**，通常 1–3 分钟。在 Vercel 控制台可查看部署日志。

---

## 四、改文案：改哪个文件

> **核心原则：英文与中文是两份平行文件，要一起改。** 只改引号 `"..."` 里的文字，别动引号、逗号、字段名。文字里若带英文撇号/引号，用中文全角或弯引号（`'` `"`），避免和代码引号打架。

| 要改的内容 | 英文 | 中文 |
|-----------|------|------|
| 首页 Hero、002/003 区块、Footer、导航 | `content/i18n/en.ts` | `content/i18n/zh.ts` |
| About 页全文 | `en.ts` 的 `about` 字段 | `zh.ts` 的 `about` |
| **在线简历（/resume 页）正文** | `content/resume.ts` 的 `resumeEn` | `content/resume.ts` 的 `resumeZh` |
| 简历页按钮/小标题（Back、Save as PDF、Summary…）| `en.ts` 的 `resume` | `zh.ts` 的 `resume` |
| 案例标题、正文、概览、成果 | `content/projects.ts` | `content/projects.zh.ts` |
| 案例章节数据（如 Ignite 迭代的 60天/300+/73.5%/67）| `projects.ts` 对应 section 的 `stats` | `projects.zh.ts` |
| 案例图下方 caption | `content/case-study-galleries.ts` | `content/i18n/gallery-captions.ts`（`galleryCaptionsZh`，按图片 id）|
| 改版前后对比的**标题**与 before/after 标签 | `case-study-galleries.ts`（compare 块的 `title` / `oldLabel` / `newLabel`）| `gallery-captions.ts`（`compareTitlesZh` / `compareLabelsZh`，按 `oldId`）|
| AI 案例「贡献」模块文案（价值标语 + 三个角色）| `content/ai-copilot-interactive.ts` | 同文件（目前仅英文）|
| AI 案例四张示意图（架构 / Why / Market / 用户流程）里的文字 | 文字已**烧进 SVG**：`public/images/ai-copilot/*.svg` | 中英共用同一张图，要改需编辑 SVG（建议找我）|

### 案例结构示例（`projects.ts`）

每个项目是一个对象，关键字段：

- `title` / `subtitle` / `summary` — 列表与头部
- `hero` / `problem` / `approach` / `outcome` — 案例叙事
- `metrics` — 数据指标（`placeholder: true` 表示待填真实数据，显示成 `+__%`）
- `stats` — 章节内的大数字（可选，仅部分章节有）
- `sections` — 各章节 `kicker`（需与 `case-study-galleries.ts` 的 key 对应）

中文 section 的 `kickerKey` 指向英文 key，图库才能对齐，例如：

```ts
{ kicker: "研究", kickerKey: "Research", title: "...", body: [...] }
```

> **案例展示顺序**按 `index` 字段排序（`"01"` 在前）。当前顺序：AI 销售副驾驶 `01` → Ignite `02` → 招行私有云 `03`。改顺序就改各项目的 `index`，并相应调整 `next` 字段（指向下一个案例的 slug）。中英两份文件都要改。

---

## 五、换图片 / 视频：改哪个文件夹

**原则：文件名与 `content/images.json` 里登记的一致，扩展名 `.png` / `.jpg` / `.webp` 均可。**

```
public/images/
├── ignite/           # 案例：Ignite
├── ai-copilot/       # 案例：AI 销售副驾驶（含视频与示意图）
└── cmb-cloud/        # 案例：招行私有云
```

| 用途 | 路径 | 说明 |
|------|------|------|
| 首页卡片 + 案例头图 | `{slug}/cover.png` | slug = ignite / ai-copilot / cmb-cloud |
| 案例内插图 | `{slug}/xxx.png` | 文件名见 `content/images.json` 完整列表 |
| AI 案例演示视频 | `ai-copilot/performance-inquiry.mp4`、`marketing-assets.mp4`、`conversational-quoting.mp4` | 见下方「视频」说明 |
| AI 案例四张示意图 | `ai-copilot/architecture.svg` 等 | **手绘 SVG，非截图**，见下方说明 |

**只换图、不改名：** 直接覆盖原文件 → `git push` → 约 1–2 分钟自动上线。换图后浏览器硬刷新 `Cmd+Shift+R` 才看得到新图（避免缓存）。

**新增一张图：**  
1. 文件放进对应文件夹（文件名用小写 + 连字符，别留空格）  
2. 在 `content/images.json` 注册 id → 路径  
3. 在 `content/case-study-galleries.ts` 对应 section 引用该 id  

**视频（AI 案例）：**  
- 用 `.mp4`（H.264 + AAC 编码；手机/电脑录屏导出基本都是），单个建议 **< 50MB**（GitHub 超过 50MB 会告警，超过 100MB 直接拒绝）。  
- 换视频**保持同名直接覆盖**即可，无需改代码。新增视频需在 `case-study-galleries.ts` 里加一个 `video` 块（`src` / `caption` / `badge`），建议找我。

**AI 案例的四张示意图（架构 / Why / Market / 用户流程）：**  
这些是按网站风格手工绘制的 **SVG**（`public/images/ai-copilot/*.svg`），文字直接画在图里、中英共用。**不能像普通截图那样替换**——要改文字或布局得编辑 SVG 源码，建议直接找我改。

---

## 六、从 Notion 同步高清图（CMB 等）

若 Notion MCP 可用：

```bash
# 1. 用 Cursor Notion MCP 执行 notion-fetch，保存到：
#    scripts/notion-dumps/cmb-cloud.json

# 2. 下载原图（URL 约 1 小时有效，过期需重新 fetch）
cd ~/portfolio
python3 scripts/download-cmb-images.py
```

---

## 七、常见问题

| 问题 | 处理 |
|------|------|
| 改了图片没变化 | 硬刷新 `Cmd+Shift+R`；或改文件名逼缓存更新 |
| 中文页面样式不对 | 确认右上角切到「中文」；语言存在 localStorage `portfolio-locale` |
| 构建失败 | 终端运行 `npm run build` 看报错；通常是 TS 拼写错误 |
| 某张图不显示 | 检查 `images.json` 的 id 与文件名是否一致 |

---

## 八、命令速查

```bash
cd ~/portfolio
npm run dev      # 本地开发
npm run build    # 生产构建检查
npm run lint     # 代码规范检查

git status       # 查看改了哪些文件
git diff         # 查看具体改动
git add . && git commit -m "说明" && git push   # 提交并触发 Vercel 部署
```

---

## 九、联系与域名

- 当前线上地址：`https://liangyueportfolio2026.vercel.app`
- 邮箱链接（Footer 与简历页）：`designer.liangyue@gmail.com`；LinkedIn：`linkedin.com/in/liang-y`
- 站点 metadata 域名：`https://liangyue.vercel.app`（`app/layout.tsx` 的 `metadataBase`）  
  绑定自定义域名后，在 Vercel Domains 添加，并把 `metadataBase` 改成一致。
- ⚠️ `*.vercel.app` 在中国大陆打不开；要国内可访问需自定义域名 + 国内 CDN + 备案（见之前讨论，需要时找我）。

如有新案例要加入第四个项目，需要同时改 `projects.ts`、`images.json`、图库配置和 `generateStaticParams` 路由——建议开新对话说明需求。
