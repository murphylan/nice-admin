'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useKBar } from 'kbar';
import {
  Bell,
  Search,
  Moon,
  Sun,
  Settings,
  LogOut,
  User,
  HelpCircle,
  Command,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface TopNavProps {
  className?: string;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
  };
  sidebarCollapsed?: boolean;
}

export function TopNav({ className, user, sidebarCollapsed }: TopNavProps) {
  const { theme, setTheme } = useTheme();
  const { query } = useKBar();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const defaultUser = {
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: '',
    role: '系统管理员',
  };

  const currentUser = user || defaultUser;

  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-14 items-center border-b bg-[var(--header-background)] transition-all duration-300',
        sidebarCollapsed
          ? 'pl-[calc(var(--sidebar-collapsed-width)+1rem)]'
          : 'pl-[calc(var(--sidebar-width)+1rem)]',
        'pr-4 lg:pr-6',
        className
      )}
    >
      {/* Left Section - Breadcrumb or Title */}
      <div className="flex flex-1 items-center gap-4">
        {/* Search Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden w-64 justify-start gap-2 text-gray-500 lg:flex"
          onClick={() => query.toggle()}
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left">搜索...</span>
          <kbd className="pointer-events-none flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <Command className="h-3 w-3" />K
          </kbd>
        </Button>

        {/* Mobile Search */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => query.toggle()}
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-1">
        {/* Theme Toggle */}
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">切换主题</span>
          </Button>
        )}

        {/* Help */}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">帮助</span>
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                3
              </span>
              <span className="sr-only">通知</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>通知</span>
              <Badge variant="secondary" className="text-xs">
                3 条未读
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem key={i} className="flex flex-col items-start gap-1 p-3">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-medium">系统通知</span>
                    <span className="text-xs text-gray-500">5分钟前</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    用户 John Doe 提交了新的工作流审批请求
                  </p>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary-600">
              查看全部通知
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Divider */}
        <div className="mx-2 h-6 w-px bg-gray-200 dark:bg-gray-700" />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  {currentUser.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="hidden flex-col items-start text-left lg:flex">
                <span className="text-sm font-medium">{currentUser.name}</span>
                <span className="text-xs text-gray-500">{currentUser.role}</span>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-gray-500 lg:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col gap-1">
                <span className="font-medium">{currentUser.name}</span>
                <span className="text-xs font-normal text-gray-500">
                  {currentUser.email}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  个人资料
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  系统设置
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950">
              <LogOut className="mr-2 h-4 w-4" />
              退出登录
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
