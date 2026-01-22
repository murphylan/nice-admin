'use client';

import * as React from 'react';
import {
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Mail,
  Shield,
  Trash2,
  Edit,
  Eye,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

// Mock user data
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  department: string;
  joinDate: string;
  lastActive: string;
  avatar?: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: '张三',
    email: 'zhangsan@example.com',
    role: '系统管理员',
    status: 'active',
    department: '技术部',
    joinDate: '2024-01-15',
    lastActive: '2分钟前',
  },
  {
    id: '2',
    name: '李四',
    email: 'lisi@example.com',
    role: '数据分析师',
    status: 'active',
    department: '数据部',
    joinDate: '2024-02-20',
    lastActive: '1小时前',
  },
  {
    id: '3',
    name: '王五',
    email: 'wangwu@example.com',
    role: '产品经理',
    status: 'inactive',
    department: '产品部',
    joinDate: '2024-03-10',
    lastActive: '3天前',
  },
  {
    id: '4',
    name: '赵六',
    email: 'zhaoliu@example.com',
    role: '开发工程师',
    status: 'active',
    department: '技术部',
    joinDate: '2024-04-05',
    lastActive: '30分钟前',
  },
  {
    id: '5',
    name: '钱七',
    email: 'qianqi@example.com',
    role: '运维工程师',
    status: 'pending',
    department: '运维部',
    joinDate: '2024-05-18',
    lastActive: '从未登录',
  },
  {
    id: '6',
    name: '孙八',
    email: 'sunba@example.com',
    role: '测试工程师',
    status: 'active',
    department: '质量部',
    joinDate: '2024-06-22',
    lastActive: '15分钟前',
  },
  {
    id: '7',
    name: '周九',
    email: 'zhoujiu@example.com',
    role: '数据分析师',
    status: 'active',
    department: '数据部',
    joinDate: '2024-07-08',
    lastActive: '5小时前',
  },
  {
    id: '8',
    name: '吴十',
    email: 'wushi@example.com',
    role: '开发工程师',
    status: 'inactive',
    department: '技术部',
    joinDate: '2024-08-14',
    lastActive: '1周前',
  },
];

// Status badge component
function StatusBadge({ status }: { status: User['status'] }) {
  const variants = {
    active: 'success',
    inactive: 'secondary',
    pending: 'warning',
  } as const;

  const labels = {
    active: '活跃',
    inactive: '禁用',
    pending: '待激活',
  };

  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<string>('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10;

  // Filter users
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const toggleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map((u) => u.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">用户管理</h1>
          <p className="page-description">管理系统中的所有用户账户和权限</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            导出
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            添加用户
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-enterprise">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              总用户数
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockUsers.length}</div>
          </CardContent>
        </Card>
        <Card className="card-enterprise">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              活跃用户
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockUsers.filter((u) => u.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        <Card className="card-enterprise">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              待激活
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {mockUsers.filter((u) => u.status === 'pending').length}
            </div>
          </CardContent>
        </Card>
        <Card className="card-enterprise">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              已禁用
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-500">
              {mockUsers.filter((u) => u.status === 'inactive').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="card-enterprise">
        {/* Table Toolbar */}
        <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="搜索用户..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部状态</SelectItem>
                <SelectItem value="active">活跃</SelectItem>
                <SelectItem value="inactive">禁用</SelectItem>
                <SelectItem value="pending">待激活</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {selectedUsers.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                已选择 {selectedUsers.length} 项
              </span>
              <Button variant="outline" size="sm">
                批量禁用
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                批量删除
              </Button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-12">
                  <Checkbox
                    checked={
                      paginatedUsers.length > 0 &&
                      selectedUsers.length === paginatedUsers.length
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th>
                  <button className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100">
                    用户
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th>角色</th>
                <th>部门</th>
                <th>状态</th>
                <th>最后活跃</th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => toggleSelect(user.id)}
                    />
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-primary-100 text-sm text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                          {user.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-sm">{user.role}</span>
                  </td>
                  <td>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {user.department}
                    </span>
                  </td>
                  <td>
                    <StatusBadge status={user.status} />
                  </td>
                  <td>
                    <span className="text-sm text-gray-500">{user.lastActive}</span>
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>操作</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          查看详情
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          编辑用户
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          发送邮件
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          修改权限
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          删除用户
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t px-4 py-3">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            显示 {(currentPage - 1) * pageSize + 1} -{' '}
            {Math.min(currentPage * pageSize, filteredUsers.length)} 条，共{' '}
            {filteredUsers.length} 条
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
              上一页
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'ghost'}
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              下一页
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
