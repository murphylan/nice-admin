import { auth } from '@/lib/auth';
import { AppShell } from '@/components/layout';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <AppShell
      user={
        session?.user
          ? {
              name: session.user.name || 'User',
              email: session.user.email || '',
              avatar: session.user.avatar,
              role: session.user.role,
            }
          : undefined
      }
    >
      {children}
    </AppShell>
  );
}
