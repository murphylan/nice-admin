"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  XCircle,
  FileCheck,
  Clock,
  User,
  Calendar,
  Target,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

interface ValidationItem {
  id: string;
  category: string;
  question: string;
  status: "passed" | "failed" | "pending";
  required: boolean;
}

interface Requirement {
  id: string;
  title: string;
  client: string;
  status: string;
  validationScore: number;
  validationItems: ValidationItem[];
  comments: string[];
}

export default function ValidationPage() {
  const [selectedRequirement, setSelectedRequirement] =
    useState<string>("REQ-001");

  const requirements: Requirement[] = [
    {
      id: "REQ-001",
      title: "用户权限管理系统",
      client: "ABC科技公司",
      status: "待验证",
      validationScore: 75,
      validationItems: [
        {
          id: "who",
          category: "6W原则",
          question: "Who - 需求提出人是否明确？",
          status: "passed",
          required: true,
        },
        {
          id: "what",
          category: "6W原则",
          question: "What - 具体功能需求是否清晰？",
          status: "passed",
          required: true,
        },
        {
          id: "when",
          category: "6W原则",
          question: "When - 时间要求是否明确？",
          status: "failed",
          required: true,
        },
        {
          id: "where",
          category: "6W原则",
          question: "Where - 使用场景是否描述清楚？",
          status: "passed",
          required: true,
        },
        {
          id: "why",
          category: "6W原则",
          question: "Why - 需求背景和目的是否明确？",
          status: "passed",
          required: true,
        },
        {
          id: "how",
          category: "6W原则",
          question: "How - 实现方式是否有初步方案？",
          status: "pending",
          required: true,
        },
        {
          id: "consistency",
          category: "一致性检查",
          question: "是否与现有需求存在冲突？",
          status: "passed",
          required: true,
        },
        {
          id: "completeness",
          category: "完整性检查",
          question: "需求描述是否完整？",
          status: "failed",
          required: true,
        },
        {
          id: "feasibility",
          category: "可行性评估",
          question: "技术可行性是否评估？",
          status: "pending",
          required: false,
        },
        {
          id: "priority",
          category: "优先级评估",
          question: "优先级设置是否合理？",
          status: "passed",
          required: false,
        },
      ],
      comments: [
        "时间要求需要进一步明确具体的里程碑节点",
        "需求描述中缺少具体的功能模块划分",
        "建议补充用户角色和权限矩阵",
      ],
    },
    {
      id: "REQ-002",
      title: "数据可视化大屏",
      client: "XYZ集团",
      status: "验证通过",
      validationScore: 95,
      validationItems: [
        {
          id: "who",
          category: "6W原则",
          question: "Who - 需求提出人是否明确？",
          status: "passed",
          required: true,
        },
        {
          id: "what",
          category: "6W原则",
          question: "What - 具体功能需求是否清晰？",
          status: "passed",
          required: true,
        },
        {
          id: "when",
          category: "6W原则",
          question: "When - 时间要求是否明确？",
          status: "passed",
          required: true,
        },
        {
          id: "where",
          category: "6W原则",
          question: "Where - 使用场景是否描述清楚？",
          status: "passed",
          required: true,
        },
        {
          id: "why",
          category: "6W原则",
          question: "Why - 需求背景和目的是否明确？",
          status: "passed",
          required: true,
        },
        {
          id: "how",
          category: "6W原则",
          question: "How - 实现方式是否有初步方案？",
          status: "passed",
          required: true,
        },
        {
          id: "consistency",
          category: "一致性检查",
          question: "是否与现有需求存在冲突？",
          status: "passed",
          required: true,
        },
        {
          id: "completeness",
          category: "完整性检查",
          question: "需求描述是否完整？",
          status: "passed",
          required: true,
        },
        {
          id: "feasibility",
          category: "可行性评估",
          question: "技术可行性是否评估？",
          status: "passed",
          required: false,
        },
        {
          id: "priority",
          category: "优先级评估",
          question: "优先级设置是否合理？",
          status: "failed",
          required: false,
        },
      ],
      comments: ["需求描述完整，技术方案可行", "建议调整优先级为高优先级"],
    },
  ];

  const currentRequirement = requirements.find(
    (req) => req.id === selectedRequirement
  )!;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed":
        return "text-green-600";
      case "failed":
        return "text-red-600";
      case "pending":
        return "text-yellow-600";
      default:
        return "text-gray-400";
    }
  };

  const getValidationScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const groupedItems = currentRequirement.validationItems.reduce(
    (acc, item) => {
      acc[item.category] = acc[item.category] ?? [];
      acc[item.category]!.push(item);
      return acc;
    },
    {} as Record<string, ValidationItem[]>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <FileCheck className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">需求验证</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">批量验证</Button>
            <Button>生成验证报告</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Requirements List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">待验证需求</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {requirements.map((req) => (
                  <div
                    key={req.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedRequirement === req.id
                        ? "bg-primary/10 border-primary"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedRequirement(req.id)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {req.id}
                        </Badge>
                        <div
                          className={`text-xs font-medium ${getValidationScoreColor(
                            req.validationScore
                          )}`}
                        >
                          {req.validationScore}%
                        </div>
                      </div>
                      <h3 className="font-medium text-sm leading-tight">
                        {req.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {req.client}
                      </p>
                      <Badge
                        variant={
                          req.status === "验证通过"
                            ? "default"
                            : req.status === "待验证"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {req.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Validation Details */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Requirement Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>{currentRequirement.title}</span>
                        <Badge variant="outline">{currentRequirement.id}</Badge>
                      </CardTitle>
                      <CardDescription>
                        客户：{currentRequirement.client}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold ${getValidationScoreColor(
                          currentRequirement.validationScore
                        )}`}
                      >
                        {currentRequirement.validationScore}%
                      </div>
                      <p className="text-sm text-muted-foreground">验证得分</p>
                    </div>
                  </div>
                  <Progress
                    value={currentRequirement.validationScore}
                    className="mt-4"
                  />
                </CardHeader>
              </Card>

              <Tabs defaultValue="validation" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="validation">验证检查</TabsTrigger>
                  <TabsTrigger value="comments">评审意见</TabsTrigger>
                  <TabsTrigger value="history">验证历史</TabsTrigger>
                </TabsList>

                <TabsContent value="validation" className="space-y-6">
                  {Object.entries(groupedItems).map(([category, items]) => (
                    <Card key={category}>
                      <CardHeader>
                        <CardTitle className="text-lg">{category}</CardTitle>
                        <CardDescription>
                          {
                            items.filter((item) => item.status === "passed")
                              .length
                          }{" "}
                          / {items.length} 项通过
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start space-x-3 p-3 border rounded-lg"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {getStatusIcon(item.status)}
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="font-medium text-sm">
                                  {item.question}
                                </p>
                                {item.required && (
                                  <Badge variant="outline" className="text-xs">
                                    必填
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  checked={item.status === "passed"}
                                  className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                                />
                                <span
                                  className={`text-sm ${getStatusColor(
                                    item.status
                                  )}`}
                                >
                                  {item.status === "passed"
                                    ? "通过"
                                    : item.status === "failed"
                                    ? "未通过"
                                    : "待检查"}
                                </span>
                              </div>
                              {item.status === "failed" && (
                                <Alert className="mt-2">
                                  <AlertTriangle className="h-4 w-4" />
                                  <AlertDescription className="text-sm">
                                    此项检查未通过，需要补充相关信息
                                  </AlertDescription>
                                </Alert>
                              )}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="comments" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>评审意见</CardTitle>
                      <CardDescription>
                        需求验证过程中的意见和建议
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {currentRequirement.comments.map((comment, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 border rounded-lg"
                        >
                          <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm">{comment}</p>
                            <div className="flex items-center space-x-2 mt-2 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>系统管理员</span>
                              <Calendar className="h-3 w-3" />
                              <span>2024-01-15 10:30</span>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">添加新意见</h4>
                        <Textarea
                          placeholder="输入评审意见..."
                          className="mb-2"
                        />
                        <Button size="sm">添加意见</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>验证历史</CardTitle>
                      <CardDescription>需求验证的历史记录</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-3 border rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">初始验证完成</p>
                            <p className="text-sm text-muted-foreground">
                              完成了6W原则的基础检查
                            </p>
                            <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>张三</span>
                              <Calendar className="h-3 w-3" />
                              <span>2024-01-15 09:00</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 border rounded-lg">
                          <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">发现验证问题</p>
                            <p className="text-sm text-muted-foreground">
                              时间要求和完整性检查未通过
                            </p>
                            <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>李四</span>
                              <Calendar className="h-3 w-3" />
                              <span>2024-01-15 10:30</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 p-3 border rounded-lg">
                          <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">等待补充信息</p>
                            <p className="text-sm text-muted-foreground">
                              已通知需求提出方补充相关信息
                            </p>
                            <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>系统</span>
                              <Calendar className="h-3 w-3" />
                              <span>2024-01-15 11:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-2">
                <Button variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  重新验证
                </Button>
                <Button variant="outline">保存草稿</Button>
                <Button>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  通过验证
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
