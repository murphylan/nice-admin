'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Settings,
  Shield,
  FileText,
  Bell,
  ChevronLeft,
  ChevronRight,
  Menu,
  Building2,
  Database,
  Workflow,
  BarChart3,
  FolderKanban,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
  children?: NavItem[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: '概览',
    items: [
      {
        title: '仪表盘',
        href: '/dashboard',
        icon: LayoutDashboard,
      },
      {
        title: '数据分析',
        href: '/dashboard/analytics',
        icon: BarChart3,
      },
    ],
  },
  {
    title: '数据管理',
    items: [
      {
        title: '数据目录',
        href: '/dashboard/catalog',
        icon: Database,
      },
      {
        title: '工作流',
        href: '/dashboard/workflows',
        icon: Workflow,
      },
      {
        title: '项目管理',
        href: '/dashboard/projects',
        icon: FolderKanban,
        badge: 3,
      },
    ],
  },
  {
    title: '系统管理',
    items: [
      {
        title: '用户管理',
        href: '/dashboard/users',
        icon: Users,
      },
      {
        title: '租户管理',
        href: '/dashboard/tenants',
        icon: Building2,
      },
      {
        title: '角色权限',
        href: '/dashboard/roles',
        icon: Shield,
      },
      {
        title: '菜单配置',
        href: '/dashboard/menus',
        icon: Layers,
      },
    ],
  },
  {
    title: '监控与日志',
    items: [
      {
        title: '操作日志',
        href: '/dashboard/logs',
        icon: FileText,
      },
      {
        title: '通知中心',
        href: '/dashboard/notifications',
        icon: Bell,
        badge: 5,
      },
    ],
  },
  {
    title: '设置',
    items: [
      {
        title: '系统设置',
        href: '/dashboard/settings',
        icon: Settings,
      },
    ],
  },
];

interface SidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  className?: string;
}

export function Sidebar({ collapsed = false, onCollapsedChange, className }: SidebarProps) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = React.useState<string[]>([]);

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 flex h-screen flex-col border-r bg-[var(--sidebar-background)] transition-all duration-300',
        collapsed ? 'w-[var(--sidebar-collapsed-width)]' : 'w-[var(--sidebar-width)]',
        className
      )}
    >
      {/* Logo & Brand */}
      <div className="flex h-14 items-center border-b border-[var(--sidebar-border)] px-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
            <Layers className="h-5 w-5" />
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold text-[var(--sidebar-foreground)]">
              NiceAdmin
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-6 px-3">
          {navigation.map((group) => (
            <div key={group.title}>
              {!collapsed && (
                <h3 className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-gray-400">
                  {group.title}
                </h3>
              )}
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              'sidebar-nav-item relative',
                              isActive(item.href) && 'sidebar-nav-item-active',
                              collapsed && 'justify-center px-2'
                            )}
                          >
                            <item.icon className="h-5 w-5 shrink-0" />
                            {!collapsed && (
                              <>
                                <span className="truncate">{item.title}</span>
                                {item.badge && (
                                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-600 px-1.5 text-xs font-medium text-white">
                                    {item.badge}
                                  </span>
                                )}
                              </>
                            )}
                            {collapsed && item.badge && (
                              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-600 px-1 text-[10px] font-medium text-white">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </TooltipTrigger>
                        {collapsed && (
                          <TooltipContent side="right" sideOffset={10}>
                            {item.title}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Collapse Toggle */}
      <div className="border-t border-[var(--sidebar-border)] p-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCollapsedChange?.(!collapsed)}
          className={cn(
            'w-full justify-center text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]',
            collapsed ? 'px-2' : 'justify-start'
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4" />
              <span className="ml-2">收起菜单</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}

// Mobile Sidebar Trigger
export function SidebarTrigger({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClick}>
      <Menu className="h-5 w-5" />
      <span className="sr-only">打开菜单</span>
    </Button>
  );
}
