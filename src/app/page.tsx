import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const knowledgePoints = [
  {
    label: "create-t3-app CLI",
    href: "https://create.t3.gg/en/installation",
    desc: "CLI 工具，用于快速搭建 T3 Stack 项目。",
    emoji: "🛠️",
  },
  {
    label: "Next.js 15",
    href: "https://nextjs.org",
    desc: "React 应用开发框架。",
    emoji: "⚛️",
  },
  {
    label: "TypeScript",
    href: "https://www.typescriptlang.org",
    desc: "强类型的 JavaScript 超集。",
    emoji: "📝",
  },
  {
    label: "Tailwind CSS v4",
    href: "https://tailwindcss.com",
    desc: "实用工具优先的 CSS 框架。",
    emoji: "🎨",
  },
  {
    label: "Shadcn-ui",
    href: "https://ui.shadcn.com",
    desc: "可复用的 React UI 组件。",
    emoji: "🧩",
  },
  {
    label: "Zod",
    href: "https://zod.dev",
    desc: "TypeScript 优先的模式验证库。",
    emoji: "✅",
  },
  {
    label: "Zustand",
    href: "https://zustand-demo.pmnd.rs",
    desc: "轻量级 React 状态管理库。",
    emoji: "🗂️",
  },
  {
    label: "Nuqs",
    href: "https://nuqs.47ng.com/",
    desc: "URL 查询参数状态管理。",
    emoji: "🔗",
  },
  {
    label: "tRPC",
    href: "https://trpc.io/docs/concepts",
    desc: "端到端类型安全的 API 框架。",
    emoji: "🔌",
  },
  {
    label: "Server Actions",
    href: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
    desc: "Next.js 的服务端数据操作方案。",
    emoji: "🛠️",
  },
  {
    label: "NextAuth.js",
    href: "https://next-auth.js.org/getting-started/client#sessionprovider",
    desc: "灵活的身份认证解决方案。",
    emoji: "🔐",
  },
  {
    label: "Tanstack Data Tables",
    href: "https://ui.shadcn.com/docs/components/data-table",
    desc: "强大的数据表格组件。",
    emoji: "📋",
  },
  {
    label: "Dice UI Data Table",
    href: "https://www.diceui.com/docs/components/data-table",
    desc: "Dice UI 的数据表格组件。",
    emoji: "📊",
  },
  {
    label: "Tanstack Query",
    href: "https://tanstack.com/query/v4/",
    desc: "React 的数据获取和缓存库。",
    emoji: "🔍",
  },
  {
    label: "React Hook Form",
    href: "https://ui.shadcn.com/docs/components/form",
    desc: "高性能表单管理库。",
    emoji: "📝",
  },
  {
    label: "kbar",
    href: "https://kbar.vercel.app/",
    desc: "命令面板组件。",
    emoji: "⌨️",
  },
  {
    label: "ESLint",
    href: "https://eslint.org",
    desc: "JavaScript/TypeScript 代码检查工具。",
    emoji: "🧹",
  },
  {
    label: "Husky",
    href: "https://typicode.github.io/husky/",
    desc: "Git 钩子工具，常用于预提交检查。",
    emoji: "🪝",
  },
  {
    label: "Prettier",
    href: "https://prettier.io",
    desc: "代码格式化工具。",
    emoji: "🎯",
  },
  {
    label: "T3 Stack 文档",
    href: "https://create.t3.gg/",
    desc: "T3 Stack 官方文档。",
    emoji: "📚",
  },
  {
    label: "T3 Stack 学习资源",
    href: "https://create.t3.gg/en/faq#what-learning-resources-are-currently-available",
    desc: "T3 Stack 官方学习资源。",
    emoji: "📖",
  },
  {
    label: "create-t3-app GitHub",
    href: "https://github.com/t3-oss/create-t3-app",
    desc: "create-t3-app 的 GitHub 仓库。",
    emoji: "🌟",
  },
  {
    label: "Vercel 部署指南",
    href: "https://create.t3.gg/en/deployment/vercel",
    desc: "Vercel 部署文档。",
    emoji: "🚀",
  },
  {
    label: "Netlify 部署指南",
    href: "https://create.t3.gg/en/deployment/netlify",
    desc: "Netlify 部署文档。",
    emoji: "🚀",
  },
  {
    label: "Docker 部署指南",
    href: "https://create.t3.gg/en/deployment/docker",
    desc: "Docker 部署文档。",
    emoji: "🐳",
  },
];

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#1a472a] to-[#0d231c] text-white overflow-y-auto relative">
      <Link
        href="/dashboard"
        className="absolute right-8 top-8 rounded bg-white/20 px-4 py-2 text-white hover:bg-white/40 transition"
      >
        Dashboard
      </Link>
      <div className="container flex flex-col items-center gap-12 px-4 py-3 flex-1">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Nice <span className="text-[hsl(280,100%,70%)]">Admin</span> App
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8 overflow-y-auto w-full max-h-[calc(100vh-180px)] pr-2">
          {knowledgePoints.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              style={{ textDecoration: "none" }}
            >
              <Card className="h-40 flex flex-col justify-between bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition rounded-xl border border-gray-200 group-hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-900 group-hover:text-primary">
                    <span className="text-2xl">{item.emoji}</span>
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">{item.desc}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
