// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  tenantId: string;
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

// Tenant types
export interface Tenant {
  id: string;
  name: string;
  code: string;
  status: 'active' | 'inactive';
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Role types
export interface Role {
  id: string;
  name: string;
  code: string;
  description?: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Menu types
export interface MenuItem {
  id: string;
  name: string;
  path: string;
  icon?: string;
  parentId?: string;
  order: number;
  visible: boolean;
  permissions: string[];
  children?: MenuItem[];
  createdAt: Date;
  updatedAt: Date;
}

// API Config types
export interface ApiConfig {
  id: string;
  name: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  description?: string;
  permissions: string[];
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

// Operation Log types
export interface OperationLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  module: string;
  description: string;
  ip: string;
  userAgent: string;
  requestData?: string;
  responseData?: string;
  status: 'success' | 'error';
  createdAt: Date;
}

// Table types
export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface TableResponse<T> {
  data: T[];
  total: number;
  pageIndex: number;
  pageSize: number;
}
