'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Sidebar } from './sidebar';
import { TopNav } from './top-nav';

interface AppShellProps {
  children: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
  };
}

export function AppShell({ children, user }: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close mobile sidebar on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, []);

  // Persist sidebar state
  React.useEffect(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved !== null) {
      setSidebarCollapsed(JSON.parse(saved));
    }
  }, []);

  const handleCollapsedChange = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
    localStorage.setItem('sidebar-collapsed', JSON.stringify(collapsed));
  };

  return (
    <div className="app-shell">
      {/* Desktop Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onCollapsedChange={handleCollapsedChange}
        className="hidden lg:flex"
      />

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <Sidebar
            collapsed={false}
            onCollapsedChange={() => setMobileOpen(false)}
            className="lg:hidden"
          />
        </>
      )}

      {/* Main Content */}
      <div
        className={cn(
          'main-content transition-all duration-300',
          sidebarCollapsed
            ? 'lg:pl-(--sidebar-collapsed-width)'
            : 'lg:pl-(--sidebar-width)'
        )}
      >
        <TopNav
          user={user}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="page-container">{children}</main>
      </div>
    </div>
  );
}
