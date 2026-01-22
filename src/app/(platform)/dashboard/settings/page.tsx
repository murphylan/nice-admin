'use client';

import * as React from 'react';
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Key,
  Database,
  Mail,
  Smartphone,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Setting Section Component
function SettingSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}

// Setting Row Component
function SettingRow({
  label,
  description,
  children,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="space-y-0.5">
        <Label className="text-sm font-medium">{label}</Label>
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: false,
    sms: false,
    marketing: true,
    security: true,
    updates: true,
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">系统设置</h1>
          <p className="page-description">管理您的账户设置和系统偏好</p>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-5">
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">个人资料</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">通知设置</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">安全设置</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">外观设置</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">集成</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>个人资料</CardTitle>
              <CardDescription>管理您的个人信息和账户详情</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary-100 text-xl text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                    管理
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">头像</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      上传新头像
                    </Button>
                    <Button variant="ghost" size="sm">
                      删除
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    推荐使用 256x256 像素的 PNG 或 JPG 格式图片
                  </p>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" defaultValue="admin@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">手机号码</Label>
                  <Input id="phone" type="tel" defaultValue="+86 138 0000 0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">部门</Label>
                  <Select defaultValue="tech">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">技术部</SelectItem>
                      <SelectItem value="product">产品部</SelectItem>
                      <SelectItem value="design">设计部</SelectItem>
                      <SelectItem value="ops">运维部</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">个人简介</Label>
                <textarea
                  id="bio"
                  className="input-enterprise min-h-24 resize-none"
                  placeholder="介绍一下自己..."
                  defaultValue="系统管理员，负责平台的日常运维和用户管理工作。"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">取消</Button>
                <Button>保存更改</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>通知偏好</CardTitle>
              <CardDescription>选择您希望接收通知的方式</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SettingSection title="通知渠道">
                <div className="divide-y rounded-lg border">
                  <SettingRow
                    label="邮件通知"
                    description="通过邮件接收重要通知"
                  >
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, email: checked }))
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    label="推送通知"
                    description="在浏览器中接收实时推送"
                  >
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, push: checked }))
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    label="短信通知"
                    description="通过短信接收紧急通知"
                  >
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, sms: checked }))
                      }
                    />
                  </SettingRow>
                </div>
              </SettingSection>

              <SettingSection title="通知类型">
                <div className="divide-y rounded-lg border">
                  <SettingRow
                    label="安全通知"
                    description="登录异常、密码修改等安全相关通知"
                  >
                    <Switch
                      checked={notifications.security}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, security: checked }))
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    label="系统更新"
                    description="新功能发布和系统维护通知"
                  >
                    <Switch
                      checked={notifications.updates}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, updates: checked }))
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    label="营销通知"
                    description="产品推广和优惠活动信息"
                  >
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, marketing: checked }))
                      }
                    />
                  </SettingRow>
                </div>
              </SettingSection>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>密码设置</CardTitle>
              <CardDescription>确保您的账户使用强密码</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">当前密码</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">新密码</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">确认新密码</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>更新密码</Button>
            </CardContent>
          </Card>

          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>两步验证</CardTitle>
              <CardDescription>
                添加额外的安全层来保护您的账户
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900">
                    <Smartphone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">验证器应用</h4>
                    <p className="text-sm text-gray-500">
                      使用 Google Authenticator 或其他验证器应用
                    </p>
                  </div>
                </div>
                <Badge variant="success">已启用</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-800">
                    <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">邮箱验证</h4>
                    <p className="text-sm text-gray-500">
                      通过邮箱接收验证码
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  启用
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>活跃会话</CardTitle>
              <CardDescription>管理您账户的登录会话</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    device: 'MacBook Pro',
                    location: '北京, 中国',
                    lastActive: '当前会话',
                    current: true,
                  },
                  {
                    device: 'iPhone 15 Pro',
                    location: '上海, 中国',
                    lastActive: '2小时前',
                    current: false,
                  },
                  {
                    device: 'Windows PC',
                    location: '深圳, 中国',
                    lastActive: '1天前',
                    current: false,
                  },
                ].map((session, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{session.device}</h4>
                        {session.current && (
                          <Badge variant="success" className="text-xs">
                            当前
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {session.location} · {session.lastActive}
                      </p>
                    </div>
                    {!session.current && (
                      <Button variant="ghost" size="sm" className="text-red-600">
                        撤销
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>主题设置</CardTitle>
              <CardDescription>自定义您的界面外观</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SettingSection title="颜色主题">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: '浅色', value: 'light', bg: 'bg-white border-2' },
                    { name: '深色', value: 'dark', bg: 'bg-gray-900' },
                    { name: '跟随系统', value: 'system', bg: 'bg-gradient-to-r from-white to-gray-900' },
                  ].map((theme) => (
                    <button
                      key={theme.value}
                      className={cn(
                        'flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:border-primary-500',
                        theme.value === 'system' && 'border-primary-500'
                      )}
                    >
                      <div className={cn('h-16 w-full rounded-md', theme.bg)} />
                      <span className="text-sm font-medium">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </SettingSection>

              <SettingSection title="语言设置">
                <Select defaultValue="zh-CN">
                  <SelectTrigger className="w-64">
                    <Globe className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zh-CN">简体中文</SelectItem>
                    <SelectItem value="zh-TW">繁體中文</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="ja-JP">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </SettingSection>

              <SettingSection title="密度设置">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: '紧凑', value: 'compact' },
                    { name: '默认', value: 'default' },
                    { name: '宽松', value: 'comfortable' },
                  ].map((density) => (
                    <button
                      key={density.value}
                      className={cn(
                        'rounded-lg border p-4 text-center transition-colors hover:border-primary-500',
                        density.value === 'default' && 'border-primary-500'
                      )}
                    >
                      <span className="text-sm font-medium">{density.name}</span>
                    </button>
                  ))}
                </div>
              </SettingSection>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>已连接的服务</CardTitle>
              <CardDescription>管理与第三方服务的集成</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: 'GitHub',
                    description: '代码仓库和版本控制',
                    connected: true,
                    icon: '🐙',
                  },
                  {
                    name: 'Slack',
                    description: '团队通讯和协作',
                    connected: true,
                    icon: '💬',
                  },
                  {
                    name: 'Jira',
                    description: '项目管理和问题跟踪',
                    connected: false,
                    icon: '📋',
                  },
                  {
                    name: 'AWS',
                    description: '云服务和基础设施',
                    connected: true,
                    icon: '☁️',
                  },
                  {
                    name: 'Google Analytics',
                    description: '网站分析和统计',
                    connected: false,
                    icon: '📊',
                  },
                ].map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl dark:bg-gray-800">
                        {integration.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{integration.name}</h4>
                        <p className="text-sm text-gray-500">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    {integration.connected ? (
                      <div className="flex items-center gap-2">
                        <Badge variant="success">已连接</Badge>
                        <Button variant="ghost" size="sm">
                          断开
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" size="sm">
                        连接
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-enterprise">
            <CardHeader>
              <CardTitle>API 密钥</CardTitle>
              <CardDescription>管理您的 API 访问密钥</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-800">
                    <Key className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">生产环境密钥</h4>
                    <p className="font-mono text-sm text-gray-500">
                      sk-prod-****************************1234
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    复制
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    重置
                  </Button>
                </div>
              </div>
              <Button variant="outline">
                <Key className="mr-2 h-4 w-4" />
                创建新密钥
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
