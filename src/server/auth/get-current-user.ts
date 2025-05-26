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
