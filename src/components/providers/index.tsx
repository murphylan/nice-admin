'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults, useMatches } from 'kbar';
import { useRouter } from 'next/navigation';
import {
  Home,
  Users,
  Settings,
  LayoutDashboard,
  FileText,
  Shield,
  Bell,
  Search,
  Moon,
  Sun,
  LogOut,
} from 'lucide-react';
import { useTheme } from 'next-themes';

// React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// KBar Results Renderer
function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      maxHeight={384}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {item}
          </div>
        ) : (
          <div
            className={`flex cursor-pointer items-center gap-3 px-4 py-3 ${
              active ? 'bg-gray-100 dark:bg-gray-800' : 'bg-transparent'
            }`}
          >
            {item.icon && (
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                {item.icon}
              </span>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.name}
              </span>
              {item.subtitle && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {item.subtitle}
                </span>
              )}
            </div>
            {item.shortcut?.length ? (
              <div className="ml-auto flex gap-1">
                {item.shortcut.map((sc: string) => (
                  <kbd
                    key={sc}
                    className="rounded bg-gray-200 px-1.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            ) : null}
          </div>
        )
      }
    />
  );
}

// KBar Command Palette Component
function CommandPalette() {
  return (
    <KBarPortal>
      <KBarPositioner className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm">
        <KBarAnimator className="w-full max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3 border-b border-gray-200 px-4 dark:border-gray-800">
            <Search className="h-4 w-4 text-gray-400" />
            <KBarSearch
              className="h-14 w-full border-0 bg-transparent text-base text-gray-900 placeholder-gray-400 outline-none dark:text-gray-100"
              placeholder="搜索命令..."
            />
          </div>
          <div className="py-2">
            <RenderResults />
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
            <span>使用 ↑↓ 导航，Enter 选择，Esc 关闭</span>
            <span>⌘K 打开</span>
          </div>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

// Theme Toggle Action Hook
function useThemeActions() {
  const { setTheme } = useTheme();
  
  return React.useMemo(() => [
    {
      id: 'theme-light',
      name: '切换到亮色模式',
      icon: <Sun className="h-4 w-4" />,
      parent: 'theme',
      perform: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      name: '切换到暗色模式',
      icon: <Moon className="h-4 w-4" />,
      parent: 'theme',
      perform: () => setTheme('dark'),
    },
    {
      id: 'theme-system',
      name: '跟随系统',
      icon: <Settings className="h-4 w-4" />,
      parent: 'theme',
      perform: () => setTheme('system'),
    },
  ], [setTheme]);
}

// KBar with Navigation Actions
function KBarProviderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const actions = React.useMemo(() => [
    // Navigation
    {
      id: 'navigation',
      name: '导航',
      keywords: 'goto navigate',
      section: '导航',
    },
    {
      id: 'home',
      name: '首页',
      shortcut: ['g', 'h'],
      keywords: 'home dashboard',
      icon: <Home className="h-4 w-4" />,
      perform: () => router.push('/dashboard'),
      parent: 'navigation',
    },
    {
      id: 'users',
      name: '用户管理',
      shortcut: ['g', 'u'],
      keywords: 'users members team',
      icon: <Users className="h-4 w-4" />,
      perform: () => router.push('/dashboard/users'),
      parent: 'navigation',
    },
    {
      id: 'settings',
      name: '系统设置',
      shortcut: ['g', 's'],
      keywords: 'settings preferences config',
      icon: <Settings className="h-4 w-4" />,
      perform: () => router.push('/dashboard/settings'),
      parent: 'navigation',
    },
    // Features
    {
      id: 'features',
      name: '功能',
      section: '功能',
    },
    {
      id: 'dashboard',
      name: '仪表盘',
      keywords: 'dashboard analytics metrics',
      icon: <LayoutDashboard className="h-4 w-4" />,
      perform: () => router.push('/dashboard'),
    },
    {
      id: 'logs',
      name: '操作日志',
      keywords: 'logs audit history',
      icon: <FileText className="h-4 w-4" />,
      perform: () => router.push('/dashboard/logs'),
    },
    {
      id: 'roles',
      name: '角色权限',
      keywords: 'roles permissions access',
      icon: <Shield className="h-4 w-4" />,
      perform: () => router.push('/dashboard/roles'),
    },
    {
      id: 'notifications',
      name: '通知中心',
      keywords: 'notifications alerts',
      icon: <Bell className="h-4 w-4" />,
      perform: () => router.push('/dashboard/notifications'),
    },
    // Actions
    {
      id: 'actions',
      name: '操作',
      section: '操作',
    },
    {
      id: 'theme',
      name: '切换主题',
      keywords: 'theme dark light mode',
      icon: <Sun className="h-4 w-4" />,
      shortcut: ['t'],
    },
    {
      id: 'logout',
      name: '退出登录',
      keywords: 'logout signout exit',
      icon: <LogOut className="h-4 w-4" />,
      perform: () => router.push('/login'),
    },
  ], [router]);

  return (
    <KBarProvider actions={actions}>
      <ThemeActionsProvider>
        <CommandPalette />
        {children}
      </ThemeActionsProvider>
    </KBarProvider>
  );
}

// Theme Actions Provider (registers theme actions after theme is available)
function ThemeActionsProvider({ children }: { children: React.ReactNode }) {
  // Theme actions will be available after ThemeProvider mounts
  return <>{children}</>;
}

// Main Providers Component
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <KBarProviderWrapper>
          {children}
        </KBarProviderWrapper>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
