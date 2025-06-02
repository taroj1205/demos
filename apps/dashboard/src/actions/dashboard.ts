"use server";

import { revalidatePath } from "next/cache";

// Mock data interfaces
export interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  joinDate: string;
  avatar?: string;
}

export interface SalesData {
  month: string;
  revenue: number;
  orders: number;
}

export interface AnalyticsData {
  totalUsers: number;
  totalRevenue: number;
  totalOrders: number;
  conversionRate: number;
}

export interface MetricData {
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
}

export interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
}

export interface BillingOverview {
  currentPlan: {
    name: string;
    price: number;
    period: string;
  };
  monthlySpend: number;
  nextBilling: string;
  paymentMethod: {
    type: string;
    last4: string;
  };
}

export interface ReportsOverview {
  totalReports: number;
  activeReports: number;
  completedReports: number;
  pendingReports: number;
}

// Simulate loading delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getUsers(): Promise<User[]> {
  await delay(1500); // Simulate API delay
  
  return [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      joinDate: "2024-01-15",
      avatar: "https://avatar.vercel.sh/john"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      status: "active",
      joinDate: "2024-02-20",
      avatar: "https://avatar.vercel.sh/jane"
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "inactive",
      joinDate: "2024-01-10",
      avatar: "https://avatar.vercel.sh/bob"
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      status: "active",
      joinDate: "2024-03-05",
      avatar: "https://avatar.vercel.sh/alice"
    },
    {
      id: "5",
      name: "Charlie Wilson",
      email: "charlie@example.com",
      status: "active",
      joinDate: "2024-02-28",
      avatar: "https://avatar.vercel.sh/charlie"
    }
  ];
}

export async function getSalesData(): Promise<SalesData[]> {
  await delay(1200); // Simulate API delay
  
  return [
    { month: "Jan", revenue: 45000, orders: 120 },
    { month: "Feb", revenue: 52000, orders: 145 },
    { month: "Mar", revenue: 48000, orders: 132 },
    { month: "Apr", revenue: 61000, orders: 167 },
    { month: "May", revenue: 55000, orders: 151 },
    { month: "Jun", revenue: 67000, orders: 189 }
  ];
}

export async function getAnalytics(): Promise<AnalyticsData> {
  await delay(800); // Simulate API delay
  
  return {
    totalUsers: 1247,
    totalRevenue: 328000,
    totalOrders: 904,
    conversionRate: 3.2
  };
}

export async function createUser(formData: FormData) {
  await delay(1000); // Simulate API delay
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  
  console.log("Creating user:", { name, email });
  
  // Revalidate the users page to show updated data
  revalidatePath("/users");
  
  return { success: true, message: "User created successfully!" };
}

export async function updateUserStatus(userId: string, status: "active" | "inactive") {
  await delay(500); // Simulate API delay
  
  console.log("Updating user status:", { userId, status });
  
  // Revalidate the users page to show updated data
  revalidatePath("/users");
  
  return { success: true, message: "User status updated!" };
}

export async function getMonthlyTarget(): Promise<MetricData> {
  await delay(600); // Simulate API delay
  
  return {
    value: "$75,000",
    change: "89% achieved",
    isPositive: true,
    period: "this month"
  };
}

export async function getAverageOrderValue(): Promise<MetricData> {
  await delay(900); // Simulate API delay
  
  return {
    value: "$347",
    change: "+12.3%",
    isPositive: true,
    period: "from last month"
  };
}

export async function getConversionRate(): Promise<MetricData> {
  await delay(750); // Simulate API delay
  
  return {
    value: "3.2%",
    change: "-0.3%",
    isPositive: false,
    period: "from last month"
  };
}

export async function getTopProducts(): Promise<TopProduct[]> {
  await delay(1100); // Simulate API delay
  
  return [
    { name: "Premium Plan", sales: 245, revenue: 24500 },
    { name: "Basic Plan", sales: 189, revenue: 9450 },
    { name: "Enterprise Plan", sales: 67, revenue: 13400 },
    { name: "Starter Plan", sales: 156, revenue: 4680 },
  ];
}

export async function getBillingOverview(): Promise<BillingOverview> {
  await delay(800); // Simulate API delay
  
  return {
    currentPlan: {
      name: "Pro Plan",
      price: 29,
      period: "month"
    },
    monthlySpend: 29.00,
    nextBilling: "Mar 1st, 2024",
    paymentMethod: {
      type: "Visa",
      last4: "4242"
    }
  };
}

export async function getReportsOverview(): Promise<ReportsOverview> {
  await delay(950); // Simulate API delay
  
  return {
    totalReports: 42,
    activeReports: 3,
    completedReports: 38,
    pendingReports: 1
  };
}
