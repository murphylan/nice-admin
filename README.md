# Nice Admin

一个现代化的企业级管理后台系统，基于 Next.js 16 构建。

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)

## ✨ 特性

- 🚀 **Next.js 16** - 最新的 React 框架，支持 App Router 和 Server Actions
- 🔐 **NextAuth.js** - 完整的身份认证解决方案
- 🎨 **Tailwind CSS v4** - 原子化 CSS 框架
- 🧩 **Shadcn-ui** - 精美的 UI 组件库
- 📊 **TanStack Table** - 强大的表格解决方案
- 🔍 **TanStack Query** - 数据获取和缓存管理
- 📝 **Formik + Zod** - 表单处理和验证
- 🗂️ **Zustand** - 轻量级状态管理
- ⌨️ **kbar** - Command+K 命令面板
- 🔗 **nuqs** - URL 搜索参数状态管理

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
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── dashboard/         # 管理后台页面
│   └── login/             # 登录页面
├── components/            # React 组件
│   ├── data-table/       # 数据表格组件
│   ├── layout/           # 布局组件
│   └── ui/               # UI 基础组件
├── hooks/                 # 自定义 Hooks
├── lib/                   # 工具函数和配置
├── stores/                # Zustand 状态管理
└── types/                 # TypeScript 类型定义
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

## 🎨 主题定制

项目支持深色/浅色主题切换，可以通过以下方式自定义主题：

1. 修改 `src/app/globals.css` 中的 CSS 变量
2. 通过 Tailwind 配置扩展颜色

## 📄 许可证

MIT License
