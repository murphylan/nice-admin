"use client";

import { SessionProvider } from "next-auth/react";
import { useTheme } from "next-themes";
import React from "react";
import { ActiveThemeProvider } from "../active-theme";

export default function Providers({
  activeThemeValue,
  children,
}: {
  activeThemeValue: string;
  children: React.ReactNode;
}) {
  // 你可以根据需要继续使用 resolvedTheme
  const { resolvedTheme } = useTheme();

  return (
    <ActiveThemeProvider initialTheme={activeThemeValue}>
      <SessionProvider>{children}</SessionProvider>
    </ActiveThemeProvider>
  );
}
