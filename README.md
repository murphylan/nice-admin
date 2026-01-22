# Nice Admin

一个现代化的**企业级 SaaS 产品**管理后台系统，基于 Next.js 16 构建。

设计灵感来自 **Databricks** 和 **Atlassian Design System**，采用专业、现代的企业级 UI 风格。

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)

## ✨ 特性

### 核心技术栈

- 🚀 **Next.js 16** - 最新的 React 框架，支持 App Router 和 Server Actions
- 🔐 **NextAuth.js** - 完整的身份认证解决方案
- 🎨 **Tailwind CSS v4** - 原子化 CSS 框架
- 🧩 **Shadcn-ui** - 企业级定制 UI 组件库
- 📊 **TanStack Table** - 强大的表格解决方案
- 🔍 **TanStack Query** - 数据获取和缓存管理
- 📝 **Formik + Zod** - 表单处理和验证
- 🗂️ **Zustand** - 轻量级状态管理
- ⌨️ **kbar** - Command+K 命令面板
- 🔗 **nuqs** - URL 搜索参数状态管理

### 企业级设计系统

- 🎯 **设计令牌系统** - 完整的 CSS 变量配置，支持主题定制
- 🌓 **暗黑/亮色主题** - 完整的双主题支持，自动跟随系统
- 📐 **响应式布局** - 桌面端优先，适配平板和移动端
- ♿ **无障碍支持** - 符合 WCAG 标准的可访问性设计
- 🎨 **专业色彩系统** - 参考 Databricks/Jira 的企业蓝色调

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 安装

```bash
# 克隆项目
git clone <repository-url>
cd nice-admin

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 演示账号

| 邮箱              | 密码     | 角色       |
| ----------------- | -------- | ---------- |
| admin@example.com | admin123 | 系统管理员 |
| user@example.com  | user123  | 普通用户   |

## 📦 项目结构

```
src/
├── app/                        # Next.js App Router
│   ├── (dashboard)/           # Dashboard 路由组（带布局）
│   │   ├── layout.tsx         # Dashboard 公共布局
│   │   └── dashboard/         # 管理后台页面
│   │       ├── page.tsx       # 仪表盘首页
│   │       ├── users/         # 用户管理
│   │       └── settings/      # 系统设置
│   ├── api/                   # API 路由
│   │   └── auth/              # NextAuth 认证
│   ├── login/                 # 登录页面
│   └── globals.css            # 全局样式 + 设计令牌
├── components/                 # React 组件
│   ├── layout/                # 布局组件
│   │   ├── app-shell.tsx      # 应用外壳
│   │   ├── sidebar.tsx        # 可折叠侧边栏
│   │   └── top-nav.tsx        # 顶部导航栏
│   ├── providers/             # Context Providers
│   │   └── index.tsx          # 主题/Query/KBar 集成
│   └── ui/                    # UI 基础组件（企业级定制）
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── skeleton.tsx
│       ├── switch.tsx
│       ├── toast.tsx
│       └── ...
├── lib/                       # 工具函数和配置
│   ├── auth.ts               # NextAuth 配置
│   └── utils.ts              # 通用工具函数
├── stores/                    # Zustand 状态管理
└── types/                     # TypeScript 类型定义
```

## 🔧 功能模块

### 1. 系统基础功能

- ✅ 用户登录/登出
- ✅ 密码管理（修改密码）
- ✅ 操作日志（审计追踪）

### 2. 用户与权限管理

- ✅ 租户管理（多租户支持）
- ✅ 账号管理（用户 CRUD）
- ✅ 角色管理（RBAC 权限控制）

### 3. 系统配置

- ✅ 菜单管理（动态菜单配置）
- ✅ 接口配置（API 权限管理）

## 🛠️ 开发工具

- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Husky** - Git 钩子
- **lint-staged** - 暂存文件检查

## 📜 可用脚本

```bash
# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## 🎨 设计系统

### 设计理念

本项目的 UI 设计参考了 **Databricks** 和 **Atlassian Design System (Jira)** 的设计理念：

- **现代功能主义** - 功能至上，清晰的信息层级
- **专业蓝色调** - 传达信任、专业、可靠的品牌形象
- **高密度信息展示** - 支持紧凑/舒适视图切换
- **克制的微交互** - 有目的的动画，提升用户体验

### 色彩系统

```css
/* 主色调 - 专业蓝色 */
--color-primary-600: oklch(0.48 0.19 250);  /* 主要操作 */
--color-primary-500: oklch(0.55 0.18 250);  /* 悬停状态 */

/* 语义化颜色 */
--color-success-500: oklch(0.62 0.17 155);  /* 成功状态 */
--color-warning-500: oklch(0.77 0.17 65);   /* 警告状态 */
--color-error-500: oklch(0.58 0.22 25);     /* 错误状态 */

/* 中性灰度（温暖灰调）*/
--color-gray-50 ~ --color-gray-950          /* 10级灰度层次 */
```

### 主题定制

1. **CSS 变量** - 修改 `src/app/globals.css` 中的设计令牌
2. **组件样式** - 所有组件使用 CSS 变量，自动响应主题切换
3. **暗黑模式** - 添加 `.dark` 类即可切换到暗色主题

### 布局系统

- **三栏布局** - 左侧导航 + 中间内容 + 右侧详情面板
- **可折叠侧边栏** - 支持展开/收起，状态持久化
- **响应式断点** - 桌面端(lg)优先，适配平板(md)和移动端(sm)

### 命令面板

按 `⌘K` (Mac) 或 `Ctrl+K` (Windows) 打开命令面板，支持：

- 快速导航到任意页面
- 切换主题（亮色/暗色/跟随系统）
- 执行常用操作

## 📄 许可证

MIT License
