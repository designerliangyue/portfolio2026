# 作品集网站 · 发布与日常维护指南

项目本地路径：**`/Users/yueliang/portfolio`**

这是一份 Next.js 14 静态站点，推荐用 **Vercel** 发布（免费、自动 HTTPS、改代码 push 后自动更新）。

---

## 一、本地保存与备份

### 项目就在你的 Mac 上

```
/Users/yueliang/portfolio/
├── app/                 # 页面结构（一般不用改）
├── components/          # UI 组件
├── content/             # ★ 文案与案例数据（最常改）
│   ├── projects.ts      # 英文案例正文
│   ├── projects.zh.ts   # 中文案例正文
│   ├── i18n/en.ts       # 英文 UI 文案（首页、About、Footer）
│   ├── i18n/zh.ts       # 中文 UI 文案
│   ├── images.json      # 图片文件名注册表
│   └── case-study-galleries.ts  # 每个 section 的图片布局与标题
├── public/images/       # ★ 所有图片文件
└── scripts/             # Notion 同步脚本（可选）
```

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

| 要改的内容 | 英文 | 中文 |
|-----------|------|------|
| 首页 Hero、002/003 区块、Footer | `content/i18n/en.ts` | `content/i18n/zh.ts` |
| About 页全文 | 同上 `about` 字段 | 同上 |
| 案例标题、正文、指标、章节 | `content/projects.ts` | `content/projects.zh.ts` |
| 案例图下方 caption | `content/case-study-galleries.ts` | `content/i18n/gallery-captions.ts` |
| AI 案例交互模块文案 | `content/ai-copilot-*.ts` | 部分在组件内，需单独改 |

### 案例结构示例（`projects.ts`）

每个项目是一个对象，关键字段：

- `title` / `subtitle` / `summary` — 列表与头部
- `hero` / `problem` / `approach` / `outcome` — 案例叙事
- `metrics` — 数据指标（`placeholder: true` 表示待填真实数据）
- `sections` — 各章节 `kicker`（需与 `case-study-galleries.ts` 的 key 对应）

中文 section 的 `kickerKey` 指向英文 key，图库才能对齐，例如：

```ts
{ kicker: "研究", kickerKey: "Research", title: "...", body: [...] }
```

---

## 五、换图片：改哪个文件夹

**原则：文件名与 `content/images.json` 一致，扩展名 `.png` / `.jpg` / `.webp` 均可。**

```
public/images/
├── ignite/           # 案例 01
├── ai-copilot/       # 案例 02
└── cmb-cloud/        # 案例 03
```

| 用途 | 路径 | 说明 |
|------|------|------|
| 首页卡片 + 案例头图 | `{slug}/cover.png` | slug = ignite / ai-copilot / cmb-cloud |
| 案例内插图 | `{slug}/dashboard.png` 等 | 见 `public/images/README.md` 完整列表 |

**只换图、不改名：** 直接覆盖原文件 → `git push` → 自动上线。

**新增一张图：**  
1. 文件放进对应文件夹  
2. 在 `content/images.json` 注册 id  
3. 在 `content/case-study-galleries.ts` 对应 section 引用  

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

- 邮箱链接在 Footer：`designer.liangyue@gmail.com`
- 站点 metadata 域名占位：`https://liangyue.design`（`app/layout.tsx` 的 `metadataBase`）  
  绑定真实域名后可在 Vercel Domains 与 `metadataBase` 保持一致。

如有新案例要加入第四个项目，需要同时改 `projects.ts`、`images.json`、图库配置和 `generateStaticParams` 路由——建议开新对话说明需求。
