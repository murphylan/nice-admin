import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/components/providers';
import './globals.css';

/**
 * 思源黑体 - 本地字体加载
 * 来源: https://github.com/jaywcjlove/free-font
 * 协议: OFL-1.1 (开源免费商用)
 *
 * 使用 next/font/local 加载本地字体（Next.js 推荐方式）
 * - 自动优化字体文件
 * - 零布局偏移
 * - CSS 变量支持
 */
const siYuanHeiTi = localFont({
  src: [
    {
      path: '../../public/fonts/SiYuanHeiTi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SiYuanHeiTi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SiYuanHeiTi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-siyuan',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nice Admin - 现代化管理后台',
  description: '基于 Next.js 16 构建的现代化企业级管理后台系统',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={siYuanHeiTi.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
