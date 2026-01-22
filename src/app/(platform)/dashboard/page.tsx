import { Suspense } from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Activity,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton, SkeletonCard, SkeletonChart } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

// Metric Card Component
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  description?: string;
}

function MetricCard({ title, value, change, changeType, icon: Icon, description }: MetricCardProps) {
  return (
    <Card className="card-enterprise">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </CardTitle>
        <div className="rounded-lg bg-primary-50 p-2 dark:bg-primary-950">
          <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <div className="mt-1 flex items-center gap-2">
          <span
            className={cn(
              'flex items-center text-sm font-medium',
              changeType === 'positive' && 'text-green-600 dark:text-green-400',
              changeType === 'negative' && 'text-red-600 dark:text-red-400',
              changeType === 'neutral' && 'text-gray-600 dark:text-gray-400'
            )}
          >
            {changeType === 'positive' && <ArrowUpRight className="mr-1 h-4 w-4" />}
            {changeType === 'negative' && <ArrowDownRight className="mr-1 h-4 w-4" />}
            {change}
          </span>
          {description && (
            <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Metrics data
const metrics = [
  {
    title: '总用户数',
    value: '12,628',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: Users,
    description: '较上月',
  },
  {
    title: '活跃会话',
    value: '1,423',
    change: '+8.2%',
    changeType: 'positive' as const,
    icon: Activity,
    description: '实时',
  },
  {
    title: '月收入',
    value: '¥89,432',
    change: '-2.4%',
    changeType: 'negative' as const,
    icon: DollarSign,
    description: '较上月',
  },
  {
    title: '转化率',
    value: '24.8%',
    change: '+4.1%',
    changeType: 'positive' as const,
    icon: TrendingUp,
    description: '较上周',
  },
];

// Recent Activity Component
interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar?: string;
    email: string;
  };
  action: string;
  target: string;
  time: string;
  status: 'success' | 'warning' | 'error' | 'info';
}

const recentActivities: ActivityItem[] = [
  {
    id: '1',
    user: { name: '张三', email: 'zhangsan@example.com' },
    action: '创建了新项目',
    target: '数据分析平台 v2.0',
    time: '2分钟前',
    status: 'success',
  },
  {
    id: '2',
    user: { name: '李四', email: 'lisi@example.com' },
    action: '更新了工作流',
    target: 'ETL 数据处理流程',
    time: '15分钟前',
    status: 'info',
  },
  {
    id: '3',
    user: { name: '王五', email: 'wangwu@example.com' },
    action: '提交了审批请求',
    target: '生产环境部署',
    time: '1小时前',
    status: 'warning',
  },
  {
    id: '4',
    user: { name: '赵六', email: 'zhaoliu@example.com' },
    action: '完成了任务',
    target: '用户反馈分析报告',
    time: '2小时前',
    status: 'success',
  },
  {
    id: '5',
    user: { name: '钱七', email: 'qianqi@example.com' },
    action: '删除了资源',
    target: '测试数据集',
    time: '3小时前',
    status: 'error',
  },
];

function RecentActivity() {
  return (
    <Card className="card-enterprise">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-semibold">最近活动</CardTitle>
          <CardDescription>团队的最新操作记录</CardDescription>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback className="bg-primary-100 text-xs text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  {activity.user.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span>
                  <span className="text-gray-600 dark:text-gray-400"> {activity.action} </span>
                  <span className="font-medium text-primary-600 dark:text-primary-400">
                    {activity.target}
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
              <Badge
                variant={
                  activity.status === 'success'
                    ? 'success'
                    : activity.status === 'warning'
                      ? 'warning'
                      : activity.status === 'error'
                        ? 'destructive'
                        : 'default'
                }
              >
                {activity.status === 'success' && '成功'}
                {activity.status === 'warning' && '待审核'}
                {activity.status === 'error' && '已删除'}
                {activity.status === 'info' && '进行中'}
              </Badge>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="mt-4 w-full" size="sm">
          查看全部活动
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

// Quick Actions Component
const quickActions = [
  { title: '新建项目', description: '创建新的数据项目', href: '/dashboard/projects/new' },
  { title: '邀请成员', description: '邀请团队成员加入', href: '/dashboard/users/invite' },
  { title: '创建工作流', description: '设计自动化流程', href: '/dashboard/workflows/new' },
  { title: '查看报告', description: '分析业务数据', href: '/dashboard/analytics' },
];

function QuickActions() {
  return (
    <Card className="card-enterprise">
      <CardHeader>
        <CardTitle className="text-base font-semibold">快捷操作</CardTitle>
        <CardDescription>常用功能快速入口</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto justify-start gap-3 p-4 text-left"
              asChild
            >
              <a href={action.href}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-950">
                  <ArrowRight className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {action.description}
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Chart Placeholder Component
function ChartCard() {
  return (
    <Card className="card-enterprise col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-semibold">数据趋势</CardTitle>
          <CardDescription>过去30天的数据变化</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            7天
          </Button>
          <Button variant="secondary" size="sm">
            30天
          </Button>
          <Button variant="outline" size="sm">
            90天
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Chart placeholder - you can integrate a charting library like recharts here */}
        <div className="flex h-64 items-end justify-between gap-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary-500 transition-all hover:bg-primary-600"
              style={{
                height: `${Math.random() * 80 + 20}%`,
                opacity: 0.6 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>1月1日</span>
          <span>1月15日</span>
          <span>1月30日</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Loading Skeleton
function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <SkeletonChart className="lg:col-span-2" />
        <Skeleton className="h-96 rounded-lg" />
      </div>
    </div>
  );
}

// Main Dashboard Page
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">仪表盘</h1>
          <p className="page-description">欢迎回来，这是您的业务概览。</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">导出报告</Button>
          <Button>新建项目</Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <ChartCard />

        {/* Quick Actions */}
        <QuickActions />
      </div>

      {/* Activity Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* System Status */}
        <Card className="card-enterprise">
          <CardHeader>
            <CardTitle className="text-base font-semibold">系统状态</CardTitle>
            <CardDescription>服务运行状况</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'API 服务', status: 'healthy', uptime: '99.9%' },
                { name: '数据库', status: 'healthy', uptime: '99.8%' },
                { name: '消息队列', status: 'healthy', uptime: '99.7%' },
                { name: '存储服务', status: 'warning', uptime: '98.5%' },
                { name: 'CDN', status: 'healthy', uptime: '99.9%' },
              ].map((service) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'status-dot',
                        service.status === 'healthy' && 'status-dot-success',
                        service.status === 'warning' && 'status-dot-warning',
                        service.status === 'error' && 'status-dot-error'
                      )}
                    />
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{service.uptime}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
