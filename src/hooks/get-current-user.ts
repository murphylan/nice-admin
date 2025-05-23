import { cookies } from "next/headers";
import { useSession } from "next-auth/react";
import getServerSession from "next-auth";
import { authConfig } from "@/server/auth/config";

/**
 * 用于在 Server Component 或 API Route 获取当前登录用户（服务端）
 */
export async function getCurrentUser() {
  // 仅在服务端环境下调用
  const session = await getServerSession(authConfig);
  const auth = await session.auth();
  return auth?.user ?? null;
}

/**
 * 用于在 Client Component 获取当前登录用户（客户端）
 * 用法：const { data: session } = useCurrentUser();
 */
export function useCurrentUser() {
  // 仅在客户端环境下调用
  return useSession();
}
